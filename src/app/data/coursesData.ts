export interface Course {
  id: string;
  titleEn: string;
  titleAr: string;
  category: string;
  descEn: string;
  descAr: string;
  price: number;
  currency: string;
  duration: number; // hours
  level: string;
  levelAr: string;
  students: number;
  image: string;
  rating: number;
  objectives: { en: string[]; ar: string[] };
  content: { en: string[]; ar: string[] };
  instructor: { en: string; ar: string };
}

export const categories = [
  { key: 'all', en: 'All Courses', ar: 'جميع الكورسات' },
  { key: 'human', en: 'Human Development', ar: 'التطوير البشري' },
  { key: 'sales', en: 'Sales & Marketing', ar: 'المبيعات والتسويق' },
  { key: 'pr', en: 'Public Relations', ar: 'العلاقات العامة' },
  { key: 'nlp', en: 'NLP', ar: 'البرمجة اللغوية العصبية' },
  { key: 'leadership', en: 'Leadership', ar: 'القيادة' },
  { key: 'technical', en: 'Technical Courses', ar: 'الكورسات التقنية' },
];

export const courses: Course[] = [
  {
    id: '1',
    titleEn: 'Mastering Human Development',
    titleAr: 'إتقان التطوير البشري',
    category: 'human',
    descEn: 'A comprehensive program covering self-awareness, emotional intelligence, goal setting, and personal growth strategies.',
    descAr: 'برنامج شامل يغطي الوعي الذاتي والذكاء العاطفي وتحديد الأهداف واستراتيجيات النمو الشخصي.',
    price: 299,
    currency: 'USD',
    duration: 30,
    level: 'Beginner',
    levelAr: 'مبتدئ',
    students: 1240,
    image: 'https://images.unsplash.com/photo-1766131822552-59074d945365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.8,
    objectives: {
      en: [
        'Develop strong self-awareness and emotional intelligence',
        'Set and achieve meaningful personal and professional goals',
        'Build resilience and manage stress effectively',
        'Improve communication and interpersonal skills',
        'Create a personalized growth plan',
      ],
      ar: [
        'تطوير الوعي الذاتي القوي والذكاء العاطفي',
        'تحديد وتحقيق الأهداف الشخصية والمهنية المعنوية',
        'بناء المرونة وإدارة الضغط بفعالية',
        'تحسين مهارات التواصل والعلاقات الشخصية',
        'إنشاء خطة نمو شخصية مخصصة',
      ],
    },
    content: {
      en: [
        'Module 1: Self-Discovery & Awareness',
        'Module 2: Emotional Intelligence Mastery',
        'Module 3: Goal Setting Frameworks',
        'Module 4: Stress Management Techniques',
        'Module 5: Building Habits for Success',
        'Module 6: Personal Growth Action Plan',
      ],
      ar: [
        'الوحدة 1: اكتشاف الذات والوعي',
        'الوحدة 2: إتقان الذكاء العاطفي',
        'الوحدة 3: أطر تحديد الأهداف',
        'الوحدة 4: تقنيات إدارة الضغط',
        'الوحدة 5: بناء عادات النجاح',
        'الوحدة 6: خطة العمل للنمو الشخصي',
      ],
    },
    instructor: { en: 'Dr. Sarah Johnson', ar: 'د. سارة جونسون' },
  },
  {
    id: '2',
    titleEn: 'Sales & Marketing Mastery',
    titleAr: 'إتقان المبيعات والتسويق',
    category: 'sales',
    descEn: 'Learn cutting-edge sales techniques and modern digital marketing strategies to boost your business performance.',
    descAr: 'تعلم أحدث تقنيات البيع واستراتيجيات التسويق الرقمي الحديثة لتعزيز أداء عملك.',
    price: 349,
    currency: 'USD',
    duration: 40,
    level: 'Intermediate',
    levelAr: 'متوسط',
    students: 890,
    image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.7,
    objectives: {
      en: [
        'Master modern sales techniques and closing strategies',
        'Build effective digital marketing campaigns',
        'Understand customer psychology and buying behavior',
        'Create compelling content and brand messaging',
        'Measure and optimize marketing ROI',
      ],
      ar: [
        'إتقان تقنيات المبيعات الحديثة واستراتيجيات الإغلاق',
        'بناء حملات تسويق رقمي فعّالة',
        'فهم علم نفس العميل وسلوك الشراء',
        'إنشاء محتوى مقنع ورسائل العلامة التجارية',
        'قياس وتحسين عائد الاستثمار التسويقي',
      ],
    },
    content: {
      en: [
        'Module 1: Foundations of Modern Sales',
        'Module 2: Digital Marketing Essentials',
        'Module 3: Social Media Marketing',
        'Module 4: Content Marketing Strategy',
        'Module 5: Sales Closing Techniques',
        'Module 6: Analytics & Performance',
      ],
      ar: [
        'الوحدة 1: أسس المبيعات الحديثة',
        'الوحدة 2: أساسيات التسويق الرقمي',
        'الوحدة 3: تسويق وسائل التواصل الاجتماعي',
        'الوحدة 4: استراتيجية تسويق المحتوى',
        'الوحدة 5: تقنيات إغلاق الصفقات',
        'الوحدة 6: التحليلات والأداء',
      ],
    },
    instructor: { en: 'Prof. Michael Carter', ar: 'أ. مايكل كارتر' },
  },
  {
    id: '3',
    titleEn: 'NLP Practitioner Certification',
    titleAr: 'شهادة ممارس البرمجة اللغوية العصبية',
    category: 'nlp',
    descEn: 'International NLP certification program to master communication, change behavior, and achieve excellence.',
    descAr: 'برنامج شهادة دولية في البرمجة اللغوية العصبية لإتقان التواصل وتغيير السلوك وتحقيق التميز.',
    price: 499,
    currency: 'USD',
    duration: 50,
    level: 'Advanced',
    levelAr: 'متقدم',
    students: 620,
    image: 'https://i.pinimg.com/1200x/10/81/8d/10818df012c6f9a4760f484cb3ab6183.jpg',
    rating: 4.9,
    objectives: {
      en: [
        'Understand the principles of Neuro-Linguistic Programming',
        'Apply NLP techniques in personal and professional settings',
        'Master rapport building and influential communication',
        'Use anchoring, reframing, and other NLP tools',
        'Earn an internationally recognized NLP certificate',
      ],
      ar: [
        'فهم مبادئ البرمجة اللغوية العصبية',
        'تطبيق تقنيات البرمجة اللغوية في البيئات الشخصية والمهنية',
        'إتقان بناء العلاقات والتواصل المؤثر',
        'استخدام تقنيات الإرساء وإعادة الهيكلة وغيرها',
        'الحصول على شهادة معتمدة دولياً',
      ],
    },
    content: {
      en: [
        'Module 1: NLP Foundations & History',
        'Module 2: Communication Excellence',
        'Module 3: Rapport & Influence',
        'Module 4: Anchoring Techniques',
        'Module 5: Change Work & Reframing',
        'Module 6: Certification Assessment',
      ],
      ar: [
        'الوحدة 1: أسس وتاريخ البرمجة اللغوية',
        'الوحدة 2: التميز في التواصل',
        'الوحدة 3: بناء العلاقات والتأثير',
        'الوحدة 4: تقنيات الإرساء',
        'الوحدة 5: عمل التغيير وإعادة الهيكلة',
        'الوحدة 6: تقييم الشهادة',
      ],
    },
    instructor: { en: 'Dr. Amira Hassan', ar: 'د. أميرة حسن' },
  },
  {
    id: '4',
    titleEn: 'Leadership Excellence Program',
    titleAr: 'برنامج التميز القيادي',
    category: 'leadership',
    descEn: 'Transform your leadership style and build high-performing teams with proven leadership frameworks.',
    descAr: 'حوّل أسلوبك القيادي وابنِ فرقاً عالية الأداء مع أطر القيادة المُثبتة.',
    price: 399,
    currency: 'USD',
    duration: 35,
    level: 'Intermediate',
    levelAr: 'متوسط',
    students: 780,
    image: 'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.8,
    objectives: {
      en: [
        'Develop an authentic leadership identity',
        'Build and lead high-performing teams',
        'Master strategic thinking and decision-making',
        'Communicate vision and inspire others',
        'Manage conflict and drive change effectively',
      ],
      ar: [
        'تطوير هوية قيادية أصيلة',
        'بناء وقيادة فرق عالية الأداء',
        'إتقان التفكير الاستراتيجي واتخاذ القرار',
        'التواصل برؤية وإلهام الآخرين',
        'إدارة النزاعات وقيادة التغيير بفعالية',
      ],
    },
    content: {
      en: [
        'Module 1: Leadership Styles & Identity',
        'Module 2: Team Building & Dynamics',
        'Module 3: Strategic Planning',
        'Module 4: Visionary Communication',
        'Module 5: Conflict Resolution',
        'Module 6: Change Management',
      ],
      ar: [
        'الوحدة 1: أساليب القيادة والهوية',
        'الوحدة 2: بناء الفريق والديناميكيات',
        'الوحدة 3: التخطيط الاستراتيجي',
        'الوحدة 4: التواصل الرؤيوي',
        'الوحدة 5: حل النزاعات',
        'الوحدة 6: إدارة التغيير',
      ],
    },
    instructor: { en: 'Dr. James Williams', ar: 'د. جيمس ويليامز' },
  },
  {
    id: '5',
    titleEn: 'Public Relations Professional',
    titleAr: 'محترف العلاقات العامة',
    category: 'pr',
    descEn: 'Master the art of public relations, media management, and corporate communications.',
    descAr: 'أتقن فن العلاقات العامة وإدارة الإعلام والاتصالات المؤسسية.',
    price: 279,
    currency: 'USD',
    duration: 25,
    level: 'Beginner',
    levelAr: 'مبتدئ',
    students: 540,
    image: 'https://images.unsplash.com/photo-1613211431746-aacbe481a84b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.6,
    objectives: {
      en: [
        'Understand PR principles and media landscape',
        'Write press releases and manage media relations',
        'Build brand reputation and manage crisis',
        'Create effective PR campaigns',
        'Measure PR effectiveness and ROI',
      ],
      ar: [
        'فهم مبادئ العلاقات العامة والمشهد الإعلامي',
        'كتابة البيانات الصحفية وإدارة العلاقات الإعلامية',
        'بناء سمعة العلامة التجارية وإدارة الأزمات',
        'إنشاء حملات علاقات عامة فعّالة',
        'قياس فعالية العلاقات العامة وعائد الاستثمار',
      ],
    },
    content: {
      en: [
        'Module 1: PR Foundations',
        'Module 2: Media Relations',
        'Module 3: Brand Reputation',
        'Module 4: Crisis Communication',
        'Module 5: PR Campaign Planning',
        'Module 6: Digital PR & Social Media',
      ],
      ar: [
        'الوحدة 1: أسس العلاقات العامة',
        'الوحدة 2: العلاقات الإعلامية',
        'الوحدة 3: سمعة العلامة التجارية',
        'الوحدة 4: التواصل في الأزمات',
        'الوحدة 5: تخطيط حملات العلاقات العامة',
        'الوحدة 6: العلاقات العامة الرقمية ووسائل التواصل',
      ],
    },
    instructor: { en: 'Ms. Rebecca Stone', ar: 'أ. ريبيكا ستون' },
  },
  {
    id: '6',
    titleEn: 'Web Design & Programming (WDP)',
    titleAr: 'تصميم وبرمجة المواقع (WDP)',
    category: 'technical',
    descEn: 'Complete web development course from HTML/CSS basics to advanced React and Node.js applications.',
    descAr: 'كورس شامل لتطوير الويب من أساسيات HTML/CSS إلى تطبيقات React و Node.js المتقدمة.',
    price: 449,
    currency: 'USD',
    duration: 60,
    level: 'Beginner to Advanced',
    levelAr: 'من المبتدئ إلى المتقدم',
    students: 1560,
    image: 'https://images.unsplash.com/photo-1763568258179-fa561d623323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.9,
    objectives: {
      en: [
        'Build complete web applications from scratch',
        'Master HTML, CSS, JavaScript, and React',
        'Develop backend with Node.js and databases',
        'Deploy and maintain web applications',
        'Build a professional portfolio',
      ],
      ar: [
        'بناء تطبيقات ويب كاملة من الصفر',
        'إتقان HTML و CSS و JavaScript و React',
        'تطوير الواجهة الخلفية مع Node.js وقواعد البيانات',
        'نشر وصيانة تطبيقات الويب',
        'بناء محفظة احترافية',
      ],
    },
    content: {
      en: [
        'Module 1: HTML & CSS Fundamentals',
        'Module 2: JavaScript Programming',
        'Module 3: React.js Framework',
        'Module 4: Node.js & Express',
        'Module 5: Database Management',
        'Module 6: Deployment & DevOps',
      ],
      ar: [
        'الوحدة 1: أساسيات HTML و CSS',
        'الوحدة 2: برمجة JavaScript',
        'الوحدة 3: إطار عمل React.js',
        'الوحدة 4: Node.js و Express',
        'الوحدة 5: إدارة قواعد البيانات',
        'الوحدة 6: النشر وDevOps',
      ],
    },
    instructor: { en: 'Eng. Omar Khalil', ar: 'م. عمر خليل' },
  },
];
