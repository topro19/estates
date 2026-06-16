"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 100) {
      const timeout = setTimeout(() => {
        onComplete();
      }, 400); // Small pause at 100 before exit starts
      return () => clearTimeout(timeout);
    }

    // Smooth, organic loading counts
    let delay = 12;
    if (count < 20) delay = 30;
    else if (count < 45) delay = 10;
    else if (count < 70) delay = 24; // Hesitation / cache prep
    else if (count < 90) delay = 8;  // Fast sweep
    else delay = 35;                 // Landing precision

    const timer = setTimeout(() => {
      setCount((prev) => Math.min(prev + 1, 100));
    }, delay);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  const letters = "ASTUTE".split("");

  // Container to stagger letter animations
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Letter animations
  const letterVariants = {
    hidden: { y: 40, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number] // Cast to tuple for type-safety
      } 
    },
  };

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
      className="fixed inset-0 bg-[#101F30] z-[9999] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Graphic Lines - SVG Blueprint Theme */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#101F30]/40 via-transparent to-[#101F30]/40 z-10" />

      {/* Main Branding Logo & Dividers */}
      <div className="flex flex-col items-center justify-center relative z-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex overflow-hidden px-4 py-2"
        >
          {letters.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-[0.15em] text-[#F4F1EB] select-none"
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Golden Line drawing from center */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.85, 0, 0.15, 1] }}
          className="h-[1px] bg-[#B8934B] w-48 md:w-56 mt-5 origin-center"
        />
      </div>

      {/* Rhythmic Count-up counter at bottom */}
      <div className="absolute bottom-16 flex flex-col items-center gap-2.5 z-20">
        <div className="font-mono text-xs tracking-widest text-[#F4F1EB]/40 select-none">
          <span className="text-[#B8934B] font-bold">{count < 10 ? `0${count}` : count}</span>
          <span className="text-white/10"> / 100</span>
        </div>
        <div className="w-28 h-[1px] bg-white/5 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-[#B8934B]"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
