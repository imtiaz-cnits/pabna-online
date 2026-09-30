"use client";

import CobeGlobe from "./CobeGlobe";
import UiverseButton from "./UiverseButton";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:h-screen lg:min-h-screen flex items-center overflow-hidden bg-slate-950 text-white pt-[100px] pb-[40px] lg:pt-0 lg:pb-0">
      {/* Background Image: Pure Dark Emerald Datacenter (Zero Blue) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105 opacity-80"
        style={{ backgroundImage: `url('/Website-img/hero_bg_dark.jpg')` }}
      />
      {/* Deep Atmospheric Obsidian & Dark Slate Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

      {/* Subtle Neon Glow Auras */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 2-Column Responsive Layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Center-aligned on Mobile, Left-Aligned on Desktop */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 flex flex-col items-center lg:items-start">
            {/* Subtitle */}
            <h2 className="text-lg sm:text-2xl font-bold tracking-wide text-white drop-shadow-md">
              We’re Experienced
            </h2>

            {/* Main Title (Larger & Infinite Sheen Light Sweep Animated) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] animate-title-sheen drop-shadow-[0_5px_20px_rgba(16,185,129,0.35)] py-1">
              Internet Service Provider
            </h1>

            {/* Description (Strictly 16px Font Size) */}
            <p className="max-w-xl mx-auto lg:mx-0 text-[16px] text-slate-100 font-normal leading-relaxed whitespace-pre-line drop-shadow-md pt-1">
              Expert Internet Service Provider Based on Your Town Pabna.{"\n"}
              Let's get connected to the modern world.
            </p>

            {/* CTA Button: Root Theme Uiverse Button */}
            <div className="pt-3 flex justify-center lg:justify-start w-full">
              <UiverseButton
                text="Get Started"
                href="#pricing"
                className="!px-9 !py-3.5 !text-sm sm:!text-base"
              />
            </div>
          </div>

          {/* Right Column: 3D Interactive Cobe Globe (Hidden on Mobile) */}
          <div className="hidden lg:flex lg:col-span-5 justify-center items-center">
            <CobeGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}
