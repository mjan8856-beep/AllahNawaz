import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Zap, MousePointer2, MessageSquare, Sparkles } from 'lucide-react';

function ShootingStar({ delay = 0, top = '20%', left = '-10%' }) {
  return (
    <motion.div
      initial={{ x: -100, y: -100, opacity: 0 }}
      animate={{ 
        x: [0, 400], 
        y: [0, 400], 
        opacity: [0, 1, 0] 
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity, 
        delay, 
        ease: "linear" 
      }}
      className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-[45deg] pointer-events-none"
      style={{ top, left }}
    />
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section className="relative min-h-[100svh] pt-32 pb-16 px-6 sm:px-12 lg:px-24 flex flex-col justify-center items-center overflow-hidden" id="hero">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <ShootingStar delay={0} top="15%" left="5%" />
        <ShootingStar delay={3} top="25%" left="50%" />
        <ShootingStar delay={6} top="10%" left="80%" />
        <ShootingStar delay={4} top="60%" left="15%" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
      </div>

      <div className="w-full max-w-7xl relative z-10 flex flex-col items-center">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-white/80">Available for Work</span>
          </div>
        </motion.div>

        {/* Headline */}
        <div className="text-center relative w-full mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block w-full"
          >
             <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-medium tracking-tighter leading-[0.85] text-gradient">
              Allah Nawaz<span className="text-white/30">.</span><br/>
              <span className="text-white/40 inline-block mt-2 sm:mt-6">Product</span> Designer
            </h1>
            
            {/* Contextual Floating Elements */}
            <motion.div 
              style={{ y: yParallax }}
              initial={{ opacity: 0, x: -60, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute -left-10 lg:-left-20 top-20 hidden lg:flex flex-col gap-3 p-6 glass-card rounded-2xl max-w-[240px] shadow-2xl"
            >
              <p className="text-sm leading-snug text-white/90 font-medium">
                "Working with him was a complete game changer for our product."
              </p>
              <p className="text-xs text-white/50 text-right font-serif italic">- Pranav</p>
            </motion.div>

            <motion.div 
              style={{ y: yParallax }}
              initial={{ opacity: 0, x: 60, rotate: 8 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="absolute -right-10 lg:-right-20 bottom-10 hidden lg:flex flex-col gap-3 p-6 glass-card rounded-2xl max-w-[240px] shadow-2xl"
            >
              <p className="text-sm leading-snug text-white/90 font-medium">
                "We increased our conversions by 200% within a month."
              </p>
              <p className="text-xs text-white/50 text-right font-serif italic">- Vijay</p>
            </motion.div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl xl:text-2xl text-white/60 max-w-2xl mx-auto mt-12 font-light leading-relaxed px-4"
          >
            I craft versatile, high-conversion interfaces spanning graphic, web, and product design. Let's build something exceptional.
          </motion.p>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12"
          >
            <a href="#contact" className="px-8 py-4 bg-accent text-black rounded-full text-[15px] font-semibold hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group min-w-[200px]">
              Connect with me
              <ArrowUpRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/>
            </a>
            <a href="#projects" className="px-8 py-4 rounded-full text-[15px] font-semibold bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/30 hover:scale-[1.02] active:scale-95 transition-all duration-300 min-w-[200px] flex items-center justify-center">
              See All Projects
            </a>
          </motion.div>
        </div>

        {/* Hero Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 pb-20">
          {/* Main Video Feature */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="md:col-span-7 bg-white/[0.02] border border-white/10 backdrop-blur-[40px] rounded-[2rem] overflow-hidden group relative p-2 sm:p-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500"
          >
            <div className="w-full h-full min-h-[400px] rounded-[1.5rem] overflow-hidden relative bg-black/50">
              <video 
                src="https://framerusercontent.com/assets/LRzQafNZ8r3f0PGbI1Sps0dwcnk.mp4" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
              <div className="absolute inset-x-0 bottom-0 top-auto bg-gradient-to-t from-black/90 pt-32 pb-8 px-8 flex flex-col justify-end">
                <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center"><Zap size={16} className="text-white/80"/></div>
                   <span className="text-xs uppercase tracking-widest font-semibold text-white/50">Digital Motion</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-medium leading-tight">Crafting High-End<br/>Motion Design</h3>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6 flex-1">
              {/* Beyond Limits Square */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-grow bg-white/[0.02] border border-white/10 backdrop-blur-[40px] rounded-[2rem] overflow-hidden relative group p-2 sm:p-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500"
              >
                <div className="w-full h-full min-h-[220px] rounded-[1.5rem] bg-[#020202] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#070707] transition-colors duration-500">
                   <Sparkles size={120} className="absolute text-accent/5 -rotate-12 group-hover:rotate-12 group-hover:text-accent/10 transition-all duration-1000" />
                   <div className="text-center relative z-10 px-6">
                      <div className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-4 font-semibold">Visionary</div>
                      <div className="text-3xl sm:text-4xl font-display font-medium leading-tight tracking-tight">Beyond<br/><span className="text-white/50 italic font-serif">Limits</span></div>
                   </div>
                </div>
              </motion.div>
              
              {/* Year Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full sm:w-[45%] bg-white/[0.02] border border-white/10 backdrop-blur-[40px] rounded-[2rem] p-2 sm:p-3 aspect-square sm:aspect-auto min-h-[220px] hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500"
              >
                  <div className="w-full h-full rounded-[1.5rem] bg-white text-black flex flex-col items-center justify-center gap-5 hover:bg-gray-200 transition-colors duration-300">
                     <div className="text-6xl font-serif italic leading-none">AN</div>
                     <span className="text-xs uppercase tracking-[0.25em] font-bold opacity-40">2026</span>
                  </div>
              </motion.div>
            </div>

            {/* Bottom Graphic */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white/[0.02] border border-white/10 backdrop-blur-[40px] rounded-[2rem] overflow-hidden relative group p-2 sm:p-3 flex-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-500"
            >
              <div className="w-full h-full min-h-[240px] rounded-[1.5rem] overflow-hidden relative bg-black/50">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=600" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" 
                  alt="UI/UX Layout Strategy"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 flex justify-between items-end bg-gradient-to-t from-black/90">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <MousePointer2 size={16} className="text-white/80"/>
                      <span className="text-xs uppercase tracking-[0.25em] font-semibold text-white/50">UI/UX Strategy</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium">Solving Problems<br/>with Design</h3>
                  </div>
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
