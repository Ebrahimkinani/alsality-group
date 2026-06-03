"use client";

import { Reveal } from "@/components/motion/Reveal";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { HERO_FEATURED_BRANDS } from "@/lib/constants";

export function HeroFeaturedAgents() {
  return (
    <Reveal
      delay={0.35}
      className="absolute bottom-0 right-0 z-20 rounded-tl-[32px] bg-background p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] tablet:rounded-tl-[48px] tablet:p-5"
    >
      <div
        className="relative h-10 w-48 shrink-0 overflow-hidden tablet:w-56"
        aria-label="Hospitality brands"
      >
        <InfiniteSlider
          className="flex h-full w-full items-center"
          speed={40}
          gap={12}
        >
          {HERO_FEATURED_BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="flex size-10 shrink-0 items-center justify-center"
              title={brand.label}
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-muted text-[0.625rem] font-semibold tracking-tight text-foreground ring-2 ring-background">
                {brand.monogram}
              </span>
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 inset-s-0 w-8"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute inset-y-0 inset-e-0 w-8"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </Reveal>
  );
}
