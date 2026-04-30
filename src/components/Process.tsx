import { motion } from 'motion/react';
import { MessageSquare, ClipboardList, Zap, Rocket, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: "01",
    title: "Discovery & Strategy",
    description: "We start by understanding your business, your goals, and exactly what your users need.",
    icon: MessageSquare,
  },
  {
    phase: "02",
    title: "Planning & Wireframes",
    description: "We plan the structure and user journey before we start designing, so everything makes sense.",
    icon: ClipboardList,
  },
  {
    phase: "03",
    title: "Design & Build",
    description: "Crafting beautiful, high-quality designs and turning them into a living, breathing product.",
    icon: Zap,
  },
  {
    phase: "04",
    title: "Testing & Launch",
    description: "Making sure everything works perfectly across all devices before we go live.",
    icon: Rocket,
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 sm:px-10 lg:px-20 flex justify-center border-t border-white/[0.04]">
      <div className="max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-24 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight leading-tight mb-6">
            How I <span className="text-muted">Work</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed font-light">
            A clear, simple process to turn your ideas into a finished product without the guesswork.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-white/[0.08]" role="presentation" />
          
          {phases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group flex flex-col pt-4 lg:pt-0"
            >
              <div className="flex items-center gap-4 mb-6 lg:flex-col lg:items-start lg:gap-8">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-[var(--color-surface)] border border-white/[0.08] flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-black transition-all duration-300">
                  <item.icon size={24} />
                </div>
                <span className="text-sm font-mono font-medium tracking-widest text-white/30 group-hover:text-muted transition-colors">
                  PHASE {item.phase}
                </span>
              </div>

              <div className="space-y-3 pr-4">
                <h3 className="text-2xl font-display font-medium text-foreground tracking-tight">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-8 sm:p-12 glass-card rounded-3xl border border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center max-w-2xl">
             <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shrink-0">
               <CheckCircle2 size={28} />
             </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-display font-medium text-foreground">Commitment to Quality</h4>
                <p className="text-muted text-base leading-relaxed font-light">I review every detail to ensure your product looks great, works perfectly, and is ready for your users.</p>
             </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto mt-6 lg:mt-0">
             <button className="px-8 py-4 rounded-full border border-white/[0.1] text-sm font-medium hover:bg-white/[0.04] transition-all text-center">View Projects</button>
             <button className="px-8 py-4 rounded-full bg-foreground text-background text-sm font-medium hover:bg-white/90 transition-all text-center">Let's Talk</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
