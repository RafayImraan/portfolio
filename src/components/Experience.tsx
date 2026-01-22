import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiBookOpen, FiAward, FiCode, FiCalendar, FiMapPin, FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const timeline = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Science in Software Engineering',
    company: 'University of Karachi',
    location: 'Karachi, Pakistan',
    date: '2023 - Present',
    description: 'Currently pursuing BSc in Software Engineering, focusing on software development, data structures, algorithms, and modern web technologies.',
    achievements: [
      'Actively working on full-stack and data science projects',
      'Learning advanced concepts in software architecture',
      'Collaborating on group projects using Agile methodologies',
    ],
    tech: ['JavaScript', 'React', 'Node.js', 'Python', 'Data Structures'],
  },
  {
    id: 2,
    type: 'education',
    title: 'Diploma in Software Engineering',
    company: 'Aptech Learning',
    location: 'Karachi, Pakistan',
    date: '2022 - Present',
    description: 'Comprehensive software engineering diploma covering full-stack development, databases, and industry best practices.',
    achievements: [
      'First Prize in Speed Programming Competition (2023)',
      'Second Prize in Web Designing Competition (2023)',
      'Developed multiple real-world projects',
    ],
    tech: ['MERN Stack', 'Angular', 'PHP', 'SQL', 'MongoDB'],
  },
  {
    id: 3,
    type: 'achievement',
    title: 'First Prize - Speed Programming Competition',
    company: 'Aptech Learning',
    location: 'Karachi, Pakistan',
    date: '2023',
    description: 'Won first place in a competitive speed programming competition, demonstrating strong problem-solving skills and coding efficiency.',
    achievements: [
      'Competed against 50+ participants',
      'Solved complex algorithmic problems under time pressure',
      'Demonstrated expertise in efficient coding practices',
    ],
    tech: ['Problem Solving', 'Algorithms', 'Data Structures', 'Time Management'],
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Second Prize - Web Designing Competition',
    company: 'Aptech Learning',
    location: 'Karachi, Pakistan',
    date: '2023',
    description: 'Secured second place in web design competition, showcasing creative design skills and modern web development techniques.',
    achievements: [
      'Created responsive and visually appealing web designs',
      'Implemented modern UI/UX principles',
      'Used cutting-edge CSS and JavaScript techniques',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX'],
  },
  {
    id: 5,
    type: 'education',
    title: 'Intermediate (Pre-Engineering)',
    company: 'Adamjee Govt. Science College',
    location: 'Karachi, Pakistan',
    date: '2020 - 2022',
    description: 'Completed intermediate education with focus on science subjects including Physics, Chemistry, and Mathematics.',
    achievements: [
      'Strong foundation in mathematics and physics',
      'Developed analytical thinking skills',
      'Prepared for engineering and technology career path',
    ],
    tech: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science'],
  },
  {
    id: 6,
    type: 'education',
    title: 'Matriculation',
    company: 'KBV CAA Model School and College',
    location: 'Karachi, Pakistan',
    date: '2018 - 2020',
    description: 'Completed matriculation with science subjects, building foundational knowledge for future technical studies.',
    achievements: [
      'Completed with good academic standing',
      'Active participation in science activities',
      'Developed interest in technology and computers',
    ],
    tech: ['Science', 'Mathematics', 'Computer Basics'],
  },
];

const typeIcons = {
  work: FiBriefcase,
  education: FiBookOpen,
  certification: FiAward,
  achievement: FiCode,
};

const typeColors = {
  work: 'from-indigo-500 to-purple-500',
  education: 'from-green-500 to-teal-500',
  certification: 'from-orange-500 to-red-500',
  achievement: 'from-pink-500 to-rose-500',
};

export function Experience() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className={`relative py-24 ${
      theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-100/50'
    }`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold mb-4">
            Journey
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Experience & Education
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A timeline of my professional journey, educational background, and key achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative flex flex-row overflow-x-auto md:flex-col md:overflow-visible"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
        >
          {/* Timeline line */}
          <div className={`hidden md:block absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${
            theme === 'dark' ? 'bg-slate-700' : 'bg-gray-300'
          }`} />

          {timeline.map((item, i) => {
            const Icon = typeIcons[item.type as keyof typeof typeIcons];
            const colorClass = typeColors[item.type as keyof typeof typeColors];
            const isExpanded = expandedId === item.id;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex-shrink-0 w-80 mr-4 md:flex md:items-start md:mb-8 md:w-auto md:mr-0 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 md:left-8 md:top-auto z-10 w-4 h-4 rounded-full bg-gradient-to-br ${colorClass}`}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content */}
                <div className={`mt-4 md:ml-0 md:w-1/2 ${
                  isLeft ? 'md:pl-8' : 'md:pr-8'
                }`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    onClick={() => toggleExpand(item.id)}
                    className={`cursor-pointer p-6 rounded-2xl transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-800/80 hover:bg-slate-800'
                        : 'bg-white hover:shadow-lg'
                    } border ${
                      theme === 'dark'
                        ? isExpanded ? 'border-indigo-500/50' : 'border-slate-700'
                        : isExpanded ? 'border-indigo-300' : 'border-gray-200'
                    }`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${colorClass}`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <h3 className={`font-bold ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {item.company}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}
                      >
                        <FiChevronDown />
                      </motion.div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 mb-3 text-sm">
                      <span className={`flex items-center gap-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <FiCalendar size={14} />
                        {item.date}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <FiMapPin size={14} />
                        {item.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          {/* Achievements */}
                          <div className="mb-4">
                            <h4 className={`text-sm font-semibold mb-2 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                              Key Highlights:
                            </h4>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.1 }}
                                  className={`flex items-start gap-2 text-sm ${
                                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                                  }`}
                                >
                                  <span className="text-indigo-500 mt-1">•</span>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                              <span
                                key={tech}
                                className={`px-2 py-1 rounded-md text-xs ${
                                  theme === 'dark'
                                    ? 'bg-indigo-500/20 text-indigo-300'
                                    : 'bg-indigo-100 text-indigo-700'
                                }`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
