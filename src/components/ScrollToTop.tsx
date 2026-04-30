import { motion, AnimatePresence, useScroll } from 'motion/react';
import { ArrowUp, Github, Linkedin, Twitter, Dribbble } from 'lucide-react';
import { useState, useEffect } from 'react';

const socials = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/anjanmalikjan' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Dribbble', icon: Dribbble, href: '#' },
];

export default function ScrollToTop() {
  const { scrollY } = useScroll();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowScrollTop(latest > 500);
    });
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-center gap-4">
      {/* Social Icons - Always Visible on Desktop */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.36, 1] }}
        className="flex-col gap-3 hidden md:flex"
      >
        {socials.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full glass-card border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all shadow-lg backdrop-blur-md group"
              aria-label={social.name}
            >
              <Icon size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all" />
            </motion.a>
          );
        })}
      </motion.div>

      {/* Scroll to Top Arrow */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, y: 5 }}
            onClick={scrollToTop}
            className="p-3 sm:p-4 bg-white text-black rounded-full shadow-2xl hover:bg-accent hover:text-black transition-all group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
