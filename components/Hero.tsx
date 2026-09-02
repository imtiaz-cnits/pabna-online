"use client";

import CobeGlobe from "./CobeGlobe";

export default function Hero() {
  return (
    <section className="relative min-h-0 lg:min-h-[90vh] flex items-center overflow-hidden bg-slate-950 text-white pt-[110px] pb-[50px] lg:pt-[110px] lg:pb-[30px]">
      {/* Background Image with Lighter Gradient Overlay so Image is Clearly Visible */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105 opacity-75"
        style={{ backgroundImage: `url('/Website-img/hero_bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-slate-950/45" />

      {/* Subtle Neon Glow Auras */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

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
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] animate-title-sheen drop-shadow-[0_5px_20px_rgba(240,110,83,0.35)] py-1">
              Internet Service Provider
            </h1>

            {/* Description (Strictly 16px Font Size) */}
            <p className="max-w-xl mx-auto lg:mx-0 text-[16px] text-slate-100 font-normal leading-relaxed whitespace-pre-line drop-shadow-md pt-1">
              Expert Internet Service Provider Based on Your Town Pabna.{"\n"}
              Let's get connected to the modern world.
            </p>

            {/* CTA Button (Matching Navbar View Pricing root button styling) */}
            <div className="pt-3 flex justify-center lg:justify-start w-full">
              <a
                href="#pricing"
                className="relative group inline-flex items-center justify-center px-9 py-3 rounded-full bg-gradient-to-r from-[#00c3ff] via-[#0099ff] to-[#0284c7] hover:from-[#00d4ff] hover:via-[#00aaff] hover:to-[#0396e6] text-white font-extrabold text-sm sm:text-base tracking-wider shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer border border-white/30"
              >
                {/* WiFi Radar Signal Background Wave Animation */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-white/80 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                  <div className="w-16 h-16 rounded-full border border-white/50 animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                  <div className="w-24 h-24 rounded-full border border-cyan-100/30 animate-[ping_3.6s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                </div>

                {/* Crisp Bold White Text */}
                <span className="relative z-10 text-white tracking-widest font-black">Get Started</span>

                {/* Smooth Hover Glass Sheen Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </a>
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
