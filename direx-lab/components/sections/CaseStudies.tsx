"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

function CaseCard({ study, index }: { study: (typeof caseStudies)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover="hover"
        className="group relative border border-line rounded-2xl p-8 md:p-10 overflow-hidden bg-ink-2/40"
      >
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-radial-glow pointer-events-none"
        />

        <div className="relative z-10 flex items-start justify-between mb-8">
          <div>
            <h3 className="h-display text-2xl md:text-3xl">{study.brand}</h3>
            <p className="h-eyebrow mt-2">{study.category}</p>
          </div>
          <motion.span
            variants={{ hover: { x: 6, color: "#2563EB" } }}
            className="text-2xl text-dim-2"
            aria-hidden
          >
            &rarr;
          </motion.span>
        </div>

        <dl className="relative z-10 grid gap-6 md:grid-cols-2">
          {[
            ["Challenge", study.challenge],
            ["Strategy", study.strategy],
            ["Execution", study.execution],
            ["Results", study.results],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="h-eyebrow mb-2">{label}</dt>
              <dd className="text-sm text-dim leading-relaxed">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="relative z-10 flex flex-wrap gap-8 mt-9 pt-7 border-t border-line">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <p className="h-display text-2xl md:text-3xl text-accent">{m.value}</p>
              <p className="text-xs text-dim-2 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="work" className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab">
        <Reveal>
          <p className="h-eyebrow mb-4">Case studies</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-3xl sm:text-4xl md:text-5xl max-w-2xl text-balance mb-16 md:mb-20">
            Proof, not promises.
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {caseStudies.map((study, i) => (
            <CaseCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
