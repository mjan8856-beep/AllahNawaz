import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  const handleLogoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleLogoClick();
    }
  };

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.8)']
  );

  const blur = useTransform(
    scrollY,
    [0, 50],
    ['blur(0px)', 'blur(12px)']
  );

  const padding = useTransform(
    scrollY,
    [0, 50],
    ['32px 48px', '16px 48px']
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.1)']
  );

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: blur,
        padding: padding,
        borderBottom: `1px solid`,
        borderColor: borderOpacity,
      }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center text-[10px] sm:text-[12px] tracking-[0.15em] uppercase font-medium transition-shadow duration-300"
    >
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-background px-4 py-2 rounded-full font-bold z-[60]">
        Skip to content
      </a>
      <div 
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
        onKeyDown={handleLogoKeyDown}
        className="flex items-center gap-3 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-xs" 
        onClick={handleLogoClick}
      >
        <div className="w-8 h-8 md:w-9 md:h-9 bg-accent flex items-center justify-center rounded-xs rotate-45 group-hover:rotate-180 transition-all duration-700">
          <span className="text-background font-bold -rotate-45 text-[10px] md:text-xs group-hover:rotate-[-180deg] transition-all duration-700">AN</span>
        </div>
        <div className="text-foreground font-serif italic text-lg md:text-xl tracking-tight lowercase">
          Allah <span className="text-accent underline decoration-accent/30 underline-offset-4">Nawaz</span>
        </div>
      </div>
      <div className="hidden lg:block text-muted/60 lowercase tracking-widest text-[10px]">
        Product Design & Strategy — Islamabad, Pakistan
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[10px] font-bold text-accent hidden sm:inline animate-pulse">● Available</span>
        <div className="hidden sm:flex items-center gap-8">
          <a href="#featured" className="hover:text-accent transition-colors">Projects</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
        
        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 sm:hidden text-foreground hover:text-accent transition-colors z-50"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center p-8 sm:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
          >
            <nav className="w-full max-w-sm">
              <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest opacity-50">Work</span>
                  <ul className="flex flex-col gap-4 text-lg font-serif italic">
                    <li>
                      <a href="#featured" onClick={closeMenu} className="hover:text-accent transition-colors">Featured</a>
                    </li>
                    <li>
                      <a href="#process" onClick={closeMenu} className="hover:text-accent transition-colors">Process</a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest opacity-50">Expertise</span>
                  <ul className="flex flex-col gap-4 text-lg font-serif italic">
                    <li>
                      <a href="#skills" onClick={closeMenu} className="hover:text-accent transition-colors">Skills</a>
                    </li>
                    <li>
                      <a href="#experience" onClick={closeMenu} className="hover:text-accent transition-colors">Milestones</a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest opacity-50">Intro</span>
                  <ul className="flex flex-col gap-4 text-lg font-serif italic">
                    <li>
                      <a href="#about" onClick={closeMenu} className="hover:text-accent transition-colors">Story</a>
                    </li>
                    <li>
                      <a href="#faq" onClick={closeMenu} className="hover:text-accent transition-colors">FAQ</a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col gap-6"
                >
                  <span className="text-[10px] text-accent font-bold uppercase tracking-widest opacity-50">Contact</span>
                  <ul className="flex flex-col gap-4 text-lg font-serif italic">
                    <li>
                      <a href="#contact" onClick={closeMenu} className="hover:text-accent transition-colors">Let's Talk</a>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-8 border-t border-white/10 w-full text-center"
              >
                <div className="text-[10px] text-muted/40 uppercase tracking-[0.2em] leading-relaxed">
                  Available for new opportunities<br />Islamabad, Pakistan
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
