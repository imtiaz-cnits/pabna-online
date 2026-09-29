"use client";

import { useState } from "react";
import { X, Send, Check, Sparkles, Wifi, Rocket, Zap, Globe, Infinity, Cpu } from "lucide-react";

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
    bgClass: "bg-rose-500",
    textClass: "text-rose-500",
    glowClass: "rgba(244, 63, 94, 0.12)",
    neonColor: "#f43f5e",
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
    bgClass: "bg-sky-500",
    textClass: "text-sky-500",
    glowClass: "rgba(14, 165, 233, 0.12)",
    neonColor: "#0ea5e9",
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
    bgClass: "bg-indigo-500",
    textClass: "text-indigo-500",
    glowClass: "rgba(99, 102, 241, 0.12)",
    neonColor: "#6366f1",
    isPopular: true, // This popular card will now have the crossing diagonal badge on the left-top
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
    bgClass: "bg-violet-500",
    textClass: "text-violet-500",
    glowClass: "rgba(139, 92, 246, 0.12)",
    neonColor: "#8b5cf6",
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
    bgClass: "bg-cyan-500",
    textClass: "text-cyan-500",
    glowClass: "rgba(6, 182, 212, 0.12)",
    neonColor: "#06b6d4",
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
    bgClass: "bg-emerald-500",
    textClass: "text-emerald-500",
    glowClass: "rgba(16, 185, 129, 0.12)",
    neonColor: "#10b981",
    isPopular: false,
  },
];

export default function PricingSection() {
  const [selectedPkg, setSelectedPkg] = useState<typeof packages[0] | null>(null);
  const [submitted, setSubmitted] = useState(false);

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
    setTimeout(() => {
      setSubmitted(false);
      setSelectedPkg(null);
    }, 3000);
  };

  return (
    <section id="pricing" className="relative py-16 lg-py-24 bg-slate-50 overflow-hidden">

      {/* Custom CSS for smooth floating icon animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes custom-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float {
          animation: custom-float 3s ease-in-out infinite;
        }
      `}} />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-200/40 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            Internet Packages
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pick Your Perfect Plan
          </h2>
          <p className="text-lg font-medium text-slate-500">
            Enjoy bufferless streaming, ultra-low ping, and seamless browsing with our high-speed internet packages.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center pt-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPkg(pkg)}
              onMouseMove={handleMouseMove}
              className={`group relative rounded-[2rem] p-[2px] overflow-hidden transition-all duration-500 cursor-pointer flex flex-col h-full ${pkg.isPopular
                ? "scale-105 z-20 shadow-[0_10px_40px_rgba(99,102,241,0.3)]"
                : "z-10 bg-slate-200 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                }`}
            >
              {/* Rotating Neon Border Animation */}
              <div
                className={`absolute inset-[-150%] transition-opacity duration-500 animate-[spin_4s_linear_infinite] ${pkg.isPopular ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                style={{
                  backgroundImage: `conic-gradient(from 90deg at 50% 50%, transparent 0%, ${pkg.neonColor} 50%, transparent 100%)`
                }}
              />

              {/* Inner Card Container */}
              <div className="relative h-full w-full rounded-[30px] bg-white flex flex-col overflow-hidden">

                {/* Internal Smooth Mouse Tracking Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                  style={{
                    background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${pkg.glowClass}, transparent 40%)`
                  }}
                />

                {/* Diagonal Crossing Corner Ribbon Banner (Popular) */}
                {pkg.isPopular && (
                  <div className="absolute top-0 left-0 w-36 h-36 z-30 pointer-events-none overflow-hidden rounded-tl-[30px]">
                    <div
                      className="absolute top-[22px] left-[-38px] w-[155px] py-[7px] bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black text-[10px] uppercase tracking-widest text-center shadow-lg"
                      style={{ transform: "rotate(-45deg)", transformOrigin: "center" }}
                    >
                      <span className="flex items-center justify-center gap-1">
                        <Sparkles className="w-2.5 h-2.5 inline" />
                        Popular
                      </span>
                    </div>
                  </div>
                )}

                {/* Top Wave Header */}
                <div className={`relative pt-8 pb-16 ${pkg.bgClass} z-10 overflow-hidden`}>

                  {/* Floating Icon with unique colors */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-float border border-white/30 shadow-lg">
                    <pkg.icon className="w-6 h-6 text-white drop-shadow-md" />
                  </div>

                  <div className="text-center px-6 mt-2">
                    <h3 className="text-2xl font-extrabold text-white tracking-wide mb-1 drop-shadow-sm relative z-10">
                      {pkg.name}
                    </h3>
                    <p className="text-white/90 font-medium text-sm tracking-wider">
                      Tk. {pkg.price}
                    </p>
                  </div>

                  {/* SVG Wave Shape */}
                  <div className="absolute left-0 bottom-0 w-full leading-none">
                    <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
                      <path fill="#ffffff" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,133.3C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                    </svg>
                  </div>
                </div>

                {/* Card Body */}
                <div className="relative z-10 px-6 pb-8 pt-2 flex flex-col grow text-center">

                  {/* Big Speed Display */}
                  <div className={`mb-6 ${pkg.textClass}`}>
                    <span className="text-5xl font-black tracking-tighter drop-shadow-sm">{pkg.speed}</span>
                    <span className="text-sm font-bold opacity-80">/Mbps</span>
                  </div>

                  {/* List Items */}
                  <div className="space-y-3.5 text-[13px] sm:text-[14px] leading-tight grow relative z-10">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5">
                        <span className={`font-semibold ${pkg.textClass} opacity-90`}>{feature.name}</span>
                        <span className="text-slate-500 font-medium">{feature.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Request Text Trigger (No button used) */}
                  <div className="mt-8 pt-5 border-t border-slate-100 relative z-10">
                    <span className={`inline-flex items-center gap-1 text-sm font-bold ${pkg.textClass} group-hover:gap-2 transition-all duration-300`}>
                      New Connection Request <Send className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Order Connection Modal */}
      {selectedPkg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] p-6 sm:p-8 max-w-md w-full shadow-2xl relative transform transition-all duration-300 scale-100">

            <button
              onClick={() => setSelectedPkg(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-20 h-20 rounded-full bg-emerald-50 border-[6px] border-emerald-100 text-emerald-500 flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Request Received!</h3>
                  <p className="text-sm text-slate-500 leading-relaxed px-4">
                    Thank you! Our Pabna Online representative will call you shortly on your provided phone number to set up your connection.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 pt-2 relative z-10">
                <div className="border-b border-slate-100 pb-5">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 ${selectedPkg.bgClass} text-white`}>
                    New Connection
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    Apply for {selectedPkg.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">
                    Tk. {selectedPkg.price}/month • {selectedPkg.speed} Mbps
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Khandaker Shanto"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Mobile Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 017XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold text-slate-700 mb-1.5">Address in Pabna</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Area, Road, House No. in Pabna"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl text-white font-bold text-sm shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2 group ${selectedPkg.bgClass} hover:opacity-90 relative z-10`}
                >
                  <span>Submit Connection Request</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}