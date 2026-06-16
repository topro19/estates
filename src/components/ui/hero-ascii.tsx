'use client';

import SideRays from "./side-rays";
import { GlassButton } from "./glass-button";

export default function HeroAscii() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-cream w-full">
      {/* SideRays background - placed on top right */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-0">
        <SideRays 
          rayColor1="#87AECF" 
          rayColor2="#E3EDF5" 
          intensity={1.0} 
          spread={2} 
          origin="top-right" 
          speed={1.0}
        />
      </div>

      {/* Video Background - hidden on mobile */}
      <div className="absolute right-[3%] top-1/2 -translate-y-1/2 w-[45%] h-[75vh] hidden lg:flex items-center justify-center z-10 pointer-events-none opacity-80 mix-blend-multiply overflow-hidden">
        {/* Container to crop out the bottom right watermark */}
        <div className="w-full h-full relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 75% 88%, 75% 100%, 0 100%)' }}>
          <video 
            src="/assets/house.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain filter invert hue-rotate-[180deg] brightness-95 opacity-70"
          />
        </div>
      </div>

      {/* Mobile stars background */}
      <div className="absolute inset-0 w-full h-full lg:hidden stars-bg z-0"></div>


      {/* Corner Frame Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-l-2 border-brass/40 z-20"></div>
      <div className="absolute top-0 right-0 w-8 h-8 lg:w-12 lg:h-12 border-t-2 border-r-2 border-brass/40 z-20"></div>
      <div className="absolute left-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-l-2 border-brass/40 z-20" style={{ bottom: '5vh' }}></div>
      <div className="absolute right-0 w-8 h-8 lg:w-12 lg:h-12 border-b-2 border-r-2 border-brass/40 z-20" style={{ bottom: '5vh' }}></div>

      <div className="relative z-20 flex min-h-screen items-center pt-16 lg:pt-0" style={{ marginTop: '5vh' }}>
        <div className="container mx-auto px-6 lg:px-16 lg:ml-[10%]">
          <div className="max-w-lg relative">
            {/* Top decorative line */}
            <div className="flex items-center gap-2 mb-3 opacity-60">
              <div className="w-8 h-px bg-brass"></div>
              <span className="text-brass text-[10px] font-mono tracking-wider">001</span>
              <div className="flex-1 h-px bg-brass/50"></div>
            </div>

            {/* Title with dithered accent */}
            <div className="relative">
              <div className="hidden lg:block absolute -left-3 top-0 bottom-0 w-1 dither-pattern opacity-40"></div>
              <h1 className="text-2xl lg:text-5xl font-bold text-bone mb-3 lg:mb-4 leading-tight font-mono tracking-wider uppercase" style={{ letterSpacing: '0.1em' }}>
                PERFECT
                <span className="block text-brass mt-1 lg:mt-2 opacity-90">
                  PROPORTIONS
                </span>
              </h1>
            </div>

            {/* Decorative dots pattern - desktop only */}
            <div className="hidden lg:flex gap-1 mb-3 opacity-40">
              {Array.from({ length: 40 }).map((_, i) => (
                <div key={i} className="w-0.5 h-0.5 bg-brass rounded-full"></div>
              ))}
            </div>

            {/* Description with subtle grid pattern */}
            <div className="relative">
              <p className="text-xs lg:text-base text-bone/80 mb-5 lg:mb-6 leading-relaxed font-mono opacity-90 text-balance tracking-wide">
                Where geometry meets humanity — Da Vinci's vision of ideal form
              </p>
              
              {/* Technical corner accent - desktop only */}
              <div className="hidden lg:block absolute -right-4 top-1/2 w-3 h-3 border border-brass opacity-50" style={{ transform: 'translateY(-50%)' }}>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-brass" style={{ transform: 'translate(-50%, -50%)' }}></div>
              </div>
            </div>

            {/* Buttons with technical accents */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mt-8">
              <GlassButton className="px-6 py-3 w-full lg:w-auto">
                GET STARTED
              </GlassButton>
              
              <GlassButton className="px-6 py-3 w-full lg:w-auto bg-transparent border-white/10 text-bone/70 hover:text-bone">
                LEARN MORE
              </GlassButton>
            </div>

            {/* Bottom technical notation - desktop only */}
            <div className="hidden lg:flex items-center gap-2 mt-8 opacity-50">
              <span className="text-brass text-[9px] font-mono">∞</span>
              <div className="flex-1 h-px bg-brass/40"></div>
              <span className="text-bone text-[9px] font-mono tracking-widest">ASTUTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="absolute left-0 right-0 z-30 border-t border-brass/20 bg-black/40 backdrop-blur-sm" style={{ bottom: '5vh' }}>
        <div className="container mx-auto px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-6 text-[8px] lg:text-[9px] font-mono tracking-widest text-bone/50">
            <span className="hidden lg:inline text-brass">SYSTEM.ACTIVE</span>
            <span className="lg:hidden text-brass">SYS.ACT</span>
            <div className="hidden lg:flex gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="w-1 h-3 bg-brass/30" style={{ height: `${Math.random() * 12 + 4}px` }}></div>
              ))}
            </div>
            <span>V1.0.0</span>
          </div>
          
          <div className="flex items-center gap-2 lg:gap-4 text-[8px] lg:text-[9px] font-mono tracking-widest text-bone/50">
            <span className="hidden lg:inline text-brass">◐ RENDERING</span>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-brass/60 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-brass/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-1 bg-brass/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="hidden lg:inline">FRAME: ∞</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .dither-pattern {
          background-image: 
            repeating-linear-gradient(0deg, transparent 0px, transparent 1px, #101F30 1px, #101F30 2px),
            repeating-linear-gradient(90deg, transparent 0px, transparent 1px, #101F30 1px, #101F30 2px);
          background-size: 3px 3px;
        }
        
        .stars-bg {
          background-image: 
            radial-gradient(1px 1px at 20% 30%, #101F30, transparent),
            radial-gradient(1px 1px at 60% 70%, #101F30, transparent),
            radial-gradient(1px 1px at 50% 50%, #101F30, transparent),
            radial-gradient(1px 1px at 80% 10%, #101F30, transparent),
            radial-gradient(1px 1px at 90% 60%, #101F30, transparent),
            radial-gradient(1px 1px at 33% 80%, #101F30, transparent),
            radial-gradient(1px 1px at 15% 60%, #101F30, transparent),
            radial-gradient(1px 1px at 70% 40%, #101F30, transparent);
          background-size: 200% 200%, 180% 180%, 250% 250%, 220% 220%, 190% 190%, 240% 240%, 210% 210%, 230% 230%;
          background-position: 0% 0%, 40% 40%, 60% 60%, 20% 20%, 80% 80%, 30% 30%, 70% 70%, 50% 50%;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
