"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useMagneticSpring } from "@/hooks/useMagneticSpring";

interface UiverseButtonProps {
  text: string;
  mobileText?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export default function UiverseButton({
  text,
  mobileText,
  href,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  icon,
  ariaLabel,
}: UiverseButtonProps) {
  const { ref: magneticRef, handlers: magneticHandlers } =
    useMagneticSpring<any>({
      pull: 0.28,
      scaleHover: 1.04,
      scalePress: 0.93,
    });

  const content = (
    <>
      {/* Animated Light Sweep Shimmer */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

      {/* Left Icon (Custom or Default Sparkles) */}
      {icon ? (
        <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
      ) : (
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
      )}

      {/* Button Text (Responsive Desktop / Mobile) */}
      {mobileText ? (
        <span className="inline-flex items-center">
          <span className="inline-flex sm:hidden font-extrabold tracking-wide drop-shadow-sm">
            {mobileText}
          </span>
          <span className="hidden sm:inline-flex font-extrabold tracking-wide drop-shadow-sm">
            {text}
          </span>
        </span>
      ) : (
        <span className="font-extrabold tracking-wide drop-shadow-sm">{text}</span>
      )}

      {/* Right Arrow Icon */}
      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-200 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  const baseBtnClass =
    "relative group overflow-hidden px-5 sm:px-6 py-2.5 sm:py-3 rounded-full inline-flex items-center justify-center gap-2 text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:via-teal-500 hover:to-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.32),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.5),inset_0_1px_2px_rgba(255,255,255,0.5)] border border-emerald-300/40 text-xs sm:text-sm font-extrabold cursor-pointer select-none will-change-transform";

  const btnClass = `${baseBtnClass} ${fullWidth ? "!w-full" : ""} ${className}`;
  const wrapperClass = fullWidth ? "w-full" : "inline-block";

  if (href) {
    return (
      <div className={wrapperClass}>
        <a
          ref={magneticRef}
          href={href}
          onClick={onClick}
          {...magneticHandlers}
          className={btnClass}
          aria-label={ariaLabel || text}
        >
          {content}
        </a>
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      <button
        ref={magneticRef}
        type={type}
        onClick={onClick}
        {...magneticHandlers}
        className={btnClass}
        aria-label={ariaLabel || text}
      >
        {content}
      </button>
    </div>
  );
}
