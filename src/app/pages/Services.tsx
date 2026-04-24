import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { FileCheck, Shield, Users, BookOpen, ArrowRight, CheckCircle, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t, isRTL, language } = useLanguage();

  const services = [
    {
      icon: FileCheck,
      titleKey: 'servicesPage.equivalency.title',
      descKey: 'servicesPage.equivalency.desc',
      color: '#2d7dd2',
      bg: 'rgba(45,125,210,0.06)',
      features: {
        en: ['University degree equivalency', 'Professional certificate recognition', 'Ministry-approved process', 'Fast turnaround time', 'Document translation services'],
        ar: ['معادلة شهادات الجامعة', 'الاعتراف بالشهادات المهنية', 'عملية معتمدة من الوزارة', 'وقت معالجة سريع', 'خدمات ترجمة المستندات'],
      },
    },
    {
      icon: Shield,
      titleKey: 'servicesPage.authentication.title',
      descKey: 'servicesPage.authentication.desc',
      color: '#27ae60',
      bg: 'rgba(39,174,96,0.06)',
      features: {
        en: ['Official document authentication', 'Apostille services', 'Embassy legalization', 'Academic transcripts', 'Birth & civil certificates'],
        ar: ['توثيق المستندات الرسمية', 'خدمات الأبوستيل', 'التصديق من السفارة', 'كشوف الدرجات الأكاديمية', 'شهادات الميلاد والوثائق المدنية'],
      },
    },
    {
      icon: Users,
      titleKey: 'servicesPage.consulting.title',
      descKey: 'servicesPage.consulting.desc',
      color: '#e67e22',
      bg: 'rgba(230,126,34,0.06)',
      features: {
        en: ['Free initial consultation', 'University selection guidance', 'Scholarship assistance', 'Career path planning', 'Post-graduation support'],
        ar: ['استشارة أولية مجانية', 'إرشاد اختيار الجامعة', 'مساعدة في المنح الدراسية', 'تخطيط المسار المهني', 'دعم ما بعد التخرج'],
      },
    },
    {
      icon: BookOpen,
      titleKey: 'servicesPage.training.title',
      descKey: 'servicesPage.training.desc',
      color: '#73337d',
      bg: 'rgba(115,51,125,0.06)',
      features: {
        en: ['Corporate training programs', 'Individual coaching sessions', 'Leadership workshops', 'Soft skills development', 'Technical certifications'],
        ar: ['برامج التدريب المؤسسي', 'جلسات التدريب الفردي', 'ورش عمل القيادة', 'تطوير المهارات الناعمة', 'الشهادات التقنية'],
      },
    },
  ];

  const processSteps = [
    { en: 'Contact us', ar: 'تواصل معنا', icon: '📞' },
    { en: 'Free consultation', ar: 'استشارة مجانية', icon: '💬' },
    { en: 'Submit documents', ar: 'تقديم المستندات', icon: '📄' },
    { en: 'Processing', ar: 'المعالجة', icon: '⚙️' },
    { en: 'Receive results', ar: 'استلام النتائج', icon: '✅' },
  ];

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Hero */}
     <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url('https://i.pinimg.com/1200x/6a/5a/ac/6a5aac0bf1e23adf235fe913213a05c3.jpg ')`,
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            
            <h1 className="text-white text-4xl font-bold mb-4">{t('servicesPage.title')}</h1>
            <p className="text-white/80 text-lg">{t('servicesPage.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map(({ icon: Icon, titleKey, descKey, color, bg, features }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}
              >
                <div className="flex items-start gap-5 mb-6" style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon className="w-7 h-7" style={{ color }} />
                  </div>
                  <div className={isRTL ? 'text-right' : ''}>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{t(titleKey)}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{t(descKey)}</p>
                  </div>
                </div>

                <div className="space-y-2.5 mb-6">
                  {(language === 'ar' ? features.ar : features.en).map((f, fi) => (
                    <div key={fi} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color }} />
                      <span className="text-gray-700 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:shadow-md"
                  style={{ backgroundColor: color, flexDirection: isRTL ? 'row-reverse' : 'row' }}
                >
                  {t('servicesPage.getStarted')}
                  <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              {isRTL ? 'كيف نعمل' : 'How It Works'}
            </h2>
            <p className="text-gray-500">
              {isRTL ? 'عملية بسيطة وشفافة في 5 خطوات' : 'A simple and transparent process in 5 steps'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-full w-full h-px"
                    style={{ background: 'linear-gradient(to right, #73337d33, transparent)', zIndex: 0 }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mx-auto mb-3 relative z-10"
                  style={{ backgroundColor: 'rgba(115,51,125,0.1)', border: '3px solid rgba(115,51,125,0.3)' }}
                >
                  {step.icon}
                </div>
                <div className="text-xs font-bold mb-1" style={{ color: '#73337d' }}>0{i + 1}</div>
                <p className="text-sm font-semibold text-gray-700">
                  {language === 'ar' ? step.ar : step.en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {isRTL ? 'هل تحتاج مساعدة؟ نحن هنا!' : 'Need Help? We\'re Here!'}
            </h2>
            <p className="text-gray-500 mb-8">
              {isRTL ? 'تواصل مع فريقنا المتخصص للحصول على استشارة مجانية' : 'Contact our specialized team for a free consultation'}
            </p>
            <div className={`flex flex-wrap gap-4 justify-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Link
                to="/contact"
                className="px-7 py-3 rounded-xl text-white text-sm font-semibold hover:opacity-90 transition-all hover:shadow-lg"
                style={{ backgroundColor: '#73337d' }}
              >
                {t('nav.contact')}
              </Link>
              <a
                href="https://wa.me/201020455489"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-xl text-sm font-semibold transition-all hover:bg-gray-50"
                style={{ border: '2px solid #73337d', color: '#73337d' }}
              >
                {isRTL ? 'واتساب' : 'WhatsApp'}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
