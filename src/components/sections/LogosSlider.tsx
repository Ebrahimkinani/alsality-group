"use client";

import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { HERO_FEATURED_BRANDS, PARTNER_LOGOS } from "@/lib/constants";

const LARGE_MARQUEE_LOGOS = new Set(["duo", "humpo", "bruno", "athr"]);

export function LogosSlider() {
  const hasLogoImages = PARTNER_LOGOS.length > 0;

  return (
    <div
      className="relative h-[120px] w-full overflow-hidden tablet:h-[130px]"
      aria-label="Partner logos"
    >
      <InfiniteSlider
        className="flex h-full w-full items-center"
        speed={42}
        gap={52}
      >
        {hasLogoImages
          ? PARTNER_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className={
                  LARGE_MARQUEE_LOGOS.has(logo.id)
                    ? "flex w-40 shrink-0 items-center justify-center tablet:w-44"
                    : "flex w-36 shrink-0 items-center justify-center tablet:w-40"
                }
              >
                <Image
                  src={logo.image}
                  alt={logo.description}
                  width={160}
                  height={40}
                  className={logo.className ?? "h-9 w-auto max-w-[160px] object-contain tablet:h-10"}
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
