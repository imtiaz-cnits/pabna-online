"use client";

import { useState, useEffect } from "react";
import {
  Smartphone,
  Globe,
  FileText,
  CheckCircle2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Download,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  ExternalLink,
  Layers,
  Sparkles,
} from "lucide-react";

interface Step {
  step: number;
  title: string;
  action: string;
  instruction: string;
  img: string;
  tag: string;
}

const bkashSteps: Step[] = [
  {
    step: 1,
    title: "বিকাশ অ্যাপে প্রবেশ",
    action: "পে বিল সিলেক্ট করুন",
    instruction: "আপনার বিকাশ অ্যাপ ওপেন করে হোম স্ক্রিন থেকে 'পে বিল' অপশনে ট্যাপ করুন।",
    img: "/Website-img/bkash-steps/step-1.png",
    tag: "ধাপ ০১",
  },
  {
    step: 2,
    title: "প্রতিষ্ঠান নির্বাচন",
    action: "ইন্টারনেট ক্যাটাগরি",
    instruction: "পে বিল মেনু থেকে 'ইন্টারনেট' ট্যাপ করে 'Pabna Online' প্রতিষ্ঠানটি সিলেক্ট করুন।",
    img: "/Website-img/bkash-steps/step-2.png",
    tag: "ধাপ ০২",
  },
  {
    step: 3,
    title: "তথ্য প্রদান",
    action: "বিল মাস ও কাস্টমার আইডি",
    instruction: "বিলের সময়সীমা নির্বাচন করুন এবং কাস্টমার আইডি দিয়ে 'পে বিল করতে এগিয়ে যান' ট্যাপ করুন।",
    img: "/Website-img/bkash-steps/step-3.png",
    tag: "ধাপ ০৩",
  },
  {
    step: 4,
    title: "পরিমাণ যাচাই",
    action: "ফি-এর পরিমাণ চেক",
    instruction: "বিলের পরিমাণ ও প্রযোজ্য ফি চেক করে পরের স্ক্রিনে যেতে নিচের তীর চিহ্নে ট্যাপ করুন।",
    img: "/Website-img/bkash-steps/step-4.png",
    tag: "ধাপ ০৪",
  },
  {
    step: 5,
    title: "পিন কোড প্রদান",
    action: "বিকাশ পিন দিন",
    instruction: "আপনার বিকাশ একাউন্টের গোপন পিন (PIN) কোড প্রদান করে নিশ্চিত করুন।",
    img: "/Website-img/bkash-steps/step-5.png",
    tag: "ধাপ ০৫",
  },
  {
    step: 6,
    title: "পেমেন্ট নিশ্চিতকরণ",
    action: "ট্যাপ করে ধরে রাখুন",
    instruction: "'পে বিল' সম্পন্ন করতে স্ক্রিনের নিচের অংশে ট্যাপ করে কয়েক সেকেন্ড ধরে রাখুন।",
    img: "/Website-img/bkash-steps/step-6.png",
    tag: "ধাপ ০৬",
  },
  {
    step: 7,
    title: "সফল লেনদেন",
    action: "ট্রানজেকশন সফল",
    instruction: "পে বিল সফলভাবে সম্পন্ন হলে স্ক্রিনে কনফার্মেশন ও ট্রানজেকশন আইডি দেখতে পাবেন।",
    img: "/Website-img/bkash-steps/step-7.png",
    tag: "ধাপ ০৭",
  },
  {
    step: 8,
    title: "ডিজিタル রিসিট",
    action: "রিসিট সংরক্ষণ",
    instruction: "বিকাশ অ্যাপে ডিজিটাল রিসিট ও স্টেটমেন্ট দেখে নিতে ও ডাউনলোড করে সংরক্ষণ করতে পারেন।",
    img: "/Website-img/bkash-steps/step-8.png",
    tag: "ধাপ ০৮",
  },
];

export default function BkashSection() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"interactive" | "grid">("interactive");

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === "Escape") setModalOpen(false);
      if (e.key === "ArrowRight") {
        setModalIndex((prev) => (prev < bkashSteps.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setModalIndex((prev) => (prev > 0 ? prev - 1 : bkashSteps.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const nextStep = () => {
    setActiveStep((prev) => (prev < bkashSteps.length - 1 ? prev + 1 : 0));
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : bkashSteps.length - 1));
  };

  return (
    <section
      id="bkash"
      lang="bn"
      className="font-bangla relative py-20 lg:py-28 overflow-hidden bg-slate-950 text-white"
    >
      {/* Dynamic Background Overlays & Subtle Neon Glows */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 pointer-events-none mix-blend-screen"
        style={{ backgroundImage: `url('/Website-img/bkash_bg.jpg')` }}
      />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e2136e]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#e2136e 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e2136e]/15 border border-[#e2136e]/30 text-[#ff79b4] text-xs sm:text-sm font-black uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#e2136e] animate-ping" />
            <span>বিকাশ বিল পে গাইডলাইন</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            আপনার ইন্টারনেট বিল{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2136e] via-[#ff4d94] to-[#e2136e]">
              বিকাশের মাধ্যমে
            </span>{" "}
            পে করার নিয়ম
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            খুব সহজেই কোনো ঝামেলা ছাড়া ৮টি সহজ ধাপে বিকাশ অ্যাপ দিয়ে আপনার পাবনা অনলাইন বিল পরিশোধ করুন। যেকোনো ধাপে ক্লিক করে বড় স্ক্রিন দেখে নিন।
          </p>

          {/* View Mode Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-white/5 border border-[#e2136e]/30 backdrop-blur-xl shadow-[0_0_15px_rgba(226,19,110,0.15)]">
            <button
              type="button"
              onClick={() => setViewMode("interactive")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                viewMode === "interactive"
                  ? "bg-gradient-to-r from-[#e2136e] to-[#b30b55] text-white shadow-lg shadow-[#e2136e]/40 bkash-neon-btn scale-105"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              ধাপ অনুযায়ী গাইড
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-[#e2136e] to-[#b30b55] text-white shadow-lg shadow-[#e2136e]/40 bkash-neon-btn scale-105"
                  : "text-slate-400 hover:text-white border border-transparent"
              }`}
            >
              <Layers className="w-4 h-4" />
              সবগুলো স্ক্রিন (৮টি ধাপ)
            </button>
          </div>
        </div>

        {/* Stable Parent Container for Smooth Tab Switching */}
        <div className="w-full transition-all duration-300 min-h-[520px]">
          {/* ── Mode 1: Interactive Step-by-Step Flow ── */}
          {viewMode === "interactive" ? (
            <div className="max-w-5xl mx-auto animate-fadeIn">
              {/* Step Selector Pills Bar (Wrapped and Centered on Mobile, no horizontal scroll) */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pb-4 mb-8 max-w-2xl mx-auto px-2">
                {bkashSteps.map((s, idx) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
                      activeStep === idx
                        ? "bg-[#e2136e] text-white border-[#e2136e] shadow-lg shadow-[#e2136e]/40 scale-105 bkash-neon-btn"
                        : "bg-white/5 text-slate-400 border-white/10 hover:border-[#e2136e]/50 hover:text-white"
                    }`}
                  >
                    ধাপ {idx + 1}
                  </button>
                ))}
              </div>

              {/* Main Interactive Showcase Card with Neon Border Glow */}
              <div className="relative rounded-[2.5rem] p-6 sm:p-10 md:p-12 bg-white/[0.04] backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] overflow-hidden bkash-neon-card">
                {/* Internal Ambient Glow */}
                <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#e2136e]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">

                  {/* Left Side: Step Details & Controls */}
                  <div className="md:col-span-7 space-y-6 text-left order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e2136e]/20 border border-[#e2136e]/40 text-[#ff79b4] text-xs font-black tracking-wider">
                      <span>{bkashSteps[activeStep].tag}</span>
                      <span>•</span>
                      <span>মোট ৮টি ধাপ</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      {bkashSteps[activeStep].title}
                    </h3>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-200">
                      <p className="text-sm sm:text-base leading-relaxed font-medium">
                        {bkashSteps[activeStep].instruction}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#e2136e]" />
                      <span>ছবিতে ক্লিক করলে পূর্ণ স্ক্রিনে বড় করে দেখতে পাবেন</span>
                    </div>

                    {/* Flow Action Buttons */}
                    <div className="flex items-center gap-3 pt-3">
                      <button
                        type="button"
                        onClick={prevStep}
                        disabled={activeStep === 0}
                        className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-bold border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer hover:border-[#e2136e]/50"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        পূর্ববর্তী
                      </button>

                      <button
                        type="button"
                        onClick={nextStep}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-[#e2136e] to-[#b30b55] hover:from-[#ff2d88] hover:to-[#e2136e] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#e2136e]/40 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 bkash-neon-btn"
                      >
                        <span>পরবর্তী ধাপ</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => openModal(activeStep)}
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer hover:scale-105 bkash-neon-btn"
                        title="বড় করে দেখুন"
                        aria-label="Zoom in"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Side: Phone Screen Mockup with Click-to-Zoom */}
                  <div className="md:col-span-5 flex justify-center order-1 md:order-2">
                    <div
                      onClick={() => openModal(activeStep)}
                      className="group relative cursor-pointer select-none transition-transform duration-500 hover:scale-105"
                    >
                      {/* Glowing Bezel Backdrop */}
                      <div className="absolute -inset-3 bg-gradient-to-br from-[#e2136e]/40 to-emerald-500/20 rounded-[2.5rem] blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />

                      {/* Phone Frame */}
                      <div className="relative w-[210px] sm:w-[240px] rounded-[2.2rem] p-2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600/60 shadow-2xl overflow-hidden">
                        {/* Notch / Speaker */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-900 rounded-full z-20 border border-slate-700/50" />

                        <div className="relative rounded-[1.8rem] overflow-hidden bg-white">
                          <img
                            src={bkashSteps[activeStep].img}
                            alt={bkashSteps[activeStep].title}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-108"
                          />

                          {/* Hover Overlay with Zoom Icon */}
                          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2">
                            <div className="w-11 h-11 rounded-full bg-[#e2136e] flex items-center justify-center shadow-lg">
                              <Maximize2 className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full">
                              বড় করে দেখুন
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ) : (
            /* ── Mode 2: Grid View (All 8 Steps Visible Simultaneously) ── */
            <div className="max-w-6xl mx-auto animate-fadeIn">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {bkashSteps.map((step, idx) => (
                  <div
                    key={step.step}
                    onClick={() => openModal(idx)}
                    className="group relative bg-white/[0.04] backdrop-blur-xl rounded-3xl p-4 sm:p-5 shadow-lg hover:shadow-[0_15px_35px_rgba(226,19,110,0.35)] hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between cursor-pointer overflow-hidden bkash-neon-card"
                  >
                    {/* Step Pill */}
                    <div className="flex items-center justify-between mb-3 z-10">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-[#e2136e]/20 text-[#ff79b4] border border-[#e2136e]/40 shadow-sm">
                        {step.tag}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Phone Mockup Screen */}
                    <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60 p-1 mb-4 my-auto">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Subtle Hover Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                        <span className="text-[10px] font-bold text-white bg-[#e2136e] px-2.5 py-0.5 rounded-full shadow-md">
                          ক্লিক করুন
                        </span>
                      </div>
                    </div>

                    {/* Step Info */}
                    <div className="text-left z-10">
                      <h4 className="font-extrabold text-sm sm:text-base text-white group-hover:text-[#ff79b4] transition-colors leading-snug mb-1">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {step.instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Trust & External Guide Bar with Neon Glow */}
        <div className="mt-14 p-5 sm:p-6 rounded-3xl bg-white/[0.03] backdrop-blur-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bkash-neon-card">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#e2136e]/20 text-[#ff79b4] border border-[#e2136e]/30 flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-white">১০০% নিরাপদ ও ভেরিফায়েড পেমেন্ট</p>
              <p className="text-xs text-slate-400">বিকাশের অফিশিয়াল পে-বিল গেটওয়ের মাধ্যমে পরিশোধিত হয়</p>
            </div>
          </div>

          <a
            href="https://pabnaonline.net/bkash-payment-instruction/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#e2136e] text-white text-xs sm:text-sm font-bold border border-white/15 hover:border-[#e2136e] shadow-sm hover:shadow-lg hover:shadow-[#e2136e]/40 transition-all cursor-pointer bkash-neon-btn"
          >
            <span>অফিশিয়াল নির্দেশাবলি পেজ</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* ── High-Resolution Single Image Zoom Modal (90vh Compact, Zero Scroll) ── */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-hidden animate-fadeIn"
        >
          {/* Modal Container: exactly 90vh, compact, zero scroll */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md sm:max-w-lg h-[90vh] max-h-[90vh] bg-slate-950/95 border border-[#e2136e]/40 rounded-3xl p-3 sm:p-4 shadow-[0_0_35px_rgba(226,19,110,0.35)] flex flex-col justify-between overflow-hidden bkash-neon-card"
          >
            {/* 1. Ultra-compact Header (Height ~34px) */}
            <div className="w-full flex items-center justify-between pb-2 border-b border-white/10 shrink-0">
              <div className="inline-flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-[#e2136e] text-white shadow-sm">
                  ধাপ {modalIndex + 1} / ৮
                </span>
                <span className="text-xs sm:text-sm font-bold text-white truncate max-w-[200px] sm:max-w-[280px]">
                  {bkashSteps[modalIndex].title}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-[#e2136e] text-white transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 2. Middle: Large Phone Screen taking all available space */}
            <div className="flex-1 min-h-0 w-full flex items-center justify-center py-2 overflow-hidden">
              <div className="relative h-full max-h-full aspect-[9/18.5] max-w-full rounded-[1.8rem] sm:rounded-[2.2rem] p-1.5 sm:p-2 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-slate-600/70 shadow-2xl flex flex-col overflow-hidden">
                {/* Phone Speaker Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-2 sm:h-2.5 bg-slate-900 rounded-full z-20 border border-slate-700/50" />

                {/* Full Screen Image */}
                <div className="relative w-full h-full rounded-[1.4rem] sm:rounded-[1.8rem] overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={bkashSteps[modalIndex].img}
                    alt={bkashSteps[modalIndex].title}
                    className="w-full h-full object-contain select-none"
                  />
                </div>
              </div>
            </div>

            {/* 3. Ultra-compact Step Instruction Banner (Height ~38px) */}
            <div className="w-full bg-white/[0.06] rounded-xl px-3 py-1.5 border border-white/10 shrink-0 text-left mb-2">
              <div className="text-xs sm:text-sm text-slate-200 leading-tight">
                <span className="font-bold text-[#ff79b4] mr-1.5">
                  {bkashSteps[modalIndex].action}:
                </span>
                <span className="text-slate-300 font-medium">
                  {bkashSteps[modalIndex].instruction}
                </span>
              </div>
            </div>

            {/* 4. Compact Controls & Navigation (Height ~38px) */}
            <div className="w-full flex items-center justify-between shrink-0 pt-1 border-t border-white/10">
              <button
                type="button"
                onClick={() =>
                  setModalIndex((prev) => (prev > 0 ? prev - 1 : bkashSteps.length - 1))
                }
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all flex items-center gap-1 cursor-pointer bkash-neon-btn"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>আগের ধাপ</span>
              </button>

              {/* 8 Step Dots */}
              <div className="flex items-center gap-1 sm:gap-1.5">
                {bkashSteps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setModalIndex(i)}
                    aria-label={`Go to step ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      modalIndex === i
                        ? "w-5 bg-[#e2136e] shadow-[0_0_8px_rgba(226,19,110,0.8)]"
                        : "w-2 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setModalIndex((prev) => (prev < bkashSteps.length - 1 ? prev + 1 : 0))
                }
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#e2136e] to-[#b30b55] hover:from-[#ff2d88] hover:to-[#e2136e] text-white font-bold text-xs shadow-md shadow-[#e2136e]/40 transition-all flex items-center gap-1 cursor-pointer bkash-neon-btn"
              >
                <span>পরের ধাপ</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}