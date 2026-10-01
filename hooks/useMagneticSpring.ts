"use client";

import { useRef, useCallback } from "react";

interface MagneticOptions {
  pull?: number; // magnetic strength (subtle micro-pull)
  maxOffset?: number; // maximum travel distance in pixels
  scaleHover?: number; // scale when hovered
  scalePress?: number; // scale when clicked down
}

export function useMagneticSpring<T extends HTMLElement = HTMLElement>(
  options: MagneticOptions = {}
) {
  const {
    pull = 0.12,
    maxOffset = 6,
    scaleHover = 1.03,
    scalePress = 0.95,
  } = options;

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

      // Stable center of the element in viewport
      const rect = el.getBoundingClientRect();
      s.originX = rect.left + rect.width / 2 - s.currentX;
      s.originY = rect.top + rect.height / 2 - s.currentY;

      const rawX = (e.clientX - s.originX) * pull;
      const rawY = (e.clientY - s.originY) * pull;
      const deltaX = Math.max(-maxOffset, Math.min(maxOffset, rawX));
      const deltaY = Math.max(-maxOffset, Math.min(maxOffset, rawY));

      s.currentX = deltaX;
      s.currentY = deltaY;

      el.style.transition = "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.2s ease";
      el.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0) scale(${scaleHover})`;
    },
    [pull, maxOffset, scaleHover]
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

      const rawX = (e.clientX - s.originX) * pull;
      const rawY = (e.clientY - s.originY) * pull;
      const deltaX = Math.max(-maxOffset, Math.min(maxOffset, rawX));
      const deltaY = Math.max(-maxOffset, Math.min(maxOffset, rawY));

      s.currentX = deltaX;
      s.currentY = deltaY;

      el.style.transition = s.isPressed
        ? "transform 0.08s ease-out"
        : "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)";
      const scale = s.isPressed ? scalePress : scaleHover;
      el.style.transform = `translate3d(${deltaX.toFixed(1)}px, ${deltaY.toFixed(1)}px, 0) scale(${scale})`;
    },
    [pull, maxOffset, scaleHover, scalePress]
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
    // Gentle spring bounce recoil on release
    el.style.transition = "transform 0.35s cubic-bezier(0.34, 1.6, 0.64, 1)";
    el.style.transform = `translate3d(${s.currentX.toFixed(1)}px, ${s.currentY.toFixed(1)}px, 0) scale(${scaleHover * 1.015})`;
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

    // Smooth elastic spring settle back to center
    el.style.transition = "transform 0.55s cubic-bezier(0.34, 1.5, 0.64, 1), box-shadow 0.3s ease";
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
