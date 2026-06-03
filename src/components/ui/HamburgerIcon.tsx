import { cn } from "@/lib/utils";

export function HamburgerIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn("flex h-5 w-6 flex-col items-end justify-between", className)}
      aria-hidden
    >
      <span className="h-0.5 w-[18px] bg-foreground" />
      <span className="h-0.5 w-6 bg-foreground" />
      <span className="h-0.5 w-[14px] bg-foreground" />
    </span>
  );
}
