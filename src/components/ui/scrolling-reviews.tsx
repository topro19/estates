"use client";

import React from "react";
import Image from "next/image";

interface Review {
  name: string;
  avatar: string;
  quote: string;
  role?: string;
}

const reviews: Review[] = [
  {
    name: "Jane Doe",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    quote: "We secured our new estate four weeks early because the dossiers were finally unambiguous. I wish we had Astute two years ago.",
    role: "Private Collector"
  },
  {
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
    quote: "The level of discretion and architectural knowledge is unmatched. Truly a white-glove experience.",
    role: "Family Office Director"
  },
  {
    name: "Michael Brown",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    quote: "They don't just sell properties; they curate legacies. Astute anticipated our needs before we even articulated them.",
    role: "Real Estate Developer"
  },
  {
    name: "James Smith",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    quote: "The negotiation was seamless, and the property is absolutely flawless in every aspect.",
    role: "Tech Entrepreneur"
  },
  {
    name: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    quote: "From initial consultation to closing, every interaction was handled with remarkable precision and care.",
    role: "Investment Banker"
  },
  {
    name: "David Park",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Astute found us a property that wasn't even on the market. Their network is extraordinary.",
    role: "Hedge Fund Manager"
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white/60 backdrop-blur-sm border border-brass/15 rounded-2xl p-6 shadow-[0_4px_20px_rgba(16,31,48,0.06)] hover:shadow-[0_8px_30px_rgba(16,31,48,0.1)] transition-all duration-500 hover:-translate-y-1 group">
      <div className="text-3xl font-serif text-brass/30 leading-none mb-3 font-black">&ldquo;</div>
      <p className="font-sans text-navy/70 text-sm leading-relaxed mb-5 italic">
        {review.quote}
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-brass/10">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-brass/30 relative flex-shrink-0">
          <Image src={review.avatar} alt={review.name} fill className="object-cover" sizes="40px" />
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider font-bold text-navy">{review.name}</h4>
          {review.role && (
            <span className="font-sans text-[11px] text-navy/50">{review.role}</span>
          )}
        </div>
        <div className="ml-auto flex gap-0.5 text-brass text-[10px]">★★★★★</div>
      </div>
    </div>
  );
}

export default function ScrollingReviews() {
  // Split reviews into two columns
  const col1 = reviews.filter((_, i) => i % 2 === 0);
  const col2 = reviews.filter((_, i) => i % 2 === 1);

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden mask-gradient">
      {/* Fade masks at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      <div className="flex gap-5 h-full">
        {/* Column 1 — scrolls up at normal speed */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-scroll-up flex flex-col gap-5">
            {[...col1, ...col1, ...col1].map((review, i) => (
              <ReviewCard key={`c1-${i}`} review={review} />
            ))}
          </div>
        </div>

        {/* Column 2 — scrolls up slower for parallax depth */}
        <div className="flex-1 overflow-hidden relative hidden sm:block">
          <div className="animate-scroll-up-slow flex flex-col gap-5 mt-12">
            {[...col2, ...col2, ...col2].map((review, i) => (
              <ReviewCard key={`c2-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
