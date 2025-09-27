"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function FocusRing() {
  const pathname = usePathname();
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ring = document.createElement("div");
    ring.id = "kb-focus-ring";
    Object.assign(ring.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "0px",
      height: "0px",
      pointerEvents: "none",
      borderRadius: "12px",
      boxSizing: "border-box",
      boxShadow: "0 0 0 6px #733E0A",
      transform: "translate3d(0,0,0)",
      transition:
        "transform 160ms ease, width 160ms ease, height 160ms ease, opacity 120ms ease",
      opacity: "0",
      zIndex: "2147483647",
    });
    document.body.appendChild(ring);
    ringRef.current = ring;

    const hide = () => {
      if (ringRef.current) {
        ringRef.current.style.opacity = "0";
      }
    };

    const PADDING = 6;

    const moveTo = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0 || r.height === 0) {
        hide();
        return;
      }
      const x = Math.round(r.left) - PADDING;
      const y = Math.round(r.top) - PADDING;
      const w = Math.round(r.width) + PADDING * 2;
      const h = Math.round(r.height) + PADDING * 2;

      ring.style.width = `${w}px`;
      ring.style.height = `${h}px`;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.opacity = "1";
    };

    const onFocusIn = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (!el.matches?.(":focus-visible")) {
        hide();
        return;
      }
      moveTo(el);
    };

    const onPointer = () => {
      hide();
    };

    const onScrollOrResize = () => {
      const el = document.activeElement as HTMLElement | null;
      if (el && el.matches?.(":focus-visible")) {
        moveTo(el);
      }
    };

    const onWindowBlur = () => {
      hide();
    };

    const onVisibility = () => {
      if (document.hidden) {
        hide();
      } else {
        onScrollOrResize();
      }
    };

    // Respect reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const setMotion = () => {
      ring.style.transition = mq.matches
        ? "none"
        : "transform 160ms ease, width 160ms ease, height 160ms ease, opacity 120ms ease";
    };
    setMotion();
    if (typeof mq.addEventListener === "function") {
      mq.addEventListener("change", setMotion);
    } else {
      mq.addListener?.(setMotion);
    }

    window.addEventListener("focusin", onFocusIn, true);
    window.addEventListener("pointerdown", onPointer, true);
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("blur", onWindowBlur);
    document.addEventListener("visibilitychange", onVisibility);

    if (!document.hasFocus()) {
      hide();
    }

    return () => {
      window.removeEventListener("focusin", onFocusIn, true);
      window.removeEventListener("pointerdown", onPointer, true);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("blur", onWindowBlur);
      document.removeEventListener("visibilitychange", onVisibility);
      if (typeof mq.removeEventListener === "function") {
        mq.removeEventListener("change", setMotion);
      } else {
        mq.removeListener?.(setMotion);
      }
      ring.remove();
      ringRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.opacity = "0";
    }
  }, [pathname]);

  return null;
}
