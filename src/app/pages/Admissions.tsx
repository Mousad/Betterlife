import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, FileText, Globe, CheckCircle, Upload, Search, ArrowRight, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Admissions() {
  const { t, isRTL, language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    country: '', field: '', degree: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const countries = [
    { value: 'egypt', en: 'Egypt', ar: 'مصر' },
    { value: 'turkey', en: 'Turkey', ar: 'تركيا' },
    { value: 'rwanda', en: 'Rwanda', ar: 'رواندا' },
    { value: 'other', en: 'Other', ar: 'أخرى' },
  ];

  const degrees = [
    { value: 'bachelor', en: "Bachelor's Degree", ar: 'بكالوريوس' },
    { value: 'master', en: "Master's Degree", ar: 'ماجستير' },
    { value: 'phd', en: 'PhD', ar: 'دكتوراه' },
    { value: 'diploma', en: 'Diploma', ar: 'دبلوم' },
  ];

  const processSteps = [
    {
      icon: '💬',
      step: '01',
      titleKey: 'admissions.process.step1',
      descKey: 'admissions.process.step1.desc',
    },
    {
      icon: '📄',
      step: '02',
      titleKey: 'admissions.process.step2',
      descKey: 'admissions.process.step2.desc',
    },
    {
      icon: '🏛️',
      step: '03',
      titleKey: 'admissions.process.step3',
      descKey: 'admissions.process.step3.desc',
    },
    {
      icon: '📬',
      step: '04',
      titleKey: 'admissions.process.step4',
      descKey: 'admissions.process.step4.desc',
    },
    {
      icon: '✈️',
      step: '05',
      titleKey: 'admissions.process.step5',
      descKey: 'admissions.process.step5.desc',
    },
  ];

  const inputClass = `w-full px-4 py-3 rounded-xl border text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`;
  const inputStyle = { borderColor: '#e5e7eb', focusRingColor: '#73337d' };

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Hero */}
      <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url('https://i.pinimg.com/736x/12/bc/9e/12bc9e2d7d873fc96094f5db5c0c4973.jpg')`,
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            
            <h1 className="text-white text-4xl font-bold mb-4">{t('admissions.title')}</h1>
            <p className="text-white/80 text-lg">{t('admissions.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className={`text-center mb-14 ${isRTL ? 'text-right' : ''}`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t('admissions.process.title')}</h2>
          </motion.div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-transparent via-purple-200 to-transparent" />

           <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">

  {processSteps.map((step, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}

      className={`
        relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
        text-center hover:shadow-md transition-shadow

        ${isRTL ? 'text-right' : 'text-left'}

        /* 🔥 الموبايل: الكرت الخامس في النص */
        ${i === 4 ? 'col-span-2 flex justify-center' : ''}
      `}
    >

      <div className="flex flex-col items-center w-full">

        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-4 shadow-md"
          style={{ backgroundColor: 'rgba(115,51,125,0.1)', border: '3px solid #73337d' }}
        >
          {step.icon}
        </div>

        <span className="text-xs font-bold mb-2" style={{ color: '#73337d' }}>
          STEP {step.step}
        </span>

        <h3 className="font-bold text-gray-900 mb-2 text-sm">
          {t(step.titleKey)}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed">
          {t(step.descKey)}
        </p>

      </div>

    </motion.div>
  ))}

</div>
          </div>
        </div>
      </section>

      {/* Application Form + Tracking */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('admissions.form.title')}</h2>
                <p className="text-gray-500 text-sm">{isRTL ? 'أكمل النموذج أدناه وسيتواصل معك مستشارونا' : 'Complete the form below and our advisors will contact you'}</p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle className="w-16 h-16 mb-4" style={{ color: '#73337d' }} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {isRTL ? 'تم إرسال طلبك بنجاح!' : 'Application Submitted Successfully!'}
                  </h3>
                  <p className="text-gray-500">
                    {isRTL ? 'سيتواصل معك فريقنا قريباً' : 'Our team will contact you shortly'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('admissions.form.firstName')} <span style={{ color: '#73337d' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('admissions.form.lastName')} <span style={{ color: '#73337d' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('admissions.form.email')} <span style={{ color: '#73337d' }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('admissions.form.phone')} <span style={{ color: '#73337d' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('admissions.form.country')}
                      </label>
                      <select
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb', backgroundColor: 'white' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      >
                        <option value="">{t('common.selectOption')}</option>
                        {countries.map((c) => (
                          <option key={c.value} value={c.value}>{language === 'ar' ? c.ar : c.en}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('admissions.form.degree')}
                      </label>
                      <select
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb', backgroundColor: 'white' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={formData.degree}
                        onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                      >
                        <option value="">{t('common.selectOption')}</option>
                        {degrees.map((d) => (
                          <option key={d.value} value={d.value}>{language === 'ar' ? d.ar : d.en}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                      {t('admissions.form.field')}
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      style={{ borderColor: '#e5e7eb' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                      value={formData.field}
                      onChange={(e) => setFormData({ ...formData, field: e.target.value })}
                      placeholder={isRTL ? 'مثال: طب، هندسة، أعمال...' : 'e.g. Medicine, Engineering, Business...'}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                      {t('admissions.form.message')}
                    </label>
                    <textarea
                      rows={4}
                      className={inputClass}
                      style={{ borderColor: '#e5e7eb', resize: 'none' }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Document Upload */}
                  <div>
                    <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                      {t('admissions.form.documents')}
                    </label>
                    <div
                      className="border-2 border-dashed rounded-xl p-8 text-center cursor-pointer hover:border-purple-400 transition-colors"
                      style={{ borderColor: '#d1d5db' }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#d1d5db')}
                    >
                      <Upload className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                      <p className="text-gray-500 text-sm">
                        {isRTL ? 'اسحب الملفات هنا أو انقر للرفع' : 'Drag & drop files here or click to upload'}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">PDF, DOC, JPG — Max 10MB each</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-all duration-200 hover:shadow-lg"
                    style={{ backgroundColor: '#73337d' }}
                  >
                    {t('admissions.form.submit')}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Application Tracking */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Search className="w-5 h-5" style={{ color: '#73337d' }} />
                  <h3 className="font-bold text-gray-900">{t('admissions.tracking.title')}</h3>
                </div>
                <input
                  type="text"
                  placeholder={t('admissions.tracking.placeholder')}
                  className={`w-full px-4 py-3 rounded-xl border text-sm mb-3 ${isRTL ? 'text-right' : ''}`}
                  style={{ borderColor: '#e5e7eb' }}
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                />
                <button
                  className="w-full py-3 rounded-xl text-white text-sm font-semibold transition-all"
                  style={{ backgroundColor: '#73337d' }}
                >
                  {t('admissions.tracking.button')}
                </button>
              </div>

              {/* Why Apply with Us */}
              <div className="rounded-2xl p-6 border border-gray-100" style={{ backgroundColor: 'rgba(115,51,125,0.04)' }}>
                <h3 className={`font-bold text-gray-900 mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'لماذا التقديم معنا؟' : 'Why Apply with Us?'}
                </h3>
                {[
                  { icon: '✅', en: 'Free consultation', ar: 'استشارة مجانية' },
                  { icon: '🌍', en: '120+ partner universities', ar: '120+ جامعة شريكة' },
                  { icon: '⚡', en: 'Fast processing', ar: 'معالجة سريعة' },
                  { icon: '🎯', en: 'High acceptance rate', ar: 'نسبة قبول عالية' },
                  { icon: '🤝', en: 'Full support till enrollment', ar: 'دعم كامل حتى التسجيل' },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm text-gray-700">{language === 'ar' ? item.ar : item.en}</span>
                  </div>
                ))}
              </div>

              {/* Contact Card */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#73337d' }}>
                <h3 className={`font-bold mb-2 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'تحدث مع مستشار' : 'Talk to an Advisor'}
                </h3>
                <p className={`text-white/80 text-sm mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {isRTL ? 'احصل على استشارة مجانية مع متخصصينا' : 'Get a free consultation with our experts'}
                </p>
                <a
                  href="https://wa.me/201020455489"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-white transition-all hover:bg-gray-50"
                  style={{ color: '#73337d' }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {isRTL ? 'واتساب الآن' : 'WhatsApp Now'}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
