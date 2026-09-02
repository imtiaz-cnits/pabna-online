"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-slate-100 dark:bg-[#08152c] text-slate-700 dark:text-slate-300 pt-16 pb-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Grid: Left content occupies 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-200 dark:border-slate-800">

          {/* Column 1 & 2: Logo & About (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/Website-img/logo-1.jpg"
                alt="Pabna Online Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain rounded-lg"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300/90 leading-relaxed max-w-md">
              Pabna Online is your trusted Internet Service Provider, dedicated to delivering ultra-fast, seamless, and reliable broadband connectivity. We empower homes and businesses across Pabna to stay ahead in the digital world.
            </p>

            <h5 className="text-sm font-bold text-slate-900 dark:text-white pt-2">Ask any question?</h5>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <Mail className="w-4 h-4 text-[#00c3ff] shrink-0" />
              <a href="mailto:info@pabnaonline.net" className="hover:text-[#0099ff] dark:hover:text-[#00c3ff] transition-colors">
                info@pabnaonline.net
              </a>
            </div>

            {/* Social Icons (Facebook, Twitter X, LinkedIn) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-white dark:bg-slate-900/80 hover:bg-[#00c3ff] hover:text-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-300 dark:border-slate-700 hover:border-[#00c3ff] shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter X Logo */}
              <a
                href="#"
                aria-label="Twitter X Page"
                className="w-9 h-9 rounded-full bg-white dark:bg-slate-900/80 hover:bg-[#00c3ff] hover:text-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-300 dark:border-slate-700 hover:border-[#00c3ff] shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn Page"
                className="w-9 h-9 rounded-full bg-white dark:bg-slate-900/80 hover:bg-[#00c3ff] hover:text-slate-950 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-300 dark:border-slate-700 hover:border-[#00c3ff] shadow-xs"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 3: Useful Links (Spans 1 column on lg) */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-[#00c3ff] pl-3">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="#about"
                  className="group flex items-center text-slate-700 dark:text-slate-300 hover:text-[#0099ff] dark:hover:text-[#00c3ff] transition-all duration-300 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#00c3ff] opacity-0 -ml-2.5 group-hover:ml-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    About Us
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#ftv"
                  className="group flex items-center text-slate-700 dark:text-slate-300 hover:text-[#0099ff] dark:hover:text-[#00c3ff] transition-all duration-300 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#00c3ff] opacity-0 -ml-2.5 group-hover:ml-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    FTP
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-slate-700 dark:text-slate-300 hover:text-[#0099ff] dark:hover:text-[#00c3ff] transition-all duration-300 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#00c3ff] opacity-0 -ml-2.5 group-hover:ml-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    Terms & Conditions
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center text-slate-700 dark:text-slate-300 hover:text-[#0099ff] dark:hover:text-[#00c3ff] transition-all duration-300 font-medium"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#00c3ff] opacity-0 -ml-2.5 group-hover:ml-0 group-hover:opacity-100 transition-all duration-200 shrink-0" />
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                    Our Partners
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (Spans 1 column on lg) */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-[#00c3ff] pl-3">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </span>
                <a href="https://wa.me/+8801675249230" target="_blank" rel="noopener noreferrer" className="hover:text-[#0099ff] dark:hover:text-[#00c3ff] font-semibold transition-colors">
                  01718 408 293
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c3ff] shrink-0" />
                <a href="tel:+8809639109639" className="hover:text-[#0099ff] dark:hover:text-[#00c3ff] font-semibold transition-colors">
                  096 391 09 639
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400">(Customer Support)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c3ff] shrink-0" />
                <a href="tel:+8801862112286" className="hover:text-[#0099ff] dark:hover:text-[#00c3ff] font-semibold transition-colors">
                  01862 112 286
                </a>
                <span className="text-xs text-slate-500 dark:text-slate-400">(Account Management)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c3ff] shrink-0" />
                <a href="tel:+8801705550857" className="hover:text-[#0099ff] dark:hover:text-[#00c3ff] font-semibold transition-colors">
                  01705 550 857
                </a>
              </p>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#00c3ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-700 dark:text-slate-300">3rd Floor, Hazi Akbar ali Super Market,</p>
                  <p className="text-slate-700 dark:text-slate-300">Abdul Hamid Road, Pabna</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright: Left text & Right text on desktop */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-slate-900 dark:text-white font-semibold">PABNA ONLINE.net</span>. All Rights Reserved.
          </p>
          <p className="text-center md:text-right">
            Developed by{" "}
            <a
              href="https://www.codenextit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0099ff] dark:text-[#00c3ff] font-semibold underline hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              CodeNext IT
            </a>
            .
          </p>
        </div>
      </div>

      {/* Floating Dynamic WhatsApp Button with Increased Gap from Back To Top */}
      <a
        href="https://wa.me/+8801675249230"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className={`fixed right-6 z-50 p-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl shadow-emerald-500/30 border border-white/20 transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 flex items-center justify-center ${showScrollTop ? "bottom-[98px]" : "bottom-6"
          }`}
      >
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* Floating Animated Back To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 z-50 p-3.5 rounded-full bg-gradient-to-r from-[#00c3ff] via-[#0099ff] to-[#0284c7] hover:from-[#00d4ff] hover:via-[#00aaff] hover:to-[#0396e6] text-white shadow-xl shadow-cyan-500/30 border border-white/40 transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group hover:scale-110 ${showScrollTop
          ? "bottom-6 opacity-100 scale-100 pointer-events-auto"
          : "bottom-6 opacity-0 scale-75 pointer-events-none translate-y-6"
          }`}
      >
        {/* WiFi Signal Radar Wave Background Animation */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-50 group-hover:opacity-90 transition-opacity">
          <div className="w-6 h-6 rounded-full border border-white/80 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
          <div className="w-12 h-12 rounded-full border border-white/50 animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
        </div>

        <ChevronUp className="w-6 h-6 stroke-[3] relative z-10 text-white" />
      </button>
    </footer>
  );
}
