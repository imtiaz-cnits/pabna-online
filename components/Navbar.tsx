"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check if scrolled to page bottom for Contact Us
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      const sections = ["about", "service", "ftv", "pricing", "contact"];
      const scrollPosition = window.scrollY + 200;
      let current = "";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sectionId;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const navLinks = [
    { label: "Home", href: "#", id: "" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Services", href: "#service", id: "service" },
    { label: "FTP", href: "#ftv", id: "ftv" },
    { label: "Contact Us", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md shadow-xl py-3"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Website-img/logo-1.jpg */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Website-img/logo-1.jpg"
              alt="Pabna Online Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg shadow-md"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2 bg-slate-950/80 dark:bg-slate-900/80 p-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,195,255,0.15)] backdrop-blur-md transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ease-in-out flex items-center gap-1.5 border ${
                    isActive
                      ? "bg-[#00c3ff]/15 text-[#00c3ff] font-extrabold border-[#00c3ff]/40 shadow-sm shadow-cyan-500/20"
                      : "text-slate-200 hover:text-[#00c3ff] hover:bg-white/5 border-transparent"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00c3ff] animate-pulse" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Dark Toggle on Left of View Pricing */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle Switch */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-amber-400 border border-white/20 transition-all cursor-pointer"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-200" />
              )}
            </button>

            {/* View Pricing Button with Cyan Gradient Matching Active Menu Theme */}
            <a
              href="#pricing"
              className="relative group px-8 py-3 rounded-full bg-gradient-to-r from-[#00c3ff] via-[#0099ff] to-[#0284c7] hover:from-[#00d4ff] hover:via-[#00aaff] hover:to-[#0396e6] text-white font-extrabold text-xs tracking-wider shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer flex items-center justify-center border border-white/30"
            >
              {/* Professional Concentric WiFi Signal Radar Background Waves */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full border border-white/80 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                <div className="w-16 h-16 rounded-full border border-white/50 animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                <div className="w-24 h-24 rounded-full border border-cyan-100/30 animate-[ping_3.6s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
              </div>

              {/* Crisp Bold White Text Only */}
              <span className="relative z-10 text-white tracking-widest font-black">View Pricing</span>

              {/* Smooth Glass Sheen Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
            </a>
          </div>

          {/* Mobile Topbar Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2 rounded-full bg-white/10 text-amber-400 hover:bg-white/20 border border-white/15 cursor-pointer"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-slate-200" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer & Backdrop */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Left Offcanvas Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-slate-950/95 border-r border-white/10 p-6 shadow-2xl flex flex-col justify-between text-white transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Offcanvas Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <img
              src="/Website-img/logo-1.jpg"
              alt="Pabna Online Logo"
              className="h-12 w-auto object-contain rounded-lg"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Close Mobile Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-[#00c3ff]/15 text-[#00c3ff] font-extrabold border-l-4 border-l-[#00c3ff] border-y-[#00c3ff]/20 border-r-[#00c3ff]/20 shadow-md shadow-cyan-500/10"
                      : "text-slate-200 hover:text-[#00c3ff] hover:bg-white/5 border-transparent"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#00c3ff]" />}
                </Link>
              );
            })}

            {/* View Pricing Button inside mobile menu */}
            <div className="pt-3">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="relative group flex items-center justify-center w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#00c3ff] via-[#0099ff] to-[#0284c7] text-white font-extrabold text-sm shadow-lg shadow-cyan-500/30 overflow-hidden border border-white/30"
              >
                {/* WiFi Signal Radar Wave Background Animation */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-40 transition-opacity">
                  <div className="w-8 h-8 rounded-full border border-white/80 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                  <div className="w-16 h-16 rounded-full border border-white/50 animate-[ping_2.8s_cubic-bezier(0,0,0.2,1)_infinite] absolute" />
                </div>

                <span className="relative z-10 text-white font-black tracking-widest">View Pricing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
