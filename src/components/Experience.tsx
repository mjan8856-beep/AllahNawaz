import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Product Designer",
    company: "Prime Estimate (Remote)",
    period: "May 2025 — Present",
    description: "Leading product design initiatives remotely. Collaborating with cross-functional teams to streamline workflows, enhance user experience, and deliver intuitive digital products.",
    skills: ["UX Strategy", "Figma", "Interaction Design", "Prototyping"]
  },
  {
    id: 2,
    role: "Freelance Product Designer",
    company: "Self-Employed",
    period: "2024 — Present",
    description: "Partnering with diverse clients globally to establish their digital presence. Delivering end-to-end design solutions from initial concept and wireframing to high-fidelity interactive prototypes.",
    skills: ["Web Design", "Client Communication", "Visual Design", "Freelancing"]
  },
  {
    id: 3,
    role: "Product Designer",
    company: "Profituned",
    period: "May 2024 — May 2025",
    description: "Designed core platform features focusing on data visualization and user engagement. Conducted continuous user research to validate design decisions and shipped multiple major product updates.",
    skills: ["Product Design", "Data Visualization", "User Testing", "Dashboard Design"]
  },
  {
    id: 4,
    role: "Product Design Intern",
    company: "design peeps",
    period: "Oct 2023 — Apr 2024",
    description: "Assisted the design team in creating wireframes, mockups, and responsive layouts. Actively participated in design critiques and contributed to the foundation of component libraries.",
    skills: ["Figma", "UI Design", "Wireframing", "Design Systems"]
  }
];

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim relative bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <h2 
              id="experience-title"
              className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-bold"
            >
              Experience
            </h2>
            <div className="h-[1px] bg-border-dim flex-grow max-w-xs" />
          </div>
          <p className="text-3xl md:text-5xl font-serif italic text-foreground max-w-2xl">
            My professional journey so far.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line connector */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border-dim/50 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-10 group"
              >
                {/* Timeline node */}
                <div className="hidden md:flex flex-col items-center mt-1 z-10">
                  <div className="w-[54px] h-[54px] rounded-full bg-white/[0.02] border border-border-dim flex items-center justify-center text-muted group-hover:text-accent group-hover:border-accent/50 transition-colors duration-300">
                    <Briefcase size={20} aria-hidden="true" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-white/[0.02] border border-border-dim rounded-2xl p-6 sm:p-8 hover:border-border-dim/80 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif italic text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-mono text-muted uppercase tracking-wider">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs font-mono text-muted bg-white/5 border border-border-dim px-3 py-1.5 rounded-full whitespace-nowrap w-fit">
                      <Calendar size={14} aria-hidden="true" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/5 text-muted hover:text-foreground hover:bg-white/10 transition-colors rounded-sm cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
