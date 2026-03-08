import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Briefcase, ExternalLink, Github, Smartphone, Globe, Brain,
  Users, Calendar, Shield, Cpu, ChevronRight, Star
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Barangay Culiat Facilities Reservation System',
    subtitle: 'Capstone Project · LGU Web Application',
    category: 'Web App',
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'AI/ML', 'REST API'],
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
    tech: ['PHP 7.4+', 'MySQL 8', 'Tailwind CSS', 'Vanilla JS ES6+', 'PDO', 'Bcrypt 2FA'],
    color: 'from-indigo-500 to-purple-600',
    icon: Calendar,
    type: 'Capstone / Freelance',
    badge: 'Featured',
    stats: [
      { label: 'Modules', value: '12' },
      { label: 'API Endpoints', value: '8+' },
      { label: 'Security Features', value: '15+' },
    ],
  },
  {
    id: 2,
    title: 'Luz De Luna Hotel HR Management System',
    subtitle: 'Enterprise HR Platform · Hospitality',
    category: 'Web App',
    tags: ['PHP', 'MySQL', 'Bootstrap 5', 'Chart.js', 'AJAX'],
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
    tech: ['PHP 8+', 'MySQL 8', 'Bootstrap 5.3', 'Chart.js', 'AJAX', 'PDO'],
    color: 'from-amber-500 to-yellow-600',
    icon: Users,
    type: 'Academic / Enterprise Demo',
    badge: 'Enterprise',
    stats: [
      { label: 'Modules', value: '9' },
      { label: 'User Roles', value: '6' },
      { label: 'DB Tables', value: '20+' },
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
    tech: ['Flutter 3', 'Dart', 'Supabase', 'Firebase FCM', 'Riverpod', 'Secure Storage'],
    color: 'from-cyan-500 to-blue-600',
    icon: Smartphone,
    type: 'Personal / Mobile App',
    badge: 'Mobile',
    stats: [
      { label: 'Platforms', value: '6' },
      { label: 'Packages', value: '12+' },
      { label: 'Tech Stack', value: 'Flutter' },
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
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
    color: 'from-emerald-500 to-teal-600',
    icon: Brain,
    type: 'Academic / School System',
    badge: 'Firebase',
    stats: [
      { label: 'User Roles', value: '3' },
      { label: 'Firebase Services', value: '4' },
      { label: 'Modules', value: '5' },
    ],
  },
];

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [expanded, setExpanded] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group glass border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
    >
      {/* Card Header */}
      <div className={`relative bg-gradient-to-br ${project.color} p-8 overflow-hidden`}>
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />

        <div className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
              <Icon size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white/90 text-xs font-semibold">
                  {project.badge}
                </span>
                <span className="text-white/70 text-xs">{project.type}</span>
              </div>
              <div className="text-white/80 text-sm">{project.subtitle}</div>
            </div>
          </div>
          <Star size={16} className="text-white/40 mt-1" />
        </div>

        {/* Stats row */}
        <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
          {project.stats.map((stat) => (
            <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center backdrop-blur-sm">
              <div className="text-white font-bold text-lg leading-none">{stat.value}</div>
              <div className="text-white/70 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-7">
        <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-indigo-300 transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-300 text-xs font-medium hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-200"
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
              className="space-y-2 mb-5 overflow-hidden"
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
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white text-sm font-medium shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-shadow duration-300"
            >
              <Globe size={14} />
              Inquire
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
