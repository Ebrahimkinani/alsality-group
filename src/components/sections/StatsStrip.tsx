import { HERO_STATS } from "@/lib/constants";
import { StatCard } from "@/components/ui/StatCard";
import { Stars } from "@/components/ui/Stars";
import { Reveal } from "@/components/motion/Reveal";

export function StatsStrip() {
  return (
    <Reveal className="mt-10 w-full">
      <div className="flex flex-col gap-8 rounded-[32px] border border-border bg-background/80 p-6 backdrop-blur-sm tablet:flex-row tablet:items-center tablet:justify-between tablet:p-8">
        <div className="flex items-center gap-3">
          <span className="font-display text-3xl font-semibold">5/5</span>
          <Stars />
        </div>
        <div className="grid grid-cols-2 gap-6 tablet:grid-cols-4 tablet:gap-8">
          {HERO_STATS.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}
