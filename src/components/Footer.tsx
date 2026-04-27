import { motion } from 'motion/react';
import { Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';

const TiktokIcon = ({ size = 24, strokeWidth = 1.5, ...props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a8 8 0 0 1-5-1.5z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: "https://pk.linkedin.com/in/allah-nawaz-256a81286", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/allahnawaz.design", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: TiktokIcon, href: "https://tiktok.com", label: "TikTok" },
  ];

  return (
    <footer className="relative pt-32 pb-12 px-6 sm:px-10 lg:px-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Call to Action */}
        <div className="text-center mb-32 group cursor-pointer">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold tracking-tight text-white/10 group-hover:text-accent transition-colors duration-700 leading-none"
          >
            LET'S WORK <br className="hidden md:block"/> TOGETHER
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 inline-flex items-center gap-4 px-10 py-5 bg-accent text-black rounded-full font-bold text-lg hover:bg-[#f0f0f0] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
          >
            mjan8856@gmail.com
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
              <ArrowUpRight size={20} />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 mb-12" />

        {/* Bottom Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-12">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-black text-sm">
                AN
              </div>
              <span className="text-xl font-display font-bold tracking-tighter text-white">Allah Nawaz</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">Pakistan</span>
            </div>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -4, color: "#fff" }}
                href={link.href} 
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white/40 hover:bg-white/10 transition-all border border-white/5"
                aria-label={link.label}
              >
                <link.icon size={20} strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} Allah Nawaz &mdash; All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[9px] uppercase font-bold tracking-widest text-white/20">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
