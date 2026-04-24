import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, isRTL, language } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 5000);
  };

  const contactItems = [
    {
      icon: Phone,
      labelKey: 'contact.phone',
      value: '010 20455489',
      href: 'tel:01020455489',
      color: '#73337d',
      bg: 'rgba(115,51,125,0.08)',
    },
    {
      icon: () => (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      labelKey: 'contact.whatsapp',
      value: '010 20455489',
      href: 'https://wa.me/201020455489',
      color: '#27ae60',
      bg: 'rgba(39,174,96,0.08)',
    },
    {
      icon: Mail,
      labelKey: 'contact.email',
      value: 'info@betterlife-edu.com',
      href: 'mailto:info@betterlife-edu.com',
      color: '#2d7dd2',
      bg: 'rgba(45,125,210,0.08)',
    },
    {
      icon: Clock,
      labelKey: 'contact.hours',
      value: t('contact.hours.value'),
      href: null,
      color: '#e67e22',
      bg: 'rgba(230,126,34,0.08)',
    },
  ];

  const inputClass = `w-full px-4 py-3 rounded-xl border text-gray-900 text-sm focus:outline-none transition-all duration-200 ${isRTL ? 'text-right' : 'text-left'}`;

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Hero */}
      <section
  className="py-20 relative overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: `url('https://i.pinimg.com/736x/d6/47/01/d64701b73e330c032ff7b38b48468fa8.jpg')`,
  }}
>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

            <h1 className="text-white text-4xl font-bold mb-4">{t('contact.title')}</h1>
            <p className="text-white/80 text-lg">{t('contact.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactItems.map(({ icon: Icon, labelKey, value, href, color, bg }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 hover:-translate-y-1 ${isRTL ? 'text-right' : ''}`}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: bg }}>
                      <Icon style={{ color }} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 mb-1">{t(labelKey)}</span>
                    <span className="text-sm font-bold text-gray-900" dir="auto">{value}</span>
                  </a>
                ) : (
                  <div className={`flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${isRTL ? 'text-right' : ''}`}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: bg }}>
                      <Icon style={{ color }} />
                    </div>
                    <span className="text-xs font-semibold text-gray-500 mb-1">{t(labelKey)}</span>
                    <span className="text-sm font-bold text-gray-900" dir="auto">{value}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Form + WhatsApp */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  {isRTL ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <CheckCircle className="w-16 h-16 mb-4" style={{ color: '#73337d' }} />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {isRTL ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}
                    </h3>
                    <p className="text-gray-500">
                      {isRTL ? 'سنتواصل معك في أقرب وقت ممكن' : 'We\'ll get back to you as soon as possible'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                          {t('contact.form.name')} <span style={{ color: '#73337d' }}>*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className={inputClass}
                          style={{ borderColor: '#e5e7eb' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                          {t('contact.form.email')} <span style={{ color: '#73337d' }}>*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className={inputClass}
                          style={{ borderColor: '#e5e7eb' }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                          onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.form.subject')} <span style={{ color: '#73337d' }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className={`block text-sm font-medium text-gray-700 mb-2 ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.form.message')} <span style={{ color: '#73337d' }}>*</span>
                      </label>
                      <textarea
                        rows={6}
                        required
                        className={inputClass}
                        style={{ borderColor: '#e5e7eb', resize: 'none' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#73337d')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e5e7eb')}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-white font-bold text-sm hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                      style={{ backgroundColor: '#73337d' }}
                    >
                      <Send className="w-4 h-4" />
                      {t('contact.form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* WhatsApp CTA */}
              <div
                className="rounded-2xl p-6 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white/10" />
                <div className="relative z-10">
                  <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <h3 className={`font-bold text-xl mb-2 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'تحدث معنا الآن' : 'Chat With Us Now'}
                  </h3>
                  <p className={`text-white/85 text-sm mb-5 ${isRTL ? 'text-right' : ''}`}>
                    {isRTL ? 'نحن متاحون للإجابة على جميع استفساراتك' : 'We\'re available to answer all your questions'}
                  </p>
                  <a
                    href="https://wa.me/201020455489"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white font-semibold text-sm transition-all hover:bg-gray-50"
                    style={{ color: '#25d366' }}
                  >
                    {t('contact.whatsapp.btn')}
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${isRTL ? 'text-right' : 'text-left'}`}>
                <h3 className="font-bold text-gray-900 mb-5">
                  {isRTL ? 'معلومات سريعة' : 'Quick Info'}
                </h3>
                <div className="space-y-4">
                  {[
                    { en: 'Free initial consultation', ar: 'استشارة أولية مجانية', icon: '💬' },
                    { en: 'Response within 24 hours', ar: 'رد خلال 24 ساعة', icon: '⚡' },
                    { en: 'Expert team available', ar: 'فريق خبراء متاح', icon: '👥' },
                    { en: 'Support in Arabic & English', ar: 'دعم بالعربية والإنجليزية', icon: '🌍' },
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm text-gray-700">{language === 'ar' ? item.ar : item.en}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone direct */}
              <a
                href="tel:01020455489"
                className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5"
                style={{ flexDirection: isRTL ? 'row-reverse' : 'row' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(115,51,125,0.1)' }}>
                  <Phone className="w-6 h-6" style={{ color: '#73337d' }} />
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="text-xs text-gray-500 mb-0.5">{t('contact.phone')}</p>
                  <p className="font-bold text-gray-900" dir="ltr">010 20455489</p>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
