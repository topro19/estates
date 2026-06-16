"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { GlassButton } from "./glass-button";

export function CtaBanner() {
  return (
    <section className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="relative w-full rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-brass/20 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-12">
        
        {/* Background Image with Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000"
            alt="Luxury Estate"
            fill
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          {/* Gradient to darken the left side for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
          {/* Gradient to darken the right side slightly for the card */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-transparent to-transparent"></div>
        </div>

        {/* Left Column: CTA Content */}
        <div className="relative z-10 flex flex-col items-start w-full md:w-1/2">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-brass/50 bg-black/50 backdrop-blur-sm text-brass text-xs uppercase tracking-[0.2em] font-mono">
            Private Access
          </div>
          
          <h2 className="text-3xl md:text-5xl font-mono text-bone mb-6 leading-tight uppercase tracking-wide">
            Your next <br />
            <span className="text-brass italic transform -skew-x-12 inline-block">masterpiece</span> <br />
            starts here.
          </h2>
          
          <p className="text-bone/70 text-sm md:text-base font-mono mb-10 max-w-md leading-relaxed">
            From initial viewing to private acquisition in days, not months. Astute keeps every detail perfectly orchestrated, so nothing falls through the cracks.
          </p>

          <GlassButton className="mt-4 px-10 py-4 text-sm">
            GET STARTED
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </GlassButton>
        </div>

        {/* Right Column: Testimonial Card */}
        <div className="relative z-10 w-full md:w-[450px]">
          <div className="bg-black/60 backdrop-blur-xl border border-brass/30 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Subtle glow effect behind card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brass/20 blur-[50px] rounded-full pointer-events-none"></div>
            
            <div className="mb-6 relative">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brass/50 relative mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
                  alt="Marcus Chen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="font-mono text-bone/90 italic text-base md:text-lg mb-8 leading-relaxed">
               "We secured our new estate four weeks early because the dossiers were finally unambiguous. I wish we had Astute two years ago."
            </p>

            <div className="flex items-end justify-between">
              <div>
                <div className="font-mono text-bone font-bold text-sm tracking-wider uppercase mb-1">Marcus Chen</div>
                <div className="font-mono text-brass/70 text-xs tracking-widest uppercase">Global Investor</div>
              </div>
              
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-brass text-brass" />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
