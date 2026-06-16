"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-2.5 rounded-full bg-white/15 border border-white/30 backdrop-blur-xl shadow-[0_12px_40px_rgba(16,31,48,0.18)] hover:shadow-[0_16px_48px_rgba(16,31,48,0.25)] transition-all duration-300 w-[90vw] sm:w-[480px] md:w-[540px] hover:bg-white/25 hover:border-white/40">
      <div className="flex items-center">
        <Link 
          href="/#hero" 
          onClick={(e) => handleScroll(e, "hero")}
          className="text-sm font-mono font-bold tracking-[0.25em] uppercase text-bone italic transform -skew-x-12 hover:text-brass transition-all duration-300"
        >
          ASTUTE
        </Link>
      </div>
      
      <div className="flex gap-5 text-[10px] sm:text-xs uppercase tracking-widest font-mono text-bone/80">
        <Link 
          href="/#hero" 
          onClick={(e) => handleScroll(e, "hero")}
          className="hover:text-brass transition-colors py-1"
        >
          Home
        </Link>
        <Link 
          href="/#portfolio" 
          onClick={(e) => handleScroll(e, "portfolio")}
          className="hover:text-brass transition-colors py-1"
        >
          Spaces
        </Link>
        <Link href="/contact" className="hover:text-brass transition-colors py-1">Contact</Link>
      </div>
    </nav>
  );
}
