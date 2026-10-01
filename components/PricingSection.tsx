"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Check, Sparkles, Wifi, Rocket, Zap, Globe, Infinity, Cpu, CheckCircle2 } from "lucide-react";
import SpiderNetCanvas from "./SpiderNetCanvas";
import UiverseButton from "./UiverseButton";

const packages = [
  {
    id: 1,
    name: "Bit",
    price: "525",
    speed: "32",
    features: [
      { name: "Youtube Speed", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "Facebook Speed", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "NON-Stop BDIX Speed", desc: "Unlimited. (Up to 100 Mbps)" },
      { name: "Local FTP/Web Server", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "Streaming", desc: "Bufferless. (Up to 100 Mbps)" },
    ],
    icon: Wifi,
    isPopular: false,
  },
  {
    id: 2,
    name: "Byte",
    price: "630",
    speed: "50",
    features: [
      { name: "Youtube Speed", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "Facebook Speed", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "NON-Stop BDIX Speed", desc: "Unlimited. (Up to 100 Mbps)" },
      { name: "Local FTP/Web Server", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "Streaming", desc: "Bufferless. (Up to 100 Mbps)" },
    ],
    icon: Rocket,
    isPopular: false,
  },
  {
    id: 3,
    name: "Binary",
    price: "850",
    speed: "80",
    features: [
      { name: "Youtube Speed", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "Facebook Speed", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "NON-Stop BDIX Speed", desc: "Unlimited. (Up to 100 Mbps)" },
      { name: "Local FTP/Web Server", desc: "Bufferless. (Up to 100 Mbps)" },
      { name: "Streaming", desc: "Bufferless. (Up to 100 Mbps)" },
    ],
    icon: Zap,
    isPopular: true, // Signature popular package
  },
  {
    id: 4,
    name: "Pi",
    price: "1050",
    speed: "100",
    features: [
      { name: "Youtube Speed", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "Facebook Speed", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "NON-Stop BDIX Speed", desc: "Unlimited. (Above 100 Mbps)" },
      { name: "Local FTP/Web Server", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "Streaming", desc: "Bufferless. (Above 100 Mbps)" },
    ],
    icon: Globe,
    isPopular: false,
  },
  {
    id: 5,
    name: "Lambda",
    price: "1250",
    speed: "130",
    features: [
      { name: "Youtube Speed", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "Facebook Speed", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "NON-Stop BDIX Speed", desc: "Unlimited. (Above 100 Mbps)" },
      { name: "Local FTP/Web Server", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "Streaming", desc: "Bufferless. (Above 100 Mbps)" },
    ],
    icon: Infinity,
    isPopular: false,
  },
  {
    id: 6,
    name: "Core",
    price: "1550",
    speed: "160",
    features: [
      { name: "Youtube Speed", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "Facebook Speed", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "NON-Stop BDIX Speed", desc: "Unlimited. (Above 100 Mbps)" },
      { name: "Local FTP/Web Server", desc: "Bufferless. (Above 100 Mbps)" },
      { name: "Streaming", desc: "Bufferless. (Above 100 Mbps)" },
    ],
    icon: Cpu,
    isPopular: false,
  },
];

export default function PricingSection() {
  const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPkg(null);
      }
    };

    if (selectedPkg) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [selectedPkg]);

  // Mouse tracking for internal glowing spotlight effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setSubmitted(false);
      setSelectedPkg(null);
    }, 3000);
  };

  return (
    <section id="pricing" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">

      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-100/50 dark:bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/50 dark:bg-teal-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Internet Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-5">
            Pick Your Perfect Plan
          </h2>
          <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
            Enjoy bufferless streaming, ultra-low ping, and seamless browsing with our high-speed internet packages.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              onMouseMove={handleMouseMove}
              className={`group relative rounded-[2rem] bg-white dark:bg-slate-900 transition-all duration-500 ease-out cursor-pointer flex flex-col h-full ${pkg.isPopular
                  ? "scale-105 hover:scale-[1.06] hover:-translate-y-1.5 z-20 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] dark:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.2)] border-2 border-emerald-500 dark:border-emerald-500"
                  : "z-10 border border-slate-200 dark:border-slate-800 shadow-sm hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] hover:border-emerald-300 dark:hover:border-emerald-500/50"
                }`}
            >
              {/* Spider Net Constellation Interactive Canvas Background */}
              <SpiderNetCanvas particleCount={16} maxDistance={75} opacity={0.32} />

              {/* Internal Smooth Mouse Tracking Glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 rounded-[2rem]"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(16, 185, 129, 0.08), transparent 40%)`
                }}
              />

              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-black text-[10px] uppercase tracking-widest py-2 px-6 rounded-full shadow-lg z-30 flex items-center gap-1.5 border-2 border-white dark:border-slate-900">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="p-8 relative z-10 flex flex-col h-full">

                {/* Header: Icon, Name, Price */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {pkg.name}
                    </h3>
                    {/* Updated: Larger Tk. and proper baseline alignment */}
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="text-2xl font-black text-slate-700 dark:text-slate-300">Tk.</span>
                      <span className="text-4xl font-black text-slate-900 dark:text-white">{pkg.price}</span>
                      <span className="text-lg font-bold text-slate-500 dark:text-slate-400">/ month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 ${pkg.isPopular ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}>
                    <pkg.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Speed Highlight Box - Updated with Larger Mbps */}
                <div className={`py-6 rounded-2xl text-center flex items-baseline justify-center gap-2 mb-8 transition-colors duration-300 ${pkg.isPopular ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50' : 'bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/20 group-hover:border-emerald-100 dark:group-hover:border-emerald-800/50'}`}>
                  <span className={`text-5xl font-black tracking-tighter transition-colors duration-300 ${pkg.isPopular ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400'}`}>
                    {pkg.speed}
                  </span>
                  <span className={`text-3xl font-black tracking-tight transition-colors duration-300 ${pkg.isPopular ? 'text-emerald-600/80 dark:text-emerald-400/80' : 'text-slate-700 dark:text-slate-300 group-hover:text-emerald-600/80 dark:group-hover:text-emerald-400/80'}`}>
                    Mbps
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8 grow">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.isPopular ? 'text-emerald-500' : 'text-slate-400 dark:text-slate-500 group-hover:text-emerald-500'} transition-colors`} />
                      <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1">{feature.name}</span>
                        <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400 leading-tight">{feature.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button: Root Theme Uiverse Button */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto relative z-20">
                  <UiverseButton
                    text="New Connection"
                    fullWidth
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPkg(pkg);
                    }}
                  />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Order Connection Modal */}
      {selectedPkg && (
        <div
          onClick={() => setSelectedPkg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-300 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-6 sm:p-8 max-w-md w-full shadow-2xl relative transform transition-all duration-300 scale-100 cursor-default"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPkg(null);
              }}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer z-30 shadow-sm hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border-[6px] border-emerald-100 dark:border-emerald-800/50 text-emerald-500 flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Request Received!</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed px-4">
                    Thank you! Our Pabna Online representative will call you shortly on your provided phone number to set up your connection.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 pt-2 relative z-10">
                <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 bg-emerald-500 text-white">
                    New Connection
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    Apply for {selectedPkg.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                    Tk. {selectedPkg.price}/month • {selectedPkg.speed} Mbps
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Khandaker Shanto"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 017XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">Address in Pabna</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Area, Road, House No. in Pabna"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2 relative z-20">
                  <UiverseButton
                    text="Submit Connection Request"
                    type="submit"
                    fullWidth
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}