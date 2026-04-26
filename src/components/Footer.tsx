import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Linkedin, Mail, Palette, Instagram, Facebook, Github, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
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

  const socialLinks = [
    { icon: Linkedin, href: "https://pk.linkedin.com/in/allah-nawaz-256a81286", label: "LinkedIn" },
    { icon: Palette, href: "https://behance.net/allahnawaz175", label: "Behance" },
    { icon: Github, href: "https://github.com/allahnawaz175", label: "GitHub" }, // Corrected URL pattern
    { icon: Instagram, href: "https://instagram.com/allahnawaz.design", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/allahnawaz.design", label: "Facebook" },
    { icon: Mail, href: "mailto:mjan8856@gmail.com", label: "Email" }, // Updated email from metadata
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-16 px-6 sm:px-10 lg:px-20 border-t border-border-dim bg-background"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif italic text-foreground mb-2">Let's connect</h3>
          <p className="text-muted text-[10px] tracking-widest uppercase">&copy; 2026 Allah Nawaz — Islamabad, PK</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {socialLinks.map((link, i) => (
            <motion.a 
              key={i}
              whileHover={{ y: -5, scale: 1.1, color: "#C5A47E" }}
              whileTap={{ scale: 0.8, y: 0 }}
              href={link.href} 
              target={link.href.startsWith('mailto') ? undefined : "_blank"} 
              rel={link.href.startsWith('mailto') ? undefined : "noopener noreferrer"} 
              className="text-muted transition-colors"
              aria-label={link.label}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, y: 5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-accent text-background rounded-full shadow-2xl hover:bg-white transition-all group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
