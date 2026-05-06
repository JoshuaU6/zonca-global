import { useSyncExternalStore } from 'react';

export type Language = 'en' | 'fr' | 'tr';

const VALID_LANGS: Language[] = ['en', 'fr', 'tr'];

// ---------------------------------------------------------------------------
// Module-level store — completely independent of React's component tree
// ---------------------------------------------------------------------------

function readStoredLang(): Language {
  try {
    const saved = localStorage.getItem('zonca_lang');
    if (saved && VALID_LANGS.includes(saved as Language)) return saved as Language;
    const browser = navigator.language.toLowerCase();
    if (browser.startsWith('fr')) return 'fr';
    if (browser.startsWith('tr')) return 'tr';
  } catch { /* ignore */ }
  return 'en';
}

let _lang: Language = readStoredLang();
const _listeners = new Set<() => void>();

function subscribeLang(listener: () => void) {
  _listeners.add(listener);
  return () => { _listeners.delete(listener); };
}

function getLang(): Language {
  return _lang;
}

export function setLang(newLang: Language) {
  if (newLang === _lang) return;
  _lang = newLang;
  try { localStorage.setItem('zonca_lang', newLang); } catch { /* ignore */ }
  _listeners.forEach(l => l());
}

// ---------------------------------------------------------------------------
// Translation map
// ---------------------------------------------------------------------------

const translationMap: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    "hero.badge": "Featured Project",
    "hero.title": "Architectural Metal & Glass.",
    "hero.subtitle": "Excellence in every detail, strength in every structure.",
    "hero.cta.primary": "Explore Our Work →",
    "hero.cta.secondary": "Contact",

    "home.services.title": "Our Expertise",
    "home.services.view_all": "View All Services →",
    "home.about.title": "Building the Future",
    "home.about.text": "Zonca Global Investment Ltd is a fabrication and installation company providing modern aluminum, glass, and steel solutions for residential, commercial, and industrial projects.",
    "home.about.cta": "Learn More About Us →",
    "home.cta.title": "Ready to start your project?",
    "home.cta.text": "Get in touch with our experts today to discuss your requirements.",
    "home.cta.button": "Contact Us Now",

    "about.badge": "Who We Are",
    "about.title": "About Zonca Global",
    "about.who_badge": "Our Story",
    "about.who_title": "Building the Future with Metal & Glass",
    "about.company_desc": "Zonca Global Investment Ltd is a fabrication and installation company that provides modern aluminum, glass, and steel solutions for residential, commercial, and industrial projects. We focus on delivering strong, reliable, and well-finished structures that improve both the function and appearance of buildings.",
    "about.commitment": "With skilled professionals and quality materials, we ensure every project is completed with attention to detail, durability, and customer satisfaction. We are committed to quality workmanship, reliable service, and meeting the needs of every client.",
    "about.stats.years": "10+",
    "about.stats.years_label": "Years Experience",
    "about.stats.projects": "200+",
    "about.stats.projects_label": "Completed Projects",
    "about.stats.clients_label": "Satisfied Clients",
    "about.values.title": "Why Choose Us",
    "about.pillars_badge": "Our Commitment",
    "about.pillars_title": "Sustainability Is Our Vision",
    "about.pillars_subtitle": "In the perspective of our universal understanding of quality, sustainability is an essential part of our basic vision.",
    "about.pillar.quality": "Production Quality",
    "about.pillar.price": "Right Price",
    "about.pillar.delivery": "Just-In-Time Delivery",
    "about.pillar.solution": "Generating Solutions",
    "about.pillar.development": "Product Development",
    "about.pillar.environment": "Eco-Friendly Manufacturing",
    "about.pillar.training": "Development & Training",
    "about.offer_badge": "What We Do",
    "about.offer_title": "Our Areas of Expertise",

    "products.title": "Our Products",
    "products.subtitle": "Premium architectural solutions engineered for excellence",

    "services.badge": "What We Offer",
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive fabrication and installation solutions from design to final handover",
    "services.process_badge": "How We Work",
    "services.process.title": "Our Process",
    "services.process.survey": "Site Survey",
    "services.process.design": "Design & Engineering",
    "services.process.fabrication": "Fabrication",
    "services.process.installation": "Installation",
    "services.process.handover": "Final Handover",

    "services.aluminum.title": "Aluminum Systems",
    "services.aluminum.desc": "We design and install aluminum doors, windows, partitions, railings, and other aluminum structures that offer durability, security, and a modern finish.",
    "services.glass.title": "Glass Systems",
    "services.glass.desc": "Our glass installations include frameless glass partitions, sliding glass systems, folding glass systems, glass railings, and shower enclosures, using high-quality tempered glass for safety and durability.",
    "services.guillotine.title": "Guillotine Glass Systems",
    "services.guillotine.desc": "We install motorized vertical sliding glass systems suitable for balconies, terraces, and commercial spaces, providing protection while maintaining clear views.",
    "services.pergola.title": "Pergola Systems",
    "services.pergola.desc": "Our pergola structures provide stylish outdoor shade solutions for gardens, rooftops, patios, and relaxation areas.",
    "services.steel.title": "Iron & Steel Fabrication",
    "services.steel.desc": "We fabricate and install steel gates, security doors, railings, structural frames, and other metal works designed for strength and long-term use.",
    "services.shutters.title": "Automated Roller Shutters",
    "services.shutters.desc": "We supply and install automated roller shutter systems for shops, warehouses, garages, and other commercial properties, offering convenience and security.",
    "services.electrical.title": "Electrical Panels",
    "services.electrical.desc": "We fabricate and install industrial and commercial electrical panels built to the highest safety standards, ensuring reliable power distribution for your facility.",
    "services.racking.title": "Racking Systems",
    "services.racking.desc": "We design and supply heavy-duty racking and shelving systems for warehouses, factories, and commercial storage facilities, maximising space efficiency.",
    "services.fabrication_install.title": "Fabrication & Installation",
    "services.fabrication_install.desc": "From precision metal fabrication in our workshop to expert on-site installation, we handle every stage of your project with quality craftsmanship and strict attention to detail.",
    "services.controlpanels.title": "Control Panels",
    "services.controlpanels.desc": "We manufacture and install custom industrial control panels for motor control, automation, and process management across a wide range of industries.",

    "projects.title": "Our Projects",
    "projects.subtitle": "Showcasing our excellence in architectural metal and glass",

    "projects.p1.title": "Commercial Office Complex",
    "projects.p1.category": "Glass Facade",
    "projects.p2.title": "Residential Villa",
    "projects.p2.category": "Aluminum & Glass",
    "projects.p3.title": "Retail Shopfront",
    "projects.p3.category": "Frameless Glass",
    "projects.p4.title": "Industrial Warehouse",
    "projects.p4.category": "Automated Shutters",
    "projects.p5.title": "Luxury Hotel Terrace",
    "projects.p5.category": "Pergola System",
    "projects.p6.title": "Corporate Balcony",
    "projects.p6.category": "Glass Railings",
    "projects.p7.title": "Tuyil Pharmaceuticals",
    "projects.p7.category": "Automatic Doors & Roller Shutters",
    "projects.p8.title": "Nestoil Tower",
    "projects.p8.category": "Structural Glazing",
    "projects.p9.title": "Hayat Manufacturing Facility",
    "projects.p9.category": "Aluminum Cladding",

    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to build something lasting? Contact our team of experts.",
    "contact.form.name": "Your Name",
    "contact.form.email": "Email Address",
    "contact.form.phone": "Phone Number",
    "contact.form.subject": "Subject",
    "contact.form.message": "Project Details",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.address": "Factory/Showroom",
    "contact.info.hours": "Business Hours",
    "contact.info.hours.weekdays": "Mon-Fri: 8:00 AM - 6:00 PM",
    "contact.info.hours.saturday": "Sat: 9:00 AM - 2:00 PM",
    "contact.info.hours.sunday": "Sun: Closed",

    "footer.copyright": "© 2026 Zonca Global Investment Ltd. All rights reserved.",

    "trust.badge": "Our References",
    "trust.heading": "Trusted by leading developers and companies",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.products": "Produits",
    "nav.services": "Services",
    "nav.projects": "Projets",
    "nav.about": "À Propos",
    "nav.contact": "Contact",

    "hero.badge": "Projet Vedette",
    "hero.title": "Métal & Verre Architectural.",
    "hero.subtitle": "L'excellence dans chaque détail, la force dans chaque structure.",
    "hero.cta.primary": "Explorer Notre Travail →",
    "hero.cta.secondary": "Contact",

    "home.services.title": "Notre Expertise",
    "home.services.view_all": "Voir Tous Les Services →",
    "home.about.title": "Construire l'Avenir",
    "home.about.text": "Zonca Global Investment Ltd est une entreprise de fabrication et d'installation fournissant des solutions modernes en aluminium, verre et acier pour les projets résidentiels, commerciaux et industriels.",
    "home.about.cta": "En Savoir Plus →",
    "home.cta.title": "Prêt à démarrer votre projet ?",
    "home.cta.text": "Contactez nos experts dès aujourd'hui pour discuter de vos besoins.",
    "home.cta.button": "Contactez-Nous",

    "about.badge": "Qui Sommes-Nous",
    "about.title": "À Propos de Zonca Global",
    "about.who_badge": "Notre Histoire",
    "about.who_title": "Construire l'Avenir avec le Métal et le Verre",
    "about.company_desc": "Zonca Global Investment Ltd est une entreprise de fabrication et d'installation qui fournit des solutions modernes en aluminium, verre et acier pour des projets résidentiels, commerciaux et industriels. Nous nous concentrons sur la livraison de structures solides, fiables et bien finies qui améliorent à la fois la fonction et l'apparence des bâtiments.",
    "about.commitment": "Avec des professionnels qualifiés et des matériaux de qualité, nous veillons à ce que chaque projet soit réalisé avec soin, durabilité et satisfaction client. Nous nous engageons à fournir un travail de qualité et un service fiable.",
    "about.stats.years": "10+",
    "about.stats.years_label": "Années d'Expérience",
    "about.stats.projects": "200+",
    "about.stats.projects_label": "Projets Réalisés",
    "about.stats.clients_label": "Clients Satisfaits",
    "about.values.title": "Pourquoi Nous Choisir",
    "about.pillars_badge": "Notre Engagement",
    "about.pillars_title": "La Durabilité Est Notre Vision",
    "about.pillars_subtitle": "Dans la perspective de notre compréhension universelle de la qualité, la durabilité est une partie essentielle de notre vision fondamentale.",
    "about.pillar.quality": "Qualité de Production",
    "about.pillar.price": "Prix Juste",
    "about.pillar.delivery": "Livraison à Temps",
    "about.pillar.solution": "Génération de Solutions",
    "about.pillar.development": "Développement Produit",
    "about.pillar.environment": "Fabrication Écologique",
    "about.pillar.training": "Formation et Développement",
    "about.offer_badge": "Ce Que Nous Faisons",
    "about.offer_title": "Nos Domaines d'Expertise",

    "products.title": "Nos Produits",
    "products.subtitle": "Solutions architecturales haut de gamme conçues pour l'excellence",

    "services.badge": "Ce Que Nous Offrons",
    "services.title": "Nos Services",
    "services.subtitle": "Des solutions complètes de fabrication et d'installation, de la conception à la remise finale",
    "services.process_badge": "Comment Nous Travaillons",
    "services.process.title": "Notre Processus",
    "services.process.survey": "Étude de Site",
    "services.process.design": "Conception",
    "services.process.fabrication": "Fabrication",
    "services.process.installation": "Installation",
    "services.process.handover": "Remise Finale",

    "services.aluminum.title": "Systèmes en Aluminium",
    "services.aluminum.desc": "Nous concevons et installons des portes, fenêtres, cloisons, garde-corps et autres structures en aluminium offrant durabilité, sécurité et une finition moderne.",
    "services.glass.title": "Systèmes en Verre",
    "services.glass.desc": "Nos installations en verre comprennent des cloisons sans cadre, des systèmes coulissants, des systèmes pliants, des garde-corps et des cabines de douche, utilisant du verre trempé de haute qualité.",
    "services.guillotine.title": "Systèmes de Verre Guillotine",
    "services.guillotine.desc": "Nous installons des systèmes de verre coulissants verticaux motorisés adaptés aux balcons, terrasses et espaces commerciaux.",
    "services.pergola.title": "Systèmes de Pergola",
    "services.pergola.desc": "Nos structures de pergola offrent des solutions d'ombrage extérieur élégantes pour les jardins, les toits, les patios et les espaces de détente.",
    "services.steel.title": "Fabrication en Fer et Acier",
    "services.steel.desc": "Nous fabriquons et installons des portails en acier, des portes de sécurité, des garde-corps, des cadres structurels et d'autres ouvrages métalliques.",
    "services.shutters.title": "Volets Roulants Automatisés",
    "services.shutters.desc": "Nous fournissons et installons des systèmes de volets roulants automatisés pour les magasins, entrepôts, garages et autres propriétés commerciales.",
    "services.electrical.title": "Panneaux Électriques",
    "services.electrical.desc": "Nous fabriquons et installons des panneaux électriques industriels et commerciaux selon les normes de sécurité les plus strictes pour une distribution fiable de l'énergie.",
    "services.racking.title": "Systèmes de Rayonnage",
    "services.racking.desc": "Nous concevons et fournissons des systèmes de rayonnage robustes pour entrepôts, usines et espaces de stockage commerciaux, optimisant l'efficacité de l'espace.",
    "services.fabrication_install.title": "Fabrication et Installation",
    "services.fabrication_install.desc": "De la fabrication précise du métal dans notre atelier à l'installation experte sur site, nous gérons chaque étape de votre projet avec un savoir-faire de qualité et une attention rigoureuse aux détails.",
    "services.controlpanels.title": "Armoires de Contrôle",
    "services.controlpanels.desc": "Nous fabriquons et installons des armoires de contrôle industrielles sur mesure pour la commande de moteurs, l'automatisation et la gestion de processus.",

    "projects.title": "Nos Projets",
    "projects.subtitle": "Mettre en valeur notre excellence en métal et verre architectural",

    "projects.p1.title": "Complexe de Bureaux Commercial",
    "projects.p1.category": "Façade en Verre",
    "projects.p2.title": "Villa Résidentielle",
    "projects.p2.category": "Aluminium & Verre",
    "projects.p3.title": "Devanture de Commerce",
    "projects.p3.category": "Verre Sans Cadre",
    "projects.p4.title": "Entrepôt Industriel",
    "projects.p4.category": "Volets Automatisés",
    "projects.p5.title": "Terrasse d'Hôtel de Luxe",
    "projects.p5.category": "Système de Pergola",
    "projects.p6.title": "Balcon d'Entreprise",
    "projects.p6.category": "Garde-Corps en Verre",
    "projects.p7.title": "Tuyil Pharmaceuticals",
    "projects.p7.category": "Portes Automatiques et Volets Roulants",
    "projects.p8.title": "Tour Nestoil",
    "projects.p8.category": "Vitrage Structural",
    "projects.p9.title": "Usine de Fabrication Hayat",
    "projects.p9.category": "Bardage Aluminium",

    "contact.title": "Contactez-Nous",
    "contact.subtitle": "Prêt à construire quelque chose de durable ? Contactez notre équipe d'experts.",
    "contact.form.name": "Votre Nom",
    "contact.form.email": "Adresse Email",
    "contact.form.phone": "Numéro de Téléphone",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Détails du Projet",
    "contact.form.submit": "Envoyer le Message",
    "contact.info.title": "Coordonnées",
    "contact.info.address": "Usine/Salle d'exposition",
    "contact.info.hours": "Heures d'Ouverture",
    "contact.info.hours.weekdays": "Lun-Ven: 8h00 - 18h00",
    "contact.info.hours.saturday": "Sam: 9h00 - 14h00",
    "contact.info.hours.sunday": "Dim: Fermé",

    "footer.copyright": "© 2026 Zonca Global Investment Ltd. Tous droits réservés.",

    "trust.badge": "Nos Références",
    "trust.heading": "Approuvé par les principaux développeurs et entreprises",
  },
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.products": "Ürünler",
    "nav.services": "Hizmetler",
    "nav.projects": "Projeler",
    "nav.about": "Hakkımızda",
    "nav.contact": "İletişim",

    "hero.badge": "Öne Çıkan Proje",
    "hero.title": "Mimari Metal ve Cam.",
    "hero.subtitle": "Her detayda mükemmellik, her yapıda güç.",
    "hero.cta.primary": "Çalışmalarımızı İnceleyin →",
    "hero.cta.secondary": "İletişim",

    "home.services.title": "Uzmanlığımız",
    "home.services.view_all": "Tüm Hizmetleri Gör →",
    "home.about.title": "Geleceği İnşa Ediyoruz",
    "home.about.text": "Zonca Global Investment Ltd, konut, ticari ve endüstriyel projeler için modern alüminyum, cam ve çelik çözümleri sunan bir imalat ve montaj şirketidir.",
    "home.about.cta": "Hakkımızda Daha Fazla Bilgi →",
    "home.cta.title": "Projenize başlamaya hazır mısınız?",
    "home.cta.text": "İhtiyaçlarınızı görüşmek için bugün uzmanlarımızla iletişime geçin.",
    "home.cta.button": "Hemen Bize Ulaşın",

    "about.badge": "Biz Kimiz",
    "about.title": "Zonca Global Hakkında",
    "about.who_badge": "Hikayemiz",
    "about.who_title": "Metal ve Camla Geleceği İnşa Ediyoruz",
    "about.company_desc": "Zonca Global Investment Ltd, konut, ticari ve endüstriyel projeler için modern alüminyum, cam ve çelik çözümleri sunan bir imalat ve montaj şirketidir. Binaların hem işlevini hem de görünümünü iyileştiren güçlü, güvenilir ve iyi tamamlanmış yapılar sunmaya odaklanıyoruz.",
    "about.commitment": "Nitelikli profesyoneller ve kaliteli malzemelerle her projenin özenle, dayanıklılıkla ve müşteri memnuniyetiyle tamamlanmasını sağlıyoruz. Kaliteli işçilik ve güvenilir hizmete kararlıyız.",
    "about.stats.years": "10+",
    "about.stats.years_label": "Yıllık Deneyim",
    "about.stats.projects": "200+",
    "about.stats.projects_label": "Tamamlanan Proje",
    "about.stats.clients_label": "Memnun Müşteri",
    "about.values.title": "Neden Bizi Seçmelisiniz",
    "about.pillars_badge": "Taahhüdümüz",
    "about.pillars_title": "Sürdürülebilirlik Vizyonumuzdur",
    "about.pillars_subtitle": "Kaliteye evrensel anlayışımız çerçevesinde sürdürülebilirlik, temel vizyonumuzun vazgeçilmez bir parçasıdır.",
    "about.pillar.quality": "Üretim Kalitesi",
    "about.pillar.price": "Doğru Fiyat",
    "about.pillar.delivery": "Zamanında Teslimat",
    "about.pillar.solution": "Çözüm Üretme",
    "about.pillar.development": "Ürün Geliştirme",
    "about.pillar.environment": "Çevre Dostu Üretim",
    "about.pillar.training": "Gelişim ve Eğitim",
    "about.offer_badge": "Ne Yapıyoruz",
    "about.offer_title": "Uzmanlık Alanlarımız",

    "products.title": "Ürünlerimiz",
    "products.subtitle": "Mükemmellik için tasarlanmış birinci sınıf mimari çözümler",

    "services.badge": "Ne Sunuyoruz",
    "services.title": "Hizmetlerimiz",
    "services.subtitle": "Tasarımdan son teslimata kapsamlı imalat ve montaj çözümleri",
    "services.process_badge": "Nasıl Çalışıyoruz",
    "services.process.title": "Sürecimiz",
    "services.process.survey": "Saha Araştırması",
    "services.process.design": "Tasarım",
    "services.process.fabrication": "İmalat",
    "services.process.installation": "Kurulum",
    "services.process.handover": "Son Teslim",

    "services.aluminum.title": "Alüminyum Sistemler",
    "services.aluminum.desc": "Dayanıklılık, güvenlik ve modern bir görünüm sunan alüminyum kapılar, pencereler, bölmeler, korkuluklar ve diğer alüminyum yapıları tasarlıyor ve kuruyoruz.",
    "services.glass.title": "Cam Sistemleri",
    "services.glass.desc": "Cam kurulumlarımız; güvenlik ve dayanıklılık için yüksek kaliteli temperli cam kullanılarak yapılan çerçevesiz cam bölmeleri, sürme cam sistemlerini, katlanır cam sistemlerini içerir.",
    "services.guillotine.title": "Giyotin Cam Sistemleri",
    "services.guillotine.desc": "Balkonlar, teraslar ve ticari alanlar için uygun, net görüşü korurken koruma sağlayan motorlu dikey sürme cam sistemleri kuruyoruz.",
    "services.pergola.title": "Pergola Sistemleri",
    "services.pergola.desc": "Pergola yapılarımız bahçeler, çatı katları, verandalar ve dinlenme alanları için şık açık hava gölge çözümleri sunar.",
    "services.steel.title": "Demir ve Çelik İmalatı",
    "services.steel.desc": "Güç ve uzun süreli kullanım için tasarlanmış çelik kapılar, güvenlik kapıları, korkuluklar, yapısal iskeletler ve diğer metal işlerini üretiyor ve kuruyoruz.",
    "services.shutters.title": "Otomatik Kepenkler",
    "services.shutters.desc": "Mağazalar, depolar, garajlar ve diğer ticari mülkler için kolaylık ve güvenlik sunan otomatik kepenk sistemleri tedarik ediyor ve kuruyoruz.",
    "services.electrical.title": "Elektrik Panoları",
    "services.electrical.desc": "En yüksek güvenlik standartlarına göre üretilmiş endüstriyel ve ticari elektrik panolarını fabrike ediyor ve kuruyoruz.",
    "services.racking.title": "Raf Sistemleri",
    "services.racking.desc": "Depolar, fabrikalar ve ticari depolama tesisleri için alan verimliliğini en üst düzeye çıkaran ağır hizmet tipi raf ve depolama sistemleri tasarlıyor ve tedarik ediyoruz.",
    "services.fabrication_install.title": "İmalat ve Montaj",
    "services.fabrication_install.desc": "Atölyemizdeki hassas metal imalatından uzman saha montajına kadar projenizin her aşamasını kaliteli işçilik ve titiz bir dikkatle yönetiyoruz.",
    "services.controlpanels.title": "Kontrol Panoları",
    "services.controlpanels.desc": "Motor kontrolü, otomasyon ve proses yönetimi için geniş bir sektör yelpazesinde özel endüstriyel kontrol panoları üretiyor ve kuruyoruz.",

    "projects.title": "Projelerimiz",
    "projects.subtitle": "Mimari metal ve camdaki mükemmelliğimizi sergiliyoruz",

    "projects.p1.title": "Ticari Ofis Kompleksi",
    "projects.p1.category": "Cam Cephe",
    "projects.p2.title": "Konut Villası",
    "projects.p2.category": "Alüminyum & Cam",
    "projects.p3.title": "Perakende Mağaza Cephesi",
    "projects.p3.category": "Çerçevesiz Cam",
    "projects.p4.title": "Endüstriyel Depo",
    "projects.p4.category": "Otomatik Kepenkler",
    "projects.p5.title": "Lüks Otel Terası",
    "projects.p5.category": "Pergola Sistemi",
    "projects.p6.title": "Kurumsal Balkon",
    "projects.p6.category": "Cam Korkuluklar",
    "projects.p7.title": "Tuyil Pharmaceuticals",
    "projects.p7.category": "Otomatik Kapılar ve Kepenkler",
    "projects.p8.title": "Nestoil Kulesi",
    "projects.p8.category": "Yapısal Cam",
    "projects.p9.title": "Hayat Üretim Tesisi",
    "projects.p9.category": "Alüminyum Kaplama",

    "contact.title": "Bize Ulaşın",
    "contact.subtitle": "Kalıcı bir şey inşa etmeye hazır mısınız? Uzman ekibimizle iletişime geçin.",
    "contact.form.name": "Adınız",
    "contact.form.email": "E-posta Adresi",
    "contact.form.phone": "Telefon Numarası",
    "contact.form.subject": "Konu",
    "contact.form.message": "Proje Detayları",
    "contact.form.submit": "Mesaj Gönder",
    "contact.info.title": "İletişim Bilgileri",
    "contact.info.address": "Fabrika/Showroom",
    "contact.info.hours": "Çalışma Saatleri",
    "contact.info.hours.weekdays": "Pzt-Cum: 08:00 - 18:00",
    "contact.info.hours.saturday": "Cmt: 09:00 - 14:00",
    "contact.info.hours.sunday": "Paz: Kapalı",

    "footer.copyright": "© 2026 Zonca Global Investment Ltd. Tüm hakları saklıdır.",

    "trust.badge": "Referanslarımız",
    "trust.heading": "Önde gelen geliştiriciler ve şirketler tarafından güvenilir",
  }
};

// ---------------------------------------------------------------------------
// Hook — each component that calls this subscribes directly to the store
// ---------------------------------------------------------------------------

export function useLanguage() {
  const lang = useSyncExternalStore(subscribeLang, getLang, getLang);
  return {
    lang,
    setLang,
    t: (key: string): string =>
      translationMap[lang][key] ?? translationMap.en[key] ?? key,
  };
}

// LanguageProvider is now just a pass-through wrapper kept for compatibility
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// keep React import available for JSX
import React from 'react';
