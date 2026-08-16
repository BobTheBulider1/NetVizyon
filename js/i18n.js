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
      'portfolio.subtitle': 'Becerilerimizi, teknik uzmanlığımızı ve estetik vizyonumuzu yansıtan seçkin çalışmalarımız.',
      'portfolio.cta':         'Projeyi İncele',
      'portfolio.filter.all':      'Öne Çıkanlar / Tümü',
      'portfolio.filter.realized': 'Müşteri Projeleri',
      'portfolio.filter.concept':  'Konsept & Prototip',

      'portfolio.project1.badge':       'Müşteri Projesi',
      'portfolio.project1.title':       'Dadson Grup',
      'portfolio.project1.cat':         'Kurumsal Web Tasarım / Yatırım & Danışmanlık',
      'portfolio.project1.desc':        'Yatırım, enerji, turizm ve inşaat alanlarında faaliyet gösteren Dadson Grup için geliştirilen kurumsal web projesi. Şirketin prestijini yansıtacak minimalist, gold/koyu tonlarda lüks bir estetik tasarım geliştirilmiş, yüksek hız ve tam mobil uyumluluk altyapısı kurulmuştur.',
      'portfolio.project1.stat1.num':   '98%',
      'portfolio.project1.stat1.label': 'Hız Skoru',
      'portfolio.project1.stat2.num':   'Yönetilebilir',
      'portfolio.project1.stat2.label': 'Türkçe Panel',
      'portfolio.project1.stat3.num':   'Tam',
      'portfolio.project1.stat3.label': 'SEO Altyapısı',

      'portfolio.project2.badge':       'Konsept & Lab',
      'portfolio.project2.title':       'FUEGO & TRIGO',
      'portfolio.project2.cat':         'Kreatif Arayüz / Pizza Restoranı Konsepti',
      'portfolio.project2.desc':        'Özel taş fırın pizzaları sunan premium bir restoran için hazırlanan dijital arayüz konsepti. Müşterilerin pizzalarını görsel olarak inceleyebilecekleri interaktif bir menü, şık ve minimalist açık tema tasarımı ve hızlı sipariş/rezervasyon deneyimi sunar.',
      'portfolio.project2.stat2.num':   'İnteraktif',
      'portfolio.project2.stat2.label': 'Menü Tasarımı',
      'portfolio.project2.stat3.num':   'Premium',
      'portfolio.project2.stat3.label': 'Tasarım',

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
      'toast.err.consent':  'Lütfen Aydınlatma Metni\'ni onaylayın.',
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

      'contact.form.consent.req.before': '',
      'contact.form.consent.req.link':   'Aydınlatma Metni',
      'contact.form.consent.req.after':  '\'ni okudum, anladım. Kişisel verilerimin bu kapsamda işlenmesini ve talebim doğrultusunda benimle iletişime geçilmesini onaylıyorum.',
      'contact.form.consent.optional':   'Tarafıma özel teklif, pazarlama ve bilgilendirme iletileri gönderilmesini kabul ediyorum.',

      'footer.policy.kvkk':    'KVKK Aydınlatma Metni',
      'footer.policy.privacy': 'Gizlilik ve Çerez Politikası',
      'footer.policy.terms':   'Kullanım Koşulları',

      'policy.accept_btn':     'Okudum, Anladım',
      'policy.close_btn':      'Kapat',
      'policy.kvkk.title':     'Kişisel Verilerin Korunması ve İşlenmesi Aydınlatma Metni',
      'policy.kvkk.text':      '<p>Netvizyon ("Şirket") olarak, web sitemiz üzerinden bizimle paylaştığınız kişisel verilerinizin güvenliğine ve gizliliğine önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, veri sorumlusu sıfatıyla sizleri bilgilendirmek isteriz.</p><h4>1. İşlenen Kişisel Verileriniz</h4><p>Web sitemizdeki fiyat hesaplama ve teklif formunu doldurmanız halinde aşağıdaki verileriniz işlenmektedir:</p><ul><li><strong>Kimlik Bilgileri:</strong> Adı, soyadı</li><li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası</li><li><strong>Talep ve Proje Bilgileri:</strong> Bütçe tercihi, seçilen hizmet türleri, mesaj/proje detayları</li></ul><h4>2. Kişisel Verilerin İşlenme Amaçları</h4><p>Toplanan kişisel verileriniz;</p><ul><li>Hesapladığınız fiyat teklifinin tarafınıza iletilmesi,</li><li>Hizmetlerimizle ilgili taleplerinizin değerlendirilmesi ve sizinle iletişime geçilmesi,</li><li>Müşteri ilişkileri süreçlerinin yürütülmesi amaçlarıyla sınırlı ve ölçülü olarak işlenmektedir.</li></ul><h4>3. Kişisel Verilerin Aktarılması</h4><p>Toplanan kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi dışında üçüncü şahıslarla paylaşılmaz; ancak yasal yükümlülükler doğrultusunda yetkili kamu kurum ve kuruluşları ile paylaşılabilir.</p><h4>4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h4><p>Verileriniz, web sitemizde yer alan formu doldurmanız suretiyle elektronik ortamda toplanmaktadır. Bu süreç, KVKK’nın 5. maddesinde belirtilen "Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması" ve "Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi" hukuki sebeplerine dayanmaktadır.</p><h4>5. KVKK Kapsamındaki Haklarınız</h4><p>KVKK’nın 11. maddesi uyarınca veri sahibi olarak; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, verilerinizin düzeltilmesini veya silinmesini isteme haklarına sahipsiniz.</p><p>Taleplerinizi <strong>info@netvizyon.com</strong> adresi üzerinden bizimle paylaşabilirsiniz.</p>',
      'policy.privacy.title':  'Gizlilik ve Çerez Politikası',
      'policy.privacy.text':   '<p>Netvizyon ("Şirket") olarak, web sitemizi ziyaret eden kullanıcılarımızın gizlilik haklarına saygı duyuyor ve çerez (cookie) kullanım süreçlerimizi şeffaf bir şekilde yönetiyoruz. Bu politika, sitemizde kullanılan çerez türlerini ve kişisel verilerinizin işlenme ilkelerini açıklamaktadır.</p><h4>1. Çerez (Cookie) Nedir ve Neden Kullanılır?</h4><p>Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza depolanan küçük veri dosyalarıdır. Çerezleri şu amaçlarla kullanmaktayız:</p><ul><li><strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerinin çalışabilmesi ve güvenliğin sağlanması için gereklidir.</li><li><strong>Analitik Çerezler:</strong> Ziyaretçilerin siteyi nasıl kullandığını anlamak, performans analizi yapmak ve kullanıcı deneyimini iyileştirmek için anonim veriler toplar.</li><li><strong>Tercih Çerezleri:</strong> Seçtiğiniz dil veya bölge gibi tercihlerinizi hatırlayarak sonraki ziyaretlerinizde kolaylık sağlar.</li></ul><h4>2. Çerez Tercihlerinin Yönetimi</h4><p>Web sitemize ilk girdiğinizde karşınıza çıkan çerez banner\'ı üzerinden veya tarayıcı ayarlarınızdan çerezleri dilediğiniz gibi engelleyebilir veya silebilirsiniz. Ancak zorunlu çerezlerin kapatılması durumunda sitenin bazı özellikleri çalışmayabilir.</p><h4>3. Veri Güvenliği ve İletişim</h4><p>Çerezler vasıtasıyla elde edilen verileriniz kesinlikle üçüncü taraflara ticari amaçlarla satılmaz veya devredilmez. Detaylı bilgi veya talepleriniz için <strong>info@netvizyon.com</strong> adresi üzerinden bizimle iletişime geçebilirsiniz.</p>',
      'policy.terms.title':    'Kullanım Koşulları',
      'policy.terms.text':     '<p>Netvizyon web sitesine hoş geldiniz. Sitemizi kullanarak ve sitemizde yer alan hizmetlerden yararlanarak aşağıdaki koşulları kabul etmiş sayılırsınız.</p><h4>1. Fiyat Hesaplama Aracı ve Tekliflerin Niteliği</h4><p>Sitemizde yer alan interaktif fiyat hesaplama aracı tarafından sunulan fiyatlar tamamen <strong>tahmini ve bilgilendirme amaçlıdır</strong>. Bu fiyatlar resmi bir teklif veya sözleşme taahhüdü niteliği taşımaz. Nihai fiyatlandırma ve proje teslim süresi, teklif formu doldurularak ilettiğiniz bilgilerin ekibimiz tarafından detaylıca incelenmesi ve tarafınıza resmi teklif belgesinin (PDF) sunulmasıyla kesinleşecektir.</p><h4>2. Fikri Mülkiyet ve İçerik Kullanımı</h4><p>Bu web sitesinde yer alan tüm tasarım bileşenleri, görseller, kodlar, logolar ve yazılı içeriklerin telif hakları Netvizyon\'a aittir. Yazılı izin alınmaksızın kopyalanması, çoğaltılması veya ticari amaçlarla kullanılması yasaktır.</p><h4>3. Değişiklik Hakları</h4><p>Netvizyon, sitemizde sunulan hizmetlerin içeriğini, fiyat hesaplama kriterlerini ve kullanım koşullarını önceden haber vermeksizin dilediği zaman güncelleme hakkını saklı tutar.</p>',
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
      'portfolio.subtitle': 'Our selected works reflecting our capabilities, technical expertise, and aesthetic vision.',
      'portfolio.cta':         'View Project',
      'portfolio.filter.all':      'All / Featured',
      'portfolio.filter.realized': 'Client Projects',
      'portfolio.filter.concept':  'Concept & Lab',

      'portfolio.project1.badge':       'Client Project',
      'portfolio.project1.title':       'Dadson Group',
      'portfolio.project1.cat':         'Corporate Web Design / Investment & Consulting',
      'portfolio.project1.desc':        'A corporate web project developed for Dadson Group, operates in investment, energy, tourism, and construction fields. A minimalist luxury design with gold and dark tones was crafted, combined with high speed and full mobile compatibility.',
      'portfolio.project1.stat1.num':   '98%',
      'portfolio.project1.stat1.label': 'Speed Score',
      'portfolio.project1.stat2.num':   'Manageable',
      'portfolio.project1.stat2.label': 'CMS Panel',
      'portfolio.project1.stat3.num':   'Full',
      'portfolio.project1.stat3.label': 'SEO Setup',

      'portfolio.project2.badge':       'Concept & Lab',
      'portfolio.project2.title':       'FUEGO & TRIGO',
      'portfolio.project2.cat':         'Creative UI / Pizza Restaurant Concept',
      'portfolio.project2.desc':        'A digital interface concept crafted for a premium stone-oven pizzeria. Features an interactive menu where customers can visually inspect their pizzas, a sleek and minimalist light theme design, and a fast order/reservation experience.',
      'portfolio.project2.stat2.num':   'Interactive',
      'portfolio.project2.stat2.label': 'Menu Design',
      'portfolio.project2.stat3.num':   'Premium',
      'portfolio.project2.stat3.label': 'Design',

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
      'toast.err.consent':  'Please accept the Clarification Text.',
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

      'contact.form.consent.req.before': 'I have read and understood the ',
      'contact.form.consent.req.link':   'Clarification Text',
      'contact.form.consent.req.after':  '. I consent to the processing of my personal data within this scope and to be contacted regarding my request.',
      'contact.form.consent.optional':   'I consent to receiving special offers, marketing, and informational communications.',

      'footer.policy.kvkk':    'KVKK Clarification Text',
      'footer.policy.privacy': 'Privacy & Cookie Policy',
      'footer.policy.terms':   'Terms of Use',

      'policy.accept_btn':     'I Have Read, I Understand',
      'policy.close_btn':      'Close',
      'policy.kvkk.title':     'Clarification Text on Personal Data Protection and Processing',
      'policy.kvkk.text':      '<p>As Netvizyon ("Company"), we attach importance to the security and privacy of your personal data shared with us via our website. In accordance with the Law on the Protection of Personal Data No. 6698 ("KVKK") and GDPR, we would like to inform you as the data controller.</p><h4>1. Processed Personal Data</h4><p>If you fill out the price calculation and quote request form on our website, your following data is processed:</p><ul><li><strong>Identity Information:</strong> Name, surname</li><li><strong>Contact Information:</strong> Email address, phone number</li><li><strong>Request and Project Information:</strong> Budget preferences, selected service types, message/project details</li></ul><h4>2. Purposes of Processing Personal Data</h4><p>Your collected personal data is processed in a limited and proportionate manner for the purposes of:</p><ul><li>Delivering the calculated price quote to you,</li><li>Evaluating your requests regarding our services and contacting you,</li><li>Managing customer relationship processes.</li></ul><h4>3. Transfer of Personal Data</h4><p>Your collected personal data is not shared with third parties except for the realization of the purposes stated above; however, it may be shared with authorized public institutions and organizations in line with legal obligations.</p><h4>4. Method and Legal Reason for Collecting Personal Data</h4><p>Your data is collected electronically by filling out the form on our website. This process is based on the legal grounds of "being directly related to the establishment or performance of a contract" and "fulfilment of the data controller\'s legal obligation" specified in KVKK Article 5 and GDPR Article 6.</p><h4>5. Your Rights Under KVKK / GDPR</h4><p>As a data subject under Article 11 of the KVKK and GDPR, you have the right to learn whether your personal data is processed, to request information if it has been processed, and to request correction or deletion of your data.</p><p>You can share your requests with us via <strong>info@netvizyon.com</strong>.</p>',
      'policy.privacy.title':  'Privacy & Cookie Policy',
      'policy.privacy.text':   '<p>As Netvizyon ("Company"), we respect the privacy rights of our users visiting our website and manage our cookie usage transparently. This policy explains the types of cookies used on our site and the principles of processing your personal data.</p><h4>1. What is a Cookie and Why is it Used?</h4><p>Cookies are small data files stored on your device through your browser when you visit our website. We use cookies for the following purposes:</p><ul><li><strong>Mandatory Cookies:</strong> Required for the basic functionality and security of the website.</li><li><strong>Analytical Cookies:</strong> Collects anonymous data to understand how visitors use the site, perform performance analysis, and improve user experience.</li><li><strong>Preference Cookies:</strong> Remembers your preferences such as language or region to provide convenience in your next visits.</li></ul><h4>2. Managing Cookie Preferences</h4><p>You can block or delete cookies via the cookie consent banner that appears when you first visit our website, or through your browser settings. However, if mandatory cookies are disabled, some features of the site may not function properly.</p><h4>3. Data Security and Contact</h4><p>Your data obtained through cookies is strictly not sold or transferred to third parties for commercial purposes. For detailed information or requests, you can contact us at <strong>info@netvizyon.com</strong>.</p>',
      'policy.terms.title':    'Terms of Use',
      'policy.terms.text':     '<p>Welcome to the Netvizyon website. By using our website and services, you are deemed to have accepted the following terms and conditions.</p><h4>1. Price Calculator and Nature of Quotes</h4><p>The prices provided by the interactive price calculator on our website are purely <strong>estimated and for informational purposes</strong>. These prices do not constitute an official quote or contract commitment. Final pricing and project delivery timeline will be finalized after your submitted request is reviewed in detail by our team and an official proposal document (PDF) is presented to you.</p><h4>2. Intellectual Property and Content Use</h4><p>All design components, visuals, codes, logos, and written content on this website are copyrighted by Netvizyon. Copying, reproducing, or using them for commercial purposes without written permission is prohibited.</p><h4>3. Right to Make Changes</h4><p>Netvizyon reserves the right to update the content of services, price calculation criteria, and terms of use presented on our website at any time without prior notice.</p>',
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
      'portfolio.subtitle': 'Unsere ausgewählten Arbeiten, die unsere Fähigkeiten, technische Expertise und ästhetische Vision widerspiegeln.',
      'portfolio.cta':         'Projekt ansehen',
      'portfolio.filter.all':      'Ausgewählte / Alle',
      'portfolio.filter.realized': 'Kundenprojekte',
      'portfolio.filter.concept':  'Konzept & Prototyp',

      'portfolio.project1.badge':       'Kundenprojekt',
      'portfolio.project1.title':       'Dadson Group',
      'portfolio.project1.cat':         'Unternehmenswebdesign / Investitionen & Beratung',
      'portfolio.project1.desc':        'Ein Unternehmenswebprojekt für die Dadson Group, tätig in Investitionen, Energie, Tourismus und Bauwesen. Ein minimalistisches Luxusdesign in Gold-/Dunkeltönen wurde entwickelt, um das Prestige des Unternehmens widerzuspiegeln — mit Hochgeschwindigkeits- und vollständiger mobiler Infrastruktur.',
      'portfolio.project1.stat1.num':   '98%',
      'portfolio.project1.stat1.label': 'Geschwindigkeit',
      'portfolio.project1.stat2.num':   'Verwaltbar',
      'portfolio.project1.stat2.label': 'CMS-Panel',
      'portfolio.project1.stat3.num':   'Vollständig',
      'portfolio.project1.stat3.label': 'SEO-Setup',

      'portfolio.project2.badge':       'Konzept & Labor',
      'portfolio.project2.title':       'FUEGO & TRIGO',
      'portfolio.project2.cat':         'Kreatives UI / Pizza-Restaurant Konzept',
      'portfolio.project2.desc':        'Ein digitales Interface-Konzept für eine Premium-Steinofen-Pizzeria. Bietet eine interaktive Speisekarte, auf der Kunden ihre Pizzas visuell betrachten können, ein elegantes und minimalistisches helles Design und eine schnelle Bestell-/Reservierungserfahrung.',
      'portfolio.project2.stat2.num':   'Interaktiv',
      'portfolio.project2.stat2.label': 'Menü-Design',
      'portfolio.project2.stat3.num':   'Premium',
      'portfolio.project2.stat3.label': 'Design',

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
      'contact.form.phone.ph':   'z.B: +49 1521 440 68 08',
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
      'toast.err.consent':  'Bitte akzeptieren Sie den Informationshintergrund.',
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

      'contact.form.consent.req.before': 'Ich habe den ',
      'contact.form.consent.req.link':   'Informationshintergrund',
      'contact.form.consent.req.after':  ' gelesen und verstanden. Ich bin damit einverstanden, dass meine personenbezogenen Daten in diesem Rahmen verarbeitet werden und man mich bezüglich meiner Anfrage kontaktiert.',
      'contact.form.consent.optional':   'Ich stimme dem Erhalt von Sonderangeboten, Marketing- und Informationsmitteilungen zu.',

      'footer.policy.kvkk':    'KVKK-Informationshintergrund',
      'footer.policy.privacy': 'Datenschutz- & Cookie-Richtlinie',
      'footer.policy.terms':   'Nutzungsbedingungen',

      'policy.accept_btn':     'Gelesen, Verstanden',
      'policy.close_btn':      'Schließen',
      'policy.kvkk.title':     'Informationshintergrund zur Verarbeitung personenbezogener Daten',
      'policy.kvkk.text':      '<p>Als Netvizyon ("Unternehmen") legen wir großen Wert auf die Sicherheit und den Schutz Ihrer personenbezogenen Daten, die Sie uns über unsere Website mitteilen. In Übereinstimmung mit dem Gesetz zum Schutz personenbezogener Daten Nr. 6698 ("KVKK") und der DSGVO möchten wir Sie als Datenverantwortlicher informieren.</p><h4>1. Verarbeitete personenbezogene Daten</h4><p>Wenn Sie das Preisberechnungs- und Angebotsformular auf unserer Website ausfüllen, werden folgende Daten verarbeitet:</p><ul><li><strong>Identitätsdaten:</strong> Vorname, Nachname</li><li><strong>Kontaktdaten:</strong> E-Mail-Adresse, Telefonnummer</li><li><strong>Anfrage- und Projektdaten:</strong> Budgetpräferenz, ausgewählte Servicearten, Nachrichten-/Projektdetails</li></ul><h4>2. Zwecke der Datenverarbeitung</h4><p>Ihre erhobenen personenbezogenen Daten werden zweckgebunden und verhältnismäßig für folgende Zwecke verarbeitet:</p><ul><li>Übermittlung des berechneten Preisangebots an Sie,</li><li>Bewertung Ihrer Anfragen zu unseren Dienstleistungen und Kontaktaufnahme mit Ihnen,</li><li>Durchführung von Kundenbeziehungsprozessen.</li></ul><h4>3. Übermittlung personenbezogener Daten</h4><p>Ihre erhobenen personenbezogenen Daten werden nicht an Dritte weitergegeben, außer zur Erfüllung der oben genannten Zwecke; sie können jedoch im Rahmen gesetzlicher Verpflichtungen an autorisierte öffentliche Institutionen und Organisationen weitergegeben werden.</p><h4>4. Methode und Rechtsgrundlage der Datenerhebung</h4><p>Ihre Daten werden elektronisch erhoben, indem Sie das Formular auf unserer Website ausfüllen. Dieser Prozess basiert auf den Rechtsgrundlagen "Erforderlichkeit für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen" und "Erfüllung einer rechtlichen Verpflichtung des Verantwortlichen" gemäß KVKK Artikel 5 und DSGVO Artikel 6.</p><h4>5. Ihre Rechte gemäß KVKK / DSGVO</h4><p>Als betroffene Person haben Sie gemäß KVKK Artikel 11 und DSGVO das Recht zu erfahren, ob Ihre personenbezogenen Daten verarbeitet werden, Auskunft zu verlangen, wenn sie verarbeitet wurden, sowie die Berichtigung oder Löschung Ihrer Daten zu verlangen.</p><p>Sie können Ihre Anfragen an uns über <strong>info@netvizyon.com</strong> senden.</p>',
      'policy.privacy.title':  'Datenschutz- & Cookie-Richtlinie',
      'policy.privacy.text':   '<p>Als Netvizyon ("Unternehmen") respektieren wir die Privatsphäre unserer Nutzer und verwalten unsere Cookie-Nutzung transparent. Diese Richtlinie erklärt die Arten von Cookies, die auf unserer Website verwendet werden, und die Grundsätze der Verarbeitung Ihrer personenbezogenen Daten.</p><h4>1. Was ist ein Cookie und warum wird es verwendet?</h4><p>Cookies sind kleine Datendateien, die bei Ihrem Besuch auf unserer Website über Ihren Browser auf Ihrem Gerät gespeichert werden. Wir verwenden Cookies für folgende Zwecke:</p><ul><li><strong>Zwingend erforderliche Cookies:</strong> Notwendig für die grundlegende Funktionalität und Sicherheit der Website.</li><li><strong>Analytische Cookies:</strong> Sammelt anonyme Daten, um zu verstehen, wie Besucher die Website nutzen, Leistungsanalysen durchzuführen und die Benutzererfahrung zu verbessern.</li><li><strong>Präferenz-Cookies:</strong> Speichert Ihre Einstellungen wie Sprache oder Region, um Ihnen bei Ihren nächsten Besuchen Komfort zu bieten.</li></ul><h4>2. Verwaltung der Cookie-Einstellungen</h4><p>Sie können Cookies über das Cookie-Banner sperren oder löschen, das beim ersten Besuch unserer Website angezeigt wird, oder über Ihre Browsereinstellungen. Wenn zwingend erforderliche Cookies deaktiviert sind, funktionieren einige Funktionen der Website möglicherweise nicht richtig.</p><h4>3. Datensicherheit und Kontakt</h4><p>Ihre über Cookies erhaltenen Daten werden keinesfalls zu kommerziellen Zwecken an Dritte verkauft oder übertragen. Für detaillierte Informationen oder Anfragen können Sie uns unter <strong>info@netvizyon.com</strong> kontaktieren.</p>',
      'policy.terms.title':    'Nutzungsbedingungen',
      'policy.terms.text':     '<p>Willkommen auf der Netvizyon-Website. Durch die Nutzung unserer Website und Dienste erklären Sie sich mit den folgenden Bedingungen einverstanden.</p><h4>1. Preisrechner und Art der Angebote</h4><p>Die vom interaktiven Preisrechner auf unserer Website bereitgestellten Preise sind reine <strong>Schätzungen und dienen nur zu Informationszwecken</strong>. Diese Preise stellen kein offizielles Angebot oder eine vertragliche Verpflichtung dar. Die endgültige Preisgestaltung und der Liefertermin des Projekts werden festgelegt, nachdem Ihre Anfrage von unserem Team detailliert geprüft und Ihnen ein offizielles Angebot (PDF) vorgelegt wurde.</p><h4>2. Geistiges Eigentum und Inhaltsnutzung</h4><p>Alle Designkomponenten, Visualisierungen, Codes, Logos und schriftlichen Inhalte auf dieser Website sind urheberrechtlich geschützt durch Netvizyon. Das Kopieren, Reproduzieren oder Verwenden für kommerzielle Zwecke ohne schriftliche Genehmigung ist untersagt.</p><h4>3. Recht auf Änderungen</h4><p>Netvizyon behält sich das Recht vor, den Inhalt der Dienste, die Preisberechnungskriterien und die Nutzungsbedingungen auf unserer Website jederzeit ohne vorherige Ankündigung zu aktualisieren.</p>',
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
      'portfolio.subtitle': 'أعمالنا المختارة التي تعكس قدراتنا وخبراتنا الفنية ورؤيتنا الجمالية.',
      'portfolio.cta':         'عرض المشروع',
      'portfolio.filter.all':      'المميزة / الكل',
      'portfolio.filter.realized': 'مشاريع العملاء',
      'portfolio.filter.concept':  'المفهوم والنموذج الأولي',

      'portfolio.project1.badge':       'مشروع عميل',
      'portfolio.project1.title':       'مجموعة Dadson',
      'portfolio.project1.cat':         'تصميم ويب مؤسسي / الاستثمار والاستشارات',
      'portfolio.project1.desc':        'مشروع ويب مؤسسي تم تطويره لمجموعة Dadson Group، التي تنشط في مجالات الاستثمار والطاقة والسياحة والإنشاءات. تم تطوير تصميم جمالي فاخر باللونين الذهبي والداكن ليعكس هيبة الشركة، مع بنية تحتية سريعة ومتوافقة تماماً مع الجوال.',
      'portfolio.project1.stat1.num':   '98%',
      'portfolio.project1.stat1.label': 'درجة السرعة',
      'portfolio.project1.stat2.num':   'قابل للإدارة',
      'portfolio.project1.stat2.label': 'لوحة تحكم',
      'portfolio.project1.stat3.num':   'كامل',
      'portfolio.project1.stat3.label': 'بنية SEO',

      'portfolio.project2.badge':       'مفهوم ومختبر',
      'portfolio.project2.title':       'FUEGO & TRIGO',
      'portfolio.project2.cat':         'واجهة إبداعية / مفهوم مطعم بيتزا',
      'portfolio.project2.desc':        'مفهوم واجهة رقمية مصمم لمطعم بيتزا فاخر يعمل بفرن الحجر. يتميز بقائمة تفاعلية تتيح للعملاء معاينة البيتزا الخاصة بهم بصرياً، وتصميم أنيق ذو طابع فاتح وبسيط، وتجربة طلب وحجز سريعة.',
      'portfolio.project2.stat2.num':   'تفاعلي',
      'portfolio.project2.stat2.label': 'تصميم القائمة',
      'portfolio.project2.stat3.num':   'فاخر',
      'portfolio.project2.stat3.label': 'التصميم',

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
         'policy.accept_btn':     'قرأت وفهمت',
      'policy.close_btn':      'إغلاق',
      'policy.kvkk.title':     'نص توضيح حماية البيانات الشخصية ومعالجتها',
      'policy.kvkk.text':      '<p>بصفتنا Netvizyon ("الشركة")، فإننا نولي أهمية لأمن وخصوصية بياناتك الشخصية التي تشاركها معنا عبر موقعنا الإلكتروني. وفقًا لقانون حماية البيانات الشخصية رقم 6698 ("KVKK") واللائحة العامة لحماية البيانات (GDPR)، نود إبلاغك بصفتنا مسؤول البيانات.</p><h4>1. البيانات الشخصية المعالجة</h4><p>في حالة ملء نموذج حساب الأسعار وطلب العرض على موقعنا الإلكتروني، تتم معالجة بياناتك التالية:</p><ul><li><strong>معلومات الهوية:</strong> الاسم، اللقب</li><li><strong>معلومات الاتصال:</strong> عنوان البريد الإلكتروني، رقم الهاتف</li><li><strong>معلومات الطلب والمشروع:</strong> تفضيل الميزانية، أنواع الخدمات المحددة، تفاصيل الرسالة/المشروع</li></ul><h4>2. أغراض معالجة البيانات الشخصية</h4><p>تتم معالجة بياناتك الشخصية التي تم جمعها بطريقة محدودة ومتناسبة للأغراض التالية:</p><ul><li>إرسال عرض السعر المحسوب إليك،</li><li>تقييم طلباتك المتعلقة بخدماتنا والاتصال بك،</li><li>إدارة عمليات علاقات العملاء.</li></ul><h4>3. نقل البيانات الشخصية</h4><p>لا تتم مشاركة بياناتك الشخصية التي تم جمعها مع أطراف ثالثة إلا لتحقيق الأغراض المذكورة أعلاه؛ ومع ذلك، قد تتم مشاركتها مع المؤسسات والمنظمات العامة المصرح لها تماشيًا مع الالتزامات القانونية.</p><h4>4. طريقة وسبب جمع البيانات الشخصية القانوني</h4><p>يتم جمع بياناتك إلكترونيًا عن طريق ملء النموذج الموجود على موقعنا الإلكتروني. وتستند هذه العملية إلى الأسس القانونية المتمثلة في "أن تكون مرتبطة مباشرة بإنشاء عقد أو أدائه" و"وفاء مسؤول البيانات بالتزامه القانوني" المحدد في المادة 5 من قانون حماية البيانات الشخصية (KVKK) والمادة 6 من اللائحة العامة لحماية البيانات (GDPR).</p><h4>5. حقوقك بموجب قانون حماية البيانات الشخصية (KVKK) واللائحة العامة لحماية البيانات (GDPR)</h4><p>بصفتك صاحب بيانات بموجب المادة 11 من قانون حماية البيانات الشخصية (KVKK) واللائحة العامة لحماية البيانات، يحق لك معرفة ما إذا كانت بياناتك الشخصية قد تمت معالجتها، وطلب معلومات إذا كانت قد عولجت، وطلب تصرح بياناتك أو حذفها.</p><p>يمكنك مشاركة طلباتك معنا عبر البريد الإلكتروني <strong>info@netvizyon.com</strong>.</p>',
      'policy.privacy.title':  'سياسة الخصوصية وملفات تعريف الارتباط',
      'policy.privacy.text':   '<p>بصفتنا Netvizyon ("الشركة")، فإننا نحترم حقوق الخصوصية لمستخدمينا الذين يزورون موقعنا الإلكتروني وندير استخدام ملفات تعريف الارتباط بشفافية. توضح هذه السياسة أنواع ملفات تعريف الارتباط المستخدمة على موقعنا ومبادئ معالجة بياناتك الشخصية.</p><h4>1. ما هي ملفات تعريف الارتباط ولماذا تُستخدم؟</h4><p>ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم تخزينها على جهازك من خلال متصفحك عند زيارة موقعنا الإلكتروني. نحن نستخدم ملفات تعريف الارتباط للأغراض التالية:</p><ul><li><strong>ملفات تعريف الارتباط الضرورية:</strong> مطلوبة للوظائف الأساسية للموقع وضمان الأمان.</li><li><strong>ملفات تعريف الارتباط التحليلية:</strong> تجمع بيانات مجهولة الهوية لفهم كيفية استخدام الزوار للموقع وإجراء تحليل الأداء وتحسين تجربة المستخدم.</li><li><strong>ملفات تعريف الارتباط الخاصة بالتفضيلات:</strong> تتذكر تفضيلاتك مثل اللغة أو المنطقة لتوفير الراحة في زياراتك القادمة.</li></ul><h4>2. إدارة تفضيلات ملفات تعريف الارتباط</h4><p>يمكنك حظر ملفات تعريف الارتباط أو حذفها من خلال نافذة قبول ملفات تعريف الارتباط التي تظهر عند زيارة موقعنا لأول مرة، أو من خلال إعدادات متصفحك. ومع ذلك، في حالة إيقاف ملفات تعريف الارتباط الضرورية، قد لا تعمل بعض ميزات الموقع بشكل صحيح.</p><h4>3. أمن البيانات والاتصال</h4><p>لا يتم بيع بياناتك التي تم الحصول عليها من خلال ملفات تعريف الارتباط أو نقلها إلى أطراف ثالثة لأغراض تجارية. لمزيد من المعلومات أو الطلبات، يمكنك الاتصال بنا عبر <strong>info@netvizyon.com</strong>.</p>',
      'policy.terms.title':    'شروط الاستخدام',
      'policy.terms.text':     '<p>مرحبًا بكم في موقع Netvizyon الإلكتروني. باستخدام موقعنا والاستفادة من خدماتنا، فإنك تعتبر موافقًا على الشروط والأحكام التالية.</p><h4>1. حاسبة الأسعار وطبيعة العروض</h4><p>الأسعار المقدمة بواسطة حاسبة الأسعار التفاعلية على موقعنا هي أسعار <strong>تقديرية ولأغراض إعلامية فقط</strong>. لا تشكل هذه الأسعار عرضًا رسميًا أو التزامًا تعاقديًا. سيتم تحديد السعر النهائي والجدول الزمني لتسليم المشروع بعد مراجعة طلبك بالتفصيل من قبل فريقنا وتقديم وثيقة العرض الرسمية (PDF) إليك.</p><h4>2. الملكية الفكرية واستخدام المحتوى</h4><p>جميع مكونات التصميم والمرئيات والأكواد والشعارات والمحتوى المكتوب على هذا الموقع محمية بحقوق الطبع والنشر لصالح Netvizyon. يُحظر نسخها أو إعادة إنتاجها أو استخدامها لأغراض تجارية دون إذن كتابي.</p><h4>3. حق إجراء التغييرات</h4><p>تحتفظ Netvizyon بالحق في تحديث محتوى الخدمات ومعايير حساب الأسعار وشروط الاستخدام المقدمة على موقعنا في أي وقت دون إشعار مسبق.</p>',
          'footer.home':      'الرئيسية',
      'footer.services':  'الخدمات',
      'footer.portfolio': 'المحفظة',
      'footer.pricing':   'حاسبة الأسعار',
      'footer.contact':   'اتصل',
      'footer.copyright': '© 2026 NetVizyon. جميع الحقوق محفوظة.',

      'toast.success':      'تهانينا! تم استلام طلب عرضك بنجاح. سنعود إليك في أقرب وقت ممكن.',
      'toast.err.required': 'يرجى ملء الحقول المطلوبة.',
      'toast.err.consent':  'يرجى قبول نص التوضيح.',
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

      'contact.form.consent.req.before': 'لقد قرأت وفهمت ',
      'contact.form.consent.req.link':   'نص التوضيح',
      'contact.form.consent.req.after':  '. وأوافق على معالجة بياناتي الشخصية في هذا النطاق والاتصال بي بناءً على طلبي.',
      'contact.form.consent.optional':   'أوافق على تلقي العروض الخاصة والتسويقية والرسائل الإعلامية.',

      'footer.policy.kvkk':    'نص توضيح KVKK',
      'footer.policy.privacy': 'سياسة الخصوصية وملفات تعريف الارتباط',
      'footer.policy.terms':   'شروط الاستخدام',

      'policy.accept_btn':     'قرأت وفهمت',
      'policy.kvkk.title':     'نص توضيح حماية البيانات الشخصية ومعالجتها',
      'policy.kvkk.text':      '<p>بصفتنا Netvizyon ("الشركة")، فإننا نولي أهمية لأمن وخصوصية بياناتك الشخصية التي تشاركها معنا عبر موقعنا الإلكتروني. وفقًا لقانون حماية البيانات الشخصية رقم 6698 ("KVKK") واللائحة العامة لحماية البيانات (GDPR)، نود إبلاغك بصفتنا مسؤول البيانات.</p><h4>1. البيانات الشخصية المعالجة</h4><p>في حالة ملء نموذج حساب الأسعار وطلب العرض على موقعنا الإلكتروني، تتم معالجة بياناتك التالية:</p><ul><li><strong>معلومات الهوية:</strong> الاسم، اللقب</li><li><strong>معلومات الاتصال:</strong> عنوان البريد الإلكتروني، رقم الهاتف</li><li><strong>معلومات الطلب والمشروع:</strong> تفضيل الميزانية، أنواع الخدمات المحددة، تفاصيل الرسالة/المشروع</li></ul><h4>2. أغراض معالجة البيانات الشخصية</h4><p>تتم معالجة بياناتك الشخصية التي تم جمعها بطريقة محدودة ومتناسبة للأغراض التالية:</p><ul><li>إرسال عرض السعر المحسوب إليك،</li><li>تقييم طلباتك المتعلقة بخدماتنا والاتصال بك،</li><li>إدارة عمليات علاقات العملاء.</li></ul><h4>3. نقل البيانات الشخصية</h4><p>لا تتم مشاركة بياناتك الشخصية التي تم جمعها مع أطراف ثالثة إلا لتحقيق الأغراض المذكورة أعلاه؛ ومع ذلك، قد تتم مشاركتها مع المؤسسات والمنظمات العامة المصرح لها تماشيًا مع الالتزامات القانونية.</p><h4>4. طريقة وسبب جمع البيانات الشخصية القانوني</h4><p>يتم جمع بياناتك إلكترونيًا عن طريق ملء النموذج الموجود على موقعنا الإلكتروني. وتستند هذه العملية إلى الأسس القانونية المتمثلة في "أن تكون مرتبطة مباشرة بإنشاء عقد أو أدائه" و"وفاء مسؤول البيانات بالتزامه القانوني" المحدد في المادة 5 من قانون حماية البيانات الشخصية (KVKK) والمادة 6 من اللائحة العامة لحماية البيانات (GDPR).</p><h4>5. حقوقك بموجب قانون حماية البيانات الشخصية (KVKK) واللائحة العامة لحماية البيانات (GDPR)</h4><p>بصفتك صاحب بيانات بموجب المادة 11 من قانون حماية البيانات الشخصية (KVKK) واللائحة العامة لحماية البيانات، يحق لك معرفة ما إذا كانت بياناتك الشخصية قد تمت معالجتها، وطلب معلومات إذا كانت قد عولجت، وطلب تصرح بياناتك أو حذفها.</p><p>يمكنك مشاركة طلباتك معنا عبر البريد الإلكتروني <strong>info@netvizyon.com</strong>.</p>',
      'policy.accept_btn':     'قرأت وفهمت',
      'policy.close_btn':      'إغلاق',
      'policy.kvkk.title':     'نص توضيح حماية البيانات الشخصية ومعالجتها',
      'policy.kvkk.text':      '<p>بصفتنا Netvizyon ("الشركة")، فإننا نولي أهمية لأمن وخصوصية بياناتك الشخصية التي تشاركها معنا عبر موقعنا الإلكتروني. وفقًا لقانون حماية البيانات الشخصية رقم 6698 ("KVKK") واللائحة العامة لحماية البيانات (GDPR)، نود إبلاغك بصفتنا مسؤول البيانات.</p><h4>1. البيانات الشخصية المعالجة</h4><p>في حالة ملء نموذج حساب الأسعار وطلب العرض على موقعنا الإلكتروني، تتم معالجة بياناتك التالية:</p><ul><li><strong>معلومات الهوية:</strong> الاسم، اللقب</li><li><strong>معلومات الاتصال:</strong> عنوان البريد الإلكتروني، رقم الهاتف</li><li><strong>معلومات الطلب والمشروع:</strong> تفضيل الميزانية، أنواع الخدمات المحددة، تفاصيل الرسالة/المشروع</li></ul><h4>2. أغراض معالجة البيانات الشخصية</h4><p>تتم معالجة بياناتك الشخصية التي تم جمعها بطريقة محدودة ومتناسبة للأغراض التالية:</p><ul><li>إرسال عرض السعر المحسوب إليك،</li><li>تقييم طلباتك المتعلقة بخدماتنا والاتصال بك،</li><li>إدارة عمليات علاقات العملاء.</li></ul><h4>3. نقل البيانات الشخصية</h4><p>لا تتم مشاركة بياناتك الشخصية التي تم جمعها مع أطراف ثالثة إلا لتحقيق الأغراض المذكورة أعلاه؛ ومع ذلك، قد تتم مشاركتها مع المؤسسات والمنظمات العامة المصرح لها تماشيًا مع الالتزامات القانونية.</p><h4>4. طريقة وسبب جمع البيانات الشخصية القانوني</h4><p>يتم جمع بياناتك إلكترونيًا عن طريق ملء النموذج الموجود على موقعنا الإلكتروني. وتستند هذه العملية إلى الأسس القانونية المتمثلة في "أن تكون مرتبطة مباشرة بإنشاء عقد أو أدائه" و"وفاء مسؤول البيانات بالتزامه القانوني" المحدد في المادة 5 من قانون حماية البيانات الشخصية (KVKK) والمادة 6 من اللائحة العامة لحماية البيانات (GDPR).</p><h4>5. حقوقك بموجب قانون حماية البيانات الشخصية (KVKK) واللائحة العامة لحماية البيانات (GDPR)</h4><p>بصفتك صاحب بيانات بموجب المادة 11 من قانون حماية البيانات الشخصية (KVKK) واللائحة العامة لحماية البيانات، يحق لك معرفة ما إذا كانت بياناتك الشخصية قد تمت معالجتها، وطلب معلومات إذا كانت قد عولجت، وطلب تصرح بياناتك أو حذفها.</p><p>يمكنك مشاركة طلباتك معنا عبر البريد الإلكتروني <strong>info@netvizyon.com</strong>.</p>',
      'policy.privacy.title':  'سياسة الخصوصية وملفات تعريف الارتباط',
      'policy.privacy.text':   '<p>بصفتنا Netvizyon ("الشركة")، فإننا نحترم حقوق الخصوصية لمستخدمينا الذين يزورون موقعنا الإلكتروني وندير استخدام ملفات تعريف الارتباط بشفافية. توضح هذه السياسة أنواع ملفات تعريف الارتباط المستخدمة على موقعنا ومبادئ معالجة بياناتك الشخصية.</p><h4>1. ما هي ملفات تعريف الارتباط ولماذا تُستخدم؟</h4><p>ملفات تعريف الارتباط هي ملفات بيانات صغيرة يتم تخزينها على جهازك من خلال متصفحك عند زيارة موقعنا الإلكتروني. نحن نستخدم ملفات تعريف الارتباط للأغراض التالية:</p><ul><li><strong>ملفات تعريف الارتباط الضرورية:</strong> مطلوبة للوظائف الأساسية للموقع وضمان الأمان.</li><li><strong>ملفات تعريف الارتباط التحليلية:</strong> تجمع بيانات مجهولة الهوية لفهم كيفية استخدام الزوار للموقع وإجراء تحليل الأداء وتحسين تجربة المستخدم.</li><li><strong>ملفات تعريف الارتباط الخاصة بالتفضيلات:</strong> تتذكر تفضيلاتك مثل اللغة أو المنطقة لتوفير الراحة في زياراتك القادمة.</li></ul><h4>2. إدارة تفضيلات ملفات تعريف الارتباط</h4><p>يمكنك حظر ملفات تعريف الارتباط أو حذفها من خلال نافذة قبول ملفات تعريف الارتباط التي تظهر عند زيارة موقعنا لأول مرة، أو من خلال إعدادات متصفحك. ومع ذلك، في حالة إيقاف ملفات تعريف الارتباط الضرورية، قد لا تعمل بعض ميزات الموقع بشكل صحيح.</p><h4>3. أمن البيانات والاتصال</h4><p>لا يتم بيع بياناتك التي تم الحصول عليها من خلال ملفات تعريف الارتباط أو نقلها إلى أطراف ثالثة لأغراض تجارية. لمزيد من المعلومات أو الطلبات، يمكنك الاتصال بنا عبر <strong>info@netvizyon.com</strong>.</p>',
      'policy.terms.title':    'شروط الاستخدام',
      'policy.terms.text':     '<p>مرحبًا بكم في موقع Netvizyon الإلكتروني. باستخدام موقعنا والاستفادة من خدماتنا، فإنك تعتبر موافقًا على الشروط والأحكام التالية.</p><h4>1. حاسبة الأسعار وطبيعة العروض</h4><p>الأسعار المقدمة بواسطة حاسبة الأسعار التفاعلية على موقعنا هي أسعار <strong>تقديرية ولأغراض إعلامية فقط</strong>. لا تشكل هذه الأسعار عرضًا رسميًا أو التزامًا تعاقديًا. سيتم تحديد السعر النهائي والجدول الزمني لتسليم المشروع بعد مراجعة طلبك بالتفصيل من قبل فريقنا وتقديم وثيقة العرض الرسمية (PDF) إليك.</p><h4>2. الملكية الفكرية واستخدام المحتوى</h4><p>جميع مكونات التصميم والمرئيات والأكواد والشعارات والمحتوى المكتوب على هذا الموقع محمية بحقوق الطبع والنشر لصالح Netvizyon. يُحظر نسخها أو إعادة إنتاجها أو استخدامها لأغراض تجارية دون إذن كتابي.</p><h4>3. حق إجراء التغييرات</h4><p>تحتفظ Netvizyon بالحق في تحديث محتوى الخدمات ومعايير حساب الأسعار وشروط الاستخدام المقدمة على موقعنا في أي وقت دون إشعار مسبق.</p>',
    }  };

  /* ─── 2. SUPPORTED LANGUAGES ───
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

    /* Dynamic German / Global Phone & WhatsApp numbers */
    const isGerman = (lang === 'de');
    const phoneNum = isGerman ? '+49 1521 4406808' : '+90 501 069 51 62';
    const telClean = isGerman ? '+4915214406808' : '+905010695162';
    const waClean  = isGerman ? '4915214406808' : '905010695162';

    const phoneNumEl = document.getElementById('contact-phone-num');
    if (phoneNumEl) phoneNumEl.textContent = phoneNum;

    const phoneLinkEl = document.getElementById('contact-phone-link');
    if (phoneLinkEl) phoneLinkEl.setAttribute('href', `tel:${telClean}`);

    const footerPhoneEl = document.getElementById('footer-phone-link');
    if (footerPhoneEl) footerPhoneEl.setAttribute('href', `tel:${telClean}`);

    const waLinks = document.querySelectorAll('#contact-wa-link, #footer-wa-link, .whatsapp-text-btn');
    waLinks.forEach(link => {
      link.setAttribute('href', `https://wa.me/${waClean}`);
    });

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
