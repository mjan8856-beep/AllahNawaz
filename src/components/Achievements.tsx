import { motion } from 'motion/react';
import { Trophy, Award, Milestone } from 'lucide-react';

const achievements = [
  {
    title: "Certified Web Specialist",
    org: "NAVTTC Government of Pakistan",
    year: "2024",
    icon: Award
  },
  {
    title: "Featured on Behance",
    org: "Product Design Interaction Category",
    year: "2025",
    icon: Trophy
  },
  {
    title: "50+ Projects Delivered",
    org: "Global Startups & Brands",
    year: "2023-2026",
    icon: Milestone
  }
];

export default function Achievements() {
  return (
    <section id="experience" aria-labelledby="achievements-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          id="achievements-title"
          initial={{ opacity: 0, letterSpacing: "5px" }}
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif italic text-foreground mb-16 text-center"
        >
          Milestones & Recognition
        </motion.h2>

        <ul className="grid md:grid-cols-3 gap-12">
          {achievements.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                <item.icon className="text-accent" size={28} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-serif italic text-foreground mb-2">{item.title}</h3>
              <p className="text-muted text-xs uppercase tracking-widest font-bold mb-1">{item.org}</p>
              <span className="text-[10px] text-accent/60 font-mono">{item.year}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
