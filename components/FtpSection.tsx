"use client";

import { Film } from "lucide-react";

const ftpServers = [
  { name: "ICC FTP", url: "http://10.16.100.244", logoColor: "text-emerald-500", bgLogo: "bg-emerald-50" },
  { name: "Circle FTP", url: "http://circleftp.net", logoColor: "text-amber-500", bgLogo: "bg-amber-50" },
  { name: "Metro Media FTP", url: "http://www.metromedia.digital/", logoColor: "text-purple-500", bgLogo: "bg-purple-50" },
  { name: "TimePassBD FTP", url: "http://timepassbd.live/", logoColor: "text-cyan-500", bgLogo: "bg-cyan-50" },
  { name: "PlusBox FTP", url: "http://plusbox.tv/", logoColor: "text-rose-500", bgLogo: "bg-rose-50" },
  { name: "CTG Hall FTP", url: "http://ctghall.com/", logoColor: "text-[#d32f2f]", bgLogo: "bg-red-50" },
  { name: "fs ebox Live", url: "http://fs.ebox.live/", logoColor: "text-rose-600", bgLogo: "bg-rose-50" },
  { name: "Sam Online", url: "http://172.16.50.4", logoColor: "text-slate-900 dark:text-white bg-slate-900 text-white px-2 py-1 rounded font-black", bgLogo: "bg-slate-100" },
  { name: "E-Box Live!", url: "http://fileserver.ebox.live/", logoColor: "text-rose-500 font-extrabold", bgLogo: "bg-rose-50" },
  { name: "Naturalbd FTP", url: "https://naturalbd.com/", logoColor: "text-emerald-600", bgLogo: "bg-emerald-50" },
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
              <div className={`w-14 h-14 rounded-2xl ${server.bgLogo} dark:bg-slate-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Film className={`w-7 h-7 ${server.logoColor}`} />
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
