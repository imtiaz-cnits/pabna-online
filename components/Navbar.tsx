"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X, Wifi } from "lucide-react";

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
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 shadow-lg shadow-cyan-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Wifi className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white">
                PABNA<span className="text-cyan-400">ONLINE</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-300 -mt-1">
                Internet Service Provider
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Subtle Neon Glow Border */}
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

            {/* Modern Professional View Pricing Button */}
            <a
              href="#pricing"
              className="relative group px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">View Pricing</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
            </a>
          </div>

          {/* Mobile Topbar Controls: Dark Toggle on Left of Hamburger Menu */}
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

      {/* Mobile Offcanvas Drawer & Backdrop (Left to Right Smooth Transition) */}
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
            <span className="text-lg font-black tracking-tight">
              PABNA<span className="text-cyan-400">ONLINE</span>
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 cursor-pointer"
              aria-label="Close Mobile Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Active State */}
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

            {/* View Pricing button placed directly under Contact Us */}
            <div className="pt-2">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-extrabold text-sm shadow-md hover:shadow-cyan-500/30 transition-all"
              >
                View Pricing
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
