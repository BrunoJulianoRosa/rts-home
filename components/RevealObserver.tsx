"use client";
import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll(".fade-up");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));

    // Fallback for iframe contexts (e.g. Wix) where internal scroll never fires
    const fallback = setTimeout(() => {
      document.querySelectorAll(".fade-up:not(.visible)").forEach((el) => el.classList.add("visible"));
    }, 1200);

    return () => { io.disconnect(); clearTimeout(fallback); };
  }, []);
  return null;
}
