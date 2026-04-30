import { motion } from 'motion/react';
import { Twitter, Instagram, Dribbble, ArrowRight, ExternalLink, Palette, Zap, Layout, Code, Search, ShoppingBag } from 'lucide-react';

const detailedSkills = [
  {
    name: "Product Design",
    desc: "End-to-end design from research to interactive high-fidelity prototypes.",
    icon: <Palette size={20} />
  },
  {
    name: "SaaS Dashboards",
    desc: "Defining complex workflows and data-dense interfaces for enterprise tools.",
    icon: <Layout size={20} />
  },
  {
    name: "E-commerce UI",
    desc: "Conversion-optimized store designs that balance brand and functionality.",
    icon: <ShoppingBag size={20} />
  },
  {
    name: "Web Development",
    desc: "Building clean, performant, and responsive frontends with modern tech.",
    icon: <Code size={20} />
  }
];

const skills = [
  "Product Design", "SaaS Design", "Web Development", "Branding", "User Research", "Interaction Design"
];

const experiences = [
  { role: "Product Designer", company: "Freelance Specialist", year: "2024 - Present" },
  { role: "Web Design Specialist", company: "NAVTTC Certified", year: "2023" },
  { role: "UI Designer", company: "Startup Project", year: "2022" },
  { role: "Graphic Designer", company: "Print & Digital Media", year: "2021" },
];

export default function About() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden" id="profile">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">Expert Designer</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-gradient">
            Allah Nawaz,<br/>
            <span className="text-white/40">Your Design Specialist</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Product Designer passionate about turning ideas into beautiful, user-friendly digital products.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          {/* Left: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="glass-card rounded-[3rem] p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center relative z-10 overflow-hidden">
               {/* Background highlight detail */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none" />
               
               <div className="relative w-full sm:w-64 aspect-[4/5] rounded-[2.5rem] overflow-hidden">
                <img 
                  src="/profile.webp" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                  loading="lazy"
                  alt="Allah Nawaz"
                />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%]">
                  <div className="px-4 py-2 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center gap-2 shadow-xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">Available for Work</span>
                  </div>
                </div>
              </div>

            <div className="flex-1 flex flex-col gap-8 w-full">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-display font-medium text-foreground">Hello, I am<br/>Allah Nawaz</h3>
                <p className="text-muted text-sm leading-relaxed">Product Designer aiming to help your business grow with honest and intentional design.</p>
              </div>

              <div className="flex items-center gap-4">
                <a href="https://www.tiktok.com/@anjanmalikjan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors group/social" aria-label="TikTok">
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] font-bold">TikTok</span>
                  </div>
                </a>
                <div className="w-px h-6 bg-white/10" />
                <a href="https://pk.linkedin.com/in/allah-nawaz-256a81286" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ExternalLink size={18} />
                </a>
                <div className="w-px h-6 bg-white/10" />
                <a href="https://instagram.com/allahnawaz.design" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram size={18} />
                </a>
                <div className="w-px h-6 bg-white/10" />
                <a href="https://behance.net/allahnawaz175" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Dribbble size={18} />
                </a>
              </div>

              <div className="h-px w-full bg-white/5" />

              <a href="#contact" className="w-full py-4 bg-accent text-black rounded-full font-bold text-sm hover:bg-[#f0f0f0] hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Connect with me
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

          {/* Right: Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[2.5rem] p-8 sm:p-10 flex flex-col gap-10"
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white/90">
                I help businesses build digital products that people actually want to use. Instead of just making things look pretty, I focus on solving real problems, making apps easy to navigate, and creating designs that help your business grow.
              </p>
            </div>

            <div className="h-px w-full bg-white/5" />

            <div className="space-y-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Core Expertise</span>
                <h3 className="text-2xl font-display font-bold">Key Capabilities</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {detailedSkills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col gap-3 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      {skill.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white transition-colors">{skill.name}</h4>
                      <p className="text-xs text-muted leading-relaxed line-clamp-2">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px w-full bg-white/5" />

            <div className="flex flex-col gap-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="flex justify-between items-center py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors group">
                  <div className="flex flex-col">
                    <span className="text-white font-bold">{exp.role}</span>
                    <span className="text-muted text-sm">{exp.company}</span>
                  </div>
                  <span className="text-white/40 text-sm font-mono">{exp.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
