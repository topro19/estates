"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Shield, Gem, Compass, ArrowRight } from "lucide-react";
import Footer4Col from "@/components/ui/footer-column";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

// Reusable SVG Vine Components to decorate empty spaces/margins
const BotanicalVineLeft = ({ className = "" }: { className?: string }) => (
  <div className={`absolute left-0 pointer-events-none text-brass ${className}`}>
    <svg viewBox="0 0 200 800" className="h-full w-auto" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
);

const BotanicalVineRight = ({ className = "" }: { className?: string }) => (
  <div className={`absolute right-0 pointer-events-none text-brass ${className}`}>
    <svg viewBox="0 0 200 800" className="h-full w-auto transform rotate-180" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
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
);

// Discreet Abstract Background Vector representing architectural planning/blueprint curves
const AbstractBackgroundVector = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full pointer-events-none z-0 opacity-[0.06] overflow-hidden flex items-center justify-center">
    <svg width="100%" height="100%" viewBox="0 0 1400 1000" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-navy w-full h-full opacity-70">
      {/* Curved contour-like lines representing architectural flow */}
      <path d="M-100,200 C300,100 200,600 700,500 C1000,450 900,900 1500,800" />
      <path d="M-100,250 C320,150 220,650 720,550 C1020,500 920,950 1500,850" />
      <path d="M-100,300 C340,200 240,700 740,600 C1040,550 940,1000 1500,900" />
      <path d="M-100,350 C360,250 260,750 760,650 C1060,600 960,1050 1500,950" />
      
      {/* Concentric architect circles in the background */}
      <circle cx="850" cy="350" r="180" strokeDasharray="5 5" />
      <circle cx="850" cy="350" r="300" />
      <circle cx="850" cy="350" r="420" strokeDasharray="10 5" />
      
      {/* Linear abstract grids resembling blueprints */}
      <line x1="150" y1="-100" x2="150" y2="1100" strokeDasharray="2 4" />
      <line x1="500" y1="-100" x2="500" y2="1100" />
      <line x1="950" y1="-100" x2="950" y2="1100" strokeDasharray="2 4" />
      <line x1="-100" y1="450" x2="1500" y2="450" />
      <line x1="-100" y1="750" x2="1500" y2="750" strokeDasharray="2 4" />
      
      {/* Fine diagonal drafting lines */}
      <line x1="-200" y1="-200" x2="1600" y2="1600" opacity="0.4" strokeWidth="0.8" />
      <line x1="-100" y1="-200" x2="1700" y2="1600" opacity="0.2" strokeDasharray="3 3" strokeWidth="0.8" />
    </svg>
  </div>
);

export default function Contact() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const formSectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = React.useState(false);
  
  // Track scroll position of the About section for parallax effects
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });

  // Track scroll position of the CTA section for parallax effects
  const { scrollYProgress: ctaScrollProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });

  // Parallax translations (About Us collage)
  const img1Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [40, -80]);

  // Parallax translations (CTA collage)
  const ctaImg1Y = useTransform(ctaScrollProgress, [0, 1], [-40, 40]);
  const ctaImg2Y = useTransform(ctaScrollProgress, [0, 1], [50, -50]);
  const ctaImg3Y = useTransform(ctaScrollProgress, [0, 1], [-20, 80]);

  // Handler to reveal and scroll smoothly to the Form Card inside the container
  const scrollToForm = () => {
    if (!showForm) {
      setShowForm(true);
      setTimeout(() => {
        if (formSectionRef.current) {
          formSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // 300ms allows layout transition to stretch before scrolling
    } else {
      if (formSectionRef.current) {
        formSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <main className="min-h-screen bg-black text-bone selection:bg-brass selection:text-black pt-32 overflow-x-hidden relative">

      {/* SECTION 1: ABOUT US (Top of page) */}
      <section 
        ref={aboutRef}
        className="max-w-[85rem] mx-auto px-6 md:px-16 pb-32 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
      >
        {/* Discreet Abstract Background Vector (Blueprint Architectural Lines) */}
        <AbstractBackgroundVector />
        {/* Background Vines on empty margins */}
        <BotanicalVineLeft className="top-12 -left-8 h-[90%] w-48 opacity-20 hidden lg:block" />
        <BotanicalVineRight className="top-12 -right-8 h-[90%] w-48 opacity-20 hidden lg:block" />

        {/* Left Column: Brand Ethos Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brass bg-brass/10 border border-brass/20 px-3.5 py-1.5 rounded-full w-fit">
            Our Legacy
          </span>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-navy tracking-tight leading-[1.05]">
            A Sanctuary of <br />
            <span className="text-brass italic">Discretion</span> & Trust
          </h1>
          
          <p className="font-sans text-bone/70 text-base md:text-lg leading-relaxed max-w-2xl">
            Astute was established with a singular vision: to refine the acquisition of exceptional properties. We orchestrate every detail of transaction, design, and contract confidentiality for elite clients globally. We believe that a home is not merely a space, but a legacy.
          </p>

          {/* Pillars List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-brass/15">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-navy">Absolute Discretion</h3>
              <p className="font-sans text-xs text-bone/60 leading-relaxed">
                Every transaction and client detail is protected under strict confidentiality protocols.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-navy">Generational Legacy</h3>
              <p className="font-sans text-xs text-bone/60 leading-relaxed">
                We search for architectural masterpieces that hold value and beauty for generations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center text-brass">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-mono text-xs uppercase tracking-wider font-bold text-navy">Artful Curation</h3>
              <p className="font-sans text-xs text-bone/60 leading-relaxed">
                Our portfolio features only properties of verified pedigree and significant design.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Parallax Image Collage */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] max-w-[450px] mx-auto z-10 flex items-center justify-start"
        >
          {/* Main Background Image - Slides Slowly */}
          <motion.div 
            style={{ y: img1Y, willChange: "transform" }}
            className="w-[85%] h-[85%] rounded-[2rem] overflow-hidden border border-white/20 relative shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=1200&auto=format&fit=crop"
              alt="Villa Exterior"
              fill
              priority
              className="object-cover"
              sizes="(max-w-768px) 80vw, 40vw"
            />
            <div className="absolute inset-0 bg-[#101F30]/10 mix-blend-overlay" />
          </motion.div>

          {/* Overlapping Foreground Image - Slides Faster */}
          <motion.div 
            style={{ y: img2Y, willChange: "transform" }}
            className="absolute bottom-[5%] right-[-15px] md:right-[-30px] w-[50%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/30 shadow-2xl z-20"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=800&auto=format&fit=crop"
                alt="Interior Travertine Detail"
                fill
                className="object-cover"
                sizes="(max-w-768px) 40vw, 20vw"
              />
              <div className="absolute inset-0 bg-[#101F30]/5 mix-blend-overlay" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: COMBINED CTA BLOCK & CONTACT FORM EXTENSION */}
      <section 
        ref={ctaRef}
        className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* Background Vines on section margins */}
        <BotanicalVineLeft className="top-0 -left-6 h-full w-48 opacity-[0.08] hidden lg:block" />
        <BotanicalVineRight className="top-0 -right-6 h-full w-48 opacity-[0.08] hidden lg:block" />

        <motion.div
          layout
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative w-full rounded-[2.5rem] overflow-hidden bg-navy border border-brass/20 flex flex-col shadow-[0_20px_50px_rgba(16,31,48,0.3)] z-10"
        >
          {/* Decorative subtle texture/grid inside the CTA box */}
          <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* ROW 1: CTA Content and Parallax Images */}
          <div className="flex flex-col lg:flex-row items-center justify-between p-10 md:p-16 lg:p-20 gap-16">
            {/* Left Column: CTA Content */}
            <div className="relative z-10 flex flex-col items-start w-full lg:w-1/2 text-left">
              <div className="inline-block px-3 py-1 mb-6 rounded-full border border-brass/50 bg-black/30 backdrop-blur-sm text-brass text-xs uppercase tracking-[0.2em] font-mono">
                Inquire Privately
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono text-cream mb-6 leading-[1.1] uppercase tracking-wider">
                CONTACT <br />
                <span className="text-brass italic transform -skew-x-12 inline-block">US</span>
              </h2>
              
              <p className="text-cream/70 text-sm md:text-base font-mono mb-10 max-w-md leading-relaxed">
                We orchestrate architectural acquisitions for discerning clients. Reach out to our private advisory desk directly to explore properties of exceptional pedigree.
              </p>

              <button 
                onClick={scrollToForm}
                className="group flex items-center gap-3 px-8 py-4 border border-brass text-brass hover:bg-brass hover:text-navy transition-all duration-300 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Column: Parallax Collage of Luxury Images */}
            <div className="relative z-10 w-full lg:w-[48%] aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] flex items-center justify-center">
              {/* Image 1: Main Background (Slides Slowly) */}
              <motion.div 
                style={{ y: ctaImg1Y, willChange: "transform" }}
                className="absolute left-[10%] w-[65%] h-[80%] rounded-[2rem] overflow-hidden border border-white/10 shadow-xl"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800"
                  alt="Luxury living space"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-navy/20 mix-blend-overlay" />
              </motion.div>

              {/* Image 2: Bottom Right Overlap (Slides Faster Upward) */}
              <motion.div 
                style={{ y: ctaImg2Y, willChange: "transform" }}
                className="absolute bottom-[-10%] right-[5%] w-[45%] aspect-[4/3] rounded-2xl overflow-hidden border border-brass/30 shadow-2xl z-20"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600"
                  alt="Luxury pool side lounge"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 30vw, 15vw"
                />
                <div className="absolute inset-0 bg-navy/10 mix-blend-overlay" />
              </motion.div>

              {/* Image 3: Top Left Overlap (Slides Downward) */}
              <motion.div 
                style={{ y: ctaImg3Y, willChange: "transform" }}
                className="absolute top-[-10%] left-[0%] w-[35%] aspect-[3/4] rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-20"
              >
                <Image 
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600"
                  alt="Luxury marble corridor"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 20vw, 10vw"
                />
                <div className="absolute inset-0 bg-navy/10 mix-blend-overlay" />
              </motion.div>
            </div>
          </div>

          {/* ROW 2: Form & Info Card (Revealed inside the container as a direct extension) */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                ref={formSectionRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="relative overflow-hidden origin-top border-t border-brass/20 bg-black/10"
              >
                {/* Decorative Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-brass/30 rounded-tl-[2.5rem] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brass/5 rounded-tr-full pointer-events-none"></div>

                {/* Solid background strip for Info section layout alignment (Slate Grey Split) */}
                <div className="absolute top-0 bottom-0 right-0 w-full md:w-[40%] bg-[#384353] z-0 hidden md:block pointer-events-none"></div>

                <div className="p-8 md:p-14 lg:p-20 relative z-10 flex flex-col md:flex-row gap-12 lg:gap-20">
                  {/* Left Column: Form */}
                  <div className="w-full md:w-[60%] z-10">
                    <h3 className="font-serif text-4xl md:text-5xl text-cream tracking-[0.2em] uppercase mb-4">
                      CONTACT US
                    </h3>
                    <div className="w-16 h-px bg-brass mb-8"></div>
                    
                    <p className="font-sans text-cream/70 text-sm md:text-base mb-12 max-w-xl leading-relaxed">
                      Please don't hesitate to reach out to us whenever you need assistance. We'll make sure to respond to you promptly.
                    </p>

                    <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-8 max-w-lg">
                      <div className="relative group">
                        <input 
                          type="text" 
                          name="name" 
                          required
                          className="w-full bg-transparent border-b border-cream/25 py-3 text-cream focus:outline-none focus:border-brass transition-colors font-sans text-base placeholder:text-cream/40"
                          placeholder="Name"
                        />
                      </div>

                      <div className="relative group">
                        <input 
                          type="email" 
                          name="email" 
                          required
                          className="w-full bg-transparent border-b border-cream/25 py-3 text-cream focus:outline-none focus:border-brass transition-colors font-sans text-base placeholder:text-cream/40"
                          placeholder="Email"
                        />
                      </div>

                      <div className="relative group font-sans">
                        <textarea 
                          name="message" 
                          rows={3}
                          required
                          className="w-full bg-transparent border-b border-cream/25 py-3 text-cream focus:outline-none focus:border-brass transition-colors text-base resize-none placeholder:text-cream/40"
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full px-10 py-4 border border-brass text-brass hover:bg-brass hover:text-navy transition-all duration-300 rounded-full font-mono text-sm tracking-widest uppercase bg-transparent hover:shadow-[0_0_20px_rgba(184,147,75,0.2)] mt-8"
                      >
                        Submit Inquiry
                      </button>
                    </form>
                  </div>

                  {/* Right Column: Info Card overlapping */}
                  <div className="w-full md:w-[40%] flex items-center justify-center md:-ml-12 lg:-ml-20 relative z-20">
                    <div className="bg-[#c4c1bc] border border-white/10 w-full rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative">
                      {/* Decorative overlapping gold circle */}
                      <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-brass rounded-full z-20 shadow-[0_0_25px_rgba(184,147,75,0.7)] border border-white/20"></div>

                      <h4 className="font-sans font-light text-brass text-3xl tracking-[0.25em] uppercase mb-8">
                        INFO
                      </h4>

                      <div className="space-y-8 font-sans">
                        <div className="flex items-center gap-5">
                          <Mail className="w-6 h-6 text-brass flex-shrink-0" />
                          <p className="text-white text-base font-light tracking-wide hover:text-brass transition-colors cursor-pointer">info@astuteestate.com</p>
                        </div>
                        
                        <div className="flex items-center gap-5">
                          <Phone className="w-6 h-6 text-brass flex-shrink-0" />
                          <p className="text-white text-base font-light tracking-wide hover:text-brass transition-colors cursor-pointer">+44 9876543</p>
                        </div>

                        <div className="flex items-center gap-5">
                          <MapPin className="w-6 h-6 text-brass flex-shrink-0" />
                          <p className="text-white text-base font-light tracking-wide leading-relaxed hover:text-brass transition-colors cursor-pointer">27 Blackwood Street</p>
                        </div>

                        <div className="flex items-center gap-5">
                          <svg className="w-6 h-6 text-brass flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-white text-base font-light tracking-wide">09:00 - 18:00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* FOOTER */}
      <Footer4Col />
    </main>
  );
}
