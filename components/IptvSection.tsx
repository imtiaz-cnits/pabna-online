"use client";

import { Tv } from "lucide-react";

const iptvLinks = [
  { name: "ICC IPTV Link", url: "http://10.16.100.244" },
  { name: "Circle IPTV Link", url: "http://circleftp.net" },
  { name: "E-BOX TV Link", url: "http://tv2.ebox.live/" },
  { name: "Unix TV Link", url: "http://30.30.30.30/" },
  { name: "ebox IPTV Link", url: "http://tv2.ebox.live/" },
];

const iptvApps = [
  { name: "Toffee App", url: "https://play.google.com/store/apps/details?id=com.banglalink.toffee", isTextLogo: false },
  { name: "Smart Box App", url: "#", isTextLogo: true, logoText: "Smart Box" },
  { name: "CTGbox App", url: "http://ctgbox.com/", isTextLogo: false },
];

export default function IptvSection() {
  return (
    <>
      {/* IPTV Links Banner Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h4 className="text-xl sm:text-2xl font-bold uppercase tracking-wide border-b-2 border-white/30 inline-block pb-2">
              IPTV Links
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {iptvLinks.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 text-center text-slate-900 shadow-lg flex flex-col justify-between items-center group"
              >
                <h4 className="font-bold text-sm text-slate-800 mb-3">{item.name}</h4>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Tv className="w-6 h-6" />
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 rounded-full border border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white font-bold text-xs transition-colors"
                >
                  WATCH NOW
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IPTV Apps Section */}
      <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wide border-b-2 border-[#00c3ff] inline-block pb-1">
              IPTV Apps
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {iptvApps.map((app, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-800/90 rounded-2xl p-6 text-center border border-slate-100 dark:border-slate-700/60 shadow-sm flex flex-col items-center justify-between group"
              >
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-3">{app.name}</h4>

                <div className="h-14 flex items-center justify-center mb-4">
                  {app.isTextLogo ? (
                    <span className="text-xl font-black text-rose-600 tracking-tight">{app.logoText}</span>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-slate-700 text-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Tv className="w-6 h-6" />
                    </div>
                  )}
                </div>

                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 rounded-full border border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white font-bold text-xs transition-colors"
                >
                  WATCH NOW
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
