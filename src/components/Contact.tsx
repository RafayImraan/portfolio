import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaCalendarAlt, FaPaperPlane, FaCheckCircle, FaUpload, FaWhatsapp, FaBell, FaClock } from 'react-icons/fa';
import { hapticFeedback } from '../utils/haptic';

interface FormData {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  attachment: File | null;
}

const projectTypes = [
  'Full-Stack Web App',
  'Machine Learning Project',
  'Data Analysis',
  'API Development',
  'Frontend Development',
  'Consultation',
  'Other'
];

const budgetRanges = [
  'Less than $500',
  '$500 - $1,000',
  '$1,000 - $5,000',
  '$5,000+',
  'Let\'s discuss'
];

const timelines = [
  'Less than 1 week',
  '1-2 weeks',
  '2-4 weeks',
  '1-3 months',
  'Flexible'
];

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    attachment: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    hapticFeedback('light');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      hapticFeedback('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        attachment: null
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    hapticFeedback('light');
    setIsSubscribed(true);
    hapticFeedback('success');
    setSubscribeEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, attachment: e.target.files![0] }));
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'aburafayyy@gmail.com',
      href: 'mailto:aburafayyy@gmail.com',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+92 333 2427539',
      href: 'tel:+923332427539',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+92 333 2427539',
      href: 'https://wa.me/923332427539',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: 'https://maps.google.com/?q=Karachi,Pakistan',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/RafayImraan', label: 'GitHub', color: 'hover:bg-gray-700' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/rafayimraan', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com/rafayimraan', label: 'Twitter', color: 'hover:bg-sky-500' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4">
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all group min-h-[60px]"
                >
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                    <info.icon className="text-lg lg:text-xl text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs lg:text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium group-hover:text-indigo-400 transition-colors text-sm lg:text-base truncate">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Schedule Call Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-2xl text-indigo-400" />
                <h3 className="text-lg font-semibold text-white">Schedule a Call</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Book a 30-minute consultation to discuss your project requirements.
              </p>
              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all flex items-center justify-center gap-2">
                <FaClock />
                Book Consultation
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-3"
            >
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all`}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaBell className="text-xl text-yellow-400" />
                <h3 className="text-lg font-semibold text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Get notified about new projects and blog posts.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-medium hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isSubscribed ? <FaCheckCircle /> : <FaBell />}
                </button>
              </form>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-400 text-sm mt-2"
                >
                  ✓ Successfully subscribed!
                </motion.p>
              )}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                  >
                    <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-base"
                      >
                        <option value="" className="bg-gray-800">Select type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type} className="bg-gray-800">{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-base"
                      >
                        <option value="" className="bg-gray-800">Select budget</option>
                        {budgetRanges.map(range => (
                          <option key={range} value={range} className="bg-gray-800">{range}</option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2 lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-base"
                      >
                        <option value="" className="bg-gray-800">Select timeline</option>
                        {timelines.map(t => (
                          <option key={t} value={t} className="bg-gray-800">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Attachment (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white/5 border border-dashed border-white/20 text-gray-400 hover:border-indigo-500 hover:text-indigo-400 cursor-pointer transition-all"
                      >
                        <FaUpload />
                        {formData.attachment ? formData.attachment.name : 'Upload project brief, designs, or documents'}
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Accepted formats: PDF, DOC, DOCX, PNG, JPG (Max 10MB)
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}