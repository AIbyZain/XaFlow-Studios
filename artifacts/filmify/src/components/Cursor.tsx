import { useEffect, useRef } from "react";
import gsap from "gsap";

type CursorMode = "default" | "link" | "view";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    if (!canUseCustomCursor || !dotRef.current || !ringRef.current || !labelRef.current) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    const dotX = gsap.quickTo(dot, "x", { duration: 0.02, ease: "none" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.02, ease: "none" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.18, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.18, ease: "power3.out" });
    let hasMoved = false;
    let mode: CursorMode = "default";

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const setMode = (nextMode: CursorMode) => {
      if (mode === nextMode) return;
      mode = nextMode;

      if (nextMode === "view") {
        gsap.to(ring, {
          scale: 2.5,
          backgroundColor: "rgba(182, 255, 60, 0.14)",
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2, ease: "power2.out" });
        gsap.timeline().to(label, { opacity: 1, scale: 1, duration: 0.25, ease: "back.out(1.7)" });
        return;
      }

      if (nextMode === "link") {
        gsap.to(ring, {
          scale: 1.6,
          backgroundColor: "rgba(182, 255, 60, 0.12)",
          duration: 0.25,
          ease: "power2.out",
        });
        gsap.to(dot, { scale: 0, duration: 0.2, ease: "power2.out" });
        gsap.to(label, { opacity: 0, scale: 0.7, duration: 0.15, ease: "power2.in" });
        return;
      }

      gsap.to(ring, {
        scale: 1,
        backgroundColor: "rgba(182, 255, 60, 0)",
        duration: 0.25,
        ease: "power2.out",
      });
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power2.out" });
      gsap.to(label, { opacity: 0, scale: 0.7, duration: 0.15, ease: "power2.in" });
    };

    const handleMouseMove = (event: MouseEvent) => {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);

      if (!hasMoved) {
        hasMoved = true;
        document.body.classList.add("custom-cursor-ready");
        gsap.set([dot, ring], { opacity: 1 });
      }

      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>("[data-cursor]")
        : null;
      const modeFromTarget = target?.dataset.cursor;
      const nextMode: CursorMode =
        modeFromTarget === "view"
          ? "view"
          : modeFromTarget === "link" || target?.matches("a, button")
            ? "link"
            : "default";
      setMode(nextMode);
    };

    const handleMouseDown = () => {
      gsap.to(ring, { scale: mode === "view" ? 2.15 : 1.35, duration: 0.12, ease: "power2.out" });
    };

    const handleMouseUp = () => {
      gsap.to(ring, { scale: mode === "view" ? 2.5 : mode === "link" ? 1.6 : 1, duration: 0.45, ease: "elastic.out(1, 0.45)" });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.classList.remove("custom-cursor-ready");
      gsap.killTweensOf([dot, ring, label]);
    };
  }, []);

  return (
    <div className="custom-cursor" aria-hidden="true">
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring">
        <span ref={labelRef}>VIEW</span>
      </div>
    </div>
  );
}