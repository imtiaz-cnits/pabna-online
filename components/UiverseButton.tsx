"use client";

import React from "react";

interface UiverseButtonProps {
  text: string;
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
  href,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  icon,
  ariaLabel,
}: UiverseButtonProps) {
  const content = (
    <>
      {icon ? (
        icon
      ) : (
        <svg className="btn-svg shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      )}
      <span className="txt-wrapper">
        {text.split("").map((char, idx) =>
          char === " " ? (
            <span key={idx} className="inline-block w-1.5" />
          ) : (
            <span
              key={idx}
              className="btn-letter"
              style={{ animationDelay: `${(idx % 12) * 0.08}s` }}
            >
              {char}
            </span>
          )
        )}
      </span>
    </>
  );

  const wrapperClass = `btn-wrapper ${fullWidth ? "w-full flex" : "inline-block"}`;
  const btnClass = `btn-uiverse ${fullWidth ? "w-full !justify-center" : ""} ${className}`;

  if (href) {
    return (
      <div className={wrapperClass}>
        <a
          href={href}
          onClick={onClick}
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
        type={type}
        onClick={onClick}
        className={btnClass}
        aria-label={ariaLabel || text}
      >
        {content}
      </button>
    </div>
  );
}
