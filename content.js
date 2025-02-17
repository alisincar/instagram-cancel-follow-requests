(function() {
    let requestText = "İstek Gönderildi";
    let followText = "Takip Et";
    let unfollowText = "Takibi Bırak";

    // Ayarları storage'dan 1 kere alıyoruz.
    chrome.storage.sync.get({
        requestText: "İstek Gönderildi",
        followText: "Takip Et",
        unfollowText: "Takibi Bırak"
    }, function(items) {
        requestText = items.requestText;
        followText = items.followText;
        unfollowText = items.unfollowText;
        // Bildir: Ben hazırım, lütfen işlem izni ver.
        chrome.runtime.sendMessage({ action: "ready" });
    });

    function log(message) {
        chrome.runtime.sendMessage({ action: "log", message: message });
    }

    function waitForButtonAndClick(buttonText, callback) {
        let lastLogTime = 0;
        function poll() {
            // Eğer sayfada hata mesajı varsa, kapat.
            if (document.body.innerText.includes("Üzgünüz, bu sayfaya ulaşılamıyor.")) {
                log("Page error: 'Üzgünüz, bu sayfaya ulaşılamıyor.' found. Reporting done.");
                chrome.runtime.sendMessage({ action: "done" });
                return;
            }
            let btn = Array.from(document.querySelectorAll('button'))
                .find(b => b.textContent.trim() === buttonText);
            if (btn) {
                log(`Button "${buttonText}" found. Clicking...`);
                btn.click();
                log(`Button "${buttonText}" clicked.`);
                setTimeout(() => { if (callback) callback(); }, 500);
            } else {
                // Eğer request butonu aranıyorsa ve onun yerine follow butonu varsa,
                // profil zaten unfollow edilmiş.
                if (buttonText === requestText) {
                    let followBtn = Array.from(document.querySelectorAll('button'))
                        .find(b => b.textContent.trim() === followText);
                    if (followBtn) {
                        log("Profile already unfollowed (follow button found). Reporting done.");
                        chrome.runtime.sendMessage({ action: "done" });
                        return;
                    }
                }
                let now = Date.now();
                if (now - lastLogTime >= 2000) {
                    log(`Button "${buttonText}" not found, retrying...`);
                    lastLogTime = now;
                }
                setTimeout(poll, 500);
            }
        }
        poll();
    }

    function doProcessing() {
        log("Processing started in this tab.");
        // Önce request butonunu ara ve tıkla, sonra unfollow butonunu işle.
        waitForButtonAndClick(requestText, function() {
            waitForButtonAndClick(unfollowText, function() {
                log("All actions performed in this tab. Reporting done.");
                chrome.runtime.sendMessage({ action: "done" });
            });
        });
    }

    // Dinle: Eğer background'dan "proceed" mesajı gelirse işlem başlasın.
    chrome.runtime.onMessage.addListener((msg) => {
        if (msg.action === "proceed") {
            doProcessing();
        }
    });
})();
