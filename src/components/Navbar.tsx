import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isMenuOpen ? '' : ''}`}>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full transition-all duration-500 flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 sm:py-6 ${
          isScrolled && !isMenuOpen
            ? 'bg-[#000000]/80 backdrop-blur-2xl border-b border-white/[0.08]' 
            : 'bg-transparent'
        }`}
        id="navbar"
      >
        {/* Brand / Logo Node */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          <div className="w-6 h-6 flex items-center justify-center bg-white text-black text-[10px] grid grid-cols-2 grid-rows-2">
            <div className="bg-black/20" />
            <div className="bg-transparent" />
            <div className="bg-transparent" />
            <div className="bg-black/20" />
          </div>
          <span className="text-sm font-medium tracking-wider text-white group-hover:text-white/80 transition-colors">Allah Nawaz</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {['Services', 'Projects', 'Process', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-6 py-2.5 rounded-full bg-white text-black text-[12px] font-semibold hover:opacity-90 transition-all duration-300">
            Let's Talk
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col justify-center items-end gap-[6px] w-10 h-10 text-white relative z-50"
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} 
            className="w-6 h-px bg-current block transition-all duration-300 origin-center"
          />
          <motion.span 
            animate={isMenuOpen ? { rotate: -45, y: -0.5 } : { rotate: 0, y: 0 }} 
            className={`h-px bg-current block transition-all duration-300 origin-center ${isMenuOpen ? 'w-6' : 'w-4'}`}
          />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-0 left-0 w-full bg-[#000000]/80 backdrop-blur-2xl overflow-hidden flex flex-col justify-center pt-20"
            style={{ height: '100vh' }}
          >
            <div className="flex flex-col px-8 py-10 gap-10 items-start container mx-auto">
              {['Services', 'Projects', 'Process', 'Contact'].map((item, i) => (
                <motion.a 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-display font-medium text-white/70 hover:text-white hover:translate-x-4 transition-all duration-300"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                href="#contact" 
                onClick={() => setIsMenuOpen(false)} 
                className="mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm inline-block"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
