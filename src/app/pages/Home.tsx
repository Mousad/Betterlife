import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  GraduationCap, BookOpen, FileCheck, Shield, Globe, ArrowRight,
  Star, Users, Award, TrendingUp, CheckCircle, Phone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HeroSlider } from '../components/HeroSlider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { courses } from '../data/coursesData';

const HERO_1 = 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/543030522_1192329759597128_6311524468721955209_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=2a1932&_nc_ohc=BWnDMjA6ESkQ7kNvwF7sztV&_nc_oc=AdqOjPZC5T51qYwayFtVxsCnt_qb6VKYlqtsrT9s4aagbtCqD8bjYMr4F2YSR51mU90&_nc_zt=23&_nc_ht=scontent.fcai19-7.fna&_nc_gid=W5qZdNapVGGybZ8fgTamxg&oh=00_Af25ZSxsOTDCsyQ0DG1A7MiJZ_jjkqYD5Tne3DFRJbm__Q&oe=69F0A04E  ';

function SectionHeader({ title, subtitle, isRTL }: { title: string; subtitle: string; isRTL: boolean }) {
  return (
    <div className={`mb-14 ${isRTL ? 'text-right' : 'text-center'}`}>
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}
        style={{ backgroundColor: 'rgba(115,51,125,0.08)', border: '1px solid rgba(115,51,125,0.2)' }}
      >
        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#73337d' }} />
        <span className="text-sm font-semibold" style={{ color: '#73337d' }}>{title}</span>
      </div>
      <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </div>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  const { t, isRTL, language } = useLanguage();

  const serviceCards = [
    {
      icon: GraduationCap,
      titleKey: 'services.admissions.title',
      descKey: 'services.admissions.desc',
      path: '/admissions',
      color: '#73337d',
      bg: 'rgba(115,51,125,0.08)',
    },
    {
      icon: FileCheck,
      titleKey: 'services.equivalency.title',
      descKey: 'services.equivalency.desc',
      path: '/services',
      color: '#2d7dd2',
      bg: 'rgba(45,125,210,0.08)',
    },
    {
      icon: Shield,
      titleKey: 'services.authentication.title',
      descKey: 'services.authentication.desc',
      path: '/services',
      color: '#27ae60',
      bg: 'rgba(39,174,96,0.08)',
    },
    {
      icon: BookOpen,
      titleKey: 'services.courses.title',
      descKey: 'services.courses.desc',
      path: '/courses',
      color: '#e67e22',
      bg: 'rgba(230,126,34,0.08)',
    },
  ];

 const destinations = [
  {
    nameKey: 'destinations.egypt',
    flag: '🇪🇬',
    image: 'https://images.unsplash.com/photo-1613861114012-c91d4557dcc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    path: '/countries',
    unis: '40+',
  },
  {
    nameKey: 'destinations.turkey',
    flag: '🇹🇷',
    image: 'https://images.unsplash.com/photo-1700729253501-cf670e027d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    path: '/countries',
    unis: '60+',
  },
  {
    nameKey: 'destinations.rwanda',
    flag: '🇷🇼',
    image: 'https://images.unsplash.com/photo-1682773083912-ff5ee5fa557b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    path: '/countries',
    unis: '15+',
  },
  {
    nameKey: 'destinations.china',
    flag: '🇨🇳',
    image: 'https://i.pinimg.com/736x/71/17/2c/71172c34e0592f3a8fcd1c76cbb72e4e.jpg',
    path: '/countries',
    unis: '100+',
  },
  {
    nameKey: 'destinations.russia',
    flag: '🇷🇺',
    image: 'https://i.pinimg.com/736x/8b/31/49/8b314958dc6cdcc54da197761eec5bf3.jpg',
    path: '/countries',
    unis: '80+',
  },
];

  const stats = [
    { value: '5,000+', labelKey: 'stats.students', icon: Users },
    { value: '120+', labelKey: 'stats.universities', icon: GraduationCap },
    { value: '9', labelKey: 'stats.countries', icon: Globe },
  ];

  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Bar */}
      <section style={{ backgroundColor: '#73337d' }}>
        <div className="max-w-3xl mx-auto px-10 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-8">
            {stats.map(({ value, labelKey, icon: Icon }, i) => (
             <motion.div
  key={i}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: i * 0.1 }}
  className="flex flex-col items-center text-center gap-2 h-30"
>
  {/* Icon */}
  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
  >
    <Icon className="w-5 h-5 text-white" />
  </div>

  

  {/* Label */}
  <div className="text-sm text-white/75">
    {t(labelKey)}
  </div>

  {/* Number */}
  <div className="text-1xl font-bold text-white">
    {value}
  </div>
</motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
    
      <section className="py-8" style={{ backgroundColor: '#f9f8f7' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >

      <SectionHeader
        title={t('services.title')}
        subtitle={t('services.subtitle')}
        isRTL={isRTL}
      />

      <motion.div
        variants={stagger}
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >

        {serviceCards.map(({ icon: Icon, titleKey, descKey, path, color, bg }, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}

            className={`
              group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl 
              transition-all duration-300 hover:-translate-y-1 border border-gray-100

              /* 🔥 Responsive text alignment */
              text-center sm:text-left
              ${isRTL ? 'sm:text-right' : ''}
            `}
          >

            {/* 🔥 Icon */}
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 mx-auto sm:mx-0"
              style={{ backgroundColor: bg }}
            >
              <Icon className="w-7 h-7" style={{ color }} />
            </div>

            {/* Title */}
            <h3
              className="text-gray-900 font-bold mb-3"
              style={{ fontSize: '1.05rem' }}
            >
              {t(titleKey)}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              {t(descKey)}
            </p>

            {/* Link */}
            <Link
              to={path}
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{
                color,
                flexDirection: isRTL ? 'row-reverse' : 'row',
              }}
            >
              {t('common.readMore')}
              <ArrowRight
                className="w-4 h-4"
                style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
              />
            </Link>

          </motion.div>
        ))}

      </motion.div>

    </motion.div>

  </div>
</section>

      {/* Study Destinations */}
     <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <SectionHeader
      title={t('destinations.title')}
      subtitle={t('destinations.subtitle')}
      isRTL={isRTL}
    />

    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}

      className="grid grid-cols-2 md:grid-cols-3 gap-6"
    >

      {destinations.map(({ nameKey, flag, image, path, unis }, i) => {

        // 🔥 نخلي الصورة الثالثة (index 2) تمتد كامل الصف في الموبايل
        const isMiddle = i === 2;

        return (
          <motion.div
            key={i}
            variants={fadeInUp}

            className={`
              group relative overflow-hidden rounded-2xl shadow-md 
              hover:shadow-2xl transition-all duration-400 cursor-pointer
              h-[250px]

              ${isMiddle ? 'col-span-2 md:col-span-1' : ''}
            `}
          >

            {/* Image */}
            <ImageWithFallback
              src={image}
              alt={t(nameKey)}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)'
              }}
            />

            {/* Content */}
            <div className={`absolute bottom-0 left-0 right-0 p-6 ${isRTL ? 'text-right' : 'text-left'}`}>

              <div className="text-4xl mb-2">{flag}</div>

              <h3 className="text-white text-xl font-bold mb-1">
                {t(nameKey)}
              </h3>

              <p className="text-white/70 text-sm mb-4">
                {unis} {isRTL ? 'جامعة شريكة' : 'Partner Universities'}
              </p>

              <Link
                to={path}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                style={{
                  backgroundColor: '#73337d',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                }}
              >
                {t('destinations.learnMore')}

                <ArrowRight
                  className="w-4 h-4"
                  style={{
                    transform: isRTL ? 'rotate(180deg)' : 'none'
                  }}
                />
              </Link>

            </div>

          </motion.div>
        );

      })}

    </motion.div>

  </div>
</section>

      {/* Featured Courses */}
      <section className="py-20" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-end justify-between mb-12 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                style={{ backgroundColor: 'rgba(115,51,125,0.08)', border: '1px solid rgba(115,51,125,0.2)' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#73337d' }} />
                <span className="text-sm font-semibold" style={{ color: '#73337d' }}>{t('featured.title')}</span>
              </div>
              <p className="text-gray-500">{t('featured.subtitle')}</p>
            </div>
            <Link
              to="/courses"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
              style={{
                color: '#73337d',
                border: '2px solid #73337d',
                flexDirection: isRTL ? 'row-reverse' : 'row',
              }}
            >
              {t('featured.viewAll')}
              <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
            </Link>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={language === 'ar' ? course.titleAr : course.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: '#73337d' }}>
                    {language === 'ar'
                      ? { human: 'التطوير البشري', sales: 'المبيعات', nlp: 'البرمجة اللغوية', leadership: 'القيادة', pr: 'العلاقات العامة', technical: 'تقني' }[course.category] || course.category
                      : { human: 'Human Dev', sales: 'Sales', nlp: 'NLP', leadership: 'Leadership', pr: 'PR', technical: 'Technical' }[course.category] || course.category
                    }
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 leading-tight" style={{ fontSize: '1.05rem' }}>
                    {language === 'ar' ? course.titleAr : course.titleEn}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                    {language === 'ar' ? course.descAr : course.descEn}
                  </p>
                  <div className={`flex items-center gap-3 text-sm text-gray-500 mb-5 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-700">{course.rating}</span>
                    </div>
                    <span>·</span>
                    <span>{course.duration} {t('courses.hours')}</span>
                    <span>·</span>
                    <span>{course.students.toLocaleString()} {t('courses.students')}</span>
                  </div>
                  <div className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-xl font-bold" style={{ color: '#73337d' }}>
                      ${course.price}
                    </span>
                    <Link
                      to={`/courses/${course.id}`}
                      className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                      style={{ backgroundColor: '#73337d' }}
                    >
                      {t('featured.enroll')}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{ color: '#73337d', border: '2px solid #73337d' }}
            >
              {t('featured.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ order: isRTL ? 2 : 1 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '480px' }}>
                <ImageWithFallback
                  src={HERO_1}
                  alt="Why choose us"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(115,51,125,0.4), transparent)' }}
                />
              </div>
              {/* Floating card */}
              <div
                className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} bg-white rounded-2xl p-5 shadow-xl border border-gray-100`}
                style={{ maxWidth: '200px' }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8" style={{ color: '#73337d' }} />
                  <div>
                    <div className="font-bold text-gray-900">5,000+</div>
                    <div className="text-xs text-gray-500">{t('stats.students')}</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={isRTL ? 'text-right' : 'text-left'}
              style={{ order: isRTL ? 1 : 2 }}
            >
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                style={{ backgroundColor: 'rgba(115,51,125,0.08)', border: '1px solid rgba(115,51,125,0.2)' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#73337d' }} />
                <span className="text-sm font-semibold" style={{ color: '#73337d' }}>
                  {isRTL ? 'لماذا تختارنا' : 'Why Choose Us'}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {isRTL ? 'شريكك الموثوق في رحلتك التعليمية' : 'Your Trusted Partner in Your Educational Journey'}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                {isRTL
                  ? 'نحن نقدم خدمات تعليمية شاملة ومتكاملة، من القبولات الجامعية إلى الكورسات المهنية، مع دعم متواصل على مدار الساعة.'
                  : 'We provide comprehensive educational services, from university admissions to professional courses, with continuous support around the clock.'
                }
              </p>
              {[
                { en: 'Expert advisors with 10+ years of experience', ar: 'مستشارون خبراء بخبرة تزيد عن 10 سنوات' },
                { en: 'Partnerships with 120+ universities worldwide', ar: 'شراكات مع أكثر من 120 جامعة حول العالم' },
                { en: 'End-to-end support from application to enrollment', ar: 'دعم شامل من التقديم حتى التسجيل' },
                { en: 'Internationally certified professional courses', ar: 'كورسات مهنية معتمدة دولياً' },
                { en: '24/7 student support and follow-up', ar: 'دعم الطلاب ومتابعتهم على مدار الساعة' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#73337d' }} />
                  <span className="text-gray-700 text-sm">{isRTL ? item.ar : item.en}</span>
                </div>
              ))}
              <div className={`mt-8 flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <Link
                  to="/admissions"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: '#73337d' }}
                >
                  {t('hero.slide1.cta')}
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{ border: '2px solid #73337d', color: '#73337d' }}
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #73337d 0%, #4a2954 100%)' }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: 'white', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: 'white', transform: 'translate(30%, 30%)' }} />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              {t('cta.title')}
            </h2>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              {t('cta.desc')}
            </p>
            <div className={`flex flex-wrap gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link
                to="/admissions"
                className="px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ backgroundColor: 'white', color: '#73337d' }}
              >
                {t('cta.primary')}
              </Link>
              <Link
                to="/courses"
                className="px-8 py-4 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.4)' }}
              >
                {t('cta.secondary')}
              </Link>
            </div>

            {/* Contact bar */}
            <div className={`mt-10 flex items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <a
                href="tel:01020455489"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">010 20455489</span>
              </a>
              <span className="text-white/30">|</span>
              <a
                href="https://wa.me/201020455489"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
                style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
