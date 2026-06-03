import { cn } from "@/lib/utils";

type StatCardProps = {
  value: string;
  label: string;
  className?: string;
};

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="text-[clamp(1.75rem,4vw,2.25rem)] font-semibold leading-none tracking-tight text-foreground">
        {value}
      </span>
      <span className="mt-2 text-sm text-body tablet:text-[0.9375rem]">
        {label}
      </span>
    </div>
  );
}
