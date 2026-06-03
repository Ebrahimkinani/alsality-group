"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ImageCutoutLabel } from "@/components/ui/ImageCutoutLabel";
import { OFFER_ICONS } from "@/components/ui/OfferIcons";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { OFFERINGS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function OfferImage({
  src,
  alt,
  number,
  label,
  priority,
  sizes = "(max-width: 809px) 100vw, (max-width: 1279px) 90vw, 700px",
  className,
}: {
  src: string;
  alt: string;
  number: string;
  label: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-2/1 w-full overflow-hidden rounded-2xl",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
      <ImageCutoutLabel
        number={number}
        label={label}
        className="pb-3 pl-5 pr-6 pt-3 [&_p:first-child]:text-[clamp(2rem,5vw,3rem)] [&_p:last-child]:text-xs"
      />
    </div>
  );
}

function VerticalOfferTab({
  id,
  title,
  onHover,
}: {
  id: string;
  title: string;
  onHover: () => void;
}) {
  const verticalTitle = title.toUpperCase();

  return (
    <div
      role="button"
      tabIndex={0}
      onMouseEnter={onHover}
      onFocus={onHover}
      className="group flex h-full min-h-[200px] cursor-default flex-col items-center border-l border-border px-3 py-2 transition-colors hover:bg-muted/40 xl:min-h-[240px] xl:px-4"
      aria-label={`View ${title}`}
    >
      <svg
        viewBox="0 0 12 12"
        className="mb-4 h-3 w-3 shrink-0 text-nav-inactive transition-colors group-hover:text-body"
        aria-hidden
      >
        <path
          d="M6 3 9 8M6 3 3 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        className="flex flex-1 flex-col items-center justify-end gap-3 text-nav-inactive transition-colors group-hover:text-body"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        <span className="text-2xl font-extralight leading-none tracking-tight">
          {id}
        </span>
        <span className="text-[0.625rem] font-medium uppercase tracking-[0.14em]">
          {verticalTitle}
        </span>
      </span>
    </div>
  );
}

function DesktopOfferLayout() {
  const [active, setActive] = useState(0);
  const offering = OFFERINGS[active];
  const Icon = OFFER_ICONS[active];
  const inactive = OFFERINGS.map((item, index) => ({ item, index })).filter(
    ({ index }) => index !== active,
  );

  return (
    <div className="hidden desktop:block">
      <div className="grid grid-cols-[minmax(200px,280px)_1fr] items-end gap-6 xl:gap-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={offering.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
            <Icon className="h-11 w-11 shrink-0 text-foreground" />
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {offering.title}
            </h3>
            <p className="mt-2 max-w-[34ch] text-sm leading-[1.6] text-body">
              {offering.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex min-w-0 items-center gap-6 xl:gap-8">
          <div className="flex min-w-0 flex-1 justify-end">
            <div className="w-[97%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={offering.id + "-image"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <OfferImage
                    src={offering.image}
                    alt={offering.title}
                    number={offering.id}
                    label={offering.title}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex shrink-0 self-stretch">
            {inactive.map(({ item, index }) => (
              <VerticalOfferTab
                key={item.id}
                id={item.id}
                title={item.title}
                onHover={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileOfferStack() {
  return (
    <div className="flex flex-col gap-(--section-offer-gap) desktop:hidden">
      {OFFERINGS.map((offering, index) => {
        const Icon = OFFER_ICONS[index];
        return (
          <Reveal key={offering.id} delay={index * 0.06}>
            <article className="flex flex-col">
              <OfferImage
                src={offering.image}
                alt={offering.title}
                number={offering.id}
                label={offering.title}
                priority={index === 0}
              />
              <div className="mt-4 flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-foreground" />
                <h3 className="text-base font-semibold text-foreground">
                  {offering.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-[1.6] text-body">
                {offering.description}
              </p>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}

export function WhatWeOffer() {
  return (
    <section id="services" className="section-scroll-mt bg-background">
      <div className="section-container section-container-compact">
        <Reveal className="mb-6 max-w-3xl desktop:mb-8">
          <SectionBadge>FullPlate</SectionBadge>
          <h2 className="mt-3 text-[clamp(1.25rem,3.5vw,2rem)] font-bold uppercase leading-[1.15] tracking-(--tracking-section-title) text-foreground">
          RESTAURANT DEVELOPMENT & HOSPITALITY MANAGEMENT
          </h2>
          <p className="mt-2 max-w-[640px] text-sm leading-[1.6] text-body tablet:text-[0.9375rem]">
          From concept creation to daily operations, Full Plate specializes in building, managing, and growing exceptional restaurant brands that deliver memorable dining <br /> experiences and sustainable business success.
          </p>
        </Reveal>

        <DesktopOfferLayout />
        <MobileOfferStack />
      </div>
    </section>
  );
}
