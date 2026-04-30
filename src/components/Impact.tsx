import { motion, useInView, useAnimation, useIsomorphicLayoutEffect } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { TrendingUp, Users, Activity } from 'lucide-react';

const stats = [
  {
    value: 35,
    suffix: "%",
    prefix: "+",
    label: "Conversion Increase",
    description: "More people completing their purchases and hitting their goals.",
    icon: TrendingUp
  },
  {
    value: 50,
    suffix: "%",
    prefix: "+",
    label: "Engagement Rate",
    description: "Users spending more time and enjoying their experience.",
    icon: Users
  },
  {
    value: 20,
    suffix: "%",
    prefix: "+",
    label: "User Retention",
    description: "Fewer users leaving because the product is easy to understand and use.",
    icon: Activity
  }
];

function CountUp({ 
  to, 
  duration = 2, 
  prefix = "", 
  suffix = "" 
}: { 
  to: number, 
  duration?: number, 
  prefix?: string, 
  suffix?: string 
}) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTime: number | null = null;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * to));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, to, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums font-display font-medium text-5xl md:text-7xl lg:text-8xl text-foreground">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-32 px-6 sm:px-10 lg:px-20 flex justify-center border-t border-white/[0.04]">
      <div className="max-w-7xl w-full">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="w-2 h-2 rounded-full bg-accent opacity-80" />
             <span className="text-xs uppercase tracking-widest font-mono text-muted">Measurable Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-foreground tracking-tight leading-tight">
            Design that makes a <br/><span className="text-muted italic font-serif">real difference.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-px bg-white/[0.08]" aria-hidden="true" />
          
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col pt-4 md:pt-0"
            >
              <div className="relative z-10 w-14 h-14 rounded-xl bg-[var(--color-surface)] border border-white/[0.08] flex items-center justify-center text-muted mb-8 group overflow-hidden">
                <div className="absolute inset-0 bg-accent/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <stat.icon size={20} className="relative z-10 group-hover:text-accent transition-colors duration-300" />
              </div>
              
              <div className="mb-4">
                <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-display font-medium text-foreground">{stat.label}</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
