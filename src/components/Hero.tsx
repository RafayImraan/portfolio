import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope, FaCode, FaChevronDown, FaMapMarkerAlt } from 'react-icons/fa';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  if (hour < 21) return 'Good Evening';
  return 'Good Night';
};

const roles = [
  'Full-Stack Developer',
  'MERN Stack Enthusiast',
  'Machine Learning Engineer',
  'Data Analyst',
  'Python Developer',
  'Open Source Contributor'
];

// 3D Floating Objects
const FloatingObject = ({ delay, duration, className, children }: { delay: number, duration: number, className: string, children?: React.ReactNode }) => (
  <motion.div
    initial={{ y: 0, rotateY: 0, rotateX: 0 }}
    animate={{
      y: [0, -20, 0],
      rotateY: [0, 360],
      rotateX: [0, 15, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    className={className}
    style={{ transformStyle: 'preserve-3d' }}
  >
    {children}
  </motion.div>
);

// Animated Code Block
const FloatingCodeBlock = () => (
  <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="absolute right-4 top-1/4 hidden lg:block max-w-xs"
  >
    <div className="bg-gray-900/90 backdrop-blur-lg rounded-xl p-4 shadow-2xl border border-gray-700/50 transform perspective-1000 rotate-y-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-gray-500 text-xs ml-2">portfolio.py</span>
      </div>
      <pre className="text-sm text-gray-300 font-mono">
        <code>{`class Developer:
    def __init__(self):
        self.name = "Abdul Rafay"
        self.role = "Full-Stack Dev"
        self.skills = ["Python", "React",
                       "Node.js", "ML"]
    
    def say_hello(self):
        print("Welcome to my portfolio!")

dev = Developer()
dev.say_hello()`}</code>
      </pre>
    </div>
  </motion.div>
);

// Tech Stack Icons floating
const TechIcons = () => {
  const techs = [
    { icon: '⚛️', name: 'React', delay: 0, x: -150, y: -100 },
    { icon: '🐍', name: 'Python', delay: 0.5, x: 150, y: -80 },
    { icon: '🟢', name: 'Node.js', delay: 1, x: -200, y: 50 },
    { icon: '📊', name: 'ML', delay: 1.5, x: 180, y: 80 },
    { icon: '🗄️', name: 'MongoDB', delay: 2, x: -100, y: 150 },
    { icon: '📈', name: 'Analytics', delay: 2.5, x: 100, y: 130 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
      {techs.map((tech, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1, x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{
            delay: tech.delay + 1,
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute left-1/2 top-1/2 flex flex-col items-center"
          style={{ marginLeft: tech.x, marginTop: tech.y }}
        >
          <span className="text-4xl">{tech.icon}</span>
          <span className="text-xs text-gray-400 mt-1">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

// Stats Counter
const StatCounter = ({ value, label, suffix = '' }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
};

// Custom Cursor Effect
const CursorEffect = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className="fixed w-8 h-8 rounded-full border-2 border-indigo-500 pointer-events-none z-50 hidden lg:block mix-blend-difference"
      animate={{ x: position.x - 16, y: position.y - 16 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    />
  );
};

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [greeting, setGreeting] = useState(getGreeting());
  const [visitorLocation, setVisitorLocation] = useState<string | null>(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Update greeting every minute
    const greetingInterval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    // Try to get visitor location using Vite proxy
    fetch('/api/ip')
      .then(res => res.json())
      .then(data => {
        if (data.city && data.country_name) {
          setVisitorLocation(`${data.city}, ${data.country_name}`);
        }
      })
      .catch(() => {});

    return () => {
      clearInterval(roleInterval);
      clearInterval(greetingInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <CursorEffect />
      <TechIcons />
      <FloatingCodeBlock />

      {/* 3D Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingObject delay={0} duration={8} className="absolute top-20 left-20 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 blur-3xl">{null}</FloatingObject>
        <FloatingObject delay={2} duration={10} className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/20 to-orange-600/20 blur-3xl">{null}</FloatingObject>
        <FloatingObject delay={4} duration={12} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-600/20 to-blue-600/20 blur-3xl">{null}</FloatingObject>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting with Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              👋 {greeting}!
              {visitorLocation && (
                <span className="flex items-center gap-1 text-gray-400 text-sm ml-2">
                  <FaMapMarkerAlt className="text-xs" />
                  Visiting from {visitorLocation}
                </span>
              )}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="text-white">I'm </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Abdul Rafay
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
            <span className="text-white"> Imran</span>
          </motion.h1>

          {/* Role Rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="h-12 mb-8 overflow-hidden"
          >
            <motion.div
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-gray-300"
            >
              {roles[currentRole]}
            </motion.div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-green-400 text-sm font-medium">Available for Opportunities</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30">
              <FaMapMarkerAlt className="text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Karachi, Pakistan</span>
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaCode />
                View Projects
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <FaEnvelope />
              Contact Me
            </motion.button>

            <motion.a
              href="/Abdul Rafay Imran - CV.pdf"
              download="Abdul Rafay Imran - CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-4 mb-12"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/RafayImraan', label: 'GitHub', color: 'hover:text-white hover:bg-gray-800' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/rafayimraan', label: 'LinkedIn', color: 'hover:text-white hover:bg-blue-600' },
              { icon: FaTwitter, href: 'https://twitter.com/rafayimraan', label: 'Twitter', color: 'hover:text-white hover:bg-sky-500' }
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all ${color}`}
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <StatCounter value={5} label="Projects" suffix="+" />
            <StatCounter value={10} label="Technologies" suffix="+" />
            <StatCounter value={2} label="Years Learning" suffix="+" />
            <StatCounter value={2} label="Awards" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <FaChevronDown className="text-xl" />
        </motion.button>
      </motion.div>
    </section>
  );
}