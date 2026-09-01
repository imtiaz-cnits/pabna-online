"use client";

import { Rocket, Server, Tv } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Broadband Internet",
      description: "Magazine and housed in a gilded in frame.",
      icon: Rocket,
      link: "#pricing",
    },
    {
      title: "FTP Service",
      description: "Magazine and housed in a gilded in frame.",
      icon: Server,
      link: "#ftv",
    },
    {
      title: "IPTV Service",
      description: "Magazine and housed in a gilded in frame.",
      icon: Tv,
      link: "#iptv",
    },
  ];

  return (
    <section id="service" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00c3ff]">
            OUR SERVICES
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2 leading-tight">
            We are Specialized in the<br />Following Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComp = service.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border-t-4 border-[#00c3ff] text-center border-x border-b border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
              >
                <a href={service.link} className="inline-block mb-4">
                  <div className="w-14 h-14 rounded-full bg-cyan-50 dark:bg-slate-800 text-[#00c3ff] flex items-center justify-center mx-auto hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>
                </a>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
