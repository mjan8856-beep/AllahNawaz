import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] pt-32 pb-16 px-6 sm:px-12 lg:px-24 flex flex-col justify-center overflow-hidden" id="hero">
      {/* Premium Minimal Grid Background - Stripe Inspired */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[80vh] bg-gradient-to-b from-accent/5 via-transparent to-transparent opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="w-full max-w-5xl mx-auto relative z-10 flex flex-col items-start mt-20">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          <span className="text-xs font-mono tracking-widest text-muted uppercase">Accepting Opportunities</span>
        </motion.div>

        {/* Hero Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ y: yParallax, opacity: opacityParallax }}
          className="relative max-w-4xl"
        >
          <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-display font-medium tracking-tight text-foreground leading-[1.05] mb-8">
            Designing digital products people <br className="hidden md:block"/> <span className="text-accent italic font-serif">love to use.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mb-12">
            I'm Allah Nawaz, a Product Designer who turns complex problems into simple, beautiful, and easy-to-use digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full text-sm font-semibold tracking-wide hover:scale-[1.02] active:scale-95 transition-transform duration-300 flex items-center justify-center gap-2"
            >
              Selected Work
              <ArrowUpRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-[var(--color-card-bg)] border border-white/[0.08] text-foreground rounded-full text-sm font-semibold tracking-wide hover:bg-white/[0.05] hover:border-white/[0.15] active:scale-95 transition-all duration-300 flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
