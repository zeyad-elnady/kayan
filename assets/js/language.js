/*
 * Language Translation System for Kayan Group Website
 * Toggles between English and Arabic with RTL support
 */

const translations = {
    en: {
        // Navigation
        navHome: "Home",
        navAbout: "About",
        navProducts: "Products",
        navContact: "Contact",
        langBtnText: "AR",
        langBtnTitle: "العربية",

        // Hero Section
        heroSubtitle: "Creating",
        heroTitle: "Moments",
        heroBottomTitle: "to Enjoy & Share",

        // Process Section
        processSubHeading: "Manufacturing Process",
        processSectionTitle: "From Ingredients to Your Table — in 4 Quality Steps",
        process1Title: "Quality Sourcing & Recipe Development",
        process1Desc: "We carefully select premium ingredients and develop recipes that meet international standards while capturing authentic flavors loved by Arab families.",
        process2Title: "Manufacturing & Quality Control",
        process2Desc: "Using state-of-the-art equipment and ISO-certified processes, we manufacture each product with precision and rigorous quality checks.",
        process3Title: "Packaging & Safety Testing",
        process3Desc: "Products are carefully packaged in attractive, safe containers and undergo final safety testing to ensure they meet our high standards.",
        process4Title: "Distribution & Market Reach",
        process4Desc: "We distribute fresh products across Egypt and export to Arab countries, ensuring fast delivery and wide availability through our trusted network.",

        // About Section
        aboutSubHeading: "About Kayan Group",
        aboutSectionTitle: "Leading Food Manufacturing Since 1997",
        aboutTitle: "We create delicious food products that bring families together and sweeten life's moments across the Middle East.",
        aboutPara1: "We are a leading food manufacturing company established in 1997 in Egypt, specializing in high-quality chocolates, candies, juices, and snacks for the Middle East market. From our facilities in Tanta and 10th of Ramadan, we create products that combine authentic taste with international quality standards.",
        aboutPara2: "Whether you're a distributor looking for fast-moving products, a retailer seeking quality brands, or a family wanting delicious treats — we're here to sweeten your success story with ISO-certified excellence.",
        aboutBtn: "Get Started Now",

        // Products Section
        productsSubHeading: "Our Products",
        productsSectionTitle: "Discover Our<br> Premium Collection",

        // Sidebar
        sidebarAboutTitle: "About Us",
        sidebarAboutText: "We are a leading food manufacturing company established in 1997 in Egypt, specializing in premium chocolates, candies, juices, and crispy snacks for families across the Middle East. From our ISO-certified facilities, we create delicious moments with quality ingredients and authentic Egyptian recipes.",
        sidebarPartnerBtn: "Partner With Us",
        sidebarContactTitle: "Contact Us",
        sidebarAddress: "Al-Nakheel Resort, after Total Gas Station, Ismailia–Cairo Road, next to Ben El-Maboud Coffee Company – Cairo",

        // Footer
        footerAboutText: "Creating delicious food products that bring families together since 1997. From our facilities in Egypt, we deliver premium quality and authentic taste.",
        footerContactTime: "CONTACT US <span>Sun-Thu: 08.00 am to 5.00 pm</span>",
        footerUsefulLinks: "Useful Links",
        footerOurStory: "Our Story",
        footerOurProducts: "Our Products",
        footerPartnership: "Partnership",
        footerContactUs: "Contact Us",
        footerStayUpdated: "Stay Updated",
        footerEmailPlaceholder: "Email address",
        footerSubscribe: "Subscribe",
        footerCheckboxLabel: "Get product updates, distributor opportunities, and exclusive partner benefits",
        footerCopyright: "© 2025 Kayan Group. All Rights Reserved.",

        // About Page
        aboutPageTitle: "About Kayan Group",
        aboutPageBreadcrumbHome: "Home",
        aboutPageBreadcrumbAbout: "About Us",
        aboutOurStory: "Our Story",
        aboutStoryTitle: "Leading Food Manufacturing Excellence in Egypt & the Arab World",
        aboutStoryPara1: "Founded in 1997 in Egypt with a vision to bring families together through delicious food, Kayan Group has become the region's premier food manufacturing company. We combine international quality standards with authentic Egyptian recipes to create products that are loved across Egypt and Arab countries.",
        aboutStoryPara2: "Our team of food experts, quality specialists, and production professionals has created over 50 beloved products for families across the Middle East. From our ISO-certified facilities in Tanta and 10th of Ramadan, we deliver exceptional taste and quality that brings smiles to consumers and success to our retail partners.",
        aboutPartnerBtn: "Partner With Us",
        aboutManufacturing: "Manufacturing",
        aboutManufacturingTitle: "Our Manufacturing Process",

        // Contact Page
        contactPageTitle: "Contact Us",
        contactPageBreadcrumbHome: "Home",
        contactPageBreadcrumbContact: "Contact Us",
        contactFormTitle: "Get In Touch",
        contactFormName: "Your Name",
        contactFormEmail: "Your Email",
        contactFormPhone: "Phone Number",
        contactFormSubject: "Subject",
        contactFormMessage: "Your Message",
        contactFormSubmit: "Send Message",
        contactInfoTitle: "Contact Information",
        contactAddress: "Address",
        contactPhone: "Phone",
        contactEmail: "Email",

        // Products Page
        productsPageTitle: "Our Products",
        productsPageBreadcrumbHome: "Home",
        productsPageBreadcrumbProducts: "Products",
        productsAllProducts: "ALL PRODUCTS",
        productsSearchPlaceholder: "Search products...",

        // Project/Showcase Section
        projectSubHeading: "Product Showcase",
        projectSectionTitle: "Discover Our Delicious <br> Product Portfolio",
        projectBtn: "View All Products",
        projectBtnDetails: "View Details",

        project1Category: "Premium Chocolate Line",
        project1Title: "Rich milk and dark chocolates enjoyed across Egypt and Arab markets.",
        project1Desc: "Our premium chocolate line features rich milk and dark varieties made with finest cocoa. Popular across Egypt and exported to Iraq, Libya, and Kuwait, these chocolates have become a family favorite with consistent quality and affordable pricing that drives repeat purchases.",

        project2Category: "Seasonal Mawlid Collection",
        project2Title: "Traditional sweets celebrating Islamic occasions and cultural festivities.",
        project2Desc: "Our Mawlid collection honors Egyptian traditions with authentic recipes passed down through generations. These seasonal sweets capture the joy of Islamic celebrations and have become essential for retailers during religious festivities, driving significant seasonal sales growth.",

        project3Category: "Fresh Juice & Beverages",
        project3Title: "Natural fruit juices and refreshing beverages for every season.",
        project3Desc: "Our beverage line includes natural fruit juices, energy drinks, and seasonal refreshments made with real fruit extracts. These products have gained strong market acceptance in Egypt and are expanding rapidly in export markets, especially during Ramadan and summer seasons.",

        project4Category: "Crispy Snacks Division",
        project4Title: "Crunchy snacks and chips loved by children and adults alike.",
        project4Desc: "Our crispy snacks division produces various flavored chips, crackers, and crunchy treats using advanced frying and seasoning technology. These products have achieved strong market penetration among young consumers and continue to expand distribution across convenience stores and supermarkets.",

        // Counter Section
        counter1Desc: "Food Products<br>Manufactured",
        counter2Desc: "Retail<br>Partners",
        counter3Desc: "Arab Countries<br>Served",
        counter4Desc: "Years of<br>Excellence",

        // Sponsor Section
        sponsorTitle: "TRUSTED BY <br>LEADING RETAILERS <br> & DISTRIBUTORS",

        // Running Text
        runningTextItems: [
            "Premium Chocolates", "Sweet Candies", "Fresh Juices", "Food Manufacturing",
            "Crispy Snacks", "Quality Control", "Mawlid Sweets", "Festive Treats",
            "Export Markets", "Egyptian Heritage", "Family Favorites", "Affordable Prices",
            "Natural Ingredients", "Traditional Recipes", "ISO Certified", "Fresh Production",
            "Arab Markets", "Since 1997", "Tanta & 10th Ramadan", "Distribution Network", "Sweet Success"
        ],
        runningTextItems2: [
            "Premium Quality", "Sweet Moments", "Family Business", "Authentic Taste",
            "Egyptian Made", "Recipe Innovation", "Quality Ingredients", "Trusted Brand",
            "Market Leader", "Fast Distribution", "Customer Satisfaction", "Seasonal Specials",
            "Export Ready", "Premium & Budget Lines", "Anytime Treats", "National Distribution",
            "Regional Favorites", "Wide Availability", "Partnership Success", "Profit Growth", "Consumer Trust"
        ]
    },
    ar: {
        // Navigation
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navProducts: "المنتجات",
        navContact: "اتصل بنا",
        langBtnText: "EN",
        langBtnTitle: "English",

        // Hero Section
        heroSubtitle: "نصنع",
        heroTitle: "لحظات",
        heroBottomTitle: "للاستمتاع والمشاركة",

        // Process Section
        processSubHeading: "عملية التصنيع",
        processSectionTitle: "من المكونات إلى مائدتك — في 4 خطوات جودة",
        process1Title: "اختيار المكونات وتطوير الوصفات",
        process1Desc: "نختار بعناية المكونات الفاخرة ونطور وصفات تلبي المعايير الدولية مع الحفاظ على النكهات الأصيلة المحبوبة لدى العائلات العربية.",
        process2Title: "التصنيع ومراقبة الجودة",
        process2Desc: "باستخدام أحدث المعدات والعمليات المعتمدة من ISO، نصنع كل منتج بدقة وفحوصات جودة صارمة.",
        process3Title: "التعبئة واختبار السلامة",
        process3Desc: "يتم تعبئة المنتجات بعناية في عبوات جذابة وآمنة وتخضع لاختبارات السلامة النهائية لضمان استيفائها لمعاييرنا العالية.",
        process4Title: "التوزيع والوصول للسوق",
        process4Desc: "نوزع المنتجات الطازجة في جميع أنحاء مصر ونصدر إلى الدول العربية، مما يضمن التسليم السريع والتوفر الواسع من خلال شبكتنا الموثوقة.",

        // About Section
        aboutSubHeading: "عن مجموعة كيان",
        aboutSectionTitle: "رائدة في تصنيع الأغذية منذ 1997",
        aboutTitle: "نصنع منتجات غذائية لذيذة تجمع العائلات معاً وتحلي لحظات الحياة في الشرق الأوسط.",
        aboutPara1: "نحن شركة رائدة في تصنيع الأغذية تأسست عام 1997 في مصر، متخصصون في الشوكولاتة والحلوى والعصائر والوجبات الخفيفة عالية الجودة لسوق الشرق الأوسط. من منشآتنا في طنطا والعاشر من رمضان، نصنع منتجات تجمع بين الطعم الأصيل ومعايير الجودة الدولية.",
        aboutPara2: "سواء كنت موزعاً تبحث عن منتجات سريعة الدوران، أو تاجر تجزئة يبحث عن علامات تجارية ذات جودة، أو عائلة ترغب في حلويات لذيذة — نحن هنا لنحلي قصة نجاحك بتميز معتمد من ISO.",
        aboutBtn: "ابدأ الآن",

        // Products Section
        productsSubHeading: "منتجاتنا",
        productsSectionTitle: "اكتشف<br> مجموعتنا الفاخرة",

        // Project/Showcase Section
        projectSubHeading: "عرض المنتجات",
        projectSectionTitle: "اكتشف محفظة <br> منتجاتنا اللذيذة",
        projectBtn: "عرض جميع المنتجات",
        projectBtnDetails: "عرض التفاصيل",

        project1Category: "خط الشوكولاتة الفاخرة",
        project1Title: "شوكولاتة الحليب والداكنة الغنية المحبوبة في مصر والأسواق العربية.",
        project1Desc: "يتميز خط الشوكولاتة الفاخر لدينا بأصناف غنية من الحليب والشوكولاتة الداكنة المصنوعة من أجود أنواع الكاكاو. بفضل شعبيتها في مصر وتصديرها للعراق وليبيا والكويت، أصبحت هذه الشوكولاتة مفضلة للعائلة بجودة ثابتة وأسعار في المتناول تحفز الشراء المتكرر.",

        project2Category: "مجموعة المولد الموسمية",
        project2Title: "حلويات تقليدية تحتفل بالمناسبات الإسلامية والأعياد الثقافية.",
        project2Desc: "تشيد مجموعة المولد لدينا بالتقاليد المصرية بوصفات أصيلة متوارثة عبر الأجيال. تلتقط هذه الحلويات الموسمية بهجة الاحتفالات الإسلامية وأصبحت أساسية لتجار التجزئة خلال الأعياد الدينية، مما يحقق نمواً كبيراً في المبيعات الموسمية.",

        project3Category: "العصائر والمشروبات الطازجة",
        project3Title: "عصائر فواكه طبيعية ومشروبات منعشة لكل موسم.",
        project3Desc: "يشمل خط المشروبات لدينا عصائر فواكه طبيعية، ومشروبات طاقة، ومرطبات موسمية مصنوعة من مستخلصات الفاكهة الحقيقية. حظيت هذه المنتجات بقبول قوي في السوق المصري وتتوسع بسرعة في أسواق التصدير، خاصة خلال مواسم رمضان والصيف.",

        project4Category: "قسم المقرمشات",
        project4Title: "سناكس ومقرمشات لذيذة يعشقها الأطفال والكبار على حد سواء.",
        project4Desc: "ينتج قسم المقرمشات لدينا شيبس ومقرمشات بنكهات متنوعة باستخدام تكنولوجيا قلي وتتبيل متطورة. حققت هذه المنتجات اختراقاً قوياً في السوق بين المستهلكين الشباب وتستمر في توسيع التوزيع عبر المتاجر والسوبر ماركت.",

        // Counter Section
        counter1Desc: "منتج غذائي<br>تم تصنيعه",
        counter2Desc: "شريك<br>بيع بالتجزئة",
        counter3Desc: "دول عربية<br>نخدمها",
        counter4Desc: "سنوات من<br>التميز",

        // Sponsor Section
        sponsorTitle: "موثوق به من قبل <br>كبار تجار التجزئة <br> والموزعين",

        // Running Text
        runningTextItems: [
            "شوكولاتة فاخرة", "حلويات لذيذة", "عصائر طازجة", "تصنيع أغذية",
            "مقرمشات وسناكس", "مراقبة جودة", "حلاوة المولد", "حلويات الأعياد",
            "أسواق التصدير", "تراث مصري", "مفضلة للعائلة", "أسعار مناسبة",
            "مكونات طبيعية", "وصفات تقليدية", "معتمدة من ISO", "إنتاج طازج",
            "أسواق عربية", "منذ 1997", "طنطا والعاشر من رمضان", "شبكة توزيع", "نجاح حلو"
        ],
        runningTextItems2: [
            "جودة فاخرة", "لحظات حلوة", "عمل عائلي", "طعم أصيل",
            "صنع في مصر", "ابتكار في الوصفات", "مكونات عالية الجودة", "علامة موثوقة",
            "رائد في السوق", "توزيع سريع", "رضا العملاء", "عروض موسمية",
            "جاهز للتصدير", "خطوط فاخرة واقتصادية", "متعة في كل وقت", "توزيع وطني",
            "مفضلة إقليمياً", "توفر واسع", "نجاح الشراكة", "نمو الأرباح", "ثقة المستهلك"
        ],

        // Sidebar
        sidebarAboutTitle: "من نحن",
        sidebarAboutText: "نحن شركة رائدة في تصنيع الأغذية تأسست عام 1997 في مصر، متخصصون في الشوكولاتة والحلوى والعصائر والوجبات الخفيفة المقرمشة للعائلات في الشرق الأوسط. من منشآتنا المعتمدة من ISO، نصنع لحظات لذيذة بمكونات عالية الجودة ووصفات مصرية أصيلة.",
        sidebarPartnerBtn: "كن شريكنا",
        sidebarContactTitle: "اتصل بنا",
        sidebarAddress: "منتجع النخيل، بعد محطة توتال للوقود، طريق الإسماعيلية-القاهرة، بجوار شركة بن المبعود للقهوة – القاهرة",

        // Footer
        footerAboutText: "نصنع منتجات غذائية لذيذة تجمع العائلات معاً منذ 1997. من منشآتنا في مصر، نقدم جودة فاخرة وطعم أصيل.",
        footerContactTime: "اتصل بنا <span>الأحد-الخميس: 8:00 ص إلى 5:00 م</span>",
        footerUsefulLinks: "روابط مفيدة",
        footerOurStory: "قصتنا",
        footerOurProducts: "منتجاتنا",
        footerPartnership: "الشراكة",
        footerContactUs: "اتصل بنا",
        footerStayUpdated: "ابق على اطلاع",
        footerEmailPlaceholder: "البريد الإلكتروني",
        footerSubscribe: "اشترك",
        footerCheckboxLabel: "احصل على تحديثات المنتجات وفرص التوزيع ومزايا الشراكة الحصرية",
        footerCopyright: "© 2025 مجموعة كيان. جميع الحقوق محفوظة.",

        // About Page
        aboutPageTitle: "عن مجموعة كيان",
        aboutPageBreadcrumbHome: "الرئيسية",
        aboutPageBreadcrumbAbout: "من نحن",
        aboutOurStory: "قصتنا",
        aboutStoryTitle: "التميز في صناعة الأغذية في مصر والعالم العربي",
        aboutStoryPara1: "تأسست مجموعة كيان عام 1997 في مصر برؤية لجمع العائلات معاً من خلال الطعام اللذيذ، وأصبحت الشركة الرائدة في صناعة الأغذية بالمنطقة. نجمع بين المعايير الدولية للجودة والوصفات المصرية الأصيلة لإنتاج منتجات محبوبة في مصر والدول العربية.",
        aboutStoryPara2: "فريقنا من خبراء الأغذية ومتخصصي الجودة ومحترفي الإنتاج أنتج أكثر من 50 منتجاً محبوباً للعائلات في الشرق الأوسط. من منشآتنا المعتمدة من ISO في طنطا والعاشر من رمضان، نقدم طعماً وجودة استثنائية تجلب الابتسامات للمستهلكين والنجاح لشركائنا.",
        aboutPartnerBtn: "كن شريكنا",
        aboutManufacturing: "التصنيع",
        aboutManufacturingTitle: "عملية التصنيع لدينا",

        // Contact Page
        contactPageTitle: "اتصل بنا",
        contactPageBreadcrumbHome: "الرئيسية",
        contactPageBreadcrumbContact: "اتصل بنا",
        contactFormTitle: "تواصل معنا",
        contactFormName: "اسمك",
        contactFormEmail: "بريدك الإلكتروني",
        contactFormPhone: "رقم الهاتف",
        contactFormSubject: "الموضوع",
        contactFormMessage: "رسالتك",
        contactFormSubmit: "إرسال الرسالة",
        contactInfoTitle: "معلومات الاتصال",
        contactAddress: "العنوان",
        contactPhone: "الهاتف",
        contactEmail: "البريد الإلكتروني",

        // Products Page
        productsPageTitle: "منتجاتنا",
        productsPageBreadcrumbHome: "الرئيسية",
        productsPageBreadcrumbProducts: "المنتجات",
        productsAllProducts: "جميع المنتجات",
        productsSearchPlaceholder: "ابحث عن المنتجات..."
    }
};

// Current language state
let currentLang = localStorage.getItem('kayanLang') || 'en';
let isToggling = false; // Prevent rapid clicks

// Initialize translation system
function initTranslation() {
    // Apply saved language on page load
    applyLanguage(currentLang);

    // Set up language toggle button click handler
    const langToggles = document.querySelectorAll('#lang-toggle, .lang-btn');
    langToggles.forEach(function (langToggle) {
        // Remove any existing listeners by cloning
        const newToggle = langToggle.cloneNode(true);
        langToggle.parentNode.replaceChild(newToggle, langToggle);

        newToggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!isToggling) {
                toggleLanguage();
            }
        });
    });

    console.log('Language system initialized. Current language:', currentLang);
}

// Toggle between languages
function toggleLanguage() {
    if (isToggling) return;
    isToggling = true;

    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('kayanLang', currentLang);
    console.log('Language switched to:', currentLang);
    applyLanguage(currentLang);

    // Reset toggle flag after short delay
    setTimeout(function () {
        isToggling = false;
    }, 300);
}

// Apply language to page
function applyLanguage(lang) {
    const t = translations[lang];
    const isRTL = lang === 'ar';

    // Set RTL direction
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.body.classList.toggle('rtl-mode', isRTL);

    // Update language button
    updateElement('.lang-btn .lang-text', t.langBtnText);
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.title = t.langBtnTitle;
    }

    // Update Navigation (shared across all pages)
    updateNavigation(t);

    // Update Sidebar (shared across all pages)
    updateSidebar(t);

    // Update Footer (shared across all pages)
    updateFooter(t);

    // Detect current page and update accordingly
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html' || currentPage === '') {
        // Homepage specific
        updateHeroSection(t);
        updateProcessSection(t);
        updateAboutSection(t);
        updateProductsSection(t);
        updateProjectAccordionSection(t);
        updateCounterSection(t);
        updateRunningText(t);
        updateSponsorSection(t);
    } else if (currentPage === 'about.html') {
        // About page specific
        updateAboutPage(t);
    } else if (currentPage === 'contact.html') {
        // Contact page specific
        updateContactPage(t);
    } else if (currentPage === 'project.html') {
        // Products page specific
        updateProductsPage(t);
    }
}

// Helper function to update element text
function updateElement(selector, text, useHTML = false) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        if (useHTML) {
            el.innerHTML = text;
        } else {
            el.textContent = text;
        }
    });
}

// Update navigation menu
function updateNavigation(t) {
    const navItems = document.querySelectorAll('.mobile-menu-items ul li a, .side-nav-menu li a');
    navItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === 'index.html') item.textContent = t.navHome;
        if (href === 'about.html') item.textContent = t.navAbout;
        if (href === 'project.html') item.textContent = t.navProducts;
        if (href === 'contact.html') item.textContent = t.navContact;
    });
}

// Update hero section
function updateHeroSection(t) {
    const heroSubtitle = document.querySelector('.hero-content .sub-title');
    const heroTitle = document.querySelector('.hero-content .title');
    const heroBottomTitle = document.querySelector('.hero-content .bottom-title');

    if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
    if (heroTitle) heroTitle.textContent = t.heroTitle;
    if (heroBottomTitle) heroBottomTitle.textContent = t.heroBottomTitle;
}

// Update process section
function updateProcessSection(t) {
    const processSubHeading = document.querySelector('.process-section .sub-heading');
    const processSectionTitle = document.querySelector('.process-section .section-title');

    if (processSubHeading) processSubHeading.textContent = t.processSubHeading;
    if (processSectionTitle) processSectionTitle.textContent = t.processSectionTitle;

    const processItems = document.querySelectorAll('.process-section .process-item');
    const processTitles = [t.process1Title, t.process2Title, t.process3Title, t.process4Title];
    const processDescs = [t.process1Desc, t.process2Desc, t.process3Desc, t.process4Desc];

    processItems.forEach((item, index) => {
        const title = item.querySelector('.title');
        const desc = item.querySelector('p');
        if (title && processTitles[index]) title.textContent = processTitles[index];
        if (desc && processDescs[index]) desc.textContent = processDescs[index];
    });
}

// Update about section
function updateAboutSection(t) {
    const aboutSection = document.querySelector('.about-section');
    if (!aboutSection) return;

    const subHeading = aboutSection.querySelector('.sub-heading');
    const sectionTitles = aboutSection.querySelectorAll('.section-title');
    const paragraphs = aboutSection.querySelectorAll('.about-content p');
    const aboutBtn = aboutSection.querySelector('.about-btn .rr-primary-btn');

    if (subHeading) subHeading.textContent = t.aboutSubHeading;

    // First section title is the main one
    if (sectionTitles[0]) sectionTitles[0].textContent = t.aboutSectionTitle;
    // Second is the content title
    if (sectionTitles[1]) sectionTitles[1].textContent = t.aboutTitle;

    if (paragraphs[0]) paragraphs[0].textContent = t.aboutPara1;
    if (paragraphs[1]) paragraphs[1].textContent = t.aboutPara2;

    if (aboutBtn) {
        const icon = aboutBtn.querySelector('i');
        aboutBtn.textContent = t.aboutBtn;
        if (icon) aboutBtn.appendChild(icon);
    }
}

// Update products section
function updateProductsSection(t) {
    const productsSection = document.querySelector('.product-cards-section');
    if (!productsSection) return;

    const subHeading = productsSection.querySelector('.sub-heading');
    const sectionTitle = productsSection.querySelector('.section-title');

    if (subHeading) subHeading.textContent = t.productsSubHeading;
    if (sectionTitle) sectionTitle.innerHTML = t.productsSectionTitle;
}

// Update project accordion section
function updateProjectAccordionSection(t) {
    const projectSection = document.querySelector('.project-section');
    if (!projectSection) return;

    const subHeading = projectSection.querySelector('.sub-heading');
    const sectionTitle = projectSection.querySelector('.section-title');
    const mainBtn = projectSection.querySelector('.project-top-btn .rr-primary-btn');

    if (subHeading) subHeading.textContent = t.projectSubHeading;
    if (sectionTitle) sectionTitle.innerHTML = t.projectSectionTitle;
    if (mainBtn) {
        const icon = mainBtn.querySelector('i');
        mainBtn.textContent = t.projectBtn;
        if (icon) mainBtn.appendChild(icon);
    }

    // Accordion items
    const categories = [t.project1Category, t.project2Category, t.project3Category, t.project4Category];
    const titles = [t.project1Title, t.project2Title, t.project3Title, t.project4Title];
    const descs = [t.project1Desc, t.project2Desc, t.project3Desc, t.project4Desc];

    const accordionItems = projectSection.querySelectorAll('.accordion-item');
    accordionItems.forEach((item, index) => {
        const category = item.querySelector('.category');
        const title = item.querySelector('.title');
        const desc = item.querySelector('.content-left p');
        const btn = item.querySelector('.content-left .rr-primary-btn');

        if (category && categories[index]) category.textContent = categories[index];
        if (title && titles[index]) title.textContent = titles[index];
        if (desc && descs[index]) desc.textContent = descs[index];
        if (btn) {
            const icon = btn.querySelector('i');
            btn.textContent = t.projectBtnDetails;
            if (icon) btn.appendChild(icon);
        }
    });
}

// Update counter section
function updateCounterSection(t) {
    const counterItems = document.querySelectorAll('.counter-section .counter-item');
    const descs = [t.counter1Desc, t.counter2Desc, t.counter3Desc, t.counter4Desc];

    counterItems.forEach((item, index) => {
        const desc = item.querySelector('p');
        if (desc && descs[index]) desc.innerHTML = descs[index];
    });
}

// Update running text
function updateRunningText(t) {
    if (typeof jQuery === 'undefined') return;

    // Helper to reset and re-init ticker
    const updateTicker = (selector, items, options) => {
        const $ticker = jQuery(selector);
        if ($ticker.length === 0) return;

        // Clean container and rebuild list
        $ticker.empty();

        // Force LTR direction for English text in RTL mode
        $ticker.closest('.running-text').css('direction', 'ltr');

        const $ul = jQuery('<ul>', { class: 'text-anim carouselTicker__list' });

        if (items) {
            items.forEach(text => {
                jQuery('<li>').text(text).appendTo($ul);
            });
        }

        $ticker.append($ul);

        // Re-initialize
        $ticker.carouselTicker(options);
    };

    // HARDCODED ENGLISH ITEMS (User Request: Keep English in all views)
    const englishItems1 = ["PREMIUM CHOCOLATES ", " SWEET CANDIES ", " FRESH JUICES ", " FOOD MANUFACTURING ", " CRISPY SNACKS ", " QUALITY CONTROL "];
    const englishItems2 = ["FAMILY FAVORITES ", " WIDE AVAILABILITY ", " PARTNERSHIP SUCCESS ", " PROFIT GROWTH ", " CONSUMER TRUST ", " PREMIUM QUALITY "];

    // Always use English items regardless of language 't' - this ignores the translations
    updateTicker('.carouselTicker-nav', englishItems1, {});
    updateTicker('.carouselTicker-start', englishItems2, { direction: "next" });
}

// Update sponsor section
function updateSponsorSection(t) {
    const sponsorTitle = document.querySelector('.sponsor-item.item-1 .title');
    if (sponsorTitle) sponsorTitle.innerHTML = t.sponsorTitle;
}

// Update sidebar
function updateSidebar(t) {
    const sidebar = document.querySelector('#sidebar-area');
    if (!sidebar) return;

    const aboutTitle = sidebar.querySelector('.side-menu-about .side-menu-header h3');
    const aboutText = sidebar.querySelector('.side-menu-about p');
    const partnerBtn = sidebar.querySelector('.side-menu-about .rr-primary-btn');
    const contactTitle = sidebar.querySelector('.side-menu-contact .side-menu-header h3');
    const addressText = sidebar.querySelector('.side-menu-list li:first-child p');

    if (aboutTitle) aboutTitle.textContent = t.sidebarAboutTitle;
    if (aboutText) aboutText.textContent = t.sidebarAboutText;
    if (partnerBtn) partnerBtn.textContent = t.sidebarPartnerBtn;
    if (contactTitle) contactTitle.textContent = t.sidebarContactTitle;
    if (addressText) addressText.textContent = t.sidebarAddress;
}

// Update footer
function updateFooter(t) {
    const footer = document.querySelector('.footer-section');
    if (!footer) return;

    // Footer about text
    const footerAboutText = footer.querySelector('.footer-widget:first-child > p');
    if (footerAboutText) footerAboutText.textContent = t.footerAboutText;

    // Footer contact time
    const footerContactTime = footer.querySelector('.footer-widget:first-child .title');
    if (footerContactTime) footerContactTime.innerHTML = t.footerContactTime;

    // Widget titles
    const widgetTitles = footer.querySelectorAll('.widget-title');
    widgetTitles.forEach(title => {
        const text = title.textContent.trim();
        if (text === 'Useful Links' || text === 'روابط مفيدة') title.textContent = t.footerUsefulLinks;
        if (text === 'Contact Us' || text === 'اتصل بنا') title.textContent = t.footerContactUs;
        if (text === 'Stay Updated' || text === 'ابق على اطلاع') title.textContent = t.footerStayUpdated;
    });

    // Footer links
    const footerLinks = footer.querySelectorAll('.footer-list a');
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === 'about.html') link.textContent = t.footerOurStory;
        if (href === 'project.html') link.textContent = t.footerOurProducts;
        if (href === 'contact.html') link.textContent = t.footerPartnership;
    });

    // Subscribe form
    const emailInput = footer.querySelector('.rr-subscribe-form .form-control');
    const subscribeBtn = footer.querySelector('.rr-subscribe-form .submit');
    const checkboxLabel = footer.querySelector('.form-check-label');

    if (emailInput) emailInput.placeholder = t.footerEmailPlaceholder;
    if (subscribeBtn) subscribeBtn.textContent = t.footerSubscribe;
    if (checkboxLabel) checkboxLabel.textContent = t.footerCheckboxLabel;

    // Copyright
    const copyright = footer.querySelector('.copyright-area p');
    if (copyright) copyright.textContent = t.footerCopyright;
}

// Update About Page
function updateAboutPage(t) {
    // Page header
    const pageTitle = document.querySelector('.page-header-content .title');
    const homeLink = document.querySelector('.page-header-content .home');
    const innerPage = document.querySelector('.page-header-content .inner-page');

    if (pageTitle) pageTitle.textContent = t.aboutPageTitle;
    if (homeLink) homeLink.textContent = t.aboutPageBreadcrumbHome + ' ';
    if (innerPage) innerPage.textContent = ' ' + t.aboutPageBreadcrumbAbout;

    // About section content
    const aboutSection = document.querySelector('.about-section-2');
    if (aboutSection) {
        const subHeading = aboutSection.querySelector('.sub-heading');
        const sectionTitle = aboutSection.querySelector('.section-title');
        const paragraphs = aboutSection.querySelectorAll('.section-heading p');
        const partnerBtn = aboutSection.querySelector('.rr-primary-btn');

        if (subHeading) subHeading.textContent = t.aboutOurStory;
        if (sectionTitle) sectionTitle.textContent = t.aboutStoryTitle;
        if (paragraphs[0]) paragraphs[0].textContent = t.aboutStoryPara1;
        if (paragraphs[1]) paragraphs[1].textContent = t.aboutStoryPara2;
        if (partnerBtn) {
            partnerBtn.innerHTML = t.aboutPartnerBtn + '<i class="fa-regular fa-arrow-right"></i>';
        }
    }

    // Manufacturing section
    const processSection = document.querySelector('.process-section-2');
    if (processSection) {
        const bgText = processSection.querySelector('.bg-text');
        const sectionTitle = processSection.querySelector('.section-title');

        if (bgText) bgText.textContent = t.aboutManufacturing;
        if (sectionTitle) sectionTitle.textContent = t.aboutManufacturingTitle;
    }
}

// Update Contact Page
function updateContactPage(t) {
    // Page header
    const pageTitle = document.querySelector('.page-header-content .title');
    const homeLink = document.querySelector('.page-header-content .home');
    const innerPage = document.querySelector('.page-header-content .inner-page');

    if (pageTitle) pageTitle.textContent = t.contactPageTitle;
    if (homeLink) homeLink.textContent = t.contactPageBreadcrumbHome + ' ';
    if (innerPage) innerPage.textContent = ' ' + t.contactPageBreadcrumbContact;

    // Contact form
    const nameInput = document.querySelector('input[name="name"], input[placeholder*="Name"]');
    const emailInput = document.querySelector('input[name="email"], input[placeholder*="Email"]');
    const phoneInput = document.querySelector('input[name="phone"], input[placeholder*="Phone"]');
    const subjectInput = document.querySelector('input[name="subject"], input[placeholder*="Subject"]');
    const messageInput = document.querySelector('textarea[name="message"], textarea[placeholder*="Message"]');
    const submitBtn = document.querySelector('.contact-form button[type="submit"], .contact-form .rr-primary-btn');

    if (nameInput) nameInput.placeholder = t.contactFormName;
    if (emailInput) emailInput.placeholder = t.contactFormEmail;
    if (phoneInput) phoneInput.placeholder = t.contactFormPhone;
    if (subjectInput) subjectInput.placeholder = t.contactFormSubject;
    if (messageInput) messageInput.placeholder = t.contactFormMessage;
    if (submitBtn) submitBtn.textContent = t.contactFormSubmit;
}

// Update Products Page
function updateProductsPage(t) {
    // Page header
    const pageTitle = document.querySelector('.page-header-content .title');
    const homeLink = document.querySelector('.page-header-content .home');
    const innerPage = document.querySelector('.page-header-content .inner-page');

    if (pageTitle) pageTitle.textContent = t.productsPageTitle;
    if (homeLink) homeLink.textContent = t.productsPageBreadcrumbHome + ' ';
    if (innerPage) innerPage.textContent = ' ' + t.productsPageBreadcrumbProducts;

    // Category title
    const categoryTitle = document.getElementById('category-title');
    if (categoryTitle && categoryTitle.textContent.includes('ALL')) {
        categoryTitle.textContent = t.productsAllProducts;
    }

    // Search input
    const searchInput = document.querySelector('.product-search input, input[type="search"]');
    if (searchInput) searchInput.placeholder = t.productsSearchPlaceholder;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initTranslation);

// Also initialize when window loads (backup)
window.addEventListener('load', function () {
    setTimeout(initTranslation, 100);
});
