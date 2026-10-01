"use client";

import { ExternalLink, Clapperboard, Sparkles, HardDrive } from "lucide-react";
import SpiderNetCanvas from "./SpiderNetCanvas";
import UiverseButton from "./UiverseButton";

const ftpServers = [
  { name: "ICC FTP", url: "http://10.16.100.244", img: "/Website-img/ftp-server/moviedom-log.png", color: "from-emerald-500 to-teal-600" },
  { name: "Circle FTP", url: "http://circleftp.net", img: null, color: "from-teal-600 to-emerald-700" },
  { name: "Metro Media FTP", url: "http://www.metromedia.digital/", img: "/Website-img/ftp-server/metro-media.png", color: "from-emerald-500 to-teal-600" },
  { name: "TimePassBD FTP", url: "http://timepassbd.live/", img: "/Website-img/ftp-server/timepassbd-logo.png", color: "from-emerald-500 to-teal-600" },
  { name: "PlusBox FTP", url: "http://plusbox.tv/", img: "/Website-img/ftp-server/plusbox-tv.png", color: "from-emerald-500 to-teal-600" },
  { name: "CTG Hall FTP", url: "http://ctghall.com/", img: "/Website-img/ftp-server/ctghall.png", color: "from-teal-600 to-emerald-700" },
  { name: "fs ebox Live", url: "http://fs.ebox.live/", img: null, color: "from-emerald-500 to-teal-600" },
  { name: "Sam Online", url: "http://172.16.50.4", img: "/Website-img/ftp-server/sam-online.png", color: "from-teal-600 to-emerald-700" },
  { name: "E-Box Live!", url: "http://fileserver.ebox.live/", img: null, color: "from-teal-600 to-emerald-700" },
  { name: "Naturalbd FTP", url: "https://naturalbd.com/", img: "/Website-img/ftp-server/naturalbd-logo.png", color: "from-emerald-500 to-teal-600" },
];

export default function FtpSection() {
  return (
    <section id="ftv" className="py-16 lg:py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">

      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* 1. Concentric WiFi Radar Wave Rings (Top Right) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-emerald-400 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-8 rounded-full border border-teal-400 animate-[ping_9s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-16 rounded-full border border-emerald-300" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Bottom Left) */}
      <svg className="absolute bottom-0 left-0 w-[450px] h-[300px] pointer-events-none opacity-20" viewBox="0 0 450 300" fill="none">
        <path d="M 0 100 Q 200 240, 450 180" stroke="url(#ftpFiberLine1)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="200" cy="240" r="4" fill="#10b981" className="animate-ping" />
        <defs>
          <linearGradient id="ftpFiberLine1" x1="0%" y1="0%" x2="100%" y2="100%">
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
              FTP SERVER
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
            Choose what you want to watch,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-300">
              with various FTP servers
            </span>
          </h3>
        </div>

        {/* 10 Highly Stylish FTP Server Cards (Pure Smooth Hover Lift identical to Price Cards) */}
        <div className="reveal-on-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6">
          {ftpServers.map((server, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-4 sm:p-4 border border-slate-200/80 dark:border-white/10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_45px_-8px_rgba(5,150,105,0.22)] hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-500 ease-out flex flex-col items-center justify-between text-center overflow-hidden"
            >
              {/* Spider Net Constellation Interactive Canvas Background */}
              <SpiderNetCanvas particleCount={14} maxDistance={65} opacity={0.3} />

              {/* Subtle Ambient Hover Glow in Background of Box */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-full flex flex-col items-center">
                {/* Stylish Server Logo Container (Professional dark tech bg for maximum logo contrast) */}
                <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center p-3 mb-4 group-hover:scale-105 group-hover:border-emerald-500/50 shadow-md shadow-slate-950/10 group-hover:shadow-[0_10px_25px_-5px_rgba(5,150,105,0.3)] transition-all duration-300 relative z-10">
                  {server.img ? (
                    <img
                      src={server.img}
                      alt={server.name}
                      className="max-h-full max-w-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${server.color} text-white flex items-center justify-center shadow-md shadow-emerald-500/25`}>
                      <Clapperboard className="w-6 h-6 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Server Title */}
                <h4 className="font-black text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 w-full mb-4 relative z-10">
                  {server.name}
                </h4>
              </div>

              {/* Prominent Root Theme Uiverse Button (Connect on mobile, Connect Server on desktop) */}
              <div className="w-full relative z-10 pt-2">
                <UiverseButton
                  text="Connect"
                  href={server.url}
                  fullWidth
                  className="!px-2.5 sm:!px-4 !py-2 sm:!py-2.5 !text-xs sm:!text-sm"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
