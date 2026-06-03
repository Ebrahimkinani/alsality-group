import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { StatCard } from "@/components/ui/StatCard";
import { VisionMissionCard } from "@/components/ui/VisionMissionCard";
import { ABOUT_STATS, IMAGES } from "@/lib/constants";

const VISION =
  "To be a leading force in shaping innovative businesses that contribute to Qatar's future and set new standards of excellence across every industry we serve.";

const MISSION =
  "To create, operate, and grow exceptional brands through innovation, integrity, and strategic leadership while delivering sustainable value for stakeholders and communities.";

export function WhoWeAre() {
  return (
    <section id="about" className="section-scroll-mt bg-background">
      <div className="section-container section-container-compact desktop:py-(--section-about-py)">
        <div className="flex flex-col gap-6 tablet:gap-8 desktop:flex-row desktop:items-start desktop:gap-8">
          {/* Left: intro + stats */}
          <div className="flex flex-col gap-6 desktop:w-[min(100%,340px)] desktop:max-w-[30%] desktop:shrink-0 desktop:gap-8">
            <Reveal>
              <SectionBadge>Who We Are</SectionBadge>
              <h2 className="mt-3 text-[clamp(1.25rem,3.5vw,1.75rem)] font-bold uppercase leading-[1.15] tracking-(--tracking-section-title) text-foreground">
              BUILDING BRANDS. CREATING VALUE. SHAPING EXPERIENCES.
              </h2>
              <p className="mt-2 max-w-[520px] text-sm leading-[1.6] text-body tablet:text-[0.9375rem]">
              Our Group is a diversified business platform operating across hospitality, marketing, food supply, coffee solutions, and real estate. Through innovation, strategic partnerships, and operational excellence, we develop businesses that deliver exceptional experiences and sustainable growth across Qatar.
</p>
            </Reveal>

            <Reveal delay={0.08} className="grid grid-cols-2 gap-x-4 gap-y-6 tablet:grid-cols-4 tablet:gap-y-5 desktop:grid-cols-2 desktop:gap-x-6 desktop:gap-y-8">
              {ABOUT_STATS.map((stat) => (
                <StatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  className="[&>span:first-child]:text-[clamp(1.375rem,3vw,1.75rem)] [&>span:last-child]:mt-1.5 [&>span:last-child]:text-xs tablet:[&>span:last-child]:text-sm"
                />
              ))}
            </Reveal>
          </div>

          {/* Right: team image + vision / mission */}
          <div className="flex min-w-0 flex-1 flex-col gap-2.5 tablet:gap-4 desktop:max-w-[70%]">
            <Reveal delay={0.1}>
              <div className="relative aspect-2/1 w-full overflow-hidden rounded-2xl">
                <Image
                  src={IMAGES.about}
                  alt="VistaHaven professional real estate team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 809px) 100vw, (max-width: 1279px) 90vw, 840px"
                />
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-2.5 tablet:grid-cols-2 tablet:gap-4">
              <Reveal delay={0.14}>
                <VisionMissionCard
                  icon="vision"
                  title="Our Vision"
                  description={VISION}
                  className="h-full gap-3 rounded-2xl! p-4! tablet:p-5! desktop:p-6! desktop:gap-0 [&_h3]:text-base tablet:[&_h3]:text-lg [&_p]:mt-1.5 [&_p]:text-sm tablet:[&_p]:text-[0.9375rem] [&>div:first-child]:desktop:mb-4 [&>div:first-child]:h-10 [&>div:first-child]:w-10 [&_svg]:h-4 [&_svg]:w-4"
                />
              </Reveal>
              <Reveal delay={0.18}>
                <VisionMissionCard
                  icon="mission"
                  title="Our Mission"
                  description={MISSION}
                  className="h-full gap-3 rounded-2xl! p-4! tablet:p-5! desktop:p-6! desktop:gap-0 [&_h3]:text-base tablet:[&_h3]:text-lg [&_p]:mt-1.5 [&_p]:text-sm tablet:[&_p]:text-[0.9375rem] [&>div:first-child]:desktop:mb-4 [&>div:first-child]:h-10 [&>div:first-child]:w-10 [&_svg]:h-4 [&_svg]:w-4"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
