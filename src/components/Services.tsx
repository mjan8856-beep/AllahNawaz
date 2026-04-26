import { motion } from 'motion/react';
import { Smartphone, Monitor, LayoutTemplate, Search, Blocks, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Product Design",
    description: "Crafting intuitive and engaging user interfaces for web and mobile applications, focusing on seamless user journeys.",
    icon: Monitor,
    features: ["Wireframing", "Prototyping", "Visual Design"]
  },
  {
    title: "Mobile App Design",
    description: "Designing native and cross-platform mobile experiences that feel responsive, natural, and perfectly adapted to the device.",
    icon: Smartphone,
    features: ["iOS & Android", "Touch Interaction", "App Store Assets"]
  },
  {
    title: "Design Systems",
    description: "Creating comprehensive, scalable design systems and component libraries to ensure consistency across your digital products.",
    icon: Blocks,
    features: ["Component Libraries", "Style Guides", "Documentation"]
  },
  {
    title: "User Research",
    description: "Uncovering actionable insights through user testing, interviews, and behavior analysis to guide product strategy.",
    icon: Search,
    features: ["Usability Testing", "User Interviews", "Data Analysis"]
  },
  {
    title: "Web Experience",
    description: "Designing high-converting landing pages and marketing websites that communicate your brand's unique value.",
    icon: LayoutTemplate,
    features: ["Landing Pages", "Responsive Design", "Interactions"]
  },
  {
    title: "Product Strategy",
    description: "Aligning user needs with business goals to define feature roadmaps and prioritize high-impact design initiatives.",
    icon: Sparkles,
    features: ["Roadmapping", "Ideation", "Market Analysis"]
  }
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="py-32 px-6 sm:px-10 lg:px-20 bg-background relative border-t border-border-dim/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 
              id="services-title"
              className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-bold"
            >
              Services
            </h2>
            <div className="h-[1px] bg-border-dim flex-grow max-w-xs" />
          </div>
          <p className="text-3xl md:text-5xl font-serif italic text-foreground max-w-3xl">
            Specialized design capabilities tailored to elevate your product.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-border-dim hover:border-accent/40 transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent/10" />
              
              <div className="w-12 h-12 bg-white/5 border border-border-dim rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 group-hover:scale-110 origin-left">
                <service.icon size={24} className="text-muted group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-serif italic text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-2 text-[11px] font-mono text-muted/80 uppercase tracking-wider">
                    <div className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
