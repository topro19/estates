"use client"

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";

import { GlassButton } from "@/components/ui/glass-button";

export const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto bg-black text-bone relative overflow-hidden">
      <div className="z-10">
        <span className="block mb-4 text-[10px] md:text-xs text-brass font-mono uppercase tracking-[0.2em]">
          Dynamic Living
        </span>
        <h3 className="font-mono text-3xl md:text-5xl font-bold text-bone mb-6 tracking-widest uppercase">
          Change your <br/><span className="text-brass">perspective</span>
        </h3>
        
        <TextGradientScroll 
          text="Every Astute property is designed to offer diverse experiences. From the intimate warmth of a study to the expansive views of a living room, each space transitions effortlessly to match your lifestyle."
          className="text-sm md:text-base text-bone/70 my-4 md:my-6 font-mono leading-relaxed text-balance mb-8"
        />

        <GlassButton className="mt-4">
          Explore Portfolio
        </GlassButton>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800",
  },
  {
    id: 9,
    src: "/assets/estate_about_us_1781081634051.png",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800", // repeated
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800", // repeated
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800", // repeated
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800", // repeated
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800", // repeated
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800", // repeated
  },
  {
    id: 16,
    src: "/assets/estate_about_us_1781081634051.png", // repeated
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring", bounce: 0.2 }}
      className="w-full h-full rounded-sm overflow-hidden bg-brass/10"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 4000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] md:h-[600px] gap-2 z-10 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-brass/5 to-transparent mix-blend-overlay pointer-events-none"></div>
      {squares.map((sq) => sq)}
    </div>
  );
};
