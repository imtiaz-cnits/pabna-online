"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sun, Moon, Menu, X } from "lucide-react";
import UiverseButton from "./UiverseButton";

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
          ? "bg-white/95 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] py-1"
          : "bg-transparent border-b border-transparent shadow-none py-1"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: White Logo when on dark hero or in dark mode; original logo when scrolled in light mode */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo-new-white.png"
              alt="Pabna Online Logo"
              className={`h-11 sm:h-16 md:h-18 w-auto object-contain transition-all ${isScrolled ? "hidden dark:block" : "block"
                }`}
            />
            <img
              src="/Website-img/logo-1.jpg"
              alt="Pabna Online Logo"
              className={`h-11 sm:h-16 md:h-18 w-auto object-contain rounded-lg ${isScrolled ? "block dark:hidden" : "hidden"
                }`}
            />
          </Link>

          {/* Desktop Navigation Links: Frosted Glass Capsule Dock with Animated Neon Glow */}
          <nav className={`hidden md:flex items-center gap-1 xl:gap-2 p-1.5 rounded-full border nav-neon-dock backdrop-blur-2xl transition-all duration-300 ${isScrolled
            ? "bg-slate-900/[0.03] dark:bg-white/[0.05] border-slate-200/60 dark:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_25px_rgba(0,0,0,0.3)]"
            : "bg-white/[0.08] dark:bg-white/[0.05] border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_8px_25px_rgba(0,0,0,0.3)]"
            }`}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ease-in-out flex items-center gap-1.5 border ${isActive
                    ? "bg-emerald-500/25 text-emerald-600 dark:text-emerald-300 font-extrabold border-emerald-400/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35),0_2px_10px_rgba(16,185,129,0.3)]"
                    : isScrolled
                      ? "text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/[0.1] border-transparent"
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
            {/* Dark Mode Toggle Switch */}
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`p-2.5 rounded-full border backdrop-blur-xl transition-all cursor-pointer hover:scale-105 active:scale-95 ${isScrolled
                ? "bg-slate-100 dark:bg-white/[0.08] hover:bg-slate-200 dark:hover:bg-white/[0.18] text-emerald-600 dark:text-emerald-400 border-slate-200 dark:border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.15)]"
                : "bg-white/[0.08] hover:bg-white/[0.18] text-emerald-400 border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_4px_12px_rgba(0,0,0,0.15)]"
                }`}
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-emerald-400" />
              ) : (
                <Moon className={`w-4 h-4 ${isScrolled ? "text-slate-700 dark:text-slate-200" : "text-slate-200"}`} />
              )}
            </button>

            {/* Trendy Modern Cyber Emerald Button with Magnetic Spring Bounce */}
            <UiverseButton
              href="#pricing"
              text="View Pricing"
              className="!py-2 !px-4.5 sm:!px-5 text-xs sm:text-sm"
            />
          </div>

          {/* Mobile Topbar Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`p-2.5 rounded-full border backdrop-blur-xl cursor-pointer transition-all ${isScrolled
                ? "bg-slate-100 dark:bg-white/[0.08] text-emerald-600 dark:text-emerald-400 hover:bg-slate-200 dark:hover:bg-white/[0.18] border-slate-200 dark:border-white/20 shadow-sm"
                : "bg-white/[0.08] text-emerald-400 hover:bg-white/[0.18] border-white/20"
                }`}
            >
              {darkMode ? <Sun className="w-4.5 h-4.5 text-emerald-400" /> : <Moon className={`w-4.5 h-4.5 ${isScrolled ? "text-slate-700 dark:text-slate-200" : "text-slate-200"}`} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2.5 rounded-xl border backdrop-blur-xl cursor-pointer transition-all ${isScrolled
                ? "bg-slate-100 dark:bg-white/[0.08] text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-white/[0.18] border-slate-200 dark:border-white/15 shadow-sm"
                : "bg-white/[0.08] text-white hover:bg-white/[0.18] border-white/15"
                }`}
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Drawer & Backdrop (Mobile Only: md:hidden) */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`md:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible"
          }`}
      />

      {/* Left Offcanvas Sidebar (Mobile Only: md:hidden, shadow-none when closed) */}
      <div
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-72 bg-slate-950/95 backdrop-blur-2xl border-r border-white/10 p-6 flex flex-col justify-between text-white transition-all duration-300 ease-in-out rounded-none overflow-y-auto ${mobileMenuOpen
          ? "translate-x-0 opacity-100 shadow-[15px_0_35px_rgba(0,0,0,0.6)] visible pointer-events-auto"
          : "-translate-x-full opacity-0 shadow-none invisible pointer-events-none"
          }`}
      >
        <div>
          {/* Offcanvas Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <img
                src="/logo-new-white.png"
                alt="Pabna Online Logo"
                className="h-10 sm:h-12 w-auto object-contain hidden dark:block"
              />
              <img
                src="/Website-img/logo-1.jpg"
                alt="Pabna Online Logo"
                className="h-10 sm:h-12 w-auto object-contain block dark:hidden rounded-lg"
              />
            </Link>
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

            {/* Trendy Modern Button inside mobile menu */}
            <div className="pt-3">
              <UiverseButton
                href="#pricing"
                text="View Pricing"
                fullWidth
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
