import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Aptech Learning',
    role: 'Institute - Speed Programming Competition',
    image: 'https://ui-avatars.com/api/?name=Aptech&background=6366f1&color=fff&size=100',
    content: 'Abdul Rafay Imran won First Prize in our Speed Programming Competition, demonstrating exceptional problem-solving skills and coding speed. His ability to write clean, efficient code under pressure was truly impressive.',
    rating: 5,
    type: 'achievement'
  },
  {
    id: 2,
    name: 'Aptech Learning',
    role: 'Institute - Web Designing Competition',
    image: 'https://ui-avatars.com/api/?name=Aptech&background=8b5cf6&color=fff&size=100',
    content: 'Second Prize winner in our Web Designing Competition. Abdul showed great creativity and technical skills in creating responsive, modern web designs with excellent user experience.',
    rating: 5,
    type: 'achievement'
  },
  {
    id: 3,
    name: 'Project Mentor',
    role: 'University of Karachi',
    image: 'https://ui-avatars.com/api/?name=UK+Mentor&background=ec4899&color=fff&size=100',
    content: 'Abdul Rafay has shown exceptional dedication to his Software Engineering studies. His machine learning projects demonstrate a strong understanding of both theoretical concepts and practical implementation.',
    rating: 5,
    type: 'mentor'
  },
  {
    id: 4,
    name: 'Team Lead',
    role: 'MediCore Project',
    image: 'https://ui-avatars.com/api/?name=TL&background=10b981&color=fff&size=100',
    content: 'Working with Abdul on the Hospital Management System was a great experience. His full-stack skills and attention to detail helped us deliver a comprehensive healthcare solution with all required features.',
    rating: 5,
    type: 'colleague'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const next = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Testimonials & Recognition
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Achievements, awards, and feedback from mentors and collaborators
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10"
            >
              <FaQuoteLeft className="text-4xl text-indigo-500/30 mb-6" />
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>

              {testimonials[currentIndex].type === 'achievement' && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
                    🏆 Competition Award
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'bg-indigo-500 w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}