import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/motion/Reveal";
import { HeroFeaturedBrands } from "@/components/sections/HeroFeaturedBrands";
import { HERO_STATS, IMAGES } from "@/lib/constants";

function HeroStats() {
  return (
    <Reveal delay={0.25} className="mt-auto pt-10 tablet:pt-12">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 tablet:flex tablet:gap-12 desktop:gap-16">
        {HERO_STATS.map((stat, index) => (
          <div
            key={stat.label}
            className={
              index === 2 ? "col-span-2 tablet:col-span-1" : undefined
            }
          >
            <p className="text-[1.75rem] font-semibold leading-none text-background tablet:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1.5 text-sm text-background/70 tablet:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="home" className="page-gutter pb-6 pt-1 tablet:pb-8 tablet:pt-2">
      <div className="hero-shell relative min-h-(--hero-min-h-mobile) overflow-hidden rounded-(--radius-hero) desktop:min-h-(--hero-min-h-desktop) desktop:rounded-(--radius-hero-desktop)">
        <Image
          src={IMAGES.hero}
          alt="Alsality Group hospitality and brand development"
          fill
          priority
          className="object-cover object-[center_88%] tablet:object-[center_75%] desktop:object-[center_65%]"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden />

        <div className="relative z-10 flex min-h-(--hero-min-h-mobile) flex-col px-(--hero-inner-p) pb-32 pt-10 tablet:min-h-(--hero-min-h-mobile) tablet:px-(--hero-inner-p-tablet) tablet:pb-28 tablet:pt-12 desktop:min-h-(--hero-min-h-desktop) desktop:px-(--hero-inner-p-desktop) desktop:pb-28 desktop:pt-14">
          <div className="flex flex-col">
            <Reveal>
              <h1 className="max-w-[min(100%,20rem)] text-(length:--text-hero-mobile) font-semibold uppercase leading-[1.05] tracking-(--tracking-hero) text-background tablet:max-w-xl tablet:text-(length:--text-hero-tablet) desktop:max-w-2xl desktop:text-(length:--text-hero-desktop)">
              BUILDING BRANDS THAT INSPIRE GROWTH
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 max-w-[500px] text-[0.9375rem] leading-relaxed text-background/80 tablet:mt-5 tablet:text-base desktop:mt-6 desktop:text-lg">
              Where vision, innovation, and excellence come together to create enduring businesses.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-6 tablet:mt-8">
              <ArrowButton href="#why-us" variant="light">
                Explore Our Brands
              </ArrowButton>
            </Reveal>
          </div>

          <HeroStats />
        </div>

        <HeroFeaturedBrands />
      </div>
    </section>
  );
}
