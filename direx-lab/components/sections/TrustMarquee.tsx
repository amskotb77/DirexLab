import { trustLogos } from "@/lib/data";

export default function TrustMarquee() {
  const doubled = [...trustLogos, ...trustLogos];

  return (
    <section className="relative border-y border-line py-10 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-ink to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-ink to-transparent z-10" />
      <div className="flex w-max animate-marquee">
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="mx-8 md:mx-14 text-xl md:text-2xl font-display text-dim-2 whitespace-nowrap tracking-tight"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
