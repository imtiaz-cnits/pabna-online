"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-5">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#00c3ff]">
              ABOUT OUR COMPANY
            </h3>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Get connected with our high<br className="hidden sm:inline" /> speed internet services
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Hundreds of satisfied customers are already getting more buyers<br className="hidden sm:inline" /> and earn much mor If you are looking for a reliable partner for the<br className="hidden sm:inline" /> growth of your business.
            </p>

            <div className="pt-2">
              <a
                href="#pricing"
                className="inline-block px-7 py-2.5 rounded-full border-2 border-[#00c3ff] text-[#00c3ff] hover:bg-[#00c3ff] hover:text-slate-950 font-bold text-xs sm:text-sm transition-all"
              >
                Get Connected
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
              <img
                src="/about_img.jpg"
                alt="About Pabna Online"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
