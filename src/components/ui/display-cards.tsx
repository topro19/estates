"use client";

import { cn } from "@/lib/utils";
import { Sparkles, Building2, Key, BarChart3 } from "lucide-react";
import { useState } from "react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
  isPopped?: boolean;
  onClick?: () => void;
}

function DisplayCard({
  className,
  icon = <Sparkles className="size-4 text-brass" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-brass",
  titleClassName = "text-brass",
  isPopped = false,
  onClick,
}: DisplayCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative flex min-h-[12rem] w-[22rem] -skew-y-[8deg] select-none flex-col justify-between border border-casper/35 bg-white/95 backdrop-blur-md px-6 py-5 transition-all duration-500 hover:border-casper/80 hover:bg-white [&>*]:flex [&>*]:items-center [&>*]:gap-3 font-mono cursor-pointer",
        isPopped ? "scale-110 -translate-y-12 z-50 shadow-[0_0_40px_rgba(197,160,89,0.3)] border-brass" : "",
        className
      )}
    >
      <div>
        <span className="relative inline-block border border-brass/40 bg-brass/10 p-2">
          {icon}
        </span>
        <p className={cn("text-lg font-bold tracking-widest uppercase", titleClassName)}>{title}</p>
      </div>
      <div className="whitespace-normal text-sm text-bone/80 leading-relaxed mt-4">{description}</div>
      <p className="text-bone/40 text-xs tracking-widest mt-4">{date}</p>
    </div>
  );
}

interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

import { LinkPreview } from "./link-preview";

export default function DisplayCards({ cards }: DisplayCardsProps) {
  const [poppedIndex, setPoppedIndex] = useState<number | null>(null);

  const defaultCards = [
    {
      icon: <Building2 className="size-4 text-brass" />,
      title: (
        <LinkPreview url="/#acquisitions" isStatic imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" className="text-bone hover:text-brass transition-colors">
          ACQUISITIONS
        </LinkPreview>
      ),
      description: (
        <>
          Strategic targeting of{" "}
          <LinkPreview 
            url="/#acquisitions" 
            isStatic 
            imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" 
            className="text-brass border-b border-brass/50 border-dotted hover:border-solid transition-all"
          >
            off-market
          </LinkPreview>{" "}
          and hyper-prime real estate assets worldwide.
        </>
      ),
      date: "001",
      iconClassName: "text-brass",
      titleClassName: "text-bone",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:pointer-events-none before:absolute before:w-[100%] before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/40 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Key className="size-4 text-brass" />,
      title: (
        <LinkPreview url="/#private-sales" isStatic imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" className="text-bone hover:text-brass transition-colors">
          PRIVATE SALES
        </LinkPreview>
      ),
      description: (
        <>
          Discreet disposition of{" "}
          <LinkPreview 
            url="/#private-sales" 
            isStatic 
            imageSrc="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" 
            className="text-brass border-b border-brass/50 border-dotted hover:border-solid transition-all"
          >
            ultra-luxury properties
          </LinkPreview>{" "}
          with zero public footprint.
        </>
      ),
      date: "002",
      iconClassName: "text-brass",
      titleClassName: "text-bone",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:pointer-events-none before:absolute before:w-[100%] before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-white/40 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <BarChart3 className="size-4 text-brass" />,
      title: (
        <LinkPreview url="/#advisory" isStatic imageSrc="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80" className="text-bone hover:text-brass transition-colors">
          ADVISORY
        </LinkPreview>
      ),
      description: (
        <>
          Data-driven portfolio analysis and{" "}
          <LinkPreview 
            url="/#advisory" 
            isStatic 
            imageSrc="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80" 
            className="text-brass border-b border-brass/50 border-dotted hover:border-solid transition-all"
          >
            architectural provenance
          </LinkPreview>{" "}
          verification.
        </>
      ),
      date: "003",
      iconClassName: "text-brass",
      titleClassName: "text-bone",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards || defaultCards;

  const handleCardClick = (index: number) => {
    setPoppedIndex(poppedIndex === index ? null : index);
  };

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700 py-16">
      {displayCards.map((cardProps, index) => (
        <DisplayCard 
          key={index} 
          {...cardProps} 
          isPopped={poppedIndex === index}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
}
