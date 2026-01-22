import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

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

  // Swipe handlers for mobile
  const handlers = useSwipeable({
  onSwipedLeft: () => next(),
  onSwipedRight: () => prev(),
  preventScrollOnSwipe: true,
  trackMouse: true
});


  // Auto-play testimonials
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
    <section
      className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"
      {...handlers}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Testimonials & Recognition
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Achievements, awards, and feedback from mentors and collaborators
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            aria-label="Previous Testimonial"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-all z-10 shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            aria-label="Next Testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 flex items-center justify-center text-white transition-all z-10 shadow-lg"
          >
            <FaChevronRight />
          </button>

          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -100 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl hover:scale-105 transform transition-transform relative"
            >
              <FaQuoteLeft className="text-4xl text-indigo-500/40 mb-6 animate-pulse" />
              
              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 transition-all">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-14 h-14 rounded-full shadow-lg"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 120 }}
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

                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-500"
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <FaStar />
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Badge for Achievements */}
              {testimonials[currentIndex].type === 'achievement' && (
                <motion.div
                  className="mt-6 pt-6 border-t border-white/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 120 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm animate-bounce">
                    🏆 Competition Award
                  </span>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? 'bg-indigo-500 w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                whileTap={{ scale: 1.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Animated Background Shapes */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/20 rounded-full top-0 -left-32 filter blur-3xl animate-pulse-slow pointer-events-none"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-pink-500/20 rounded-full bottom-0 -right-24 filter blur-3xl animate-pulse-slow pointer-events-none"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
    </section>
  );
}
