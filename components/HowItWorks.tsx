"use client";

import { 
  MousePointerClick, 
  FileText, 
  Wrench, 
  CheckCircle, 
  Sparkles, 
  PhoneCall, 
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2,
  MapPin
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Choose Your Package",
    desc: "Browse our flexible fiber broadband packages ranging from 32 Mbps to 160+ Mbps based on your family or enterprise needs.",
    time: "2 Minutes",
    icon: MousePointerClick,
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/20",
    highlights: ["Symmetric speed", "Direct BDIX peering", "No speed throttling"],
  },
  {
    step: "02",
    title: "Submit Quick Request",
    desc: "Select your desired plan right here on the website, or call our 24/7 hotline directly with your address.",
    time: "Instant Confirmation",
    icon: FileText,
    color: "from-blue-600 to-indigo-600",
    shadow: "shadow-blue-500/20",
    highlights: ["Instant SMS confirmation", "Dedicated support manager", "Zero paperwork"],
  },
  {
    step: "03",
    title: "Fast Optical Fiber Setup",
    desc: "Our certified network technicians arrive at your location, run high-grade fiber drop cable, and set up your gigabit router.",
    time: "Within 24 Hours",
    icon: Wrench,
    color: "from-indigo-600 to-purple-600",
    shadow: "shadow-indigo-500/20",
    highlights: ["Certified technicians", "Optimal Wi-Fi signal tuning", "Speed test verification"],
  },
  {
    step: "04",
    title: "Enjoy Bufferless Internet",
    desc: "Start streaming 4K media, gaming with ultra-low ping, and browsing simultaneously on all your household devices.",
    time: "Lifetime Speed",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    highlights: ["Bufferless streaming", "24/7 proactive NOC care", "Online bKash bill pay"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">

      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* 1. Concentric WiFi Radar Wave Rings (Top Right) */}
      <div className="absolute -top-24 -right-24 w-96 h-96 pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-cyan-400 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-8 rounded-full border border-blue-400 animate-[ping_9s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-16 rounded-full border border-indigo-300" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Bottom Left) */}
      <svg className="absolute bottom-0 left-0 w-[450px] h-[300px] pointer-events-none opacity-20" viewBox="0 0 450 300" fill="none">
        <path d="M 0 120 Q 220 250, 450 140" stroke="url(#howFiberLine)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="220" cy="250" r="5" fill="#00c3ff" className="animate-ping" />
        <defs>
          <linearGradient id="howFiberLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c3ff" />
            <stop offset="50%" stopColor="#0088ff" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Subtle Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0284c7 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-500/30 dark:border-cyan-500/40 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-cyan-500 to-blue-600" />
            </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SIMPLE ONBOARDING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Get Connected in 4 Easy Steps,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4d8] via-[#0077b6] to-[#7209b7]">
              Fast Installation at Your Doorstep
            </span>
          </h2>

          <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            Connecting to Pabna&apos;s premier high-speed optical fiber network is quick, simple, and completed within 24 hours.
          </p>
        </div>

        {/* 4 Connected Step Cards Grid (Staggered Animation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative" data-reveal-group>

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="reveal-stagger-item group relative bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-800 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_-8px_rgba(0,195,255,0.22)] hover:-translate-y-2 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Step Badge + Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg ${item.shadow} group-hover:scale-105 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7" />
                  </div>

                  <span className="text-3xl font-black text-slate-200 dark:text-slate-800 group-hover:text-cyan-500/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-950/40 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 group-hover:border-cyan-200 dark:group-hover:border-cyan-500/40 transition-colors">
                  <Clock className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                  {item.time}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                {item.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Fast Action & Helpline Box */}
        <div className="reveal-on-scroll mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <PhoneCall className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                Need instant connection or have questions?
              </h4>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5">
                Our local support team in Pabna is ready 24 hours a day to assist you.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#coverage"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 hover:border-cyan-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:shadow-md transition-all cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-cyan-500" />
              Check Coverage Area
            </a>

            <a
              href="#pricing"
              className="relative group px-7 py-3 rounded-full bg-gradient-to-r from-[#00c3ff] via-[#0099ff] to-[#0284c7] hover:from-[#00d4ff] hover:via-[#00aaff] hover:to-[#0396e6] text-white font-extrabold text-xs sm:text-sm tracking-wider shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer flex items-center justify-center border border-white/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Order Connection Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
