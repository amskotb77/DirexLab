"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { process } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Process() {
  const [active, setActive] = useState(0);

  return (
    <section id="process" className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab">
        <Reveal>
          <p className="h-eyebrow mb-4">How we work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-3xl sm:text-4xl md:text-5xl max-w-2xl text-balance mb-16 md:mb-20">
            A system, run on a cadence.
          </h2>
        </Reveal>

        {/* Step selector */}
        <div className="relative">
          <div className="absolute top-4 left-0 right-0 h-px bg-line hidden md:block" />
          <motion.div
            className="absolute top-4 left-0 h-px bg-accent hidden md:block"
            animate={{ width: `${(active / (process.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 gap-x-4 relative">
            {process.map((step, i) => (
              <button
                key={step.number}
                data-cursor="link"
                onClick={() => setActive(i)}
                className="flex flex-col items-start md:items-center text-left md:text-center group"
              >
                <span
                  className={`relative z-10 w-2 h-2 rounded-full mb-4 hidden md:block transition-colors duration-300 ${
                    i <= active ? "bg-accent" : "bg-line"
                  }`}
                />
                <span
                  className={`h-eyebrow transition-colors duration-300 ${
                    i === active ? "text-accent" : "text-dim-2 group-hover:text-dim"
                  }`}
                >
                  {step.number}
                </span>
                <span
                  className={`h-display text-lg md:text-xl mt-1 transition-colors duration-300 ${
                    i === active ? "text-paper" : "text-dim-2 group-hover:text-dim"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Active step detail */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20 max-w-2xl"
        >
          <p className="h-display text-2xl md:text-3xl text-balance mb-3">
            {process[active].title}
          </p>
          <p className="text-dim text-lg leading-relaxed">{process[active].description}</p>
        </motion.div>
      </div>
    </section>
  );
}
