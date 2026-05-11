"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const bg = document.getElementById("heroBg");
    if (bg) setTimeout(() => bg.classList.add("loaded"), 100);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" id="heroBg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-eyebrow">AI Sherpa for Small Business</div>
        <h1 className="hero-headline">
          Every Summit<br /><em>Leads to the<br />Next Mountain.</em>
        </h1>
        <p className="hero-sub">
          Business ownership is a series of mountains. Your RTS AI Sherpa Guide gives you the skills to scale safely, stay on track, and reach every basecamp — from where you are today to where your business is built to go.
        </p>
        <div className="hero-actions">
          <a href="https://calendly.com/roadmaptosuccess" className="btn-primary">Schedule Your Discovery Call →</a>
          <a href="#basecamps" className="btn-ghost">Explore the Platform ↓</a>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}
