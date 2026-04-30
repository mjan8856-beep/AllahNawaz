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
    <section id="experience" aria-labelledby="experience-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span 
              id="experience-title"
              className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-bold"
            >
              Experience
            </span>
            <div className="h-[1px] bg-border-dim flex-grow max-w-xs" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic text-foreground max-w-2xl">
            My professional journey so far.
          </h2>
        </motion.div>

        <div className="relative mt-12 sm:mt-20">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group border-t border-border-dim py-10 md:py-16 first:border-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 hover:bg-white/[0.01] transition-colors"
              >
                {/* Meta Column */}
                <div className="md:col-span-3 flex flex-col gap-2">
                  <div className="text-[11px] font-semibold text-muted uppercase tracking-[0.2em]">
                    {exp.period}
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-9 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-6">
                    {exp.company}
                  </p>

                  <p className="text-muted leading-relaxed mb-8 max-w-2xl font-light">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors rounded-full cursor-default"
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
