import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code, Globe, Smartphone, Database, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Dev',
    desc: 'PHP, React, Flutter, Firebase, MySQL',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Flutter with Supabase & Firebase',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'RBAC, CSRF, PDO, DPA Compliance',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: Database,
    title: 'Databases',
    desc: 'MySQL, Firestore, Supabase PostgreSQL',
    color: 'from-amber-500 to-orange-600',
  },
];

function HighlightCard({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass border border-white/5 rounded-2xl p-5 hover:border-indigo-500/20 transition-all duration-300 group hover:-translate-y-1"
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className="text-white" />
      </div>
      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
      <p className="text-slate-400 text-sm">{item.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" style={{ width: '100%' }} className="py-24 lg:py-32 w-full relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
            <User size={14} />
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            Passionate Developer &{' '}
            <span className="gradient-text">Problem Solver</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Building digital solutions that make a real difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-5 text-slate-300 leading-relaxed text-[17px]">
              <p>
                I'm a dedicated <span className="text-white font-semibold">full-stack developer</span> and 
                CS student at <span className="text-indigo-400 font-medium">Bestlink College of the Philippines</span>,
                with a passion for creating comprehensive, feature-rich web and mobile applications.
                My expertise spans PHP-based server-side systems to modern React frontends and Flutter mobile apps.
              </p>
              <p>
                I've built production-ready systems including an{' '}
                <span className="text-indigo-400 font-medium">AI-powered Facilities Reservation System</span> for 
                a Local Government Unit, a{' '}
                <span className="text-purple-400 font-medium">full Hotel HR Management System</span>, 
                a <span className="text-cyan-400 font-medium">Firebase-backed Guidance Management System</span>, 
                and a <span className="text-amber-400 font-medium">Flutter online marketplace</span> backed by Supabase.
              </p>
              <p>
                I care deeply about <span className="text-white font-semibold">security</span>, 
                clean architecture, and delivering software that's not just functional — but 
                <span className="text-white font-semibold"> beautiful and user-friendly</span>.
              </p>
            </div>

            {/* Personal details */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Tandang Sora, QC 🇵🇭' },
                { label: 'Availability', value: 'Open to Work ✅' },
                { label: 'School', value: 'Bestlink College PH' },
                { label: 'Languages', value: 'PHP, JS, Dart' },
              ].map(({ label, value }) => (
                <div key={label} className="glass border border-white/5 rounded-xl p-4">
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
            >
              <Globe size={18} />
              Let's Work Together
            </motion.a>
          </motion.div>

          {/* Right: Highlights grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <HighlightCard key={item.title} item={item} index={i} />
            ))}

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-2 glass border border-white/5 rounded-2xl p-5 hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-lg font-display">4+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Systems Built</h4>
                  <p className="text-slate-400 text-sm mt-0.5">
                    From AI scheduling systems to HR platforms, online marketplaces, and guidance management portals — each with real-world deployment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
