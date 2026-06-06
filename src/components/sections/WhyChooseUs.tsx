import { Integrations } from "@/components/integrations";
import { LogosSlider } from "@/components/sections/LogosSlider";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { BRANDS_SECTION } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background section-scroll-mt">
      <div className="section-container section-container-compact desktop:py-(--section-why-py)">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
          <SectionBadge className="text-body">Our Brands</SectionBadge>
          <h2 className="text-[clamp(1.125rem,3.2vw,1.625rem)] font-bold uppercase leading-[1.2] tracking-(--tracking-section-title) text-foreground">
          HOSPITALITY BRANDS WE DEVELOP & OPERATE
          </h2>
          <p className="max-w-[640px] text-sm leading-[1.65] text-body tablet:text-[0.9375rem]">
            {BRANDS_SECTION.intro}
          </p>
        </Reveal>

        <div className="mt-6 tablet:mt-8 desktop:mt-(--section-why-header-gap)">
          <Integrations />
        </div>

        <Reveal delay={0.04} className="mt-20 tablet:mt-24 desktop:mt-32">
          <LogosSlider />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-[1.65] text-body tablet:mt-8 tablet:text-[0.9375rem]">
            {BRANDS_SECTION.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
