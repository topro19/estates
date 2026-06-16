"use client";

import React, { useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollPathProps {
  className?: string;
}

export function ScrollPath({ className }: ScrollPathProps) {
  // Track scroll on the entire window to drive the animation
  const { scrollYProgress } = useScroll();
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  // A sleek, architectural curved path mapped from 0 to 100 in a viewBox
  // This physically weaves through the sections: starts left, crosses right, crosses left, centers
  const pathString = "M 15 0 C 15 20, 85 20, 85 40 C 85 60, 15 60, 15 80 C 15 90, 50 95, 50 100";

  // Raw scroll progress for zero-lag drawing
  const pathLength = scrollYProgress;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!pathRef.current || !dotRef.current) return;
    const length = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(length * latest);
    
    // Map SVG coordinates (0-100) exactly to absolute CSS percentages
    // This perfectly synchronizes the HTML dot with the stretched SVG path regardless of screen height!
    dotRef.current.style.left = `${point.x}%`;
    dotRef.current.style.top = `${point.y}%`;
  });

  return (
    <div className={cn("absolute inset-0 pointer-events-none z-0 overflow-hidden", className)}>
      {/* Blueprint grid background - now scrolls WITH the page like a real blueprint */}
      <div className="absolute inset-0 flex items-start justify-center opacity-10 pointer-events-none">
        <div 
          className="w-full h-full" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(197, 160, 89, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 160, 89, 0.2) 1px, transparent 1px)`, 
            backgroundSize: '100px 100px' 
          }}
        />
      </div>

      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="none" 
          className="w-full h-full absolute inset-0 opacity-50"
        >
          {/* Faint guide line (the blueprint path) */}
          <path
            d={pathString}
            stroke="rgba(197,160,89,0.15)"
            strokeWidth="0.2"
            strokeDasharray="1 1"
            className="vector-rendering-geometricPrecision"
          />
          
          {/* Illuminated trail */}
          <motion.path
            ref={pathRef}
            d={pathString}
            stroke="#c5a059"
            strokeWidth="0.4"
            style={{ pathLength }}
            className="vector-rendering-geometricPrecision"
          />
        </svg>

        {/* The thin luminous point */}
        <div
          ref={dotRef}
          className="absolute w-3 h-3 bg-[#c5a059] rounded-full z-10 shadow-[0_0_15px_2px_rgba(197,160,89,0.8)] -translate-x-1/2 -translate-y-1/2"
          style={{ top: '0%', left: '15%' }}
        />
      </div>
    </div>
  );
}
