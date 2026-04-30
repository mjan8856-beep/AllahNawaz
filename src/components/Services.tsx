import { motion } from 'motion/react';
import { Layout, PenTool, Figma, Palette } from 'lucide-react';

const expertiseItems = [
  {
    title: "Product Strategy",
    description: "Turning your business goals into digital experiences that your users will understand and love.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800&h=500",
    className: "md:col-span-2",
  },
  {
    title: "Design Systems",
    description: "Creating organized, consistent design rules that make your product look better and your developers work faster.",
    icon: PenTool,
    image: "https://framerusercontent.com/images/p6Im6dfknHAI0ig4NqDcO4WNpc.jpg",
    className: "md:row-span-2",
  },
  {
    title: "UX Optimization",
    description: "Making sure your app is fast, easy to use, and helps users get what they need without confusion.",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=500",
    className: "md:col-span-1",
  },
  {
    title: "Interactive Prototyping",
    description: "Turning flat designs into clickable prototypes so we can test the experience before developers write a line of code.",
    icon: Figma,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    className: "md:col-span-1",
  },
];

const tags = [
  "Information Architecture", "User Research", "Interaction Design", "System Scaling", "Accessibility", "A/B Testing", "UI Refinement"
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 sm:px-10 lg:px-20 flex justify-center border-t border-white/[0.04]">
      <div className="max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-20"
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight leading-tight">
                How I <span className="text-muted">Can Help</span>
              </h2>
              <p className="text-muted text-lg mt-4 leading-relaxed font-light">
                Using smart design to build experiences that work perfectly, no matter how much your business grows.
              </p>
            </div>
            <button className="px-6 py-3 border border-white/[0.1] text-foreground rounded-full text-sm font-medium hover:bg-white/[0.04] transition-all duration-300 whitespace-nowrap">
              Download CV
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`glass-card rounded-[1.5rem] p-8 flex flex-col group overflow-hidden relative border border-white/[0.04] hover:border-white/[0.15] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${item.className}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                   <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300">
                     <item.icon size={18} />
                   </div>
                   <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">0{index + 1}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <h3 className="text-2xl font-display font-medium text-foreground tracking-tight">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-sm font-light">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-auto rounded-xl overflow-hidden border border-white/[0.04] bg-[var(--color-surface)] h-full relative">
                   <img 
                    src={item.image} 
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-100" 
                    loading="lazy"
                    alt={item.title}
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Tags */}
        <div className="mt-24 overflow-hidden relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap py-6 border-y border-white/[0.04]">
            {[...tags, ...tags, ...tags].map((tag, i) => (
              <span key={i} className="text-sm font-medium tracking-wide text-muted hover:text-foreground transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
