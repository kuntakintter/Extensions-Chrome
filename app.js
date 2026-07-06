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
    descGravity: "Previsualiza cualquier enlace al instante en un popup flotante con solo pasar el cursor. Navega rápido, lee contenido sin abrir pestañas y personaliza tus tiempos de respuesta.",
    dlBtn: "Descargar en Chrome Web Store",
    
    // Shopping List
    titleShopping: "Lista de la Compra",
    descShopping: "El carrito de compras universal. Agrupa, organiza y guarda productos de tus tiendas online favoritas en una sola lista local, sin rastreadores ni anuncios.",
    
    // InstaSkip
    descInstaSkip: "Disfruta de streaming ininterrumpido. Salta de forma automática e inteligente los anuncios molestos en tus portales de vídeo preferidos sin retardos.",

    // FirmaPDF
    descFirmaPdf: "Firma digital instantánea y segura. Firma cualquier PDF localmente desde tu navegador en un clic sin subir tus documentos privados a servidores externos.",

    // Recortador Pro
    titleCropper: "Recortador Pro",
    descCropper: "Capturas de pantalla inteligentes. Recorta, edita y copia cualquier sección de tu navegador directamente a tu portapapeles o descárgala al instante.",

    // Downloads Manager
    titleDownloads: "Downloads Manager",
    descDownloads: "Acceso y limpieza de descargas en un clic. Administra tu historial de descargas recientes desde una barra de herramientas minimalista y optimizada.",

    // FisioBreak
    descFisioBreak: "Tu bienestar en el escritorio. Recordatorios inteligentes y animados de estiramientos ergonómicos para evitar dolores musculares durante tus horas de trabajo.",

    // Pesca Abisal
    titlePesca: "Pesca Abisal",
    descPesca: "El descanso retro perfecto. Un minijuego pixel-art de pesca submarina diseñado para desconectar y relajar tu mente durante breves pausas de trabajo.",
    
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
    descGravity: "Preview any web link instantly in a secure floating popup. Speed up your browsing, read articles without cluttering tabs, and customize your hover delays.",
    dlBtn: "Download on Chrome Web Store",
    
    // Shopping List
    titleShopping: "Shopping List",
    descShopping: "The universal shopping cart. Consolidate and track products from all your favorite online stores in one clean, local dashboard. 100% private and ad-free.",
    
    // InstaSkip
    descInstaSkip: "Enjoy uninterrupted video streaming. Automatically and intelligently skip annoying video ads on your favorite streaming sites with zero delay.",

    // FirmaPDF
    descFirmaPdf: "Instant and secure digital signing. Sign any PDF file locally in your browser with a single click. Keep your private documents offline and secure.",

    // Recortador Pro
    titleCropper: "Screen Cropper Pro",
    descCropper: "Smart screen capture utility. Crop, annotate, and copy any section of your browser directly to your clipboard or download it instantly.",

    // Downloads Manager
    titleDownloads: "Downloads Manager",
    descDownloads: "One-click download management. Access, clean, and organize your recent downloads history from a clean, lightweight toolbar interface.",

    // FisioBreak
    descFisioBreak: "Your desk wellness assistant. Receive smart, animated reminder alerts for ergonomic stretches to prevent muscle fatigue during long work sessions.",

    // Pesca Abisal
    titlePesca: "Abyssal Fishing",
    descPesca: "The ultimate retro break. A charming pixel-art deep-sea fishing minigame designed to help you relax and refresh your mind during quick work breaks.",
    
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
let currentLang = localStorage.getItem('siteLanguage') || 'en';

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
