(function() {
    const logDiv = document.getElementById('log');
    const progressSpan = document.getElementById('progress');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    function addLogLine(msg) {
        const p = document.createElement('p');
        p.textContent = msg;
        logDiv.appendChild(p);
        logDiv.scrollTop = logDiv.scrollHeight;
    }

    function updateProgress(processed, total) {
        progressSpan.textContent = `${processed}/${total}`;
    }

    // Background ile gerçek zamanlı log, ilerleme ve batch bitiş mesajları için bağlantı.
    const port = chrome.runtime.connect({ name: "popup" });
    port.onMessage.addListener((msg) => {
        if (msg.action === "log" && msg.message) {
            addLogLine(msg.message);
        }
        if (msg.action === "progress") {
            updateProgress(msg.processed, msg.total);
        }
        if (msg.action === "batchFinished") {
            // Batch tamamlandığında 2 saniye bekleyip bir sonraki batch'i başlat.
            addLogLine("Batch complete. Starting next batch in 2 seconds...");
            setTimeout(startNextBatch, 2000);
        }
    });

    // Ayarları storage'dan yüklüyoruz.
    chrome.storage.sync.get({
        requestText: "İstek Gönderildi",
        followText: "Takip Et",
        unfollowText: "Takibi Bırak"
    }, function(items) {
        document.getElementById('requestText').value = items.requestText;
        document.getElementById('followText').value = items.followText;
        document.getElementById('unfollowText').value = items.unfollowText;
    });

    // Ayarları kaydet.
    document.getElementById('saveSettings').addEventListener('click', function() {
        const requestText = document.getElementById('requestText').value || "İstek Gönderildi";
        const followText = document.getElementById('followText').value || "Takip Et";
        const unfollowText = document.getElementById('unfollowText').value || "Takibi Bırak";
        chrome.storage.sync.set({
            requestText: requestText,
            followText: followText,
            unfollowText: unfollowText
        }, function() {
            addLogLine("Settings saved: " + JSON.stringify({ requestText, followText, unfollowText }));
        });
    });

    // URL extraction ve batch gönderme fonksiyonu (örneğin 100 URL alıyor)
    function startNextBatch() {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            let activeTab = tabs[0];
            addLogLine(`Extracting URLs from active tab (ID: ${activeTab.id})...`);
            chrome.scripting.executeScript({
                target: { tabId: activeTab.id },
                func: function() {
                    // Belirtilen CSS seçiciye uyan bağlantıları topluyoruz.
                    var hrefs = document.querySelectorAll("div._a706 > div > div > div > div:nth-child(1) > a");
                    // localStorage'den startIndex değerini alıyoruz; yoksa toplam uzunluk.
                    let startIndex = parseInt(localStorage.getItem('startIndex')) || hrefs.length;
                    let nextIndex = startIndex - 20;
                    if (nextIndex < 0) nextIndex = 0;
                    let endIndex = nextIndex + 20;
                    var urls = [];
                    for (let i = nextIndex; i < endIndex && i < hrefs.length; i++) {
                        urls.push(hrefs[i].href);
                    }
                    localStorage.setItem('startIndex', nextIndex.toString());
                    return { urls: urls, newStartIndex: nextIndex, total: hrefs.length };
                }
            }, (results) => {
                if (chrome.runtime.lastError) {
                    addLogLine("Error: " + chrome.runtime.lastError.message);
                    return;
                }
                if (results && results[0] && results[0].result) {
                    let result = results[0].result;
                    addLogLine(`Batch extracted: ${result.urls.length} URLs (New start index: ${result.newStartIndex} / Total: ${result.total}).`);
                    if (result.urls.length === 0) {
                        addLogLine("No more URLs found.");
                        stopButton.style.display = "none";
                        startButton.style.display = "inline-block";
                        return;
                    }
                    // Batch bilgilerini background'a gönderiyoruz.
                    chrome.runtime.sendMessage({
                        action: "startProcessing",
                        urls: result.urls,
                        total: result.total,
                        batchSize: result.urls.length
                    });
                    startButton.style.display = "none";
                    stopButton.style.display = "inline-block";
                }
            });
        });
    }

    // Start butonuna tıklandığında ilk batch başlasın.
    startButton.addEventListener('click', function() {
        startNextBatch();
    });

    // Stop butonuyla işlemleri durdur.
    stopButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({ action: "stopProcessing" }, function() {
            stopButton.style.display = "none";
            startButton.style.display = "inline-block";
        });
    });

    // Popup açıldığında mevcut ilerlemeyi al.
    chrome.runtime.sendMessage({ action: "getProgress" }, function(response) {
        if (response) {
            updateProgress(response.processed, response.total);
        }
    });
})();
