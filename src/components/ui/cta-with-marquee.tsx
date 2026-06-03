"use client";

import Image from "next/image";
import { ReactNode, type MouseEvent } from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ATHAR_MARKETING } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function Marquee({
  children,
  reverse = false,
  className,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn("flex overflow-hidden [--gap:0rem] gap-(--gap)", className)}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        data-marquee-track
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-(--gap) animate-marquee",
          reverse && "direction-[reverse]",
        )}
      >
        {children}
      </div>
      <div
        data-marquee-track
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-(--gap) animate-marquee",
          reverse && "direction-[reverse]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

function setMarqueePaused(event: MouseEvent<HTMLElement>, paused: boolean) {
  const tile = event.currentTarget;
  const row = tile.closest("[data-marquee-row]");
  if (!row) return;

  row.querySelectorAll<HTMLElement>("[data-marquee-track]").forEach((track) => {
    track.style.animationPlayState = paused ? "paused" : "running";
  });
}

function ShowcaseMarqueeItem({
  image,
  alt,
  category,
}: {
  image: string;
  alt: string;
  category: string;
}) {
  return (
    <div
      className="group/tile relative size-64 shrink-0 overflow-hidden bg-muted lg:size-80"
      onMouseEnter={(e) => setMarqueePaused(e, true)}
      onMouseLeave={(e) => setMarqueePaused(e, false)}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/tile:scale-110"
        sizes="(max-width: 1024px) 256px, 320px"
      />
      <div
        className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-out group-hover/tile:bg-black/55"
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center px-3 opacity-0 transition-opacity duration-300 ease-out group-hover/tile:opacity-100">
        <span className="text-center text-[0.6875rem] font-medium uppercase leading-snug tracking-[0.14em] text-white md:text-xs">
          {category}
        </span>
      </div>
    </div>
  );
}

const rowOne = ATHAR_MARKETING.showcase.slice(0, 4);
const rowTwo = ATHAR_MARKETING.showcase.slice(4, 8);

export function HeroWithMarqueeLarge() {
  return (
    <div className="flex min-h-[min(100vh,56rem)] items-center overflow-hidden bg-background text-foreground">
      <div className="w-full">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:gap-4">
          <div className="shrink-0 space-y-5 px-6 py-12 lg:max-w-xl lg:px-12 lg:py-0 xl:max-w-2xl">
            <SectionBadge>{ATHAR_MARKETING.badge}</SectionBadge>
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold uppercase leading-[1.1] tracking-(--tracking-section-title) text-foreground">
              {ATHAR_MARKETING.heading}
            </h2>
            <p className="max-w-[540px] text-sm leading-[1.65] text-body tablet:text-[0.9375rem]">
              {ATHAR_MARKETING.description}
            </p>
          </div>

          <div className="relative flex w-full flex-1 flex-col gap-0 overflow-hidden lg:w-auto">
            <div data-marquee-row>
              <Marquee speed={30} reverse className="[--gap:0rem]">
                {rowOne.map((item, index) => (
                  <ShowcaseMarqueeItem
                    key={`${item.category}-${index}`}
                    image={item.image}
                    alt={item.alt}
                    category={item.category}
                  />
                ))}
              </Marquee>
            </div>
            <div data-marquee-row>
              <Marquee speed={30} className="[--gap:0rem]">
                {rowTwo.map((item, index) => (
                  <ShowcaseMarqueeItem
                    key={`${item.category}-${index}`}
                    image={item.image}
                    alt={item.alt}
                    category={item.category}
                  />
                ))}
              </Marquee>
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent sm:w-32"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent sm:w-32"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}
