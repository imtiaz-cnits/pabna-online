"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ChevronUp,
  Headphones,
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
    <footer id="contact" className="relative bg-white dark:bg-slate-950 pt-20 pb-8 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --- Main Modern Grid Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-100 dark:border-slate-800/60">

          {/* Column 1: Brand & Socials (4 Columns Width) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <Link href="/" className="inline-block transition-transform hover:opacity-90">
              <img
                src="/logo-new-white.png"
                alt="Pabna Online Logo"
                className="h-12 sm:h-14 w-auto object-contain hidden dark:block"
              />
              <img
                src="/Website-img/logo-1.jpg"
                alt="Pabna Online Logo"
                className="h-12 sm:h-14 w-auto object-contain block dark:hidden rounded-lg"
              />
            </Link>

            <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed pr-4">
              Pabna Online is your trusted Internet Service Provider, dedicated to delivering ultra-fast, seamless, and reliable broadband connectivity. We empower homes and businesses across Pabna to stay ahead.
            </p>

            <div className="flex items-center gap-2 pt-2">
              {[
                { label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "Twitter X", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (3 Columns Width) */}
          <div className="lg:col-span-3 space-y-2 lg:pl-8">

            {/* Animated Title Border with Left to Right Gradient */}
            <div className="relative mb-6 inline-block pb-2 pr-8">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest relative z-10">
                Company
              </h3>
              {/* Static light background line fading to transparent */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent"></span>
              {/* Animated glowing line fading to transparent */}
              <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent rounded-full animate-pulse"></span>
            </div>

            <ul className="space-y-4">
              {[
                { name: "About Us", link: "#about" },
                { name: "FTP Servers", link: "#ftv" },
                { name: "Terms & Conditions", link: "#" },
                { name: "Our Partners", link: "#" }
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.link}
                    className="group flex items-center text-[15px] font-medium text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 w-fit"
                  >
                    {/* Modern Dot Icon */}
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-emerald-500 group-hover:scale-[1.5] transition-all duration-300 mr-3"></span>
                    {/* Text with animated gradient underline */}
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-emerald-500 to-transparent transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Support Box (5 Columns Width) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-6 relative inline-block pr-8 pb-2">
                Support & Contact
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-slate-200 dark:from-slate-800 to-transparent"></span>
                <span className="absolute bottom-0 left-0 w-12 h-[2px] bg-gradient-to-r from-emerald-500 to-transparent rounded-full animate-pulse"></span>
              </h3>

              <div className="space-y-5">
                {/* Primary WhatsApp Contact */}
                <a href="https://wa.me/+8801718408293" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white dark:bg-slate-800/90 p-4 rounded-2xl border border-slate-100 dark:border-slate-700/60 shadow-sm hover:border-emerald-200 dark:hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">Direct Support</span>
                    <span className="block text-lg font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">01718 408 293</span>
                  </div>
                </a>

                {/* Secondary Contacts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Headphones className="w-4 h-4" />
                    </div>
                    <div>
                      <a href="tel:+8809639109639" className="block text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">096 391 09 639</a>
                      <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-medium">Hotline</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    {/* Added break-all so it never ellipses */}
                    <div className="w-full">
                      <a href="mailto:info@pabnaonline.net" className="block text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors break-words">info@pabnaonline.net</a>
                      <span className="block text-[11px] text-slate-400 dark:text-slate-500 font-medium">Email Us</span>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/80 mt-4">
                  <MapPin className="w-4 h-4 text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    3rd Floor, Hazi Akbar ali Super Market, Abdul Hamid Road, Pabna
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- Bottom Copyright Bar --- */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400 dark:text-slate-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-slate-800 dark:text-slate-200 font-bold">PABNA ONLINE</span>. All Rights Reserved.
          </p>
          <p className="text-center md:text-right flex items-center gap-1.5">
            Developed by
            <a
              href="https://www.codenextit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:text-emerald-700 hover:underline transition-colors"
            >
              CodeNext IT
            </a>
          </p>
        </div>
      </div>

      {/* --- Floating Action Buttons --- */}
      <a
        href="https://wa.me/+8801718408293"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className={`fixed right-6 z-50 p-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_8px_20px_-6px_rgba(37,211,102,0.6)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110 flex items-center justify-center ${showScrollTop ? "bottom-[88px]" : "bottom-6"}`}
      >
        <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 z-50 p-3.5 rounded-full text-white shadow-[0_8px_24px_-4px_rgba(5,150,105,0.5)] hover:shadow-[0_12px_30px_-4px_rgba(5,150,105,0.7)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden group hover:scale-110 ${showScrollTop
          ? "bottom-6 opacity-100 scale-100 pointer-events-auto translate-y-0"
          : "bottom-0 opacity-0 scale-75 pointer-events-none translate-y-10"
          }`}
        style={{ background: "linear-gradient(135deg, #10b981, #059669, #047857, #10b981)", backgroundSize: "300% 300%", animation: "gradientShift 3s ease infinite" }}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5] relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </footer>
  );
}