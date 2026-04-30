import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCloud from './components/LogoCloud';
import About from './components/About';
import Services from './components/Services';
import WhyDesign from './components/WhyDesign';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Process from './components/Process';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Impact from './components/Impact';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';

export default function App() {
  return (
    <div className="font-sans text-foreground bg-transparent min-h-screen relative overflow-hidden selection:bg-accent selection:text-black">
      <Background />
      <div className="grain-overlay" />
      <Navbar />
      <ScrollToTop />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <LogoCloud />
        <About />
        <Services />
        <WhyDesign />
        <Projects />
        <Experience />
        <Testimonials />
        <Impact />
        <Process />
        <Skills />
        <FAQ />
        <Contact />
      </motion.main>

      <Footer />
    </div>
  );
}
