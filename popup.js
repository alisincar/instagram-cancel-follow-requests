(function() {
    const dict = {
        en: {
            appTitle: "Welcome to Unfollow Manager!",
            appDesc: "This assistant auto-cancels <strong>Thousands of Requests</strong> safely in the <strong>background</strong> with human speed tolerances (±2s deviation).",
            howToUse: "HOW TO USE? CHOOSE MODE:",
            optTabTitle: "<span style='font-size:1rem; background:#e0e7ff; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>🌐</span>1. Read Current Tab",
            optTabDesc: "Select this if the <strong>Pending Requests</strong> page is open.",
            optFileTitle: "<span style='font-size:1rem; background:#fce7f3; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>📁</span>2. Upload Archive File",
            optFileDesc: "Select to upload your Instagram <code>.json</code> archive file.",
            btnFileSelect: "📂 Select File",
            noFileSelect: "No file selected...",
            pastePlaceholder: "or paste text (JSON/HTML) here...",
            boxLang: "1. INSTAGRAM LANGUAGE",
            igLangDesc: "Select your Instagram UI language so the bot can find the correct buttons.",
            box1Title: "2. HOW TO OPEN TABS?",
            modeBg: "Hidden (Background)",
            modeBgDesc: "Doesn't interrupt",
            modeTab: "Foreground (New Tab)",
            modeTabDesc: "To watch process",
            box2Title: "3. ACTION & ORDER",
            actionAuto: "Auto Cancel Request",
            actionAutoDesc: "Clicks & closes",
            actionManual: "Only Open Tab",
            actionManualDesc: "Wait for you",
            lblOrder: "Process Order:",
            orderOldest: "Start from Oldest (Default)",
            orderNewest: "Start from Newest",
            box3Title: "4. SPEED & LIMITS",
            lblTabDelay: "Tab Delay (±2s)",
            lblBatchLimit: "Round Limit (People)",
            lblClickDelay: "Action Delay (±2s)",
            lblSleepTime: "Round Break (min)",
            promptAsk: "Profile limit reached. Open new batch?",
            btnContinue: "▶️ Continue",
            advSettings: "ADVANCED TAGS ⚙️",
            lblReq: "Request Button Text",
            lblUnf: "Unfollow Button Text",
            lblFol: "Follow Button Text",
            btnStart: "🚀 START",
            progStatus: "PROGRESS",
            btnStop: "🛑 STOP",
            btnBack: "Back",
            btnHowTo: "🤔 How to download file? (Guide & Video)",
            guideTitle: "How to Find Pending Requests",
            guideSub: "Follow these steps to get your list.",
            gStep1: "Open Instagram on your phone, tap your <strong>Profile icon</strong> (bottom right).",
            gStep2: "Tap the <strong>three lines menu</strong> (top right) and select <strong>Account Center</strong>.",
            gStep3: "Scroll down, tap <strong>Your information and permissions</strong> > <strong>Export your information</strong>.",
            gStep4: "Tap <strong>Create export</strong>, choose your account, and tap <strong>Export to device</strong>.",
            gStep5: "Click <strong>Customize the information</strong>. Deselect all except <strong>Followers and following</strong> and save.",
            gStep6: "Choose date range. Select <strong>HTML</strong> format. Tap <strong>Start export</strong> and enter your password.",
            gStep7: "Once ready, tap <strong>Download</strong> to get the ZIP file.",
            gStep8: "Unzip the downloaded file (<em>instagram+username.zip</em>).",
            gStep9: "Open folder: <code>connections > followers and following > pending follow requests</code>. Upload it here!",
            gBtnVideo: "▶️ Watch Video Tutorial",
            errExtract: "No profile links found on this page.",
            errFormat: "Format error",
            errData: "Please select a file or paste text!",
            errLinks: "No links found.",
            msgStop: "Process stopped.",
            useMem: "Use Memory History",
            useMemDesc: "Skip previously processed profiles",
            btnClearMem: "🗑️ Reset Memory",
            msgMemClear: "Memory cleared successfully!",
            msgAllDoneMem: "All profiles in this list were already processed before, so memory skipped them.",
            logHistory: "Log History",
            btnReturn: "🏠 RETURN HOME",
            btnLogs: "📜 LOGS",
            legalDisclaimer: "Disclaimer: This extension is provided as-is. All actions and any account or platform consequences are solely the user's responsibility. The developer accepts no liability.",
            promoMozaredTitle: "Mozared",
            promoMozaredSubtitle: "Events & Dating",
            promoRandevuTitle: "Appointment Service",
            promoRandevuSubtitle: "Easy Appointment Management"
        },
        es: {
            appTitle: "¡Bienvenido a Unfollow Manager!",
            appDesc: "Este asistente cancela automáticamente <strong>miles de solicitudes</strong> en un <strong>segundo plano</strong> seguro con tolerancias de tiempo humanas (±2s).",
            howToUse: "¿DE QUÉ MODO EMPEZAR?",
            optTabTitle: "<span style='font-size:1rem; background:#e0e7ff; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>🌐</span>1. Pestaña Actual",
            optTabDesc: "Selecciona si tienes la página de <strong>Solicitudes pendientes</strong> abierta.",
            optFileTitle: "<span style='font-size:1rem; background:#fce7f3; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>📁</span>2. Subir Archivo",
            optFileDesc: "Sube tu archivo de Instagram <code>.json</code>.",
            btnFileSelect: "📂 Subir",
            noFileSelect: "Sin archivo...",
            pastePlaceholder: "o pega el texto (HTML/JSON)...",
            boxLang: "1. IDIOMA DE INSTAGRAM",
            igLangDesc: "Selecciona el idioma de tu Instagram para que el bot ubique los botones.",
            box1Title: "2. ¿CÓMO ABRIR PESTAÑAS?",
            modeBg: "Oculto en Fondo",
            modeBgDesc: "Sin rastro",
            modeTab: "Ojo Clínico (Nueva Pestaña)",
            modeTabDesc: "Para observar",
            box2Title: "3. ACCIÓN Y ORDEN",
            actionAuto: "Auto Cancelar",
            actionAutoDesc: "Cierra automáticamente",
            actionManual: "Solo Abrir Pestaña",
            actionManualDesc: "Esperar intervención",
            lblOrder: "Orden de Proceso:",
            orderOldest: "Empezar por el más Antiguo",
            orderNewest: "Empezar por el más Nuevo",
            box3Title: "4. VELOCIDAD Y LÍMITES",
            lblTabDelay: "Pausa (±2s)",
            lblBatchLimit: "Límite/Ronda",
            lblClickDelay: "Espera Acción (±2s)",
            lblSleepTime: "Descanso (min)",
            promptAsk: "Límite superado. ¿Siguiente ronda?",
            btnContinue: "▶️ Continuar",
            advSettings: "ETIQUETAS AVAN. ⚙️",
            lblReq: "Texto Botón Solicitud",
            lblUnf: "Texto Dejar de Seguir",
            lblFol: "Texto Seguir",
            btnStart: "🚀 INICIAR",
            progStatus: "PROGRESO",
            btnStop: "🛑 DETENER",
            btnBack: "Atrás",
            errExtract: "No se encontraron enlaces en esta página.",
            errFormat: "Error de formato",
            errData: "¡Pega un texto o sube un archivo!",
            errLinks: "Sin enlaces encontrados.",
            msgStop: "Detenido.",
            useMem: "Usar historial",
            useMemDesc: "Omite perfiles ya procesados",
            btnClearMem: "🗑️ Borrar memoria",
            msgMemClear: "¡Memoria borrada!",
            msgAllDoneMem: "Todos los perfiles de esta lista ya se procesaron antes. La memoria los omitió.",
            logHistory: "Historial de logs",
            btnReturn: "🏠 VOLVER AL INICIO",
            btnLogs: "📜 LOGS",
            legalDisclaimer: "Aviso legal: Esta extension se proporciona tal cual. Todas las acciones y cualquier consecuencia sobre la cuenta o la plataforma son responsabilidad exclusiva del usuario. El desarrollador no asume ninguna responsabilidad.",
            promoMozaredTitle: "Mozared",
            promoMozaredSubtitle: "Eventos y Citas",
            promoRandevuTitle: "Servicio de Citas",
            promoRandevuSubtitle: "Gestion Facil de Citas",
            btnHowTo: "🤔 ¿Cómo descargar archivo? (Guía y Video)",
            guideTitle: "Cómo encontrar solicitudes",
            guideSub: "Sigue estos pasos para obtener tu lista.",
            gStep1: "Abre Instagram en tu teléfono, toca tu <strong>Perfil</strong> (abajo a la derecha).",
            gStep2: "Toca el <strong>menú de tres líneas</strong> (arriba a la derecha) y selecciona <strong>Centro de cuentas</strong>.",
            gStep3: "Desplázate hacia abajo, elige <strong>Tu información y permisos</strong> > <strong>Descargar tu información</strong>.",
            gStep4: "Toca <strong>Crear descarga</strong>, elige tu cuenta y toca <strong>Descargar al dispositivo</strong>.",
            gStep5: "Haz clic en <strong>Personalizar información</strong>. Deselecciona todo excepto <strong>Seguidores y seguidos</strong> y guarda.",
            gStep6: "Elige el rango de fechas. Selecciona formato <strong>HTML</strong>. Toca <strong>Crear archivo</strong> e ingresa tu contraseña.",
            gStep7: "Cuando esté listo, toca <strong>Descargar</strong> para obtener el archivo ZIP.",
            gStep8: "Descomprime el archivo (<em>instagram+usuario.zip</em>).",
            gStep9: "Abre la carpeta: <code>connections > followers and following > pending follow requests</code>. ¡Súbelo aquí!",
            gBtnVideo: "▶️ Ver Video Tutorial"
        },
        de: {
            appTitle: "Willkommen beim Unfollow Manager!",
            appDesc: "Storniert <strong>Tausende offene Anfragen</strong> im sicheren <strong>Hintergrund</strong> mit Toleranzen (±2s).",
            howToUse: "MODUS WÄHLEN:",
            optTabTitle: "<span style='font-size:1rem; background:#e0e7ff; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>🌐</span>1. Aktueller Tab",
            optTabDesc: "Tab mit offenen Anfragen muss sichtbar sein.",
            optFileTitle: "<span style='font-size:1rem; background:#fce7f3; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>📁</span>2. Datei hochladen",
            optFileDesc: "<code>.json</code> Datei hochladen.",
            btnFileSelect: "📂 Datei",
            noFileSelect: "Keine Datei...",
            pastePlaceholder: "oder Text hier (JSON/HTML)...",
            boxLang: "1. INSTAGRAM SPRACHE",
            igLangDesc: "Wähle deine Instagram-Sprache, damit der Bot die Knöpfe findet.",
            box1Title: "2. TABS ÖFFNEN?",
            modeBg: "Versteckt hinten",
            modeBgDesc: "Stört nicht",
            modeTab: "Sichtbar",
            modeTabDesc: "Zum Zusehen",
            box2Title: "3. AKTION & REIHENFOLGE",
            actionAuto: "Auto-Klick",
            actionAutoDesc: "Schließt von selbst",
            actionManual: "Nur öffnen",
            actionManualDesc: "Wartet auf dich",
            lblOrder: "Verarbeitungsreihenfolge:",
            orderOldest: "Beim Ältesten beginnen",
            orderNewest: "Beim Neuesten beginnen",
            box3Title: "4. TEMPO & LIMITS",
            lblTabDelay: "Tab-Pause (±2s)",
            lblBatchLimit: "Runden-Limit",
            lblClickDelay: "Klick-Pause (±2s)",
            lblSleepTime: "Runden-Pause(m)",
            promptAsk: "Limit erreicht. Weiter?",
            btnContinue: "▶️ Fortsetzen",
            advSettings: "ERWEITERTE TAGS ⚙️",
            lblReq: "Anfrage-Button",
            lblUnf: "Entfolgen-Button",
            lblFol: "Folgen-Button",
            btnStart: "🚀 START",
            progStatus: "FORTSCHRITT",
            btnStop: "🛑 STOPP",
            btnBack: "Zurück",
            errExtract: "Keine Links auf dieser Seite gefunden.",
            errFormat: "Formatfehler",
            errData: "Datei wählen oder einfügen!",
            errLinks: "Keine Links.",
            msgStop: "Gestoppt.",
            useMem: "Verlauf verwenden",
            useMemDesc: "Bereits verarbeitete Profile überspringen",
            btnClearMem: "🗑️ Speicher löschen",
            msgMemClear: "Speicher wurde geleert!",
            msgAllDoneMem: "Alle Profile in dieser Liste wurden bereits verarbeitet und deshalb übersprungen.",
            logHistory: "Log-Verlauf",
            btnReturn: "🏠 ZUR STARTSEITE",
            btnLogs: "📜 LOGS",
            legalDisclaimer: "Haftungsausschluss: Diese Erweiterung wird wie besehen bereitgestellt. Alle Aktionen und etwaige Konto- oder Plattformfolgen liegen ausschließlich in der Verantwortung des Nutzers. Der Entwickler übernimmt keine Haftung.",
            promoMozaredTitle: "Mozared",
            promoMozaredSubtitle: "Events und Dating",
            promoRandevuTitle: "Terminservice",
            promoRandevuSubtitle: "Einfache Terminverwaltung",
            btnHowTo: "🤔 Wie lade ich die Datei herunter? (Anleitung & Video)",
            guideTitle: "Ausstehende Anfragen finden",
            guideSub: "Befolge diese Schritte, um deine Liste zu erhalten.",
            gStep1: "Öffne Instagram, tippe auf dein <strong>Profilbild</strong> (unten rechts).",
            gStep2: "Tippe auf das <strong>Drei-Striche-Menü</strong> (oben rechts) und wähle <strong>Kontenübersicht</strong>.",
            gStep3: "Scrolle nach unten, wähle <strong>Deine Informationen und Berechtigungen</strong> > <strong>Informationen herunterladen</strong>.",
            gStep4: "Tippe auf <strong>Download anfordern</strong>, wähle dein Konto und tippe auf <strong>Auf Gerät herunterladen</strong>.",
            gStep5: "Klicke auf <strong>Informationen anpassen</strong>. Wähle nur <strong>Follower und Gefolgte</strong> aus und speichere.",
            gStep6: "Wähle den Zeitraum und das Format <strong>HTML</strong>. Tippe auf <strong>Download anfordern</strong> & Passwort eingeben.",
            gStep7: "Sobald bereit, tippe auf <strong>Herunterladen</strong>, um die ZIP-Datei zu erhalten.",
            gStep8: "Entpacke die heruntergeladene Datei (<em>instagram+benutzername.zip</em>).",
            gStep9: "Öffne den Ordner: <code>connections > followers and following > pending follow requests</code>. Hier hochladen!",
            gBtnVideo: "▶️ Video-Anleitung ansehen"
        },
        hi: {
            appTitle: "Unfollow Manager में आपका स्वागत है!",
            appDesc: "सुरक्षित रूप से (±2s) <strong>हजारों लंबित अनुरोधों</strong> को रद्द करता है।",
            howToUse: "तरीका चुनें:",
            optTabTitle: "<span style='font-size:1rem; background:#e0e7ff; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>🌐</span>1. वर्तमान पृष्ठ से",
            optTabDesc: "इस पृष्ठ से स्वचालित रूप से लिंक निकालता है।",
            optFileTitle: "<span style='font-size:1rem; background:#fce7f3; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>📁</span>2. फ़ाइल अपलोड",
            optFileDesc: "अपनी <code>.json</code> फ़ाइल डालें।",
            btnFileSelect: "📂 फ़ाइल",
            noFileSelect: "खाली...",
            pastePlaceholder: "यहाँ पेस्ट करें...",
            boxLang: "1. इंस्टाग्राम भाषा",
            igLangDesc: "बटन खोजने के लिए इंस्टाग्राम यूआई भाषा चुनें।",
            box1Title: "2. टैब कैसे खोलें?",
            modeBg: "छिपा हुआ",
            modeBgDesc: "कोई रुकावट नहीं",
            modeTab: "सामने खोलें",
            modeTabDesc: "देखने के लिए",
            box2Title: "3. कार्रवाई और क्रम",
            actionAuto: "स्वतः रद्द",
            actionAutoDesc: "ऑटो क्लिक",
            actionManual: "केवल टैब",
            actionManualDesc: "आपकी प्रतीक्षा",
            lblOrder: "प्रक्रिया क्रम:",
            orderOldest: "सबसे पुराने से शुरू करें",
            orderNewest: "सबसे नए से शुरू करें",
            box3Title: "4. गति सीमा",
            lblTabDelay: "विलंब (±2s)",
            lblBatchLimit: "सीमा प्रति राउंड",
            lblClickDelay: "क्लिक विलंब (±2s)",
            lblSleepTime: "ब्रेक (मिनट)",
            promptAsk: "सीमा समाप्त. आगे बढ़ें?",
            btnContinue: "▶️ जारी रखें",
            advSettings: "उन्नत सेटिंग्स ⚙️",
            lblReq: "अनुरोध बटन टेक्स्ट",
            lblUnf: "अनफॉलो बटन टेक्स्ट",
            lblFol: "फॉलो बटन टेक्स्ट",
            btnStart: "🚀 शुरू",
            progStatus: "प्रगति",
            btnStop: "🛑 रुकें",
            btnBack: "वापस",
            errExtract: "कोई प्रोफाइल लिंक नहीं मिला।",
            errFormat: "प्रारूप त्रुटि",
            errData: "डेटा नहीं मिला।",
            errLinks: "कोई लिंक नहीं।",
            msgStop: "बंद किया गया।",
            useMem: "मेमोरी इतिहास का उपयोग करें",
            useMemDesc: "पहले प्रोसेस हुए प्रोफाइल छोड़ें",
            btnClearMem: "🗑️ मेमोरी साफ करें",
            msgMemClear: "मेमोरी साफ हो गई!",
            msgAllDoneMem: "इस सूची के सभी प्रोफाइल पहले ही प्रोसेस हो चुके हैं, इसलिए उन्हें छोड़ दिया गया।",
            logHistory: "लॉग इतिहास",
            btnReturn: "🏠 होम पर लौटें",
            btnLogs: "📜 लॉग्स",
            legalDisclaimer: "अस्वीकरण: यह एक्सटेंशन जैसी है वैसी ही प्रदान की जाती है। सभी कार्रवाइयां और खाते या प्लेटफ़ॉर्म से जुड़ी किसी भी प्रकार की परिणतियां पूरी तरह उपयोगकर्ता की जिम्मेदारी हैं। डेवलपर कोई जिम्मेदारी स्वीकार नहीं करता।",
            promoMozaredTitle: "Mozared",
            promoMozaredSubtitle: "इवेंट्स और डेटिंग",
            promoRandevuTitle: "अपॉइंटमेंट सर्विस",
            promoRandevuSubtitle: "आसान अपॉइंटमेंट प्रबंधन",
            btnHowTo: "🤔 फ़ाइल कैसे डाउनलोड करें? (गाइड और वीडियो)",
            guideTitle: "लंबित अनुरोधों को कैसे खोजें",
            guideSub: "अपनी सूची प्राप्त करने के लिए इन चरणों का पालन करें।",
            gStep1: "फोन पर इंस्टाग्राम खोलें, (नीचे दाएं) अपनी <strong>प्रोफ़ाइल</strong> पर टैप करें।",
            gStep2: "ऊपर दाईं ओर <strong>तीन लाइनों वाले मेनू</strong> पर टैप करें और <strong>अकाउंट सेंटर</strong> चुनें।",
            gStep3: "नीचे स्क्रॉल करें, <strong>आपकी जानकारी और अनुमतियां</strong> > <strong>अपनी जानकारी डाउनलोड करें</strong> टैप करें।",
            gStep4: "<strong>डाउनलोड का अनुरोध करें</strong> टैप करें, अपना खाता चुनें और <strong>डिवाइस पर डाउनलोड करें</strong> चुनें।",
            gStep5: "<strong>जानकारी अनुकूलित करें</strong> पर क्लिक करें। केवल <strong>फ़ॉलोअर्स और फ़ॉलोइंग</strong> का चयन करें।",
            gStep6: "तिथि सीमा चुनें। प्रारूप <strong>HTML</strong> चुनें। <strong>डाउनलोड अनुरोध भेजें</strong> और अपना पासवर्ड दर्ज करें।",
            gStep7: "तैयार होने पर, ZIP फ़ाइल प्राप्त करने के लिए <strong>डाउनलोड</strong> पर टैप करें।",
            gStep8: "डाउनलोड की गई फ़ाइल (<em>instagram+username.zip</em>) को अनज़िप करें।",
            gStep9: "फ़ोल्डर खोलें: <code>connections > followers and following > pending follow requests</code>. यहां अपलोड करें!",
            gBtnVideo: "▶️ वीडियो ट्यूटोरियल देखें"
        },
        tr: {
            appTitle: "Unfollow Manager'a Hoş Geldin!",
            appDesc: "Bu asistan, bekleyen <strong>Yüzlerce İsteği</strong> otomatik iptal eder. İşlemleri insan toleranslarıyla (±2s sapma) <strong>arka planda</strong> güvenle gerçekleştirir.",
            howToUse: "NASIL KULLANILIR? MOD SEÇİN:",
            optTabTitle: "<span style='font-size:1rem; background:#e0e7ff; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>🌐</span>1. Instagram'dan Oku (Hızlı)",
            optTabDesc: "Tarayıcınızda <strong>Giden İstekler</strong> sayfası açıksa bunu seç.",
            optFileTitle: "<span style='font-size:1rem; background:#fce7f3; padding:0.3rem; border-radius:0.4rem; margin-right:0.4rem;'>📁</span>2. Dosya Yükle (Kesin)",
            optFileDesc: "Instagram'ın verdiği <code>pending_follow_requests</code> dosyanı yükle.",
            btnFileSelect: "📂 Dosya Seç",
            noFileSelect: "Seçilmedi...",
            pastePlaceholder: "veya metni (JSON/HTML) buraya yapıştırın...",
            boxLang: "1. INSTAGRAM DİLİNİZ",
            igLangDesc: "Botun doğru butonları tanıyabilmesi için hesabınızın dilini mutlaka seçin.",
            box1Title: "2. SEKMELER NASIL AÇILSIN?",
            modeBg: "Arka Planda Gizli",
            modeBgDesc: "Kullanımı engellemez",
            modeTab: "Göz Önünde (Yeni Sekme)",
            modeTabDesc: "İşlemi izlemek için",
            box2Title: "3. İŞLEM TÜRÜ & SIRALAMA",
            actionAuto: "Otomatik Takipten Çık",
            actionAutoDesc: "Tıklar ve kapatır",
            actionManual: "Sadece Sekmeyi Aç",
            actionManualDesc: "Müdahale beklenir",
            lblOrder: "Liste İşlem Sırası:",
            orderOldest: "En Eskiden Başla (Varsayılan)",
            orderNewest: "En Yeniden Başla",
            box3Title: "4. HIZ VE LİMİT (HER TURDA)",
            lblTabDelay: "Sekme Geçişi (±2sn)",
            lblBatchLimit: "Tur Limiti (Kişi)",
            lblClickDelay: "İşlem Bekleme (±2sn)",
            lblSleepTime: "Tur Molası (dk)",
            promptAsk: "Tur bitti. Yeni sekmeler açılsın mı?",
            btnContinue: "▶️ Evet, Devam Et",
            advSettings: "GELİŞMİŞ ETİKETLER ⚙️",
            lblReq: "İstek Butonu Metni",
            lblUnf: "Takipten Çık Metni",
            lblFol: "Takip Et Metni",
            btnStart: "🚀 BAŞLAT",
            progStatus: "İLERLEME DURUMU",
            btnStop: "🛑 DURDUR",
            btnBack: "Geri",
            btnHowTo: "🤔 Dosyayı Nasıl İndiririm? (Kılavuz & Video)",
            guideTitle: "Giden İstekleri Bulma Rehberi",
            guideSub: "Aşağıdaki adımları izleyerek listenizi edinebilirsiniz.",
            gStep1: "Telefonunuzdan Instagram'ı açın ve sağ alttan <strong>Profilinize</strong> tıklayın.",
            gStep2: "Sağ üst köşedeki <strong>Üç Çizgi Menüsüne</strong> dokunup, <strong>Hesaplar Merkezi</strong>'ni seçin.",
            gStep3: "Sayfayı aşağı kaydırıp <strong>Bilgilerin ve İzinlerin</strong> sekmesini açın ve <strong>Bilgilerini İndir</strong>'e dokunun.",
            gStep4: "<strong>İndirme Oluştur</strong>'a tıklayıp listeden Instagram hesabınızı seçin ve <strong>Cihaza İndir</strong> deyin.",
            gStep5: "<strong>Bilgileri Özelleştir</strong>'i seçin. Sadece <strong>Takipçiler ve Takip Edilenler</strong>'i açık bırakıp kaydedin.",
            gStep6: "Zaman aralığını seçin ve formatı <strong>HTML</strong> yapıp <strong>İndirmeyi Başlat</strong>'a basın.",
            gStep7: "Dosya hazır olduğunda <strong>İndir</strong>'e basıp ZIP dosyasını cihazınıza indirin.",
            gStep8: "İnen ZIP dosyasını (<em>instagram+kullaniciadiniz.zip</em>) arşivden çıkarın.",
            gStep9: "Klasörün içindeki <code>connections > followers and following > pending follow requests</code> dosyasını seçin!",
            gBtnVideo: "▶️ Videolu Anlatımı İzle",
            errExtract: "Bu sayfada profil bağlantısı bulunamadı.",
            errFormat: "Format hatası",
            errData: "Lütfen bir dosya seçin veya kopyaladığınız içeriği yapıştırın!",
            errLinks: "Hiç link bulunamadı.",
            msgStop: "İşlem durduruldu.",
            useMem: "Geçmiş Hafızayı Kullan",
            useMemDesc: "Daha önce açılan profilleri es geçer",
            btnClearMem: "🗑️ Hafızayı Sıfırla",
            msgMemClear: "Hafıza başarıyla sıfırlandı!",
            msgAllDoneMem: "Tebrikler! Listedeki bütün profiller asistan tarafından daha önce işlenmiş. (Hafıza sayesinde es geçildi).",
            logHistory: "Log Geçmişi",
            btnReturn: "🏠 ANA EKRANA DÖN",
            btnLogs: "📜 LOG'LAR",
            legalDisclaimer: "Sorumluluk reddi: Bu eklenti oldugu gibi sunulur. Yapilan islemler ve olasi hesap veya platform sonuclari tamamen kullanicinin sorumlulugundadir. Gelistirici hicbir sorumluluk kabul etmez.",
            promoMozaredTitle: "Mozared",
            promoMozaredSubtitle: "Etkinlik ve Arkadaslik",
            promoRandevuTitle: "Randevu Servisi",
            promoRandevuSubtitle: "Kolay Randevu Yonetimi"
        } 
    };

    let userLangCode = localStorage.getItem("uiLang");
    if (!userLangCode) {
        userLangCode = (navigator.language || navigator.userLanguage).split('-')[0];
        if (!["tr", "en", "es", "de", "hi"].includes(userLangCode)) userLangCode = "en";
    }
    
    const trGet = (key) => (dict[userLangCode] && dict[userLangCode][key]) ? dict[userLangCode][key] : (dict["en"][key] || key);

    function applyTranslations() {
        const t = dict[userLangCode];
        if (t) {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) {
                    if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
                    else el.innerHTML = t[key];
                }
            });
        }
    }
    applyTranslations();

    const igBtnTexts = {
        tr: { req: "İstek Gönderildi", unf: "Takibi Bırak", fol: "Takip Et" },
        en: { req: "Requested", unf: "Unfollow", fol: "Follow" },
        es: { req: "Pendiente", unf: "Dejar de seguir", fol: "Seguir" },
        de: { req: "Angefragt", unf: "Nicht mehr folgen", fol: "Folgen" },
        hi: { req: "अनुरोध किया", unf: "अनफ़ॉलो करें", fol: "फ़ॉलो करें" }
    };
    const igLangSelect = document.getElementById('igLangSelect');

    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = userLangCode;
        langSelect.addEventListener('change', (e) => {
            userLangCode = e.target.value;
            localStorage.setItem("uiLang", userLangCode);
            applyTranslations();
            
            if (igLangSelect && igBtnTexts[userLangCode]) {
                igLangSelect.value = userLangCode;
                igLangSelect.dispatchEvent(new Event('change'));
            }
        });
    }

    const PERSISTED_PROGRESS_KEY = "keepProgressScreen";
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

    const sIntro = document.getElementById('screen-intro');
    const sConfig = document.getElementById('screen-config');
    const sProgress = document.getElementById('screen-progress');
    const sGuide = document.getElementById('screen-guide');
    const btnBack = document.getElementById('btn-back');
    const btnStart = document.getElementById('btn-start');
    const btnContinue = document.getElementById('btn-continue');
    const btnStop = document.getElementById('btn-stop');
    const btnReturn = document.getElementById('btn-return');
    const btnOpenLogs = document.getElementById('btn-open-logs');
    const manualPrompt = document.getElementById('manual-prompt');
    const logDiv = document.getElementById('log');
    const accLogContent = document.getElementById('acc-log-content');
    const progressCircle = document.getElementById('progress-circle');
    const LOG_AUTO_SCROLL_THRESHOLD = 32;
    const SNAPSHOT_REFRESH_INTERVAL_MS = 2500;
    const PORT_RECONNECT_DELAY_MS = 1000;
    const logScrollState = new WeakMap();

    let isUploadMode = false;
    let extractedUrls = [];
    let cachedLogs = [];
    let popupPort = null;
    let runtimeSnapshotIntervalId = null;
    let portReconnectTimeoutId = null;
    let lastProgress = {
        processed: 0,
        total: 0,
        processingActive: false,
        isWaitingForUser: false,
        hasLogs: false,
        sessionStatus: 'idle',
        lastUpdatedAt: 0
    };

    bindLogScrollTracking(logDiv);
    bindLogScrollTracking(accLogContent);

    function setStickyProgressScreen(enabled) {
        localStorage.setItem(PERSISTED_PROGRESS_KEY, enabled ? '1' : '0');
    }

    function shouldKeepProgressScreen() {
        return localStorage.getItem(PERSISTED_PROGRESS_KEY) === '1';
    }

    function switchScreen(screen) {
        document.querySelectorAll('.screen').forEach(item => item.classList.remove('active'));
        screen.classList.add('active');
        btnBack.style.display = (screen === sIntro || screen === sProgress || screen === sGuide) ? 'none' : 'block';
    }

    function normalizeProfileUrl(url) {
        if (!url || typeof url !== 'string') {
            return null;
        }

        try {
            const parsed = new URL(url.trim());
            const hostname = parsed.hostname.replace(/^www\./, '').toLowerCase();
            if (!hostname.endsWith('instagram.com')) {
                return null;
            }

            const firstSegment = parsed.pathname.split('/').filter(Boolean)[0];
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

    function mapRuntimeStateToProgress(runtimeState) {
        const safeState = runtimeState && typeof runtimeState === 'object' ? runtimeState : {};
        const queueTotal = Array.isArray(safeState.queueUrls) ? safeState.queueUrls.length : 0;
        const storedTotal = parseInt(safeState.totalAccounts, 10) || 0;
        const total = Math.max(queueTotal, storedTotal);

        return {
            processed: parseInt(safeState.processedCount, 10) || 0,
            total: total,
            processingActive: Boolean(safeState.processingActive),
            isWaitingForUser: Boolean(safeState.isWaitingForUser),
            hasLogs: cachedLogs.length > 0,
            sessionStatus: safeState.processingActive
                ? 'running'
                : ((parseInt(safeState.processedCount, 10) || 0) >= total && total > 0 ? 'completed' : (cachedLogs.length > 0 ? 'stopped' : 'idle')),
            currentProcessingStep: safeState.currentProcessingStep || 'idle',
            lastUpdatedAt: parseInt(safeState.lastUpdatedAt, 10) || 0
        };
    }

    function normalizeProgressPayload(progress) {
        const safeProgress = progress && typeof progress === 'object' ? progress : {};
        return {
            processed: parseInt(safeProgress.processed, 10) || 0,
            total: parseInt(safeProgress.total, 10) || 0,
            processingActive: Boolean(safeProgress.processingActive),
            isWaitingForUser: Boolean(safeProgress.isWaitingForUser),
            hasLogs: Boolean(safeProgress.hasLogs),
            sessionStatus: typeof safeProgress.sessionStatus === 'string' ? safeProgress.sessionStatus : 'idle',
            currentProcessingStep: typeof safeProgress.currentProcessingStep === 'string' ? safeProgress.currentProcessingStep : 'idle',
            blockedUrl: safeProgress.blockedUrl || null,
            blockedReason: safeProgress.blockedReason || null,
            lastUpdatedAt: parseInt(safeProgress.lastUpdatedAt, 10) || 0
        };
    }

    function hasMeaningfulProgress(progress = lastProgress) {
        const safeProgress = progress && typeof progress === 'object' ? progress : {};
        return (
            Boolean(safeProgress.processingActive) ||
            (parseInt(safeProgress.total, 10) || 0) > 0 ||
            (parseInt(safeProgress.processed, 10) || 0) > 0 ||
            Boolean(safeProgress.hasLogs) ||
            (typeof safeProgress.sessionStatus === 'string' && safeProgress.sessionStatus !== 'idle') ||
            Boolean(safeProgress.blockedUrl)
        );
    }

    function pickBetterProgress(...candidates) {
        const normalizeCandidate = candidate => normalizeProgressPayload(candidate || {});
        const scoreProgress = progress => {
            const safeProgress = normalizeCandidate(progress);
            let score = 0;

            if (safeProgress.processingActive) {
                score += 100000;
            }

            score += safeProgress.total * 100;
            score += safeProgress.processed * 10;
            score += safeProgress.hasLogs ? 5 : 0;
            score += safeProgress.sessionStatus !== 'idle' ? 3 : 0;
            score += safeProgress.lastUpdatedAt > 0 ? 1 : 0;

            return score;
        };

        return candidates
            .filter(Boolean)
            .map(normalizeCandidate)
            .sort((left, right) => scoreProgress(right) - scoreProgress(left))[0] || normalizeCandidate({});
    }

    function createLogEntryNode(message) {
        const entry = document.createElement('div');
        entry.style.marginBottom = '3px';
        const sanitizedMessage = String(message || "").replace(/<img\b[^>]*>/gi, '');

        if (sanitizedMessage.includes('<div') || sanitizedMessage.includes('<a ')) {
            entry.innerHTML = sanitizedMessage;
            return entry;
        }

        const htmlSafe = sanitizedMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        entry.innerHTML = htmlSafe.replace(urlRegex, '<a href="$1" target="_blank" style="color:#2563eb; text-decoration:underline;">$1</a>');
        return entry;
    }

    function isNearLogBottom(container) {
        if (!container) {
            return true;
        }

        const remaining = container.scrollHeight - container.clientHeight - container.scrollTop;
        return remaining <= LOG_AUTO_SCROLL_THRESHOLD;
    }

    function rememberLogScrollState(container) {
        if (!container) {
            return;
        }

        logScrollState.set(container, isNearLogBottom(container));
    }

    function shouldFollowLog(container) {
        if (!container) {
            return true;
        }

        if (!logScrollState.has(container)) {
            rememberLogScrollState(container);
        }

        return logScrollState.get(container) !== false;
    }

    function scrollLogToBottom(container) {
        if (!container) {
            return;
        }

        container.scrollTop = container.scrollHeight;
        logScrollState.set(container, true);
    }

    function captureLogScrollSnapshot(container) {
        if (!container) {
            return null;
        }

        return {
            follow: shouldFollowLog(container),
            distanceFromBottom: Math.max(0, container.scrollHeight - container.clientHeight - container.scrollTop)
        };
    }

    function restoreLogScrollSnapshot(container, snapshot) {
        if (!container || !snapshot) {
            return;
        }

        if (snapshot.follow) {
            scrollLogToBottom(container);
            return;
        }

        container.scrollTop = Math.max(0, container.scrollHeight - container.clientHeight - snapshot.distanceFromBottom);
        rememberLogScrollState(container);
    }

    function bindLogScrollTracking(container) {
        if (!container || container.dataset.logScrollBound === '1') {
            return;
        }

        container.dataset.logScrollBound = '1';
        rememberLogScrollState(container);
        container.addEventListener('scroll', () => {
            rememberLogScrollState(container);
        }, { passive: true });
    }

    function appendLogToContainer(container, message, options = {}) {
        if (!container) {
            return;
        }

        const shouldAutoScroll = options.forceScroll === true || shouldFollowLog(container);
        container.appendChild(createLogEntryNode(message));

        if (shouldAutoScroll) {
            scrollLogToBottom(container);
        }
    }

    function hasAccessibleLogHistory() {
        return (
            cachedLogs.length > 0 ||
            Boolean(lastProgress.hasLogs) ||
            hasMeaningfulProgress(lastProgress)
        );
    }

    function setHomeLogButtonVisibility() {
        btnOpenLogs.style.display = hasAccessibleLogHistory() ? 'block' : 'none';
    }

    function applyRuntimeSnapshot(logs, progress) {
        if (Array.isArray(logs)) {
            renderLogs(logs);
        }

        if (progress && typeof progress === 'object') {
            syncProgressUI(normalizeProgressPayload(progress));
        }
    }

    function schedulePortReconnect() {
        if (portReconnectTimeoutId !== null) {
            return;
        }

        portReconnectTimeoutId = window.setTimeout(() => {
            portReconnectTimeoutId = null;
            connectPopupPort();
            refreshRuntimeSnapshot();
        }, PORT_RECONNECT_DELAY_MS);
    }

    function handlePopupPortMessage(message) {
        if (message.action === "snapshot") {
            const snapshotProgress = normalizeProgressPayload(message.progress || {});
            const snapshotLogs = Array.isArray(message.logs) ? message.logs : [];
            const nextProgress = hasMeaningfulProgress(snapshotProgress) ? snapshotProgress : lastProgress;
            const nextLogs = snapshotLogs.length > 0 || cachedLogs.length === 0 ? snapshotLogs : cachedLogs;

            applyRuntimeSnapshot(nextLogs, nextProgress);
            maybeRestoreProgressScreen();
            return;
        }

        if (message.action === "log") {
            appendLog(message.message);
            syncProgressUI({ hasLogs: true });
            return;
        }

        if (message.action === "progress") {
            syncProgressUI(normalizeProgressPayload(message));
            maybeRestoreProgressScreen();
            return;
        }

        if (message.action === "manualBatchLimitReached") {
            manualPrompt.style.display = 'block';
        }
    }

    function connectPopupPort() {
        try {
            popupPort = chrome.runtime.connect({ name: "popup" });
        } catch (error) {
            popupPort = null;
            schedulePortReconnect();
            return;
        }

        popupPort.onMessage.addListener(handlePopupPortMessage);
        popupPort.onDisconnect.addListener(() => {
            popupPort = null;
            schedulePortReconnect();
        });
    }

    function ensureRuntimeSnapshotLoop() {
        if (runtimeSnapshotIntervalId !== null) {
            return;
        }

        runtimeSnapshotIntervalId = window.setInterval(() => {
            if (
                document.hidden ||
                (!lastProgress.processingActive && !shouldKeepProgressScreen())
            ) {
                return;
            }

            refreshRuntimeSnapshot();
        }, SNAPSHOT_REFRESH_INTERVAL_MS);
    }

    function refreshRuntimeSnapshot(onDone) {
        chrome.runtime.sendMessage({ action: "getRuntimeSnapshot" }, liveSnapshot => {
            chrome.storage.local.get({
                runtimeLogs: [],
                runtimeState: {},
                runtimeProgress: {},
                lastSessionSnapshot: null
            }, stored => {
                const storedLogs = Array.isArray(stored.runtimeLogs) ? stored.runtimeLogs : [];
                const snapshot = stored.lastSessionSnapshot && typeof stored.lastSessionSnapshot === 'object' ? stored.lastSessionSnapshot : null;
                const snapshotLogs = Array.isArray(snapshot?.logs) ? snapshot.logs : [];
                const snapshotProgress = snapshot?.progress && typeof snapshot.progress === 'object'
                    ? normalizeProgressPayload(snapshot.progress)
                    : null;
                const liveLogs = (!chrome.runtime.lastError && liveSnapshot && liveSnapshot.action === 'snapshot' && Array.isArray(liveSnapshot.logs))
                    ? liveSnapshot.logs
                    : [];
                const stateProgress = mapRuntimeStateToProgress(stored.runtimeState || {});
                const storedProgress = normalizeProgressPayload(stored.runtimeProgress || {});
                const liveProgress = (!chrome.runtime.lastError && liveSnapshot && liveSnapshot.action === 'snapshot')
                    ? normalizeProgressPayload(liveSnapshot.progress || {})
                    : null;
                const bestProgress = pickBetterProgress(liveProgress, storedProgress, stateProgress, snapshotProgress);
                const bestLogs = [liveLogs, storedLogs, snapshotLogs].sort((left, right) => right.length - left.length)[0] || [];

                applyRuntimeSnapshot(bestLogs, bestProgress);
                if (typeof onDone === 'function') {
                    onDone();
                }
            });
        });
    }

    function renderLogs(logs) {
        const mainSnapshot = captureLogScrollSnapshot(logDiv);
        const accSnapshot = captureLogScrollSnapshot(accLogContent);
        cachedLogs = Array.isArray(logs) ? logs.slice() : [];
        logDiv.innerHTML = '';
        if (accLogContent) {
            accLogContent.innerHTML = '';
        }

        cachedLogs.forEach(message => {
            if (logDiv) {
                logDiv.appendChild(createLogEntryNode(message));
            }
            if (accLogContent) {
                accLogContent.appendChild(createLogEntryNode(message));
            }
        });

        restoreLogScrollSnapshot(logDiv, mainSnapshot);
        restoreLogScrollSnapshot(accLogContent, accSnapshot);

        setHomeLogButtonVisibility();
    }

    function appendLog(message) {
        cachedLogs.push(message);
        appendLogToContainer(logDiv, message);
        appendLogToContainer(accLogContent, message);
        setHomeLogButtonVisibility();
    }

    function updateProgress(processed, total) {
        progressCircle.textContent = `${processed}/${total}`;
    }

    function syncProgressUI(patch = {}) {
        lastProgress = { ...lastProgress, ...patch };
        lastProgress.hasLogs = cachedLogs.length > 0 || Boolean(lastProgress.hasLogs);

        updateProgress(lastProgress.processed || 0, lastProgress.total || 0);

        if (lastProgress.processingActive) {
            btnStop.style.display = 'block';
            btnReturn.style.display = 'none';
        } else {
            btnStop.style.display = 'none';
            btnReturn.style.display = (cachedLogs.length > 0 || hasMeaningfulProgress(lastProgress) || shouldKeepProgressScreen()) ? 'block' : 'none';
        }

        manualPrompt.style.display = lastProgress.isWaitingForUser ? 'block' : 'none';
        setHomeLogButtonVisibility();
    }

    function maybeRestoreProgressScreen() {
        if (lastProgress.processingActive || (shouldKeepProgressScreen() && hasAccessibleLogHistory())) {
            switchScreen(sProgress);
            return;
        }

        if (!lastProgress.processingActive && shouldKeepProgressScreen() && !hasAccessibleLogHistory()) {
            setStickyProgressScreen(false);
            switchScreen(sIntro);
        }
    }

    function saveSettings() {
        chrome.storage.sync.set({
            tabDelay: parseInt(document.getElementById('tabDelay').value, 10) || 2,
            clickDelay: parseInt(document.getElementById('clickDelay').value, 10) || 4,
            batchLimit: parseInt(document.getElementById('batchLimit').value, 10) || 40,
            sleepTime: parseInt(document.getElementById('sleepTime').value, 10) || 2,
            useMemory: document.getElementById('useMemory') ? document.getElementById('useMemory').checked : true,
            listOrder: document.getElementById('listOrder') ? document.getElementById('listOrder').value : "oldest",
            requestText: document.getElementById('requestText').value.trim() || "İstek Gönderildi",
            unfollowText: document.getElementById('unfollowText').value.trim() || "Takibi Bırak",
            followText: document.getElementById('followText').value.trim() || "Takip Et"
        });
    }

    btnBack.addEventListener('click', () => switchScreen(sIntro));
    document.getElementById('btn-how-to').addEventListener('click', () => switchScreen(sGuide));
    document.getElementById('btn-guide-back').addEventListener('click', () => switchScreen(sIntro));

    btnOpenLogs.addEventListener('click', () => {
        refreshRuntimeSnapshot(() => {
            setStickyProgressScreen(true);
            switchScreen(sProgress);
            syncProgressUI();
        });
    });

    btnContinue.addEventListener('click', () => {
        manualPrompt.style.display = 'none';
        chrome.runtime.sendMessage({ action: "continueManualBatch" });
    });

    btnStop.addEventListener('click', () => {
        manualPrompt.style.display = 'none';
        setStickyProgressScreen(true);
        chrome.runtime.sendMessage({ action: "stopProcessing" }, () => {
            syncProgressUI({ processingActive: false, isWaitingForUser: false });
        });
    });

    btnReturn.addEventListener('click', () => {
        setStickyProgressScreen(false);
        manualPrompt.style.display = 'none';
        switchScreen(sIntro);
        syncProgressUI({ processingActive: false, isWaitingForUser: false });
    });

    document.getElementById('opt-tab').addEventListener('click', () => {
        isUploadMode = false;
        document.getElementById('upload-area').style.display = 'none';

        chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
            if (!tabs[0]) {
                alert(trGet('errExtract'));
                return;
            }

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: () => Array.from(document.querySelectorAll("a[href^='https://www.instagram.com/']")).map(a => a.href).filter(href => href !== "https://www.instagram.com/")
            }, result => {
                if (result && result[0] && Array.isArray(result[0].result) && result[0].result.length > 0) {
                    extractedUrls = normalizeProfileUrls(result[0].result);
                    switchScreen(sConfig);
                    return;
                }

                alert(trGet('errExtract'));
            });
        });
    });

    document.getElementById('opt-file').addEventListener('click', () => {
        isUploadMode = true;
        document.getElementById('upload-area').style.display = 'block';
        switchScreen(sConfig);
    });

    document.getElementById('jsonFile').addEventListener('change', event => {
        if (event.target.files.length) {
            document.getElementById('fileNameDisplay').textContent = event.target.files[0].name;
        }
    });

    if (igLangSelect) {
        igLangSelect.addEventListener('change', event => {
            const langCode = event.target.value;
            if (!igBtnTexts[langCode]) {
                return;
            }

            document.getElementById('requestText').value = igBtnTexts[langCode].req;
            document.getElementById('unfollowText').value = igBtnTexts[langCode].unf;
            document.getElementById('followText').value = igBtnTexts[langCode].fol;
            saveSettings();
        });
    }

    document.querySelectorAll('input[name="wmode"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const manualRadio = document.querySelector('input[name="amode"][value="manual"]');
            const manualLabel = document.getElementById('lbl-action-manual');
            const autoRadio = document.querySelector('input[name="amode"][value="auto"]');

            if (radio.value === 'bg') {
                manualRadio.disabled = true;
                manualLabel.style.opacity = 0.5;
                autoRadio.checked = true;
                return;
            }

            manualRadio.disabled = false;
            manualLabel.style.opacity = 1;
        });
    });

    btnStart.addEventListener('click', async () => {
        saveSettings();

        let finalUrls = [];
        if (isUploadMode) {
            let content = "";
            const fileInput = document.getElementById('jsonFile');
            const textInput = document.getElementById('jsonText');

            if (fileInput.files.length) {
                try {
                    content = await fileInput.files[0].text();
                } catch (error) {
                    alert(trGet('errFormat'));
                    return;
                }
            } else if (textInput.value.trim() !== '') {
                content = textInput.value.trim();
            } else {
                alert(trGet('errData'));
                return;
            }

            if (content.toLowerCase().includes('<html')) {
                const doc = new DOMParser().parseFromString(content, 'text/html');
                doc.querySelectorAll('a[href^="https://www.instagram.com/"]').forEach(anchor => {
                    if (anchor.href !== "https://www.instagram.com/" && !anchor.href.includes("help")) {
                        finalUrls.push(anchor.href);
                    }
                });
            } else {
                try {
                    const data = JSON.parse(content);
                    data.relationships_follow_requests_sent?.forEach(item => item.string_list_data?.forEach(link => {
                        if (link.href) {
                            finalUrls.push(link.href);
                        }
                    }));
                } catch (error) {
                    alert(trGet('errFormat'));
                    return;
                }
            }
        } else {
            finalUrls = extractedUrls.slice();
        }

        finalUrls = normalizeProfileUrls(finalUrls);
        if (!finalUrls.length) {
            alert(trGet('errLinks'));
            return;
        }

        if (document.getElementById('listOrder')?.value === 'oldest') {
            finalUrls.reverse();
        }

        chrome.storage.local.get({ unfollowHistory: [], resolvedProfiles: [] }, data => {
            const history = normalizeProfileUrls(data.unfollowHistory);
            const resolvedProfileUrls = Array.isArray(data.resolvedProfiles)
                ? normalizeProfileUrls(data.resolvedProfiles.map(item => item?.url))
                : [];
            const skipSet = new Set([...history, ...resolvedProfileUrls]);

            if (document.getElementById('useMemory')?.checked) {
                finalUrls = finalUrls.filter(url => !skipSet.has(url));
            }

            if (!finalUrls.length) {
                alert(trGet('msgAllDoneMem'));
                return;
            }

            manualPrompt.style.display = 'none';
            setStickyProgressScreen(true);
            syncProgressUI({
                processed: 0,
                total: finalUrls.length,
                processingActive: true,
                isWaitingForUser: false
            });
            switchScreen(sProgress);

            chrome.runtime.sendMessage({
                action: "startProcessing",
                urls: finalUrls,
                total: finalUrls.length,
                wmode: document.querySelector('input[name="wmode"]:checked').value,
                amode: document.querySelector('input[name="amode"]:checked').value,
                lang: userLangCode
            });
        });
    });

    document.getElementById('btnClearMem')?.addEventListener('click', () => {
        chrome.storage.local.set({ unfollowHistory: [], resolvedProfiles: [] }, () => {
            alert(trGet('msgMemClear'));
        });
    });

    chrome.storage.sync.get({
        tabDelay: 2,
        clickDelay: 4,
        batchLimit: 40,
        sleepTime: 2,
        requestText: "İstek Gönderildi",
        unfollowText: "Takibi Bırak",
        followText: "Takip Et",
        selectedIgLang: "tr",
        listOrder: "oldest",
        useMemory: true
    }, settings => {
        if (!localStorage.getItem('smartDelayDefaultsMigrated')) {
            if (settings.tabDelay === 4 && settings.clickDelay === 8) {
                settings.tabDelay = 2;
                settings.clickDelay = 4;
                chrome.storage.sync.set({ tabDelay: 2, clickDelay: 4 });
            }

            localStorage.setItem('smartDelayDefaultsMigrated', 'true');
        }

        if (!localStorage.getItem('smartBatchDefaultsMigrated')) {
            if (settings.batchLimit === 10 && settings.sleepTime === 10) {
                settings.batchLimit = 40;
                settings.sleepTime = 2;
                chrome.storage.sync.set({ batchLimit: 40, sleepTime: 2 });
            }

            localStorage.setItem('smartBatchDefaultsMigrated', 'true');
        }

        if (!localStorage.getItem('bLimitSet10')) {
            settings.batchLimit = 40;
            chrome.storage.sync.set({ batchLimit: 40 });
            localStorage.setItem('bLimitSet10', 'true');
        }

        ['tabDelay', 'clickDelay', 'batchLimit', 'sleepTime', 'requestText', 'unfollowText', 'followText', 'listOrder'].forEach(key => {
            if (document.getElementById(key)) {
                document.getElementById(key).value = settings[key];
            }
        });

        if (document.getElementById('useMemory')) {
            document.getElementById('useMemory').checked = settings.useMemory;
        }

        let foundLang = "custom";
        for (const langCode in igBtnTexts) {
            if (igBtnTexts[langCode].req.trim().toLowerCase() === settings.requestText.trim().toLowerCase()) {
                foundLang = langCode;
                break;
            }
        }

        if (igLangSelect) {
            igLangSelect.value = foundLang;
        }
    });

    document.getElementById('acc-log-header')?.addEventListener('click', () => {
        const icon = document.getElementById('acc-log-icon');
        if (accLogContent.style.display === 'none') {
            accLogContent.style.display = 'block';
            icon.textContent = '▲';
            if (shouldFollowLog(accLogContent)) {
                scrollLogToBottom(accLogContent);
            }
            return;
        }

        accLogContent.style.display = 'none';
        icon.textContent = '▼';
    });

    refreshRuntimeSnapshot(() => {
        maybeRestoreProgressScreen();
    });

    chrome.runtime.sendMessage({ action: "getProgress" }, response => {
        if (chrome.runtime.lastError || !response) {
            return;
        }

        syncProgressUI(normalizeProgressPayload(response));
        maybeRestoreProgressScreen();
    });

    connectPopupPort();
    ensureRuntimeSnapshotLoop();
})();
