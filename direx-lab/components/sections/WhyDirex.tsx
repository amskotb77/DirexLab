import { whyDirex } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function WhyDirex() {
  return (
    <section className="relative py-28 md:py-36 border-b border-line">
      <div className="container-lab grid md:grid-cols-[1fr_1.4fr] gap-14 md:gap-20">
        <div>
          <Reveal>
            <p className="h-eyebrow mb-4">Why Direx Lab</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display text-3xl sm:text-4xl md:text-5xl text-balance sticky top-32">
              Built for brands that want the truth in their numbers.
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {whyDirex.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="border-t border-line last:border-b py-7 md:py-8 grid grid-cols-[40px_1fr] md:grid-cols-[64px_1fr] gap-6">
                <span className="h-eyebrow text-dim-2 pt-1">0{i + 1}</span>
                <div>
                  <h3 className="h-display text-xl md:text-2xl mb-2">{item.title}</h3>
                  <p className="text-dim max-w-lg">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
