import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: string;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-strong bg-muted px-4 py-1.5",
        "text-badge font-normal text-body",
        className,
      )}
    >
      {children}
    </span>
  );
}
