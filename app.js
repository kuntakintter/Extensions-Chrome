// Language Dictionary
const dictionary = {
  es: {
    toggleBtn: "EN",
    navOurs: "Nuestras Extensiones",
    navRecs: "Las Mejores del 2026",
    heroBadge: "⚡ Utilidades para tu navegador",
    heroTitle: "Lleva tu Navegación al Siguiente Nivel",
    heroSubtitle: "Herramientas ligeras, seguras y gratuitas diseñadas para optimizar tu tiempo, productividad y privacidad mientras navegas en Google Chrome.",
    heroExplore: "Explorar Extensiones",
    secOursTitle: "Nuestras Extensiones Oficiales",
    secOursSubtitle: "Herramientas premium desarrolladas bajo los estándares más altos de seguridad y rendimiento.",
    
    // Gravity Preview
    descGravity: "Previsualiza cualquier enlace al instante en una ventana flotante sin tener que abrir nuevas pestañas. ¡Arrastra, fija y lee de forma ultra-rápida!",
    dlBtn: "Descargar en Chrome Web Store",
    
    // Shopping List
    titleShopping: "Lista de la Compra",
    descShopping: "Guarda y organiza tus productos favoritos de cualquier tienda online. Sincronización local, segura y sin publicidad molesta.",
    
    // InstaSkip
    descInstaSkip: "Salta anuncios automáticamente de manera inteligente en tus portales de streaming favoritos para una experiencia continua y limpia.",

    // FirmaPDF
    descFirmaPdf: "Firma cualquier documento PDF de forma rápida y sencilla directamente desde tu navegador, con total seguridad y privacidad local.",

    // Recortador Pro
    titleCropper: "Recortador Pro",
    descCropper: "Realiza capturas de pantalla parciales o completas al instante. Edita, recorta y copia la imagen directamente al portapapeles.",

    // Downloads Manager
    titleDownloads: "Downloads Manager",
    descDownloads: "Accede de forma rápida y limpia a tu historial de descargas recientes. Limpia la lista y organiza tus descargas en un clic.",

    // FisioBreak
    descFisioBreak: "Recibe recordatorios amigables para hacer pausas de estiramiento y cuidar de tu postura física mientras trabajas en el ordenador.",

    // Pesca Abisal
    titlePesca: "Pesca Abisal",
    descPesca: "Relájate con este minijuego retro de pesca submarina en tu navegador. Ideal para tomarte un breve descanso en tu jornada laboral.",
    
    // Recommendations Section
    secRecsTitle: "Las Mejores Extensiones de Chrome del 2026",
    secRecsSubtitle: "Nuestra lista recomendada de utilidades indispensables para potenciar tu navegador a diario.",
    
    recDescGravity: "La mejor herramienta para leer artículos, noticias y explorar enlaces sin desorganizar tu navegador con infinidad de pestañas.",
    recDescUblock: "El bloqueador de anuncios más eficiente, ligero y respetuoso con la memoria RAM del mercado. Imprescindible para una navegación limpia.",
    recDescBitwarden: "Gestor de contraseñas de código abierto, seguro y multiplataforma. Protege todas tus cuentas digitales con cifrado de grado militar.",
    recTitleShoppingList: "Lista de la Compra",
    recDescShoppingList: "La mejor alternativa para agrupar carritos de compra de tiendas distintas en un solo panel local y sin rastreadores.",
    
    privacyLink: "Política de Privacidad",
    badgeFree: "Gratis"
  },
  en: {
    toggleBtn: "ES",
    navOurs: "Our Extensions",
    navRecs: "Best of 2026",
    heroBadge: "⚡ Browser utilities",
    heroTitle: "Take Your Browsing to the Next Level",
    heroSubtitle: "Lightweight, secure, and free browser utilities designed to optimize your time, productivity, and privacy while navigating Google Chrome.",
    heroExplore: "Explore Extensions",
    secOursTitle: "Our Official Extensions",
    secOursSubtitle: "Premium tools developed under the highest standards of security and performance.",
    
    // Gravity Preview
    descGravity: "Preview any link instantly in a floating window without opening new tabs. Drag, pin, and read ultra-fast!",
    dlBtn: "Download on Chrome Web Store",
    
    // Shopping List
    titleShopping: "Shopping List",
    descShopping: "Save and organize your favorite products from any online store. Local, secure, and ad-free syncing.",
    
    // InstaSkip
    descInstaSkip: "Automatically skip ads intelligently on your favorite streaming portals for a clean and continuous experience.",

    // FirmaPDF
    descFirmaPdf: "Sign any PDF document quickly and easily right from your browser, with total security and local privacy.",

    // Recortador Pro
    titleCropper: "Screen Cropper Pro",
    descCropper: "Take partial or full screenshots instantly. Edit, crop, and copy the image directly to your clipboard.",

    // Downloads Manager
    titleDownloads: "Downloads Manager",
    descDownloads: "Quickly and cleanly access your recent downloads list. Clear the log and organize downloads in one click.",

    // FisioBreak
    descFisioBreak: "Receive friendly reminders to stretch, take breaks, and improve your physical posture while working at your desk.",

    // Pesca Abisal
    titlePesca: "Abyssal Fishing",
    descPesca: "Relax with this retro submarine fishing minigame inside your browser. Perfect for taking short breaks during work.",
    
    // Recommendations Section
    secRecsTitle: "The Best Chrome Extensions of 2026",
    secRecsSubtitle: "Our recommended list of essential browser tools to boost your daily navigation.",
    
    recDescGravity: "The best tool for reading articles, news, and links without cluttering your browser with endless tabs.",
    recDescUblock: "The most efficient, lightweight, and RAM-friendly ad blocker on the market. Essential for clean browsing.",
    recDescBitwarden: "Secure, cross-platform open-source password manager. Protect all your digital accounts with military-grade encryption.",
    recTitleShoppingList: "Shopping List",
    recDescShoppingList: "The best alternative to consolidate shopping carts from different sites into a single local dashboard.",
    
    privacyLink: "Privacy Policy",
    badgeFree: "Free"
  }
};

// State Variable
let currentLang = localStorage.getItem('siteLanguage') || 'es';

// DOM Elements
const btnToggleLang = document.getElementById('btn-toggle-lang');
const navItemOurs = document.getElementById('nav-item-ours');
const navItemRecs = document.getElementById('nav-item-recs');
const lblHeroBadge = document.getElementById('lbl-hero-badge');
const lblHeroTitle = document.getElementById('lbl-hero-title');
const lblHeroSubtitle = document.getElementById('lbl-hero-subtitle');
const btnHeroExplore = document.getElementById('btn-hero-explore');
const lblSecOursTitle = document.getElementById('lbl-sec-ours-title');
const lblSecOursSubtitle = document.getElementById('lbl-sec-ours-subtitle');

// Ext 1: Gravity
const descGravity = document.getElementById('desc-gravity');
const btnDlGravity = document.getElementById('btn-dl-gravity');

// Ext 2: Shopping
const titleShopping = document.getElementById('title-shopping');
const descShopping = document.getElementById('desc-shopping');
const btnDlShopping = document.getElementById('btn-dl-shopping');

// Ext 3: InstaSkip
const descInstaskip = document.getElementById('desc-instaskip');
const btnDlInstaskip = document.getElementById('btn-dl-instaskip');

// Ext 4: FirmaPDF
const descFirmaPdf = document.getElementById('desc-firmapdf');
const btnDlFirmaPdf = document.getElementById('btn-dl-firmapdf');

// Ext 5: Cropper
const titleCropper = document.getElementById('title-cropper');
const descCropper = document.getElementById('desc-cropper');
const btnDlCropper = document.getElementById('btn-dl-cropper');

// Ext 6: Downloads
const titleDownloads = document.getElementById('title-downloads');
const descDownloads = document.getElementById('desc-downloads');
const btnDlDownloads = document.getElementById('btn-dl-downloads');

// Ext 7: FisioBreak
const descFisiobreak = document.getElementById('desc-fisiobreak');
const btnDlFisiobreak = document.getElementById('btn-dl-fisiobreak');

// Ext 8: Pesca
const titlePesca = document.getElementById('title-pesca');
const descPesca = document.getElementById('desc-pesca');
const btnDlPesca = document.getElementById('btn-dl-pesca');

// Recs Section
const lblSecRecsTitle = document.getElementById('lbl-sec-recs-title');
const lblSecRecsSubtitle = document.getElementById('lbl-sec-recs-subtitle');

const recDescGravity = document.getElementById('rec-desc-gravity');
const recDescUblock = document.getElementById('rec-desc-ublock');
const recDescBitwarden = document.getElementById('rec-desc-bitwarden');
const recTitleShoppingList = document.getElementById('rec-title-shopping-list');
const recDescShoppingList = document.getElementById('rec-desc-shopping-list');

const lnkPrivacy = document.getElementById('lnk-privacy');

// Badges
const badgeFree1 = document.getElementById('badge-free-1');
const badgeFree2 = document.getElementById('badge-free-2');
const badgeFree3 = document.getElementById('badge-free-3');
const badgeFree4 = document.getElementById('badge-free-4');
const badgeFree5 = document.getElementById('badge-free-5');
const badgeFree6 = document.getElementById('badge-free-6');
const badgeFree7 = document.getElementById('badge-free-7');
const badgeFree8 = document.getElementById('badge-free-8');

// Translate function
function updateTranslations() {
  const dict = dictionary[currentLang];
  
  btnToggleLang.innerText = dict.toggleBtn;
  navItemOurs.innerText = dict.navOurs;
  navItemRecs.innerText = dict.navRecs;
  lblHeroBadge.innerText = dict.heroBadge;
  lblHeroTitle.innerText = dict.heroTitle;
  lblHeroSubtitle.innerText = dict.heroSubtitle;
  btnHeroExplore.innerText = dict.heroExplore;
  lblSecOursTitle.innerText = dict.secOursTitle;
  lblSecOursSubtitle.innerText = dict.secOursSubtitle;
  
  // Ext 1
  descGravity.innerText = dict.descGravity;
  btnDlGravity.innerText = dict.dlBtn;
  
  // Ext 2
  titleShopping.innerText = dict.titleShopping;
  descShopping.innerText = dict.descShopping;
  btnDlShopping.innerText = dict.dlBtn;
  
  // Ext 3
  descInstaskip.innerText = dict.descInstaSkip;
  btnDlInstaskip.innerText = dict.dlBtn;

  // Ext 4
  descFirmaPdf.innerText = dict.descFirmaPdf;
  btnDlFirmaPdf.innerText = dict.dlBtn;

  // Ext 5
  titleCropper.innerText = dict.titleCropper;
  descCropper.innerText = dict.descCropper;
  btnDlCropper.innerText = dict.dlBtn;

  // Ext 6
  titleDownloads.innerText = dict.titleDownloads;
  descDownloads.innerText = dict.descDownloads;
  btnDlDownloads.innerText = dict.dlBtn;

  // Ext 7
  descFisiobreak.innerText = dict.descFisioBreak;
  btnDlFisiobreak.innerText = dict.dlBtn;

  // Ext 8
  titlePesca.innerText = dict.titlePesca;
  descPesca.innerText = dict.descPesca;
  btnDlPesca.innerText = dict.dlBtn;
  
  // Recs
  lblSecRecsTitle.innerText = dict.secRecsTitle;
  lblSecRecsSubtitle.innerText = dict.secRecsSubtitle;
  
  recDescGravity.innerText = dict.recDescGravity;
  recDescUblock.innerText = dict.recDescUblock;
  recDescBitwarden.innerText = dict.recDescBitwarden;
  recTitleShoppingList.innerText = dict.recTitleShoppingList;
  recDescShoppingList.innerText = dict.recDescShoppingList;
  
  lnkPrivacy.innerText = dict.privacyLink;
  
  // Badges
  badgeFree1.innerText = dict.badgeFree;
  badgeFree2.innerText = dict.badgeFree;
  badgeFree3.innerText = dict.badgeFree;
  badgeFree4.innerText = dict.badgeFree;
  badgeFree5.innerText = dict.badgeFree;
  badgeFree6.innerText = dict.badgeFree;
  badgeFree7.innerText = dict.badgeFree;
  badgeFree8.innerText = dict.badgeFree;

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
}

// Toggle Language Click
btnToggleLang.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  localStorage.setItem('siteLanguage', currentLang);
  updateTranslations();
});

// Startup Initialization
window.addEventListener('DOMContentLoaded', () => {
  updateTranslations();
});
