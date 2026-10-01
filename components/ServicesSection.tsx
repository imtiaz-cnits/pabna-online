"use client";

import { Wifi, Server, Tv, ArrowRight } from "lucide-react";
import UiverseButton from "./UiverseButton";

export default function ServicesSection() {
  const services = [
    {
      title: "Broadband Internet",
      description: "Magazine and housed in a gilded in frame.",
      icon: Wifi,
      link: "#pricing",
      gradient: "from-emerald-500 to-teal-600",
      bgGlow: "from-emerald-500/10 to-transparent",
      accentText: "text-emerald-600 dark:text-emerald-400",
      btnBg: "group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-600",
    },
    {
      title: "FTP Service",
      description: "Magazine and housed in a gilded in frame.",
      icon: Server,
      link: "#ftv",
      gradient: "from-teal-600 to-emerald-700",
      bgGlow: "from-teal-600/10 to-transparent",
      accentText: "text-teal-600 dark:text-teal-400",
      btnBg: "group-hover:bg-gradient-to-r group-hover:from-teal-600 group-hover:to-emerald-700",
    },
    {
      title: "IPTV Service",
      description: "Magazine and housed in a gilded in frame.",
      icon: Tv,
      link: "#iptv",
      gradient: "from-emerald-600 to-teal-500",
      bgGlow: "from-emerald-500/10 to-transparent",
      accentText: "text-emerald-500 dark:text-emerald-400",
      btnBg: "group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-500",
    },
  ];

  return (
    <section id="service" className="py-16 lg:py-24 bg-[#f8fafc] dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">

      {/* --- Modern ISP Decorative Shapes & Network Constellation Lines --- */}
      {/* 1. Network Constellation Node Lines (Left) */}
      <svg className="absolute top-12 left-0 w-80 h-80 pointer-events-none opacity-20" viewBox="0 0 300 300" fill="none">
        <line x1="20" y1="40" x2="120" y2="100" stroke="#059669" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="120" y1="100" x2="80" y2="220" stroke="#047857" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="240" y2="140" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="20" cy="40" r="4" fill="#059669" />
        <circle cx="120" cy="100" r="6" fill="#047857" className="animate-pulse" />
        <circle cx="80" cy="220" r="4" fill="#059669" />
        <circle cx="240" cy="140" r="5" fill="#10b981" />
      </svg>

      {/* 2. Fiber Optic Wave Arc (Right) */}
      <svg className="absolute bottom-6 right-0 w-96 h-64 pointer-events-none opacity-20" viewBox="0 0 400 250" fill="none">
        <path d="M 0 180 Q 200 40, 400 120" stroke="url(#serviceFiberGrad)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="200" cy="40" r="4" fill="#10b981" className="animate-ping" />
        <defs>
          <linearGradient id="serviceFiberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="100%" stopColor="#10b981" />
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

        {/* Modern Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">
              OUR SERVICES
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            We are Specialized in the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-300">
              Following Services
            </span>
          </h3>
        </div>

        {/* 3 Colorful Modern Feature Cards (Pure Smooth Hover Lift identical to Price Cards) */}
        <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/80 dark:border-white/10 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_12px_35px_-8px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_22px_50px_-10px_rgba(5,150,105,0.25)] hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Dynamic Neon Background Bloom on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Ambient Soft Glow Behind Icon */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-emerald-400/20 to-teal-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Colorful Multi-Layer Icon Box */}
                  <a href={service.link} className="inline-block mb-7">
                    <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComp className="w-9 h-9 drop-shadow-md" />
                    </div>
                  </a>

                  {/* Service Title */}
                  <h3 className={`text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:${service.accentText} transition-colors duration-300`}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Interactive Action Button: Root Theme Uiverse Button */}
                <div className="relative z-10 pt-5 border-t border-slate-100 dark:border-slate-800 w-full flex justify-center">
                  <UiverseButton
                    text="Explore Details"
                    href={service.link}
                    fullWidth
                  />
                </div>

                {/* Corner Watermark Circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50/70 dark:bg-slate-800/30 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700 -z-0" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
