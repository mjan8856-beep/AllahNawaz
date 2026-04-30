import { motion } from 'motion/react';
import { 
  Palette, 
  Zap, 
  Workflow,
  Layers,
  ThumbsUp,
  LogIn
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { 
  db, 
  auth, 
  signInWithGoogle, 
  OperationType, 
  handleFirestoreError 
} from '../lib/firebase';
import { 
  doc, 
  onSnapshot, 
  runTransaction, 
  serverTimestamp,
  collection,
  query,
  where,
  getDocs
} from 'firebase/firestore';

const groupedSkills = [
  {
    category: "Design Specialization",
    icon: Palette,
    items: [
      { id: "product-strategy", name: "Product Strategy & UX", desc: "Connecting what users want with what the business needs." },
      { id: "saas-dashboards", name: "SaaS Dashboards", desc: "Making complicated data easy to understand and use." },
      { id: "design-systems", name: "Design Systems", desc: "Creating organized design rules to keep everything looking great." },
      { id: "mobile-ux", name: "Mobile-First UX", desc: "Designing apps that feel great on your phone or your computer." },
    ]
  },
  {
    category: "Methodology & Execution",
    icon: Workflow,
    items: [
      { id: "hi-fi-proto", name: "High-Fidelity Prototyping", desc: "Building clickable prototypes to test ideas before we write code." },
      { id: "interaction-design", name: "Interaction Design", desc: "Designing micro-interactions that breathe life into digital products." },
      { id: "conversion-opt", name: "Conversion Optimization", desc: "Making the buying process easier to help you get more sales." },
      { id: "human-research", name: "Human-Centered Research", desc: "Talking to users to understand what they really need." },
    ]
  },
  {
    category: "Software Ecosystem",
    icon: Layers,
    items: [
      { id: "figma", name: "Figma & FigJam", desc: "Where the magic happens. Prototyping, designing, and collaborating." },
      { id: "frontend", name: "Front-End Implementation", desc: "Writing clean, fast code to bring designs to life." },
      { id: "adobe-suite", name: "Adobe Creative Suite", desc: "Creating custom icons, logos, and graphics." },
      { id: "framer", name: "Interactive Web (Framer)", desc: "Building websites that look great and feel amazing to use." },
    ]
  }
];

export default function Skills() {
  const [user, setUser] = useState(auth.currentUser);
  const [endorsements, setEndorsements] = useState<Record<string, number>>({});
  const [myEndorsements, setMyEndorsements] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [justEndorsed, setJustEndorsed] = useState<Record<string, boolean>>({});
  const [alreadyEndorsed, setAlreadyEndorsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((u) => {
      setUser(u);
    });

    const unsubscribeSkills = onSnapshot(collection(db, 'skills'), (snapshot) => {
      const counts: Record<string, number> = {};
      snapshot.forEach((doc) => {
        counts[doc.id] = doc.data().endorsementsCount || 0;
      });
      setEndorsements(counts);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'skills');
    });

    return () => {
      unsubscribeAuth();
      unsubscribeSkills();
    };
  }, []);

  const handleEndorse = async (skillId: string, skillName: string) => {
    if (!user) {
      try {
        await signInWithGoogle();
      } catch (err) {
        return;
      }
    }

    if (loading[skillId]) return;

    setLoading(prev => ({ ...prev, [skillId]: true }));

    try {
      const skillRef = doc(db, 'skills', skillId);
      const voterRef = doc(db, 'skills', skillId, 'voters', auth.currentUser!.uid);

      await runTransaction(db, async (transaction) => {
        const voterDoc = await transaction.get(voterRef);
        if (voterDoc.exists()) {
          throw new Error("You have already endorsed this skill.");
        }

        const skillDoc = await transaction.get(skillRef);
        if (!skillDoc.exists()) {
          transaction.set(skillRef, {
            name: skillName,
            endorsementsCount: 1
          });
        } else {
          transaction.update(skillRef, {
            endorsementsCount: (skillDoc.data().endorsementsCount || 0) + 1
          });
        }

        transaction.set(voterRef, {
          userId: auth.currentUser!.uid,
          timestamp: serverTimestamp()
        });
      });
      
      setJustEndorsed(prev => ({ ...prev, [skillId]: true }));
      setMyEndorsements(prev => ({ ...prev, [skillId]: true }));
    } catch (error) {
      if (error instanceof Error && error.message.includes("already endorsed")) {
        setMyEndorsements(prev => ({ ...prev, [skillId]: true }));
        setAlreadyEndorsed(prev => ({ ...prev, [skillId]: true }));
        setTimeout(() => setAlreadyEndorsed(prev => ({ ...prev, [skillId]: false })), 500);
      } else {
        handleFirestoreError(error, OperationType.WRITE, `skills/${skillId}`);
      }
    } finally {
      setLoading(prev => ({ ...prev, [skillId]: false }));
    }
  };

  return (
    <section id="skills" className="py-32 px-6 sm:px-10 lg:px-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white">Skills & Toolkit</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight">
              Tools & <span className="text-white/40">Expertise</span>
            </h2>
            <p className="text-muted text-lg mt-6 leading-relaxed">
              Everything I use to turn ideas into reality.
            </p>
          </div>
          
          {!user && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => signInWithGoogle()}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-sm shadow-xl shadow-white/5"
            >
              <LogIn size={16} />
              Sign in to Endorse
            </motion.button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedSkills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2.5rem] flex flex-col gap-10 hover:bg-white/[0.06] transition-all duration-500 group"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <group.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{group.category}</h3>
              </div>
              
              <div className="flex flex-col gap-10">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-start gap-6">
                    <div className="flex-grow">
                      <h4 className="text-base font-bold text-white mb-2 leading-tight">{item.name}</h4>
                      <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                    </div>
                    
                    <button 
                      onClick={() => handleEndorse(item.id, item.name)}
                      disabled={loading[item.id] || (myEndorsements[item.id] && !alreadyEndorsed[item.id])}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-[1.25rem] transition-all duration-300 relative ${
                        myEndorsements[item.id] 
                        ? 'bg-white text-black' 
                        : 'bg-white/5 border border-white/5 hover:border-white/20 text-white/40 hover:text-white'
                      }`}
                    >
                      <motion.div
                        animate={justEndorsed[item.id] ? { scale: [1, 1.3, 1], rotate: [0, -15, 15, 0] } : alreadyEndorsed[item.id] ? { x: [0, -4, 4, -4, 4, 0] } : {}}
                      >
                        <ThumbsUp size={18} fill={myEndorsements[item.id] ? "currentColor" : "none"} />
                      </motion.div>
                      <span className="text-[12px] font-bold">{endorsements[item.id] || 0}</span>
                      
                      {alreadyEndorsed[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: -25 }} exit={{ opacity: 0 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-3 py-1.5 rounded-xl font-bold whitespace-nowrap shadow-xl"
                        >
                          Already Endorsed
                        </motion.div>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
