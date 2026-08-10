/* ==========================================================================
   NET VIZYON - PORTFOLIO WEBSITE JAVASCRIPT
   Interactive UX/UI functionality
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // MULTI-LANGUAGE SYSTEM (TR, EN, DE, AR)
    // ==========================================
    const DEFAULT_LANG = 'tr';
    let currentLang = localStorage.getItem('netvizyon_lang') || getBrowserLanguage() || DEFAULT_LANG;

    // Helper to get browser language and map it
    function getBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        if (!lang) return DEFAULT_LANG;
        const code = lang.substring(0, 2).toLowerCase();
        return ['tr', 'en', 'de', 'ar'].includes(code) ? code : DEFAULT_LANG;
    }

    // Toggle Desktop Language Dropdown Menu
    const langBtnDesktop = document.getElementById('lang-btn-desktop');
    const langSelector = document.querySelector('.lang-selector');

    if (langBtnDesktop && langSelector) {
        langBtnDesktop.addEventListener('click', (e) => {
            e.stopPropagation();
            langSelector.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            langSelector.classList.remove('open');
        });
    }

    // Language Dropdown Item Click Listeners (Desktop)
    const langItems = document.querySelectorAll('.lang-item');
    langItems.forEach(item => {
        item.addEventListener('click', () => {
            const lang = item.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Mobile Language Button Click Listeners (Mobile)
    const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
    mobileLangBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Switch Language Function
    function setLanguage(lang) {
        if (typeof translations === 'undefined' || !translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('netvizyon_lang', lang);

        // Update active class on selectors
        langItems.forEach(item => {
            if (item.getAttribute('data-lang') === lang) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        mobileLangBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update desktop current label text
        const langCurrentLabel = document.querySelector('#lang-current-label');
        if (langCurrentLabel) {
            langCurrentLabel.textContent = lang.toUpperCase();
        }

        // Apply translations
        applyTranslations(lang);
    }

    // Apply translations function
    function applyTranslations(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Set direction (RTL for Arabic, LTR for others) — apply to both <html> and <body>
        const dir = dict.dir || 'ltr';
        document.body.setAttribute('dir', dir);
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', lang);

        // Set page title
        if (dict.page_title) {
            document.title = dict.page_title;
        }

        // Dynamic title update (TR gets image, others get text)
        const titleDynamic = document.getElementById('hero-title-dynamic');
        if (titleDynamic && dict.hero_title_html) {
            titleDynamic.innerHTML = dict.hero_title_html;
        }

        // Translate general elements
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (key === 'nav_cta' || key === 'case_visit_btn' || key === 'form_submit_btn' || key === 'calc_cta_btn' || key === 'hero_btn_portfolio') {
                    // Buttons with icon suffix/prefix
                    if (key === 'case_visit_btn') {
                        el.innerHTML = `${dict[key]} <i class="fa-solid fa-arrow-up-right-from-square"></i>`;
                    } else if (key === 'hero_btn_portfolio') {
                        el.innerHTML = `${dict[key]} <i class="fa-solid fa-arrow-right-long"></i>`;
                    } else {
                        el.textContent = dict[key];
                    }
                } else if (key === 'case_featured') {
                    el.textContent = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Translate placeholders
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key]) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Sync pricing calculator options text
        updateCalculatorTexts(lang);
        
        // Re-calculate pricing to update summary list in the new language
        if (typeof updatePrice === 'function') {
            updatePrice();
        }
    }

    // Dynamic calculator texts sync
    function updateCalculatorTexts(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Site type options text
        const landingOpt = document.querySelector('.calc-option[data-type="landing"] span:not(.option-base-price)');
        const corporateOpt = document.querySelector('.calc-option[data-type="corporate"] span:not(.option-base-price)');
        const ecommerceOpt = document.querySelector('.calc-option[data-type="ecommerce"] span:not(.option-base-price)');

        if (landingOpt) landingOpt.textContent = 'Landing Page';
        if (corporateOpt) corporateOpt.textContent = lang === 'ar' ? 'موقع الشركة' : lang === 'de' ? 'Unternehmensseite' : lang === 'en' ? 'Corporate Site' : 'Kurumsal Site';
        if (ecommerceOpt) ecommerceOpt.textContent = lang === 'ar' ? 'التجارة الإلكترونية' : lang === 'de' ? 'E-Commerce' : lang === 'en' ? 'E-Commerce' : 'E-Ticaret';
    }

    // Initialize translations
    setTimeout(() => {
        setLanguage(currentLang);
    }, 50);

    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuToggleIcon = menuToggle.querySelector('i');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            // Toggle icon classes for close / open state
            if (navMenu.classList.contains('open')) {
                menuToggleIcon.classList.remove('fa-bars-staggered');
                menuToggleIcon.classList.add('fa-xmark');
                document.body.style.overflow = 'hidden'; // Disable scroll on body
            } else {
                menuToggleIcon.classList.remove('fa-xmark');
                menuToggleIcon.classList.add('fa-bars-staggered');
                document.body.style.overflow = ''; // Restore scroll on body
            }
        });

        // Close menu when clicking a link or mobile CTA button
        const navLinks = document.querySelectorAll('.nav-link, .mobile-cta');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggleIcon.classList.remove('fa-xmark');
                menuToggleIcon.classList.add('fa-bars-staggered');
                document.body.style.overflow = ''; // Restore scroll on body
            });
        });

        // Clean overflow on screen resize (e.g. rotating phone to landscape)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024) {
                navMenu.classList.remove('open');
                menuToggleIcon.classList.remove('fa-xmark');
                menuToggleIcon.classList.add('fa-bars-staggered');
                document.body.style.overflow = '';
            }
        });
    }

    // Intercept click on navigation CTA buttons to scroll smoothly and focus name field
    const ctaButtons = document.querySelectorAll('.mobile-cta, .desktop-cta');
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetForm = document.getElementById('quote-form');
            if (targetForm) {
                // Ensure body scroll is unlocked first
                document.body.style.overflow = '';
                
                targetForm.scrollIntoView({ behavior: 'smooth' });
                
                // Focus the name input field after the smooth scroll completes
                setTimeout(() => {
                    const nameInput = document.getElementById('form-name');
                    if (nameInput) nameInput.focus();
                }, 800);
            }
        });
    });

    // 2. Header Scroll Effect (Checks scroll on load to prevent oval shape if scrolled)
    const header = document.querySelector('.main-header');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Immediate run on DOM load

    // 3. Navigation Active Link Highlight on Scroll (ScrollSpy)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-link:not(.mobile-cta)');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120; // Offset for fixed navbar
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 4. Interactive Pricing Calculator & Sliding Preview Logic
    const calcOptions = document.querySelectorAll('.calc-option');
    const pageRange = document.getElementById('page-range');
    const pageCountVal = document.getElementById('page-count-val');
    const pageCountGroup = document.getElementById('page-count-group');
    const calcAddons = document.querySelectorAll('.calc-addon');
    const priceDisplay = document.getElementById('calc-price-display');
    const summaryList = document.getElementById('calc-summary-list');
    const calcCtaBtn = document.getElementById('calc-cta-btn');
    const formSubject = document.getElementById('form-subject');

    // Preview DOM Elements
    const previewSliderTrack = document.getElementById('preview-slider-track');
    
    // Addon Preview DOM Elements
    const previewLangAddon = document.getElementById('preview-lang-addon');
    const previewSpeedAddon = document.getElementById('preview-speed-addon');
    const previewSeoAddon = document.getElementById('preview-seo-addon');
    const previewWhatsappAddon = document.getElementById('preview-whatsapp-addon');

    let activeType = 'landing';
    let basePrice = 4500;
    let previousPrice = 0; // Odometer state

    // Hide/Show page count controls based on site type
    function updatePageCountVisibility() {
        if (!pageCountGroup) return;
        if (activeType === 'landing') {
            pageCountGroup.style.display = 'none'; // Hide completely for Landing Page
            if (pageRange) {
                pageRange.value = 1;
                pageCountVal.textContent = '1';
            }
        } else {
            pageCountGroup.style.display = 'flex'; // Show for Corporate/E-Commerce
        }
    }

    // Toggle Site Type Selection
    calcOptions.forEach(option => {
        option.addEventListener('click', () => {
            calcOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            activeType = option.getAttribute('data-type');
            basePrice = parseInt(option.getAttribute('data-price'), 10);

            updatePageCountVisibility();
            updatePrice();
            updatePreviewLayout();
        });
    });

    // Update Page Slider Value
    if (pageRange) {
        pageRange.addEventListener('input', (e) => {
            pageCountVal.textContent = e.target.value;
            updatePrice();
        });
    }

    // Addon Checkbox Listeners
    calcAddons.forEach(addon => {
        addon.addEventListener('change', () => {
            updatePrice();
            updatePreviewAddons();
        });
    });

    // Odometer Counter Animation function
    function animatePriceChange(obj, start, end, duration) {
        if (start === end) {
            obj.textContent = `₺${end.toLocaleString('tr-TR')}`;
            return;
        }
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // easeOutCubic transition curve for premium feel
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * (end - start) + start);
            obj.textContent = `₺${current.toLocaleString('tr-TR')}`;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                obj.textContent = `₺${end.toLocaleString('tr-TR')}`;
            }
        };
        window.requestAnimationFrame(step);
    }

    // Update Pricing Results
    function updatePrice() {
        let total = basePrice;
        let summaryItems = [];
        
        // Get dictionary matching current language selection
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'tr';
        const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {
            calc_summary_landing: "Landing Page Kurulumu",
            calc_summary_corporate: "Kurumsal Web Altyapısı",
            calc_summary_ecommerce: "E-Ticaret Mağaza Kurulumu",
            calc_summary_payment: "Güvenli Ödeme Altyapısı",
            calc_summary_pages: "Ekstra Sayfalar",
            calc_summary_pages_suffix: "Adet",
            calc_summary_ssl: "Ücretsiz SSL Sertifikası",
            calc_summary_hosting: "1 Yıllık Ücretsiz Sunucu (Hosting)",
            calc_summary_responsive: "Mobil & Tablet Uyumlu Arayüz",
            calc_summary_seo: "Gelişmiş SEO Paketi",
            calc_summary_multilang: "Çoklu Dil Desteği",
            calc_summary_whatsapp: "Hızlı WhatsApp Entegrasyonu",
            calc_summary_speed: "Ekstra Hız Optimizasyonu"
        };

        // 1. Base Type Info
        if (activeType === 'landing') {
            summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_landing}</li>`);
        } else if (activeType === 'corporate') {
            summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_corporate}</li>`);
        } else if (activeType === 'ecommerce') {
            summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_ecommerce}</li>`);
            summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_payment}</li>`);
        }

        // 2. Page Multiplier (applies consistently across non-landing packages)
        const pages = parseInt(pageRange.value, 10);
        if (activeType !== 'landing' && pages > 1) {
            const extraPages = pages - 1;
            const pagePrice = extraPages * 150; // ₺150 per extra page
            total += pagePrice;
            summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_pages} (+${extraPages} ${dict.calc_summary_pages_suffix})</li>`);
        }

        // 3. Addons
        calcAddons.forEach(addon => {
            if (addon.checked) {
                total += parseInt(addon.getAttribute('data-price'), 10);
                const val = addon.value;
                let addTitle = '';
                if (val === 'seo') addTitle = dict.calc_summary_seo;
                else if (val === 'multilang') addTitle = dict.calc_summary_multilang;
                else if (val === 'whatsapp') addTitle = dict.calc_summary_whatsapp;
                else if (val === 'speed') addTitle = dict.calc_summary_speed;
                
                summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${addTitle}</li>`);
            }
        });

        // Add default features
        summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_ssl}</li>`);
        summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_hosting}</li>`);
        summaryItems.push(`<li><i class="fa-solid fa-circle-check"></i> ${dict.calc_summary_responsive}</li>`);

        // Update UI with animated price counter
        animatePriceChange(priceDisplay, previousPrice, total, 500);
        previousPrice = total; // Save for next update

        summaryList.innerHTML = summaryItems.join('');
    }

    // Slide Preview Slider Track based on selected site type
    function updatePreviewLayout() {
        if (!previewSliderTrack) return;
        
        if (activeType === 'landing') {
            previewSliderTrack.style.transform = 'translateX(0)';
        } else if (activeType === 'corporate') {
            previewSliderTrack.style.transform = 'translateX(-33.3333%)';
        } else if (activeType === 'ecommerce') {
            previewSliderTrack.style.transform = 'translateX(-66.6666%)';
        }
    }

    // Dynamic Live Preview Addons toggler
    function updatePreviewAddons() {
        calcAddons.forEach(addon => {
            const isChecked = addon.checked;
            const value = addon.value;

            if (value === 'seo') {
                if (isChecked) {
                    previewSeoAddon.classList.add('visible');
                } else {
                    previewSeoAddon.classList.remove('visible');
                }
            } else if (value === 'multilang') {
                if (isChecked) {
                    previewLangAddon.classList.add('visible');
                } else {
                    previewLangAddon.classList.remove('visible');
                }
            } else if (value === 'whatsapp') {
                if (isChecked) {
                    previewWhatsappAddon.classList.add('visible');
                } else {
                    previewWhatsappAddon.classList.remove('visible');
                }
            } else if (value === 'speed') {
                if (isChecked) {
                    previewSpeedAddon.classList.add('visible');
                } else {
                    previewSpeedAddon.classList.remove('visible');
                }
            }
        });
    }

    // Connect Calculator CTA to Contact Form
    if (calcCtaBtn && formSubject) {
        calcCtaBtn.addEventListener('click', () => {
            // Set form subject matching calculator choice
            formSubject.value = activeType;
            
            // Add custom pre-filled message to message body
            const messageArea = document.getElementById('form-message');
            if (messageArea) {
                const lang = typeof currentLang !== 'undefined' ? currentLang : 'tr';
                const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {
                    calc_summary_seo: "Gelişmiş SEO Paketi",
                    calc_summary_multilang: "Çoklu Dil Desteği",
                    calc_summary_whatsapp: "Hızlı WhatsApp Entegrasyonu",
                    calc_summary_speed: "Ekstra Hız Optimizasyonu",
                    calc_msg_template: "Merhaba, Fiyat Hesaplayıcı ile oluşturduğum paket için detaylı bilgi almak istiyorum.\nSeçilen Paket: {package}{pages}{addons}\nHesaplanan Tutar: {price}",
                    calc_msg_pages: ", Sayfa Sayısı: {count}",
                    calc_msg_addons: ", Ek Özellikler: {list}"
                };
                
                let addonsList = [];
                calcAddons.forEach(addon => {
                    if (addon.checked) {
                        const val = addon.value;
                        let addTitle = '';
                        if (val === 'seo') addTitle = dict.calc_summary_seo;
                        else if (val === 'multilang') addTitle = dict.calc_summary_multilang;
                        else if (val === 'whatsapp') addTitle = dict.calc_summary_whatsapp;
                        else if (val === 'speed') addTitle = dict.calc_summary_speed;
                        addonsList.push(addTitle);
                    }
                });
                
                let pagesValText = '';
                if (activeType !== 'landing') {
                    pagesValText = dict.calc_msg_pages.replace('{count}', pageRange.value);
                }
                
                let addonsValText = '';
                if (addonsList.length > 0) {
                    addonsValText = dict.calc_msg_addons.replace('{list}', addonsList.join(', '));
                }
                
                let packageText = '';
                if (activeType === 'landing') packageText = 'Landing Page';
                else if (activeType === 'corporate') packageText = (lang === 'ar' ? 'موقع الشركة' : lang === 'de' ? 'Unternehmensseite' : lang === 'en' ? 'Corporate Site' : 'Kurumsal Site');
                else if (activeType === 'ecommerce') packageText = (lang === 'ar' ? 'التجارة الإلكترونية' : lang === 'de' ? 'E-Commerce' : lang === 'en' ? 'E-Commerce' : 'E-Ticaret');

                let fullMsg = dict.calc_msg_template
                    .replace('{package}', packageText)
                    .replace('{pages}', pagesValText)
                    .replace('{addons}', addonsValText)
                    .replace('{price}', priceDisplay.textContent);

                messageArea.value = fullMsg;
            }

            // Scroll to Form directly
            const targetForm = document.getElementById('quote-form');
            if (targetForm) {
                targetForm.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    const nameInput = document.getElementById('form-name');
                    if (nameInput) nameInput.focus();
                }, 800);
            }
        });
    }

    // Initialize Calculator & Preview Content on load
    updatePageCountVisibility();
    updatePrice();
    updatePreviewLayout();
    updatePreviewAddons();

    // 5. Accordion (FAQ) Menu
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Close all faq items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If it wasn't active, open it
            if (!isActive) {
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
            }
        });
    });

    // 6. Toast Notification Utility
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'success') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
        toast.innerHTML = `
            <i class="fa-solid ${icon}"></i>
            <span>${message}</span>
        `;

        toastContainer.appendChild(toast);

        // Remove toast after 4s
        setTimeout(() => {
            toast.classList.add('hide');
            toast.addEventListener('animationend', () => {
                toast.remove();
            });
        }, 4000);
    }

    // Supabase Client Initialization
    const SUPABASE_URL = 'https://cpjhzfsnnhljkyfjjnyj.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwamh6ZnNubmhsamt5ZmpqbnlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM2MTYzMjQsImV4cCI6MjA5OTE5MjMyNH0.dazh3RVJPlgaHdAUbrGebVYqDRpJC4sLsz-fBZElfg4';
    
    let supabaseClient = null;
    if (typeof supabase !== 'undefined') {
        supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }

    // 7. Contact Form Submit Supabase Integration
    const quoteForm = document.getElementById('quote-form');

    if (quoteForm) {
        quoteForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Inputs sanitization helper (removes HTML tags to prevent XSS script injections)
            const sanitizeInput = (val) => {
                return val.replace(/<[^>]*>/g, '').trim();
            };

            const name = sanitizeInput(document.getElementById('form-name').value);
            const phone = sanitizeInput(document.getElementById('form-phone').value);
            const email = document.getElementById('form-email') ? sanitizeInput(document.getElementById('form-email').value) : '';
            const subject = document.getElementById('form-subject') ? sanitizeInput(document.getElementById('form-subject').value) : '';
            const message = sanitizeInput(document.getElementById('form-message').value);

            const lang = typeof currentLang !== 'undefined' ? currentLang : 'tr';
            const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {
                form_validation_required: "Lütfen zorunlu alanları doldurun.",
                form_validation_name: "Lütfen geçerli bir Ad Soyad girin (En az 3 karakter).",
                form_validation_phone: "Lütfen geçerli bir telefon numarası girin (Örn: 0555 123 4567).",
                form_validation_email: "Lütfen geçerli bir e-posta adresi girin.",
                form_validation_message: "Lütfen talebinizi biraz daha detaylı yazın (En az 10 karakter).",
                form_submit_sending: "Gönderiliyor...",
                form_submit_conn_error: "Bağlantı hatası: Veritabanı kütüphanesi yüklenemedi.",
                form_submit_db_error: "Form gönderilemedi. Lütfen daha sonra tekrar deneyin.",
                toast_success_desc: "Tebrikler! Teklif talebiniz başarıyla alındı. En kısa sürede dönüş sağlayacağız.",
                form_submit_sys_error: "Sistem hatası oluştu. Lütfen tekrar deneyin."
            };

            // 1. Check required fields
            if (!name || !phone || !message) {
                showToast(dict.form_validation_required, 'error');
                return;
            }

            // 2. Name validation (Minimum length of 3)
            if (name.length < 3) {
                showToast(dict.form_validation_name, 'error');
                return;
            }

            // 3. Phone length validation
            const cleanedPhone = phone.replace(/\D/g, ''); // Keep only numeric digits
            if (cleanedPhone.length < 10 || cleanedPhone.length > 12) {
                showToast(dict.form_validation_phone, 'error');
                return;
            }

            // 4. Email format validation (if entered)
            if (email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    showToast(dict.form_validation_email, 'error');
                    return;
                }
            }

            // 5. Message length validation (Minimum length of 10)
            if (message.length < 10) {
                showToast(dict.form_validation_message, 'error');
                return;
            }

            // UI feedback
            const submitBtn = quoteForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = dict.form_submit_sending;

            if (!supabaseClient) {
                showToast(dict.form_submit_conn_error, 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
                return;
            }

            try {
                // Insert into Supabase table
                const { error } = await supabaseClient
                    .from('contact_submissions')
                    .insert([
                        { 
                            name: name, 
                            phone: phone, 
                            email: email || null, 
                            subject: subject || null, 
                            message: message 
                        }
                    ]);

                if (error) {
                    console.error('Supabase error:', error);
                    showToast(dict.form_submit_db_error, 'error');
                } else {
                    showToast(dict.toast_success_desc, 'success');
                    quoteForm.reset();
                }
            } catch (err) {
                console.error('Submission error:', err);
                showToast(dict.form_submit_sys_error, 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }

    // 8. Intersection Observer scroll animations
    const animatedElements = document.querySelectorAll('.services-section, .portfolio-section, .pricing-section, .faq-section, .contact-section, .service-card, .faq-item, .contact-info-card, .form-card, .featured-case-study');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        // Add initial style helper classes
        element.classList.add('scroll-animated');
        observer.observe(element);
    });
});

// CSS Helper injection for scroll animations
const styleEl = document.createElement('style');
styleEl.textContent = `
    .scroll-animated {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .scroll-animated.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Sequence delays for cards */
    .services-grid .service-card:nth-child(1) { transition-delay: 0.1s; }
    .services-grid .service-card:nth-child(2) { transition-delay: 0.2s; }
    .services-grid .service-card:nth-child(3) { transition-delay: 0.3s; }
    .services-grid .service-card:nth-child(4) { transition-delay: 0.4s; }
`;
document.head.appendChild(styleEl);

// Custom Cursor Initialization for PC Desktop view
document.addEventListener('DOMContentLoaded', () => {
    // Return early if mobile or tablet touch screen
    if (window.innerWidth < 1025) return;
    
    // Create cursor HTML elements
    const dot = document.createElement('div');
    dot.classList.add('custom-cursor-dot');
    const ring = document.createElement('div');
    ring.classList.add('custom-cursor-ring');
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
    });
    
    // Easing loop to give the outer ring a smooth floaty look
    function updateRing() {
        ringX += (mouseX - ringX) * 0.14;
        ringY += (mouseY - ringY) * 0.14;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
        requestAnimationFrame(updateRing);
    }
    updateRing();
    
    // Setup event listeners on interactive items to expand ring on hover
    const updateHoverState = () => {
        const interactives = document.querySelectorAll(
            '#services a, #services button, #services .service-card, #services .btn, ' +
            '#faq a, #faq button, #faq .faq-question, #faq .faq-item'
        );
        
        interactives.forEach(el => {
            // Avoid duplicate binding
            if (el.dataset.cursorBound) return;
            el.dataset.cursorBound = 'true';
            
            el.addEventListener('mouseenter', () => {
                ring.style.width = '56px';
                ring.style.height = '56px';
                ring.style.borderColor = 'rgba(0, 98, 255, 0.9)';
                ring.style.backgroundColor = 'rgba(0, 98, 255, 0.06)';
                dot.style.width = '12px';
                dot.style.height = '12px';
            });
            
            el.addEventListener('mouseleave', () => {
                ring.style.width = '38px';
                ring.style.height = '38px';
                ring.style.borderColor = 'rgba(0, 98, 255, 0.4)';
                ring.style.backgroundColor = 'transparent';
                dot.style.width = '8px';
                dot.style.height = '8px';
            });
        });
    };

    updateHoverState();

    // Re-bind when content might change (e.g. calculator re-rendering items)
    const observer = new MutationObserver(updateHoverState);
    observer.observe(document.body, { childList: true, subtree: true });
});

/* ==========================================================================
   SCROLL REVEAL & MOTION ANIMATIONS
   ========================================================================== */

// Scroll Reveal Observer – adds .revealed class when elements enter viewport
(function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .stagger-children');
    
    if (!revealElements.length) {
        // Auto-assign classes to key sections for automatic reveal
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.add('reveal-on-scroll');
        });
        
        // Service cards, portfolio cards etc. get stagger
        const serviceGrid = document.querySelector('.services-grid');
        if (serviceGrid) {
            serviceGrid.classList.add('stagger-children');
            serviceGrid.querySelectorAll('.service-card').forEach(card => {
                card.classList.add('reveal-child');
            });
        }
        
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (portfolioGrid) {
            portfolioGrid.classList.add('stagger-children');
            portfolioGrid.querySelectorAll('.portfolio-card').forEach(card => {
                card.classList.add('reveal-child');
            });
        }
        
        const statsGrid = document.querySelector('.stats-grid');
        if (statsGrid) {
            statsGrid.classList.add('stagger-children');
            statsGrid.querySelectorAll('.stat-box').forEach(box => {
                box.classList.add('reveal-child');
            });
        }
        
        const faqWrapper = document.querySelector('.faq-accordion-wrapper');
        if (faqWrapper) {
            faqWrapper.classList.add('stagger-children');
            faqWrapper.querySelectorAll('.faq-item').forEach(item => {
                item.classList.add('reveal-child');
            });
        }
    }
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                io.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal-on-scroll, .stagger-children').forEach(el => {
        io.observe(el);
    });
})();

// 3D Mouse-Tracking Tilt on Service Cards (desktop only)
if (window.matchMedia('(min-width: 1025px)').matches) {
    document.querySelectorAll('.service-card, .portfolio-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -8; // Max 8deg tilt
            const rotateY = ((x - centerX) / centerX) * 8;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(() => { card.style.transition = ''; }, 600);
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });
}

// Smooth Parallax Offset on Hero Section (desktop only)
if (window.matchMedia('(min-width: 1025px)').matches) {
    const heroSection = document.querySelector('.hero');
    const heroBadge = document.querySelector('.hero-badge');
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const speed = 0.3;
            
            if (heroBadge) {
                heroBadge.style.transform = `translateY(${scrollY * speed * 0.5}px)`;
            }
            if (heroVisual) {
                heroVisual.style.transform = `translateY(${scrollY * speed}px)`;
            }
        }, { passive: true });
    }
}
