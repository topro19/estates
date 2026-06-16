"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { LinkPreview } from "./link-preview";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

const services: ServiceItem[] = [
  {
    number: "01.",
    title: "Tailored Acquisitions",
    description: "Securing off-market architectural masterpieces through global sourcing channels.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1920&auto=format&fit=crop",
    url: "/#acquisitions"
  },
  {
    number: "02.",
    title: "Discreet Private Sales",
    description: "Quietly transferring assets to vetted buyers without MLS or public listing footprints.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=1920&auto=format&fit=crop",
    url: "/#private-sales"
  },
  {
    number: "03.",
    title: "Provenance Verification",
    description: "Comprehensive historical and architectural authentication for premium estates.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=90&w=1920&auto=format&fit=crop",
    url: "/#advisory"
  }
];

export default function InteractiveServices() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative z-10">
      {/* Section Title — in normal flow above the grid */}
      <div className="mb-12 md:mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-brass bg-brass/10 border border-brass/20 px-3.5 py-1.5 rounded-full w-fit inline-block mb-5">
          Bespoke Services
        </span>
        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-navy tracking-tight leading-[1.05]">
          Crafting Legacies{" "}
          <span className="text-brass italic">through</span>{" "}
          Discreet Brokerage
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 items-stretch relative">
      
        {/* Left Column: Description & Clickable Service Tabs */}
        <div className="flex flex-col justify-start space-y-8 lg:col-span-4 pr-0 lg:pr-12 py-8 lg:py-0">
          <p className="font-sans text-navy/70 text-base md:text-lg leading-relaxed max-w-lg">
            Astute operates at the intersection of architecture, luxury, and absolute privacy. We advise ultra-high-net-worth clients, family offices, and developers on acquiring and selling high-provenance assets globally with zero public trace.
          </p>

          <div className="space-y-4 pt-4 border-t border-brass/15 max-w-md">
            {services.map((service, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex gap-4 p-4 rounded-2xl cursor-pointer select-none transition-all duration-300 border ${
                    isActive 
                      ? "bg-white/40 border-brass/35 shadow-[0_8px_24px_rgba(184,147,75,0.06)] backdrop-blur-sm" 
                      : "bg-transparent border-transparent hover:bg-white/10 hover:border-white/10"
                  }`}
                >
                  <span className={`font-mono font-bold text-sm transition-colors duration-300 ${isActive ? "text-brass" : "text-brass/50"}`}>
                    {service.number}
                  </span>
                  <div>
                    <h4 className={`font-mono text-xs uppercase tracking-widest font-bold mb-1 transition-colors duration-300 ${isActive ? "text-navy" : "text-navy/70"}`}>
                      {service.title}
                    </h4>
                    <p className={`font-sans text-xs transition-colors duration-300 ${isActive ? "text-navy/80 font-normal" : "text-navy/50"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Image that stretches to match the left column height */}
        <motion.div 
          whileHover={{ y: -6, scale: 1.008 }}
          transition={{ type: "spring", stiffness: 250, damping: 22 }}
          className="relative h-[420px] sm:h-[520px] md:h-[620px] lg:h-auto lg:self-stretch lg:min-h-[600px] lg:col-span-8 rounded-3xl overflow-hidden group cursor-pointer shadow-[0_12px_40px_rgba(16,31,48,0.06)] hover:shadow-[0_30px_60px_rgba(16,31,48,0.15)]"
        >
          {/* Soft decorative background highlight inside the frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brass/5 via-sky/5 to-casper/10 opacity-70 pointer-events-none" />
          
          {/* Animated Glass Gloss Sweep on Hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full pointer-events-none z-30"
            initial={false}
            whileHover={{
              x: ["-100%", "100%"],
              transition: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.8,
                ease: "linear",
              },
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={services[activeTab].image}
                alt={services[activeTab].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 65vw"
                priority
              />
              {/* Rich vignette gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/5 pointer-events-none z-10" />
              {/* Top-down subtle gradient for the title area */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none z-10" />

              {/* Service name overlay at the top of the image */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 max-w-lg pointer-events-none select-none">
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-brass bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 mb-3 inline-block">
                  {services[activeTab].number} Service
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-tight leading-tight drop-shadow-lg">
                  {services[activeTab].title}
                </h3>
              </div>

              {/* Description at the bottom of the image */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 z-20 pointer-events-none select-none">
                <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed max-w-md drop-shadow-md">
                  {services[activeTab].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
