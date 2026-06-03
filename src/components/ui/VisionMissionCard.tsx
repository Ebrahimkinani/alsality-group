import { cn } from "@/lib/utils";

type VisionMissionCardProps = {
  title: string;
  description: string;
  icon: "vision" | "mission";
  className?: string;
};

function IconVision({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function IconMission({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

export function VisionMissionCard({
  title,
  description,
  icon,
  className,
}: VisionMissionCardProps) {
  const Icon = icon === "vision" ? IconVision : IconMission;

  return (
    <article
      className={cn(
        "flex gap-5 rounded-(--radius-about-card) bg-(--card-about) p-6",
        "tablet:p-8 desktop:flex-col desktop:gap-0 desktop:p-10",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-foreground",
          "desktop:mb-6",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-foreground tablet:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-[1.65] text-body tablet:mt-3 tablet:text-base">
          {description}
        </p>
      </div>
    </article>
  );
}
