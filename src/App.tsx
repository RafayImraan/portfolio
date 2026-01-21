import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import Projects from './components/Projects';
import { Experience } from './components/Experience';
import { Testimonials } from './components/Testimonials';
import { Awards } from './components/Awards';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';
import { Chatbot } from './components/Chatbot';
import { ScrollProgress } from './components/ScrollProgress';
import { ThemeContext } from './context/ThemeContext';

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
          <About />
          <Skills />
          <TechStack />
          <Projects />
          <Experience />
          <Awards />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeContext.Provider>
  );
}
