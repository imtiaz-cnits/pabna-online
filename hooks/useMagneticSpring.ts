"use client";

import { useRef, useCallback } from "react";

interface MagneticOptions {
  pull?: number; // magnetic strength (e.g. 0.3)
  scaleHover?: number; // scale when hovered
  scalePress?: number; // scale when clicked down
}

export function useMagneticSpring<T extends HTMLElement = HTMLElement>(
  options: MagneticOptions = {}
) {
  const { pull = 0.32, scaleHover = 1.05, scalePress = 0.93 } = options;
  const ref = useRef<T | null>(null);

  const state = useRef({
    currentX: 0,
    currentY: 0,
    originX: 0,
    originY: 0,
    isHovered: false,
    isPressed: false,
  });

  const onMouseEnter = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const s = state.current;
      s.isHovered = true;
      s.isPressed = false;

      // Stable center of the element in viewport (unaffected by prior transforms)
      const rect = el.getBoundingClientRect();
      s.originX = rect.left + rect.width / 2 - s.currentX;
      s.originY = rect.top + rect.height / 2 - s.currentY;

      const deltaX = (e.clientX - s.originX) * pull;
      const deltaY = (e.clientY - s.originY) * pull;
      s.currentX = deltaX;
      s.currentY = deltaY;

      el.style.transition = "transform 0.18s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s ease";
      el.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0) scale(${scaleHover})`;
    },
    [pull, scaleHover]
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const s = state.current;

      if (!s.originX || !s.originY) {
        const rect = el.getBoundingClientRect();
        s.originX = rect.left + rect.width / 2 - s.currentX;
        s.originY = rect.top + rect.height / 2 - s.currentY;
      }

      const deltaX = (e.clientX - s.originX) * pull;
      const deltaY = (e.clientY - s.originY) * pull;
      s.currentX = deltaX;
      s.currentY = deltaY;

      el.style.transition = s.isPressed
        ? "transform 0.08s ease-out"
        : "transform 0.12s cubic-bezier(0.25, 1, 0.5, 1)";
      const scale = s.isPressed ? scalePress : scaleHover;
      el.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0) scale(${scale})`;
    },
    [pull, scaleHover, scalePress]
  );

  const onMouseDown = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const s = state.current;
    s.isPressed = true;
    el.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";
    el.style.transform = `translate3d(${s.currentX.toFixed(1)}px, ${s.currentY.toFixed(1)}px, 0) scale(${scalePress})`;
  }, [scalePress]);

  const onMouseUp = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const s = state.current;
    s.isPressed = false;
    // Spring bounce recoil on release
    el.style.transition = "transform 0.35s cubic-bezier(0.34, 1.8, 0.64, 1)";
    el.style.transform = `translate3d(${s.currentX.toFixed(1)}px, ${s.currentY.toFixed(1)}px, 0) scale(${scaleHover * 1.02})`;
  }, [scaleHover]);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const s = state.current;
    s.isHovered = false;
    s.isPressed = false;
    s.currentX = 0;
    s.currentY = 0;
    s.originX = 0;
    s.originY = 0;

    // "cursor remove korle bounce hobeee":
    // Hardware accelerated elastic spring overshoot back to center
    el.style.transition = "transform 0.65s cubic-bezier(0.34, 1.8, 0.64, 1), box-shadow 0.3s ease";
    el.style.transform = "translate3d(0px, 0px, 0) scale(1)";
  }, []);

  return {
    ref,
    handlers: {
      onMouseEnter,
      onMouseMove,
      onMouseDown,
      onMouseUp,
      onMouseLeave,
    },
  };
}
