"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroLogoAnimation from "./HeroLogoAnimation";
import MagneticButton from "@/components/ui/MagneticButton";

const easeOut = [0.16, 1, 0.3, 1] as const;

export default function Hero({ onLogoComplete }: { onLogoComplete: () => void }) {
  const [logoDone, setLogoDone] = useState(false);

  function handleComplete() {
    setLogoDone(true);
    onLogoComplete();
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-radial-glow animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 w-full">
        <HeroLogoAnimation onComplete={handleComplete} />

        {logoDone && (
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
            }}
            className="flex flex-col items-center mt-10 max-w-3xl text-center"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="h-eyebrow mb-5"
            >
              Performance · CRO · Creative · Growth
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 20, filter: "blur(6px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="h-display text-balance text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Direction for brands
              <br />
              that refuse to plateau.
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mt-7 text-base sm:text-lg text-dim max-w-xl text-balance"
            >
              We&apos;re the growth team behind e-commerce brands who wanted
              their numbers examined as closely as their ads.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            >
              <MagneticButton
                as="a"
                href="#contact"
                className="bg-accent text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-accent-2 transition-colors duration-300 shadow-[0_0_36px_rgba(37,99,235,0.35)]"
              >
                Book a Strategy Call
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#work"
                className="px-8 py-4 rounded-full text-sm font-medium border border-line hover:border-accent/60 transition-colors duration-300"
              >
                View Case Studies
              </MagneticButton>
            </motion.div>
          </motion.div>
        )}
      </div>

      {logoDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dim"
        >
          <span className="h-eyebrow">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-dim to-transparent" />
        </motion.div>
      )}
    </section>
  );
}
