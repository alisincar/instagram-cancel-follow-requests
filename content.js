(function() {
    let requestText = "İstek Gönderildi";
    let followText = "Takip Et";
    let unfollowText = "Takibi Bırak";
    let readySent = false;
    let processingStarted = false;
    let processingLoopActive = false;
    let processingCompleted = false;
    let currentStep = "idle";
    let lastDonePayload = null;
    let cachedProfileInfo = null;
    let readyDispatchSequence = 0;
    let readyRefreshObserver = null;
    let readyRefreshTimeoutId = null;
    const unavailableSnippets = [
        "bu sayfaya ulaşılamıyor",
        "page isn't available",
        "pagina no está disponible",
        "seite ist nicht verfügbar",
        "यह पेज उपलब्ध नहीं है"
    ];

    chrome.storage.sync.get({
        requestText: "İstek Gönderildi",
        followText: "Takip Et",
        unfollowText: "Takibi Bırak"
    }, function(items) {
        requestText = items.requestText;
        followText = items.followText;
        unfollowText = items.unfollowText;
        notifyReady();
    });

    function log(message) {
        chrome.runtime.sendMessage({ action: "log", message: message });
    }

    async function buildReadySignal() {
        const hasActionableUi = () => hasActionableUiState();

        if (!hasActionableUi()) {
            await waitForUiSignal(hasActionableUi, 2500);
        }

        return collectReadySignal();
    }

    function stopReadyRefreshObserver() {
        if (readyRefreshObserver) {
            readyRefreshObserver.disconnect();
            readyRefreshObserver = null;
        }

        if (readyRefreshTimeoutId !== null) {
            clearTimeout(readyRefreshTimeoutId);
            readyRefreshTimeoutId = null;
        }
    }

    function armReadyRefreshObserver() {
        if (readyRefreshObserver || processingStarted || processingCompleted) {
            return;
        }

        const root = document.documentElement || document.body;
        if (!root) {
            return;
        }

        const checkForActionableUi = () => {
            if (processingStarted || processingCompleted) {
                stopReadyRefreshObserver();
                return;
            }

            if (!hasActionableUiState()) {
                return;
            }

            stopReadyRefreshObserver();
            notifyReady(true);
        };

        readyRefreshObserver = new MutationObserver(checkForActionableUi);
        readyRefreshObserver.observe(root, {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true
        });

        readyRefreshTimeoutId = setTimeout(() => {
            stopReadyRefreshObserver();
        }, 5000);

        checkForActionableUi();
    }

    function notifyReady(force = false) {
        if (readySent && !force) {
            return;
        }

        readySent = true;
        const sequence = ++readyDispatchSequence;

        void (async () => {
            const readySignal = await buildReadySignal();
            if (sequence !== readyDispatchSequence) {
                return;
            }

            if (hasActionableUiState(readySignal.uiState)) {
                stopReadyRefreshObserver();
            } else if (!processingStarted && !processingCompleted) {
                armReadyRefreshObserver();
            }

            chrome.runtime.sendMessage({
                action: "ready",
                readySignal
            });
        })();
    }

    function normalizeText(value) {
        return (value || "").replace(/\s+/g, " ").trim().toLowerCase();
    }

    function findButtonByText(buttonText) {
        const targetText = normalizeText(buttonText);
        return Array.from(document.querySelectorAll('button, div[role="button"], span[role="button"], a[role="button"]'))
            .find(element => normalizeText(element.textContent) === targetText);
    }

    function findButtonContainingText(buttonText) {
        const targetText = normalizeText(buttonText);
        if (!targetText) {
            return null;
        }

        return Array.from(document.querySelectorAll('button, div[role="button"], span[role="button"], a[role="button"]'))
            .find(element => normalizeText(element.textContent).includes(targetText));
    }

    function isUnavailablePage() {
        const bodyText = normalizeText(document.body ? document.body.innerText : "");
        return unavailableSnippets.some(snippet => bodyText.includes(normalizeText(snippet)));
    }

    function reportDone(payload = {}) {
        if (processingCompleted) {
            return;
        }

        stopReadyRefreshObserver();
        processingCompleted = true;
        currentStep = "completed";
        lastDonePayload = {
            ...payload,
            url: window.location.href
        };
        chrome.runtime.sendMessage({
            action: "done",
            ...payload
        });
    }

    function collectUiState() {
        const requestVisible = Boolean(findButtonByText(requestText));
        const unfollowVisible = Boolean(findButtonByText(unfollowText));
        const followVisible = Boolean(findButtonByText(followText) || findButtonContainingText(followText));

        return {
            requestVisible,
            followVisible,
            unfollowVisible
        };
    }

    function hasActionableUiState(uiState = collectUiState()) {
        return Boolean(uiState.requestVisible || uiState.followVisible || uiState.unfollowVisible);
    }

    function updateProcessingStep(step) {
        if (!step || currentStep === step || processingCompleted) {
            return;
        }

        currentStep = step;
        chrome.runtime.sendMessage({
            action: "processingStep",
            step,
            uiState: collectUiState()
        });
    }

    function randomBetween(min, max) {
        if (max <= min) {
            return min;
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function collectReadySignal() {
        const uiState = collectUiState();

        return {
            readyState: document.readyState,
            navigationAgeMs: Math.round(performance.now()),
            primaryButtonVisible: uiState.requestVisible || uiState.unfollowVisible,
            secondaryButtonVisible: uiState.unfollowVisible || uiState.followVisible,
            shouldSkipClickDelay: uiState.followVisible && !uiState.requestVisible && !uiState.unfollowVisible,
            pageUnavailable: isUnavailablePage(),
            uiState
        };
    }

    function waitForUiSignal(checker, timeoutMs = 2200) {
        return new Promise(resolve => {
            if (processingCompleted) {
                resolve(false);
                return;
            }

            if (checker()) {
                resolve(true);
                return;
            }

            let settled = false;
            const root = document.documentElement || document.body;
            let observer = null;
            let intervalId = null;
            let timeoutId = null;

            const finish = matched => {
                if (settled) {
                    return;
                }

                settled = true;
                if (observer) {
                    observer.disconnect();
                }
                if (intervalId) {
                    clearInterval(intervalId);
                }
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                resolve(Boolean(matched));
            };

            const check = () => {
                if (processingCompleted) {
                    finish(false);
                    return;
                }

                if (checker()) {
                    finish(true);
                }
            };

            if (root) {
                observer = new MutationObserver(check);
                observer.observe(root, {
                    childList: true,
                    subtree: true,
                    attributes: true,
                    characterData: true
                });
            }

            intervalId = setInterval(check, 250);
            timeoutId = setTimeout(() => finish(false), timeoutMs);
            check();
        });
    }

    async function waitAfterClick(buttonText) {
        if (buttonText === requestText) {
            await waitForUiSignal(() => (
                Boolean(findButtonByText(unfollowText)) ||
                !findButtonByText(requestText)
            ), 2400);
            return;
        }

        if (buttonText === unfollowText) {
            await waitForUiSignal(() => (
                Boolean(findButtonByText(followText)) ||
                !findButtonByText(unfollowText)
            ), 2200);
            return;
        }

        await new Promise(resolve => setTimeout(resolve, 500));
    }

    function getPollDelayMs(tries) {
        const baseDelay = 260 + (Math.min(tries, 6) * 90);
        return Math.min(1150, baseDelay + randomBetween(0, 170));
    }

    async function waitForButtonAndClick(buttonText, maxRetries = 15) {
        let lastLogTime = 0;

        for (let tries = 1; tries <= maxRetries; tries += 1) {
            if (processingCompleted) {
                return { status: "completed" };
            }

            if (isUnavailablePage()) {
                log("Page error detected. Reporting done.");
                reportDone({ resolvedReason: "page_unavailable" });
                return { status: "resolved" };
            }

            let btn = findButtonByText(buttonText);

            if (btn) {
                log(`Button "${buttonText}" found. Clicking...`);
                btn.click();
                updateProcessingStep(buttonText === requestText ? "request_clicked" : "unfollow_clicked");
                await waitAfterClick(buttonText);
                return { status: "clicked" };
            } else {
                if (buttonText === requestText) {
                    let followBtn = findButtonByText(followText);
                    if (!followBtn) {
                        followBtn = findButtonContainingText(followText);
                    }
                    if (followBtn) {
                        log("Profile already unfollowed (follow button found). Reporting done.");
                        reportDone({
                            resolvedReason: "already_unfollowed",
                            profileInfo: {
                                profileUrl: window.location.href,
                                currentStatus: "takip_edilmiyor"
                            }
                        });
                        return { status: "resolved" };
                    }
                }
                
                if (tries === maxRetries) {
                    log(`Max retries reached for "${buttonText}". Skipping.`);
                    if (buttonText !== requestText) {
                        log("Assuming request click was handled directly without modal. Done.");
                        return { status: "assumed_done" };
                    } else {
                        reportDone({
                            resolvedReason: "request_button_missing",
                            profileInfo: {
                                profileUrl: window.location.href,
                                currentStatus: "bilinmiyor"
                            }
                        });
                        return { status: "resolved" };
                    }
                }

                let now = Date.now();
                if (now - lastLogTime >= 2000) {
                    log(`Button "${buttonText}" not found, retrying... (${tries}/${maxRetries})`);
                    lastLogTime = now;
                }

                await new Promise(resolve => setTimeout(resolve, getPollDelayMs(tries)));
            }
        }
    }

    function extractProfileInfoSync() {
        try {
            let usernameElement = document.querySelector('main header h2[dir="auto"], main header h1');
            if (!usernameElement) {
                usernameElement = document.querySelector('header h2[dir="auto"], header h1');
            }
            const username = usernameElement ? usernameElement.textContent.trim() : null;
            
            let followerCount = null;
            const followerElements = document.querySelectorAll('a[href*="followers"] span, a[href="#"] span');
            for (let element of followerElements) {
                const text = element.textContent.trim();
                if (text.includes('takipçi') || text.match(/^\d+$/)) {
                    const countElement = element.querySelector('span');
                    if (countElement) {
                        followerCount = countElement.textContent.trim();
                        break;
                    }
                }
            }
            
            let followingCount = null;
            const followingElements = document.querySelectorAll('a[href*="following"] span, a[href="#"] span');
            for (let element of followingElements) {
                const text = element.textContent.trim();
                if (text.includes('takip') && !text.includes('takipçi')) {
                    const countElement = element.querySelector('span');
                    if (countElement) {
                        followingCount = countElement.textContent.trim();
                        break;
                    }
                }
            }
            
            let currentStatus = "bilinmiyor";
            const requestBtn = findButtonByText(requestText);
            const followBtn = findButtonByText(followText) || findButtonContainingText(followText);
            const unfollowBtn = findButtonByText(unfollowText);
            
            if (requestBtn) {
                currentStatus = "istek_gonderildi";
            } else if (followBtn) {
                currentStatus = "takip_edilmiyor";
            } else if (unfollowBtn) {
                currentStatus = "takip_ediliyor";
            }
            
            return {
                username,
                followerCount,
                followingCount,
                profileUrl: window.location.href,
                currentStatus
            };
        } catch (error) {
            log("Error extracting profile info: " + error.message);
            return null;
        }
    }

    async function extractProfileInfo() {
        try {
            const basicInfo = extractProfileInfoSync();
            if (!basicInfo) return null;

            return basicInfo;
        } catch (error) {
            log("Error extracting profile info: " + error.message);
            return null;
        }
    }

    function getNextProcessingPhase() {
        const uiState = collectUiState();

        if (uiState.followVisible && !uiState.requestVisible && !uiState.unfollowVisible) {
            return "resolved";
        }

        if (uiState.unfollowVisible && !uiState.requestVisible) {
            return "unfollow";
        }

        return "request";
    }

    async function doProcessing() {
        if (processingCompleted || processingLoopActive) {
            return;
        }

        processingLoopActive = true;

        try {
            if (!processingStarted) {
                processingStarted = true;
                stopReadyRefreshObserver();
                updateProcessingStep("started");
            }

            if (!cachedProfileInfo) {
            cachedProfileInfo = await extractProfileInfo();
            }

            const nextPhase = getNextProcessingPhase();
            if (nextPhase === "resolved") {
                reportDone({
                    resolvedReason: "already_unfollowed",
                    profileInfo: cachedProfileInfo
                });
                return;
            }

            if (nextPhase === "request") {
                updateProcessingStep("request_phase");
                const requestStep = await waitForButtonAndClick(requestText, 16);
                if (processingCompleted || requestStep?.status === "resolved") {
                    return;
                }
            }

            updateProcessingStep("unfollow_phase");
            const unfollowStep = await waitForButtonAndClick(unfollowText, 12);
            if (processingCompleted || unfollowStep?.status === "resolved") {
                return;
            }

            if (cachedProfileInfo) {
                cachedProfileInfo.currentStatus = "takip_edilmiyor";
                cachedProfileInfo.actionCompleted = true;
            }

            updateProcessingStep("completed");
            reportDone({
                resolvedReason: "request_cancelled",
                profileInfo: cachedProfileInfo
            });
        } finally {
            processingLoopActive = false;
        }
    }

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (msg.action === "proceed") {
            doProcessing();
            return;
        }

        if (msg.action === "ensureReady") {
            notifyReady(true);
            sendResponse({ ok: true });
            return true;
        }

        if (msg.action === "syncState") {
            sendResponse({
                started: processingStarted,
                completed: processingCompleted,
                lastDonePayload: lastDonePayload,
                currentStep: currentStep,
                pageUnavailable: isUnavailablePage(),
                uiState: collectUiState(),
                profileInfo: cachedProfileInfo,
                url: window.location.href
            });
            return true;
        }
    });
})();
