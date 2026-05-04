import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code, Globe, Smartphone, Database, Shield } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Dev',
    desc: 'PHP, React, Flutter, Firebase, MySQL',
    color: 'bg-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Flutter with Supabase & Firebase',
    color: 'bg-slate-900',
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'RBAC, CSRF, PDO, DPA Compliance',
    color: 'bg-slate-900',
  },
  {
    icon: Database,
    title: 'Databases',
    desc: 'MySQL, Firestore, Supabase PostgreSQL',
    color: 'bg-slate-900',
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
      className="glass rounded-2xl p-5 hover:border-slate-300 transition-all duration-200 group hover:-translate-y-1"
    >
      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 shadow-sm shadow-black/20 group-hover:scale-105 transition-transform duration-200`}>
        <Icon size={22} className="text-white" />
      </div>
      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
      <p className="text-slate-600 text-sm">{item.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" style={{ width: '100%' }} className="py-24 lg:py-32 w-full relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-blue-100 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium mb-6">
            <User size={14} />
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 mb-5">
            Passionate Developer &{' '}
            <span className="text-slate-900">Problem Solver</span>
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed">
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
            <div className="space-y-5 text-slate-700 leading-relaxed text-[17px]">
              <p>
                I'm a dedicated <span className="text-slate-900 font-semibold">full-stack developer</span> and 
                BSIT student at <span className="text-blue-700 font-medium">Bestlink College of the Philippines</span>,
                with a passion for creating comprehensive, feature-rich web and mobile applications.
                My expertise spans PHP-based server-side systems to modern React frontends and Flutter mobile apps.
              </p>
              <p>
                I've built production-ready systems including an{' '}
                <span className="text-blue-700 font-medium">AI-powered Facilities Reservation System</span> for 
                a Local Government Unit, a{' '}
                <span className="text-slate-900 font-medium">full Hotel HR Management System</span>, 
                a <span className="text-slate-900 font-medium">Firebase-backed Guidance Management System</span>, 
                and a <span className="text-slate-900 font-medium">Flutter online marketplace</span> backed by Supabase.
              </p>
              <p>
                I care deeply about <span className="text-slate-900 font-semibold">security</span>, 
                clean architecture, and delivering software that's not just functional — but 
                <span className="text-slate-900 font-semibold"> beautiful and user-friendly</span>.
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
                <div key={label} className="glass rounded-xl p-4">
                  <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-slate-900 font-medium text-sm">{value}</div>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 border border-blue-600 rounded-xl text-white font-semibold transition-colors duration-200"
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
              className="col-span-2 glass rounded-2xl p-5 hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-200 flex items-center justify-center shadow-sm shadow-black/10 flex-shrink-0">
                  <span className="text-white font-bold text-lg font-display">4+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Systems Built</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
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
