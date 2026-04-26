import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most product design projects take between 3-6 weeks, depending on complexity. I prioritize quality and research to ensure the final product meets your business goals."
  },
  {
    question: "Do you offer development services?",
    answer: "I specialize in Product Design and prototyping. However, I provide production-ready files (Figma/Framer) and work closely with developers to ensure a flawless handoff."
  },
  {
    question: "How do you handle revisions?",
    answer: "My process is collaborative. We have check-ins at every stage (Strategy, Wireframes, UI). This reduces 'big surprises' and ensures the final result is exactly what you need."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          id="faq-title"
          initial={{ opacity: 0, letterSpacing: "5px" }}
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif italic text-foreground mb-16 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border border-border-dim rounded-xl overflow-hidden bg-white/[0.01]"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/[0.03] transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
              >
                <span className="text-foreground font-serif italic text-lg">{faq.question}</span>
                {openIndex === i ? <Minus size={20} className="text-accent" aria-hidden="true" /> : <Plus size={20} className="text-muted" aria-hidden="true" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-muted text-sm leading-relaxed border-t border-border-dim/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
