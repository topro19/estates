"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function RevealHero() {
  const [isLoaded, setIsLoaded] = useState(() => {
    if (typeof window !== "undefined") {
      return !!(window as any).__preloaderComplete;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).__preloaderComplete) {
      setIsLoaded(true);
      return;
    }

    const handleComplete = () => {
      setIsLoaded(true);
    };

    window.addEventListener("preloader-complete", handleComplete);
    return () => {
      window.removeEventListener("preloader-complete", handleComplete);
    };
  }, []);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the entire container relative to viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background sky transformations
  const bgScale = useTransform(scrollYProgress, [0, 0.7], [1.15, 1.0]);
  const bgOpacity = useTransform(scrollYProgress, [0.7, 1], [1, 0.85]);

  // Logo transformations: starts semi-visible, fades in early, stays up, scales nicely
  const logoOpacity = useTransform(scrollYProgress, [0, 0.35], [0.3, 1]);
  const logoY = useTransform(scrollYProgress, [0, 0.75], [30, -30]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1.0]);

  // House transformations: slides up from bottom, scaled larger
  const houseY = useTransform(scrollYProgress, [0, 0.75], [280, 0]);
  const houseScale = useTransform(scrollYProgress, [0, 0.75], [1.1, 1.15]);

  // Scroll indicator transformations: fades out quickly
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const indicatorY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  return (
    <div id="hero" ref={containerRef} className="relative w-full h-[180vh] bg-cream">
      {/* Sticky viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-end">
        
        {/* Layer 1: Background Sky */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div 
            style={{ scale: bgScale, opacity: bgOpacity, willChange: "transform, opacity" }}
            className="w-full h-full"
          >
            <Image
              src="/idk/ChatGPT Image Jun 9, 2026, 10_39_01 AM.png"
              alt="Sky background"
              fill
              priority
              className="object-cover select-none pointer-events-none"
            />
            {/* Subtle gradient at the top to blend with fixed navigation */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-navy/60 to-transparent pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Layer 2: ASTUTE Logo Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 select-none pb-[50vh] md:pb-[44vh]">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="w-full"
          >
            <motion.div
              style={{ opacity: logoOpacity, y: logoY, scale: logoScale, willChange: "transform, opacity" }}
              className="w-full px-6 flex flex-col items-center justify-center"
            >
              <h1 
                className="font-serif text-[13vw] sm:text-[14vw] md:text-[13vw] lg:text-[14vw] font-medium tracking-[0.1em] text-[#13110F] leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.05)]"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                ASTUTE
              </h1>
            </motion.div>
          </motion.div>
        </div>

        {/* Layer 3: House Foreground */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-20 overflow-hidden h-full">
          <motion.div
            initial={{ y: 240, opacity: 0 }}
            animate={isLoaded ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 2.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="w-full flex justify-center items-end"
          >
            <motion.div
              style={{ y: houseY, scale: houseScale, willChange: "transform" }}
              className="relative w-full max-w-[1680px] aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/8.5] xl:aspect-[16/8] flex justify-center items-end origin-bottom"
            >
              <Image
                src="/idk/ChatGPT Image Jun 11, 2026, 12_04_32 PM.png"
                alt="Luxury Estate House"
                fill
                priority
                className="object-contain object-bottom pointer-events-none select-none"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Layer 3.1: Deep Background Clouds (Behind House - Flipped) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.45 } : {}}
          transition={{ duration: 2.2, delay: 0.4, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          className="absolute inset-x-0 bottom-[-200px] h-[75vh] sm:h-[80vh] md:h-[85vh] pointer-events-none z-15 flex items-end blur-[4px]"
        >
          <div className="relative w-full h-full scale-x-[-1]">
            <Image
              src="/idk/ChatGPT Image Jun 9, 2026, 10_45_31 AM.png"
              alt="Clouds Background Flipped"
              fill
              className="object-cover object-bottom select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Layer 3.2: Background Clouds (Behind House) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.6 } : {}}
          transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          className="absolute inset-x-0 bottom-[-150px] h-[75vh] sm:h-[80vh] md:h-[85vh] pointer-events-none z-15 flex items-end opacity-60 blur-[6px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/idk/ChatGPT Image Jun 9, 2026, 10_45_31 AM.png"
              alt="Clouds Background"
              fill
              className="object-cover object-bottom select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Layer 4a: Midground Clouds Low (In Front of House - Blurred) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.65 } : {}}
          transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          className="absolute inset-x-0 bottom-[-100px] h-[75vh] sm:h-[80vh] md:h-[85vh] pointer-events-none z-25 flex items-end opacity-65 blur-[8px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/idk/ChatGPT Image Jun 9, 2026, 10_45_31 AM.png"
              alt="Clouds Midground Blurred"
              fill
              className="object-cover object-bottom select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Layer 4b: Foreground Clouds Mid (In Front of House - Normal) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.75 } : {}}
          transition={{ duration: 2.2, delay: 0.4, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          className="absolute inset-x-0 bottom-[-50px] h-[75vh] sm:h-[80vh] md:h-[85vh] pointer-events-none z-30 flex items-end opacity-75 blur-[4px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/idk/ChatGPT Image Jun 9, 2026, 10_45_31 AM.png"
              alt="Clouds Foreground"
              fill
              className="object-cover object-bottom select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Layer 4c: Foreground Clouds High (In Front of House - Flipped) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.70 } : {}}
          transition={{ duration: 2.2, delay: 0.5, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          className="absolute inset-x-0 bottom-[0px] h-[75vh] sm:h-[80vh] md:h-[85vh] pointer-events-none z-35 flex items-end opacity-70 blur-[5px]"
        >
          <div className="relative w-full h-full scale-x-[-1]">
            <Image
              src="/idk/ChatGPT Image Jun 9, 2026, 10_45_31 AM.png"
              alt="Clouds Foreground Flipped"
              fill
              className="object-cover object-bottom select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Layer 4d: Deep Bottom Blend Gradient (Overlaying all clouds to fade them into light cream background) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
          style={{ willChange: "transform, opacity", transform: "translate3d(0,0,0)" }}
          className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-t from-cream via-cream/95 to-transparent pointer-events-none z-40"
        />

        {/* Layer 5: Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <motion.div
              style={{ opacity: indicatorOpacity, y: indicatorY, willChange: "transform, opacity" }}
              className="flex flex-col items-center gap-2 text-black/60 font-sans tracking-widest text-[10px] uppercase"
            >
              <span className="font-sans">Scroll to Explore</span>
              <div className="w-5 h-8 border border-black/40 rounded-full flex justify-center p-1">
                <motion.div 
                  animate={{ 
                    y: [0, 8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 h-1 bg-black/60 rounded-full" 
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>

      {/* Transition Cloud Layer (Scrolls up with the page to blend with the About section below) */}
      <div className="absolute bottom-[-50px] left-0 right-0 h-[40vh] pointer-events-none z-30 overflow-hidden">
        <div className="relative w-full h-full scale-x-[-1] opacity-40 blur-[6px]">
          <Image
            src="/idk/ChatGPT Image Jun 9, 2026, 10_45_31 AM.png"
            alt="Transition Clouds"
            fill
            className="object-cover object-bottom select-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
