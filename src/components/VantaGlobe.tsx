"use client";

import { useEffect, useRef } from "react";

export default function VantaGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaRef = useRef<any>(null);

  useEffect(() => {
    let mounted = true;

    async function init() {
      const p5 = (await import("p5")).default;
      const VANTA = (await import("vanta/dist/vanta.topology.min")).default;

      if (!mounted || !containerRef.current) return;

      vantaRef.current = VANTA({
        el: containerRef.current,
        p5,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x2222,
        color: 0x89964e,
      });
    }

    init();

    return () => {
      mounted = false;
      if (vantaRef.current) {
        vantaRef.current.destroy();
        vantaRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
