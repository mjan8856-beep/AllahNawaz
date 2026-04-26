import { motion } from 'motion/react';
import { 
  Palette, 
  Smartphone, 
  ShoppingBag, 
  Zap, 
  Monitor,
  Component,
  Search,
  Workflow,
  Layers,
  Code,
  PenTool,
  Figma
} from 'lucide-react';

const groupedSkills = [
  {
    category: "Design Specialization",
    icon: Palette,
    items: [
      { name: "Product Strategy & UX", desc: "Aligning user needs with business goals to drive measurable impact." },
      { name: "SaaS Dashboards", desc: "Simplifying complex data into intuitive, actionable user interfaces." },
      { name: "Design Systems", desc: "Building scalable, accessible component libraries for consistent branding." },
      { name: "Mobile-First UX", desc: "Crafting fluid, responsive cross-platform native and web experiences." },
    ]
  },
  {
    category: "Methodology & Execution",
    icon: Workflow,
    items: [
      { name: "High-Fidelity Prototyping", desc: "Creating realistic, interactive mockups to validate features early." },
      { name: "Interaction Design", desc: "Designing micro-interactions that breathe life into digital products." },
      { name: "Conversion Optimization", desc: "E-commerce funnels tailored to decrease friction and increase sales." },
      { name: "Human-Centered Research", desc: "Usability testing, interviews, and analytics-driven design decisions." },
    ]
  },
  {
    category: "Software Ecosystem",
    icon: Layers,
    items: [
      { name: "Figma & FigJam", desc: "Advanced autolayout, variables, and collaborative brainstorming." },
      { name: "Front-End Implementation", desc: "React, Tailwind CSS, and Framer Motion for pixel-perfect handoffs." },
      { name: "Adobe Creative Suite", desc: "Illustrator and Photoshop for custom vector graphics and visual assets." },
      { name: "Interactive Web (Framer)", desc: "Building robust, animated, and deployment-ready web experiences." },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24 px-6 sm:px-10 lg:px-20 border-t border-border-dim bg-background-dim/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 
            id="skills-title"
            className="text-4xl md:text-5xl font-serif italic text-foreground mb-6"
          >
            Skills & Expertise
          </h2>
          <p className="text-muted max-w-2xl text-lg leading-relaxed">
            A comprehensive toolkit designed to bridge the gap between human needs and business objectives. From initial strategy to pixel-perfect execution.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10"
        >
          {groupedSkills.map((group, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative flex flex-col p-8 sm:p-10 bg-white/[0.02] border border-border-dim hover:border-accent/30 rounded-2xl transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-accent/5"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transform scale-150 group-hover:scale-110 transition-all duration-700 pointer-events-none">
                <group.icon size={120} />
              </div>
              
              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="p-3 bg-accent/10 text-accent rounded-xl transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-accent/20">
                  <group.icon size={24} />
                </div>
                <h3 className="text-xl font-medium tracking-wide text-foreground">
                  {group.category}
                </h3>
              </div>
              
              <div className="space-y-8 relative z-10 flex-grow">
                {group.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group/item">
                    <h4 className="text-sm uppercase tracking-widest text-foreground font-bold mb-2 group-hover/item:text-accent transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
