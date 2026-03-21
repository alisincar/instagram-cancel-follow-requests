const bgDict = {
  tr: {
    done: "🎉 Bitti! Toplam İşlenen:",
    rFinished: "🛑 TUR BİTTİ!",
    rWait: "⏳ Sonraki tur için dinleniyor",
    cPause: "⏸️ Kısa tempo molası",
    openBg: "Açıldı (Gizli):",
    openFg: "Açıldı (Göz Önünde):",
    waitTab: "Geçiş için bekleniyor:",
    waitClick: "Tıklama için bekleme:",
    start: "🚀 GÖREV BAŞLATILDI:",
    mode: "Mod:",
    action: "İşlem:",
    manualTab: "Sekme açıldı (Manuel mod).",
    stop: "🛑 İşlem durduruldu.",
    askCont: "Kullanıcı kararı bekleniyor...",
    resume: "▶️ Devam ediliyor...",
    tabClosed: "Aktif sekme kapandı. Aynı profil tekrar deneniyor...",
    createFail: "Sekme açılamadı. Aynı profil tekrar denenecek:",
    retrying: "🔁 Yeniden deneme",
    retryLimit: "⛔ Maksimum tekrar deneme aşıldı. İşlem durduruldu:",
    mBg: "Arka Plan",
    mFg: "Yeni Sekme",
    mOto: "Oto",
    mMan: "Manuel"
  },
  en: {
    done: "🎉 Finished! Total:",
    rFinished: "🛑 ROUND FINISHED!",
    rWait: "⏳ Resting for next round",
    cPause: "⏸️ Short pacing pause",
    openBg: "Opened (Hidden):",
    openFg: "Opened (Foreground):",
    waitTab: "Waiting transition:",
    waitClick: "Delay for click:",
    start: "🚀 TASK STARTED:",
    mode: "Mode:",
    action: "Action:",
    manualTab: "Tab opened (Manual mode).",
    stop: "🛑 Process stopped.",
    askCont: "Waiting for user confirmation...",
    resume: "▶️ Continuing...",
    tabClosed: "Active tab closed. Retrying the same profile...",
    createFail: "Tab could not be opened. Retrying the same profile:",
    retrying: "🔁 Retrying",
    retryLimit: "⛔ Maximum retries reached. Process stopped:",
    mBg: "Hidden",
    mFg: "New Tab",
    mOto: "Auto",
    mMan: "Manual"
  },
  es: {
    done: "🎉 ¡Terminado! Total:",
    rFinished: "🛑 ¡RONDA TERMINADA!",
    rWait: "⏳ Descansando",
    cPause: "⏸️ Pausa corta",
    openBg: "Abierto (Oculto):",
    openFg: "Abierto (Frente):",
    waitTab: "Esperando transición:",
    waitClick: "Pausa manual:",
    start: "🚀 TAREA INICIADA:",
    mode: "Modo:",
    action: "Acción:",
    manualTab: "Pestaña abierta (Manual).",
    stop: "🛑 Proceso detenido.",
    askCont: "Esperando confirmación...",
    resume: "▶️ Continuando...",
    tabClosed: "La pestaña activa se cerró. Reintentando el mismo perfil...",
    createFail: "No se pudo abrir la pestaña. Reintentando el mismo perfil:",
    retrying: "🔁 Reintentando",
    retryLimit: "⛔ Se alcanzó el máximo de reintentos. Proceso detenido:",
    mBg: "Oculto",
    mFg: "Pestaña",
    mOto: "Auto",
    mMan: "Manual"
  },
  de: {
    done: "🎉 Fertig! Verarbeitet:",
    rFinished: "🛑 RUNDE BEENDET!",
    rWait: "⏳ Pause für nächste Runde",
    cPause: "⏸️ Kurze Pause",
    openBg: "Geöffnet (Versteckt):",
    openFg: "Geöffnet (Sichtbar):",
    waitTab: "Warte auf Übergang:",
    waitClick: "Warte auf Klick:",
    start: "🚀 AUFGABE GESTARTET:",
    mode: "Modus:",
    action: "Aktion:",
    manualTab: "Tab geöffnet (Manuell).",
    stop: "🛑 Prozess gestoppt.",
    askCont: "Warte auf Bestätigung...",
    resume: "▶️ Fortsetzen...",
    tabClosed: "Der aktive Tab wurde geschlossen. Dasselbe Profil wird erneut versucht...",
    createFail: "Tab konnte nicht geöffnet werden. Dasselbe Profil wird erneut versucht:",
    retrying: "🔁 Neuer Versuch",
    retryLimit: "⛔ Maximale Wiederholungen erreicht. Prozess gestoppt:",
    mBg: "Versteckt",
    mFg: "Neuer Tab",
    mOto: "Auto",
    mMan: "Manuell"
  },
  hi: {
    done: "🎉 समाप्त! कुल:",
    rFinished: "🛑 राउंड समाप्त!",
    rWait: "⏳ अगले राउंड के लिए आराम",
    cPause: "⏸️ छोटा विराम",
    openBg: "खोला (छिपा):",
    openFg: "खोला (सामने):",
    waitTab: "प्रतीक्षा:",
    waitClick: "क्लिक प्रतीक्षा:",
    start: "🚀 कार्य शुरू:",
    mode: "मोड:",
    action: "कार्रवाई:",
    manualTab: "टैब खुला (मैनुअल मोड)।",
    stop: "🛑 प्रक्रिया रोकी गई।",
    askCont: "पुष्टि की प्रतीक्षा...",
    resume: "▶️ जारी...",
    tabClosed: "सक्रिय टैब बंद हो गया। उसी प्रोफ़ाइल को फिर से आजमाया जाएगा...",
    createFail: "टैब नहीं खुला। उसी प्रोफ़ाइल को फिर से आजमाया जाएगा:",
    retrying: "🔁 फिर से प्रयास",
    retryLimit: "⛔ अधिकतम पुनः प्रयास पूरे हुए। प्रक्रिया रोक दी गई:",
    mBg: "छिपा",
    mFg: "टैब",
    mOto: "ऑटो",
    mMan: "मैनुअल"
  }
};

const STEP_ALARM_NAME = "runtime-step";
const WATCHDOG_ALARM_NAME = "processing-watchdog";
const MAX_LOGS = 2000;
const MAX_LAST_SESSION_LOGS = 400;
const MAX_HISTORY_ITEMS = 20000;
const MAX_RECOVERY_RETRIES = 5;
const STALLED_PROCESSING_TIMEOUT_MS = 45000;
const PROCESSING_STEPS = new Set([
  "idle",
  "opening",
  "ready",
  "started",
  "request_phase",
  "request_clicked",
  "unfollow_phase",
  "unfollow_clicked",
  "completed"
]);

const STORAGE_KEYS = {
  state: "runtimeState",
  logs: "runtimeLogs",
  progress: "runtimeProgress",
  lastSession: "lastSessionSnapshot",
  history: "unfollowHistory",
  resolvedProfiles: "resolvedProfiles"
};

const RESERVED_PROFILE_PATHS = new Set([
  "accounts",
  "about",
  "api",
  "challenge",
  "developer",
  "direct",
  "download",
  "emails",
  "explore",
  "legal",
  "oauth",
  "p",
  "privacy",
  "reel",
  "reels",
  "stories",
  "terms",
  "web"
]);

const DEFAULT_STATE = {
  currentLang: "en",
  processingActive: false,
  currentWorkMode: "bg",
  currentActionMode: "auto",
  queueUrls: [],
  nextIndex: 0,
  totalAccounts: 0,
  processedCount: 0,
  sessionProcessedCount: 0,
  nextCadencePauseAt: 0,
  currentProcessingTab: null,
  currentProcessingUrl: null,
  currentProcessingWindowId: null,
  currentRetryCount: 0,
  currentProcessingStep: "idle",
  currentStepUpdatedAt: 0,
  isWaitingForUser: false,
  waitingReason: null,
  waitingUntil: 0,
  blockedUrl: null,
  blockedReason: null,
  lastStartedAt: 0,
  lastUpdatedAt: 0
};

let t = bgDict.en;
let state = createDefaultState();
let logs = [];
let lastSessionSnapshot = null;
let popupPort = null;
let clickDelayScheduledTabId = null;

function randomBetween(min, max) {
  if (max <= min) {
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parseDelaySeconds(rawValue, fallbackSeconds) {
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value <= 0) {
    return fallbackSeconds;
  }

  return value;
}

function parsePositiveNumber(rawValue, fallbackValue) {
  const value = Number(rawValue);
  if (!Number.isFinite(value) || value <= 0) {
    return fallbackValue;
  }

  return value;
}

function formatDelayMs(delayMs) {
  const seconds = delayMs / 1000;
  return Number.isInteger(seconds) ? `${seconds}s` : `${seconds.toFixed(1)}s`;
}

function getAdaptiveTabDelayMs(baseDelaySeconds) {
  const baseMs = parseDelaySeconds(baseDelaySeconds, 2) * 1000;
  const lowerBound = Math.max(900, Math.round(baseMs * 0.55));
  const upperBound = Math.max(lowerBound + 200, Math.round(baseMs * 1.1));
  const cadenceNudgeMs = state.sessionProcessedCount > 0 && state.sessionProcessedCount % 12 === 0
    ? randomBetween(250, 800)
    : 0;
  const retryPenaltyMs = state.currentRetryCount > 0
    ? randomBetween(450, 1100) * Math.min(state.currentRetryCount, 3)
    : 0;

  return clampNumber(
    randomBetween(lowerBound, upperBound) + cadenceNudgeMs + retryPenaltyMs,
    900,
    Math.max(2500, baseMs + 2200)
  );
}

function getAdaptiveClickDelayMs(baseDelaySeconds, readySignal = {}) {
  const baseMs = parseDelaySeconds(baseDelaySeconds, 4) * 1000;
  const navAgeMs = clampNumber(readySignal?.navigationAgeMs, 0, 15000);
  const primaryButtonVisible = Boolean(readySignal?.primaryButtonVisible);
  const secondaryButtonVisible = Boolean(readySignal?.secondaryButtonVisible);
  const readyStateComplete = readySignal?.readyState === "complete";

  let lowerFactor = primaryButtonVisible ? 0.4 : 0.58;
  let upperFactor = secondaryButtonVisible ? 0.72 : 0.95;

  if (!readyStateComplete || navAgeMs < 1400) {
    lowerFactor += 0.12;
    upperFactor += 0.14;
  } else if (navAgeMs > 4500 && primaryButtonVisible) {
    lowerFactor -= 0.05;
    upperFactor -= 0.06;
  }

  if (state.currentRetryCount > 0) {
    lowerFactor += 0.12;
    upperFactor += 0.18;
  }

  const normalizedLowerFactor = clampNumber(lowerFactor, 0.35, 0.98);
  const normalizedUpperFactor = clampNumber(Math.max(upperFactor, normalizedLowerFactor + 0.06), 0.45, 1.15);
  const lowerBound = Math.max(900, Math.round(baseMs * normalizedLowerFactor));
  const upperBound = Math.max(lowerBound + 220, Math.round(baseMs * normalizedUpperFactor));
  const readinessJitterMs = primaryButtonVisible
    ? randomBetween(120, 380)
    : randomBetween(250, 650);

  return clampNumber(
    randomBetween(lowerBound, upperBound) + readinessJitterMs,
    900,
    Math.max(2800, baseMs + 1800)
  );
}

function getAdaptiveSleepMs(baseMinutes) {
  const baseMs = parsePositiveNumber(baseMinutes, 2) * 60000;
  const completedBatches = Math.max(1, Math.floor(Math.max(state.processedCount, 1) / Math.max(state.sessionProcessedCount, 1)));
  const lowerBound = Math.max(60000, Math.round(baseMs * 0.75));
  const upperBound = Math.max(lowerBound + 10000, Math.round(baseMs * 1.12));
  const longRunNudgeMs = completedBatches % 5 === 0
    ? randomBetween(20000, 45000)
    : 0;

  return clampNumber(
    randomBetween(lowerBound, upperBound) + longRunNudgeMs,
    60000,
    Math.max(180000, baseMs + 60000)
  );
}

function getNextCadencePauseTarget(currentCount = 0) {
  return Math.max(currentCount, 0) + randomBetween(9, 14);
}

function getAdaptiveCadencePauseMs() {
  const lowerBound = state.sessionProcessedCount >= 20 ? 12000 : 8000;
  const upperBound = state.sessionProcessedCount >= 20 ? 26000 : 18000;
  const retryPenaltyMs = state.currentRetryCount > 0
    ? randomBetween(1500, 4500) * Math.min(state.currentRetryCount, 2)
    : 0;
  const rhythmNudgeMs = state.sessionProcessedCount > 0 && state.sessionProcessedCount % 3 === 0
    ? randomBetween(1200, 3500)
    : 0;

  return clampNumber(
    randomBetween(lowerBound, upperBound) + retryPenaltyMs + rhythmNudgeMs,
    8000,
    35000
  );
}

function createDefaultState() {
  return {
    ...DEFAULT_STATE,
    queueUrls: []
  };
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return min;
  }

  return Math.min(Math.max(number, min), max);
}

function normalizeProfileUrl(url) {
  if (!url || typeof url !== "string") {
    return null;
  }

  try {
    const parsed = new URL(url.trim());
    const hostname = parsed.hostname.replace(/^www\./, "").toLowerCase();
    if (!hostname.endsWith("instagram.com")) {
      return null;
    }

    const firstSegment = parsed.pathname.split("/").filter(Boolean)[0];
    if (!firstSegment || RESERVED_PROFILE_PATHS.has(firstSegment.toLowerCase())) {
      return null;
    }

    return `https://www.instagram.com/${firstSegment.toLowerCase()}`;
  } catch (error) {
    return null;
  }
}

function normalizeProfileUrls(urls) {
  return [...new Set(
    (Array.isArray(urls) ? urls : [])
      .map(url => normalizeProfileUrl(url))
      .filter(Boolean)
  )];
}

function sanitizeRuntimeState(rawState) {
  const queueUrls = normalizeProfileUrls(rawState?.queueUrls);
  const storedTotalAccounts = clampNumber(rawState?.totalAccounts, 0, Math.max(queueUrls.length, Number(rawState?.totalAccounts) || 0));
  const totalAccounts = Math.max(queueUrls.length, storedTotalAccounts);
  const processedCount = clampNumber(rawState?.processedCount, 0, totalAccounts);
  let nextIndex = clampNumber(rawState?.nextIndex, 0, Math.max(totalAccounts, queueUrls.length));
  if (nextIndex < processedCount) {
    nextIndex = processedCount;
  }

  const sanitized = {
    ...createDefaultState(),
    ...rawState,
    queueUrls,
    currentLang: bgDict[rawState?.currentLang] ? rawState.currentLang : "en",
    currentWorkMode: rawState?.currentWorkMode === "bg" ? "bg" : "manual_sequential",
    currentActionMode: rawState?.currentActionMode === "manual" ? "manual" : "auto",
    nextIndex,
    totalAccounts,
    processedCount,
    sessionProcessedCount: clampNumber(rawState?.sessionProcessedCount, 0, totalAccounts),
    nextCadencePauseAt: clampNumber(
      rawState?.nextCadencePauseAt,
      0,
      Math.max(totalAccounts + 20, Number(rawState?.nextCadencePauseAt) || 0, 20)
    ) || (Boolean(rawState?.processingActive) ? clampNumber(rawState?.sessionProcessedCount, 0, totalAccounts) + 10 : 0),
    currentProcessingTab: Number.isInteger(rawState?.currentProcessingTab) ? rawState.currentProcessingTab : null,
    currentProcessingUrl: normalizeProfileUrl(rawState?.currentProcessingUrl),
    currentProcessingWindowId: Number.isInteger(rawState?.currentProcessingWindowId) ? rawState.currentProcessingWindowId : null,
    currentRetryCount: clampNumber(rawState?.currentRetryCount, 0, MAX_RECOVERY_RETRIES),
    currentProcessingStep: PROCESSING_STEPS.has(rawState?.currentProcessingStep) ? rawState.currentProcessingStep : "idle",
    currentStepUpdatedAt: Number.isFinite(rawState?.currentStepUpdatedAt) ? rawState.currentStepUpdatedAt : 0,
    isWaitingForUser: Boolean(rawState?.isWaitingForUser),
    waitingReason: ["tabDelay", "clickDelay", "sleep", "cadencePause"].includes(rawState?.waitingReason) ? rawState.waitingReason : null,
    waitingUntil: Number.isFinite(rawState?.waitingUntil) ? rawState.waitingUntil : 0,
    blockedUrl: normalizeProfileUrl(rawState?.blockedUrl),
    blockedReason: typeof rawState?.blockedReason === "string" ? rawState.blockedReason : null,
    processingActive: Boolean(rawState?.processingActive),
    lastStartedAt: Number.isFinite(rawState?.lastStartedAt) ? rawState.lastStartedAt : 0,
    lastUpdatedAt: Number.isFinite(rawState?.lastUpdatedAt) ? rawState.lastUpdatedAt : 0
  };

  if (!sanitized.processingActive) {
    sanitized.currentProcessingTab = null;
    sanitized.currentProcessingUrl = null;
    sanitized.currentRetryCount = 0;
    sanitized.currentProcessingStep = "idle";
    sanitized.currentStepUpdatedAt = 0;
    sanitized.waitingReason = null;
    sanitized.waitingUntil = 0;
    sanitized.isWaitingForUser = false;
    sanitized.nextCadencePauseAt = 0;
  }

  if (!sanitized.currentProcessingUrl) {
    sanitized.currentProcessingTab = null;
  }

  return sanitized;
}

function sanitizeLogs(entries) {
  const stripImages = value => value.replace(/<img\b[^>]*>/gi, "");

  return (Array.isArray(entries) ? entries : [])
    .filter(entry => typeof entry === "string" && entry.trim() !== "")
    .map(entry => stripImages(entry))
    .slice(-MAX_LOGS);
}

function getSessionStatus() {
  if (state.processingActive) {
    return "running";
  }

  if (state.totalAccounts > 0 && state.processedCount >= state.totalAccounts) {
    return "completed";
  }

  if (logs.length > 0) {
    return "stopped";
  }

  return "idle";
}

function makeProgressPayload() {
  return {
    action: "progress",
    processed: state.processedCount,
    total: state.totalAccounts,
    processingActive: state.processingActive,
    isWaitingForUser: state.isWaitingForUser,
    hasLogs: logs.length > 0,
    sessionStatus: getSessionStatus(),
    currentProcessingStep: state.currentProcessingStep,
    blockedUrl: state.blockedUrl,
    blockedReason: state.blockedReason,
    lastUpdatedAt: state.lastUpdatedAt || Date.now()
  };
}

function sanitizeProgressPayload(rawProgress) {
  const safeProgress = rawProgress && typeof rawProgress === "object" ? rawProgress : {};

  return {
    action: "progress",
    processed: clampNumber(safeProgress.processed, 0, Number.MAX_SAFE_INTEGER),
    total: clampNumber(safeProgress.total, 0, Number.MAX_SAFE_INTEGER),
    processingActive: Boolean(safeProgress.processingActive),
    isWaitingForUser: Boolean(safeProgress.isWaitingForUser),
    hasLogs: Boolean(safeProgress.hasLogs),
    sessionStatus: typeof safeProgress.sessionStatus === "string" ? safeProgress.sessionStatus : "idle",
    currentProcessingStep: PROCESSING_STEPS.has(safeProgress.currentProcessingStep) ? safeProgress.currentProcessingStep : "idle",
    blockedUrl: normalizeProfileUrl(safeProgress.blockedUrl),
    blockedReason: typeof safeProgress.blockedReason === "string" ? safeProgress.blockedReason : null,
    lastUpdatedAt: Number.isFinite(safeProgress.lastUpdatedAt) ? safeProgress.lastUpdatedAt : 0
  };
}

function hasMeaningfulProgress(progressPayload, logEntries = logs) {
  const safeProgress = sanitizeProgressPayload(progressPayload || makeProgressPayload());
  const safeLogs = sanitizeLogs(logEntries);

  return (
    safeProgress.processingActive ||
    safeProgress.total > 0 ||
    safeProgress.processed > 0 ||
    safeLogs.length > 0 ||
    safeProgress.sessionStatus !== "idle" ||
    Boolean(safeProgress.blockedUrl)
  );
}

function sanitizeLastSessionSnapshot(rawSnapshot) {
  if (!rawSnapshot || typeof rawSnapshot !== "object") {
    return null;
  }

  const progress = sanitizeProgressPayload(rawSnapshot.progress);
  const snapshotLogs = sanitizeLogs(rawSnapshot.logs).slice(-MAX_LAST_SESSION_LOGS);
  progress.hasLogs = snapshotLogs.length > 0 || progress.hasLogs;

  if (!hasMeaningfulProgress(progress, snapshotLogs)) {
    return null;
  }

  return {
    progress,
    logs: snapshotLogs,
    savedAt: Number.isFinite(rawSnapshot.savedAt) ? rawSnapshot.savedAt : (progress.lastUpdatedAt || Date.now())
  };
}

function buildLastSessionSnapshot(progressPayload = null, logEntries = logs) {
  const progress = sanitizeProgressPayload(progressPayload || makeProgressPayload());
  const snapshotLogs = sanitizeLogs(logEntries).slice(-MAX_LAST_SESSION_LOGS);
  progress.hasLogs = snapshotLogs.length > 0 || progress.hasLogs;

  if (!hasMeaningfulProgress(progress, snapshotLogs)) {
    return null;
  }

  return {
    progress,
    logs: snapshotLogs,
    savedAt: Date.now()
  };
}

async function persistLastSessionSnapshot(progressPayload = null, logEntries = logs) {
  const snapshot = buildLastSessionSnapshot(progressPayload, logEntries);
  if (!snapshot) {
    return;
  }

  lastSessionSnapshot = snapshot;

  try {
    await chrome.storage.local.set({ [STORAGE_KEYS.lastSession]: snapshot });
  } catch (error) {
    const compactSnapshot = {
      ...snapshot,
      logs: snapshot.logs.slice(-100)
    };

    lastSessionSnapshot = compactSnapshot;

    try {
      await chrome.storage.local.set({ [STORAGE_KEYS.lastSession]: compactSnapshot });
    } catch (persistError) {
      console.error("Failed to persist last session snapshot:", persistError);
    }
  }
}

function makeRuntimeSnapshotPayload() {
  if (!hasMeaningfulProgress(makeProgressPayload(), logs) && lastSessionSnapshot) {
    return {
      action: "snapshot",
      progress: lastSessionSnapshot.progress,
      logs: lastSessionSnapshot.logs.slice()
    };
  }

  return {
    action: "snapshot",
    progress: makeProgressPayload(),
    logs: logs.slice()
  };
}

function normalizeTabId(tabId) {
  const numericTabId = Number(tabId);
  if (!Number.isInteger(numericTabId) || numericTabId < 0) {
    return null;
  }

  return numericTabId;
}

async function sendTabMessage(tabId, message) {
  const safeTabId = normalizeTabId(tabId);
  if (safeTabId === null) {
    throw new Error(`invalid_tab_id:${tabId}`);
  }

  return chrome.tabs.sendMessage(safeTabId, message);
}

async function persistRuntimeState() {
  state.lastUpdatedAt = Date.now();
  try {
    await chrome.storage.local.set({ [STORAGE_KEYS.state]: state });
  } catch (error) {
    await persistLogs();
    try {
      await chrome.storage.local.set({ [STORAGE_KEYS.state]: state });
    } catch (persistError) {
      console.error("Failed to persist runtime state:", persistError);
    }
  }
}

async function persistProgressSnapshot(progressPayload = null) {
  const snapshot = progressPayload || makeProgressPayload();

  try {
    await chrome.storage.local.set({ [STORAGE_KEYS.progress]: snapshot });
  } catch (error) {
    console.error("Failed to persist runtime progress:", error);
  }
}

async function persistLogs() {
  logs = sanitizeLogs(logs);

  let currentLogs = logs.slice();
  while (currentLogs.length > 0) {
    try {
      await chrome.storage.local.set({ [STORAGE_KEYS.logs]: currentLogs });
      logs = currentLogs;
      return;
    } catch (error) {
      if (currentLogs.length <= 50) {
        break;
      }

      currentLogs = currentLogs.slice(-Math.max(50, Math.floor(currentLogs.length * 0.7)));
    }
  }

  try {
    const fallbackLogs = logs.slice(-50);
    await chrome.storage.local.set({ [STORAGE_KEYS.logs]: fallbackLogs });
    logs = fallbackLogs;
  } catch (error) {
    console.error("Failed to persist runtime logs:", error);
  }
}

async function broadcastProgress() {
  const progressPayload = makeProgressPayload();
  await persistRuntimeState();
  await persistProgressSnapshot(progressPayload);
  await persistLastSessionSnapshot(progressPayload);
  if (popupPort) {
    popupPort.postMessage(progressPayload);
  }
}

async function addLog(message) {
  const entry = `[${new Date().toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })}] ${message}`;

  logs.push(entry);
  await persistLogs();
  const progressPayload = makeProgressPayload();
  await persistProgressSnapshot(progressPayload);
  await persistLastSessionSnapshot(progressPayload);

  if (popupPort) {
    popupPort.postMessage({ action: "log", message: entry });
  }
}

async function clearStepAlarm() {
  try {
    await chrome.alarms.clear(STEP_ALARM_NAME);
  } catch (error) {
    // Ignore alarm cleanup errors.
  }
}

async function clearWatchdogAlarm() {
  try {
    await chrome.alarms.clear(WATCHDOG_ALARM_NAME);
  } catch (error) {
    // Ignore watchdog cleanup errors.
  }
}

async function scheduleProcessingWatchdog() {
  if (!state.processingActive || state.currentActionMode !== "auto" || !state.currentProcessingUrl) {
    await clearWatchdogAlarm();
    return;
  }

  await clearWatchdogAlarm();
  await chrome.alarms.create(WATCHDOG_ALARM_NAME, {
    when: Date.now() + STALLED_PROCESSING_TIMEOUT_MS
  });
}

async function updateCurrentProcessingStep(step) {
  const nextStep = PROCESSING_STEPS.has(step) ? step : "idle";
  if (
    state.currentProcessingStep === nextStep &&
    nextStep !== "idle" &&
    nextStep !== "completed"
  ) {
    await scheduleProcessingWatchdog();
    return;
  }

  state.currentProcessingStep = nextStep;
  state.currentStepUpdatedAt = Date.now();
  await persistRuntimeState();

  if (nextStep === "idle" || nextStep === "completed") {
    await clearWatchdogAlarm();
    return;
  }

  await scheduleProcessingWatchdog();
}

async function setWaitingState(reason, delayMs) {
  state.waitingReason = reason;
  state.waitingUntil = Date.now() + Math.max(delayMs, 0);
  await persistRuntimeState();
  await clearStepAlarm();
  await chrome.alarms.create(STEP_ALARM_NAME, { when: state.waitingUntil });
}

async function clearWaitingState() {
  state.waitingReason = null;
  state.waitingUntil = 0;
  await persistRuntimeState();
  await clearStepAlarm();
}

async function rememberProcessedUrl(url, reason = "processed", profileInfo = null) {
  const normalizedUrl = normalizeProfileUrl(url || profileInfo?.profileUrl);
  if (!normalizedUrl) {
    return;
  }

  const stored = await chrome.storage.local.get({
    [STORAGE_KEYS.history]: [],
    [STORAGE_KEYS.resolvedProfiles]: []
  });

  let history = normalizeProfileUrls(stored[STORAGE_KEYS.history]);
  if (!history.includes(normalizedUrl)) {
    history.push(normalizedUrl);
  }
  if (history.length > MAX_HISTORY_ITEMS) {
    history = history.slice(-MAX_HISTORY_ITEMS);
  }

  let resolvedProfiles = Array.isArray(stored[STORAGE_KEYS.resolvedProfiles])
    ? stored[STORAGE_KEYS.resolvedProfiles].filter(item => item && typeof item === "object")
    : [];

  resolvedProfiles = resolvedProfiles.filter(item => normalizeProfileUrl(item.url) !== normalizedUrl);
  resolvedProfiles.push({
    url: normalizedUrl,
    username: profileInfo?.username || normalizedUrl.split("/").pop(),
    reason,
    status: profileInfo?.currentStatus || null,
    updatedAt: Date.now()
  });
  if (resolvedProfiles.length > MAX_HISTORY_ITEMS) {
    resolvedProfiles = resolvedProfiles.slice(-MAX_HISTORY_ITEMS);
  }

  await chrome.storage.local.set({
    [STORAGE_KEYS.history]: history,
    [STORAGE_KEYS.resolvedProfiles]: resolvedProfiles
  });
}

async function ensureProcessingWindow() {
  if (state.currentProcessingWindowId) {
    try {
      await chrome.windows.get(state.currentProcessingWindowId);
      return state.currentProcessingWindowId;
    } catch (error) {
      state.currentProcessingWindowId = null;
      await persistRuntimeState();
    }
  }

  try {
    const windowInfo = await chrome.windows.create({
      type: "normal",
      state: "minimized",
      focused: false,
      url: "about:blank"
    });

    state.currentProcessingWindowId = windowInfo?.id ?? null;
    await persistRuntimeState();
    return state.currentProcessingWindowId;
  } catch (error) {
    state.currentProcessingWindowId = null;
    await persistRuntimeState();
    return null;
  }
}

async function closeProcessingWindow() {
  if (!state.currentProcessingWindowId) {
    return;
  }

  try {
    await chrome.windows.remove(state.currentProcessingWindowId);
  } catch (error) {
    // Ignore missing window errors.
  }

  state.currentProcessingWindowId = null;
  await persistRuntimeState();
}

async function scheduleTabDelay() {
  const settings = await chrome.storage.sync.get({ tabDelay: 2 });
  const waitMs = getAdaptiveTabDelayMs(settings.tabDelay);
  await addLog(`${t.waitTab} ${formatDelayMs(waitMs)}`);
  await setWaitingState("tabDelay", waitMs);
}

async function scheduleClickDelay(readySignal = {}) {
  const settings = await chrome.storage.sync.get({ clickDelay: 4 });
  const waitMs = getAdaptiveClickDelayMs(settings.clickDelay, readySignal);
  await addLog(`${t.waitClick} ${formatDelayMs(waitMs)}`);
  await setWaitingState("clickDelay", waitMs);
}

async function enterSleep(waitMinutes) {
  const waitMs = getAdaptiveSleepMs(waitMinutes);
  await addLog(`${t.rWait} (${formatDelayMs(waitMs)})`);
  await setWaitingState("sleep", waitMs);
}

async function enterCadencePause() {
  const waitMs = getAdaptiveCadencePauseMs();
  state.nextCadencePauseAt = getNextCadencePauseTarget(state.sessionProcessedCount);
  await persistRuntimeState();
  await addLog(`${t.cPause} (${formatDelayMs(waitMs)})`);
  await setWaitingState("cadencePause", waitMs);
}

async function enterManualPause() {
  state.isWaitingForUser = true;
  await persistRuntimeState();
  await broadcastProgress();

  if (popupPort) {
    popupPort.postMessage({ action: "manualBatchLimitReached" });
  }
}

async function finalizeRun() {
  clickDelayScheduledTabId = null;
  state.processingActive = false;
  state.isWaitingForUser = false;
  state.waitingReason = null;
  state.waitingUntil = 0;
  state.currentProcessingTab = null;
  state.currentProcessingUrl = null;
  state.currentRetryCount = 0;
  state.currentProcessingStep = "idle";
  state.currentStepUpdatedAt = 0;
  state.nextCadencePauseAt = 0;
  await clearStepAlarm();
  await clearWatchdogAlarm();
  await closeProcessingWindow();
  await broadcastProgress();
}

async function stopProcessing() {
  clickDelayScheduledTabId = null;
  state.processingActive = false;
  state.isWaitingForUser = false;
  state.waitingReason = null;
  state.waitingUntil = 0;
  state.currentProcessingTab = null;
  state.currentProcessingUrl = null;
  state.currentRetryCount = 0;
  state.currentProcessingStep = "idle";
  state.currentStepUpdatedAt = 0;
  state.nextCadencePauseAt = 0;
  await clearStepAlarm();
  await clearWatchdogAlarm();
  await addLog(t.stop);
  await closeProcessingWindow();
  await broadcastProgress();
}

function currentQueueUrl() {
  return state.queueUrls[state.nextIndex] || null;
}

async function maybeResolveBatchBoundary() {
  const settings = await chrome.storage.sync.get({ batchLimit: 40, sleepTime: 2 });
  if (settings.batchLimit <= 0 || state.sessionProcessedCount < settings.batchLimit) {
    if (
      state.currentActionMode === "auto" &&
      state.nextCadencePauseAt > 0 &&
      state.sessionProcessedCount >= state.nextCadencePauseAt
    ) {
      await enterCadencePause();
      return true;
    }

    return false;
  }

  await addLog(`${t.rFinished} ${state.sessionProcessedCount}`);

  if (state.currentActionMode === "manual") {
    await addLog(t.askCont);
    await enterManualPause();
    return true;
  }

  state.isWaitingForUser = false;
  await persistRuntimeState();
  await enterSleep(settings.sleepTime);
  return true;
}

async function moveToNextProfile(reason, profileInfo = null, options = {}) {
  const resolvedUrl = normalizeProfileUrl(state.currentProcessingUrl || currentQueueUrl() || profileInfo?.profileUrl);
  const finishedTabId = state.currentProcessingTab;

  if (profileInfo?.username) {
    await addLog(
      `<div style="padding:4px; background:#f8fafc; border-radius:4px; border:1px solid #e2e8f0; font-size:0.75rem;"><a href="${resolvedUrl || profileInfo.profileUrl}" target="_blank" style="color:#2563eb;text-decoration:none;font-weight:600;">@${profileInfo.username}</a> <span style="color:#059669;margin-left:4px;">(İşlendi)</span></div>`
    );
  }

  await rememberProcessedUrl(resolvedUrl, reason, profileInfo);

  clickDelayScheduledTabId = null;
  state.currentProcessingTab = null;
  state.currentProcessingUrl = null;
  state.currentRetryCount = 0;
  state.processedCount += 1;
  state.nextIndex += 1;
  state.sessionProcessedCount += 1;
  state.blockedUrl = null;
  state.blockedReason = null;
  await persistRuntimeState();
  await broadcastProgress();

  if (options.closeTab !== false && finishedTabId !== null) {
    try {
      await chrome.tabs.remove(finishedTabId);
    } catch (error) {
      // Ignore tab close errors.
    }
  }

  if (state.nextIndex >= state.totalAccounts) {
    await addLog(`${t.done} ${state.processedCount}/${state.totalAccounts}`);
    await finalizeRun();
    return;
  }

  if (await maybeResolveBatchBoundary()) {
    return;
  }

  await scheduleTabDelay();
}

async function haltWithRetryLimit(reason, retryUrl) {
  await addLog(`${t.retryLimit} ${retryUrl || "-"}`);

  clickDelayScheduledTabId = null;
  state.processingActive = false;
  state.isWaitingForUser = false;
  state.waitingReason = null;
  state.waitingUntil = 0;
  state.currentProcessingTab = null;
  state.currentProcessingUrl = null;
  state.currentProcessingStep = "idle";
  state.currentStepUpdatedAt = 0;
  state.nextCadencePauseAt = 0;
  state.blockedUrl = retryUrl || null;
  state.blockedReason = reason;
  await clearStepAlarm();
  await clearWatchdogAlarm();
  await closeProcessingWindow();
  await broadcastProgress();
}

async function retryCurrentProfile(reason, retryUrl = null) {
  const normalizedRetryUrl = normalizeProfileUrl(retryUrl || state.currentProcessingUrl || currentQueueUrl());
  state.currentRetryCount += 1;

  if (state.currentRetryCount > MAX_RECOVERY_RETRIES) {
    await haltWithRetryLimit(reason, normalizedRetryUrl);
    return;
  }

  clickDelayScheduledTabId = null;
  state.currentProcessingTab = null;
  state.currentProcessingUrl = null;
  state.currentProcessingStep = "idle";
  state.currentStepUpdatedAt = 0;
  await clearWatchdogAlarm();
  await persistRuntimeState();
  await addLog(`${t.retrying} ${state.currentRetryCount}/${MAX_RECOVERY_RETRIES} ${normalizedRetryUrl || "-"}`);
  await scheduleTabDelay();
}

async function openCurrentProfile() {
  if (!state.processingActive || state.isWaitingForUser || state.waitingReason) {
    return;
  }

  if (state.currentActionMode === "auto" && state.currentProcessingTab !== null) {
    return;
  }

  const nextUrl = currentQueueUrl();
  if (!nextUrl) {
    await addLog(`${t.done} ${state.processedCount}/${state.totalAccounts}`);
    await finalizeRun();
    return;
  }

  if (await maybeResolveBatchBoundary()) {
    return;
  }

  try {
    let tab;
    if (state.currentWorkMode === "bg") {
      const windowId = await ensureProcessingWindow();
      if (!windowId) {
        await addLog(`${t.createFail} ${nextUrl}`);
        await retryCurrentProfile("window_create_failed", nextUrl);
        return;
      }

      tab = await chrome.tabs.create({ windowId, url: nextUrl, active: false });
      await addLog(`${t.openBg} ${nextUrl}`);
    } else {
      tab = await chrome.tabs.create({ url: nextUrl, active: true });
      await addLog(`${t.openFg} ${nextUrl}`);
    }

    clickDelayScheduledTabId = null;

    if (state.currentActionMode === "manual") {
      await addLog(t.manualTab);
      state.processedCount += 1;
      state.nextIndex += 1;
      state.sessionProcessedCount += 1;
      if (!state.nextCadencePauseAt) {
        state.nextCadencePauseAt = getNextCadencePauseTarget(state.sessionProcessedCount);
      }
      state.currentRetryCount = 0;
      await persistRuntimeState();
      await broadcastProgress();

      if (state.nextIndex >= state.totalAccounts) {
        await addLog(`${t.done} ${state.processedCount}/${state.totalAccounts}`);
        await finalizeRun();
        return;
      }

      if (await maybeResolveBatchBoundary()) {
        return;
      }

      await scheduleTabDelay();
      return;
    }

    state.currentProcessingTab = tab.id;
    state.currentProcessingUrl = nextUrl;
    state.blockedUrl = null;
    state.blockedReason = null;
    if (!state.nextCadencePauseAt) {
      state.nextCadencePauseAt = getNextCadencePauseTarget(state.sessionProcessedCount);
    }
    await persistRuntimeState();
    await updateCurrentProcessingStep("opening");
    await broadcastProgress();
  } catch (error) {
    await addLog(`${t.createFail} ${nextUrl}`);
    await retryCurrentProfile("tab_create_failed", nextUrl);
  }
}

async function sendEnsureReady(tabId) {
  try {
    await sendTabMessage(tabId, { action: "ensureReady" });
  } catch (error) {
    // Content script may not be ready yet. onUpdated will retry.
  }
}

async function syncCurrentProcessingTab() {
  if (!state.currentProcessingTab || !state.currentProcessingUrl) {
    return;
  }

  try {
    await chrome.tabs.get(state.currentProcessingTab);
  } catch (error) {
    await retryCurrentProfile("missing_processing_tab", state.currentProcessingUrl);
    return;
  }

  try {
    const sync = await sendTabMessage(state.currentProcessingTab, { action: "syncState" });
    if (sync?.completed) {
      await updateCurrentProcessingStep("completed");
      await moveToNextProfile(
        sync.lastDonePayload?.resolvedReason || "recovered_done",
        sync.lastDonePayload?.profileInfo || sync.profileInfo || null
      );
      return;
    }

    if (sync?.started) {
      await updateCurrentProcessingStep(sync.currentStep || "started");

      if (
        sync.uiState?.followVisible &&
        !sync.uiState?.requestVisible &&
        !sync.uiState?.unfollowVisible
      ) {
        await addLog(`Yarım kalan işlem çözüldü: ${state.currentProcessingUrl}`);
        await moveToNextProfile("recovered_already_resolved", sync.profileInfo || null);
        return;
      }
    }
  } catch (error) {
    // The tab may still be loading. Let onUpdated or ensureReady handle it.
  }

  if (!state.waitingReason) {
    await sendEnsureReady(state.currentProcessingTab);
  }
}

async function recoverRuntimeAfterWake() {
  t = bgDict[state.currentLang] || bgDict.en;

  if (!state.processingActive) {
    await clearStepAlarm();
    await clearWatchdogAlarm();
    return;
  }

  if (state.waitingReason && state.waitingUntil > Date.now()) {
    await clearStepAlarm();
    await chrome.alarms.create(STEP_ALARM_NAME, { when: state.waitingUntil });
  } else if (state.waitingReason && state.waitingUntil <= Date.now()) {
    const reason = state.waitingReason;
    await clearWaitingState();

    if (reason === "sleep") {
      state.sessionProcessedCount = 0;
      state.nextCadencePauseAt = getNextCadencePauseTarget(0);
      await persistRuntimeState();
      await openCurrentProfile();
    } else if (reason === "tabDelay") {
      await openCurrentProfile();
    } else if (reason === "cadencePause") {
      await openCurrentProfile();
    } else if (reason === "clickDelay") {
      if (state.currentProcessingTab) {
        try {
          clickDelayScheduledTabId = null;
          await sendTabMessage(state.currentProcessingTab, { action: "proceed" });
        } catch (error) {
          await retryCurrentProfile("recovered_proceed_failed", state.currentProcessingUrl);
        }
      } else {
        await retryCurrentProfile("recovered_missing_tab", state.currentProcessingUrl);
      }
    }
  }

  if (state.currentProcessingTab) {
    await scheduleProcessingWatchdog();
    await syncCurrentProcessingTab();
    return;
  }

  if (!state.isWaitingForUser && !state.waitingReason) {
    await openCurrentProfile();
  }
}

async function initializeRuntime() {
  const stored = await chrome.storage.local.get({
    [STORAGE_KEYS.state]: createDefaultState(),
    [STORAGE_KEYS.logs]: [],
    [STORAGE_KEYS.lastSession]: null
  });

  state = sanitizeRuntimeState(stored[STORAGE_KEYS.state]);
  logs = sanitizeLogs(stored[STORAGE_KEYS.logs]);
  lastSessionSnapshot = sanitizeLastSessionSnapshot(stored[STORAGE_KEYS.lastSession]);

  if (!hasMeaningfulProgress(makeProgressPayload(), logs) && lastSessionSnapshot?.logs?.length) {
    logs = lastSessionSnapshot.logs.slice();
  }

  await recoverRuntimeAfterWake();
}

const initPromise = initializeRuntime();

chrome.alarms.onAlarm.addListener(alarm => {
  void (async () => {
    await initPromise;
    if (alarm.name === STEP_ALARM_NAME) {
      const currentReason = state.waitingReason;
      await clearWaitingState();

      if (!state.processingActive) {
        return;
      }

      if (currentReason === "sleep") {
        state.sessionProcessedCount = 0;
        state.nextCadencePauseAt = getNextCadencePauseTarget(0);
        await persistRuntimeState();
        await openCurrentProfile();
        return;
      }

      if (currentReason === "tabDelay") {
        await openCurrentProfile();
        return;
      }

      if (currentReason === "cadencePause") {
        await openCurrentProfile();
        return;
      }

      if (currentReason === "clickDelay") {
        if (!state.currentProcessingTab) {
          await retryCurrentProfile("missing_click_delay_tab", state.currentProcessingUrl);
          return;
        }

        try {
          clickDelayScheduledTabId = null;
          await sendTabMessage(state.currentProcessingTab, { action: "proceed" });
        } catch (error) {
          await retryCurrentProfile("proceed_failed", state.currentProcessingUrl);
        }
      }

      return;
    }

    if (alarm.name === WATCHDOG_ALARM_NAME) {
      if (!state.processingActive || !state.currentProcessingUrl) {
        return;
      }

      const stalledUrl = state.currentProcessingUrl;
      const stalledTabId = state.currentProcessingTab;
      const stalledStep = state.currentProcessingStep || "started";

      await addLog(`⚠️ Yarım kalan işlem tespit edildi. Aynı profil yeniden denenecek (${stalledStep}): ${stalledUrl}`);

      if (stalledTabId !== null) {
        state.currentProcessingTab = null;
        await persistRuntimeState();
        try {
          await chrome.tabs.remove(stalledTabId);
        } catch (error) {
          // Ignore tab close errors during watchdog recovery.
        }
      }

      await retryCurrentProfile("stalled_partial_processing", stalledUrl);
      return;
    }

    if (![STEP_ALARM_NAME, WATCHDOG_ALARM_NAME].includes(alarm.name)) {
      return;
    }
  })();
});

chrome.tabs.onRemoved.addListener(tabId => {
  void (async () => {
    await initPromise;

    if (!state.processingActive || state.currentActionMode !== "auto" || tabId !== state.currentProcessingTab) {
      return;
    }

    await addLog(t.tabClosed);
    await retryCurrentProfile("tab_closed", state.currentProcessingUrl);
  })();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  void (async () => {
    await initPromise;

    if (
      !state.processingActive ||
      state.currentActionMode !== "auto" ||
      tabId !== state.currentProcessingTab ||
      changeInfo.status !== "complete"
    ) {
      return;
    }

    if (!state.waitingReason) {
      await sendEnsureReady(tabId);
    }
  })();
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  void (async () => {
    await initPromise;

    if (msg.action === "log") {
      await addLog(msg.message);
      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "startProcessing") {
      await clearStepAlarm();
      await clearWatchdogAlarm();
      await closeProcessingWindow();

      const normalizedUrls = normalizeProfileUrls(msg.urls);
      state = {
        ...createDefaultState(),
        processingActive: true,
        currentLang: bgDict[msg.lang] ? msg.lang : "en",
        currentWorkMode: msg.wmode === "bg" ? "bg" : "manual_sequential",
        currentActionMode: msg.amode === "manual" ? "manual" : "auto",
        queueUrls: normalizedUrls,
        totalAccounts: normalizedUrls.length,
        nextCadencePauseAt: getNextCadencePauseTarget(0),
        lastStartedAt: Date.now(),
        lastUpdatedAt: Date.now()
      };
      clickDelayScheduledTabId = null;
      t = bgDict[state.currentLang] || bgDict.en;
      await persistRuntimeState();

      if (logs.length > 0) {
        await addLog('<div style="margin-top:6px; border-top:1px dashed #cbd5e1; padding-top:6px;"></div>');
      }

      await addLog(`${t.start} ${state.totalAccounts}`);
      await addLog(`${t.mode} ${state.currentWorkMode === "bg" ? t.mBg : t.mFg} | ${t.action} ${state.currentActionMode === "auto" ? t.mOto : t.mMan}`);
      await broadcastProgress();
      await openCurrentProfile();
      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "continueManualBatch") {
      state.isWaitingForUser = false;
      state.sessionProcessedCount = 0;
      state.nextCadencePauseAt = getNextCadencePauseTarget(0);
      await persistRuntimeState();
      await addLog(t.resume);
      await broadcastProgress();
      await openCurrentProfile();
      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "stopProcessing") {
      await stopProcessing();
      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "ready") {
      if (
        state.processingActive &&
        state.currentActionMode === "auto" &&
        sender.tab &&
        sender.tab.id === state.currentProcessingTab &&
        state.waitingReason !== "clickDelay" &&
        clickDelayScheduledTabId !== sender.tab.id
      ) {
        clickDelayScheduledTabId = sender.tab.id;
        await updateCurrentProcessingStep("ready");
        await scheduleClickDelay(msg.readySignal || {});
      }

      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "done") {
      if (
        state.processingActive &&
        state.currentActionMode === "auto" &&
        sender.tab &&
        sender.tab.id === state.currentProcessingTab
      ) {
        await updateCurrentProcessingStep("completed");
        await moveToNextProfile(msg.resolvedReason || "processed", msg.profileInfo || null);
      }

      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "processingStep") {
      if (
        state.processingActive &&
        state.currentActionMode === "auto" &&
        sender.tab &&
        sender.tab.id === state.currentProcessingTab
      ) {
        await updateCurrentProcessingStep(msg.step || "started");
      }

      sendResponse({ ok: true });
      return;
    }

    if (msg.action === "getProgress") {
      const liveProgress = makeProgressPayload();
      sendResponse(hasMeaningfulProgress(liveProgress, logs) ? liveProgress : (lastSessionSnapshot?.progress || liveProgress));
      return;
    }

    if (msg.action === "getRuntimeSnapshot") {
      sendResponse(makeRuntimeSnapshotPayload());
      return;
    }

    sendResponse({ ok: false });
  })().catch(async error => {
    await addLog(`Unexpected background error: ${error?.message || error}`);
    sendResponse({ ok: false, error: error?.message || String(error) });
  });

  return true;
});

chrome.runtime.onConnect.addListener(port => {
  if (port.name !== "popup") {
    return;
  }

  popupPort = port;
  void (async () => {
    await initPromise;

    if (popupPort === port) {
      popupPort.postMessage(makeRuntimeSnapshotPayload());
    }
  })();

  port.onDisconnect.addListener(() => {
    popupPort = null;
  });
});

chrome.runtime.onStartup.addListener(() => {
  void initPromise;
});
