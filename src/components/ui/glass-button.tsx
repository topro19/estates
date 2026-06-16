"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function GlassButton({ children, className, ...props }: GlassButtonProps) {
  return (
    <button 
      className={cn(
        "group relative flex items-center justify-center gap-3 px-8 py-3 bg-white/5 backdrop-blur-xl border border-brass/30 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_4px_15px_rgba(0,0,0,0.3)] hover:bg-white/10 hover:border-brass/60 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),_0_6px_20px_rgba(197,160,89,0.15)] hover:-translate-y-0.5 transition-all duration-500 font-mono uppercase tracking-widest text-xs md:text-sm font-bold text-bone overflow-hidden w-max",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
      {/* Glossy sweep effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out pointer-events-none"></div>
    </button>
  );
}
