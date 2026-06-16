"use client";

import { motion } from "framer-motion";
import SideRays from "@/components/ui/side-rays";
import HeroAscii from "@/components/ui/hero-ascii";
import CircularGallery from "@/components/ui/circular-gallery";
import CoverflowGallery from "@/components/ui/coverflow-gallery";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import InteractiveServices from "@/components/ui/interactive-services";
import ScrollingReviews from "@/components/ui/scrolling-reviews";
import Footer4Col from "@/components/ui/footer-column";
import { LinkPreview } from "@/components/ui/link-preview";
import { AnimatedLayerButton } from "@/components/ui/animated-layer-button";
import { CtaBanner } from "@/components/ui/cta-banner";
import { MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ImgStack from "@/components/ui/image-stack";
import RevealHero from "@/components/ui/reveal-hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-bone selection:bg-brass selection:text-black">

      {/* Hero Section */}
      <RevealHero />

      {/* Gallery Section */}
      <section id="gallery" className="relative pt-72 pb-32 w-full overflow-hidden flex flex-col items-center">
        <div className="text-center mb-6 z-10 relative max-w-5xl px-4">
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-navy tracking-tight leading-tight mb-8">
            Curated{" "}
            <LinkPreview 
              url="/#gallery" 
              isStatic 
              imageSrc="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" 
              className="font-serif italic font-normal transition-colors duration-300"
            >
              <span className="text-brass hover:text-casper transition-colors duration-300 font-serif italic">Spaces</span>
            </LinkPreview>
          </h2>
          <div className="w-24 h-px bg-brass/50 mx-auto"></div>
        </div>
        
        <div className="w-[95vw] max-w-[1400px] h-[700px] md:h-[800px] relative rounded-[2.5rem] border border-white/30 shadow-[0_8px_32px_rgba(16,31,48,0.05)] overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-xl">
          {/* Topographic Map Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/topo-map.jpg"
              alt="Topographic Map Background"
              fill
              className="object-cover object-center opacity-90"
            />
            {/* Blurry Glassmorphism Overlay (Mild blur to keep line pattern visible) */}
            <div className="absolute inset-0 bg-white/15 backdrop-blur-[4px] pointer-events-none" />
            {/* Glossy Glass Highlight Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/15 pointer-events-none" />
          </div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <CircularGallery
              bend={3}
              textColor="#F4F1EB" // Bone white for contrast against dark topographic glass
              borderRadius={0.05}
              font="bold 24px 'Space Mono'"
              fontUrl="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap"
              items={[
                { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=90&w=1920&auto=format&fit=crop', text: 'Villa Aurora' },
                { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=1920&auto=format&fit=crop', text: 'The Glasshouse' },
                { image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=90&w=1920&auto=format&fit=crop', text: 'Oceanside Manor' },
                { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1920&auto=format&fit=crop', text: 'Minimalist Haven' },
                { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=90&w=1920&auto=format&fit=crop', text: 'Estate 04' },
                { image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=90&w=1920&auto=format&fit=crop', text: 'Penthouse View' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Dynamic Portfolio Section */}
      <section id="portfolio" className="relative pt-40 pb-20 w-full flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="w-full flex flex-col items-center"
        >
          <div className="text-center mb-16 z-10 relative max-w-5xl px-4">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-navy tracking-tight mb-6">
              The Masterpiece{" "}
              <LinkPreview 
                url="/portfolio" 
                isStatic 
                imageSrc="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=800" 
                className="font-serif italic font-normal transition-colors duration-300"
              >
                <span className="text-brass hover:text-casper transition-colors duration-300 font-serif italic">Gallery</span>
              </LinkPreview>
            </h2>
            <div className="w-16 h-px bg-brass/50 mx-auto"></div>
          </div>

          <CoverflowGallery
            bgClass="bg-transparent border-none py-4 w-full overflow-visible"
            cardWidth="w-[90vw] md:w-[75vw] lg:w-[65vw] max-w-[950px]"
            cardHeight="h-[380px] sm:h-[480px] md:h-[580px] lg:h-[650px]"
            translation={300}
            mobileTranslation={140}
            images={[
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=90&w=1920&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=1920&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=90&w=1920&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1920&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=90&w=1920&auto=format&fit=crop"
            ]}
          />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-32 w-full border-t border-brass/20 bg-transparent overflow-hidden">
        {/* Left Side Climbing Vine SVG */}
        <div className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 h-[85%] w-48 pointer-events-none opacity-20 hidden xl:block text-brass">
          <svg viewBox="0 0 200 800" className="h-full w-auto" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M100,800 C80,700 120,600 90,500 C60,400 140,300 100,200 C80,100 120,50 100,0" />
            <path d="M96,700 C140,680 150,650 130,620 C110,600 100,610 93,640" />
            <path d="M130,620 Q160,630 170,610" />
            <path d="M95,550 C40,530 30,500 50,470 C70,450 85,470 91,510" />
            <path d="M50,470 Q20,460 15,480" />
            <path d="M110,420 C160,400 170,360 140,330 C120,310 105,330 102,370" />
            <path d="M140,330 Q170,320 180,340" />
            <path d="M90,300 C30,280 20,240 45,210 C70,180 85,210 92,260" />
            <path d="M45,210 Q20,200 10,220" />
            <path d="M105,180 C150,150 160,110 135,80 C110,60 95,90 98,130" />
            <path d="M98,90 C50,70 45,40 65,15 C85,-5 95,15 99,50" />
            <path d="M130,620 C145,615 150,595 135,600 C120,605 125,615 130,620 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M50,470 C35,465 30,445 45,450 C60,455 55,465 50,470 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M140,330 C155,325 150,305 135,310 C120,315 125,325 140,330 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M45,210 C30,205 35,185 50,190 C65,195 60,205 45,210 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M135,80 C150,75 145,55 130,60 C115,65 120,75 135,80 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M65,15 C50,10 55,-10 70,-5 C85,0 80,10 65,15 Z" fill="currentColor" fillOpacity="0.05" />
          </svg>
        </div>

        {/* Right Side Hanging Vine SVG */}
        <div className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 h-[85%] w-48 pointer-events-none opacity-20 hidden xl:block text-brass">
          <svg viewBox="0 0 200 800" className="h-full w-auto transform rotate-180" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M100,800 C80,700 120,600 90,500 C60,400 140,300 100,200 C80,100 120,50 100,0" />
            <path d="M96,700 C140,680 150,650 130,620 C110,600 100,610 93,640" />
            <path d="M130,620 Q160,630 170,610" />
            <path d="M95,550 C40,530 30,500 50,470 C70,450 85,470 91,510" />
            <path d="M50,470 Q20,460 15,480" />
            <path d="M110,420 C160,400 170,360 140,330 C120,310 105,330 102,370" />
            <path d="M140,330 Q170,320 180,340" />
            <path d="M90,300 C30,280 20,240 45,210 C70,180 85,210 92,260" />
            <path d="M45,210 Q20,200 10,220" />
            <path d="M105,180 C150,150 160,110 135,80 C110,60 95,90 98,130" />
            <path d="M98,90 C50,70 45,40 65,15 C85,-5 95,15 99,50" />
            <path d="M130,620 C145,615 150,595 135,600 C120,605 125,615 130,620 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M50,470 C35,465 30,445 45,450 C60,455 55,465 50,470 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M140,330 C155,325 150,305 135,310 C120,315 125,325 140,330 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M45,210 C30,205 35,185 50,190 C65,195 60,205 45,210 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M135,80 C150,75 145,55 130,60 C115,65 120,75 135,80 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M65,15 C50,10 55,-10 70,-5 C85,0 80,10 65,15 Z" fill="currentColor" fillOpacity="0.05" />
          </svg>
        </div>

        <div className="max-w-[85rem] mx-auto px-6 md:px-16 relative z-10">
          <InteractiveServices />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-black relative overflow-hidden border-t border-brass/20">
        {/* Left Side Vine SVG (continuing from services) */}
        <div className="absolute left-2 lg:left-8 top-0 h-full w-48 pointer-events-none opacity-15 hidden xl:block text-brass">
          <svg viewBox="0 0 200 800" className="h-full w-auto" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M100,800 C80,700 120,600 90,500 C60,400 140,300 100,200 C80,100 120,50 100,0" />
            <path d="M96,700 C140,680 150,650 130,620 C110,600 100,610 93,640" />
            <path d="M130,620 Q160,630 170,610" />
            <path d="M95,550 C40,530 30,500 50,470 C70,450 85,470 91,510" />
            <path d="M50,470 Q20,460 15,480" />
            <path d="M110,420 C160,400 170,360 140,330 C120,310 105,330 102,370" />
            <path d="M140,330 Q170,320 180,340" />
            <path d="M90,300 C30,280 20,240 45,210 C70,180 85,210 92,260" />
            <path d="M45,210 Q20,200 10,220" />
            <path d="M105,180 C150,150 160,110 135,80 C110,60 95,90 98,130" />
            <path d="M130,620 C145,615 150,595 135,600 C120,605 125,615 130,620 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M50,470 C35,465 30,445 45,450 C60,455 55,465 50,470 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M140,330 C155,325 150,305 135,310 C120,315 125,325 140,330 Z" fill="currentColor" fillOpacity="0.04" />
          </svg>
        </div>

        {/* Right Side Vine SVG */}
        <div className="absolute right-2 lg:right-8 top-0 h-full w-48 pointer-events-none opacity-15 hidden xl:block text-brass">
          <svg viewBox="0 0 200 800" className="h-full w-auto transform rotate-180" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M100,800 C80,700 120,600 90,500 C60,400 140,300 100,200 C80,100 120,50 100,0" />
            <path d="M96,700 C140,680 150,650 130,620 C110,600 100,610 93,640" />
            <path d="M130,620 Q160,630 170,610" />
            <path d="M95,550 C40,530 30,500 50,470 C70,450 85,470 91,510" />
            <path d="M50,470 Q20,460 15,480" />
            <path d="M110,420 C160,400 170,360 140,330 C120,310 105,330 102,370" />
            <path d="M140,330 Q170,320 180,340" />
            <path d="M90,300 C30,280 20,240 45,210 C70,180 85,210 92,260" />
            <path d="M45,210 Q20,200 10,220" />
            <path d="M105,180 C150,150 160,110 135,80 C110,60 95,90 98,130" />
            <path d="M130,620 C145,615 150,595 135,600 C120,605 125,615 130,620 Z" fill="currentColor" fillOpacity="0.04" />
            <path d="M50,470 C35,465 30,445 45,450 C60,455 55,465 50,470 Z" fill="currentColor" fillOpacity="0.05" />
            <path d="M140,330 C155,325 150,305 135,310 C120,315 125,325 140,330 Z" fill="currentColor" fillOpacity="0.04" />
          </svg>
        </div>

        <div className="max-w-[85rem] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left Column: Text Block */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-brass bg-brass/10 border border-brass/20 px-3.5 py-1.5 rounded-full w-fit inline-block">
                Client Voices
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-bone tracking-tight leading-[1.05]">
                Trusted by{" "}
                <span className="text-brass italic">Visionaries</span>
              </h2>
              <p className="font-sans text-bone/60 text-base md:text-lg leading-relaxed max-w-lg">
                Our clients are industry leaders, generational wealth holders, and discerning collectors who demand absolute discretion. Every engagement is governed by confidentiality agreements, and every outcome speaks for itself.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-6 border-t border-brass/15 w-full">
                <div>
                  <div className="font-serif text-4xl md:text-5xl text-brass font-light">98%</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-bone/50 mt-1">Client Retention</div>
                </div>
                <div className="w-px h-14 bg-brass/20"></div>
                <div>
                  <div className="font-serif text-4xl md:text-5xl text-brass font-light">$2.4B</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-bone/50 mt-1">Assets Managed</div>
                </div>
                <div className="w-px h-14 bg-brass/20"></div>
                <div>
                  <div className="font-serif text-4xl md:text-5xl text-brass font-light">15+</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-bone/50 mt-1">Years of Trust</div>
                </div>
              </div>
            </div>

            {/* Right Column: Parallax Scrolling Reviews */}
            <div className="lg:col-span-7">
              <ScrollingReviews />
            </div>

          </div>
        </div>
      </section>

      <Footer4Col />
    </main>
  );
}
