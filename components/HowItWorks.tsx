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
import UiverseButton from "./UiverseButton";

const steps = [
  {
    step: "01",
    title: "Choose Your Package",
    desc: "Browse our flexible fiber broadband packages ranging from 32 Mbps to 160+ Mbps based on your family or enterprise needs.",
    time: "2 Minutes",
    icon: MousePointerClick,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
    highlights: ["Symmetric speed", "Direct BDIX peering", "No speed throttling"],
  },
  {
    step: "02",
    title: "Submit Quick Request",
    desc: "Select your desired plan right here on the website, or call our 24/7 hotline directly with your address.",
    time: "Instant Confirmation",
    icon: FileText,
    color: "from-teal-600 to-emerald-700",
    shadow: "shadow-teal-500/20",
    highlights: ["Instant SMS confirmation", "Dedicated support manager", "Zero paperwork"],
  },
  {
    step: "03",
    title: "Fast Optical Fiber Setup",
    desc: "Our certified network technicians arrive at your location, run high-grade fiber drop cable, and set up your gigabit router.",
    time: "Within 24 Hours",
    icon: Wrench,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
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
        <div className="absolute inset-0 rounded-full border border-emerald-400 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-8 rounded-full border border-teal-400 animate-[ping_9s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-16 rounded-full border border-emerald-300" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Bottom Left) */}
      <svg className="absolute bottom-0 left-0 w-[450px] h-[300px] pointer-events-none opacity-20" viewBox="0 0 450 300" fill="none">
        <path d="M 0 120 Q 220 250, 450 140" stroke="url(#howFiberLine)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="220" cy="250" r="5" fill="#10b981" className="animate-ping" />
        <defs>
          <linearGradient id="howFiberLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#047857" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Subtle Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#059669 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-widest shadow-xs mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-emerald-700 dark:text-emerald-300 font-extrabold">
              SIMPLE ONBOARDING
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Get Connected in 4 Easy Steps,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-300">
              Fast Installation at Your Doorstep
            </span>
          </h2>

          <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            Connecting to Pabna&apos;s premier high-speed optical fiber network is quick, simple, and completed within 24 hours.
          </p>
        </div>

        {/* 4 Connected Step Cards Grid (Pure Smooth Hover Lift identical to Price Cards) */}
        <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_45px_-8px_rgba(5,150,105,0.22)] hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-500 ease-out flex flex-col justify-between"
            >
              {/* Top Row: Step Badge + Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg ${item.shadow} group-hover:scale-105 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7" />
                  </div>

                  <span className="text-3xl font-black text-slate-200 dark:text-slate-800 group-hover:text-emerald-500/30 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 mb-3 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 group-hover:border-emerald-200 dark:group-hover:border-emerald-500/40 transition-colors">
                  <Clock className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  {item.time}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
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
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Fast Action & Helpline Box (Frosted Glass) */}
        <div className="reveal-on-scroll mt-14 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] flex flex-col lg:flex-row items-center justify-between gap-6">

          <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
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
            <UiverseButton
              text="Check Coverage Area"
              href="#contact"
            />

            <UiverseButton
              text="Order Connection Now"
              href="#pricing"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
