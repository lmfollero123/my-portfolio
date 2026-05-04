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
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-slate-50 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-blue-100/70 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[520px] h-[520px] rounded-full bg-slate-200/60 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: '96px', paddingBottom: '60px' }}>
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Intro */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-6 shadow-sm shadow-slate-900/5"
            >
              <Sparkles size={14} className="text-amber-300" />
              Available for Freelance Work
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-tight mb-4"
            >
              Hi, I'm <span className="text-slate-900">Luis Miguel</span>
            </motion.h1>

            {/* Typing title */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-medium mb-6 h-12 flex items-center justify-center lg:justify-start"
            >
              <TypingText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-600 text-lg max-w-2xl leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              BSIT student at Bestlink College of the Philippines, building comprehensive, modern web and mobile applications — from AI-powered reservation systems to full-stack HR platforms and Flutter marketplaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-2xl text-white font-semibold text-base transition-colors duration-200"
              >
                <Terminal size={18} />
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-900 font-semibold text-base hover:bg-slate-50 transition-colors duration-200 shadow-sm shadow-slate-900/5"
              >
                <Mail size={18} />
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-10"
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
                  whileHover={{ scale: 1.06, y: -1 }}
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-sm shadow-slate-900/5 max-w-xl mx-auto lg:mx-0"
            >
              {[
                { label: 'Projects Built', value: '4+' },
                { label: 'Technologies', value: '10+' },
                { label: 'Commits', value: '500+' },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900">{value}</div>
                  <div className="text-slate-600 text-xs sm:text-sm mt-1">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-b from-blue-100 to-transparent blur-2xl" />
              <div className="relative bg-white border border-slate-200 rounded-[28px] p-4 shadow-sm shadow-slate-900/5">
                <img
                  src="/images/profile.jpg"
                  alt="Portrait of Luis Miguel"
                  className="w-full aspect-[4/5] object-cover rounded-[22px] bg-slate-100"
                  loading="eager"
                />
                <div className="mt-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-slate-900 font-semibold leading-tight">Luis Miguel N. Follero</div>
                    <div className="text-slate-600 text-sm">Full-Stack Developer</div>
                  </div>
                  <div className="text-slate-600 text-xs text-right">
                    Tandang Sora, QC
                  </div>
                </div>
              </div>
            </div>
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
