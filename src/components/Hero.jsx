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
      setDeleting(false);
      setIndex((i) => (i + 1) % titles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="cursor-blink text-indigo-400">|</span>
    </span>
  );
}

// Floating particle
function Particle({ style }) {
  return (
    <motion.div
      style={style}
      className="absolute rounded-full opacity-30 pointer-events-none"
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: Math.random() * 4 + 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: Math.random() * 3,
      }}
    />
  );
}

export default function Hero() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 6 + 2}px`,
      height: `${Math.random() * 6 + 2}px`,
      background: ['#6366f1', '#a855f7', '#06b6d4', '#f59e0b'][Math.floor(Math.random() * 4)],
    },
  }));

  return (
    <section
      id="home"
      style={{ width: '100%', minHeight: '100vh' }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden animated-bg"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-600/20 to-purple-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-600/15 to-indigo-600/10 blur-3xl" />

      {/* Floating particles */}
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '60px' }}>
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-8"
          >
            <Sparkles size={14} className="text-yellow-400" />
            Available for Freelance Work
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Luis Miguel</span>
          </motion.h1>

          {/* Typing title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-medium mb-6 h-14 flex items-center"
          >
            <TypingText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
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
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 transition-all duration-300"
            >
              <Terminal size={20} />
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 glass border border-white/10 rounded-2xl text-white font-semibold text-lg hover:border-indigo-500/40 hover:bg-white/5 transition-all duration-300"
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
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all duration-300"
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
            className="grid grid-cols-3 gap-6 sm:gap-12 glass border border-white/5 rounded-2xl px-8 py-6"
          >
            {[
              { label: 'Projects Built', value: '4+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Commits', value: '500+' },
            ].map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="font-display font-bold text-3xl gradient-text">{value}</div>
                <div className="text-slate-500 text-sm mt-1">{label}</div>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
