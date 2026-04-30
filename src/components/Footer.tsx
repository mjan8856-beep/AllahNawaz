import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: "https://pk.linkedin.com/in/allah-nawaz-256a81286", label: "LinkedIn" },
    { href: "https://instagram.com/allahnawaz.design", label: "Instagram" },
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://tiktok.com", label: "TikTok" },
    { href: "https://behance.net", label: "Behance" },
  ];

  return (
    <footer className="relative pt-32 pb-12 px-6 sm:px-10 lg:px-20 overflow-hidden border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive Architectural CTA */}
        <div className="flex flex-col items-center text-center space-y-12 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-xs font-mono font-medium tracking-widest text-muted uppercase">Availability: High_Impact_Collabs</span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-display font-medium leading-tight tracking-tight text-foreground">
              Let's create <br/><span className="text-muted">together.</span>
            </h2>
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="mailto:allahnawazmalik175@gmail.com"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-all duration-300 shadow-xl"
          >
            <span>allahnawazmalik175@gmail.com</span>
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </motion.a>
        </div>

        {/* Global System Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 py-12 border-t border-white/[0.08]">
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-muted uppercase">Location</span>
            <p className="text-sm font-medium text-foreground">Pakistan (GMT+5)</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-muted uppercase">Current Time</span>
            <p className="text-sm font-medium text-foreground uppercase">
              {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-muted uppercase">Focus Area</span>
            <p className="text-sm font-medium text-foreground">Product Design</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-mono tracking-widest text-muted uppercase">Status</span>
            <p className="text-sm font-medium text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available
            </p>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.04]">
          <span className="text-xs font-mono text-muted uppercase tracking-wider">© {currentYear} Allah Nawaz</span>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((link, i) => (
              <a 
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-xs font-mono tracking-widest text-muted hover:text-foreground transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
