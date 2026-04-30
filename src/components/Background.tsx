import React from 'react';
import { motion } from 'motion/react';

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]"></div>
      
      {/* Dynamic blurred abstract shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          x: ['0%', '10%', '0%'],
          y: ['0%', '-10%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-white blur-[150px]"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
          x: ['0%', '-15%', '0%'],
          y: ['0%', '15%', '0%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-white blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.15, 0.08],
          x: ['0%', '5%', '0%'],
          y: ['0%', '10%', '0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-white blur-[120px]"
      />
      
      {/* Additional subtle highlights */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black backdrop-blur-[2px]"></div>
    </div>
  );
}
