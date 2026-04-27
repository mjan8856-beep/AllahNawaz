import { motion } from 'motion/react';
import { Layout, PenTool, Figma, Palette } from 'lucide-react';

const services = [
  {
    title: "Website Design",
    description: "Designing breathtaking, user-centric websites that boost engagement, conversions, and growth, perfectly aligned with your brand",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800&h=500",
    className: "md:col-span-2",
  },
  {
    title: "Visual Systems",
    description: "Crafting distinctive, scalable, and cohesive visual identities that embody your brand's essence and vision",
    icon: PenTool,
    image: "https://framerusercontent.com/images/p6Im6dfknHAI0ig4NqDcO4WNpc.jpg",
    className: "md:row-span-2",
  },
  {
    title: "Graphic Design",
    description: "Crafting bold, engaging, and versatile graphic designs that elevate your brand and captivate your audience",
    icon: Palette,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=500",
    className: "md:col-span-1",
  },
  {
    title: "Framer Design",
    description: "Bringing ideas to life with interactive, user-centered Framer designs that simplify complexity and elevate user experience",
    icon: Figma,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500",
    className: "md:col-span-1",
  },
];

const tags = [
  "Copywriting", "Posters", "Framer Migration", "Video & Motion Graphics", "SEO", "Custom Code", "Icons"
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 sm:px-10 lg:px-20 bg-background flex justify-center">
      <div className="max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4">
             <div className="w-1 h-1 rounded-full bg-accent" />
             <span className="text-[10px] uppercase tracking-widest font-bold">Design services</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-left">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-gradient mt-4 tracking-tighter">
                Design <span className="text-white/40">Services</span>
              </h2>
              <p className="text-muted mt-6 max-w-md leading-relaxed">Explore a suite of design services to elevate your brand.</p>
            </div>
            <button className="px-8 py-4 bg-white text-black rounded-full text-sm font-bold hover:bg-white/90 transition-all shadow-xl shadow-white/5">Contact Now</button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-8 flex flex-col group overflow-hidden relative ${service.className}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                   <service.icon size={18} className="text-accent" />
                   <h3 className="text-xl font-display font-bold text-foreground tracking-tight">{service.title}</h3>
                </div>
                <p className="text-muted text-[13px] leading-relaxed max-w-sm mb-8 font-light">
                  {service.description}
                </p>
                
                <div className="mt-auto rounded-xl overflow-hidden glass-card border-white/5 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                   <img 
                    src={service.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    loading="lazy"
                    alt={service.title}
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Tags */}
        <div className="mt-20 overflow-hidden relative">
          <div className="flex gap-12 animate-marquee whitespace-nowrap py-4 border-y border-white/5">
            {[...tags, ...tags].map((tag, i) => (
              <span key={i} className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/20 hover:text-accent transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
