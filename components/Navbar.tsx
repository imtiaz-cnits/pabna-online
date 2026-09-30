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
    // Add synchronized transition class to html root
    document.documentElement.classList.add("theme-transition");

    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }

    // Remove transition helper after animation finishes
    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 550);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "bg-slate-950/45 dark:bg-slate-950/50 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] py-3"
            : "bg-slate-950/20 backdrop-blur-xl border-b border-white/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.15)] py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo with Website-img/logo-1.jpg */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/Website-img/logo-1.jpg"
              alt="Pabna Online Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain rounded-lg"
            />
          </Link>

          {/* Desktop Navigation Links: iPhone-style Frosted Glass Capsule Dock */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-2 bg-white/[0.08] dark:bg-white/[0.05] p-1.5 rounded-full border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_25px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ease-in-out flex items-center gap-1.5 border ${isActive
                      ? "bg-emerald-500/25 text-emerald-300 font-extrabold border-emerald-400/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_2px_10px_rgba(16,185,129,0.3)]"
                      : "text-slate-200 hover:text-white hover:bg-white/[0.1] border-transparent"
                    }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Controls: Dark Toggle on Left of View Pricing */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle Switch (iPhone Frosted Glass Button) */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.18] text-emerald-400 border border-white/20 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.15)] transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-emerald-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-200" />
              )}
            </button>

            {/* Uiverse Animated Button */}
            <div className="btn-wrapper">
              <a href="#pricing" className="btn-uiverse group" aria-label="View Pricing">
                <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                <span className="txt-wrapper">
                  <span className="btn-letter">V</span>
                  <span className="btn-letter">i</span>
                  <span className="btn-letter">e</span>
                  <span className="btn-letter">w</span>
                  <span className="inline-block w-1.5" />
                  <span className="btn-letter">P</span>
                  <span className="btn-letter">r</span>
                  <span className="btn-letter">i</span>
                  <span className="btn-letter">c</span>
                  <span className="btn-letter">i</span>
                  <span className="btn-letter">n</span>
                  <span className="btn-letter">g</span>
                </span>
              </a>
            </div>
          </div>

          {/* Mobile Topbar Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-full bg-white/[0.08] text-emerald-400 hover:bg-white/[0.18] border border-white/20 backdrop-blur-xl cursor-pointer"
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-emerald-400" /> : <Moon className="w-4.5 h-4.5 text-slate-200" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-white/[0.08] text-white hover:bg-white/[0.18] border border-white/15 backdrop-blur-xl cursor-pointer"
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
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Left Offcanvas Sidebar: Frosted Glass */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-slate-950/80 backdrop-blur-2xl border-r border-white/15 p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col justify-between text-white transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 border ${isActive
                      ? "bg-emerald-600/20 text-emerald-400 font-extrabold border-l-4 border-l-emerald-500 border-y-emerald-500/20 border-r-emerald-500/20 shadow-md shadow-emerald-500/10"
                      : "text-slate-200 hover:text-emerald-400 hover:bg-white/5 border-transparent"
                    }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                </Link>
              );
            })}

            {/* Uiverse Animated Button inside mobile menu */}
            <div className="pt-3 flex justify-center">
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-uiverse w-full py-3.5 flex items-center justify-center gap-2"
                aria-label="View Pricing"
              >
                <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                <span className="txt-wrapper">
                  <span className="btn-letter">V</span>
                  <span className="btn-letter">i</span>
                  <span className="btn-letter">e</span>
                  <span className="btn-letter">w</span>
                  <span className="inline-block w-1.5" />
                  <span className="btn-letter">P</span>
                  <span className="btn-letter">r</span>
                  <span className="btn-letter">i</span>
                  <span className="btn-letter">c</span>
                  <span className="btn-letter">i</span>
                  <span className="btn-letter">n</span>
                  <span className="btn-letter">g</span>
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
