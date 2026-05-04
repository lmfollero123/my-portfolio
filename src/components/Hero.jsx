import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';

const titles = [
  'Full-Stack Developer',
  'Web Application Developer',
  'Mobile App Developer',
  'UI/UX Enthusiast',
  'Freelance Developer',
];

function TypingText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % titles.length);
      }, 0);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-slate-900 font-bold">
      {displayed}
      <span className="cursor-blink text-blue-400">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{ width: '100%', minHeight: '100vh' }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-50"
    >
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '60px' }}>
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-8 shadow-sm shadow-slate-900/5"
          >
            <Sparkles size={14} className="text-amber-300" />
            Available for Freelance Work
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="text-slate-900">Luis Miguel</span>
          </motion.h1>

          {/* Typing title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-700 font-medium mb-6 h-14 flex items-center"
          >
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
          >
            BSIT student at Bestlink College of the Philippines, building comprehensive, modern web and mobile applications — from AI-powered reservation systems to full-stack HR platforms and Flutter marketplaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-2xl text-white font-semibold text-lg transition-colors duration-200"
            >
              <Terminal size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 font-semibold text-lg hover:bg-slate-50 transition-colors duration-200 shadow-sm shadow-slate-900/5"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com/lmfollero123', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/luis-miguel-follero', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:follero.luismiguel.noora@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 shadow-sm shadow-slate-900/5"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-6 sm:gap-12 bg-white border border-slate-200 rounded-2xl px-8 py-6 shadow-sm shadow-slate-900/5"
          >
            {[
              { label: 'Projects Built', value: '4+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Commits', value: '500+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-3xl text-slate-900">{value}</div>
                <div className="text-slate-600 text-sm mt-1">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
