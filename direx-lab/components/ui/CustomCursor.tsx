"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const cx = useMotionValue(-100);
  const cy = useMotionValue(-100);
  const springX = useSpring(cx, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(cy, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    const desktopQuery = window.matchMedia("(pointer: fine)");
    setIsDesktop(desktopQuery.matches);

    function handleMove(e: MouseEvent) {
      cx.set(e.clientX);
      cy.set(e.clientY);
      const target = e.target as HTMLElement;
      setIsActive(!!target.closest("[data-cursor='link']"));
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      style={{ left: springX, top: springY }}
      animate={{ scale: isActive ? 2.4 : 1, opacity: isActive ? 0.5 : 0.9 }}
      transition={{ duration: 0.2 }}
      className="pointer-events-none fixed z-[999] -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent mix-blend-difference hidden md:block"
    />
  );
}
