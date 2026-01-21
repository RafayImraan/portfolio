import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiCpu } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string> = {
  'hello': "Hello! 👋 I'm Abdul Rafay Imran's AI assistant. How can I help you today?",
  'hi': "Hi there! 👋 Welcome to Abdul Rafay Imran's portfolio. What would you like to know?",
  'skills': "Abdul Rafay is proficient in JavaScript, React JS, Angular, Node.js, Express.js, and Python for data science (Pandas, Matplotlib, Seaborn). He also works with MongoDB, SQL, PHP, and Power BI for dashboards!",
  'experience': "Abdul Rafay is a Software Engineering student at University of Karachi (2023-Present) and also pursuing a Diploma at Aptech Learning (2022-Present). He won 1st Prize in Speed Programming and 2nd Prize in Web Design at Aptech in 2023!",
  'projects': "Abdul has built projects like Hospital Management System (MERN Stack), Crop Yield Prediction, Car Price Prediction, Iris Classification, and Employment Trend Analysis using Python and Machine Learning. Check out the Projects section!",
  'contact': "You can reach Abdul via email at aburafayyy@gmail.com or call +92 333 2427539. He's based in Karachi, Pakistan. Check out his GitHub: github.com/RafayImraan",
  'hire': "Great! Abdul Rafay is a fresh talent currently pursuing his Software Engineering degree. He's open to internships, freelance, and full-time opportunities. Reach out via the contact form!",
  'resume': "You can download Abdul's resume by clicking the 'Download Resume' button in the Hero section at the top of the page.",
  'location': "Abdul is based in Karachi, Pakistan. He's a local student but open to remote opportunities and collaborations worldwide!",
  'education': "Abdul is pursuing BSc in Software Engineering at University of Karachi (2023-Present) and a Diploma at Aptech Learning (2022-Present). He completed his Intermediate from Adamjee Govt. Science College (2020-2022).",
  'achievements': "Abdul won First Prize in Speed Programming Competition and Second Prize in Web Designing Competition at Aptech Learning in 2023! He's also proficient in both English and Urdu.",
  'default': "I'm here to help! You can ask me about Abdul's skills, education, projects, achievements, or how to get in touch. What would you like to know?",
};

const quickQuestions = [
  "What are your skills?",
  "Tell me about your education",
  "What are your achievements?",
  "How can I contact you?",
];

export function Chatbot() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Abdul's AI assistant. Ask me anything about his skills, projects, or experience!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const botMessage: Message = {
      id: Date.now() + 1,
      text: getBotResponse(messageText),
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all ${
          isOpen ? 'scale-0' : 'scale-100'
        } bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-xl hover:shadow-indigo-500/25`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <FiMessageCircle size={24} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-pink-500"></span>
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] rounded-3xl shadow-2xl overflow-hidden ${
              theme === 'dark' ? 'bg-slate-900' : 'bg-white'
            } border ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FiCpu size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold">AI Assistant</h4>
                    <p className="text-xs text-white/80">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={`h-80 overflow-y-auto p-4 space-y-4 ${
              theme === 'dark' ? 'bg-slate-800/50' : 'bg-gray-50'
            }`}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex gap-2 max-w-[80%] ${
                    message.isBot ? 'flex-row' : 'flex-row-reverse'
                  }`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot
                        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white'
                        : theme === 'dark' ? 'bg-slate-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {message.isBot ? <FiCpu size={14} /> : <FiUser size={14} />}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.isBot
                        ? theme === 'dark'
                          ? 'bg-slate-700 text-white'
                          : 'bg-white text-gray-800 shadow-sm'
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot
                          ? theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          : 'text-white/70'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white">
                    <FiCpu size={14} />
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    theme === 'dark' ? 'bg-slate-700' : 'bg-white shadow-sm'
                  }`}>
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            theme === 'dark' ? 'bg-gray-400' : 'bg-gray-400'
                          }`}
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className={`p-3 border-t ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {quickQuestions.map((question) => (
                  <motion.button
                    key={question}
                    onClick={() => handleSend(question)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className={`p-4 border-t ${
              theme === 'dark' ? 'border-slate-700' : 'border-gray-200'
            }`}>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-2 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white placeholder:text-gray-500'
                      : 'bg-gray-50 border-gray-200 text-gray-800 placeholder:text-gray-400'
                  }`}
                />
                <motion.button
                  onClick={() => handleSend()}
                  disabled={!input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSend size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
