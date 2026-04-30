import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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
  },
  {
    name: "June Lee",
    role: "CEO of GreenRoots",
    text: "The strategic approach to brand design brought our vision to life. The visual elements developed elevated our aesthetic and aligned perfectly with our mission.",
  },
  {
    name: "Sofia Toms",
    role: "Founder at GreenK Studios",
    text: "The designs speak for themselves — bold, strategic, and impactful. The visuals resonated with our target audience and boosted our product's visibility.",
  },
  {
    name: "David Park",
    role: "CTO at Nexus AI",
    text: "He brings a rare combination of pure aesthetic talent and deep technical constraints understanding. His AI interfaces are clean, intuitive, and future-proof.",
  }
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-20">
        
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Star className="text-white" size={14} />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/80">Client Voices</span>
          </div>
          <h2 
            id="testimonials-title"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight leading-[1.1] mb-6"
          >
            Don't just take my word for it.
          </h2>
          <p className="text-muted text-lg md:text-xl">
            Partnering with visionary founders and product teams to deliver measurable business outcomes through design.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col gap-8 relative group break-inside-avoid"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem] pointer-events-none" />
              
              {/* Top Section: Stars */}
              <div className="flex gap-1" aria-label="5 star rating">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} size={14} className="fill-white text-white opacity-80" aria-hidden="true" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl leading-relaxed text-white/90 font-light relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/[0.04] relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sm font-display font-bold text-white uppercase shrink-0">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-white font-medium text-base truncate">{testimonial.name}</h3>
                  <p className="text-white/50 text-sm truncate">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
