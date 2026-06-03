import { SectionHeading } from "@/components/ui/SectionHeading";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { PROPERTIES } from "@/lib/constants";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/motion/StaggerChildren";

export function FeaturedProperties() {
  return (
    <section id="properties" className="section-scroll-mt bg-background">
      <div className="section-container section-container-compact">
        <SectionHeading
          eyebrow="Featured Properties"
          title="Discover homes tailored to your lifestyle and needs"
          className="mb-6 desktop:mb-8 [&_h2]:mt-2 [&_h2]:text-xl [&_h2]:tablet:text-2xl [&_h2]:desktop:text-3xl [&_p]:text-sm"
        />
        <StaggerChildren className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-3">
          {PROPERTIES.map((property) => (
            <StaggerItem key={property.title}>
              <PropertyCard
                {...property}
                className="gap-2 [&>div:first-child]:aspect-3/2! [&>div:first-child]:rounded-3xl [&>div:last-child]:gap-1.5 [&>div:last-child]:px-0.5 [&_h3]:text-base [&_h3]:tablet:text-lg [&_p]:text-sm [&_span]:text-xs"
              />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
