import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
const About = lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Skills = lazy(() => import('./components/Skills').then(module => ({ default: module.Skills })));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const Testimonials = lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const Awards = lazy(() => import('./components/Awards').then(module => ({ default: module.Awards })));
const TechStack = lazy(() => import('./components/TechStack').then(module => ({ default: module.TechStack })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { Chatbot } from './components/Chatbot';
import { ScrollProgress } from './components/ScrollProgress';
import { ThemeContext } from './context/ThemeContext';
import emailjs from '@emailjs/browser';
emailjs.init('_-lgo5epiymiuVHxv'); // your public key


export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [highContrast, setHighContrast] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  const toggleContrast = () => setHighContrast(prev => !prev);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, highContrast, toggleContrast }}>
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="h-24 w-24 rounded-full border-4 border-indigo-500/20" />
              <div className="absolute inset-0 h-24 w-24 rounded-full border-4 border-transparent border-t-indigo-500" />
            </motion.div>
            <motion.span
              className="absolute mt-36 text-xl font-bold text-white"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Abdul Rafay Imran
            </motion.span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className={`min-h-screen transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-slate-950 text-white' 
          : 'bg-gray-50 text-slate-900'
      } ${highContrast ? 'contrast-125' : ''}`}>
        <ParticleBackground />
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-indigo-500"></div></div>}>
            <About />
            <Skills />
            <TechStack />
            <Projects />
            <Experience />
            <Awards />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeContext.Provider>
  );
}
