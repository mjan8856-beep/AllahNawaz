import { motion, AnimatePresence } from 'motion/react';
import { Palette, ExternalLink, ArrowRight, X, Calendar, Clock, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

const projects = [
  {
    title: "Brain Book Branding",
    tag: "Brand Identity",
    timeline: "3 Weeks",
    completionDate: "Dec 2025",
    elevatorPitch: "A clean, cognitive-focused visual identity that elevates learning retention.",
    problemStatement: "Friction in User Journey: Users felt overwhelmed by traditional, cluttered educational interfaces, preventing sustained engagement.",
    strategicSolution: "Implemented a high-contrast, minimalist visual system utilizing geometric forms to signify neural pathways, establishing immediate trust and reducing cognitive load.",
    uxPillars: {
      userCentricity: "Streamlined navigation elements to reduce decision fatigue.",
      visualImpact: "Employed deep contrasts and stark geometry for a premium, authoritative feel.",
      scalability: "Crafted a robust Figma component library ensuring consistent application across all touchpoints."
    },
    technicalExpertise: "Figma • Adobe Creative Cloud",
    result: "Achieved a sophisticated, intuitive identity that dramatically increased user retention and platform credibility.",
    behanceUrl: "https://www.behance.net/gallery/218563555/brain-book-e-comerce-landing-pages",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/84667a218563555.67a371a228d8b.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/0fbb4a218563369.67a37133b4034.png"
    ]
  },
  {
    title: "Clevarex Book",
    tag: "E-commerce",
    timeline: "2 Weeks",
    completionDate: "Jan 2026",
    elevatorPitch: "A high-converting product page designed to instill trust and drive sales through clarity.",
    problemStatement: "Information Overload: Potential buyers were struggling to parse complex product benefits, leading to high bounce rates.",
    strategicSolution: "Designed a linear, progressive-disclosure layout that chunked information logically, pairing compelling copywriting with elegant typography to guide the user naturally to the CTA.",
    uxPillars: {
      userCentricity: "Removed extraneous choices, focusing squarely on the core value proposition.",
      visualImpact: "Utilized lush whitespace and serif typography for a refined, literary aesthetic.",
      scalability: "Built with responsive Auto-layout rules for flawless mobile-to-desktop scaling."
    },
    technicalExpertise: "Figma • Webflow",
    result: "A pixel-perfect e-commerce experience that substantially boosted conversion metrics and brand perception.",
    behanceUrl: "https://www.behance.net/gallery/216365471/Clevarex-Book-(Ecomerce-Product-Design)",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/387626216365471.677eb030b492e.png"
    ]
  },
  {
    title: "Alpine Shilajeet",
    tag: "E-commerce",
    timeline: "3 Weeks",
    completionDate: "Dec 2025",
    elevatorPitch: "An immersive online storefront reflecting the purity and premium quality of natural supplements.",
    problemStatement: "Lack of Visual Hierarchy: The previous design failed to convey the premium, organic nature of the product, resulting in low perceived value.",
    strategicSolution: "Curated an earth-toned palette and sophisticated typography to establish an organic yet luxurious brand presence, emphasizing provenance and quality.",
    uxPillars: {
      userCentricity: "Simplified the path-to-purchase with a frictionless, single-page checkout flow.",
      visualImpact: "Integrated high-fidelity, earthy imagery with subtle parallax effects for depth.",
      scalability: "Established a comprehensive design token system for future product line expansions."
    },
    technicalExpertise: "Figma • Framer",
    result: "A world-class digital storefront that authenticates the brand and drives high-value conversions.",
    behanceUrl: "https://www.behance.net/gallery/216364721/Alpine-Shilajeet-(E-comerce-Product-Design)",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/da0332216364721.677eae5893b44.png"
    ]
  },
  {
    title: "Freelancer Brand",
    tag: "Graphic Design",
    timeline: "1 Week",
    completionDate: "Feb 2026",
    elevatorPitch: "A bold visual language enabling independent talent to cut through marketplace noise.",
    problemStatement: "Generic Aesthetic: Freelancers struggled to differentiate themselves, relying on templated designs that failed to communicate specific expertise.",
    strategicSolution: "Developed a bold, disruptive visual identity characterized by high-contrast typography and vivid color blocking, instantly capturing attention and conveying authority.",
    uxPillars: {
      userCentricity: "Designed social assets to be instantly readable in fast-scrolling environments.",
      visualImpact: "Used stark, brutalist-inspired layouts for maximum 'scroll-stopping' power.",
      scalability: "Created a modular template system allowing rapid generation of personalized assets."
    },
    technicalExpertise: "Adobe Photoshop • Illustrator",
    result: "A sleek, commanding visual toolkit that elevates individual freelancer profiles to agency-level professionalism.",
    behanceUrl: "https://www.behance.net/gallery/248269629/FrelancerGIG",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/42dc1c248269629.69edebbc342ca.png",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  },
  {
    title: "AI Influencer",
    tag: "UI/UX Design",
    timeline: "5 Weeks",
    completionDate: "Mar 2026",
    elevatorPitch: "A highly intuitive dashboard synthesizing complex AI metrics for instantaneous strategic action.",
    problemStatement: "Cognitive Overload: Users were overwhelmed by dense, unstructured data, leading to decision paralysis.",
    strategicSolution: "Architected a streamlined dashboard prioritizing critical KPIs. Emphasized clear visual hierarchy and progressive disclosure to surface actionable insights dynamically.",
    uxPillars: {
      userCentricity: "Mapped user workflows to ensure one-click access to top programmatic recommendations.",
      visualImpact: "Applied a dark-mode thematic with neon data visualizations for a futuristic, polished aesthetic.",
      scalability: "Implemented a fully systematic UI kit with nested components for data tables and charts."
    },
    technicalExpertise: "Figma • React Prototypes",
    result: "A sophisticated, highly functional data product that empowers brand managers with zero learning curve.",
    behanceUrl: "https://www.behance.net/gallery/237969847/Smarter-Influencer-Marketingwith-AI",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/ecc1ed237969847.690b5825347ce.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/2800_webp/ecc1ed237969847.690b5825347ce.png"
    ]
  },
  {
    title: "Wellness Social",
    tag: "Social Media",
    timeline: "2 Weeks",
    completionDate: "Feb 2026",
    elevatorPitch: "Trust-building digital assets that translate complex wellness advice into digestible, premium content.",
    problemStatement: "Lack of Trust & Clarity: Existing content felt clinical and unapproachable, failing to engage the target demographic.",
    strategicSolution: "Pioneered an editorial-style social grid. Merged warm, organic typography with highly structured layouts to convey both empathy and medical authority.",
    uxPillars: {
      userCentricity: "Prioritized typographic legibility and scannability on mobile viewports.",
      visualImpact: "Introduced a soft, monochromatic palette elevated by fine-line iconography.",
      scalability: "Engineered a master template file with global variables for seamless weekly updates."
    },
    technicalExpertise: "Figma • Adobe Creative Suite",
    result: "A cohesive, elegant social presence that fostered deep audience engagement and brand authority.",
    behanceUrl: "https://www.behance.net/gallery/245328781/WelllNessWell-Shalajit-Social-Media-Posts",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/40b779245328781.69ab010361f7b.png",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  },
  {
    title: "Work AI Automation",
    tag: "AI & Automation",
    timeline: "4 Weeks",
    completionDate: "Jan 2026",
    elevatorPitch: "An enterprise-grade platform interface orchestrating autonomous workflows with absolute clarity.",
    problemStatement: "Friction in User Journey: Complex operational configurations caused onboarding drop-offs and high user error rates.",
    strategicSolution: "Reimagined the interaction model, replacing dense configuration forms with an intuitive, node-based visual builder to democratize automation setup.",
    uxPillars: {
      userCentricity: "Introduced drag-and-drop mechanics paired with contextual tooltips to eliminate guesswork.",
      visualImpact: "Employed a stark, technical visual language with micro-interactions that confirm system states.",
      scalability: "Built atop a strict atomic design system, ensuring consistency across hundreds of micro-states."
    },
    technicalExpertise: "Figma • Framer Motion",
    result: "A mission-critical B2B application that drastically reduced time-to-value for enterprise teams.",
    behanceUrl: "https://www.behance.net/gallery/247688047/Fintech-Mobile-App-UIUX-Concept-Payfast",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f14b3b247688047.69e090ead2f6a.png",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  },
  {
    title: "Pet Food UI",
    tag: "UI/UX Design",
    timeline: "3 Weeks",
    completionDate: "Dec 2025",
    elevatorPitch: "A vibrant, frictionless retail experience anticipating the needs of modern pet owners.",
    problemStatement: "Poor Findability: Catalog density made it difficult for users to quickly filter and locate specific dietary products.",
    strategicSolution: "Restructured the information architecture, introducing smart categorization and an omni-present search capability within a joyful, approachable UI.",
    uxPillars: {
      userCentricity: "Implemented one-click reordering and explicit trust signals throughout the checkout phase.",
      visualImpact: "Balanced playful, rounded UI elements with crisp, high-end product photography.",
      scalability: "Standardized card components and padding variables for effortless inventory scaling."
    },
    technicalExpertise: "Figma • E-commerce Workflows",
    result: "An engaging, conversion-optimized interface that merges brand warmth with transactional efficiency.",
    behanceUrl: "https://www.behance.net/gallery/229096673/Pet-food-and-sales-web-ui",
    images: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/f7a198229096673.685e7051c9889.png",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=1000&h=600"
    ]
  }
];

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const triggerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const tags = ["All", ...Array.from(new Set(projects.map(p => p.tag)))];

  const filteredProjects = projects.filter(project => {
    return selectedTag === "All" || project.tag === selectedTag;
  });

  const currentIndex = activeProject ? filteredProjects.findIndex(p => p.title === activeProject.title) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex < filteredProjects.length - 1) {
      setActiveProject(filteredProjects[currentIndex + 1]);
    } else {
      setActiveProject(filteredProjects[0]);
    }
  }, [currentIndex, filteredProjects]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setActiveProject(filteredProjects[currentIndex - 1]);
    } else {
      setActiveProject(filteredProjects[filteredProjects.length - 1]);
    }
  }, [currentIndex, filteredProjects]);

  const closeModal = useCallback(() => {
    const title = activeProject?.title;
    setActiveProject(null);
    if (title && triggerRefs.current[title]) {
      // Small delay to ensure modal is closed before focusing
      setTimeout(() => triggerRefs.current[title]?.focus(), 50);
    }
  }, [activeProject]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeProject) return;
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements || focusableElements.length === 0) return;
        
        const focusableNodes = Array.from<HTMLElement>(focusableElements).filter(el => {
          return !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true';
        });

        if (focusableNodes.length === 0) return;

        const first = focusableNodes[0];
        const last = focusableNodes[focusableNodes.length - 1];
        
        if (!modalRef.current?.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
          return;
        }
        
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, handleNext, handlePrev, closeModal]);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => titleRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 px-6 sm:px-10 lg:px-20 bg-background overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">Recent Projects</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
              Recent <span className="text-white/40">Designs</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed">
              Detailed exploration of design challenges and strategic solutions across graphic, web, and UI/UX projects.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                aria-pressed={selectedTag === tag}
                className={`px-6 py-2.5 rounded-full border text-[11px] uppercase font-bold tracking-[0.1em] transition-all duration-300 ${
                  selectedTag === tag 
                    ? 'bg-white border-white text-black' 
                    : 'bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-[2.5rem]"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.title}`}
              ref={(el: HTMLDivElement | null) => { triggerRefs.current[project.title] = el; }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveProject(project);
                }
              }}
              onClick={() => setActiveProject(project)}
            >
              <div className="glass-card rounded-[2rem] p-2 sm:p-3 hover:-translate-y-2 hover:scale-[1.02] h-full flex flex-col group/inner">
                <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 bg-black/50">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} cover`}
                    className="w-full h-full object-cover mix-blend-luminosity opacity-80 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category icon badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Palette size={16} className="text-white" />
                  </div>
                </div>

                <div className="px-3 pb-3 flex-grow flex flex-col gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[11px] uppercase tracking-[0.2em] font-semibold text-white/40">
                      <span>{project.tag}</span>
                      <span>{project.completionDate}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-medium text-white group-hover:text-white transition-colors">{project.title}</h3>
                  </div>

                  <div className="mt-auto pt-5 flex justify-between items-center border-t border-white/10">
                    <span className="text-xs uppercase tracking-widest font-semibold text-white/50 group-hover:text-white transition-colors flex items-center gap-2">
                      View Project
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://behance.net/allahnawaz175"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-black rounded-full font-bold text-sm flex items-center gap-3 hover:bg-white/90 transition-all shadow-xl shadow-white/5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            See All Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />
            
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`modal-title-${activeProject.title.replace(/\s+/g, '-')}`}
              aria-describedby="modal-description"
              layoutId={`project-${activeProject.title}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-nav rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/50 bg-background/95"
            >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button 
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button 
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
                <button 
                  ref={closeBtnRef}
                  onClick={closeModal}
                  aria-label="Close project details"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              {/* Image side */}
              <div className="w-full lg:w-1/2 overflow-y-auto bg-black/20 custom-scrollbar">
                <motion.div 
                  key={activeProject.title + "-images"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6 p-6 lg:p-12 lg:pt-24"
                >
                  {activeProject.images.map((img, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.8 }}
                      className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/5"
                    >
                      <img 
                        src={img} 
                        alt={`${activeProject.title} screenshot ${i + 1}`}
                        className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Info side */}
              <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 overflow-y-auto pt-24 lg:pt-24">
                <motion.div 
                  key={activeProject.title + "-content"}
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  className="space-y-12"
                >
                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
                    <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] font-bold text-white/40">
                      <span className="px-3 py-1 rounded bg-white/5 border border-white/5">{activeProject.tag}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                      <span>{activeProject.completionDate}</span>
                    </div>
                    <h2 
                      ref={titleRef}
                      tabIndex={-1}
                      id={`modal-title-${activeProject.title.replace(/\s+/g, '-')}`} 
                      className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-tighter focus:outline-none"
                    >
                      {activeProject.title}
                    </h2>
                  </motion.div>

                  <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-8 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 flex items-center gap-2">
                        <Clock size={14} aria-hidden="true" className="text-gray-400" />
                        Timeline
                      </span>
                      <p className="text-base font-medium text-white">{activeProject.timeline}</p>
                    </div>
                    <div className="space-y-2">
                       <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 flex items-center gap-2">
                        <Globe size={14} aria-hidden="true" className="text-gray-400" />
                        Expertise
                      </span>
                      <p className="text-sm font-medium text-white line-clamp-1">{activeProject.technicalExpertise}</p>
                    </div>
                  </motion.div>

                  <div className="space-y-10">
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4" id="modal-description">
                      <h4 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">The Concept</h4>
                      <p className="text-2xl font-serif italic text-white/95 leading-relaxed">
                        "{activeProject.elevatorPitch}"
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4">
                        <h4 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">The Challenge</h4>
                        <p className="text-white/70 leading-relaxed text-[15px] font-light">
                          {activeProject.problemStatement}
                        </p>
                      </motion.div>

                      <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4">
                        <h4 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">Strategic Solution</h4>
                        <p className="text-white/70 leading-relaxed text-[15px] font-light">
                          {activeProject.strategicSolution}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-6">
                      <h4 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">UX Architecture</h4>
                      <ul className="grid grid-cols-1 gap-6">
                        <li className="flex gap-5 group/item">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                             <div className="w-2 h-2 rounded-full bg-white/40" />
                          </div>
                          <div>
                            <span className="font-bold text-white/90 block mb-1 text-sm">User-Centricity</span>
                            <span className="text-white/50 text-[13px] font-light leading-relaxed block">{activeProject.uxPillars?.userCentricity}</span>
                          </div>
                        </li>
                        <li className="flex gap-5 group/item">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                             <div className="w-2 h-2 rounded-full bg-white/40" />
                          </div>
                          <div>
                            <span className="font-bold text-white/90 block mb-1 text-sm">Visual Impact</span>
                            <span className="text-white/50 text-[13px] font-light leading-relaxed block">{activeProject.uxPillars?.visualImpact}</span>
                          </div>
                        </li>
                        <li className="flex gap-5 group/item">
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover/item:bg-white/10 transition-colors">
                             <div className="w-2 h-2 rounded-full bg-white/40" />
                          </div>
                          <div>
                            <span className="font-bold text-white/90 block mb-1 text-sm">Scalability</span>
                            <span className="text-white/50 text-[13px] font-light leading-relaxed block">{activeProject.uxPillars?.scalability}</span>
                          </div>
                        </li>
                      </ul>
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-4 p-8 rounded-[2rem] bg-white/[0.04] border border-white/10">
                      <h4 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">The Final Outcome</h4>
                      <p className="text-white font-medium text-lg leading-relaxed">
                        {activeProject.result}
                      </p>
                    </motion.div>
                  </div>

                  <div className="h-px w-full bg-white/5" role="presentation" />

                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={activeProject.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-2 py-5 bg-white text-black rounded-full font-bold text-[13px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#e5e5e5] transition-all transform hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      Explore on Behance
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <button 
                      onClick={closeModal}
                      className="flex-1 py-5 rounded-full border border-white/10 font-bold text-[13px] uppercase tracking-widest hover:bg-white/5 transition-all text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    >
                      Return
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

