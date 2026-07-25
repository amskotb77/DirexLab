"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/hero/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Results from "@/components/sections/Results";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import WhyDirex from "@/components/sections/WhyDirex";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  const [navVisible, setNavVisible] = useState(false);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Direx Lab",
            description:
              "Direx Lab directs profitable growth for e-commerce brands through performance marketing, CRO, creative strategy, and business development.",
            url: "https://direxlab.com",
            email: "hello@direxlab.com",
            areaServed: "Worldwide",
          }),
        }}
      />

      <Navbar show={navVisible} />
      <main>
        <Hero onLogoComplete={() => setNavVisible(true)} />
        <TrustMarquee />
        <Results />
        <Services />
        <CaseStudies />
        <WhyDirex />
        <Process />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
