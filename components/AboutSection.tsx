"use client";

import { Sparkles, ArrowRight, ShieldCheck, Zap, Wifi, Activity } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">

      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* 1. Concentric WiFi Radar Wave Rings (Top Left) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 pointer-events-none opacity-25">
        <div className="absolute inset-0 rounded-full border border-cyan-400 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-8 rounded-full border border-cyan-300 animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-16 rounded-full border border-cyan-200" />
        <div className="absolute inset-24 rounded-full border border-blue-200" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Background Top Right to Center) */}
      <svg className="absolute top-0 right-0 w-[500px] h-[350px] pointer-events-none opacity-20" viewBox="0 0 500 350" fill="none">
        <path d="M 0 50 Q 250 180, 500 80" stroke="url(#fiberLine1)" strokeWidth="2.5" strokeDasharray="8 6" />
        <path d="M 50 120 Q 300 240, 500 160" stroke="url(#fiberLine2)" strokeWidth="2" strokeDasharray="6 4" />
        <circle cx="250" cy="180" r="4" fill="#00c3ff" className="animate-ping" />
        <defs>
          <linearGradient id="fiberLine1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c3ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="fiberLine2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00c3ff" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Subtle Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0284c7 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Modern Content & Badges */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll">

            {/* Colorful Gradient Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-500/30 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
              </span>
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* Main Heading with Multi-Stop Vibrant Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.18] tracking-tight">
              Get connected with our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#7209b7]">
                high speed internet
              </span>{" "}
              services
            </h2>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-2xl">
              Hundreds of satisfied customers are already getting more buyers and earn much mor If you are looking for a reliable partner for the growth of your business.
            </p>

            {/* Colorful Feature Cards with Staggered Entrance Reveal */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2" data-reveal-group>

              {/* Card 1: Electric Cyan Glow */}
              <div className="reveal-stagger-item group relative p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/60 shadow-[0_8px_25px_-5px_rgba(0,195,255,0.12)] hover:shadow-[0_18px_35px_-5px_rgba(0,195,255,0.28)] hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-300 transition-all duration-300 overflow-hidden">
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center shadow-md shadow-cyan-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 block">Ultra-Fast Fiber</span>
                    <span className="text-[10px] font-semibold text-cyan-600 dark:text-cyan-400">Gigabit Network</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Royal Blue / Indigo Glow */}
              <div className="reveal-stagger-item group relative p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/60 shadow-[0_8px_25px_-5px_rgba(99,102,241,0.12)] hover:shadow-[0_18px_35px_-5px_rgba(99,102,241,0.28)] hover:-translate-y-2 hover:scale-[1.02] hover:border-indigo-300 transition-all duration-300 overflow-hidden">
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 block">99.9% Uptime</span>
                    <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">Low Latency</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Emerald Glow */}
              <div className="reveal-stagger-item group relative p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/60 shadow-[0_8px_25px_-5px_rgba(16,185,129,0.12)] hover:shadow-[0_18px_35px_-5px_rgba(16,185,129,0.28)] hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300 transition-all duration-300 overflow-hidden">
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 block">24/7 Support</span>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Dedicated Help</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action CTA Button */}
            <div className="pt-3">
              <a
                href="#pricing"
                className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#00c3ff] via-[#0088ff] to-[#6366f1] hover:from-[#00d4ff] hover:via-[#0099ff] hover:to-[#7c3aed] text-white font-black text-sm sm:text-base tracking-wide shadow-[0_12px_30px_rgba(0,195,255,0.35)] hover:shadow-[0_18px_40px_rgba(99,102,241,0.45)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* WiFi Wave Pulse Effect */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-30 group-hover:opacity-75 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-white/80 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                  <div className="w-16 h-16 rounded-full border border-white/50 animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                </div>

                <span className="relative z-10">Get Connected</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />

                {/* Glass Sheen Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </a>
            </div>
          </div>

          {/* Right Column: Realistic Professional Enterprise Network Photo */}
          <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
            <div className="relative w-full max-w-md lg:max-w-none">

              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-700 pointer-events-none" />

              {/* Main Card Frame with Professional Image */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-[0_25px_60px_-15px_rgba(0,112,244,0.3)] overflow-hidden">
                <div className="rounded-2xl overflow-hidden relative group bg-slate-900">
                  <img
                    src="/Website-img/about_img.jpg"
                    alt="Pabna Online Fiber Datacenter"
                    className="w-full h-[360px] sm:h-[430px] object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Professional Contrast Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                </div>
              </div>

              {/* Floating Decorative Glass Stat Card 1 (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white/95 dark:bg-slate-850/95 dark:bg-slate-900/95 backdrop-blur-xl border border-cyan-200 dark:border-cyan-500/30 p-3.5 sm:p-4 rounded-2xl shadow-[0_15px_35px_-5px_rgba(0,195,255,0.25)] flex items-center gap-3.5 animate-float-1">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/30">
                  <Sparkles className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-cyan-600 dark:text-cyan-400 tracking-wider">Pabna Online ISP</p>
                  <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white">Gigabit Optical Fiber</p>
                </div>
              </div>

              {/* Floating Decorative Glass Stat Card 2 (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-white/95 dark:bg-slate-850/95 dark:bg-slate-900/95 backdrop-blur-xl border border-blue-200 dark:border-blue-500/30 p-3 rounded-2xl shadow-[0_15px_30px_-5px_rgba(79,70,229,0.25)] flex items-center gap-2.5 animate-float-2">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-sm">
                  <Activity className="w-4 h-4 animate-bounce" />
                </div>
                <div>
                  <p className="text-[9px] uppercase font-black text-indigo-600 dark:text-indigo-400">Active Speed</p>
                  <p className="text-xs font-black text-slate-900 dark:text-white">Up to 100 Mbps</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
