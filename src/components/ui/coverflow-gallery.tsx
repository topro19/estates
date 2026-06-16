'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CoverflowGalleryProps {
  images: string[];
  bgClass?: string;
  cardWidth?: string;
  cardHeight?: string;
  translation?: number;
  mobileTranslation?: number;
}

export default function CoverflowGallery({ 
  images,
  bgClass = "bg-black border-y border-brass/10",
  cardWidth = "max-w-[280px] md:max-w-[550px]",
  cardHeight = "h-[300px] md:h-[450px]",
  translation = 180,
  mobileTranslation = 100
}: CoverflowGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(Math.floor(images.length / 2));
  const [translationStep, setTranslationStep] = useState(translation);

  useEffect(() => {
    const handleResize = () => {
      setTranslationStep(window.innerWidth < 768 ? mobileTranslation : translation);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [translation, mobileTranslation]);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Helper to determine the position of a card relative to center
  const getRelativePosition = (index: number) => {
    let diff = index - currentIndex;
    // Handle wrap around for a circular feel
    if (diff > Math.floor(images.length / 2)) {
      diff -= images.length;
    } else if (diff < -Math.floor(images.length / 2)) {
      diff += images.length;
    }
    return diff;
  };

  return (
    <div className={`w-full relative py-20 lg:py-32 overflow-hidden ${bgClass}`}>
      {/* Decorative background grid/lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10 flex justify-center gap-[20%]">
         <div className="w-px h-full bg-brass"></div>
         <div className="w-px h-full bg-brass"></div>
         <div className="w-px h-full bg-brass"></div>
      </div>
      
      <div className="w-full max-w-[95vw] mx-auto flex flex-col items-center justify-center relative">
        <div className={`relative w-full ${cardWidth} ${cardHeight} perspective-[1500px] flex items-center justify-center`}>
          <AnimatePresence initial={false}>
            {images.map((src, index) => {
              const relPos = getRelativePosition(index);
              
              // Only render items close to the center to save performance
              if (Math.abs(relPos) > 2) return null;

              // Calculate transforms based on relative position
              let translateX = 0;
              let rotateY = 0;
              let scale = 1;
              let zIndex = 30 - Math.abs(relPos);
              let opacity = 1;

              if (relPos === 0) {
                translateX = 0;
                rotateY = 0;
                scale = 1.2;
                zIndex = 40;
              } else if (relPos < 0) {
                // Left items
                translateX = relPos * translationStep; // px per step
                rotateY = 55; // Turn right
                scale = 1 - Math.abs(relPos) * 0.2;
                opacity = 1 - Math.abs(relPos) * 0.1;
              } else {
                // Right items
                translateX = relPos * translationStep; // px per step
                rotateY = -55; // Turn left
                scale = 1 - Math.abs(relPos) * 0.2;
                opacity = 1 - Math.abs(relPos) * 0.1;
              }

              return (
                <motion.div
                  key={src}
                  initial={{ opacity: 0 }}
                  animate={{
                    x: translateX,
                    rotateY: rotateY,
                    scale: scale,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 30,
                    mass: 0.8
                  }}
                  className="absolute w-full h-[85%] md:h-full cursor-pointer rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-[6px] md:border-[12px] border-bone bg-bone"
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="relative w-full h-[85%] md:h-[90%]">
                    <Image 
                      src={src} 
                      alt={`Gallery image ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, (max-width: 1024px) 75vw, 950px"
                      priority={relPos === 0}
                    />
                    {/* Dark overlay for inactive items */}
                    {relPos !== 0 && (
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300"></div>
                    )}
                  </div>
                  
                  {/* Footer area matching the reference image's white border with text */}
                  <div className="absolute bottom-0 left-0 right-0 h-[15%] md:h-[10%] bg-bone flex items-center justify-center">
                    <span className="font-serif text-[#C5A059] text-base md:text-xl italic opacity-0 transition-opacity duration-500" style={{ opacity: relPos === 0 ? 1 : 0 }}>
                      Masterpiece Collection
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls underneath the cards stack */}
        <div className="flex items-center gap-6 mt-16 md:mt-20 lg:mt-24 z-50">
          <button 
            onClick={handlePrev}
            className="bg-white/40 hover:bg-white/70 border border-navy/10 hover:border-navy/20 backdrop-blur-md rounded-full p-3 md:p-4 hover:scale-105 active:scale-95 transition-all text-navy shadow-md group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
          </button>
          
          <div className="font-mono text-sm md:text-base tracking-widest text-navy/60 font-medium select-none">
            <span className="text-navy">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="mx-2 text-brass/60">/</span>
            <span>{String(images.length).padStart(2, '0')}</span>
          </div>

          <button 
            onClick={handleNext}
            className="bg-white/40 hover:bg-white/70 border border-navy/10 hover:border-navy/20 backdrop-blur-md rounded-full p-3 md:p-4 hover:scale-105 active:scale-95 transition-all text-navy shadow-lg group"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}

