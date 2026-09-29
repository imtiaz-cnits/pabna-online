"use client";

import { Wifi, Server, Tv, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Broadband Internet",
      description: "Magazine and housed in a gilded in frame.",
      icon: Wifi,
      link: "#pricing",
      gradient: "from-cyan-500 via-sky-500 to-blue-600",
      bgGlow: "from-cyan-500/10 via-sky-500/5 to-transparent",
      accentText: "text-cyan-600",
      btnBg: "group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600",
    },
    {
      title: "FTP Service",
      description: "Magazine and housed in a gilded in frame.",
      icon: Server,
      link: "#ftv",
      gradient: "from-blue-600 via-indigo-600 to-violet-600",
      bgGlow: "from-blue-500/10 via-indigo-500/5 to-transparent",
      accentText: "text-indigo-600",
      btnBg: "group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600",
    },
    {
      title: "IPTV Service",
      description: "Magazine and housed in a gilded in frame.",
      icon: Tv,
      link: "#iptv",
      gradient: "from-fuchsia-600 via-purple-600 to-pink-500",
      bgGlow: "from-fuchsia-500/10 via-pink-500/5 to-transparent",
      accentText: "text-fuchsia-600",
      btnBg: "group-hover:bg-gradient-to-r group-hover:from-fuchsia-600 group-hover:to-pink-500",
    },
  ];

  return (
    <section id="service" className="py-16 lg-py-24 bg-[#f8fafc] relative overflow-hidden transition-colors">

      {/* --- Modern ISP Decorative Shapes & Network Constellation Lines --- */}
      {/* 1. Network Constellation Node Lines (Left) */}
      <svg className="absolute top-12 left-0 w-80 h-80 pointer-events-none opacity-20" viewBox="0 0 300 300" fill="none">
        <line x1="20" y1="40" x2="120" y2="100" stroke="#00c3ff" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="120" y1="100" x2="80" y2="220" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="120" y1="100" x2="240" y2="140" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="20" cy="40" r="4" fill="#00c3ff" />
        <circle cx="120" cy="100" r="6" fill="#3b82f6" className="animate-pulse" />
        <circle cx="80" cy="220" r="4" fill="#00c3ff" />
        <circle cx="240" cy="140" r="5" fill="#6366f1" />
      </svg>

      {/* 2. Fiber Optic Wave Arc (Right) */}
      <svg className="absolute bottom-6 right-0 w-96 h-64 pointer-events-none opacity-20" viewBox="0 0 400 250" fill="none">
        <path d="M 0 180 Q 200 40, 400 120" stroke="url(#serviceFiberGrad)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="200" cy="40" r="4" fill="#00c3ff" className="animate-ping" />
        <defs>
          <linearGradient id="serviceFiberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c3ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
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

        {/* Modern Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-500/30 text-cyan-700 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
            </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            We are Specialized in the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#7209b7]">
              Following Services
            </span>
          </h3>
        </div>

        {/* 3 Colorful Modern Feature Cards (No Top Border, Deep Glow Shadows, Rich Lift Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_50px_-10px_rgba(0,195,255,0.25)] hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-300 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Dynamic Neon Background Bloom on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Ambient Soft Glow Behind Icon */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Colorful Multi-Layer Icon Box */}
                  <a href={service.link} className="inline-block mb-7">
                    <div className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <IconComp className="w-9 h-9 drop-shadow-md" />
                    </div>
                  </a>

                  {/* Service Title */}
                  <h3 className={`text-2xl font-black text-slate-900 mb-3 group-hover:${service.accentText} transition-colors duration-300`}>
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Interactive Action Footer */}
                <div className="relative z-10 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={service.link}
                    className={`inline-flex items-center gap-2 text-sm font-black ${service.accentText} transition-colors`}
                  >
                    <span>Explore Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>

                  {/* Animated Circular Button */}
                  <div className={`w-10 h-10 rounded-full bg-slate-100/90 text-slate-600 ${service.btnBg} group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110`}>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Watermark Circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50/70 rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700 -z-0" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
