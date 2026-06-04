"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { HERO_FEATURED_BRANDS, PARTNER_LOGOS } from "@/lib/constants";

export function LogosSlider() {
  const hasLogoImages = PARTNER_LOGOS.length > 0;

  return (
    <div
      className="relative h-[100px] w-full overflow-hidden"
      aria-label="Partner logos"
    >
      <InfiniteSlider
        className="flex h-full w-full items-center"
        speed={30}
        gap={48}
      >
        {hasLogoImages
          ? PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="flex w-32 shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.image}
                  alt={logo.description}
                  width={128}
                  height={28}
                  className={logo.className ?? "h-7 w-auto"}
                />
              </div>
            ))
          : HERO_FEATURED_BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="flex w-32 shrink-0 items-center justify-center"
                title={brand.label}
              >
                <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {brand.label}
                </span>
              </div>
            ))}
      </InfiniteSlider>
      <ProgressiveBlur
        className="pointer-events-none absolute inset-y-0 inset-s-0 w-[200px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute inset-y-0 inset-e-0 w-[200px]"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
