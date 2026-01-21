import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiCalendar, FiCode, FiHeart, FiAward, FiCoffee } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const personalInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Karachi, Pakistan' },
  { icon: FiCalendar, label: 'Education', value: 'BSc SE (2023-Present)' },
  { icon: FiCode, label: 'Projects', value: '6+' },
  { icon: FiCoffee, label: 'Coffee/Day', value: '∞' },
];

const interests = [
  'Web Development', 'MERN Stack', 'Data Science', 'Machine Learning', 
  'Python', 'React', 'Angular', 'Power BI'
];

const achievements = [
  { icon: FiAward, title: '1st Prize Speed Programming', value: '2023' },
  { icon: FiCode, title: '2nd Prize Web Design', value: '2023' },
  { icon: FiHeart, title: 'Aptech Learning', value: 'Karachi' },
];

export function About() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-semibold mb-4">
            About Me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Get to Know Me
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional, and user-centered digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative group">
              {/* Gradient background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-50 transition-opacity" />
              
              {/* Main card */}
              <div className={`relative p-8 rounded-3xl ${
                theme === 'dark' ? 'bg-slate-800/80' : 'bg-white/80'
              } backdrop-blur-sm border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              }`}>
                {/* Avatar */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1">
                      <div className={`w-full h-full rounded-full flex items-center justify-center text-5xl font-bold ${
                        theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'
                      }`}>
                        AR
                      </div>
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 flex items-center justify-center"
                      style={{ borderColor: theme === 'dark' ? '#1e293b' : '#fff' }}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-xs">✓</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4">
                  {personalInfo.map((info, i) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`p-4 rounded-xl ${
                        theme === 'dark' ? 'bg-slate-700/50' : 'bg-gray-100'
                      }`}
                    >
                      <info.icon className="text-indigo-500 mb-2" size={20} />
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>{info.label}</p>
                      <p className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}>{info.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Bio */}
            <div>
              <h3 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm Abdul Rafay Imran! 👋
              </h3>
              <p className={`text-lg leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a Software Engineering student at University of Karachi, currently pursuing 
                my BSc degree. I'm also completing a Diploma in Software Engineering at Aptech Learning. 
                I specialize in full-stack development with MERN Stack and data analysis with Python.
              </p>
              <p className={`text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I have strong skills in JavaScript, React, Angular, Node.js, Express.js, and Python for data science 
                (Pandas, Matplotlib, Seaborn). I believe in effective communication, teamwork, problem-solving, 
                and continuous learning to stay ahead in the tech industry.
              </p>
            </div>

            {/* Interests */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                Interests & Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium cursor-default ${
                      theme === 'dark'
                        ? 'bg-indigo-500/20 text-indigo-300'
                        : 'bg-indigo-100 text-indigo-700'
                    }`}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement, i) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`p-4 rounded-xl text-center ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-slate-800 to-slate-700'
                      : 'bg-gradient-to-br from-gray-100 to-white'
                  } border ${
                    theme === 'dark' ? 'border-slate-600' : 'border-gray-200'
                  }`}
                >
                  <achievement.icon className="mx-auto text-indigo-500 mb-2" size={24} />
                  <p className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>{achievement.value}</p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>{achievement.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
