import { motion } from 'motion/react';
import { Compass, Route, LayoutTemplate, Sparkles, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Insight & Strategy",
    description: "Deep-diving into user needs and business goals to build a rock-solid product foundation.",
    icon: Compass,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "User Flow Optimization",
    description: "Architecting logical journeys that lead users to success with zero friction.",
    icon: Route,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Structure & Hierarchy",
    description: "Defining the core product logic through wireframes that prioritize clarity over clutter.",
    icon: LayoutTemplate,
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    title: "Visual Fidelity",
    description: "Crafting beautiful, modern interfaces wrapped in scalable design systems.",
    icon: Sparkles,
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    title: "Launch & Refine",
    description: "Validating through feedback and data to ensure the final product hits every KPI.",
    icon: Rocket,
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="py-24 px-6 sm:px-10 lg:px-20 border-t border-border-dim bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
             <h2 
               id="process-title"
               className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-bold"
             >
               My Process
             </h2>
             <div className="h-[1px] bg-border-dim w-12 sm:w-24 lg:w-48" />
          </div>
          <p className="text-3xl md:text-5xl font-serif italic text-foreground max-w-2xl mx-auto lg:mx-0">
            How I turn complex problems into elegant solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8 relative">
          {/* Background decorative connector line */}
          <div className="absolute top-[52px] left-8 right-8 h-[1px] bg-border-dim hidden lg:block border-dashed border-t border-border-dim" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
              className="group relative"
            >
              <div className="flex flex-col items-center lg:items-start relative z-10 text-center lg:text-left">
                <div className="flex items-center gap-4 w-full mb-6 relative">
                   <div className="hidden lg:block absolute top-1/2 -right-8 w-8 h-[1px] bg-accent/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                   
                   <motion.div 
                     className="relative w-14 h-14 rounded-2xl bg-white/[0.02] border border-border-dim flex items-center justify-center overflow-hidden mx-auto lg:mx-0 group-hover:border-accent/40 shadow-lg transition-all duration-500"
                     whileHover={{ y: -5, scale: 1.05 }}
                   >
                     <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md`} />
                     <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                     
                     <motion.div
                       animate={{ y: [0, -2, 0] }}
                       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                       className="relative z-10 text-muted group-hover:text-foreground transition-colors duration-300"
                     >
                       <step.icon size={22} strokeWidth={1.5} aria-hidden="true" />
                     </motion.div>
                   </motion.div>
                </div>
                
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/5 border border-border-dim group-hover:border-accent/30 transition-colors">
                  <span className="text-[10px] text-accent font-mono uppercase tracking-widest font-bold">Phase 0{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-serif italic text-foreground mb-3 group-hover:text-accent transition-colors duration-300">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
