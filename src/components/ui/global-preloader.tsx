"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./preloader";

export default function GlobalPreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If already completed in this session, skip loading
    if (typeof window !== "undefined" && (window as any).__preloaderComplete) {
      setLoading(false);
      return;
    }

    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (typeof window !== "undefined") {
        (window as any).__preloaderComplete = true;
        window.dispatchEvent(new Event("preloader-complete"));
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <Preloader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}
    </AnimatePresence>
  );
}
