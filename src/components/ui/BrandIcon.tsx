import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandIconProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function BrandIcon({ className, variant = "light" }: BrandIconProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-lg",
        variant === "light"
          ? "bg-foreground/8 text-foreground"
          : "bg-white/10 text-white",
        className,
      )}
      aria-hidden
    >
      <Building2 className="size-[55%]" strokeWidth={1.75} />
    </span>
  );
}
