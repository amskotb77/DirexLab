"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab">
        <Reveal>
          <p className="h-eyebrow mb-4">In their words</p>
        </Reveal>

        <div className="relative max-w-3xl mx-auto text-center min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 24 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="h-display text-2xl sm:text-3xl md:text-4xl text-balance leading-tight mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>
              <p className="text-paper font-medium">{current.name}</p>
              <p className="text-dim-2 text-sm mt-1">{current.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            data-cursor="link"
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-line hover:border-accent/60 flex items-center justify-center transition-colors duration-300"
          >
            &larr;
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                data-cursor="link"
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
          <button
            data-cursor="link"
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-line hover:border-accent/60 flex items-center justify-center transition-colors duration-300"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
