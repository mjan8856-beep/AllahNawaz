import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    role: "CEO at TechFlow",
    text: "Allah transformed our complex backend into a dashboard that our team actually enjoys using. His focus on reducing user friction is unparalleled.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager at Zenith",
    text: "The e-commerce design Allah delivered saw a 25% increase in conversion within the first month. He doesn't just design; he strategizes.",
  },
  {
    name: "Marcus Thorne",
    role: "Founder of FitTrack",
    text: "Working with Allah was a seamless experience. He built a design system that allowed us to scale our product 3x faster than expected.",
  }
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          id="testimonials-title"
          initial={{ opacity: 0, letterSpacing: "5px" }}
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif italic text-foreground mb-16 text-center"
        >
          Client Success Stories
        </motion.h2>

        <motion.ul 
          className="grid md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((t, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              className="p-8 bg-white/[0.02] border border-border-dim rounded-xl hover:bg-white/[0.04] transition-colors"
            >
              <figure className="h-full flex flex-col">
                <Quote className="text-accent mb-6 opacity-40" size={32} aria-hidden="true" />
                <div className="flex gap-1 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, starIndex) => <Star key={starIndex} size={12} className="fill-accent text-accent" aria-hidden="true" />)}
                </div>
                <blockquote className="text-muted text-sm leading-relaxed mb-8 italic flex-grow">
                  <p>"{t.text}"</p>
                </blockquote>
                <figcaption>
                  <h3 className="text-foreground font-serif italic">{t.name}</h3>
                  <p className="text-accent text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
