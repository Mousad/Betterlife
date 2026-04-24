import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { GraduationCap, Globe, CheckCircle, ArrowRight, MapPin, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Countries() {
  const { t, isRTL, language } = useLanguage();
  const [activeCountry, setActiveCountry] = useState(0);

  const countries = [
    {
      nameEn: 'Egypt',
      nameAr: 'مصر',
      flag: '🇪🇬',
      image: 'https://i.pinimg.com/736x/7d/3b/f2/7d3bf2613aadf24c71d67d8a0a6e53fe.jpg',
      titleKey: 'countriesPage.egypt.title',
      descKey: 'countriesPage.egypt.desc',
      universities: {
        en: ['Cairo University', 'Ain Shams University', 'Alexandria University', 'MSA University', 'Future University in Egypt', 'German University in Cairo', 'Misr International University', 'Nile University'],
        ar: ['جامعة القاهرة', 'جامعة عين شمس', 'جامعة الإسكندرية', 'جامعة MSA', 'جامعة المستقبل', 'الجامعة الألمانية بالقاهرة', 'جامعة مصر الدولية', 'جامعة النيل'],
      },
      requirements: {
        en: ['High school certificate (Thanaweya)', 'Minimum GPA of 65%', 'Valid passport copy', 'Personal photos (white background)', 'Health certificate', 'Arabic proficiency (for Arabic programs)'],
        ar: ['شهادة الثانوية العامة (الثانوية)', 'معدل تراكمي لا يقل عن 65%', 'نسخة من جواز السفر ساري المفعول', 'صور شخصية (خلفية بيضاء)', 'شهادة صحية', 'إتقان اللغة العربية (للبرامج العربية)'],
      },
      steps: {
        en: ['Submit application form online', 'Upload required documents', 'Pay application fee', 'Receive acceptance letter', 'Apply for student visa', 'Arrival & registration'],
        ar: ['تقديم نموذج الطلب إلكترونياً', 'رفع المستندات المطلوبة', 'دفع رسوم التقديم', 'استلام خطاب القبول', 'التقديم للتأشيرة الطلابية', 'الوصول والتسجيل'],
      },
      stats: { unis: '40+', cost: '$2,000 - $8,000/yr', duration: '4-6 years' },
      statsAr: { unis: '+40', cost: '2,000 - 8,000 دولار/سنة', duration: '4-6 سنوات' },
      accent: '#e74c3c',
    },
    {
      nameEn: 'Turkey',
      nameAr: 'تركيا',
      flag: '🇹🇷',
      image: 'https://i.pinimg.com/736x/26/fc/ab/26fcab53124bf344b602cb54a9fa00d7.jpg',
      titleKey: 'countriesPage.turkey.title',
      descKey: 'countriesPage.turkey.desc',
      universities: {
        en: ['Istanbul University', 'Ankara University', 'Bogazici University', 'Middle East Technical University', 'Bilkent University', 'Sabanci University', 'Hacettepe University', 'Istanbul Technical University'],
        ar: ['جامعة إسطنبول', 'جامعة أنقرة', 'جامعة بوغازيتشي', 'جامعة الشرق الأوسط التقنية', 'جامعة بيلكنت', 'جامعة صبانجي', 'جامعة هاجتبه', 'جامعة إسطنبول التقنية'],
      },
      requirements: {
        en: ['High school diploma', 'YÖS exam or SAT scores', 'Language proficiency (Turkish/English)', 'Passport copy', 'Academic transcripts', 'Application fee payment'],
        ar: ['شهادة الثانوية العامة', 'درجات امتحان YÖS أو SAT', 'إتقان اللغة (تركي/إنجليزي)', 'نسخة جواز السفر', 'كشوف الدرجات الأكاديمية', 'دفع رسوم التقديم'],
      },
      steps: {
        en: ['Choose your university & program', 'Prepare required documents', 'Submit online application', 'Take YÖS/SAT exams', 'Receive acceptance letter', 'Apply for student residence permit'],
        ar: ['اختر جامعتك وبرنامجك', 'جهّز المستندات المطلوبة', 'قدم الطلب إلكترونياً', 'أدِّ امتحانات YÖS/SAT', 'استلم خطاب القبول', 'قدم طلب إقامة الطالب'],
      },
      stats: { unis: '60+', cost: '$3,000 - $12,000/yr', duration: '4-6 years' },
      statsAr: { unis: '+60', cost: '3,000 - 12,000 دولار/سنة', duration: '4-6 سنوات' },
      accent: '#e74c3c',
    },
    {
      nameEn: 'Rwanda',
      nameAr: 'رواندا',
      flag: '🇷🇼',
      image: 'https://i.pinimg.com/736x/93/10/0d/93100d3c11cfc7a66ba74b6034023af9.jpg',
      titleKey: 'countriesPage.rwanda.title',
      descKey: 'countriesPage.rwanda.desc',
      universities: {
        en: ['University of Rwanda', 'Carnegie Mellon University Africa', 'African Leadership University', 'Mount Kenya University Rwanda', 'Institut Catholique de Kabgayi', 'Université Libre de Kigali'],
        ar: ['جامعة رواندا', 'جامعة كارنيغي ميلون أفريقيا', 'جامعة القيادة الأفريقية', 'جامعة ماونت كينيا رواندا', 'معهد كابغايي الكاثوليكي', 'جامعة كيغالي الحرة'],
      },
      requirements: {
        en: ['Secondary school certificate (A-Level)', 'English proficiency certificate', 'Valid passport', 'Medical health certificate', 'Police clearance certificate', 'Academic transcripts'],
        ar: ['شهادة الدراسة الثانوية (المستوى أ)', 'شهادة إتقان اللغة الإنجليزية', 'جواز سفر ساري', 'شهادة صحية', 'شهادة عدم السوابق الجنائية', 'كشوف الدرجات الأكاديمية'],
      },
      steps: {
        en: ['Select your program', 'Submit application and documents', 'Pay tuition deposit', 'Receive admission letter', 'Apply for student visa', 'Arrival & orientation'],
        ar: ['اختر برنامجك', 'قدم الطلب والمستندات', 'ادفع وديعة الرسوم الدراسية', 'استلم خطاب القبول', 'قدم طلب التأشيرة الطلابية', 'الوصول والتوجيه'],
      },
      stats: { unis: '15+', cost: '$2,500 - $7,000/yr', duration: '3-5 years' },
      statsAr: { unis: '+15', cost: '2,500 - 7,000 دولار/سنة', duration: '3-5 سنوات' },
      accent: '#27ae60',
    },
  ];

  const activeData = countries[activeCountry];

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url('https://i.pinimg.com/1200x/32/d9/fa/32d9fa718feaa270810395ffce6e3d1f.jpg')`,
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
           
            <h1 className="text-white text-4xl font-bold mb-4">{t('countriesPage.title')}</h1>
            <p className="text-white/80 text-lg">{t('countriesPage.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Country Selector Tabs */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex gap-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {countries.map((country, i) => (
              <button
                key={i}
                onClick={() => setActiveCountry(i)}
                className="flex items-center gap-3 px-8 py-5 text-sm font-semibold transition-all border-b-2"
                style={{
                  borderColor: activeCountry === i ? '#73337d' : 'transparent',
                  color: activeCountry === i ? '#73337d' : '#6b7280',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                }}
              >
                <span className="text-2xl">{country.flag}</span>
                <span>{language === 'ar' ? country.nameAr : country.nameEn}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Country Detail */}
      <section className="py-16" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeCountry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Country Hero Image + Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
              <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: '380px' }}>
                <ImageWithFallback
                  src={activeData.image}
                  alt={language === 'ar' ? activeData.nameAr : activeData.nameEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className={isRTL ? 'text-right' : 'text-left'}>
                <div className="text-5xl mb-4">{activeData.flag}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  {t(activeData.titleKey)}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{t(activeData.descKey)}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    {
                      label: isRTL ? 'جامعة شريكة' : 'Partner Unis',
                      value: language === 'ar' ? activeData.statsAr.unis : activeData.stats.unis
                    },
                    {
                      label: isRTL ? 'تكلفة سنوية' : 'Annual Cost',
                      value: language === 'ar' ? activeData.statsAr.cost : activeData.stats.cost
                    },
                    {
                      label: isRTL ? 'مدة الدراسة' : 'Duration',
                      value: language === 'ar' ? activeData.statsAr.duration : activeData.stats.duration
                    },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 text-center">
                      <div className="font-bold text-gray-900 text-sm">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all hover:shadow-lg"
                  style={{ backgroundColor: '#73337d', flexDirection: isRTL ? 'row-reverse' : 'row' }}
                >
                  {t('countriesPage.applyNow')}
                  <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                </Link>
              </div>
            </div>

            {/* Three columns: Universities, Requirements, Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Universities */}
              <div className={`bg-white rounded-2xl p-7 shadow-sm border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(115,51,125,0.1)' }}>
                    <GraduationCap className="w-5 h-5" style={{ color: '#73337d' }} />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('countriesPage.universities')}</h3>
                </div>
                <ul className="space-y-3">
                  {(language === 'ar' ? activeData.universities.ar : activeData.universities.en).map((uni, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#73337d' }} />
                      {uni}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className={`bg-white rounded-2xl p-7 shadow-sm border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(45,125,210,0.1)' }}>
                    <BookOpen className="w-5 h-5" style={{ color: '#2d7dd2' }} />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('countriesPage.requirements')}</h3>
                </div>
                <ul className="space-y-3">
                  {(language === 'ar' ? activeData.requirements.ar : activeData.requirements.en).map((req, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#27ae60' }} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Steps */}
              <div className={`bg-white rounded-2xl p-7 shadow-sm border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className={`flex items-center gap-3 mb-5 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(230,126,34,0.1)' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#e67e22' }} />
                  </div>
                  <h3 className="font-bold text-gray-900">{t('countriesPage.steps')}</h3>
                </div>
                <ol className="space-y-3">
                  {(language === 'ar' ? activeData.steps.ar : activeData.steps.en).map((step, i) => (
                    <li key={i} className={`flex items-start gap-3 text-sm text-gray-700 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: '#73337d' }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {isRTL ? 'هل أنت مستعد للتقديم؟' : 'Ready to Apply?'}
          </h2>
          <p className="text-gray-500 mb-8">
            {isRTL ? 'فريقنا مستعد لمساعدتك في كل خطوة من خطوات القبول' : 'Our team is ready to help you every step of the way'}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/admissions"
              className="px-7 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all hover:shadow-lg"
              style={{ backgroundColor: '#73337d' }}
            >
              {isRTL ? 'قدّم الآن' : 'Apply Now'}
            </Link>
            <a
              href="https://wa.me/201020455489"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50"
              style={{ border: '2px solid #73337d', color: '#73337d' }}
            >
              {isRTL ? 'واتساب' : 'WhatsApp Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
