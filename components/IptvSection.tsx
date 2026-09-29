"use client";

import {
  Tv,
  ExternalLink,
  MonitorPlay,
  Film,
  Radio,
  PlaySquare,
  Airplay,
  Video
} from "lucide-react";
import React from "react";

const iptvLinks = [
  { name: "ICC IPTV Link", url: "http://10.16.100.244", icon: Tv },
  { name: "Circle IPTV Link", url: "http://circleftp.net", icon: MonitorPlay },
  { name: "E-BOX TV Link", url: "http://tv2.ebox.live/", icon: Film },
  { name: "Unix TV Link", url: "http://30.30.30.30/", icon: Radio },
  { name: "ebox IPTV Link", url: "http://tv2.ebox.live/", icon: PlaySquare },
];

const iptvApps = [
  { name: "Toffee App", url: "https://play.google.com/store/apps/details?id=com.banglalink.toffee", icon: Airplay },
  { name: "Smart Box App", url: "#", icon: Video },
  { name: "CTGbox App", url: "http://ctgbox.com/", icon: Tv },
];

export default function IptvSection() {
  // Mouse tracking handler for internal glowing spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      {/* IPTV Links Banner Section */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-200/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Centered Section Title */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h4 className="text-3xl font-extrabold font-black text-slate-900 uppercase tracking-wide border-b-2 border-cyan-500 inline-block pb-1.5">
              IPTV Links
            </h4>
            <p className="text-md font-medium text-slate-500 mt-3">Direct server links for live television</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {iptvLinks.map((item, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="group relative bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col items-center justify-between min-h-[190px] text-center"
              >
                {/* Spotlight Glow Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(6, 182, 212, 0.1), transparent 40%)`
                  }}
                />

                {/* Top Glowing Tab Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-cyan-400 rounded-b-md opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

                {/* Content: Centered Icon & Title */}
                <div className="relative z-10 flex flex-col items-center mb-5 pt-3">
                  <div className="text-cyan-500 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 opacity-80 group-hover:opacity-100 mb-3">
                    <item.icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl text-slate-800 leading-snug">{item.name}</h4>
                </div>

                {/* Updated Button matching IPTV Apps style */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border-2 border-slate-100 bg-slate-50 text-slate-600 font-bold text-[14px] uppercase tracking-wider transition-all duration-300 group-hover:border-cyan-500 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                >
                  WATCH NOW
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPTV Apps Section */}
      <section className="py-20 bg-white relative overflow-hidden border-t border-slate-100">
        {/* Subtle Background Glows */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-100/40 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Centered Section Title */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h4 className="text-3xl font-extrabold font-black text-slate-900 uppercase tracking-wide border-b-2 border-amber-500 inline-block pb-1.5">
              IPTV Apps
            </h4>
            <p className="text-md font-medium text-slate-500 mt-3">Download official apps for best experience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {iptvApps.map((app, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="group relative bg-slate-50/50 rounded-[2rem] p-8 border border-slate-200 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2.5 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[180px]"
              >
                {/* Spotlight Glow Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(245, 158, 11, 0.12), transparent 40%)`
                  }}
                />

                {/* Top Glowing Tab Bar (Amber) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-amber-400 rounded-b-md opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(245,158,11,0.9)]" />

                {/* Content */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className="flex flex-col text-left">
                    <h4 className="font-extrabold text-slate-900 text-lg md:text-xl tracking-tight mb-1">{app.name}</h4>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Application</span>
                  </div>

                  {/* Larger icon with slight rotation on hover */}
                  <div className="text-amber-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 origin-center">
                    <app.icon className="w-14 h-14 stroke-[1.5] drop-shadow-sm" />
                  </div>
                </div>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-sm transition-all duration-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-white group-hover:shadow-lg group-hover:shadow-amber-500/30"
                >
                  WATCH NOW
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}