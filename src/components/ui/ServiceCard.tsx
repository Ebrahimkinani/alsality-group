import { cn } from "@/lib/utils";
import { SERVICE_ICONS } from "@/components/ui/ServiceIcons";

type ServiceCardProps = {
  title: string;
  description: string;
  index: number;
  className?: string;
};

export function ServiceCard({
  title,
  description,
  index,
  className,
}: ServiceCardProps) {
  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];

  return (
    <article
      className={cn(
        "flex gap-4 rounded-(--radius-service-card) bg-card-service p-6",
        "tablet:flex-col tablet:items-start tablet:gap-0 tablet:p-10",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background text-foreground",
          "tablet:mb-6",
        )}
      >
        <Icon />
      </div>

      <div className="min-w-0 flex-1 tablet:flex-none">
        <h3 className="text-lg font-semibold leading-snug text-foreground tablet:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-[1.6] text-body tablet:mt-3 tablet:text-base tablet:leading-[1.65]">
          {description}
        </p>
      </div>
    </article>
  );
}
