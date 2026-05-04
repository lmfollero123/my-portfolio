import { motion } from 'framer-motion';
import { Code2, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ width: '100%' }} className="relative w-full border-t border-slate-200 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-100 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-slate-900/70 border border-white/10 flex items-center justify-center shadow-sm shadow-black/20">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-semibold text-base text-slate-900">Luis Miguel</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Freelance Full-Stack Developer &amp; BSIT student at Bestlink College of the Philippines, building modern web and mobile applications from Tandang Sora, QC.
            </p>
            <div className="flex items-center gap-3">
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
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 shadow-sm shadow-slate-900/5"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Me', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-600 text-sm hover:text-slate-900 transition-colors duration-200 hover-underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {[
                'Full-Stack Web Development',
                'PHP Backend Development',
                'React.js Frontend',
                'Flutter Mobile Apps',
                'Database Design & Optimization',
                'REST API Development',
              ].map((service) => (
                <li key={service}>
                  <a href="#contact" className="text-slate-600 text-sm hover:text-slate-900 transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Made with <Heart size={13} className="text-red-400 fill-red-400" /> by{' '}
            <span className="text-slate-400 font-medium">Luis Miguel N. Follero</span> · {new Date().getFullYear()}
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-slate-700 text-sm hover:bg-slate-50 transition-colors duration-200 shadow-sm shadow-slate-900/5"
          >
            <ArrowUp size={14} />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
