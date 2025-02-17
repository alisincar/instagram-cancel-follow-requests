let logs = [];
let totalAccounts = 0;
let processedCount = 0;
let batchSize = 0; // Mevcut batch'teki sekme sayısı
let processingActive = false;
let readyQueue = [];
let currentProcessingTab = null;
let popupPort = null;

function broadcastProgress() {
    if (popupPort) {
        popupPort.postMessage({ action: "progress", processed: processedCount, total: totalAccounts });
    }
}

function addLog(logMessage) {
    const timestamp = new Date().toLocaleTimeString();
    const fullMessage = `[${timestamp}] ${logMessage}`;
    logs.push(fullMessage);
    if (popupPort) {
        popupPort.postMessage({ action: "log", message: fullMessage });
    }
}

function processNextReady() {
    if (!processingActive) {
        addLog("Processing has been stopped.");
        return;
    }
    if (readyQueue.length === 0) {
        addLog("No more ready tabs in the queue.");
        return;
    }
    // Sıradaki tab'ı alıp işlemi başlat
    const nextTabId = readyQueue.shift();
    currentProcessingTab = nextTabId;
    addLog(`Sending proceed to tab ${nextTabId}`);
    chrome.tabs.sendMessage(nextTabId, { action: "proceed" });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "log") {
        addLog(message.message);
    } else if (message.action === "startProcessing") {
        processingActive = true;
        processedCount = 0;
        // Gelen batchSize varsa kullanıyoruz, yoksa açılan sekme sayısını alıyoruz.
        batchSize = message.batchSize || message.urls.length;
        totalAccounts = message.total;
        readyQueue = [];
        currentProcessingTab = null;
        addLog(`Starting processing for ${message.urls.length} accounts (Batch size: ${batchSize}).`);
        broadcastProgress();
        // Gelen URL listesine göre sekmeleri açıyoruz.
        message.urls.forEach(url => {
            chrome.tabs.create({ url: url, active: false }, function(tab) {
                addLog(`Opened tab ${tab.id} for URL: ${url}`);
            });
        });
    } else if (message.action === "stopProcessing") {
        processingActive = false;
        readyQueue = [];
        addLog("Processing stopped by user.");
        broadcastProgress();
        sendResponse();
    } else if (message.action === "ready") {
        // İçerik script "ready" olduğunda kuyruğa ekle.
        if (processingActive) {
            addLog(`Tab ${sender.tab.id} reported READY.`);
            readyQueue.push(sender.tab.id);
            if (!currentProcessingTab) {
                processNextReady();
            }
        }
    } else if (message.action === "done") {
        if (sender.tab && sender.tab.id) {
            addLog(`Tab ${sender.tab.id} reported DONE. Closing tab.`);
            chrome.tabs.remove(sender.tab.id, () => {
                processedCount++;
                broadcastProgress();
                currentProcessingTab = null;
                if (processedCount < batchSize) {
                    processNextReady();
                } else {
                    addLog("Batch processing complete.");
                    if (popupPort) {
                        popupPort.postMessage({ action: "batchFinished" });
                    }
                }
            });
        }
    } else if (message.action === "getProgress") {
        sendResponse({ processed: processedCount, total: totalAccounts });
    }
});

chrome.runtime.onConnect.addListener((port) => {
    if (port.name === "popup") {
        popupPort = port;
        logs.forEach(logMsg => {
            popupPort.postMessage({ action: "log", message: logMsg });
        });
        popupPort.postMessage({ action: "progress", processed: processedCount, total: totalAccounts });
        port.onDisconnect.addListener(() => { popupPort = null; });
    }
});
