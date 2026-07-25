"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab">
        <Reveal>
          <p className="h-eyebrow mb-4">What we do</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-3xl sm:text-4xl md:text-5xl max-w-2xl text-balance mb-16 md:mb-20">
            Four disciplines. One growth system.
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {services.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.06}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative border-t border-line last:border-b py-8 md:py-10 grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_1fr] gap-6 md:gap-10 items-start cursor-default"
              >
                <span className="h-eyebrow text-dim-2 pt-2">{service.number}</span>

                <h3 className="h-display text-2xl sm:text-3xl md:text-4xl transition-colors duration-300 group-hover:text-accent">
                  {service.title}
                </h3>

                <div className="md:pt-2">
                  <p className="text-dim max-w-md mb-4">{service.description}</p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-1">
                    {service.points.map((p) => (
                      <li key={p} className="text-xs text-dim-2 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.div
                  animate={{ scaleX: active === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-accent origin-left"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
