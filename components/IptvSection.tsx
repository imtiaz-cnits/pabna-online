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
import UiverseButton from "./UiverseButton";

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
      {/* IPTV Links Banner Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-emerald-200/30 dark:bg-emerald-950/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Centered Section Title */}
          <div className="text-center mb-12 max-w-2xl mx-auto reveal-on-scroll">
            <h4 className="text-3xl font-extrabold font-black text-slate-900 dark:text-white uppercase tracking-wide border-b-2 border-emerald-500 inline-block pb-1.5">
              IPTV Links
            </h4>
            <p className="text-md font-medium text-slate-500 dark:text-slate-400 mt-3">Direct server links for live television</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6" data-reveal-group>
            {iptvLinks.map((item, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="reveal-stagger-item group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl p-5 border border-slate-200/80 dark:border-white/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_15px_35px_rgba(5,150,105,0.18)] hover:-translate-y-1.5 hover:border-emerald-400/50 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-500 ease-out overflow-hidden flex flex-col items-center justify-between min-h-[190px] text-center"
              >
                {/* Spotlight Glow Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(250px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(5, 150, 105, 0.12), transparent 40%)`
                  }}
                />

                {/* Top Glowing Tab Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-2 bg-emerald-500 rounded-b-md opacity-60 group-hover:opacity-100 group-hover:w-16 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(5,150,105,0.8)]" />

                {/* Content: Centered Icon & Title */}
                <div className="relative z-10 flex flex-col items-center mb-5 pt-3">
                  <div className="text-emerald-600 dark:text-emerald-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 opacity-80 group-hover:opacity-100 mb-3">
                    <item.icon className="w-8 h-8 stroke-[1.5]" />
                  </div>
                  <h4 className="font-bold text-lg md:text-xl text-slate-800 dark:text-slate-100 leading-snug">{item.name}</h4>
                </div>

                {/* Root Theme Uiverse Button: Watch Now on desktop, Watch on mobile */}
                <div className="relative z-10 w-full">
                  <UiverseButton
                    text="Watch Now"
                    mobileText="Watch"
                    href={item.url}
                    fullWidth
                    className="!px-2.5 sm:!px-4 !py-2 sm:!py-2.5 !text-xs sm:!text-sm"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPTV Apps Section */}
      <section className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden border-t border-slate-100 dark:border-slate-800 transition-colors duration-500">
        {/* Subtle Background Glows */}
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/40 dark:bg-emerald-950/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Centered Section Title */}
          <div className="text-center mb-12 max-w-2xl mx-auto reveal-on-scroll">
            <h4 className="text-3xl font-extrabold font-black text-slate-900 dark:text-white uppercase tracking-wide border-b-2 border-emerald-500 inline-block pb-1.5">
              IPTV Apps
            </h4>
            <p className="text-md font-medium text-slate-500 dark:text-slate-400 mt-3">Download official apps for best experience</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto" data-reveal-group>
            {iptvApps.map((app, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="reveal-stagger-item group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-[2rem] p-8 border border-slate-200/80 dark:border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_45px_rgba(5,150,105,0.2)] hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-500 ease-out overflow-hidden flex flex-col justify-between min-h-[180px]"
              >
                {/* Spotlight Glow Effect */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.12), transparent 40%)`
                  }}
                />

                {/* Top Glowing Tab Bar (Emerald Green) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-emerald-500 rounded-b-md opacity-70 group-hover:opacity-100 group-hover:w-24 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(16,185,129,0.9)]" />

                {/* Content */}
                <div className="relative z-10 flex items-start justify-between mb-8">
                  <div className="flex flex-col text-left">
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-lg md:text-xl tracking-tight mb-1">{app.name}</h4>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Application</span>
                  </div>

                  {/* Larger icon with slight rotation on hover */}
                  <div className="text-emerald-500 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 origin-center">
                    <app.icon className="w-14 h-14 stroke-[1.5] drop-shadow-sm" />
                  </div>
                </div>

                {/* Root Theme Uiverse Button */}
                <div className="relative z-10 w-full">
                  <UiverseButton
                    text="WATCH NOW"
                    href={app.url}
                    fullWidth
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}