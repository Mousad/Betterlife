import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // RTL direction
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  // 🔥 FIX: منع ظهور الهوم + منع scroll
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.admissions'), path: '/admissions' },
    { label: t('nav.courses'), path: '/courses' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.countries'), path: '/countries' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className={`flex items-center justify-between h-16 lg:h-20 ${
            isRTL ? 'flex-row-reverse' : 'flex-row'
          }`}
        >

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <img 
                src="https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/543373301_1192327992930638_6047528909729759757_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=lQGc_zq6QR8Q7kNvwEGHZ6f&_nc_oc=AdqC45y5jO33npRMu3rUjjrowi54qDCHc4S-K5b1mpuFhvptIFBAwIdXjxlRYjA7aLY&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=W5qZdNapVGGybZ8fgTamxg&oh=00_Af0F2VdOnN2VTFjPu4dtU5vTtmUOCT4sEx0QqlQ5SQvSAw&oe=69F0938D" 
                alt="Better Life Logo" 
                className="h-15 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={isActive(item.path) ? { backgroundColor: '#73337d' } : {}}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-3 py-0 text-sm font-semibold bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#73337d]"
            >
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

            <Link
              to="/admissions"
              className="hidden sm:flex items-center px-5 py-2 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: '#73337d' }}
            >
              {t('nav.applyNow')}
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
    <AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}

      // 🔥 مهم: ثابت بدون أي شفافية
      className="fixed inset-0 z-[99999] flex flex-col bg-gradient-to-br from-[#1b263b] to-[#415a77]"
    >

      {/* Close button */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className={`absolute top-6 ${isRTL ? 'left-6' : 'right-6'} z-[100000]`}
      >
        <X className="w-8 h-8 text-white" />
      </button>

      {/* Logo */}
      <div className="pt-10 flex justify-center">
        <img 
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHH3yGfiqFSKy014HigZPn7iaolJsc58xcek6Zaa0rnmlAuVDC"
          className="h-12 object-contain"
        />
      </div>

      {/* Menu Items */}
      <div className="mt-10 px-6 space-y-6 text-center text-white">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setIsMenuOpen(false)}
            className="block text-lg font-semibold hover:text-[#c4cbbb]"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 px-6">
        <Link
          to="/admissions"
          onClick={() => setIsMenuOpen(false)}
          className="block w-full py-3 rounded-xl bg-[#73337d] text-center font-semibold"
        >
          {t('nav.applyNow')}
        </Link>
      </div>

    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}