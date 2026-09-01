"use client";

import Link from "next/link";
import {
  Wifi,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-[#08152c] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00c3ff] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#08152c] rounded-[10px] flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-[#00c3ff]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight">
                  PABNA<span className="text-[#00c3ff]">ONLINE</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 -mt-1">
                  Internet Service Provider
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer.
            </p>

            <h5 className="text-sm font-bold text-white pt-2">Ask any question?</h5>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <Mail className="w-4 h-4 text-[#00c3ff] shrink-0" />
              <a href="mailto:info@pabnaonline.net" className="hover:text-[#00c3ff] transition-colors">
                info@pabnaonline.net
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#00c3ff] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter Page"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#00c3ff] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn Page"
                className="w-9 h-9 rounded-full bg-slate-900 hover:bg-[#00c3ff] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all border border-slate-700"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-l-4 border-[#00c3ff] pl-3">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-[#00c3ff] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#ftv" className="hover:text-[#00c3ff] transition-colors">
                  FTP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00c3ff] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00c3ff] transition-colors">
                  Our Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-l-4 border-[#00c3ff] pl-3">
              Contact Us
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <p className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/+8801675249230" target="_blank" rel="noopener noreferrer" className="hover:text-[#00c3ff] font-semibold">
                  01718 408 293
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c3ff] shrink-0" />
                <a href="tel:+8809639109639" className="hover:text-[#00c3ff] font-semibold">
                  096 391 09 639
                </a>
                <span className="text-xs text-slate-400">(Customer Support)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c3ff] shrink-0" />
                <a href="tel:+8801862112286" className="hover:text-[#00c3ff] font-semibold">
                  01862 112 286
                </a>
                <span className="text-xs text-slate-400">(Account Management)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00c3ff] shrink-0" />
                <a href="tel:+8801705550857" className="hover:text-[#00c3ff] font-semibold">
                  01705 550 857
                </a>
              </p>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#00c3ff] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300">3rd Floor, Hazi Akbar ali Super Market,</p>
                  <p className="text-slate-300">Abdul Hamid Road, Pabna</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>
            © Copyright <span className="text-white font-semibold">PABNA ONLINE.net</span>. All Rights Reserved. <br />
            Developed by{" "}
            <a
              href="https://www.codenextit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold underline hover:text-[#00c3ff]"
            >
              CodeNext IT
            </a>.
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+8801675249230"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Support"
        className="fixed bottom-6 left-6 z-50 p-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>

      {/* Floating Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#00c3ff] hover:bg-cyan-400 text-slate-950 shadow-2xl hover:scale-110 transition-transform cursor-pointer"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
