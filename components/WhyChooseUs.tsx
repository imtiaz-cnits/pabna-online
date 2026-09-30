"use client";

import {
  Zap,
  ShieldCheck,
  Activity,
  Wifi,
  Headphones,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Server,
  Radio,
  Clock
} from "lucide-react";
import UiverseButton from "./UiverseButton";

const stats = [
  {
    value: "99.9%",
    label: "Uptime SLA",
    desc: "Dual-redundant ring fiber backbone ensures non-stop uptime",
    icon: Activity,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    value: "< 5ms",
    label: "Ultra-Low Ping",
    desc: "Direct BDIX peering & optimized gaming routing nationwide",
    icon: Zap,
    color: "from-teal-600 to-emerald-700",
    shadow: "shadow-teal-500/20",
  },
  {
    value: "10 Gbps",
    label: "Core Backbone",
    desc: "Enterprise-grade high-capacity transmission capacity",
    icon: Server,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
  {
    value: "24/7/365",
    label: "Local Tech Support",
    desc: "Dedicated field engineers & round-the-clock telephone helpline",
    icon: Clock,
    color: "from-emerald-600 to-teal-700",
    shadow: "shadow-emerald-500/20",
  },
];

const features = [
  {
    title: "100% Pure Optical Fiber (FTTH)",
    desc: "Direct optical fiber from our high-capacity hub straight to your premises. Immune to rain, lightning, and electrical interference.",
    icon: Wifi,
    tag: "High Reliability",
    color: "from-emerald-500 to-teal-600",
    badge: "FTTH Tech",
  },
  {
    title: "Bufferless 4K & 8K Streaming",
    desc: "Ultra-fast direct peering with local CDNs including YouTube, Netflix, Facebook, Prime Video, and BDIX media servers.",
    icon: Gauge,
    tag: "Fast Peering",
    color: "from-teal-600 to-emerald-700",
    badge: "Direct CDN",
  },
  {
    title: "Optimized Gaming & Low Latency",
    desc: "Dedicated routing paths for Valorant, PUBG, CS2, Dota 2, and FIFA. Enjoy stable packet delivery with zero jitter.",
    icon: Zap,
    tag: "Pro Gaming",
    color: "from-emerald-500 to-teal-600",
    badge: "Low Jitter",
  },
  {
    title: "True Symmetrical Speeds",
    desc: "Equal download and upload speeds with zero hidden Fair Usage Policy (FUP) or speed capping. Upload your large files in seconds.",
    icon: Radio,
    tag: "No Throttling",
    color: "from-teal-600 to-emerald-700",
    badge: "Unlimited",
  },
  {
    title: "Modern Optical Gear Assistance",
    desc: "Expert setup of dual-band gigabit routers & optical network units (ONU) optimized for whole-home Wi-Fi coverage.",
    icon: ShieldCheck,
    tag: "Hardware Ready",
    color: "from-emerald-500 to-teal-600",
    badge: "Gigabit Ready",
  },
  {
    title: "Proactive NOC Line Monitoring",
    desc: "Our automated Network Operations Center monitors line quality 24/7 to resolve network anomalies before you even notice.",
    icon: Headphones,
    tag: "Proactive Care",
    color: "from-teal-600 to-emerald-700",
    badge: "24/7 NOC",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-500">

      {/* --- Modern ISP Decorative Shapes & Vectors --- */}
      {/* 1. Concentric WiFi Radar Wave Rings (Top Left) */}
      <div className="absolute -top-28 -left-28 w-96 h-96 pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-emerald-400 animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-10 rounded-full border border-teal-400 animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <div className="absolute inset-20 rounded-full border border-emerald-300" />
      </div>

      {/* 2. Optical Fiber Signal Curve SVG (Bottom Right) */}
      <svg className="absolute bottom-0 right-0 w-[480px] h-[320px] pointer-events-none opacity-20" viewBox="0 0 480 320" fill="none">
        <path d="M 480 200 Q 280 60, 0 160" stroke="url(#whyFiberLine)" strokeWidth="2.5" strokeDasharray="8 6" />
        <circle cx="280" cy="60" r="5" fill="#10b981" className="animate-ping" />
        <defs>
          <linearGradient id="whyFiberLine" x1="100%" y1="100%" x2="0%" y2="0%">
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
              WHY CHOOSE PABNA ONLINE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-4">
            Next-Gen Fiber Network,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-800 dark:from-emerald-400 dark:to-teal-300">
              Engineered For Speed & Stability
            </span>
          </h2>

          <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
            Experience truly seamless digital connectivity powered by 100% optical fiber infrastructure, direct national BDIX peering, and dedicated 24/7 technical assistance.
          </p>
        </div>

        {/* 4 Key Stat Cards (Staggered Animation with Frosted Glassmorphism) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16" data-reveal-group>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="reveal-stagger-item group bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-5 sm:p-6 border border-slate-200/80 dark:border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_45px_-8px_rgba(5,150,105,0.22)] hover:-translate-y-1.5 hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center shadow-md ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div>
                <div className="text-3xl font-black text-slate-900 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-extrabold text-slate-700 dark:text-slate-200 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Informative Feature Cards (Staggered Animation with Frosted Glassmorphism) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" data-reveal-group>
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="reveal-stagger-item group relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.7)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_45px_-8px_rgba(5,150,105,0.22)] hover:-translate-y-2 hover:border-emerald-400/60 hover:bg-white/90 dark:hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center shadow-lg shadow-emerald-500/15 group-hover:scale-105 transition-transform duration-300`}>
                    <feat.icon className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-emerald-200 dark:group-hover:border-emerald-500/40 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors mb-3 leading-snug">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {feat.tag}
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Live Network Guarantee Callout Banner (Frosted Glass) */}
        <div className="reveal-on-scroll mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 backdrop-blur-2xl border border-cyan-500/30 text-white shadow-[0_20px_40px_-10px_rgba(0,195,255,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,195,255,0.5)] hover:border-cyan-400/50 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-4 sm:gap-5 z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 animate-pulse" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                Ready for high-speed, bufferless internet?
              </h4>
              <p className="text-sm text-slate-400 mt-0.5">
                Join thousands of satisfied homes and businesses across Pabna city.
              </p>
            </div>
          </div>

          <div className="shrink-0 relative z-10">
            <UiverseButton
              text="Explore Packages"
              href="#pricing"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
