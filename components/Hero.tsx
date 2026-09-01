"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    subtitle: "We’re Experienced",
    title: "Internet Service Provider",
    description: "Expert Internet Service Provider Based on Your Town Pabna.\nLet's get connected to the modern world.",
    btnText: "Get Started",
    btnLink: "#pricing",
  },
  {
    subtitle: "Ultra-Fast Optical Fiber",
    title: "Bufferless 4K & BDIX Speed",
    description: "Connecting households and corporate offices in Pabna with up to 100Mbps BDIX & FTP movie servers.",
    btnText: "Explore Packages",
    btnLink: "#pricing",
  },
  {
    subtitle: "24/7 Technical Support",
    title: "Dedicated Support Team",
    description: "Our technical engineering team in Pabna is ready 24/7 to keep your connection uninterrupted.",
    btnText: "Contact Us",
    btnLink: "#contact",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105"
        style={{ backgroundImage: `url('/hero_bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-slate-950/90" />

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center py-20">
        {/* Subtitle */}
        <h2 className="text-xl sm:text-3xl font-bold tracking-wide text-white mb-3 drop-shadow-md">
          {slides[currentSlide].subtitle}
        </h2>

        {/* Highlighted Title Box */}
        <div className="inline-block bg-white/20 dark:bg-slate-900/60 backdrop-blur-md px-6 sm:px-10 py-2 sm:py-3 rounded-lg border border-white/30 shadow-xl my-3">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-orange-500 tracking-tight">
            {slides[currentSlide].title}
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed mt-4 mb-8 whitespace-pre-line drop-shadow-sm">
          {slides[currentSlide].description}
        </p>

        {/* CTA Button */}
        <div>
          <a
            href={slides[currentSlide].btnLink}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#00c3ff] hover:bg-cyan-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            {slides[currentSlide].btnText}
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-12">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? "w-8 bg-[#00c3ff]" : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
