import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Mail, MessageSquare, Send, MapPin, Clock, Linkedin,
  Github, PhoneCall, CheckCircle, AlertCircle, Loader2
} from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'follero.luismiguel.noora@gmail.com', href: 'mailto:follero.luismiguel.noora@gmail.com', color: 'from-indigo-500 to-purple-600' },
  { icon: PhoneCall, label: 'Phone / Mobile', value: '0991-104-4599 / 0956-512-1966', href: 'tel:+639911044599', color: 'from-cyan-500 to-blue-600' },
  { icon: MapPin, label: 'Location', value: 'Tandang Sora, Quezon City 🇵🇭', href: '#', color: 'from-emerald-500 to-teal-600' },
  { icon: Clock, label: 'Availability', value: 'Mon – Sat, 9AM – 6PM PHT', href: '#', color: 'from-amber-500 to-orange-600' },
];

const services = [
  'Full-Stack Web Development',
  'PHP / Laravel Backend',
  'React.js Frontend',
  'Flutter Mobile App',
  'Firebase Integration',
  'Database Design',
  'REST API Development',
  'UI/UX Implementation',
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with Formspree/EmailJS endpoint
    await new Promise((res) => setTimeout(res, 2000));
    setStatus('success');
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', service: '', budget: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ width: '100%' }} className="py-24 lg:py-32 w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-indigo-900/15 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-gradient-to-tr from-purple-900/10 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <MessageSquare size={14} />
            Get In Touch
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            Let's Build Something{' '}
            <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to take your project to the next level? Let's talk about your ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact info cards */}
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 glass border border-white/5 rounded-2xl p-4 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider">{info.label}</div>
                    <div className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">{info.value}</div>
                  </div>
                </motion.a>
              );
            })}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass border border-white/5 rounded-2xl p-5"
            >
              <h4 className="text-white font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, label: 'GitHub', href: 'https://github.com/lmfollero123' },
                  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/luis-miguel-follero' },
                  { icon: Mail, label: 'Email', href: 'mailto:follero.luismiguel.noora@gmail.com' },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label === 'GitHub' ? '_blank' : '_self'}
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 flex items-center justify-center gap-2 py-3 glass border border-white/8 rounded-xl text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all duration-200 text-sm"
                    aria-label={label}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Services list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass border border-white/5 rounded-2xl p-5"
            >
              <h4 className="text-white font-semibold mb-4">Services I Offer</h4>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-slate-400 text-xs"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass border border-white/5 rounded-3xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6">Send Me a Message</h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5">
                    <CheckCircle size={40} className="text-green-400" />
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Message Sent! 🎉</h4>
                  <p className="text-slate-400">Thanks! I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        id="contact-name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        id="contact-email"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Service */}
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        id="contact-service"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-indigo-500/50 transition-all duration-200 appearance-none"
                      >
                        <option value="" className="bg-[#111118]">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#111118]">{s}</option>
                        ))}
                      </select>
                    </div>
                    {/* Budget */}
                    <div>
                      <label className="block text-slate-400 text-sm font-medium mb-2">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        id="contact-budget"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none focus:border-indigo-500/50 transition-all duration-200 appearance-none"
                      >
                        <option value="" className="bg-[#111118]">Select budget</option>
                        <option value="<5k" className="bg-[#111118]">Under ₱5,000</option>
                        <option value="5k-15k" className="bg-[#111118]">₱5,000 - ₱15,000</option>
                        <option value="15k-50k" className="bg-[#111118]">₱15,000 - ₱50,000</option>
                        <option value="50k+" className="bg-[#111118]">₱50,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-400 text-sm font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, and timeline..."
                      id="contact-message"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={status === 'idle' ? { scale: 1.02 } : {}}
                    whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    id="contact-submit"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-slate-600 text-xs">
                    By submitting, you agree that I may contact you regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
