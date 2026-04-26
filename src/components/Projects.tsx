import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, ArrowRight, Palette, ChevronLeft, ChevronRight, ImageOff, Linkedin, X, Maximize2, Clock, Calendar, Search } from 'lucide-react';

const TiktokIcon = ({ size = 24, className = '', "aria-hidden": ariaHidden }: { size?: number, className?: string, "aria-hidden"?: boolean | "true" | "false" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden={ariaHidden}
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.622a8.182 8.182 0 0 0 4.77 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
  </svg>
);

const UpworkIcon = ({ size = 24, className = '', "aria-hidden": ariaHidden }: { size?: number, className?: string, "aria-hidden"?: boolean | "true" | "false" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden={ariaHidden}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v4c0 1.1.9 2 2 2s2-.9 2-2V8h2v4c0 2.21-1.79 4-4 4s-4-1.79-4-4V8z"/>
  </svg>
);

const FiverrIcon = ({ size = 24, className = '', "aria-hidden": ariaHidden }: { size?: number, className?: string, "aria-hidden"?: boolean | "true" | "false" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden={ariaHidden}>
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9 16H6v-6h3c1.657 0 3 1.343 3 3s-1.343 3-3 3zm9-6h-3v4c0 1.105.895 2 2 2s2-.895 2-2v-4zm-4.5 3c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5S13.5 15.485 13.5 13z"/>
  </svg>
);

const projects = [
  {
    title: "Global SaaS Analytics",
    tag: "Product Strategy",
    timeline: "3 Months",
    completionDate: "Sept 2025",
    stack: "Figma • Design Systems • React",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    challenge: "Fragmented membership data causing high administrative churn.",
    solution: "A unified analytics ecosystem that reduced task-time by 40% and improved data visibility.",
    testimonial: {
      quote: "The unified dashboard fundamentally changed how we manage our data. We saved countless administrative hours.",
      author: "Client feedback"
    },
    behanceUrl: "https://www.behance.net/gallery/237971145/Conectlab",
    images: [
      "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1000&h=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000&h=600",
      "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  },
  {
    title: "E-commerce Mobile App",
    tag: "UX Research",
    timeline: "6 Weeks",
    completionDate: "Q4 2025",
    stack: "Figma • ProtoPie • UX Lab",
    technologies: ["React Native", "Firebase", "Stripe"],
    challenge: "High checkout abandonment due to technical user friction.",
    solution: "A conversion-focused 3-step checkout flow optimized for mobile-first shoppers.",
    testimonial: {
      quote: "Our checkout completion rate increased by dramatically after launching the new intuitive flow.",
      author: "Client feedback"
    },
    behanceUrl: "https://www.behance.net/gallery/247688047/Fintech-Mobile-App-UIUX-Concept-Payfast",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000&h=600",
      "/input_file_1.png",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  },
  {
    title: "Smarter Influencer AI",
    tag: "AI & Marketing",
    timeline: "8 Weeks",
    completionDate: "Jan 2026",
    stack: "React • Node.js • Gemini AI",
    technologies: ["Node.js", "Gemini AI", "Tailwind CSS"],
    challenge: "Traditional influencer marketing lacks predictable ROI and data-driven creator matching.",
    solution: "An AI-powered platform that predicts content performance and matches brands with high-conversion creators.",
    testimonial: {
      quote: "A visionary design that makes complex AI data incredibly intuitive and actionable.",
      author: "Client feedback"
    },
    behanceUrl: "https://www.behance.net/gallery/237969847/Smarter-Influencer-Marketingwith-AI",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000&h=600",
      "/input_file_0.png",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  }
];

function ProjectCarousel({ images, title, onImageClick }: { images: string[], title: string, onImageClick: (index: number) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Slower cycle when hovering
    }
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleImageError = () => {
    setFailedImages((prev) => new Set(prev).add(currentIndex));
  };

  const isImageFailed = failedImages.has(currentIndex);

  return (
    <div 
      className="relative w-full aspect-[16/10] overflow-hidden border-b border-border-dim group/carousel bg-white/[0.05]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCurrentIndex(0);
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} image gallery`}
    >
      <AnimatePresence mode="popLayout">
        {isImageFailed ? (
          <motion.div
            key={`fallback-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-center gap-3 bg-white/[0.02] text-muted p-4 text-center"
            aria-live="polite"
          >
            <ImageOff size={32} className="opacity-20" aria-hidden="true" />
            <p className="text-[10px] uppercase tracking-widest font-mono opacity-50">Mockup unavailable</p>
          </motion.div>
        ) : (
          <motion.button
            key={currentIndex}
            onClick={(e) => {
              e.preventDefault();
              onImageClick(currentIndex);
            }}
            className="w-full h-full relative focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset group/imgbtn block p-0 overflow-hidden"
            aria-label={`View larger version of ${title} mockup ${currentIndex + 1}`}
          >
            <motion.img 
              src={images[currentIndex]} 
              alt={`${title} mockup ${currentIndex + 1} of ${images.length}`}
              initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: isHovered ? 1.1 : 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={handleImageError}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/imgbtn:opacity-100 transition-opacity duration-300 pointer-events-none">
              <Maximize2 size={32} className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] scale-75 group-hover/imgbtn:scale-100 transition-transform duration-300" aria-hidden="true" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 pointer-events-none" />
      
      {/* Navigation Arrows */}
      <div className={`absolute inset-0 flex items-center justify-between px-4 z-30 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <button 
          onClick={handlePrev}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-accent hover:text-black transition-all focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Previous mockup"
        >
          <ChevronLeft size={16} aria-hidden="true" />
        </button>
        <button 
          onClick={handleNext}
          className="p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-accent hover:text-black transition-all focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Next mockup"
        >
          <ChevronRight size={16} aria-hidden="true" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20" role="tablist" aria-label="Mockup selection">
        {images.map((_, i) => (
          <button 
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(i);
            }}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to mockup ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${
              i === currentIndex ? 'w-6 bg-accent' : 'w-1.5 bg-white/30 hover:bg-white/50'
            }`} 
          />
        ))}
      </div>

      {/* Hover Message */}
      <div className={`absolute top-4 right-4 text-[8px] uppercase tracking-widest bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-white/10 transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        Hover to cycle
      </div>
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="p-0 bg-white/[0.02] border border-border-dim rounded-xl h-full flex flex-col overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full aspect-[16/10] bg-white/5 border-b border-border-dim" />
      
      {/* Content Skeleton */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div className="h-6 w-24 bg-white/5 rounded-full" />
          <div className="h-4 w-4 bg-white/5 rounded-full" />
        </div>
        
        <div className="h-8 w-3/4 bg-white/5 rounded mb-2" />
        
        <div className="flex justify-between items-center mb-4">
          <div className="h-4 w-32 bg-white/5 rounded" />
          <div className="flex gap-2">
            <div className="h-6 w-20 bg-white/5 rounded-full" />
          </div>
        </div>
        
        <div className="flex gap-2 mb-6">
          <div className="h-4 w-12 bg-white/5 rounded" />
          <div className="h-4 w-16 bg-white/5 rounded" />
          <div className="h-4 w-14 bg-white/5 rounded" />
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="border-l-2 border-white/5 pl-4">
            <div className="h-3 w-16 bg-white/5 rounded mb-2" />
            <div className="h-3 w-full bg-white/5 rounded mb-1" />
            <div className="h-3 w-5/6 bg-white/5 rounded" />
          </div>
          <div className="border-l-2 border-white/5 pl-4">
            <div className="h-3 w-16 bg-white/5 rounded mb-2" />
            <div className="h-3 w-full bg-white/5 rounded mb-1" />
            <div className="h-3 w-4/5 bg-white/5 rounded" />
          </div>
        </div>
        
        <div className="mt-auto pt-6 border-t border-border-dim/50 flex flex-wrap justify-between gap-4">
          <div className="h-4 w-28 bg-white/5 rounded" />
          <div className="flex gap-2">
            <div className="h-6 w-6 bg-white/5 rounded-full" />
            <div className="h-6 w-6 bg-white/5 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ projectIndex: number, imageIndex: number } | null>(null);
  const [sharedProject, setSharedProject] = useState<{ index: number, social: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const yDecor1 = useTransform(scrollYProgress, [0, 1], ["-10%", "30%"]);
  const yDecor2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  useEffect(() => {
    // Simulate data fetching delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightbox(prev => {
          if (!prev) return prev;
          const currentImages = projects[prev.projectIndex].images;
          return { ...prev, imageIndex: (prev.imageIndex + 1) % currentImages.length };
        });
      }
      if (e.key === 'ArrowLeft') {
        setLightbox(prev => {
          if (!prev) return prev;
          const currentImages = projects[prev.projectIndex].images;
          return { ...prev, imageIndex: (prev.imageIndex - 1 + currentImages.length) % currentImages.length };
        });
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    if (lightbox) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => closeBtnRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const filteredProjects = projects.filter(project => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.tag.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    );
  });

  return (
    <section ref={sectionRef} id="featured" className="relative py-32 px-6 sm:px-10 lg:px-20 border-t border-border-dim overflow-hidden">
      <motion.div style={{ y: yDecor1 }} className="absolute -right-40 top-40 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <motion.div style={{ y: yDecor2 }} className="absolute -left-20 bottom-40 w-64 h-64 bg-foreground/5 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
        <motion.h2
          initial={{ opacity: 0, letterSpacing: "5px" }}
          whileInView={{ opacity: 1, letterSpacing: "0px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif italic text-foreground m-0"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full md:w-72"
        >
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-muted" aria-hidden="true" />
          </div>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-border-dim rounded-full bg-white/[0.02] text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all"
            aria-label="Search projects by title, tag, or technology"
          />
        </motion.div>
      </div>

      {filteredProjects.length === 0 && !isLoading ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-muted text-lg">No projects found matching "{searchQuery}"</p>
          <button 
            onClick={() => setSearchQuery("")}
            className="mt-4 text-accent hover:underline focus:outline-none"
          >
            Clear Search
          </button>
        </motion.div>
      ) : (
      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {isLoading
          ? Array.from({ length: 3 }).map((_, index) => (
              <motion.li key={`skeleton-${index}`} variants={cardVariants}>
                <ProjectSkeleton />
              </motion.li>
            ))
          : filteredProjects.map((project, index) => {
            const originalIndex = projects.indexOf(project);
            return (
          <motion.li
            key={originalIndex}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              y: -8
            }}
            className="p-0 bg-white/[0.02] border border-border-dim rounded-xl transition-all duration-500 flex flex-col justify-between group h-full relative overflow-hidden focus-within:ring-2 focus-within:ring-accent hover:shadow-2xl hover:shadow-accent/5 hover:border-accent/30"
          >
            {/* Image Container */}
            <ProjectCarousel 
              images={project.images} 
              title={project.title} 
              onImageClick={(imageIndex) => setLightbox({ projectIndex: originalIndex, imageIndex })} 
            />

            <div className="p-8 relative z-10 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <span 
                  className="text-[10px] bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-[0.2em] text-accent font-bold"
                >
                  {project.tag}
                 </span>
                 <ArrowRight size={18} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-serif italic text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div className="text-[11px] font-mono text-muted uppercase tracking-wider">
                  {project.stack}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {project.completionDate && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted/80 uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded-full border border-border-dim inline-flex w-fit">
                      <Calendar size={12} aria-hidden="true" />
                      <span>{project.completionDate}</span>
                    </div>
                  )}
                  {project.timeline && (
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted/80 uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded-full border border-border-dim inline-flex w-fit">
                      <Clock size={12} aria-hidden="true" />
                      <span>{project.timeline}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
                <div className="bg-white/[0.03] p-4 rounded-lg">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-accent mb-1">Challenge</h4>
                  <p className="text-[11px] text-muted leading-relaxed">{project.challenge}</p>
                </div>
                <div className="bg-white/[0.03] p-4 rounded-lg">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest text-accent mb-1">Solution</h4>
                  <p className="text-[11px] text-muted leading-relaxed">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="text-[9px] uppercase font-bold tracking-widest px-2 py-1 bg-white/5 border border-white/10 text-muted rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="border-l-2 border-accent/20 pl-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Challenge</p>
                  <p className="text-muted text-xs leading-relaxed">{project.challenge}</p>
                </div>
                <div className="border-l-2 border-accent/60 pl-4">
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-1">Solution</p>
                  <p className="text-foreground/80 text-xs leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {project.testimonial && (
                <div className="mb-6 p-4 bg-accent/5 border border-accent/10 rounded-lg">
                  <p className="text-xs italic text-foreground/90 font-serif leading-relaxed mb-2">"{project.testimonial.quote}"</p>
                  <p className="text-[10px] uppercase tracking-widest text-accent font-bold">— {project.testimonial.author}</p>
                </div>
              )}

              <div className="mt-auto pt-6 flex items-center gap-4 flex-wrap gap-y-4 border-t border-border-dim/50">
                <a 
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow text-[11px] font-bold uppercase tracking-widest text-muted hover:text-accent transition-colors flex items-center gap-2 group/link focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-sm py-1"
                  aria-label={`View ${project.title} portfolio on Behance`}
                >
                  <Palette size={14} className="group-hover/link:scale-110 transition-transform text-accent/70" aria-hidden="true" />
                  View Portfolio <ExternalLink size={14} className="opacity-0 group-hover/link:opacity-100 transition-all -translate-x-2 group-hover/link:translate-x-0" aria-hidden="true" />
                </a>
                
                <div className="flex items-center gap-3 relative">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, y: 5 }}
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(project.behanceUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setSharedProject({ index: originalIndex, social: 'LinkedIn' });
                      setTimeout(() => setSharedProject(null), 3000);
                    }}
                    className="text-muted hover:text-[#0077b5] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background focus:ring-[#0077b5] rounded-full p-1 -m-1 inline-flex items-center justify-center transform-gpu"
                    aria-label={`Share ${project.title} on LinkedIn`}
                  >
                    <Linkedin size={16} aria-hidden="true" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, y: 5 }}
                    href={`https://www.tiktok.com/@yourusername`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setSharedProject({ index: originalIndex, social: 'TikTok' });
                      setTimeout(() => setSharedProject(null), 3000);
                    }}
                    className="text-muted hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background focus:ring-foreground rounded-full p-1 -m-1 inline-flex items-center justify-center transform-gpu"
                    aria-label={`Share ${project.title} on TikTok`}
                  >
                    <TiktokIcon size={16} aria-hidden="true" />
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, y: 5 }}
                    href={`https://www.upwork.com/freelancers/~01210004bc57b3b0ba`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setSharedProject({ index: originalIndex, social: 'Upwork' });
                      setTimeout(() => setSharedProject(null), 3000);
                    }}
                    className="text-muted hover:text-[#14a800] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background focus:ring-[#14a800] rounded-full p-1 -m-1 inline-flex items-center justify-center transform-gpu"
                    aria-label={`View my profile on Upwork`}
                  >
                    <UpworkIcon size={16} aria-hidden="true" />
                  </motion.a>
                  
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, y: 5 }}
                    href={`https://www.fiverr.com/users/allahnawaz744/portfolio`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setSharedProject({ index: originalIndex, social: 'Fiverr' });
                      setTimeout(() => setSharedProject(null), 3000);
                    }}
                    className="text-muted hover:text-[#1dbf73] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-background focus:ring-[#1dbf73] rounded-full p-1 -m-1 inline-flex items-center justify-center transform-gpu"
                    aria-label={`View my profile on Fiverr`}
                  >
                    <FiverrIcon size={16} aria-hidden="true" />
                  </motion.a>
                  
                  <AnimatePresence>
                    {sharedProject?.index === originalIndex && (
                      <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.9 }}
                        animate={{ opacity: 1, y: -30, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className="absolute right-0 bottom-full mb-2 bg-foreground text-background text-[9px] uppercase tracking-widest font-bold px-2.5 py-1.5 rounded-md shadow-xl border border-white/10 whitespace-nowrap pointer-events-none"
                      >
                        Opening {sharedProject.social}...
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Subtle gradient glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.li>
            );
        })}
      </motion.ul>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 flex flex-col items-center gap-6"
      >
        <p className="text-muted text-sm italic font-serif">Curious to see more of my design journey?</p>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, y: 5 }}
          href="https://behance.net/allahnawaz175" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-12 py-5 bg-foreground text-background rounded-full font-bold transition-all shadow-xl shadow-black/20 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background transform-gpu"
        >
          Explore Full Portfolio on Behance
          <Palette size={20} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
        </motion.a>
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
            onClick={() => setLightbox(null)}
          >
            <motion.button
              ref={closeBtnRef}
              whileTap={{ scale: 0.9, y: 5 }}
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-accent text-white hover:text-black rounded-full backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background z-50 transform-gpu"
              aria-label="Close Lightbox"
            >
              <X size={24} aria-hidden="true" />
            </motion.button>
            
            {projects[lightbox.projectIndex].images.length > 1 && (
              <>
                <motion.button
                  whileTap={{ scale: 0.9, y: 5 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(prev => {
                      if (!prev) return prev;
                      const currentImages = projects[prev.projectIndex].images;
                      return { ...prev, imageIndex: (prev.imageIndex - 1 + currentImages.length) % currentImages.length };
                    });
                  }}
                  className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-accent text-white hover:text-black rounded-full backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background z-50 group transform-gpu"
                  aria-label="Previous Image"
                >
                  <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9, y: 5 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(prev => {
                      if (!prev) return prev;
                      const currentImages = projects[prev.projectIndex].images;
                      return { ...prev, imageIndex: (prev.imageIndex + 1) % currentImages.length };
                    });
                  }}
                  className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-accent text-white hover:text-black rounded-full backdrop-blur-md transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background z-50 group transform-gpu"
                  aria-label="Next Image"
                >
                  <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </motion.button>
              </>
            )}

            <motion.div
              key={`${lightbox.projectIndex}-${lightbox.imageIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[85vh] w-full aspect-[16/10] flex items-center justify-center overflow-hidden rounded-xl bg-black/40 shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[lightbox.projectIndex].images[lightbox.imageIndex]}
                alt={`${projects[lightbox.projectIndex].title} mockup ${lightbox.imageIndex + 1} of ${projects[lightbox.projectIndex].images.length}`}
                className="w-full h-full object-contain"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs tracking-widest uppercase font-mono border border-white/10">
                {lightbox.imageIndex + 1} / {projects[lightbox.projectIndex].images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
