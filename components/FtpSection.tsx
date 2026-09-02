"use client";

import { Film } from "lucide-react";

const ftpServers = [
  { name: "ICC FTP", url: "http://10.16.100.244", img: "/Website-img/ftp-server/moviedom-log.png" },
  { name: "Circle FTP", url: "http://circleftp.net", img: null },
  { name: "Metro Media FTP", url: "http://www.metromedia.digital/", img: "/Website-img/ftp-server/metro-media.png" },
  { name: "TimePassBD FTP", url: "http://timepassbd.live/", img: "/Website-img/ftp-server/timepassbd-logo.png" },
  { name: "PlusBox FTP", url: "http://plusbox.tv/", img: "/Website-img/ftp-server/plusbox-tv.png" },
  { name: "CTG Hall FTP", url: "http://ctghall.com/", img: "/Website-img/ftp-server/ctghall.png" },
  { name: "fs ebox Live", url: "http://fs.ebox.live/", img: null },
  { name: "Sam Online", url: "http://172.16.50.4", img: "/Website-img/ftp-server/sam-online.png" },
  { name: "E-Box Live!", url: "http://fileserver.ebox.live/", img: null },
  { name: "Naturalbd FTP", url: "https://naturalbd.com/", img: "/Website-img/ftp-server/naturalbd-logo.png" },
];

export default function FtpSection() {
  return (
    <section id="ftv" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00c3ff]">
            FTP SERVER
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 leading-tight">
            Choose what you want to watch,<br />with various FTP servers
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {ftpServers.map((server, idx) => (
            <a
              key={idx}
              href={server.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 text-center border border-slate-100 dark:border-slate-700/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center justify-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform p-2 border border-slate-100 dark:border-slate-600 shadow-xs">
                {server.img ? (
                  <img
                    src={server.img}
                    alt={server.name}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <Film className="w-7 h-7 text-[#00c3ff]" />
                )}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                {server.name}
              </h4>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
