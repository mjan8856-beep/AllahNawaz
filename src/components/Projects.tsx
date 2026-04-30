import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Palette, ExternalLink, ArrowRight, ArrowUpRight, X, Calendar, Clock, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import FocusTrap from 'focus-trap-react';

interface Project {
  title: string;
  tag: string;
  timeline: string;
  complexity: "Standard" | "High" | "Enterprise";
  status: "Live" | "Case Study" | "Archived";
  completionDate: string;
  elevatorPitch: string;
  problemStatement: string;
  strategicSolution: string;
  uxPillars?: {
    userCentricity: string;
    visualImpact: string;
    scalability: string;
  };
  technicalExpertise: string;
  result: string;
  behanceUrl: string;
  images: string[];
  testimonial?: {
    name: string;
    role: string;
    quote: string;
  };
}

const projects: Project[] = [
  {
    title: "Brain Book Branding",
    tag: "Brand Identity",
    timeline: "3 Weeks",
    complexity: "High",
    status: "Case Study",
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
    complexity: "Standard",
    status: "Live",
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
    complexity: "High",
    status: "Live",
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
    complexity: "Standard",
    status: "Archived",
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
    complexity: "Enterprise",
    status: "Live",
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
    ],
    testimonial: {
      name: "Sarah Jenkins",
      role: "VP of Marketing",
      quote: "The interface completely transformed how our team makes decisions. What used to take hours of data sifting now happens instantly, empowering our team to act on vital metrics immediately."
    }
  },
  {
    title: "Wellness Social",
    tag: "Social Media",
    timeline: "2 Weeks",
    complexity: "High",
    status: "Case Study",
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
    complexity: "Enterprise",
    status: "Case Study",
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
    complexity: "Standard",
    status: "Live",
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

  const filteredProjects = useMemo(() => projects.filter(project => {
    return selectedTag === "All" || project.tag === selectedTag;
  }), [selectedTag]);

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeProject]);

  const handleNextImage = useCallback(() => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
  }, [activeProject]);

  const handlePrevImage = useCallback(() => {
    if (!activeProject) return;
    setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  }, [activeProject]);

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
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextImage();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevImage();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, closeModal, handleNextImage, handlePrevImage]);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => titleRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeProject]);

  return (
    <section ref={sectionRef} id="projects" className="relative py-32 px-6 sm:px-10 lg:px-20 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground tracking-tight leading-tight">
              Selected <span className="text-muted">Work</span>
            </h2>
            <p className="text-muted text-lg mt-4 leading-relaxed font-light">
              A look at some of the products I've built, the problems they solve, and the value they bring to users.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                aria-pressed={selectedTag === tag}
                className={`px-5 py-2 rounded-full border text-xs font-medium tracking-wide transition-all duration-300 ${
                  selectedTag === tag 
                    ? 'bg-foreground border-foreground text-background' 
                    : 'bg-transparent border-white/[0.08] text-muted hover:border-white/[0.2] hover:text-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
              isOpen={activeProject?.title === project.title}
              onOpen={() => setActiveProject(project)}
              setTriggerRef={(el) => { triggerRefs.current[project.title] = el; }}
            />
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
      <AnimatePresence mode="wait">
        {activeProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="fixed inset-0 z-[100] flex justify-end overflow-hidden focus-within:outline-none"
          >
            <FocusTrap focusTrapOptions={{ initialFocus: false, escapeDeactivates: false, clickOutsideDeactivates: false }}>
              <div className="w-full h-full flex justify-end relative">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={closeModal}
                  className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
                  aria-hidden="true"
                />
                
                <motion.div
                  ref={modalRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby={`modal-title-${activeProject.title.replace(/\s+/g, '-')}`}
                  aria-describedby="modal-description"
                  initial={{ x: '100%', filter: 'blur(10px)' }}
                  animate={{ x: 0, filter: 'blur(0px)' }}
                  exit={{ x: '100%', filter: 'blur(10px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative w-full max-w-4xl h-full glass-nav border-l border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl shadow-black/80 ml-auto"
                >
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                <button 
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                >
                  <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button 
                  onClick={handleNext}
                  aria-label="Next project"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                >
                  <ChevronRight size={20} aria-hidden="true" />
                </button>
                <button 
                  ref={closeBtnRef}
                  onClick={closeModal}
                  aria-label="Close project details"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              {/* Image side with Carousel */}
              <div className="w-full lg:w-1/2 relative bg-black/20 custom-scrollbar flex items-center justify-center min-h-[40vh] lg:min-h-full group/carousel pt-24 lg:pt-0">
                {activeProject.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      aria-label="Previous image"
                      className="absolute left-4 lg:left-8 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 hover:bg-white hover:text-black transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                    >
                      <ChevronLeft size={24} aria-hidden="true" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      aria-label="Next image"
                      className="absolute right-4 lg:right-8 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/carousel:opacity-100 focus-visible:opacity-100 hover:bg-white hover:text-black transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
                    >
                      <ChevronRight size={24} aria-hidden="true" />
                    </button>
                  </>
                )}
                
                <div className="relative w-full h-full p-6 lg:p-12 flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-white/5"
                    >
                      <img 
                        src={activeProject.images[currentImageIndex]} 
                        alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover transition-all duration-1000 hover:scale-[1.03]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {activeProject.images.length > 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 p-2 rounded-full bg-black/40 backdrop-blur-md">
                    {activeProject.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        aria-label={`Go to image ${i + 1}`}
                        aria-current={i === currentImageIndex ? "true" : "false"}
                        className={`w-2.5 h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 ${i === currentImageIndex ? 'bg-white text-white w-6' : 'bg-white/40 hover:bg-white/70'}`}
                      />
                    ))}
                  </div>
                )}
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
                        delayChildren: 0.3
                      }
                    }
                  }}
                  className="space-y-12"
                >
                  <motion.div variants={{ hidden: { opacity: 0, x: 30, filter: "blur(10px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="space-y-6">
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

                  <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="grid grid-cols-2 gap-8 p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm">
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
                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="space-y-4" id="modal-description">
                      <h3 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">The Concept</h3>
                      <p className="text-2xl font-serif italic text-white/95 leading-relaxed">
                        "{activeProject.elevatorPitch}"
                      </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-12">
                      <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="space-y-4">
                        <h3 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">Problem Statement</h3>
                        <p className="text-white/70 leading-relaxed text-[15px] font-light">
                          {activeProject.problemStatement}
                        </p>
                      </motion.div>

                      <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="space-y-4">
                        <h3 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">Strategic Solution</h3>
                        <p className="text-white/70 leading-relaxed text-[15px] font-light">
                          {activeProject.strategicSolution}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }} className="space-y-6">
                      <h3 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">UX Core Pillars</h3>
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

                    <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="space-y-4 p-8 rounded-[2rem] bg-white/[0.04] border border-white/10">
                      <h3 className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/30">Project Result</h3>
                      <p className="text-white font-medium text-lg leading-relaxed">
                        {activeProject.result}
                      </p>
                    </motion.div>

                    {activeProject.testimonial && (
                      <motion.div variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} className="space-y-4 p-8 rounded-[2rem] bg-accent/10 border border-accent/20 relative overflow-hidden">
                        <div className="absolute -top-4 -left-4 text-accent/20">
                          <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                          </svg>
                        </div>
                        <div className="relative z-10">
                          <p className="text-white/90 italic font-serif text-lg leading-relaxed mb-6">"{activeProject.testimonial.quote}"</p>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white uppercase text-sm">
                              {activeProject.testimonial.name.slice(0, 2)}
                            </div>
                            <div>
                              <span className="block text-sm font-bold text-white">{activeProject.testimonial.name}</span>
                              <span className="block text-xs text-white/50">{activeProject.testimonial.role}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <div className="h-px w-full bg-white/5" role="presentation" />

                  <motion.div variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } }} className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={activeProject.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-2 py-5 bg-white text-black rounded-full font-bold text-[13px] uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#e5e5e5] transition-all transform hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Explore on Behance
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                    <button 
                      onClick={closeModal}
                      className="flex-1 py-5 rounded-full border border-white/10 font-bold text-[13px] uppercase tracking-widest hover:bg-white/5 transition-all text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      autoFocus
                    >
                      Return
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
              </div>
            </FocusTrap>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onOpen: () => void;
  setTriggerRef: (el: HTMLDivElement | null) => void;
  key?: string | number;
}

function ProjectCard({ 
  project, 
  index, 
  isOpen,
  onOpen, 
  setTriggerRef 
 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={(el) => {
        // @ts-ignore
        cardRef.current = el;
        setTriggerRef(el);
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group outline-none block"
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen();
        }
      }}
      onClick={onOpen}
    >
      <div className="relative glass-card rounded-[1.5rem] p-4 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-20px_rgba(108,92,231,0.15)] group-hover:border-white/[0.15]">
        {/* Project Image Container */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[var(--color-surface)] border border-white/[0.04] mb-6">
          <motion.img 
            style={{ y }}
            src={project.images[0]} 
            alt={`${project.title} cover`}
            className="absolute inset-x-0 w-full h-[115%] -top-[7.5%] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Content Section */}
        <div className="flex-grow flex flex-col px-2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono tracking-widest uppercase text-muted">{project.tag}</span>
            <div className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs font-mono tracking-widest uppercase text-white/30">{project.complexity}</span>
          </div>
          
          <h3 className="text-2xl font-display font-medium text-foreground mb-3 leading-tight group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm text-muted line-clamp-2 leading-relaxed font-light mb-6">
            {project.elevatorPitch}
          </p>

          <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-4">
            <span className="text-xs font-semibold text-foreground tracking-wide">View Case Study</span>
            <div className="w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

