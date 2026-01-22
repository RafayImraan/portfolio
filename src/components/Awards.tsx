import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaGraduationCap, FaTimes } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useFocusTrap, useAriaLive, useId, ScreenReaderOnly } from '../utils/accessibility';
import { IconType } from 'react-icons';

interface Award {
  id: number;
  title: string;
  organization: string;
  year: string;
  icon: IconType;
  color: string;
  description: string;
  badge: string;
  isSpecial?: boolean;
  fullText?: string;
  skills?: string[];
  technologies?: string[];
  link?: string;
}

const awards: Award[] = [
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
  },
  {
    id: 5,
    title: 'CodeAlpha Virtual Internship Program in Data Science',
    organization: 'CodeAlpha',
    year: '10th Dec 2025 - 10th Jan 2026',
    icon: FaCertificate,
    color: 'from-emerald-400 to-teal-600',
    description: 'Successfully completed a one-month virtual internship, exhibiting excellent analytical skills, quick adaptation to emerging technologies, and strong collaboration with team members.',
    badge: '🏆',
    isSpecial: true,
    fullText: `Abdul Rafay Imran
CA/DE1/7280
Was an active Participant at CodeAlpha Virtual Internship Program in Data Science 
Internship with dedication and hard work. We really appreciate your efforts taken and 
wish you all the best for the further.
10th December 2025 to 10th January 2026


This is to certify that Abdul Rafay Imran has successfully 
completed the Virtual Internship Program at CodeAlpha for a 
duration of one month from 10th December 2025 to 10th 
January 2026 as a Data Science Internship. 
He/She exhibited performance in this role and made a 
valuable contribution to our organization during the internship 
period. He/She has excellent analytical skills and He/She 
quickly acquired new skills and adeptly adapted to emerging 
technologies, demonstrating a high level of productivity.
He/She consistently displayed a willingness to provide 
assistance and fostered strong collaboration with fellow team 
members. His/Her dedication and skills make him/her a 
valuable asset to any prospective employer, and CodeAlpha 
wholeheartedly recommend him/her for any future endeavor.`,
    skills: ['Data Analysis', 'Machine Learning', 'Python', 'Statistical Modeling', 'Data Visualization'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Jupyter'],
    link: '#projects' // Link to related projects section
  }
];

export function Awards() {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const modalRef = useFocusTrap(!!selectedAward);
  const { announce } = useAriaLive();
  const titleId = useId('award-modal-title');

  const openModal = (award: Award) => {
    setSelectedAward(award);
    announce(`Award modal opened: ${award.title}`);
  };

  const closeModal = () => {
    announce('Award modal closed');
    setSelectedAward(null);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {awards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: award.isSpecial ? 1.05 : 1.02, y: -5 }}
              onClick={() => award.isSpecial && openModal(award)}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                award.isSpecial ? 'md:col-span-2 cursor-pointer' : ''
              }`}
              tabIndex={award.isSpecial ? 0 : -1}
              role={award.isSpecial ? 'button' : undefined}
              aria-label={award.isSpecial ? `View details for ${award.title}` : undefined}
            >
              {/* Special glow for internship */}
              {award.isSpecial && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-2xl blur-2xl animate-pulse" />
              )}

              {/* Glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${award.color} blur-xl`} />

              {/* 3D Ribbon for special card */}
              {award.isSpecial && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-400 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12">
                  FEATURED
                </div>
              )}

              <div className="relative flex gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shadow-lg ${
                  award.isSpecial ? 'animate-bounce' : ''
                }`}>
                  <award.icon className="text-2xl text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {award.title}
                      {award.isSpecial && <span className="ml-2 text-yellow-400">✨</span>}
                    </h3>
                    <span className="text-2xl">{award.badge}</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-2">
                    {award.organization}
                  </p>

                  <p className="text-gray-500 text-sm mb-3">
                    {award.description}
                  </p>

                  {/* Additional details for special card */}
                  {award.isSpecial && (
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {award.skills && award.skills.map((skill, skillIdx) => (
                          <span key={skillIdx} className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {award.technologies && award.technologies.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${award.color} text-white`}>
                    {award.year}
                  </span>
                </div>
              </div>

              {/* Decorative corner */}
              <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${award.color} opacity-10 rounded-full blur-2xl`} />

              {/* Particle effect on hover for special card */}
              {award.isSpecial && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                  <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-300" />
                  <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-0 group-hover:opacity-100 animate-ping animation-delay-600" />
                </div>
              )}
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

      {/* Modal for special award */}
      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              className="bg-slate-800 rounded-3xl p-8 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto focus:outline-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${selectedAward.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <selectedAward.icon className="text-xl sm:text-2xl md:text-3xl text-white" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 id={titleId} className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white truncate">{selectedAward.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm md:text-base truncate">{selectedAward.organization}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors p-2 ml-2 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800"
                    aria-label="Close award modal"
                  >
                    <FaTimes className="text-lg sm:text-xl" aria-hidden="true" />
                  </button>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Certificate Text</h4>
                  <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-relaxed">
                    {selectedAward.fullText}
                  </pre>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAward.skills && selectedAward.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedAward.technologies && selectedAward.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${selectedAward.color} text-white`}>
                    {selectedAward.year}
                  </span>
                  <a
                    href={selectedAward.link}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-teal-600 text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
                  >
                    View Related Projects
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
