"use client";

import { results } from "@/lib/data";
import { useCounter } from "@/lib/useCounter";
import Reveal from "@/components/ui/Reveal";

function Counter({ item }: { item: (typeof results)[number] }) {
  const { ref, value } = useCounter(item.value);
  return (
    <div ref={ref} className="flex flex-col">
      <span className="h-display text-5xl sm:text-6xl md:text-7xl text-paper">
        {item.prefix}
        {value}
        {item.suffix}
      </span>
      <span className="h-eyebrow mt-4">{item.label}</span>
    </div>
  );
}

export default function Results() {
  return (
    <section className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab">
        <Reveal>
          <p className="h-eyebrow mb-4">The numbers</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
          {results.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <Counter item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
