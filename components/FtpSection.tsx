"use client";

import { ExternalLink, Clapperboard, Sparkles, HardDrive } from "lucide-react";

const ftpServers = [
  { name: "ICC FTP", url: "http://10.16.100.244", img: "/Website-img/ftp-server/moviedom-log.png", color: "from-cyan-500 to-blue-600" },
  { name: "Circle FTP", url: "http://circleftp.net", img: null, color: "from-blue-600 to-indigo-600" },
  { name: "Metro Media FTP", url: "http://www.metromedia.digital/", img: "/Website-img/ftp-server/metro-media.png", color: "from-purple-500 to-indigo-600" },
  { name: "TimePassBD FTP", url: "http://timepassbd.live/", img: "/Website-img/ftp-server/timepassbd-logo.png", color: "from-pink-500 to-rose-600" },
  { name: "PlusBox FTP", url: "http://plusbox.tv/", img: "/Website-img/ftp-server/plusbox-tv.png", color: "from-amber-500 to-orange-600" },
  { name: "CTG Hall FTP", url: "http://ctghall.com/", img: "/Website-img/ftp-server/ctghall.png", color: "from-emerald-500 to-teal-600" },
  { name: "fs ebox Live", url: "http://fs.ebox.live/", img: null, color: "from-cyan-500 to-teal-600" },
  { name: "Sam Online", url: "http://172.16.50.4", img: "/Website-img/ftp-server/sam-online.png", color: "from-blue-500 to-sky-600" },
  { name: "E-Box Live!", url: "http://fileserver.ebox.live/", img: null, color: "from-violet-500 to-purple-600" },
  { name: "Naturalbd FTP", url: "https://naturalbd.com/", img: "/Website-img/ftp-server/naturalbd-logo.png", color: "from-emerald-600 to-green-600" },
];

export default function FtpSection() {
  return (
    <section id="ftv" className="py-16 lg-py-24 bg-white relative overflow-hidden transition-colors">

      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* 1. Concentric WiFi Radar Wave Rings (Top Right) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-cyan-400 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-8 rounded-full border border-blue-400 animate-[ping_9s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-16 rounded-full border border-indigo-300" />
        <div className="absolute inset-24 rounded-full border border-cyan-200" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Bottom Left) */}
      <svg className="absolute bottom-0 left-0 w-[450px] h-[300px] pointer-events-none opacity-20" viewBox="0 0 450 300" fill="none">
        <path d="M 0 100 Q 200 240, 450 180" stroke="url(#ftpFiberLine1)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="200" cy="240" r="4" fill="#00c3ff" className="animate-ping" />
        <defs>
          <linearGradient id="ftpFiberLine1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c3ff" />
            <stop offset="100%" stopColor="#6366f1" />
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
              FTP SERVER
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Choose what you want to watch,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#7209b7]">
              with various FTP servers
            </span>
          </h3>
        </div>

        {/* 10 Highly Stylish FTP Server Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 sm:gap-6">
          {ftpServers.map((server, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-4 sm:p-4 border border-slate-200/90 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-8px_rgba(0,195,255,0.25)] hover:-translate-y-2 hover:border-cyan-300 transition-all duration-300 flex flex-col items-center justify-between text-center overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow in Background of Box */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="w-full flex flex-col items-center">
                {/* Stylish Server Logo Container */}
                <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 mb-4 group-hover:scale-110 group-hover:bg-cyan-50/60 group-hover:border-cyan-200 shadow-sm group-hover:shadow-[0_10px_25px_-5px_rgba(0,195,255,0.2)] transition-all duration-300 relative z-10">
                  {server.img ? (
                    <img
                      src={server.img}
                      alt={server.name}
                      className="max-h-full max-w-full object-contain filter group-hover:brightness-105 transition-all duration-300"
                    />
                  ) : (
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${server.color} text-white flex items-center justify-center shadow-md shadow-cyan-500/25`}>
                      <Clapperboard className="w-6 h-6 animate-pulse" />
                    </div>
                  )}
                </div>

                {/* Server Title */}
                <h4 className="font-black text-slate-900 text-sm sm:text-base group-hover:text-cyan-600 transition-colors line-clamp-1 w-full mb-4 relative z-10">
                  {server.name}
                </h4>
              </div>

              {/* Prominent, Bold, Highly Visible Connect Button */}
              <a
                href={server.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#00c3ff] via-[#0099ff] to-[#0284c7] hover:from-[#00d4ff] hover:via-[#00aaff] hover:to-[#0396e6] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2 relative z-10 overflow-hidden cursor-pointer"
              >
                <span>Connect Server</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

                {/* Subtle Glass Sheen Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
