"use client";

import { ExternalLink, SmartphoneNfc, ShieldCheck } from "lucide-react";

export default function BkashSection() {
  return (
    <section
      className="relative py-20 flex items-center justify-center overflow-hidden bg-center bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url('/Website-img/bkash_bg.jpg')` }}
    >
      {/* 
        Overlays for the fixed background image.
        Using subtle blur and mix-blend for a premium tech look.
      */}
      <div className="absolute inset-0 bg-slate-950/90 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center">

        {/* Compact Glassmorphism Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl transform-gpu transition-all duration-300 hover:border-white/20 hover:bg-white/10">

          {/* Smaller Icon Badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#e2136e] to-[#b30b55] shadow-lg shadow-[#e2136e]/30 mb-5 border border-white/20">
            <SmartphoneNfc className="w-7 h-7 text-white" />
          </div>

          {/* Compact Typography */}
          <div className="space-y-3 mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
              আপনার ইন্টারনেট বিল <span className="text-[#e2136e]">বিকাশের</span> মাধ্যমে
              <br className="hidden sm:block" /> পে করার নির্দেশাবলি
            </h2>
            <p className="text-slate-300/90 text-[13px] sm:text-sm max-w-md mx-auto leading-relaxed">
              খুব সহজেই ঘরে বসে আপনার ইন্টারনেট বিল পরিশোধ করুন। নিরাপদ ও ঝামেলাবিহীন পেমেন্টের নিয়মকানুন জানতে নিচে ক্লিক করুন।
            </p>
          </div>

          {/* Modern Sleek Action Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://pabnaonline.net/bkash-payment-instruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#1a0510]/80 text-[#ff79b4] font-bold text-sm overflow-hidden transition-all duration-300 border border-[#e2136e]/50 hover:bg-[#e2136e] hover:text-white hover:border-[#e2136e] hover:shadow-[0_0_25px_rgba(226,19,110,0.5)]"
            >
              <span className="relative flex items-center gap-2 z-10">
                এখানে ক্লিক করুন
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Footer Trust Badge */}
          <div className="mt-6 flex items-center justify-center gap-1.5 text-slate-400 text-xs font-medium">
            <ShieldCheck className="w-4 h-4 text-[#e2136e]" />
            <span>১০০% নিরাপদ পেমেন্ট গাইডলাইন</span>
          </div>
        </div>
      </div>
    </section>
  );
}