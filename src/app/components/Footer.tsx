import React from 'react';
import { Link } from 'react-router';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.admissions'), path: '/admissions' },
    { label: t('nav.courses'), path: '/courses' },
    { label: t('nav.services'), path: '/services' },
    { label: t('nav.countries'), path: '/countries' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const services = [
    { label: t('services.admissions.title'), path: '/admissions' },
    { label: t('services.equivalency.title'), path: '/services' },
    { label: t('services.authentication.title'), path: '/services' },
    { label: t('services.courses.title'), path: '/courses' },
  ];

  return (
    <footer style={{ backgroundColor: '#1a0a1e' }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className={`lg:col-span-1 ${isRTL ? 'text-right' : 'text-left'}`}>
            <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
             
  

              <div className={isRTL ? 'text-right' : 'text-left'}>
               <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <img 
                src="https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-1/543373301_1192327992930638_6047528909729759757_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=lQGc_zq6QR8Q7kNvwEGHZ6f&_nc_oc=AdqC45y5jO33npRMu3rUjjrowi54qDCHc4S-K5b1mpuFhvptIFBAwIdXjxlRYjA7aLY&_nc_zt=24&_nc_ht=scontent.fcai19-7.fna&_nc_gid=W5qZdNapVGGybZ8fgTamxg&oh=00_Af0F2VdOnN2VTFjPu4dtU5vTtmUOCT4sEx0QqlQ5SQvSAw&oe=69F0938D" 
                alt="Better Life Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
          </Link>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.tagline')}
            </p>
            {/* Social Links */}
            <div className={`flex gap-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
                { Icon: Linkedin, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#73337d')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h3 className="text-white font-semibold mb-5">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-2"
                    style={isRTL ? { flexDirection: 'row-reverse', justifyContent: 'flex-end' } : {}}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#73337d' }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        

          
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          <p className="text-gray-500 text-sm">
            © 2026 Better Life {t('footer.rights')}
          </p>
         
        </div>
      </div>
    </footer>
  );
}
