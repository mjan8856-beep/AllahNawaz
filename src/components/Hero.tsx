import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); // slow parallax for headline
  const yBg = useTransform(scrollY, [0, 1000], [0, 200]);

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section aria-labelledby="hero-title" className="relative pt-40 pb-20 px-6 sm:px-10 lg:px-20 min-h-[80vh] flex items-center overflow-hidden">
      <motion.div style={{ y: yBg }} className="absolute right-0 top-0 w-[800px] h-[800px] bg-gradient-to-bl from-accent/5 to-transparent -z-10 pointer-events-none rounded-bl-full blur-3xl opacity-60" aria-hidden="true" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="main-content"
        className="max-w-4xl relative z-10"
        style={{ y: y1 }}
      >
        <motion.span 
          variants={lineVariants}
          className="text-accent font-medium text-lg uppercase tracking-widest block mb-4"
        >
          Product Designer
        </motion.span>
        
        <h1 id="hero-title" className="text-5xl md:text-8xl font-light tracking-tighter text-foreground font-serif italic inline-flex flex-col">
          <motion.span variants={lineVariants} className="block">Building Tools</motion.span>
          <motion.span variants={lineVariants} className="block">That People Love</motion.span>
          <motion.span variants={lineVariants} className="block">To Use.</motion.span>
        </h1>

        <motion.p 
          variants={lineVariants}
          className="text-xl text-muted mt-8 max-w-2xl leading-relaxed"
        >
          I'm a Product Designer who turns complex business ideas into simple, high-performing digital experiences. I specialize in SaaS, fintech, and modern design systems.
        </motion.p>
        
        <div className="stats-row flex gap-12 mt-12 mb-12" role="list">
          <div className="stat-item" role="listitem">
            <div className="val text-3xl font-light text-foreground">02+</div>
            <div className="lbl text-[11px] text-muted uppercase tracking-wider mt-1">Years Experience</div>
          </div>
          <div className="stat-item" role="listitem">
            <div className="val text-3xl font-light text-foreground">15+</div>
            <div className="lbl text-[11px] text-muted uppercase tracking-wider mt-1">Global Projects</div>
          </div>
          <div className="stat-item" role="listitem">
            <div className="val text-3xl font-light text-foreground">04</div>
            <div className="lbl text-[11px] text-muted uppercase tracking-wider mt-1">SaaS Platforms</div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-4"
        >
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#featured" 
            className="bg-foreground text-background px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-white/5 active:scale-95"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#contact" 
            className="border border-border-dim text-foreground px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-all shadow-lg shadow-black/20"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
