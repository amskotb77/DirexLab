"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & (
  | { as: "a"; href: string }
  | { as?: "button"; href?: undefined }
);

export default function MagneticButton({
  children,
  className = "",
  onClick,
  as = "button",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: x * 0.35, y: y * 0.35 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block cursor-none-desktop"
      data-cursor="link"
    >
      {as === "a" ? (
        <motion.a href={href} onClick={onClick} className={className}>
          {children}
        </motion.a>
      ) : (
        <motion.button onClick={onClick} className={className}>
          {children}
        </motion.button>
      )}
    </motion.div>
  );
}
