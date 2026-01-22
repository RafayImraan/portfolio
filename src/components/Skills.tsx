import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { RadialBarChart, RadialBar, ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useTheme } from '../context/ThemeContext';

const skillCategories = [
  {
    name: 'Frontend',
    color: '#6366f1',
    skills: [
      { name: 'React JS', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'JavaScript', level: 90 },
      { name: 'PHP', level: 70 },
    ],
  },
  {
    name: 'Backend',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 85 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    name: 'Data Science',
    color: '#ec4899',
    skills: [
      { name: 'Pandas', level: 85 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Seaborn', level: 80 },
      { name: 'Power BI', level: 75 },
    ],
  },
  {
    name: 'Database',
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'Database Design', level: 75 },
    ],
  },
];

const overallSkills = [
  { name: 'Frontend', value: 85, fill: '#6366f1' },
  { name: 'Backend', value: 82, fill: '#8b5cf6' },
  { name: 'Data Science', value: 80, fill: '#ec4899' },
  { name: 'Database', value: 80, fill: '#f59e0b' },
];

const technologies = [
  'JavaScript', 'React JS', 'Angular', 'Node.js', 'Express.js', 'PHP',
  'Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis',
  'MongoDB', 'SQL', 'MySQL', 'Power BI', 'MS Office', 'Canva',
  'Git', 'GitHub', 'REST API', 'JWT Auth', 'Machine Learning',
];

export function Skills() {
  const { theme } = useTheme();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className={`relative py-24 ${
      theme === 'dark' ? 'bg-slate-900/50' : 'bg-gray-100/50'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 text-sm font-semibold mb-4">
            Skills & Expertise
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            My Technical Arsenal
          </h2>
          <p className={`max-w-3xl mx-auto text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            A comprehensive overview of my technical skills and proficiency levels across various technologies.
          </p>
        </motion.div>

        {/* Main Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Radial Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`p-6 rounded-3xl ${
              theme === 'dark' ? 'bg-slate-800/80' : 'bg-white'
            } border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-xl font-bold mb-4 text-center ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Overall Proficiency
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="20%"
                  outerRadius="100%"
                  data={overallSkills}
                  startAngle={180}
                  endAngle={0}
                >
                  <RadialBar
                    dataKey="value"
                    cornerRadius={10}
                    background={{ fill: theme === 'dark' ? '#1e293b' : '#f1f5f9' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      color: theme === 'dark' ? '#fff' : '#000',
                    }}
                  />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {overallSkills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: skill.fill }}
                  />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`p-4 sm:p-6 rounded-3xl ${
              theme === 'dark' ? 'bg-slate-800/80' : 'bg-white'
            } border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg sm:text-xl font-bold mb-4 text-center ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Skill Distribution
            </h3>
            <div className="h-48 sm:h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={overallSkills}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {overallSkills.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: theme === 'dark' ? '#1e293b' : '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      color: theme === 'dark' ? '#fff' : '#000',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className={`text-center text-xs sm:text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Balanced expertise across the full stack
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`p-6 rounded-3xl ${
              theme === 'dark' ? 'bg-slate-800/80' : 'bg-white'
            } border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-xl font-bold mb-6 text-center ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Quick Stats
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Education', value: 'BSc SE' },
                { label: 'Technologies', value: '20+' },
                { label: 'Projects Completed', value: '6+' },
                { label: 'Competitions Won', value: '2' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className={`flex justify-between items-center p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-slate-700/50' : 'bg-gray-100'
                  }`}
                >
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>{stat.label}</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-slate-800/80' : 'bg-white'
            } border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h4 className="text-lg font-bold mb-4 text-green-500">
              🌐 Languages
            </h4>
            <div className="flex flex-wrap gap-3">
              {['English', 'Urdu'].map((lang) => (
                <span
                  key={lang}
                  className={`px-4 py-2 rounded-xl text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-slate-800/80' : 'bg-white'
            } border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            <h4 className="text-lg font-bold mb-4 text-cyan-500">
              💡 Soft Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                'Effective Communication',
                'Teamwork & Collaboration',
                'Problem-Solving',
                'Adaptability',
                'Time Management',
                'Critical Thinking',
              ].map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-cyan-500/20 text-cyan-300'
                      : 'bg-cyan-100 text-cyan-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              className={`p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-slate-800/80' : 'bg-white'
              } border ${
                theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
              }`}
            >
              <h4
                className="text-lg font-bold mb-4"
                style={{ color: category.color }}
              >
                {category.name}
              </h4>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{skill.name}</span>
                      <span className={`text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>{skill.level}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${
                      theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: category.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={`p-8 rounded-3xl ${
            theme === 'dark' ? 'bg-slate-800/50' : 'bg-white/50'
          } border ${
            theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.02 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className={`px-4 py-2 rounded-xl text-sm font-medium cursor-default transition-all ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-slate-700 to-slate-600 text-white hover:from-indigo-600 hover:to-purple-600'
                    : 'bg-gradient-to-br from-gray-100 to-white text-gray-700 hover:from-indigo-100 hover:to-purple-100'
                } border ${
                  theme === 'dark' ? 'border-slate-600' : 'border-gray-200'
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
