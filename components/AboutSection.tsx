"use client";

import { useRef } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Wifi, Activity } from "lucide-react";
import UiverseButton from "./UiverseButton";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const tiltStageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !tiltStageRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const rotX = -y * 18;
    const rotY = x * 18;
    tiltStageRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.03, 1.03, 1)`;
    tiltStageRef.current.style.transition = "transform 0.1s cubic-bezier(0.2, 0.8, 0.2, 1)";
  };

  const handleMouseLeave = () => {
    if (!tiltStageRef.current) return;
    tiltStageRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    tiltStageRef.current.style.transition = "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)";
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">

      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* 1. Concentric WiFi Radar Wave Rings (Top Left) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 pointer-events-none opacity-25">
        <div className="absolute inset-0 rounded-full border border-emerald-400 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-8 rounded-full border border-emerald-300 animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-16 rounded-full border border-teal-200" />
        <div className="absolute inset-24 rounded-full border border-emerald-200" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Background Top Right to Center) */}
      <svg className="absolute top-0 right-0 w-[500px] h-[350px] pointer-events-none opacity-20" viewBox="0 0 500 350" fill="none">
        <path d="M 0 50 Q 250 180, 500 80" stroke="url(#fiberLine1)" strokeWidth="2.5" strokeDasharray="8 6" />
        <path d="M 50 120 Q 300 240, 500 160" stroke="url(#fiberLine2)" strokeWidth="2" strokeDasharray="6 4" />
        <circle cx="250" cy="180" r="4" fill="#10b981" className="animate-ping" />
        <defs>
          <linearGradient id="fiberLine1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="fiberLine2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Subtle Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#059669 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Modern Content & Badges */}
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll">

            {/* Colorful Gradient Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* Main Heading with Monochromatic Emerald Gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.18] tracking-tight">
              Get connected with our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-300">
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

              {/* Card 1: Cyber Emerald */}
              <div className="reveal-stagger-item group relative p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_18px_35px_-5px_rgba(5,150,105,0.25)] hover:-translate-y-1.5 hover:scale-[1.01] hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-500 ease-out overflow-hidden">
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 block">Ultra-Fast Fiber</span>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Gigabit Network</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Deep Teal */}
              <div className="reveal-stagger-item group relative p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_18px_35px_-5px_rgba(5,150,105,0.25)] hover:-translate-y-1.5 hover:scale-[1.01] hover:border-teal-400/60 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-500 ease-out overflow-hidden">
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 block">99.9% Uptime</span>
                    <span className="text-[10px] font-semibold text-teal-600 dark:text-teal-400">Low Latency</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Emerald Support */}
              <div className="reveal-stagger-item group relative p-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_18px_35px_-5px_rgba(5,150,105,0.25)] hover:-translate-y-1.5 hover:scale-[1.01] hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-500 ease-out overflow-hidden">
                <div className="relative flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-500/25 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-slate-800 dark:text-slate-100 block">24/7 Support</span>
                    <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">Dedicated Help</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Action CTA Button: Root Theme Uiverse Button */}
            <div className="pt-3">
              <UiverseButton
                text="Get Connected"
                href="#pricing"
                className="!px-9 !py-3.5 !text-sm sm:!text-base"
              />
            </div>
          </div>

          {/* Right Column: Realistic Professional Enterprise Network Photo with Interactive 3D Tilt */}
          <div className="lg:col-span-5 flex justify-center reveal-on-scroll">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: "1200px",
              }}
              className="relative w-full max-w-md lg:max-w-none cursor-pointer select-none"
            >
              {/* 3D Tilting Stage */}
              <div
                ref={tiltStageRef}
                style={{
                  transform: "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
                className="relative w-full h-full"
              >
                {/* Outer Glow Ring */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-50 transition duration-700 pointer-events-none" />

                {/* Main Card Frame with Professional Image */}
                <div
                  style={{ transform: "translateZ(20px)" }}
                  className="relative rounded-3xl p-2 bg-gradient-to-br from-emerald-500 to-teal-700 shadow-[0_25px_60px_-15px_rgba(5,150,105,0.3)] overflow-hidden"
                >
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

                {/* Floating Decorative Glass Stat Card 1 (Bottom Left: 3D Parallax Pop) */}
                <div
                  style={{
                    transform: "translateZ(55px)",
                    boxShadow: "0 25px 40px -10px rgba(5,150,105,0.35), inset 0 1px 1px rgba(255,255,255,0.8)",
                  }}
                  className="absolute bottom-2.5 left-2.5 sm:-bottom-5 sm:-left-5 max-w-[calc(100%-1.25rem)] bg-white/95 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/80 dark:border-white/20 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl flex items-center gap-2.5 sm:gap-3.5 transition-transform duration-200 shadow-xl"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/30 shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[9px] sm:text-[10px] uppercase font-black text-emerald-600 dark:text-emerald-400 tracking-wider">Pabna Online ISP</p>
                    <p className="text-xs sm:text-base font-black text-slate-900 dark:text-white">Gigabit Optical Fiber</p>
                  </div>
                </div>

                {/* Floating Decorative Glass Stat Card 2 (Top Right: 3D Parallax Pop) */}
                <div
                  style={{
                    transform: "translateZ(70px)",
                    boxShadow: "0 20px 35px -8px rgba(5,150,105,0.35), inset 0 1px 1px rgba(255,255,255,0.8)",
                  }}
                  className="absolute top-2.5 right-2.5 sm:-top-3 sm:-right-4 max-w-[calc(100%-1.25rem)] bg-white/95 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/80 dark:border-white/20 p-2 sm:p-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-2.5 transition-transform duration-200 shadow-xl"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-sm shrink-0">
                    <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
                  </div>
                  <div>
                    <p className="text-[8px] sm:text-[9px] uppercase font-black text-emerald-600 dark:text-emerald-400">Active Speed</p>
                    <p className="text-[11px] sm:text-xs font-black text-slate-900 dark:text-white">Up to 100 Mbps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
