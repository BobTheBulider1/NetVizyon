/* ==========================================================================
   NETVIZYON — i18n.js  |  Merkezi Çeviri Motoru
   Desteklenen diller: TR (Türkçe), EN (English), DE (Deutsch), AR (العربية)
   ========================================================================== */

(function () {
  'use strict';

  /* ─── 1. TRANSLATION DATA ─────────────────────────────────────────────── */
  const translations = {

    /* ══════════════════════════════════════════
       TÜRKÇE
    ══════════════════════════════════════════ */
    tr: {
      'meta.title':       'NetVizyon | Profesyonel & Ekonomik Web Tasarım Çözümleri',
      'meta.description': 'NetVizyon ile profesyonel web tasarım, e-ticaret ve dijital çözümler.',

      'nav.home':     'Ana Sayfa',
      'nav.services': 'Hizmetler',
      'nav.portfolio':'Portfolyo',
      'nav.pricing':  'Fiyat Hesaplama',
      'nav.faq':      'SSS',
      'nav.contact':  'İletişim',
      'nav.cta':      'Teklif Al',

      'hero.title1':       'Sınırsız',
      'hero.title.vision': 'Vizyon',
      'hero.title2':       'Ekonomik Tasarım',
      'hero.desc':         'İyi tasarım herkesin hakkıdır. NetVizyon olarak, işletmenizin dijital vitrinini yüksek ajans maliyetleri olmadan, son teknoloji altyapıyla ve üstün hız kalitesiyle kuruyoruz.',
      'hero.cta1':         'Fiyat Hesapla',
      'hero.cta2':         'Çalışmamızı İncele',
      'hero.panel.label':  'Sayfa Hızı',

      'services.title':    'Hizmetlerimiz',
      'services.subtitle': 'Gereksiz detaylardan uzak, işletmenizi zirveye taşıyacak temel dijital çözümler.',
      's1.title': 'Kurumsal Web Siteleri',
      's1.desc':  'Şirketinizin vizyonunu, değerlerini ve ürünlerini yansıtan, müşterilerinizde güven uyandıran, modern tasarım çizgileriyle hazırlanmış kurumsal web sayfaları.',
      's1.tag1':  '#YönetimPaneli',
      's1.tag2':  '#HızOptimizasyonu',
      's1.tag3':  '#MobilUyum',
      's2.title': 'E-Ticaret Sistemleri',
      's2.desc':  'Ürünlerinizi dijital pazarda satmanız için gerekli güvenli ödeme altyapılı, kargo entegrasyonlu modern sanal mağazalar.',
      's2.tag1':  '#SanalPos',
      's2.tag2':  '#StokTakibi',
      's3.title': 'Landing Page (Tek Sayfa)',
      's3.desc':  'Reklam kampanyalarınız veya özel hizmet lansmanlarınız için tasarlanmış yüksek dönüşüm oranlı tek sayfalık web tasarımları.',
      's3.tag1':  '#DönüşümOdaklı',
      's3.tag2':  '#HızlıTeklif',
      's4.title': 'SEO & Performans',
      's4.desc':  'Web sitenizin Google aramalarında öne çıkması ve saniyeler içinde açılması için en son teknik standartlarda optimizasyon paketleri.',
      's4.tag1':  '#GoogleSEO',
      's4.tag2':  '#PageSpeedA+',

      'portfolio.title':    'Portfolyo',
      'portfolio.subtitle': 'Hayata geçirdiğimiz ve müşterimizin dijital başarısını temsil eden gurur duyduğumuz projemiz.',
      'portfolio.badge':       'Öne Çıkan Proje',
      'portfolio.client.cat':  'Kurumsal Web Tasarım / Yatırım & Danışmanlık',
      'portfolio.client.desc': 'Yatırım, energy, turizm ve inşaat alanlarında faaliyet gösteren Dadson Grup için geliştirilen kurumsal web projesi. Şirketin prestijini yansıtacak minimalist, gold/koyu tonlarda lüks bir estetik tasarım geliştirilmiş, yüksek hız ve tam mobil uyumluluk altyapısı kurulmuştur.',
      'portfolio.stat1.label': 'Hız Skoru',
      'portfolio.stat2.num':   'Yönetilebilir',
      'portfolio.stat2.label': 'Türkçe Panel',
      'portfolio.stat3.num':   'Tam',
      'portfolio.stat3.label': 'SEO Altyapısı',
      'portfolio.cta':         'Web Sitesini Ziyaret Et',

      'pricing.title':    'Akıllı Fiyat Hesaplayıcı',
      'pricing.subtitle': 'Web sitenizin özelliklerini seçin, sürpriz maliyetlerle karşılaşmadan tahmini fiyatı anında görün!',
      'pricing.step1':         'Site Türü Seçin',
      'pricing.step2.label':   'Sayfa Sayısı',
      'pricing.step2.suffix':  'Sayfa',
      'pricing.step3':         'Ekstra Özellikler',
      'pricing.type.landing':       'Landing Page',
      'pricing.type.landing.price': "₺4.500'den başlayan",
      'pricing.type.corporate':       'Kurumsal Site',
      'pricing.type.corporate.price': "₺6.000'den başlayan",
      'pricing.type.ecommerce':       'E-Ticaret',
      'pricing.type.ecommerce.price': "₺8.000'den başlayan",
      'pricing.addon.seo':          'Gelişmiş SEO Paketi (+₺750)',
      'pricing.addon.seo.desc':     'Anahtar kelime araştırması ve teknik site haritaları.',
      'pricing.addon.multilang':    'Çoklu Dil Desteği (+₺1.000)',
      'pricing.addon.multilang.desc': 'İngilizce veya diğer diller için altyapı kurulumu.',
      'pricing.addon.whatsapp':     'Hızlı WhatsApp Entegrasyonu (+₺500)',
      'pricing.addon.whatsapp.desc': "Müşterilerinizin size doğrudan WhatsApp'tan yazması için buton.",
      'pricing.addon.speed':        'Ekstra Hız Optimizasyonu (+₺800)',
      'pricing.addon.speed.desc':   'A+ PageSpeed skorları ve anında yüklenme.',
      'pricing.result.header':   'Tahmini Proje Bedeli',
      'pricing.result.notice':   '* Sunucu (hosting) ve domain (alan adı) 1 yıllık fiyata DAHİLDİR.',
      'pricing.result.surprise': 'Sürpriz ücret yok!',
      'pricing.result.package':  'Paket İçeriği:',
      'pricing.cta':             'Bu Paket İçin Teklif Al',
      'pricing.overlay.lang':    'Çoklu Dil Desteği Aktif',
      'pricing.overlay.speed':   '⚡ Hız Optimizasyonu (A+)',
      'pricing.overlay.seo':     'SEO Altyapısı Aktif',

      'calc.landing':       'Landing Page Kurulumu',
      'calc.corporate':     'Kurumsal Web Altyapısı',
      'calc.ecommerce':     'E-Ticaret Mağaza Kurulumu',
      'calc.payment':       'Güvenli Ödeme Altyapısı',
      'calc.extra.pages':   'Ekstra Sayfalar',
      'calc.mobile':        'Mobil & Tablet Uyumlu Arayüz',
      'calc.ssl':           'Ücretsiz SSL Sertifikası',
      'calc.hosting':       '1 Yıllık Ücretsiz Sunucu (Hosting)',
      'calc.seo.addon':     'Gelişmiş SEO Paketi',
      'calc.multilang.addon': 'Çoklu Dil Desteği',
      'calc.whatsapp.addon':  'WhatsApp Entegrasyonu',
      'calc.speed.addon':     'Ekstra Hız Optimizasyonu',

      'faq.title':    'Sıkça Sorulan Sorular',
      'faq.subtitle': 'NetVizyon ile çalışmaya başlamadan önce aklınıza takılabilecek soruların cevapları.',
      'faq.1.q': 'Web sitem ne kadar sürede tamamlanır?',
      'faq.1.a': 'Web sitenizin teslim süresi seçtiğiniz pakete göre değişir. Genellikle Landing Page (Tek Sayfa) projeleri 3-5 iş günü, Kurumsal siteler 7-10 iş günü, E-Ticaret projeleri ise 10-15 iş günü içerisinde tamamlanarak yayına alınır.',
      'faq.2.q': 'Fiyatlarınız neden bu kadar uygun? Kaliteden ödün veriliyor mu?',
      'faq.2.a': 'NetVizyon olarak amacımız, yeni kurulan veya küçük/orta ölçekli işletmelerin yüksek maliyetler altında ezilmeden dijitalleşmesini sağlamaktır. Kendi geliştirdiğimiz optimize edilmiş kod şablonlarını ve verimli çalışma süreçlerini kullandığımız için kaliteden ödün vermeden, gereksiz ajans komisyonlarını ortadan kaldırarak uygun fiyat sunabiliyoruz.',
      'faq.3.q': 'Domain ve Hosting (Sunucu) ücretleri fiyata dahil mi?',
      'faq.3.a': "Evet! NetVizyon'dan alacağınız tüm paketlerde ilk 1 yıllık .com veya .com.tr alan adı (domain) kaydı ve yüksek hızlı SSD sunucu (hosting) hizmeti ücretsiz olarak fiyata dahildir. Sonraki yıllarda sadece standart yenileme bedelleri alınır, ekstra gizli bir maliyet çıkmaz.",
      'faq.4.q': 'Sitem yayınlandıktan sonra değişiklik yapabilir miyim?',
      'faq.4.a': 'Kesinlikle. Sitenizi teslim ederken kullanımı son derece kolay, Türkçe bir yönetim paneli entegre ediyoruz. Bu panel üzerinden kod bilmenize gerek kalmadan içeriklerinizi, ürünlerinizi, resimlerinizi ve metinlerinizi dilediğiniz zaman güncelleyebilirsiniz. Ayrıca teslimat sonrasında 1 ay boyunca teknik destek sağlıyoruz.',
      'faq.5.q': 'Arama motorlarında (Google) bulunabilecek miyim?',
      'faq.5.a': 'Sitenizin kod yapısını tamamen Google dostu ve SEO (Arama Motoru Optimizasyonu) uyumlu şekilde kodluyoruz. Site haritanız oluşturulur ve Google Search Console kaydınız ücretsiz yapılır. Bu sayede siteniz arama motorları tarafından hızlıca dizine eklenir ve bulunabilir hale gelir.',

      'contact.title':       'İletişime Geçin',
      'contact.subtitle':    'Bizimle iletişime geçerek aklınızdaki projeyi anlatın, dijital dünyadaki yerinizi hemen alın.',
      'contact.card.h3':     'Bize',
      'contact.card.accent': 'Ulaşın',
      'contact.card.tagline':'Projeniz için instagram, telefon, WhatsApp veya e-posta kanalları üzerinden dilediğiniz an iletişime geçebilirsiniz.',
      'contact.instagram':   "Bizi Instagram'da Takip Edin",
      'contact.divider':     'veya doğrudan ulaşın',
      'contact.whatsapp':    "WhatsApp'tan Yazın",
      'contact.form.title':  'Hızlı Teklif Formu',
      'contact.form.name':       'Adınız Soyadınız *',
      'contact.form.name.ph':    'Örn: Ahmet Yılmaz',
      'contact.form.phone':      'Telefon Numaranız *',
      'contact.form.phone.ph':   'Örn: 0555 123 45 67',
      'contact.form.email':      'E-Posta Adresiniz',
      'contact.form.email.ph':   'Örn: ahmet@sirketiniz.com',
      'contact.form.service':    'Talep Ettiğiniz Hizmet',
      'contact.form.opt.landing':  'Landing Page / Tek Sayfa Site',
      'contact.form.opt.corporate':'Kurumsal Web Sitesi',
      'contact.form.opt.ecommerce':'E-Ticaret Sitesi',
      'contact.form.opt.custom':   'Özel Tasarım / Diğer',
      'contact.form.message':    'Mesajınız / Proje Detayları *',
      'contact.form.message.ph': 'Projeniz hakkında kısa bilgi verin...',
      'contact.form.submit':     'Teklif İsteğini Gönder',
      'contact.form.sending':    'Gönderiliyor...',

      'footer.tagline':   'İşletmeler için yüksek kaliteli, hızlı ve en uygun maliyetli dijital çözümler sunar.',
      'footer.menu':      'Hızlı Menü',
      'footer.follow':    'Bizi Takip Edin',
      'footer.contact_us': 'Bizimle İletişime Geçin',
      'footer.home':      'Ana Sayfa',
      'footer.services':  'Hizmetler',
      'footer.portfolio': 'Portfolyo',
      'footer.pricing':   'Fiyat Hesaplama',
      'footer.contact':   'İletişim',
      'footer.copyright': '© 2026 NetVizyon. Tüm hakları saklıdır.',

      'toast.success':      'Tebrikler! Teklif talebiniz başarıyla alındı. En kısa sürede dönüş sağlayacağız.',
      'toast.err.required': 'Lütfen zorunlu alanları doldurun.',
      'toast.err.name':     'Lütfen geçerli bir Ad Soyad girin (En az 3 karakter).',
      'toast.err.phone':    'Lütfen geçerli bir telefon numarası girin (Örn: 0555 123 4567).',
      'toast.err.email':    'Lütfen geçerli bir e-posta adresi girin.',
      'toast.err.message':  'Lütfen talebinizi biraz daha detaylı yazın (En az 10 karakter).',
      'toast.err.supabase': 'Bağlantı hatası: Veritabanı kütüphanesi yüklenemedi.',
      'toast.err.submit':   'Form gönderilemedi. Lütfen daha sonra tekrar deneyin.',
      'toast.err.system':   'Sistem hatası oluştu. Lütfen tekrar deneyin.',

      'a11y.menu.open':  'Menüyü Aç',
      'a11y.menu.close': 'Menüyü Kapat',

      'calc.msg.prefix':    'Merhaba, Fiyat Hesaplayıcı ile oluşturduğum paket için detaylı bilgi almak istiyorum.\nSeçilen Paket: ',
      'calc.msg.pages':     'Sayfa Sayısı: ',
      'calc.msg.addons':    'Ek Özellikler: ',
      'calc.msg.total':     'Hesaplanan Tutar: ',

      'cookie.title':   'Çerez Tercihleriniz',
      'cookie.desc':    'Sitemizde en iyi deneyimi sunmak, performans optimizasyonu yapmak ve kullanım istatistiklerini analiz etmek için çerezler kullanıyoruz.',
      'cookie.accept':  'Tümünü Kabul Et',
      'cookie.decline': 'Sadece Gerekli',
    },

    /* ══════════════════════════════════════════
       ENGLISH
    ══════════════════════════════════════════ */
    en: {
      'meta.title':       'NetVizyon | Professional & Affordable Web Design Solutions',
      'meta.description': 'Professional web design, e-commerce and digital solutions with NetVizyon.',

      'nav.home':     'Home',
      'nav.services': 'Services',
      'nav.portfolio':'Portfolio',
      'nav.pricing':  'Price Calculator',
      'nav.faq':      'FAQ',
      'nav.contact':  'Contact',
      'nav.cta':      'Get Quote',

      'hero.title1':       'Unlimited',
      'hero.title.vision': 'Vision',
      'hero.title2':       'Affordable Design',
      'hero.desc':         "Good design is for everyone. At NetVizyon, we build your business's digital storefront without the high agency costs, with cutting-edge infrastructure and superior speed quality.",
      'hero.cta1':         'Calculate Price',
      'hero.cta2':         'View Our Work',
      'hero.panel.label':  'Page Speed',

      'services.title':    'Our Services',
      'services.subtitle': 'Core digital solutions without unnecessary complexity, designed to elevate your business.',
      's1.title': 'Corporate Websites',
      's1.desc':  "Corporate web pages crafted with modern design lines, reflecting your company's vision, values, and products while building customer trust.",
      's1.tag1':  '#AdminPanel',
      's1.tag2':  '#SpeedOptimization',
      's1.tag3':  '#MobileReady',
      's2.title': 'E-Commerce Systems',
      's2.desc':  'Modern virtual stores with secure payment infrastructure and shipping integration to sell your products in the digital marketplace.',
      's2.tag1':  '#VirtualPOS',
      's2.tag2':  '#InventoryTracking',
      's3.title': 'Landing Page',
      's3.desc':  'High-conversion single-page web designs crafted for your advertising campaigns or special service launches.',
      's3.tag1':  '#ConversionFocused',
      's3.tag2':  '#QuickQuote',
      's4.title': 'SEO & Performance',
      's4.desc':  'Optimization packages to the latest technical standards to make your website stand out in Google searches and load in seconds.',
      's4.tag1':  '#GoogleSEO',
      's4.tag2':  '#PageSpeedA+',

      'portfolio.title':    'Portfolio',
      'portfolio.subtitle': "Our proud project that we brought to life and represents our client's digital success.",
      'portfolio.badge':       'Featured Project',
      'portfolio.client.cat':  'Corporate Web Design / Investment & Consulting',
      'portfolio.client.desc': "A corporate web project developed for Dadson Group, operating in investment, energy, tourism and construction. A minimalist luxury aesthetic in gold/dark tones was crafted to reflect the company's prestige, with high-speed and full mobile compatibility infrastructure.",
      'portfolio.stat1.label': 'Speed Score',
      'portfolio.stat2.num':   'Manageable',
      'portfolio.stat2.label': 'Control Panel',
      'portfolio.stat3.num':   'Full',
      'portfolio.stat3.label': 'SEO Infrastructure',
      'portfolio.cta':         'Visit Website',

      'pricing.title':    'Smart Price Calculator',
      'pricing.subtitle': 'Select your website features and instantly see the estimated price without any surprise costs!',
      'pricing.step1':         'Select Site Type',
      'pricing.step2.label':   'Number of Pages',
      'pricing.step2.suffix':  'Pages',
      'pricing.step3':         'Extra Features',
      'pricing.type.landing':       'Landing Page',
      'pricing.type.landing.price': 'Starting from $500',
      'pricing.type.corporate':       'Corporate Site',
      'pricing.type.corporate.price': 'Starting from $800',
      'pricing.type.ecommerce':       'E-Commerce',
      'pricing.type.ecommerce.price': 'Starting from $1,500',
      'pricing.addon.seo':          'Advanced SEO Package (+$100)',
      'pricing.addon.seo.desc':     'Keyword research and technical sitemaps.',
      'pricing.addon.multilang':    'Multilingual Support (+$150)',
      'pricing.addon.multilang.desc': 'Infrastructure setup for English or other languages.',
      'pricing.addon.whatsapp':     'Quick WhatsApp Integration (+$50)',
      'pricing.addon.whatsapp.desc': 'Button for customers to contact you directly via WhatsApp.',
      'pricing.addon.speed':        'Extra Speed Optimization (+$100)',
      'pricing.addon.speed.desc':   'A+ PageSpeed scores and instant loading.',
      'pricing.result.header':   'Estimated Project Cost',
      'pricing.result.notice':   '* Hosting and domain (1 year) are INCLUDED in the price.',
      'pricing.result.surprise': 'No surprise fees!',
      'pricing.result.package':  'Package Contents:',
      'pricing.cta':             'Get Quote for This Package',
      'pricing.overlay.lang':    'Multilingual Support Active',
      'pricing.overlay.speed':   '⚡ Speed Optimization (A+)',
      'pricing.overlay.seo':     'SEO Infrastructure Active',

      'calc.landing':       'Landing Page Setup',
      'calc.corporate':     'Corporate Web Infrastructure',
      'calc.ecommerce':     'E-Commerce Store Setup',
      'calc.payment':       'Secure Payment Infrastructure',
      'calc.extra.pages':   'Extra Pages',
      'calc.mobile':        'Mobile & Tablet Friendly Interface',
      'calc.ssl':           'Free SSL Certificate',
      'calc.hosting':       '1 Year Free Hosting',
      'calc.seo.addon':     'Advanced SEO Package',
      'calc.multilang.addon': 'Multilingual Support',
      'calc.whatsapp.addon':  'WhatsApp Integration',
      'calc.speed.addon':     'Extra Speed Optimization',

      'faq.title':    'Frequently Asked Questions',
      'faq.subtitle': 'Answers to your questions before working with NetVizyon.',
      'faq.1.q': 'How long does it take to complete my website?',
      'faq.1.a': 'The delivery time of your website varies depending on the package you choose. Generally, Landing Page projects are completed in 3–5 business days, Corporate sites in 7–10 business days, and E-Commerce projects in 10–15 business days.',
      'faq.2.q': 'Why are your prices so affordable? Is quality compromised?',
      'faq.2.a': 'Our goal at NetVizyon is to help newly established or small/medium-sized businesses digitize without being crushed by high costs. By using our own optimized code templates and efficient processes, we can offer affordable prices without compromising quality, eliminating unnecessary agency commissions.',
      'faq.3.q': 'Are domain and hosting fees included in the price?',
      'faq.3.a': "Yes! In all packages from NetVizyon, the first year's .com or .com.tr domain registration and high-speed SSD hosting service are included in the price for free. In subsequent years, only standard renewal fees apply — no hidden costs.",
      'faq.4.q': 'Can I make changes after my site is published?',
      'faq.4.a': 'Absolutely. When we deliver your site, we integrate an extremely easy-to-use management panel. Through this panel, you can update your content, products, images, and text at any time without any coding knowledge. We also provide 1 month of technical support after delivery.',
      'faq.5.q': 'Will I be found in search engines (Google)?',
      'faq.5.a': "We code your website's structure to be completely Google-friendly and SEO-optimized. Your sitemap is created and your Google Search Console registration is done for free. This way, your website is quickly indexed by search engines and becomes discoverable.",

      'contact.title':       'Get In Touch',
      'contact.subtitle':    'Contact us to tell us about your project and take your place in the digital world right away.',
      'contact.card.h3':     'Reach',
      'contact.card.accent': 'Us',
      'contact.card.tagline':'You can contact us at any time via Instagram, phone, WhatsApp or email for your project.',
      'contact.instagram':   'Follow Us on Instagram',
      'contact.divider':     'or contact directly',
      'contact.whatsapp':    'Write on WhatsApp',
      'contact.form.title':  'Quick Quote Form',
      'contact.form.name':       'Full Name *',
      'contact.form.name.ph':    'E.g: John Smith',
      'contact.form.phone':      'Your Phone Number *',
      'contact.form.phone.ph':   'E.g: +90 555 123 45 67',
      'contact.form.email':      'Your Email Address',
      'contact.form.email.ph':   'E.g: john@company.com',
      'contact.form.service':    'Service Requested',
      'contact.form.opt.landing':  'Landing Page / Single Page Site',
      'contact.form.opt.corporate':'Corporate Website',
      'contact.form.opt.ecommerce':'E-Commerce Website',
      'contact.form.opt.custom':   'Custom Design / Other',
      'contact.form.message':    'Message / Project Details *',
      'contact.form.message.ph': 'Give brief information about your project...',
      'contact.form.submit':     'Send Quote Request',
      'contact.form.sending':    'Sending...',

      'footer.tagline':   'High quality, fast and most affordable digital solutions for businesses.',
      'footer.menu':      'Quick Menu',
      'footer.follow':    'Follow Us',
      'footer.contact_us': 'Contact Us',
      'footer.home':      'Home',
      'footer.services':  'Services',
      'footer.portfolio': 'Portfolio',
      'footer.pricing':   'Price Calculator',
      'footer.contact':   'Contact',
      'footer.copyright': '© 2026 NetVizyon. All rights reserved.',

      'toast.success':      'Congratulations! Your quote request has been received. We will get back to you as soon as possible.',
      'toast.err.required': 'Please fill in the required fields.',
      'toast.err.name':     'Please enter a valid full name (at least 3 characters).',
      'toast.err.phone':    'Please enter a valid phone number.',
      'toast.err.email':    'Please enter a valid email address.',
      'toast.err.message':  'Please describe your request in more detail (at least 10 characters).',
      'toast.err.supabase': 'Connection error: Database library could not be loaded.',
      'toast.err.submit':   'Form could not be submitted. Please try again later.',
      'toast.err.system':   'A system error occurred. Please try again.',

      'a11y.menu.open':  'Open Menu',
      'a11y.menu.close': 'Close Menu',

      'calc.msg.prefix': 'Hello, I would like detailed information about the package I created with the Price Calculator.\nSelected Package: ',
      'calc.msg.pages':  'Number of Pages: ',
      'calc.msg.addons': 'Extra Features: ',
      'calc.msg.total':  'Calculated Amount: ',

      'cookie.title':   'Cookie Preferences',
      'cookie.desc':    'We use cookies to enhance your experience, optimize performance, and analyze site usage traffic.',
      'cookie.accept':  'Accept All',
      'cookie.decline': 'Essential Only',
    },

    /* ══════════════════════════════════════════
       DEUTSCH
    ══════════════════════════════════════════ */
    de: {
      'meta.title':       'NetVizyon | Professionelle & wirtschaftliche Webdesign-Lösungen',
      'meta.description': 'Professionelles Webdesign, E-Commerce und digitale Lösungen mit NetVizyon.',

      'nav.home':     'Startseite',
      'nav.services': 'Leistungen',
      'nav.portfolio':'Portfolio',
      'nav.pricing':  'Preisrechner',
      'nav.faq':      'FAQ',
      'nav.contact':  'Kontakt',
      'nav.cta':      'Angebot',

      'hero.title1':       'Grenzenlos',
      'hero.title.vision': 'Vision',
      'hero.title2':       'Wirtschaftliches Design',
      'hero.desc':         'Gutes Design ist das Recht jedes Einzelnen. Bei NetVizyon bauen wir das digitale Schaufenster Ihres Unternehmens ohne hohe Agenturkosten, mit modernster Infrastruktur und überlegener Geschwindigkeit.',
      'hero.cta1':         'Preis berechnen',
      'hero.cta2':         'Unsere Arbeiten',
      'hero.panel.label':  'Seitengeschwindigkeit',

      'services.title':    'Unsere Leistungen',
      'services.subtitle': 'Grundlegende digitale Lösungen ohne unnötige Details, die Ihr Unternehmen an die Spitze bringen.',
      's1.title': 'Unternehmenswebseiten',
      's1.desc':  'Unternehmenswebseiten, die die Vision, Werte und Produkte Ihres Unternehmens widerspiegeln und das Vertrauen Ihrer Kunden gewinnen — mit modernen Designlinien gestaltet.',
      's1.tag1':  '#Verwaltungspanel',
      's1.tag2':  '#Geschwindigkeitsopt.',
      's1.tag3':  '#MobileOptimierung',
      's2.title': 'E-Commerce-Systeme',
      's2.desc':  'Moderne virtuelle Geschäfte mit sicherer Zahlungsinfrastruktur und Versandintegration, um Ihre Produkte auf dem digitalen Marktplatz zu verkaufen.',
      's2.tag1':  '#VirtualPOS',
      's2.tag2':  '#Lagerverwaltung',
      's3.title': 'Landing Page',
      's3.desc':  'Einseitige Webdesigns mit hoher Conversion-Rate für Ihre Werbekampagnen oder speziellen Service-Launches.',
      's3.tag1':  '#Conversion-orientiert',
      's3.tag2':  '#SchnellesAngebot',
      's4.title': 'SEO & Performance',
      's4.desc':  'Optimierungspakete nach neuesten technischen Standards, damit Ihre Website in Google-Suchen hervorsticht und in Sekunden lädt.',
      's4.tag1':  '#GoogleSEO',
      's4.tag2':  '#PageSpeedA+',

      'portfolio.title':    'Portfolio',
      'portfolio.subtitle': 'Unser stolzes Projekt, das wir realisiert haben und den digitalen Erfolg unseres Kunden repräsentiert.',
      'portfolio.badge':       'Hervorgehobenes Projekt',
      'portfolio.client.cat':  'Unternehmenswebdesign / Investitionen & Beratung',
      'portfolio.client.desc': 'Ein Unternehmenswebprojekt für die Dadson Group, tätig in Investitionen, Energie, Tourismus und Bauwesen. Ein minimalistisches Luxusdesign in Gold-/Dunkeltönen wurde entwickelt, um das Prestige des Unternehmens widerzuspiegeln — mit Hochgeschwindigkeits- und vollständiger mobiler Infrastruktur.',
      'portfolio.stat1.label': 'Geschwindigkeitswert',
      'portfolio.stat2.num':   'Verwaltbar',
      'portfolio.stat2.label': 'Kontrollpanel',
      'portfolio.stat3.num':   'Vollständig',
      'portfolio.stat3.label': 'SEO-Infrastruktur',
      'portfolio.cta':         'Website besuchen',

      'pricing.title':    'Intelligenter Preisrechner',
      'pricing.subtitle': 'Wählen Sie die Funktionen Ihrer Website und sehen Sie sofort den geschätzten Preis ohne Überraschungskosten!',
      'pricing.step1':         'Seitentyp wählen',
      'pricing.step2.label':   'Anzahl der Seiten',
      'pricing.step2.suffix':  'Seiten',
      'pricing.step3':         'Zusätzliche Funktionen',
      'pricing.type.landing':       'Landing Page',
      'pricing.type.landing.price': 'Ab €500',
      'pricing.type.corporate':       'Unternehmensseite',
      'pricing.type.corporate.price': 'Ab €800',
      'pricing.type.ecommerce':       'E-Commerce',
      'pricing.type.ecommerce.price': 'Ab €1.500',
      'pricing.addon.seo':          'Erweitertes SEO-Paket (+€100)',
      'pricing.addon.seo.desc':     'Keyword-Recherche und technische Sitemaps.',
      'pricing.addon.multilang':    'Mehrsprachige Unterstützung (+€150)',
      'pricing.addon.multilang.desc': 'Infrastruktureinrichtung für andere Sprachen.',
      'pricing.addon.whatsapp':     'Schnelle WhatsApp-Integration (+€50)',
      'pricing.addon.whatsapp.desc': 'Schaltfläche für direkten WhatsApp-Kontakt.',
      'pricing.addon.speed':        'Zusätzliche Geschwindigkeitsopt. (+€100)',
      'pricing.addon.speed.desc':   'A+ PageSpeed-Wertungen und sofortiges Laden.',
      'pricing.result.header':   'Geschätzte Projektkosten',
      'pricing.result.notice':   '* Hosting und Domain (1 Jahr) sind im Preis INBEGRIFFEN.',
      'pricing.result.surprise': 'Keine versteckten Kosten!',
      'pricing.result.package':  'Paketinhalt:',
      'pricing.cta':             'Angebot für dieses Paket',
      'pricing.overlay.lang':    'Mehrsprachige Unterstützung aktiv',
      'pricing.overlay.speed':   '⚡ Geschwindigkeitsopt. (A+)',
      'pricing.overlay.seo':     'SEO-Infrastruktur aktiv',

      'calc.landing':       'Landing Page Einrichtung',
      'calc.corporate':     'Unternehmens-Infrastruktur',
      'calc.ecommerce':     'E-Commerce-Shop Einrichtung',
      'calc.payment':       'Sichere Zahlungsinfrastruktur',
      'calc.extra.pages':   'Zusätzliche Seiten',
      'calc.mobile':        'Mobile & Tablet-freundliche Oberfläche',
      'calc.ssl':           'Kostenloses SSL-Zertifikat',
      'calc.hosting':       '1 Jahr kostenloses Hosting',
      'calc.seo.addon':     'Erweitertes SEO-Paket',
      'calc.multilang.addon': 'Mehrsprachige Unterstützung',
      'calc.whatsapp.addon':  'WhatsApp-Integration',
      'calc.speed.addon':     'Zusätzliche Geschwindigkeitsoptimierung',

      'faq.title':    'Häufig gestellte Fragen',
      'faq.subtitle': 'Antworten auf Ihre Fragen vor der Zusammenarbeit mit NetVizyon.',
      'faq.1.q': 'Wie lange dauert die Fertigstellung meiner Website?',
      'faq.1.a': 'Die Lieferzeit variiert je nach gewähltem Paket. In der Regel werden Landing Pages in 3–5 Werktagen, Unternehmenswebseiten in 7–10 Werktagen und E-Commerce-Projekte in 10–15 Werktagen fertiggestellt.',
      'faq.2.q': 'Warum sind Ihre Preise so günstig? Wird die Qualität geopfert?',
      'faq.2.a': 'Unser Ziel ist es, kleinen und mittelständischen Unternehmen zu helfen, sich ohne hohe Kosten zu digitalisieren. Durch eigene optimierte Code-Vorlagen und effiziente Prozesse bieten wir günstige Preise ohne Qualitätseinbußen.',
      'faq.3.q': 'Sind Domain- und Hosting-Gebühren im Preis inbegriffen?',
      'faq.3.a': 'Ja! In allen Paketen sind das erste Jahres-Domain (.com oder .com.tr) und Hochgeschwindigkeits-SSD-Hosting kostenlos enthalten. In den Folgejahren fallen nur Standard-Verlängerungsgebühren an — keine versteckten Kosten.',
      'faq.4.q': 'Kann ich nach der Veröffentlichung Änderungen vornehmen?',
      'faq.4.a': 'Selbstverständlich. Bei der Übergabe integrieren wir ein einfaches Verwaltungspanel. Inhalte, Produkte, Bilder und Texte können jederzeit ohne Programmierkenntnisse aktualisiert werden. Außerdem bieten wir 1 Monat technischen Support nach Lieferung.',
      'faq.5.q': 'Werde ich in Suchmaschinen (Google) gefunden?',
      'faq.5.a': 'Wir codieren die Website vollständig Google-freundlich und SEO-optimiert. Die Sitemap wird erstellt und die Google Search Console-Registrierung erfolgt kostenlos. Ihre Website wird schnell indexiert und auffindbar.',

      'contact.title':       'Kontakt aufnehmen',
      'contact.subtitle':    'Nehmen Sie Kontakt auf, um uns Ihr Projekt zu schildern und Ihren Platz in der digitalen Welt einzunehmen.',
      'contact.card.h3':     'Uns',
      'contact.card.accent': 'Kontaktieren',
      'contact.card.tagline':'Sie können uns jederzeit über Instagram, Telefon, WhatsApp oder E-Mail kontaktieren.',
      'contact.instagram':   'Folgen Sie uns auf Instagram',
      'contact.divider':     'oder direkt kontaktieren',
      'contact.whatsapp':    'Per WhatsApp schreiben',
      'contact.form.title':  'Schnelles Angebotsformular',
      'contact.form.name':       'Vollständiger Name *',
      'contact.form.name.ph':    'z.B: Max Mustermann',
      'contact.form.phone':      'Ihre Telefonnummer *',
      'contact.form.phone.ph':   'z.B: +49 555 123 45 67',
      'contact.form.email':      'Ihre E-Mail-Adresse',
      'contact.form.email.ph':   'z.B: max@unternehmen.de',
      'contact.form.service':    'Gewünschte Leistung',
      'contact.form.opt.landing':  'Landing Page / Einzelseite',
      'contact.form.opt.corporate':'Unternehmenswebseite',
      'contact.form.opt.ecommerce':'E-Commerce-Website',
      'contact.form.opt.custom':   'Individuelles Design / Sonstiges',
      'contact.form.message':    'Nachricht / Projektdetails *',
      'contact.form.message.ph': 'Geben Sie kurze Informationen zu Ihrem Projekt...',
      'contact.form.submit':     'Angebotsanfrage senden',
      'contact.form.sending':    'Wird gesendet...',

      'footer.tagline':   'Hochwertige, schnelle und kostengünstigste digitale Lösungen für Unternehmen.',
      'footer.menu':      'Schnellmenü',
      'footer.follow':    'Folgen Sie uns',
      'footer.contact_us': 'Kontaktieren Sie uns',
      'footer.home':      'Startseite',
      'footer.services':  'Leistungen',
      'footer.portfolio': 'Portfolio',
      'footer.pricing':   'Preisrechner',
      'footer.contact':   'Kontakt',
      'footer.copyright': '© 2026 NetVizyon. Alle Rechte vorbehalten.',

      'toast.success':      'Herzlichen Glückwunsch! Ihre Angebotsanfrage wurde erhalten. Wir melden uns so schnell wie möglich.',
      'toast.err.required': 'Bitte füllen Sie die Pflichtfelder aus.',
      'toast.err.name':     'Bitte geben Sie einen gültigen vollständigen Namen ein (mindestens 3 Zeichen).',
      'toast.err.phone':    'Bitte geben Sie eine gültige Telefonnummer ein.',
      'toast.err.email':    'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      'toast.err.message':  'Bitte beschreiben Sie Ihre Anfrage ausführlicher (mindestens 10 Zeichen).',
      'toast.err.supabase': 'Verbindungsfehler: Datenbankbibliothek konnte nicht geladen werden.',
      'toast.err.submit':   'Formular konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.',
      'toast.err.system':   'Ein Systemfehler ist aufgetreten. Bitte versuchen Sie es erneut.',

      'a11y.menu.open':  'Menü öffnen',
      'a11y.menu.close': 'Menü schließen',

      'calc.msg.prefix': 'Hallo, ich möchte detaillierte Informationen zu dem mit dem Preisrechner erstellten Paket erhalten.\nGewähltes Paket: ',
      'calc.msg.pages':  'Seitenanzahl: ',
      'calc.msg.addons': 'Zusatzfunktionen: ',
      'calc.msg.total':  'Berechneter Betrag: ',

      'cookie.title':   'Cookie-Einstellungen',
      'cookie.desc':    'Wir verwenden Cookies, um Ihnen das beste Erlebnis zu bieten, die Leistung zu optimieren und Daten zu analysieren.',
      'cookie.accept':  'Alle akzeptieren',
      'cookie.decline': 'Nur essenzielle',
    },

    /* ══════════════════════════════════════════
       العربية  (RTL)
    ══════════════════════════════════════════ */
    ar: {
      'meta.title':       'NetVizyon | حلول تصميم ويب احترافية واقتصادية',
      'meta.description': 'تصميم ويب احترافي وتجارة إلكترونية وحلول رقمية مع NetVizyon.',

      'nav.home':     'الرئيسية',
      'nav.services': 'الخدمات',
      'nav.portfolio':'المحفظة',
      'nav.pricing':  'حاسبة الأسعار',
      'nav.faq':      'الأسئلة الشائعة',
      'nav.contact':  'اتصل بنا',
      'nav.cta':      'احصل على عرض',

      'hero.title1':       'لا حدود',
      'hero.title.vision': 'رؤية',
      'hero.title2':       'تصميم اقتصادي',
      'hero.desc':         'التصميم الجيد حق للجميع. في NetVizyon، نبني واجهة عملك الرقمية دون تكاليف وكالة عالية، مع بنية تحتية متطورة وجودة سرعة متفوقة.',
      'hero.cta1':         'احسب السعر',
      'hero.cta2':         'استعرض أعمالنا',
      'hero.panel.label':  'سرعة الصفحة',

      'services.title':    'خدماتنا',
      'services.subtitle': 'حلول رقمية أساسية بدون تعقيدات غير ضرورية، مصممة لرفع أعمالك إلى القمة.',
      's1.title': 'مواقع الشركات',
      's1.desc':  'صفحات ويب مؤسسية بخطوط تصميم عصرية، تعكس رؤية شركتك وقيمها ومنتجاتها وتبني ثقة عملائك.',
      's1.tag1':  '#لوحة_تحكم',
      's1.tag2':  '#تحسين_السرعة',
      's1.tag3':  '#متوافق_موبايل',
      's2.title': 'أنظمة التجارة الإلكترونية',
      's2.desc':  'متاجر افتراضية حديثة مع بنية تحتية آمنة للدفع وتكامل الشحن لبيع منتجاتك في السوق الرقمية.',
      's2.tag1':  '#نقطة_البيع',
      's2.tag2':  '#تتبع_المخزون',
      's3.title': 'صفحة الهبوط',
      's3.desc':  'تصميمات ويب أحادية الصفحة بمعدل تحويل عالٍ، مصممة لحملاتك الإعلانية أو إطلاق خدماتك الخاصة.',
      's3.tag1':  '#تركيز_التحويل',
      's3.tag2':  '#عرض_سريع',
      's4.title': 'SEO والأداء',
      's4.desc':  'حزم تحسين وفق أحدث المعايير التقنية لجعل موقعك يبرز في بحث جوجل ويحمل في ثوانٍ.',
      's4.tag1':  '#SEO_جوجل',
      's4.tag2':  '#PageSpeed_A+',

      'portfolio.title':    'المحفظة',
      'portfolio.subtitle': 'مشروعنا الفخور الذي حققناه ويمثل النجاح الرقمي لعميلنا.',
      'portfolio.badge':       'مشروع مميز',
      'portfolio.client.cat':  'تصميم ويب مؤسسي / استثمار واستشارة',
      'portfolio.client.desc': 'مشروع ويب مؤسسي طور لمجموعة دادسون العاملة في الاستثمار والطاقة والسياحة والبناء. تم تطوير تصميم جمالي فاخر بأسلوب مينيمالي بتونات ذهبية/داكنة لعكس هيبة الشركة، مع بنية تحتية عالية السرعة ومتوافقة تماماً مع الموبايل.',
      'portfolio.stat1.label': 'درجة السرعة',
      'portfolio.stat2.num':   'قابل للإدارة',
      'portfolio.stat2.label': 'لوحة تحكم',
      'portfolio.stat3.num':   'كامل',
      'portfolio.stat3.label': 'بنية SEO',
      'portfolio.cta':         'زيارة الموقع',

      'pricing.title':    'حاسبة الأسعار الذكية',
      'pricing.subtitle': 'اختر مميزات موقعك وشاهد التكلفة التقديرية فوراً دون أي تكاليف مفاجئة!',
      'pricing.step1':         'اختر نوع الموقع',
      'pricing.step2.label':   'عدد الصفحات',
      'pricing.step2.suffix':  'صفحة',
      'pricing.step3':         'مميزات إضافية',
      'pricing.type.landing':       'صفحة هبوط',
      'pricing.type.landing.price': 'يبدأ من ₺4.500',
      'pricing.type.corporate':       'موقع مؤسسي',
      'pricing.type.corporate.price': 'يبدأ من ₺6.000',
      'pricing.type.ecommerce':       'تجارة إلكترونية',
      'pricing.type.ecommerce.price': 'يبدأ من ₺8.000',
      'pricing.addon.seo':          'باقة SEO المتقدمة (+₺750)',
      'pricing.addon.seo.desc':     'بحث الكلمات المفتاحية وخرائط الموقع التقنية.',
      'pricing.addon.multilang':    'دعم متعدد اللغات (+₺1.000)',
      'pricing.addon.multilang.desc': 'إعداد البنية التحتية للإنجليزية أو لغات أخرى.',
      'pricing.addon.whatsapp':     'تكامل واتساب السريع (+₺500)',
      'pricing.addon.whatsapp.desc': 'زر لتواصل العملاء معك مباشرة عبر واتساب.',
      'pricing.addon.speed':        'تحسين سرعة إضافي (+₺800)',
      'pricing.addon.speed.desc':   'درجات A+ في PageSpeed وتحميل فوري.',
      'pricing.result.header':   'التكلفة التقديرية للمشروع',
      'pricing.result.notice':   '* الاستضافة والنطاق (سنة واحدة) مشمولة في السعر.',
      'pricing.result.surprise': 'لا رسوم مفاجئة!',
      'pricing.result.package':  'محتويات الباقة:',
      'pricing.cta':             'احصل على عرض لهذه الباقة',
      'pricing.overlay.lang':    'دعم متعدد اللغات نشط',
      'pricing.overlay.speed':   '⚡ تحسين السرعة (A+)',
      'pricing.overlay.seo':     'البنية SEO نشطة',

      'calc.landing':       'إعداد صفحة الهبوط',
      'calc.corporate':     'البنية التحتية المؤسسية',
      'calc.ecommerce':     'إعداد متجر التجارة الإلكترونية',
      'calc.payment':       'بنية تحتية آمنة للدفع',
      'calc.extra.pages':   'صفحات إضافية',
      'calc.mobile':        'واجهة متوافقة مع الجوال والتابلت',
      'calc.ssl':           'شهادة SSL مجانية',
      'calc.hosting':       'استضافة مجانية لمدة عام',
      'calc.seo.addon':     'باقة SEO المتقدمة',
      'calc.multilang.addon': 'دعم متعدد اللغات',
      'calc.whatsapp.addon':  'تكامل واتساب',
      'calc.speed.addon':     'تحسين سرعة إضافي',

      'faq.title':    'الأسئلة الشائعة',
      'faq.subtitle': 'إجابات على أسئلتك قبل العمل مع NetVizyon.',
      'faq.1.q': 'كم من الوقت يستغرق إكمال موقعي؟',
      'faq.1.a': 'تختلف مدة التسليم بحسب الباقة. عادةً تكتمل صفحات الهبوط في 3–5 أيام عمل، والمواقع المؤسسية في 7–10 أيام، ومشاريع التجارة الإلكترونية في 10–15 يوم عمل.',
      'faq.2.q': 'لماذا أسعاركم مناسبة جداً؟ هل يُقدَّم على الجودة؟',
      'faq.2.a': 'هدفنا مساعدة الشركات الناشئة والصغيرة على التحول الرقمي دون تكاليف عالية. باستخدام قوالب كود محسّنة وعمليات فعّالة، نقدم أسعاراً مناسبة دون المساس بالجودة.',
      'faq.3.q': 'هل رسوم النطاق والاستضافة مشمولة في السعر؟',
      'faq.3.a': 'نعم! جميع الباقات تشمل مجاناً تسجيل النطاق لعام كامل (.com أو .com.tr) واستضافة SSD عالية السرعة. في السنوات اللاحقة، تُطبّق فقط رسوم التجديد القياسية دون أي تكاليف خفية.',
      'faq.4.q': 'هل يمكنني إجراء تغييرات بعد نشر موقعي؟',
      'faq.4.a': 'بالتأكيد. نقدم لوحة تحكم سهلة الاستخدام عند التسليم. يمكنك تحديث المحتوى والمنتجات والصور والنصوص في أي وقت دون برمجة. كما نقدم شهراً من الدعم الفني بعد التسليم.',
      'faq.5.q': 'هل سأظهر في محركات البحث (جوجل)؟',
      'faq.5.a': 'نبني هيكل موقعك ليكون متوافقاً تماماً مع جوجل وSEO. يتم إنشاء خريطة الموقع وتسجيل Google Search Console مجاناً ليُفهرس موقعك بسرعة ويصبح قابلاً للاكتشاف.',

      'contact.title':       'تواصل معنا',
      'contact.subtitle':    'تواصل معنا لإخبارنا عن مشروعك واحتل مكانك في العالم الرقمي الآن.',
      'contact.card.h3':     'تواصل',
      'contact.card.accent': 'معنا',
      'contact.card.tagline':'يمكنك التواصل معنا في أي وقت لمشروعك عبر إنستغرام والهاتف وواتساب أو البريد الإلكتروني.',
      'contact.instagram':   'تابعونا على إنستغرام',
      'contact.divider':     'أو تواصل مباشرة',
      'contact.whatsapp':    'اكتب عبر واتساب',
      'contact.form.title':  'نموذج عرض سريع',
      'contact.form.name':       'الاسم الكامل *',
      'contact.form.name.ph':    'مثال: محمد أحمد',
      'contact.form.phone':      'رقم هاتفك *',
      'contact.form.phone.ph':   'مثال: +90 555 123 45 67',
      'contact.form.email':      'بريدك الإلكتروني',
      'contact.form.email.ph':   'مثال: info@company.com',
      'contact.form.service':    'الخدمة المطلوبة',
      'contact.form.opt.landing':  'صفحة هبوط / موقع أحادي الصفحة',
      'contact.form.opt.corporate':'موقع مؤسسي',
      'contact.form.opt.ecommerce':'موقع تجارة إلكترونية',
      'contact.form.opt.custom':   'تصميم مخصص / أخرى',
      'contact.form.message':    'رسالتك / تفاصيل المشروع *',
      'contact.form.message.ph': 'أعطنا معلومات موجزة عن مشروعك...',
      'contact.form.submit':     'إرسال طلب العرض',
      'contact.form.sending':    'جارٍ الإرسال...',

      'footer.tagline':   'حلول رقمية عالية الجودة وسريعة وأكثر توفراً للشركات.',
      'footer.menu':      'القائمة السريعة',
      'footer.follow':    'تابعونا',
      'footer.contact_us': 'تواصل معنا',
      'footer.home':      'الرئيسية',
      'footer.services':  'الخدمات',
      'footer.portfolio': 'المحفظة',
      'footer.pricing':   'حاسبة الأسعار',
      'footer.contact':   'اتصل',
      'footer.copyright': '© 2026 NetVizyon. جميع الحقوق محفوظة.',

      'toast.success':      'تهانينا! تم استلام طلب عرضك بنجاح. سنعود إليك في أقرب وقت ممكن.',
      'toast.err.required': 'يرجى ملء الحقول المطلوبة.',
      'toast.err.name':     'يرجى إدخال اسم كامل صالح (3 أحرف على الأقل).',
      'toast.err.phone':    'يرجى إدخال رقم هاتف صحيح.',
      'toast.err.email':    'يرجى إدخال عنوان بريد إلكتروني صحيح.',
      'toast.err.message':  'يرجى وصف طلبك بمزيد من التفاصيل (10 أحرف على الأقل).',
      'toast.err.supabase': 'خطأ في الاتصال: تعذر تحميل مكتبة قاعدة البيانات.',
      'toast.err.submit':   'تعذر إرسال النموذج. يرجى المحاولة مرة أخرى لاحقاً.',
      'toast.err.system':   'حدث خطأ في النظام. يرجى المحاولة مرة أخرى.',

      'a11y.menu.open':  'فتح القائمة',
      'a11y.menu.close': 'إغلاق القائمة',

      'calc.msg.prefix': 'مرحباً، أود الحصول على معلومات تفصيلية حول الباقة التي أنشأتها باستخدام حاسبة الأسعار.\nالباقة المختارة: ',
      'calc.msg.pages':  'عدد الصفحات: ',
      'calc.msg.addons': 'المميزات الإضافية: ',
      'calc.msg.total':  'المبلغ المحسوب: ',

      'cookie.title':   'تفضيلات ملفات تعريف الارتباط',
      'cookie.desc':    'نستخدم ملفات تعريف الارتباط لتحسين تجربتك، وتحسين الأداء، وتحليل استخدام الموقع.',
      'cookie.accept':  'قبول الكل',
      'cookie.decline': 'الضرورية فقط',
    }
  };

  /* ─── 2. SUPPORTED LANGUAGES ──────────────────────────────────────────── */
  const SUPPORTED = ['tr', 'en', 'de', 'ar'];
  const RTL_LANGS  = ['ar'];

  /* ─── 3. CURRENT LANG STATE ───────────────────────────────────────────── */
  let currentLang = 'tr';

  /* ─── 4. TRANSLATION GETTER ───────────────────────────────────────────── */
  function t(key, lang) {
    const l = lang || currentLang;
    const data = translations[l];
    if (data && key in data) return data[key];
    return `[MISSING:${key}]`;
  }

  /* ─── 5. APPLY ALL TRANSLATIONS TO DOM ───────────────────────────────── */
  function applyTranslations(lang) {
    const isRtl = RTL_LANGS.includes(lang);

    /* textContent nodes */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });

    /* placeholder attributes */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-ph'), lang);
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'), lang));
    });

    /* select option text nodes */
    document.querySelectorAll('[data-i18n-opt]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n-opt'), lang);
    });

    /* Hero "Vizyon" image <-> text swap */
    const vizyonImg  = document.getElementById('hero-vizyon-img');
    const vizyonText = document.getElementById('hero-vizyon-text');
    if (vizyonImg && vizyonText) {
      if (lang === 'tr') {
        vizyonImg.style.display  = '';
        vizyonText.style.display = 'none';
      } else {
        vizyonImg.style.display  = 'none';
        vizyonText.style.display = 'inline';
        vizyonText.textContent   = t('hero.title.vision', lang);
      }
    }

    /* RTL / LTR document direction */
    document.documentElement.dir  = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    /* SEO meta tags */
    document.title = t('meta.title', lang);
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', t('meta.description', lang));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', t('meta.title', lang));
    const ogDesc  = document.querySelector('meta[property="og:description"]');
    if (ogDesc)  ogDesc.setAttribute('content', t('meta.description', lang));

    /* Sync active state on ALL lang buttons */
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    /* Update Globe button label text badge */
    const codeBadge = document.getElementById('lang-code-text');
    if (codeBadge) {
      codeBadge.textContent = lang.toUpperCase();
    }

    /* Dispatch event so app.js can refresh dynamic content */
    window.dispatchEvent(new CustomEvent('nvLangChange', { detail: { lang } }));
  }

  /* ─── 6. AUTOMATIC LANGUAGE DETECTION (BROWSER & IP GEOLOCATION) ───────── */
  const COUNTRY_LANG_MAP = {
    // German-speaking
    'DE': 'de', 'AT': 'de', 'CH': 'de', 'LI': 'de', 'LU': 'de',
    // English-speaking
    'US': 'en', 'GB': 'en', 'CA': 'en', 'AU': 'en', 'NZ': 'en', 'IE': 'en',
    // Arabic-speaking
    'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'QA': 'ar', 'KW': 'ar', 'OM': 'ar', 'BH': 'ar', 'JO': 'ar', 'LB': 'ar', 'IQ': 'ar', 'DZ': 'ar', 'MA': 'ar', 'TN': 'ar',
    // Turkish
    'TR': 'tr'
  };

  function detectAutoLanguage() {
    const userLangs = (navigator.languages && navigator.languages.length) 
      ? navigator.languages 
      : [navigator.language || navigator.userLanguage || ''];

    for (let l of userLangs) {
      if (!l) continue;
      l = l.toLowerCase();
      if (l.startsWith('de')) return 'de';
      if (l.startsWith('en')) return 'en';
      if (l.startsWith('ar')) return 'ar';
      if (l.startsWith('tr')) return 'tr';
    }
    return 'tr';
  }

  /* ─── 7. PUBLIC setLanguage ────────────────────────────────────────────── */
  function setLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'tr';
    currentLang = lang;
    applyTranslations(lang);
    try { localStorage.setItem('nvLang', lang); } catch (e) { }
    history.replaceState(null, '', lang === 'tr' ? location.pathname : `#${lang}`);
  }

  /* ─── 8. INIT ───────────────────────────────────────────────────────────── */
  function init() {
    const hash   = window.location.hash.replace('#', '').trim();
    const stored = (() => { try { return localStorage.getItem('nvLang'); } catch(e) { return null; } })();
    let   lang   = 'tr';

    if (SUPPORTED.includes(hash)) {
      lang = hash;
    } else if (SUPPORTED.includes(stored)) {
      lang = stored;
    } else {
      // Auto-detect from browser locale
      lang = detectAutoLanguage();
    }

    currentLang = lang;
    applyTranslations(lang);

    // IP Geolocation fallback for first-time visitors (if no hash or manual choice)
    if (!SUPPORTED.includes(hash) && !SUPPORTED.includes(stored)) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data && data.country_code) {
            const countryCode = data.country_code.toUpperCase();
            const geoLang = COUNTRY_LANG_MAP[countryCode];
            if (geoLang && SUPPORTED.includes(geoLang) && geoLang !== currentLang) {
              setLanguage(geoLang);
            }
          }
        })
        .catch(() => { /* Fail-safe silent catch if offline or adblocker blocks request */ });
    }

    /* Globe Dropdown Toggle Listener */
    const dropdownWrapper = document.getElementById('lang-dropdown-wrapper');
    const dropdownToggle  = document.getElementById('lang-dropdown-toggle');
    if (dropdownWrapper && dropdownToggle) {
      dropdownToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownWrapper.classList.toggle('active');
      });

      /* Close dropdown when clicking outside */
      document.addEventListener('click', (e) => {
        if (!dropdownWrapper.contains(e.target)) {
          dropdownWrapper.classList.remove('active');
        }
      });
    }

    /* Bind ALL [data-lang] buttons */
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-lang');
        setLanguage(target);
        if (dropdownWrapper) dropdownWrapper.classList.remove('active');

        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          const icon = document.querySelector('.mobile-menu-toggle i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars-staggered');
          }
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ─── 9. EXPOSE GLOBALLY ─────────────────────────────────────────────── */
  window.I18n = { t, getLang: () => currentLang, setLanguage, init };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
