import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaGraduationCap } from 'react-icons/fa';

const awards = [
  {
    id: 1,
    title: 'First Prize - Speed Programming Competition',
    organization: 'Aptech Learning, Karachi',
    year: '2023',
    icon: FaTrophy,
    color: 'from-yellow-400 to-amber-600',
    description: 'Won first place in a competitive speed programming contest, solving complex algorithmic problems under time pressure.',
    badge: '🥇'
  },
  {
    id: 2,
    title: 'Second Prize - Web Designing Competition',
    organization: 'Aptech Learning, Karachi',
    year: '2023',
    icon: FaMedal,
    color: 'from-gray-300 to-gray-500',
    description: 'Awarded second place for creating an innovative, responsive web design with modern UI/UX principles.',
    badge: '🥈'
  },
  {
    id: 3,
    title: 'Diploma in Software Engineering',
    organization: 'Aptech Learning, Karachi',
    year: '2022 - Present',
    icon: FaCertificate,
    color: 'from-blue-400 to-indigo-600',
    description: 'Pursuing comprehensive software engineering diploma covering full-stack development, databases, and software architecture.',
    badge: '📜'
  },
  {
    id: 4,
    title: 'BS Software Engineering',
    organization: 'University of Karachi',
    year: '2023 - Present',
    icon: FaGraduationCap,
    color: 'from-purple-400 to-pink-600',
    description: 'Currently pursuing Bachelor of Science in Software Engineering with focus on machine learning and web technologies.',
    badge: '🎓'
  }
];

export function Awards() {
  return (
    <section className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            Awards & Certifications
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and achievements throughout my educational journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden"
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${award.color} blur-xl`} />
              
              <div className="relative flex gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg`}>
                  <award.icon className="text-2xl text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {award.title}
                    </h3>
                    <span className="text-2xl">{award.badge}</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">
                    {award.organization}
                  </p>
                  
                  <p className="text-gray-500 text-sm mb-3">
                    {award.description}
                  </p>
                  
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${award.color} text-white`}>
                    {award.year}
                  </span>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${award.color} opacity-10 rounded-full blur-2xl`} />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: '2', label: 'Competition Wins', icon: '🏆' },
            { value: '2', label: 'Active Degrees', icon: '📚' },
            { value: '5+', label: 'Certifications', icon: '📜' },
            { value: '10+', label: 'Technologies', icon: '💻' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
            >
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}