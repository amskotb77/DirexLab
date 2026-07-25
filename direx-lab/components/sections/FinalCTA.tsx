import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-radial-glow" />
      </div>

      <div className="container-lab relative z-10 text-center flex flex-col items-center">
        <Reveal>
          <p className="h-eyebrow mb-6">Let&apos;s talk growth</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="h-display text-4xl sm:text-5xl md:text-7xl text-balance max-w-4xl">
            Your next quarter starts with one call.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-dim text-lg mt-7 max-w-lg text-balance">
            Twenty minutes. No deck, no pitch — just your numbers and where
            the growth is sitting.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-11">
            <MagneticButton
              as="a"
              href="mailto:hello@direxlab.com"
              className="bg-accent text-white px-10 py-5 rounded-full text-sm font-medium hover:bg-accent-2 transition-colors duration-300 shadow-[0_0_44px_rgba(37,99,235,0.4)]"
            >
              Book a Strategy Call
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
