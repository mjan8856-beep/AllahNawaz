import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

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

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`max-w-4xl mx-auto glass-nav rounded-[2rem] pointer-events-auto transition-all duration-500 overflow-hidden ${
          isScrolled ? 'py-3 px-8' : 'py-4 px-10'
        }`}
        id="navbar"
      >
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-black text-sm rotate-[-8deg] group-hover:rotate-0 transition-transform duration-500">
              AN
            </div>
            <span className="text-lg font-display font-semibold tracking-tight hidden sm:block">Allah <span className="text-muted">Nawaz</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a href="#services" className="px-4 py-2 rounded-full text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-colors">Services</a>
            <a href="#projects" className="px-4 py-2 rounded-full text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-colors">Projects</a>
            <a href="#testimonials" className="px-4 py-2 rounded-full text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-colors">Testimonials</a>
            <a href="#contact" className="px-4 py-2 rounded-full text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 transition-colors">Contact</a>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:flex px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black text-[13px] font-semibold transition-all duration-300 gap-2 items-center">
              Talk to Me
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden flex flex-col items-center gap-6 py-8 border-t border-white/5 mt-4"
            >
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white transition-colors">Services</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white transition-colors">Projects</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white transition-colors">Testimonials</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white/60 hover:text-white transition-colors">Contact</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full py-4 text-center rounded-full bg-white text-black font-semibold text-sm">
                Talk to Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
