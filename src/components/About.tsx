import { motion, useScroll, useTransform } from 'motion/react';
import { Download } from 'lucide-react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yDecor = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} id="about" aria-labelledby="about-title" className="relative py-20 px-6 sm:px-10 lg:px-20 border-t border-border-dim overflow-hidden">
      <motion.div style={{ y: yDecor }} className="absolute -left-40 top-20 text-accent/5 text-[30rem] font-serif italic pointer-events-none select-none z-0 tracking-tighter" aria-hidden="true">
        &
      </motion.div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          id="about-title"
          initial={{ opacity: 0, letterSpacing: "5px" }}
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif italic text-foreground mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="mt-8 text-lg text-muted space-y-6 leading-relaxed"
        >
          <motion.p variants={childVariants}>
            I’m a Product Designer who thrives at the intersection of business strategy and human-centered design. With over 2 years of experience, I’ve helped startups and established brands build SaaS dashboards, mobile apps, and e-commerce stores that are as functional as they are beautiful.
          </motion.p>
          <motion.p variants={childVariants}>
            Beyond just "making things look good," I focus on reducing user friction and building scalable systems that grow with your company. I’m a Web Design Specialist certified by NAVTTC, and I’m constantly exploring new ways to make the web a more intuitive place.
          </motion.p>
          <motion.p variants={childVariants}>
             When I’m not in Figma, you’ll find me sharing design insights on LinkedIn or exploring new visual trends on Behance. I’m always open to discussing new projects and how we can bring your vision to life.
          </motion.p>
          <motion.div variants={childVariants} className="pt-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95, y: 5 }}
              href="/Allah_Nawaz_Resume.pdf" 
              download 
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-background rounded-full font-bold transition-all shadow-lg shadow-accent/20 group transform-gpu"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
