import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useCallback } from 'react';
import {
  Briefcase, ExternalLink, Github, Smartphone, Globe,
  Brain, Users, Calendar, Shield, ChevronRight, Star,
  ChevronLeft, X, ZoomIn, ImageIcon
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Barangay Culiat Facilities Reservation System',
    subtitle: 'Capstone Project · LGU Web Application',
    category: 'Web App',
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'HTML'],
    description:
      'An AI-driven web application designed to modernize facility reservation management for Local Government Units (LGU). Residents can book public facilities online while administrators get comprehensive tools for managing reservations, tracking usage, and preventing abuse.',
    highlights: [
      'AI-powered conflict detection with real-time alternative slot generation',
      '8-condition auto-approval system reducing admin workload by 60%',
      'Role-based access (Resident, Staff, Admin) with 2FA via OTP',
      'Philippine Data Privacy Act (RA 10173) compliance with document archival',
      'Haversine formula distance-based facility recommendations',
      'Comprehensive audit trail with 7-year data retention',
    ],
    tech: ['PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    color: 'from-indigo-500 to-purple-600',
    accentColor: '#6366f1',
    icon: Calendar,
    type: 'Capstone / Freelance',
    badge: 'Featured',
    stats: [
      { label: 'Modules', value: '12' },
      { label: 'API Endpoints', value: '8+' },
      { label: 'Security Features', value: '15+' },
    ],
    screenshots: [
      '/screenshots/bcfrs-1.png',
      '/screenshots/bcfrs-2.png',
      '/screenshots/bcfrs-3.png',
      '/screenshots/bcfrs-4.png',
      '/screenshots/bcfrs-5.png',
    ],
    screenshotLabels: ['Homepage', 'Facilities Listing', 'Login Portal', 'Admin Dashboard', 'My Reservations'],
  },
  {
    id: 2,
    title: 'Luz De Luna Hotel HR Management System',
    subtitle: 'Enterprise HR Platform · Hospitality',
    category: 'Web App',
    tags: ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'JavaScript'],
    description:
      'A comprehensive enterprise-grade Human Resource Management System designed specifically for luxury hospitality operations. Covers complete HR lifecycle management from onboarding to payroll to analytics.',
    highlights: [
      'Core HCM with employee lifecycle management (onboarding to offboarding)',
      'Payroll processing with automated tax calculations and deductions',
      'Multi-level leave approval workflows with balance tracking',
      'Time & attendance with overtime tracking and schedule management',
      'Employee Self-Service (ESS) portal for personal data management',
      'Analytics dashboard with Chart.js visualization and HR KPIs',
    ],
    tech: ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'JavaScript', 'CSS'],
    color: 'from-amber-500 to-yellow-600',
    accentColor: '#f59e0b',
    icon: Users,
    type: 'Academic / Enterprise Demo',
    badge: 'Enterprise',
    stats: [
      { label: 'Modules', value: '9' },
      { label: 'User Roles', value: '6' },
      { label: 'DB Tables', value: '20+' },
    ],
    screenshots: [
      '/screenshots/hr-1.png',
      '/screenshots/hr-2.png',
      '/screenshots/hr-3.png',
      '/screenshots/hr-4.png',
      '/screenshots/hr-5.png',
      '/screenshots/hr-6.png',
    ],
    screenshotLabels: [
      'HR Dashboard',
      'Core HCM — Employee Directory',
      'Payroll Management',
      'Claims & Reimbursement',
      'Claims & Reimbursement Management',
      'Compensation Planning',
    ],
  },
  {
    id: 3,
    title: 'Online Marketplace App',
    subtitle: 'Cross-Platform Mobile App · Flutter',
    category: 'Mobile App',
    tags: ['Flutter', 'Supabase', 'Firebase', 'Dart', 'Riverpod'],
    description:
      'A fully cross-platform mobile marketplace application built with Flutter. Features real-time product listings, user authentication, push notifications via Firebase Cloud Messaging, and a PostgreSQL backend through Supabase.',
    highlights: [
      'Cross-platform: Android, iOS, Web, Windows, macOS, Linux',
      'Real-time data sync with Supabase PostgreSQL',
      'Firebase Cloud Messaging (FCM) for push notifications',
      'Secure storage with flutter_secure_storage',
      'State management using Flutter Riverpod',
      'Image picker & upload with Supabase storage buckets',
    ],
    tech: ['Flutter', 'Dart', 'Supabase', 'Firebase', 'JavaScript', 'CSS'],
    color: 'from-cyan-500 to-blue-600',
    accentColor: '#06b6d4',
    icon: Smartphone,
    type: 'Personal / Mobile App',
    badge: 'Mobile',
    stats: [
      { label: 'Platforms', value: '6' },
      { label: 'Packages', value: '12+' },
      { label: 'Tech Stack', value: 'Flutter' },
    ],
    screenshots: [
      '/screenshots/owtw-1.png',
      '/screenshots/owtw-2.png',
      '/screenshots/owtw-3.png',
      '/screenshots/owtw-4.png',
      '/screenshots/owtw-5.png',
      '/screenshots/owtw-6.png',
    ],
    screenshotLabels: [
      'Create Account',
      'Home Screen',
      'Categories',
      'Products Listing',
      'User Profile & Wallet',
      'Barter Exchange',
    ],
  },
  {
    id: 5,
    title: 'HONOR PH — POS Desktop Application',
    subtitle: 'Electron Desktop App · In Progress',
    category: 'Desktop App',
    tags: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    description:
      'A cross-platform desktop Point of Sale (POS) application built for HONOR PH using Electron and React. Designed for frontline cashiers and store staff, featuring a fast and intuitive sales interface, transaction tracking, and secure local data handling.',
    highlights: [
      'Built with Electron + React for native desktop performance on Windows/macOS/Linux',
      'Fast product search and cart management for cashier operations',
      'Offline-capable with local data storage via Electron IPC',
      'Google Authenticator 2FA integration for secure staff logins',
      'TypeScript throughout for reliability and type safety',
      'Tailwind CSS for a clean, modern cashier UI',
    ],
    tech: ['Electron', 'React', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
    color: 'from-violet-500 to-purple-700',
    accentColor: '#8b5cf6',
    icon: Briefcase,
    type: 'Professional · In Progress',
    badge: 'In Progress',
    stats: [
      { label: 'Platform', value: 'Desktop' },
      { label: 'Stack', value: 'Electron' },
      { label: 'Status', value: 'Active' },
    ],
    screenshots: [
      '/screenshots/pos-desktop-1.png',
      '/screenshots/pos-desktop-2.png',
      '/screenshots/pos-desktop-3.png',
      '/screenshots/pos-desktop-4.png',
    ],
    screenshotLabels: ['Login Screen', 'Cashier Shift', 'Product Catalog', 'Cart & Checkout'],
  },
  {
    id: 6,
    title: 'HONOR PH — POS Backend & Inventory System',
    subtitle: 'Web Backend · Laravel + React · In Progress',
    category: 'Web App',
    tags: ['Laravel', 'PHP', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    description:
      'A full-featured backend inventory and operations management system for HONOR PH, powering the POS ecosystem. Built with Laravel 12 and React via Inertia.js, it handles product management, stock receiving, transfers, returns, and role-based user access.',
    highlights: [
      'Laravel 12 + React 19 via Inertia.js for seamless SPA experience',
      'Full inventory lifecycle: Receiving Orders, Transfers In/Out, Returns',
      'Miscellaneous Stock Withdrawals and Receipts modules',
      'Role-based access control with Spatie Laravel Permission',
      'Serial number tracking per product across all transactions',
      'PDF report generation for all major transaction types',
    ],
    tech: ['Laravel', 'PHP', 'React', 'TypeScript', 'MySQL', 'Tailwind CSS'],
    color: 'from-rose-500 to-orange-600',
    accentColor: '#f43f5e',
    icon: Shield,
    type: 'Professional · In Progress',
    badge: 'In Progress',
    stats: [
      { label: 'Modules', value: '10+' },
      { label: 'Stack', value: 'Laravel' },
      { label: 'Status', value: 'Active' },
    ],
    screenshots: [
      '/screenshots/pos-backend-1.png',
      '/screenshots/pos-backend-2.png',
      '/screenshots/pos-backend-3.png',
      '/screenshots/pos-backend-4.png',
      '/screenshots/pos-backend-5.png',
    ],
    screenshotLabels: [
      'Super Admin Dashboard',
      'Sales & Purchase Overview',
      'Stock Adjustment',
      'Stocks Ledger',
      'Sales Analytics',
    ],
  },
  {
    id: 4,
    title: 'Guidance Management System',
    subtitle: 'School Counseling Platform · Firebase',
    category: 'Web App',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Firestore'],
    description:
      'A comprehensive web-based system for schools to manage guidance counseling services, appointments, and resources. Built with Firebase for real-time data, authentication, and storage without a traditional backend.',
    highlights: [
      'Role-based access: Student, Counselor, Admin with Firestore rules',
      'Real-time appointment scheduling and management',
      'Counseling resource upload & categorization (Firebase Storage)',
      'Automated notifications and reminders for appointments',
      'Analytics dashboard for counseling activity reporting',
      'Mobile-responsive UI deployed on Firebase Hosting',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Supabase'],
    color: 'from-emerald-500 to-teal-600',
    accentColor: '#10b981',
    icon: Brain,
    type: 'Academic / School System',
    badge: 'Firebase',
    stats: [
      { label: 'User Roles', value: '3' },
      { label: 'Firebase Services', value: '4' },
      { label: 'Modules', value: '5' },
    ],
    screenshots: [],
    screenshotLabels: [],
  },
];

// ── Lightbox ──────────────────────────────────────────────
function Lightbox({ images, labels, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.95)' }}
        onClick={onClose}
      >
        {/* Close button */}
        <button
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Label */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium z-10">
          {labels[current]} — {current + 1} / {images.length}
        </div>

        {/* Image */}
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-6xl w-full px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[current]}
            alt={labels[current]}
            className="w-full rounded-2xl shadow-2xl object-contain max-h-[80vh]"
          />
        </motion.div>

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight size={22} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? 'bg-white scale-125' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Screenshot Slider inside card ─────────────────────────
function ScreenshotSlider({ images, labels, accentColor, onOpenLightbox }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative h-52 flex items-center justify-center bg-white/3 border border-white/5 rounded-2xl">
        <div className="text-center text-slate-600">
          <ImageIcon size={32} className="mx-auto mb-2 opacity-40" />
          <p className="text-xs">Screenshots coming soon</p>
        </div>
      </div>
    );
  }

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % images.length); };

  return (
    <div className="relative group/slider rounded-2xl overflow-hidden" style={{ height: '220px' }}>
      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={labels[current]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="w-full h-full object-cover object-top cursor-zoom-in"
          onClick={() => onOpenLightbox(current)}
        />
      </AnimatePresence>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {/* Label */}
      <div className="absolute bottom-3 left-3 right-16 pointer-events-none">
        <span className="text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
          {labels[current]}
        </span>
      </div>

      {/* Zoom hint */}
      <motion.button
        onClick={() => onOpenLightbox(current)}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/25 flex items-center justify-center text-white/80 hover:text-white transition-colors"
        title="View fullscreen"
      >
        <ZoomIn size={14} />
      </motion.button>

      {/* Prev/Next arrows — show on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover/slider:opacity-100 hover:bg-black/70 flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm text-white opacity-0 group-hover/slider:opacity-100 hover:bg-black/70 flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </>
      )}

      {/* Dot indicators */}
      <div className="absolute top-3 right-3 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === current ? 'scale-125' : 'bg-white/40'}`}
            style={i === current ? { backgroundColor: accentColor } : {}}
          />
        ))}
      </div>

      {/* Screenshot count badge */}
      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm text-white/70 text-xs">
        {current + 1}/{images.length}
      </div>
    </div>
  );
}

// ── Project Card ──────────────────────────────────────────
function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const Icon = project.icon;

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group glass border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
      >
        {/* Screenshot Slider at top */}
        <div className="p-4 pb-0">
          <ScreenshotSlider
            images={project.screenshots}
            labels={project.screenshotLabels}
            accentColor={project.accentColor}
            onOpenLightbox={(i) => setLightboxIndex(i)}
          />
        </div>

        {/* Colorful header strip with stats */}
        <div className={`relative bg-gradient-to-r ${project.color} mx-4 mt-4 rounded-2xl p-5 overflow-hidden`}>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-white/90 text-xs font-semibold">
                    {project.badge}
                  </span>
                  <span className="text-white/70 text-xs">{project.type}</span>
                </div>
                <div className="text-white/80 text-xs mt-0.5">{project.subtitle}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {project.stats.map((stat) => (
                <div key={stat.label} className="bg-white/15 rounded-xl px-3 py-2 text-center">
                  <div className="text-white font-bold text-base leading-none">{stat.value}</div>
                  <div className="text-white/70 text-[10px] mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-xs font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expandable highlights */}
          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2 mb-4 overflow-hidden"
              >
                {project.highlights.map((hl, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2 text-sm text-slate-400"
                  >
                    <ChevronRight size={14} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                    {hl}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors duration-200 flex items-center gap-1"
            >
              {expanded ? 'Show Less' : 'View Features'}
              <motion.span animate={{ rotate: expanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronRight size={14} />
              </motion.span>
            </button>

            <div className="flex items-center gap-2">
              {project.screenshots.length > 0 && (
                <motion.button
                  onClick={() => setLightboxIndex(0)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-2 glass border border-white/10 rounded-xl text-slate-300 text-sm hover:text-white hover:border-white/20 transition-all duration-200"
                >
                  <ZoomIn size={13} />
                  Gallery
                </motion.button>
              )}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white text-sm font-medium shadow-md shadow-indigo-500/20"
              >
                <Globe size={13} />
                Inquire
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && project.screenshots.length > 0 && (
        <Lightbox
          images={project.screenshots}
          labels={project.screenshotLabels}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ── Main Section ──────────────────────────────────────────
export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" style={{ width: '100%' }} className="py-24 lg:py-32 w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-6">
            <Briefcase size={14} />
            Portfolio
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            Projects I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Real-world applications spanning web systems, enterprise platforms, and cross-platform mobile apps
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 mb-4">Have a project in mind?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
          >
            Let's Build Something Together
            <ChevronRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
