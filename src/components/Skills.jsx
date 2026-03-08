import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Cpu, Star } from 'lucide-react';

const skillCategories = [
  {
    name: 'Backend',
    color: 'from-indigo-500 to-blue-600',
    skills: [
      { name: 'PHP 7.4/8+', level: 90 },
      { name: 'MySQL / PDO', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'Firebase (Auth/Firestore)', level: 80 },
      { name: 'Supabase / PostgreSQL', level: 75 },
    ],
  },
  {
    name: 'Frontend',
    color: 'from-purple-500 to-pink-600',
    skills: [
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'JavaScript ES6+', level: 85 },
      { name: 'React.js', level: 78 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'Bootstrap 5', level: 90 },
    ],
  },
  {
    name: 'Mobile',
    color: 'from-cyan-500 to-teal-600',
    skills: [
      { name: 'Flutter / Dart', level: 80 },
      { name: 'Firebase FCM', level: 75 },
      { name: 'Riverpod (State Mgmt)', level: 72 },
      { name: 'Supabase Flutter', level: 78 },
      { name: 'Cross-Platform Dev', level: 80 },
    ],
  },
  {
    name: 'Tools & Other',
    color: 'from-amber-500 to-orange-600',
    skills: [
      { name: 'Git / GitHub', level: 88 },
      { name: 'RBAC / Security', level: 85 },
      { name: 'Chart.js / Analytics', level: 78 },
      { name: 'AJAX / Fetch API', level: 85 },
      { name: 'Agile / Scrum', level: 75 },
    ],
  },
];

const techBadges = [
  'PHP', 'MySQL', 'React', 'Flutter', 'Dart', 'Firebase', 'Supabase',
  'Tailwind CSS', 'Bootstrap 5', 'JavaScript', 'HTML5', 'CSS3',
  'PDO', 'REST API', 'Chart.js', 'AJAX', 'Git', 'Bcrypt', 'RBAC', 'Scrum',
];

function SkillBar({ name, level, color, index }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" style={{ width: '100%' }} className="py-24 lg:py-32 w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d1a] to-[#0a0a0f]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-indigo-900/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Cpu size={14} />
            Technical Skills
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-5">
            My Tech{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Battle-tested across multiple real-world projects
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass border border-white/5 rounded-3xl p-7 hover:border-white/10 transition-all duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                <h3 className="font-display font-semibold text-lg text-white">{category.name}</h3>
              </div>

              {/* Skill bars */}
              {category.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  index={i}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Badges Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star size={16} className="text-yellow-400" />
            <span className="text-slate-400 text-sm font-medium">All Technologies Used</span>
            <Star size={16} className="text-yellow-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 glass border border-white/8 rounded-xl text-slate-300 text-sm font-medium hover:border-indigo-500/30 hover:text-indigo-300 cursor-default transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
