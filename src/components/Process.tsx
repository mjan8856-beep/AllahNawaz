import { motion } from 'motion/react';
import { MessageSquare, ClipboardList, Zap, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: "Let's Get In Touch",
    description: "Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas.",
    icon: MessageSquare,
  },
  {
    title: "Grab Your Designs",
    description: "Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals",
    icon: ClipboardList,
  },
  {
    title: "Kickstart Development",
    description: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch",
    icon: Zap,
  },
  {
    title: "And Hand Over",
    description: "Receive a fully tested, polished, and high-quality product tailored to your needs with ongoing support",
    icon: Rocket,
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 px-6 sm:px-10 lg:px-20 bg-background flex justify-center">
      <div className="max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-24 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
             <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">How it works</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
            Process <span className="text-white/40">Is Everything</span>
          </h2>
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg leading-relaxed">Simple, streamlined process is what get's you results</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2rem] relative group hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
            >
              {/* Step number at top right within the card */}
              <div className="absolute top-8 right-8 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                {index + 1}
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <step.icon size={24} className="group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-10">{step.description}</p>

              <div className="h-px w-full bg-white/10 mb-6" />
              
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 rounded-full glass-card border-white/5 text-[10px] font-bold text-muted uppercase tracking-widest">
                  Step {index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col lg:flex-row items-center justify-between glass-card p-8 sm:p-10 rounded-[2.5rem] border-white/5 gap-10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
               <CheckCircle2 size={24} className="text-white" />
            </div>
            <div>
              <p className="text-xl font-display font-bold text-white">I am with you in every step</p>
              <p className="text-sm text-muted mt-1 leading-relaxed">Alongside you at each step for a seamless and collaborative experience</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
             <button className="px-8 py-4 rounded-full glass-card border-white/5 text-sm font-bold hover:bg-white/5 transition-all text-center">See All Projects</button>
             <button className="px-8 py-4 rounded-full bg-white text-black text-sm font-bold hover:bg-white/90 transition-all text-center">Contact Now</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
