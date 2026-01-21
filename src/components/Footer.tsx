import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ],
  resources: [
    { name: 'Resume', href: '/Abdul Rafay Imran - CV.pdf' },
    { name: 'GitHub', href: 'https://github.com/RafayImraan' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/abdulrafayimran' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/RafayImraan', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/abdulrafayimran', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:aburafayyy@gmail.com', label: 'Email' },
];

export function Footer() {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative py-16 ${
      theme === 'dark' ? 'bg-slate-900' : 'bg-gray-100'
    } border-t ${
      theme === 'dark' ? 'border-slate-800' : 'border-gray-200'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <motion.a
              href="#home"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-lg">
                AR
              </div>
              <span className={`text-lg font-bold ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Abdul Rafay Imran
              </span>
            </motion.a>
            <p className={`text-sm mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Software Engineering Student & Full-Stack Developer specializing in MERN Stack and Data Analytics.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark'
                      ? 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                      : 'bg-gray-200 text-gray-600 hover:text-slate-900 hover:bg-gray-300'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className={`text-sm transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 4 }}
                    className={`text-sm transition-colors ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-slate-900'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className={`font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Actions
            </h4>
            <div className="space-y-3">
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  theme === 'dark'
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </motion.button>
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
              >
                <FiArrowUp size={16} />
                Back to Top
              </motion.button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t mb-8 ${
          theme === 'dark' ? 'border-slate-800' : 'border-gray-200'
        }`} />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={`text-sm flex items-center gap-1 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © {new Date().getFullYear()} Abdul Rafay Imran. Made with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="text-red-500" />
            </motion.span>{' '}
            in Pakistan.
          </p>

          <div className="flex gap-4">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors ${
                  theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
    </footer>
  );
}
