"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const FULL_PHRASE = "directors for ecommerce brand owners";
const REMAINDER = "dire"; // what survives the backspace pass
const TYPE_SPEED = 42;
const DELETE_SPEED = 30;
const POST_TYPE_PAUSE = 600;

type Phase = "typing" | "pausing" | "deleting" | "x" | "lab" | "done";

export default function HeroLogoAnimation({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("typing");
  const [length, setLength] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    // Respect reduced-motion: skip straight to the final state.
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setPhase("done");
      onComplete?.();
      return;
    }

    if (phase === "typing") {
      if (length < FULL_PHRASE.length) {
        timeoutRef.current = setTimeout(() => setLength((l) => l + 1), TYPE_SPEED);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      timeoutRef.current = setTimeout(() => setPhase("deleting"), POST_TYPE_PAUSE);
    }

    if (phase === "deleting") {
      if (length > REMAINDER.length) {
        timeoutRef.current = setTimeout(() => setLength((l) => l - 1), DELETE_SPEED);
      } else {
        setPhase("x");
      }
    }

    if (phase === "x") {
      timeoutRef.current = setTimeout(() => setPhase("lab"), 380);
    }

    if (phase === "lab") {
      timeoutRef.current = setTimeout(() => {
        setPhase("done");
        onComplete?.();
      }, 550);
    }

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, length]);

  const isBuilding = phase === "typing" || phase === "pausing" || phase === "deleting";
  const displayed = FULL_PHRASE.slice(0, length);
  const showCursor = isBuilding;

  return (
    <div
      className="flex flex-col items-center justify-center select-none"
      aria-label="Direx Lab"
      role="img"
    >
      {isBuilding ? (
        <div className="font-mono text-2xl sm:text-3xl md:text-4xl tracking-tight text-paper/90 h-[1.2em] flex items-center">
          <span>{displayed}</span>
          {showCursor && (
            <span className="inline-block w-[0.5ch] h-[1em] bg-accent ml-1 animate-blink" />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="h-display flex items-baseline text-[16vw] sm:text-[9rem] md:text-[10.5rem] leading-none">
            <span>Dire</span>
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-accent"
            >
              X
            </motion.span>
          </div>
          {(phase === "lab" || phase === "done") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-display text-2xl sm:text-3xl md:text-4xl text-dim mt-1 self-end pr-1 md:pr-2"
            >
              Lab
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}
