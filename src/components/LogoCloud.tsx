import { motion } from 'motion/react';

const clients = [
  { name: "TechFlow", industry: "SaaS" },
  { name: "FitTrack", industry: "HealthTech" },
  { name: "Zenith", industry: "E-commerce" },
  { name: "GlobalPay", industry: "Fintech" },
  { name: "CloudScale", industry: "Infrastructure" },
  { name: "Nexus", industry: "AI Labs" },
];

export default function LogoCloud() {
  return (
    <section className="py-20 border-y border-border-dim/50 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted text-center mb-12 font-bold">
          Empowering Leading Brands & Startups Worldwide
        </p>
        
        <div className="relative w-full overflow-hidden">
          {/* Use two sets of logos for seamless infinite scroll */}
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex items-center gap-x-20 whitespace-nowrap opacity-50 grayscale hover:grayscale-0 transition-all duration-700 hover:[animation-play-state:paused]"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="group cursor-default flex flex-col items-center min-w-[150px]"
              >
                <div className="text-xl md:text-2xl font-serif italic text-foreground tracking-tight">
                  <span className="group-hover:text-accent transition-colors duration-300">{client.name}</span>
                </div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-muted group-hover:text-accent/50 transition-colors">{client.industry}</span>
              </div>
            ))}
          </motion.div>

          {/* Gradients to fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
