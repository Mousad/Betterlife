import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Star, Clock, Users, Award, CheckCircle, BookOpen, Download,
  Smartphone, RotateCcw, FileText, ArrowLeft, ArrowRight, ShoppingCart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { courses, categories } from '../data/coursesData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CourseDetails() {
  const { id } = useParams();
  const { t, isRTL, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'preview'>('overview');

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {isRTL ? 'الكورس غير موجود' : 'Course Not Found'}
          </h2>
          <Link to="/courses" className="px-5 py-2 rounded-xl text-white text-sm font-semibold" style={{ backgroundColor: '#73337d' }}>
            {isRTL ? 'العودة للكورسات' : 'Back to Courses'}
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'ar' ? course.titleAr : course.titleEn;
  const desc = language === 'ar' ? course.descAr : course.descEn;
  const objectives = language === 'ar' ? course.objectives.ar : course.objectives.en;
  const content = language === 'ar' ? course.content.ar : course.content.en;
  const instructor = language === 'ar' ? course.instructor.ar : course.instructor.en;
  const category = language === 'ar'
    ? categories.find((c) => c.key === course.category)?.ar
    : categories.find((c) => c.key === course.category)?.en;

  const tabs = [
    { key: 'overview', en: 'Overview', ar: 'نظرة عامة' },
    { key: 'content', en: 'Course Content', ar: 'محتوى الكورس' },
    { key: 'preview', en: 'Preview', ar: 'معاينة' },
  ];

  const includes = [
    { icon: Clock, en: `${course.duration} hours of content`, ar: `${course.duration} ساعة من المحتوى` },
    { icon: RotateCcw, en: 'Lifetime access', ar: 'وصول مدى الحياة' },
    { icon: Award, en: 'Certificate of completion', ar: 'شهادة إتمام' },
    { icon: Download, en: 'Downloadable resources', ar: 'موارد قابلة للتنزيل' },
    { icon: Smartphone, en: 'Mobile & desktop access', ar: 'وصول عبر الموبايل والكمبيوتر' },
  ];

  // Mock preview slides
  const previewSlides = [
    'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1766131822552-59074d945365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    'https://images.unsplash.com/photo-1607428122688-c0912ef0a671?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  ];

  return (
    <div className="min-h-screen pt-20" style={{ fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif" }}>
      {/* Hero */}
      <section
        className="py-14 relative"
        style={{ background: 'linear-gradient(135deg, #1a0a1e 0%, #3d1a45 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className={`flex items-center gap-2 text-sm text-white/60 mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition-colors">{t('nav.courses')}</Link>
            <span>/</span>
            <span className="text-white/40 truncate max-w-[200px]">{title}</span>
          </div>

          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10 ${isRTL ? 'lg:flex-row-reverse' : ''}`}>
            {/* Left: Course info */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`lg:col-span-2 ${isRTL ? 'text-right' : 'text-left'}`}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                {category}
              </span>
              <h1 className="text-white text-3xl font-bold mb-4 leading-tight">{title}</h1>
              <p className="text-white/75 text-base leading-relaxed mb-6">{desc}</p>

              {/* Stats row */}
              <div className={`flex flex-wrap gap-5 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`flex items-center gap-2 text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-white">{course.rating}</span>
                </div>
                <div className={`flex items-center gap-2 text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()} {t('courseDetails.enrolled')}</span>
                </div>
                <div className={`flex items-center gap-2 text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Clock className="w-4 h-4" />
                  <span>{course.duration} {t('courses.hours')}</span>
                </div>
                <div className={`flex items-center gap-2 text-white/80 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Award className="w-4 h-4" />
                  <span>{language === 'ar' ? course.levelAr : course.level}</span>
                </div>
              </div>

              {/* Instructor */}
              <div className={`flex items-center gap-3 mt-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#73337d' }}
                >
                  {instructor[0]}
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <span className="text-white/60 text-xs">{t('courseDetails.instructor')}</span>
                  <div className="text-white text-sm font-semibold">{instructor}</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Sticky pricing card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={course.image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }} />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-3xl font-bold" style={{ color: '#73337d' }}>${course.price}</span>
                    <span className="text-gray-400 text-sm line-through">${Math.round(course.price * 1.3)}</span>
                  </div>

                  <button
                    className="w-full py-4 rounded-xl text-white font-bold text-sm mb-3 hover:opacity-90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#73337d' }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {t('courseDetails.enroll')}
                  </button>
                  <button
                    className="w-full py-3 rounded-xl font-semibold text-sm mb-5 transition-all hover:bg-gray-50"
                    style={{ border: '2px solid #73337d', color: '#73337d' }}
                  >
                    {t('courseDetails.buy')}
                  </button>

                  <p className="text-center text-xs text-gray-400 mb-5">
                    {isRTL ? '30 يوم ضمان استرداد المال' : '30-Day Money-Back Guarantee'}
                  </p>

                  <div className={`space-y-3 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <p className="text-sm font-semibold text-gray-700">{t('courseDetails.includes')}:</p>
                    {includes.map(({ icon: Icon, en, ar }, i) => (
                      <div key={i} className={`flex items-center gap-3 text-sm text-gray-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#73337d' }} />
                        <span>{language === 'ar' ? ar : en}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-white border-b border-gray-100 sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex gap-0 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className="px-6 py-4 text-sm font-semibold transition-all duration-200 border-b-2"
                style={{
                  borderColor: activeTab === tab.key ? '#73337d' : 'transparent',
                  color: activeTab === tab.key ? '#73337d' : '#6b7280',
                }}
              >
                {language === 'ar' ? tab.ar : tab.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16" style={{ backgroundColor: '#f9f8f7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={isRTL ? 'text-right' : 'text-left'}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t('courseDetails.objectives')}</h2>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {objectives.map((obj, i) => (
                      <div key={i} className={`flex items-start gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#73337d' }} />
                        <span className="text-gray-700 text-sm leading-relaxed">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attachments section */}
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t('courseDetails.attachments')}</h2>
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  {[
                    { en: 'Course Syllabus.pdf', ar: 'مقرر الكورس.pdf', size: '2.4 MB' },
                    { en: 'Study Materials.zip', ar: 'مواد الدراسة.zip', size: '15.8 MB' },
                    { en: 'Certificate Template.pdf', ar: 'قالب الشهادة.pdf', size: '1.2 MB' },
                  ].map((file, i) => (
                    <div key={i} className={`flex items-center justify-between py-3 ${i < 2 ? 'border-b border-gray-100' : ''} ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <FileText className="w-5 h-5" style={{ color: '#73337d' }} />
                        <span className="text-sm text-gray-700">{language === 'ar' ? file.ar : file.en}</span>
                      </div>
                      <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <span className="text-xs text-gray-400">{file.size}</span>
                        <button
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
                          style={{ backgroundColor: 'rgba(115,51,125,0.08)', color: '#73337d' }}
                        >
                          <Download className="w-3 h-3" />
                          {isRTL ? 'تنزيل' : 'Download'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Content Tab */}
            {activeTab === 'content' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={isRTL ? 'text-right' : 'text-left'}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t('courseDetails.content')}</h2>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                  {content.map((module, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-4 p-5 ${i < content.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50 transition-colors cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                        style={{ backgroundColor: '#73337d' }}
                      >
                        {i + 1}
                      </div>
                      <div className={`flex-1 ${isRTL ? 'text-right' : ''}`}>
                        <p className="text-gray-800 text-sm font-medium">{module}</p>
                        <p className="text-gray-400 text-xs mt-0.5">
                          {isRTL ? `${(i % 3) + 3} محاضرات • ${(i * 10 + 30)} دقيقة` : `${(i % 3) + 3} lectures • ${i * 10 + 30} mins`}
                        </p>
                      </div>
                      <BookOpen className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Preview Tab */}
            {activeTab === 'preview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={isRTL ? 'text-right' : 'text-left'}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t('courseDetails.preview')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {previewSlides.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-shadow"
                      style={{ height: '200px' }}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Preview ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                  <div
                    className="rounded-2xl flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
                    style={{ height: '200px', backgroundColor: 'rgba(115,51,125,0.08)', border: '2px dashed rgba(115,51,125,0.3)' }}
                  >
                    <div className="text-center">
                      <BookOpen className="w-8 h-8 mx-auto mb-2" style={{ color: '#73337d' }} />
                      <p className="text-sm font-semibold" style={{ color: '#73337d' }}>
                        {isRTL ? 'المزيد من الصور' : 'More Slides'}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}