import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaTimes, FaChartBar } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiPandas, SiScikitlearn, SiAngular, SiPhp } from 'react-icons/si';

interface Tech {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
  proficiency: number;
  experience: string;
  projects: string[];
  description: string;
}

const technologies: Tech[] = [
  {
    name: 'Python',
    icon: FaPython,
    color: 'from-blue-400 to-yellow-400',
    category: 'Languages',
    proficiency: 90,
    experience: '2+ years',
    projects: ['Crop Yield Prediction', 'Car Price Prediction', 'Iris Classification', 'Employment Analysis'],
    description: 'Primary language for machine learning, data analysis, and automation projects.'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'from-yellow-400 to-yellow-600',
    category: 'Languages',
    proficiency: 88,
    experience: '2+ years',
    projects: ['MediCore Hospital System', 'Various Web Apps'],
    description: 'Core language for full-stack web development and interactive applications.'
  },
  {
    name: 'React',
    icon: FaReact,
    color: 'from-cyan-400 to-blue-500',
    category: 'Frontend',
    proficiency: 85,
    experience: '1.5+ years',
    projects: ['MediCore Hospital System', 'Portfolio Website'],
    description: 'Building modern, responsive user interfaces with component-based architecture.'
  },
  {
    name: 'Angular',
    icon: SiAngular,
    color: 'from-red-500 to-red-700',
    category: 'Frontend',
    proficiency: 75,
    experience: '1+ year',
    projects: ['Enterprise Applications'],
    description: 'Enterprise-grade applications with TypeScript and Angular framework.'
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: 'from-green-500 to-green-700',
    category: 'Backend',
    proficiency: 82,
    experience: '1.5+ years',
    projects: ['MediCore Hospital System', 'REST APIs'],
    description: 'Server-side JavaScript runtime for scalable backend applications.'
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: 'from-gray-400 to-gray-600',
    category: 'Backend',
    proficiency: 80,
    experience: '1.5+ years',
    projects: ['MediCore Hospital System', 'API Development'],
    description: 'Fast, unopinionated web framework for Node.js.'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: 'from-green-400 to-green-600',
    category: 'Databases',
    proficiency: 78,
    experience: '1+ year',
    projects: ['MediCore Hospital System'],
    description: 'NoSQL database for flexible, document-based data storage.'
  },
  {
    name: 'SQL',
    icon: FaDatabase,
    color: 'from-blue-500 to-indigo-600',
    category: 'Databases',
    proficiency: 80,
    experience: '2+ years',
    projects: ['Data Analysis Projects', 'Database Design'],
    description: 'Relational database management and complex query writing.'
  },
  {
    name: 'Pandas',
    icon: SiPandas,
    color: 'from-purple-500 to-indigo-600',
    category: 'Data Science',
    proficiency: 92,
    experience: '2+ years',
    projects: ['All ML Projects', 'Data Analysis'],
    description: 'Data manipulation and analysis library for Python.'
  },
  {
    name: 'Scikit-learn',
    icon: SiScikitlearn,
    color: 'from-orange-400 to-orange-600',
    category: 'Data Science',
    proficiency: 85,
    experience: '1.5+ years',
    projects: ['Crop Yield Prediction', 'Car Price Prediction', 'Iris Classification'],
    description: 'Machine learning library for predictive data analysis.'
  },
  {
    name: 'Power BI',
    icon: FaChartBar,
    color: 'from-yellow-400 to-amber-600',
    category: 'Visualization',
    proficiency: 75,
    experience: '1+ year',
    projects: ['Business Dashboards', 'Data Visualization'],
    description: 'Business intelligence and interactive data visualization.'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: 'from-cyan-400 to-teal-500',
    category: 'Frontend',
    proficiency: 90,
    experience: '1.5+ years',
    projects: ['Portfolio', 'MediCore', 'Web Apps'],
    description: 'Utility-first CSS framework for rapid UI development.'
  },
  {
    name: 'PHP',
    icon: SiPhp,
    color: 'from-indigo-400 to-purple-600',
    category: 'Backend',
    proficiency: 70,
    experience: '1+ year',
    projects: ['Web Development'],
    description: 'Server-side scripting for dynamic web applications.'
  }
];

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Data Science', 'Visualization'];

export function TechStack() {
  const [selectedTech, setSelectedTech] = useState<Tech | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(t => t.category === activeCategory);

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Tech Stack Explorer
          </h3>
          <p className="text-gray-400 mb-6">
            Click on any technology to see related projects and details
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 max-w-5xl mx-auto"
        >
          <AnimatePresence>
            {filteredTech.map((tech, idx) => (
              <motion.button
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedTech(tech)}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mb-2 group-hover:shadow-lg transition-shadow`}>
                  <tech.icon className="text-2xl text-white" />
                </div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">
                  {tech.name}
                </span>
                <div className="w-full h-1 mt-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    className={`h-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech Detail Modal */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedTech(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-slate-800 rounded-2xl p-6 max-w-md w-full border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedTech.color} flex items-center justify-center`}>
                      <selectedTech.icon className="text-3xl text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{selectedTech.name}</h3>
                      <span className="text-sm text-gray-400">{selectedTech.category}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{selectedTech.description}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Proficiency</span>
                      <span className="text-white font-medium">{selectedTech.proficiency}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedTech.proficiency}%` }}
                        className={`h-full bg-gradient-to-r ${selectedTech.color}`}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Experience</span>
                    <span className="text-white">{selectedTech.experience}</span>
                  </div>

                  <div>
                    <span className="text-gray-400 text-sm block mb-2">Related Projects</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedTech.projects.map((project, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs bg-gradient-to-r ${selectedTech.color} text-white`}
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}