import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const StrategicEmpathyAnimation = () => (
  <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
    <motion.svg viewBox="0 0 100 100" className="w-full h-full text-accent overflow-visible">
      <motion.circle 
        cx="35" cy="50" r="20" 
        stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: [0, 5, 0], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="65" cy="50" r="20" 
        stroke="currentColor" strokeWidth="2" fill="none"
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: [0, -5, 0], opacity: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.path 
        d="M 40 50 Q 50 35 60 50" 
        stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  </div>
);

const UserCenteredAnimation = () => (
  <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
    <motion.svg viewBox="0 0 100 100" className="w-full h-full text-accent overflow-visible">
      {/* Center User */}
      <motion.circle 
        cx="50" cy="50" r="10" 
        fill="currentColor"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orbit 1 */}
      <motion.circle 
        cx="50" cy="50" r="30" 
        stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4"
        animate={{ rotate: 360 }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      {/* Node on Orbit 1 */}
      <motion.circle 
        cx="50" cy="20" r="4" 
        fill="currentColor"
        animate={{ rotate: 360 }}
        style={{ transformOrigin: '50px 50px' }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Orbit 2 */}
      <motion.circle 
        cx="50" cy="50" r="45" 
        stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 6"
        animate={{ rotate: -360 }}
        style={{ transformOrigin: 'center' }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      {/* Node on Orbit 2 */}
      <motion.circle 
        cx="5" cy="50" r="3" 
        fill="currentColor"
        animate={{ rotate: -360 }}
        style={{ transformOrigin: '50px 50px' }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </motion.svg>
  </div>
);

export default function WhyDesign() {
  return (
    <section className="py-32 px-6 sm:px-10 lg:px-20 bg-background relative border-t border-border-dim/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5"
        >
          <Quote size={40} className="text-accent mb-8 opacity-50" />
          <h2 className="text-4xl md:text-5xl font-serif italic text-foreground leading-tight">
            Design isn't just <br />
            <span className="text-accent">aesthetic</span>. It's <br />
            strategic empathy.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-6 text-lg text-muted/90 leading-relaxed font-sans">
            <p>
              I believe every digital product should feel like **second nature**. My goal is to bridge the gap between complex functionality and human instinct, creating tools that are as easy to use as they are powerful.
            </p>
            <p>
              By focusing on **user psychology and intentional design**, I help companies build trust with their customers. I don't just design screens; I design the way users feel when they interact with your brand—ensuring every click is a step toward their goal.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border-dim">
            <div className="flex flex-col">
              <StrategicEmpathyAnimation />
              <h4 className="text-accent text-[10px] uppercase tracking-widest font-bold mb-2">Strategic Empathy</h4>
              <p className="text-sm text-foreground/80 lowercase">Reduce cognitive load. Maximize conversion.</p>
            </div>
            <div className="flex flex-col">
              <UserCenteredAnimation />
              <h4 className="text-accent text-[10px] uppercase tracking-widest font-bold mb-2">User-Centered</h4>
              <p className="text-sm text-foreground/80 lowercase">Precision in every pixel. Logic in every layer.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
