"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab max-w-3xl">
        <Reveal>
          <p className="h-eyebrow mb-4">Questions</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-3xl sm:text-4xl md:text-5xl mb-14 md:mb-16">
            Before you book a call.
          </h2>
        </Reveal>

        <div>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div className="border-t border-line last:border-b">
                  <button
                    data-cursor="link"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between text-left py-6 gap-6"
                  >
                    <span className="h-display text-lg md:text-xl">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-accent shrink-0"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-dim leading-relaxed pb-6 max-w-xl">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
