import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.admissions': 'Admissions',
    'nav.courses': 'Courses',
    'nav.services': 'Services',
    'nav.countries': 'Countries',
    'nav.contact': 'Contact',
    'nav.applyNow': 'Apply Now',

    // Hero
    'hero.slide1.title': 'Your Gateway to Universities Worldwide',
    'hero.slide1.desc': 'We guide you through every step of the university admission process with expert support and personalized consulting.',
    'hero.slide1.cta': 'Apply for Admission',
    'hero.slide2.title': 'Upgrade Your Skills with Professional Courses',
    'hero.slide2.desc': 'Explore our catalog of internationally recognized professional courses designed to accelerate your career.',
    'hero.slide2.cta': 'Browse Courses',

    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive educational solutions to help you achieve your.',
    'services.admissions.title': 'University ',
    'services.admissions.desc': 'Expert guidance for university applications worldwide with.',
    'services.equivalency.title': 'Certificates ',
    'services.equivalency.desc': 'Official recognition and equivalency services for academic.',
    'services.authentication.title': 'Document ',
    'services.authentication.desc': 'Professional document authentication and .',
    'services.courses.title': ' Courses',
    'services.courses.desc': 'Professional development courses in  NLP.',

    // Destinations
    'destinations.title': 'Study Destinations',
    'destinations.subtitle': 'Choose from our top partner countries offering world-class education',
    'destinations.egypt': 'Egypt',
    'destinations.turkey': 'Turkey',
    'destinations.rwanda': 'Rwanda',
    'destinations.learnMore': ' More',

    // Featured Courses
    'featured.title': 'Featured Courses',
    'featured.subtitle': 'Expand your knowledge with our most popular professional courses',
    'featured.viewAll': 'View All Courses',
    'featured.enroll': 'Enroll Now',
    'featured.price': 'Price',

    // CTA Banner
    'cta.title': 'Ready to Start Your Journey?',
    'cta.desc': 'Join thousands of students who have successfully achieved their educational goals with Better Life Admissions & Courses.',
    'cta.primary': 'Apply for Admission',
    'cta.secondary': 'Browse Courses',

    // Stats
    'stats.students': ' Enrolled',
    'stats.universities': 'Partner ',
    'stats.courses': 'Professional Courses',
    'stats.countries': 'Countries',

    // Admissions Page
    'admissions.title': 'University Admissions',
    'admissions.subtitle': 'Your pathway to top universities around the world',
    'admissions.form.title': 'Start Your Application',
    'admissions.form.firstName': 'First Name',
    'admissions.form.lastName': 'Last Name',
    'admissions.form.email': 'Email Address',
    'admissions.form.phone': 'Phone Number',
    'admissions.form.country': 'Preferred Country',
    'admissions.form.field': 'Field of Study',
    'admissions.form.degree': 'Desired Degree',
    'admissions.form.message': 'Additional Notes',
    'admissions.form.documents': 'Upload Documents',
    'admissions.form.submit': 'Submit Application',
    'admissions.process.title': 'Admission Process',
    'admissions.process.step1': 'Initial Consultation',
    'admissions.process.step1.desc': 'Free consultation to understand your goals and academic background.',
    'admissions.process.step2': 'Document Preparation',
    'admissions.process.step2.desc': 'We help you prepare all required academic and personal documents.',
    'admissions.process.step3': 'University Selection',
    'admissions.process.step3.desc': 'Choose from our partner universities matching your profile and preferences.',
    'admissions.process.step4': 'Application Submission',
    'admissions.process.step4.desc': 'We submit your application and follow up directly with the universities.',
    'admissions.process.step5': 'Visa & Enrollment',
    'admissions.process.step5.desc': 'Support with visa application and university enrollment procedures.',
    'admissions.tracking.title': 'Track Your Application',
    'admissions.tracking.placeholder': 'Enter your application ID',
    'admissions.tracking.button': 'Track',

    // Courses Page
    'courses.title': 'Professional Courses',
    'courses.subtitle': 'Internationally recognized courses to boost your career',
    'courses.filter.all': 'All Courses',
    'courses.filter.human': 'Human Development',
    'courses.filter.sales': 'Sales & Marketing',
    'courses.filter.pr': 'Public Relations',
    'courses.filter.nlp': 'NLP',
    'courses.filter.leadership': 'Leadership',
    'courses.filter.technical': 'Technical Courses',
    'courses.enrollNow': 'Enroll Now',
    'courses.duration': 'Duration',
    'courses.level': 'Level',
    'courses.students': 'students',
    'courses.hours': 'hours',

    // Course Details
    'courseDetails.objectives': 'Course Objectives',
    'courseDetails.content': 'Course Content',
    'courseDetails.preview': 'Course Preview',
    'courseDetails.attachments': 'Attachments',
    'courseDetails.enroll': 'Enroll Now',
    'courseDetails.buy': 'Buy Course',
    'courseDetails.instructor': 'Instructor',
    'courseDetails.rating': 'Rating',
    'courseDetails.enrolled': 'Enrolled',
    'courseDetails.includes': 'This Course Includes',
    'courseDetails.certificate': 'Certificate of completion',
    'courseDetails.lifetime': 'Lifetime access',
    'courseDetails.downloadable': 'Downloadable resources',
    'courseDetails.mobile': 'Access on mobile & desktop',

    // Services Page
    'servicesPage.title': 'Our Services',
    'servicesPage.subtitle': 'Comprehensive solutions for your educational journey',
    'servicesPage.equivalency.title': 'Certificates Equivalency',
    'servicesPage.equivalency.desc': 'We provide official certificate equivalency services recognized by governmental bodies and international institutions.',
    'servicesPage.authentication.title': 'Document Authentication',
    'servicesPage.authentication.desc': 'Professional authentication and apostille services for all your academic and personal documents.',
    'servicesPage.consulting.title': 'Academic Consulting',
    'servicesPage.consulting.desc': 'Expert academic consultants guide you through your educational journey from school to postgraduate studies.',
    'servicesPage.training.title': 'Training Programs',
    'servicesPage.training.desc': 'Corporate and individual training programs designed to enhance professional skills and leadership capabilities.',
    'servicesPage.getStarted': 'Get Started',

    // Countries Page
    'countriesPage.title': 'Study Destinations',
    'countriesPage.subtitle': 'Explore world-class education opportunities in our partner countries',
    'countriesPage.universities': 'Partner Universities',
    'countriesPage.requirements': 'Admission Requirements',
    'countriesPage.steps': 'Application Steps',
    'countriesPage.applyNow': 'Apply Now',
    'countriesPage.egypt.title': 'Study in Egypt',
    'countriesPage.egypt.desc': 'Egypt offers rich academic heritage with modern universities providing quality education at affordable costs.',
    'countriesPage.turkey.title': 'Study in Turkey',
    'countriesPage.turkey.desc': 'Turkey bridges East and West with internationally ranked universities and vibrant student life.',
    'countriesPage.rwanda.title': 'Study in Rwanda',
    'countriesPage.rwanda.desc': 'Rwanda is Africa\'s fastest growing education hub with English-taught programs and modern infrastructure.',

    // Contact Page
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'We\'re here to help you every step of the way',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.whatsapp.btn': 'Chat on WhatsApp',
    'contact.hours': 'Working Hours',
    'contact.hours.value': 'Sun - Thu: 9:00 AM - 6:00 PM',

    // Footer
    'footer.tagline': 'Your trusted partner for university admissions and professional courses worldwide.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.followUs': 'Follow Us',

    // Common
    'common.readMore': 'More',
    'common.viewDetails': 'View Details',
    'common.backToHome': 'Back to Home',
    'common.loading': 'Loading...',
    'common.selectOption': 'Select an option',
    'common.submit': 'Submit',
    'common.uploadFile': 'Upload File',
    'common.or': 'or',
    'common.required': 'Required',
    'common.perCourse': 'per course',
    'common.free': 'Free',
    'common.paid': 'Paid',
  },

  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.admissions': 'القبولات',
    'nav.courses': 'الكورسات',
    'nav.services': 'خدماتنا',
    'nav.countries': 'الدول',
    'nav.contact': 'تواصل معنا',
    'nav.applyNow': 'سجّل الآن',

    // Hero
    'hero.slide1.title': 'بوابتك للجامعات حول العالم',
    'hero.slide1.desc': 'نوجهك في كل خطوة من خطوات القبول الجامعي بدعم متخصص واستشارة شخصية مخصصة لك.',
    'hero.slide1.cta': 'ابدأ التقديم',
    'hero.slide2.title': 'طور مهاراتك مع الكورسات الاحترافية',
    'hero.slide2.desc': 'استكشف مجموعتنا من الكورسات الاحترافية المعتمدة دولياً والمصممة لتسريع مسيرتك المهنية.',
    'hero.slide2.cta': 'تصفح الكورسات',

    // Services Section
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول تعليمية شاملة لمساعدتك على تحقيق أهدافك الأكاديمية والمهنية',
    'services.admissions.title': 'القبولات الجامعية',
    'services.admissions.desc': 'توجيه متخصص لطلبات الجامعات حول العالم مع دعم كامل من الاستشارة حتى التسجيل.',
    'services.equivalency.title': 'معادلة الشهادات',
    'services.equivalency.desc': 'خدمات الاعتراف الرسمي ومعادلة الشهادات الأكاديمية والمهنية.',
    'services.authentication.title': 'توثيق المستندات',
    'services.authentication.desc': 'خدمات توثيق المستندات ومصادقتها احترافياً للاستخدام الأكاديمي في الخارج.',
    'services.courses.title': 'الكورسات ',
    'services.courses.desc': 'كورسات التطوير المهني في القيادة والـ NLP والتسويق والمهارات التقنية.',

    // Destinations
    'destinations.title': 'وجهات الدراسة',
    'destinations.subtitle': 'اختر من بين أفضل الدول الشريكة لدينا التي تقدم تعليماً عالمي المستوى',
    'destinations.egypt': 'مصر',
    'destinations.turkey': 'تركيا',
    'destinations.rwanda': 'رواندا',
    'destinations.learnMore': 'اعرف المزيد',

    // Featured Courses
    'featured.title': 'أبرز الكورسات',
    'featured.subtitle': 'وسّع معرفتك بأكثر كورساتنا المهنية شعبية',
    'featured.viewAll': 'عرض كل الكورسات',
    'featured.enroll': 'سجّل الآن',
    'featured.price': 'السعر',

    // CTA Banner
    'cta.title': 'هل أنت مستعد لبدء رحلتك؟',
    'cta.desc': 'انضم إلى آلاف الطلاب الذين حققوا أهدافهم التعليمية بنجاح مع Better Life للقبولات والكورسات.',
    'cta.primary': 'ابدأ التقديم',
    'cta.secondary': 'تصفح الكورسات',

    // Stats
    'stats.students': 'طالب ',
    'stats.universities': 'جامعة ',
    'stats.courses': 'كورس مهني',
    'stats.countries': 'دولة',

    // Admissions Page
    'admissions.title': 'القبولات الجامعية',
    'admissions.subtitle': 'طريقك نحو أفضل الجامعات حول العالم',
    'admissions.form.title': 'ابدأ طلبك',
    'admissions.form.firstName': 'الاسم الأول',
    'admissions.form.lastName': 'اسم العائلة',
    'admissions.form.email': 'البريد الإلكتروني',
    'admissions.form.phone': 'رقم الهاتف',
    'admissions.form.country': 'الدولة المفضلة',
    'admissions.form.field': 'مجال الدراسة',
    'admissions.form.degree': 'الدرجة العلمية المطلوبة',
    'admissions.form.message': 'ملاحظات إضافية',
    'admissions.form.documents': 'رفع المستندات',
    'admissions.form.submit': 'إرسال الطلب',
    'admissions.process.title': 'خطوات القبول',
    'admissions.process.step1': 'الاستشارة الأولية',
    'admissions.process.step1.desc': 'استشارة مجانية لفهم أهدافك وخلفيتك الأكاديمية.',
    'admissions.process.step2': 'تجهيز المستندات',
    'admissions.process.step2.desc': 'نساعدك في إعداد جميع المستندات الأكاديمية والشخصية المطلوبة.',
    'admissions.process.step3': 'اختيار الجامعة',
    'admissions.process.step3.desc': 'اختر من بين جامعاتنا الشريكة التي تتوافق مع ملفك الشخصي وتفضيلاتك.',
    'admissions.process.step4': 'تقديم الطلب',
    'admissions.process.step4.desc': 'نقدم طلبك ونتابع مباشرة مع الجامعات.',
    'admissions.process.step5': 'التأشيرة والتسجيل',
    'admissions.process.step5.desc': 'دعم في طلب التأشيرة وإجراءات التسجيل الجامعي.',
    'admissions.tracking.title': 'تتبع طلبك',
    'admissions.tracking.placeholder': 'أدخل رقم طلبك',
    'admissions.tracking.button': 'تتبع',

    // Courses Page
    'courses.title': 'الكورسات المهنية',
    'courses.subtitle': 'كورسات معتمدة دولياً لتعزيز مسيرتك المهنية',
    'courses.filter.all': 'جميع الكورسات',
    'courses.filter.human': 'التطوير البشري',
    'courses.filter.sales': 'المبيعات والتسويق',
    'courses.filter.pr': 'العلاقات العامة',
    'courses.filter.nlp': 'البرمجة اللغوية',
    'courses.filter.leadership': 'القيادة',
    'courses.filter.technical': 'الكورسات التقنية',
    'courses.enrollNow': 'سجّل الآن',
    'courses.duration': 'المدة',
    'courses.level': 'المستوى',
    'courses.students': 'طالب',
    'courses.hours': 'ساعة',

    // Course Details
    'courseDetails.objectives': 'أهداف الكورس',
    'courseDetails.content': 'محتوى الكورس',
    'courseDetails.preview': 'معاينة الكورس',
    'courseDetails.attachments': 'المرفقات',
    'courseDetails.enroll': 'سجّل الآن',
    'courseDetails.buy': 'اشترِ الكورس',
    'courseDetails.instructor': 'المدرب',
    'courseDetails.rating': 'التقييم',
    'courseDetails.enrolled': 'مسجّل',
    'courseDetails.includes': 'ما يتضمنه هذا الكورس',
    'courseDetails.certificate': 'شهادة إتمام',
    'courseDetails.lifetime': 'وصول مدى الحياة',
    'courseDetails.downloadable': 'موارد قابلة للتنزيل',
    'courseDetails.mobile': 'الوصول عبر الموبايل والكمبيوتر',

    // Services Page
    'servicesPage.title': 'خدماتنا',
    'servicesPage.subtitle': 'حلول شاملة لرحلتك التعليمية',
    'servicesPage.equivalency.title': 'معادلة الشهادات',
    'servicesPage.equivalency.desc': 'نقدم خدمات معادلة الشهادات الرسمية المعتمدة من الجهات الحكومية والمؤسسات الدولية.',
    'servicesPage.authentication.title': 'توثيق المستندات',
    'servicesPage.authentication.desc': 'خدمات توثيق ومصادقة احترافية لجميع مستنداتك الأكاديمية والشخصية.',
    'servicesPage.consulting.title': 'الاستشارة الأكاديمية',
    'servicesPage.consulting.desc': 'مستشارون أكاديميون متخصصون يوجهونك في رحلتك التعليمية من المدرسة حتى الدراسات العليا.',
    'servicesPage.training.title': 'برامج التدريب',
    'servicesPage.training.desc': 'برامج تدريبية للشركات والأفراد مصممة لتعزيز المهارات المهنية وقدرات القيادة.',
    'servicesPage.getStarted': 'ابدأ الآن',

    // Countries Page
    'countriesPage.title': 'وجهات الدراسة',
    'countriesPage.subtitle': 'استكشف فرص التعليم العالمي في دولنا الشريكة',
    'countriesPage.universities': 'الجامعات الشريكة',
    'countriesPage.requirements': 'متطلبات القبول',
    'countriesPage.steps': 'خطوات التقديم',
    'countriesPage.applyNow': 'قدّم الآن',
    'countriesPage.egypt.title': 'الدراسة في مصر',
    'countriesPage.egypt.desc': 'تقدم مصر إرثاً أكاديمياً غنياً مع جامعات حديثة توفر تعليماً عالي الجودة بتكاليف ميسورة.',
    'countriesPage.turkey.title': 'الدراسة في تركيا',
    'countriesPage.turkey.desc': 'تجمع تركيا بين الشرق والغرب بجامعات مصنّفة دولياً وحياة طلابية نابضة بالحيوية.',
    'countriesPage.rwanda.title': 'الدراسة في رواندا',
    'countriesPage.rwanda.desc': 'رواندا هي مركز التعليم الأسرع نمواً في أفريقيا مع برامج باللغة الإنجليزية وبنية تحتية حديثة.',

    // Contact Page
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا لمساعدتك في كل خطوة',
    'contact.phone': 'الهاتف',
    'contact.whatsapp': 'واتساب',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.whatsapp.btn': 'تحدث عبر واتساب',
    'contact.hours': 'ساعات العمل',
    'contact.hours.value': 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً',

    // Footer
    'footer.tagline': 'شريكك الموثوق للقبولات الجامعية والكورسات المهنية حول العالم.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'خدماتنا',
    'footer.contact': 'تواصل معنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.followUs': 'تابعنا',

    // Common
    'common.readMore': 'اقرأ المزيد',
    'common.viewDetails': 'عرض التفاصيل',
    'common.backToHome': 'العودة للرئيسية',
    'common.loading': 'جار التحميل...',
    'common.selectOption': 'اختر خياراً',
    'common.submit': 'إرسال',
    'common.required': 'مطلوب',
    'common.uploadFile': 'رفع ملف',
    'common.or': 'أو',
    'common.perCourse': 'للكورس',
    'common.free': 'مجاني',
    'common.paid': 'مدفوع',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar' ? "'Cairo', 'Inter', sans-serif" : "'Inter', 'Cairo', sans-serif";
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';
  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
