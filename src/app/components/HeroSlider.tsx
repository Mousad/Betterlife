import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1762438135616-926e87b91e08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    titleKey: 'hero.slide1.title',
    descKey: 'hero.slide1.desc',
    ctaKey: 'hero.slide1.cta',
    ctaPath: '/admissions',
    accent: '#73337d',
    
  },
  {
    image: 'https://images.unsplash.com/photo-1758611974775-39e307bc3da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    titleKey: 'hero.slide2.title',
    descKey: 'hero.slide2.desc',
    ctaKey: 'hero.slide2.cta',
    ctaPath: '/courses',
    accent: '#4a2954',
    overlay: 'linear-gradient(120deg, rgba(26,10,30,0.85) 0%, rgba(115,51,125,0.7) 100%)',
  },
];

export function HeroSlider() {
  const { t, isRTL } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, isAutoPlaying]);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 0px)', minHeight: '600px', maxHeight: '850px' }}>
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={slide.image}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ background: slide.overlay }}
          />
          {/* Decorative overlay pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className={`max-w-2xl ${isRTL ? 'text-right ml-auto' : 'text-left'}`}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}
              >
                
                <span className="text-white text-sm font-medium">
                  {isRTL ? 'Better Life للقبولات والكورسات' : 'Better Life Admissions & Courses'}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white mb-6 leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                  fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                }}
              >
                {t(slide.titleKey)}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/85 mb-8 leading-relaxed"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  maxWidth: '520px',
                  fontFamily: isRTL ? "'Cairo', sans-serif" : "'Inter', sans-serif",
                }}
              >
                {t(slide.descKey)}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                <Link
                  to={slide.ctaPath}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#73337d',
                    fontSize: '1rem',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                  }}
                >
                  {t(slide.ctaKey)}
                  <ArrowRight className="w-5 h-5" style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'white',
                    fontSize: '1rem',
                  }}
                >
                  {isRTL ? 'تواصل معنا' : 'Contact Us'}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      
    


      {/* Progress Bar */}
      {isAutoPlaying && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-1" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
          <motion.div
            key={current}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 6, ease: 'linear' }}
            className="h-full"
            style={{ backgroundColor: '#73337d' }}
          />
        </div>
      )}
    </section>
  );
}
