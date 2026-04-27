import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const advantages = [
  {
    merit: "Skilled Professional",
    meritDesc: "Gain access to top-tier talent with years of experience, ensuring flawless execution",
    demerit: "Amateur Designer",
    demeritDesc: "Lack of experience may result in design inconsistencies and overlooked details",
  },
  {
    merit: "Future-Ready Designs",
    meritDesc: "Crafting modern, scalable designs that grow with your business and stay ahead of trends.",
    demerit: "Outdated Concepts",
    demeritDesc: "Stale designs that don't reflect current trends or your evolving brand narrative.",
  },
  {
    merit: "Client-Centric Collaboration",
    meritDesc: "Your vision leads the way — I work closely with you to bring ideas to life with precision and creativity.",
    demerit: "Detached Communication",
    demeritDesc: "Lack of collaboration and poor feedback loops can result in misaligned outcomes.",
  },
  {
    merit: "Timely Project Tracking",
    meritDesc: "Stay informed with regular progress updates and timely deliverables",
    demerit: "Unstructured & Unreliable Work",
    demeritDesc: "Inconsistent timelines and last-minute changes can compromise quality",
  }
];

export default function WhyDesign() {
  return (
    <section className="py-32 px-6 sm:px-10 lg:px-20 bg-background flex justify-center">
      <div className="max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Why choose me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif italic text-foreground mt-4">
            Why me as <span className="text-foreground/40 font-display not-italic">Design Partner</span>
          </h2>
          <p className="text-muted mt-4 font-light">Why Partner With Me for the Design Excellence</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
          {advantages.map((item, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
              {/* Merit Side */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-[#0c0c0c] p-8 sm:p-12 group transition-colors hover:bg-[#111111]"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <Check size={14} className="text-white" />
                </div>
                <h3 className="text-xl font-display font-medium text-foreground mb-3">{item.merit}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-light">{item.meritDesc}</p>
              </motion.div>

              {/* Demerit Side */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-[#0c0c0c] p-8 sm:p-12 group opacity-30 hover:opacity-100 transition-all duration-500"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mb-6">
                  <X size={14} className="text-white/50" />
                </div>
                <h3 className="text-xl font-display font-medium text-white/50 mb-3">{item.demerit}</h3>
                <p className="text-sm text-white/30 leading-relaxed font-light">{item.demeritDesc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
