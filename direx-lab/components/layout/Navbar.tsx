"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar({ show }: { show: boolean }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={show ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-line/0 backdrop-blur-0"
    >
      <div className="container-lab flex items-center justify-between h-20">
        <a href="#top" className="h-display text-lg tracking-tight">
          Dire<span className="text-accent">X</span>
          <span className="text-dim text-xs align-top ml-0.5">Lab</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor="link"
              className="text-sm text-dim hover:text-paper transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <MagneticButton
          as="a"
          href="#contact"
          className="text-sm border border-line hover:border-accent/60 px-5 py-2.5 rounded-full transition-colors duration-300 hover:shadow-[0_0_24px_rgba(37,99,235,0.25)]"
        >
          Book a Call
        </MagneticButton>
      </div>
    </motion.header>
  );
}
