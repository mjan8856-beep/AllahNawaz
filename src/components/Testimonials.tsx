import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

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
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section aria-labelledby="testimonials-title" className="py-32 px-6 sm:px-10 lg:px-20 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="text-accent" size={14} />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">Reviews</span>
          </div>
          <h2 
            id="testimonials-title"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient tracking-tighter mb-4"
          >
            Client Success Stories
          </h2>
          <p className="text-muted max-w-xl mx-auto">Real feedback from clients who trusted my design expertise to elevate their brands successfully.</p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden px-4 md:px-12 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card rounded-[2.5rem] p-8 md:p-12 relative"
              >
                <Quote className="absolute top-8 right-12 text-white/5 w-24 h-24 rotate-180" aria-hidden="true" />
                
                <div className="flex flex-col gap-8 relative z-10">
                  <div className="flex gap-1" aria-label="5 star rating">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} size={16} className="fill-accent text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="text-xl md:text-2xl leading-relaxed text-white/90 font-light">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  <div className="flex items-center gap-4 mt-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl font-display font-bold text-white">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h3>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold mt-1">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between md:justify-center gap-8 px-4">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg disabled:opacity-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex gap-2" role="tablist">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  role="tab"
                  aria-selected={currentIndex === index}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-500 rounded-full ${
                    currentIndex === index 
                      ? 'w-8 bg-white' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors shadow-lg disabled:opacity-50"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
