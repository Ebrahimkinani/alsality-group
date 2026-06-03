import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhatWeOffer } from "@/components/sections/WhatWeOffer";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CtaWithMarquee } from "@/components/sections/CtaWithMarquee";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { GetInTouch } from "@/components/sections/GetInTouch";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-sections">
        <Hero />
        <WhoWeAre />
        <WhatWeOffer />
        <WhyChooseUs />
        <CtaWithMarquee />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}
