"use client";

import { ExternalLink } from "lucide-react";

export default function BkashSection() {
  return (
    <section className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/bkash_bg.jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-slate-950/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-snug drop-shadow-md">
            আপনার ইন্টারনেট বিল বিকাশের মাধ্যমে পে করার
          </h1>
          <h1 className="text-2xl sm:text-4xl font-bold text-white leading-snug drop-shadow-md">
            নির্দেশাবলি দেখতে
          </h1>

          <div className="pt-6">
            <a
              href="https://pabnaonline.net/bkash-payment-instruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-black/70 hover:bg-black/90 text-white font-bold text-base border border-white/40 shadow-xl transition-all hover:scale-105"
            >
              <span>এখানে ক্লিক করুন</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
