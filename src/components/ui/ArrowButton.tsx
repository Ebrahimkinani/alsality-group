import Link from "next/link";
import { cn } from "@/lib/utils";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7H9M17 7V15" />
    </svg>
  );
}

type ArrowButtonProps = {
  href: string;
  variant?: "dark" | "light";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function ArrowButton({
  href,
  variant = "dark",
  children,
  className,
  onClick,
}: ArrowButtonProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full py-1.5 pl-4 pr-1.5 text-sm font-medium transition-opacity hover:opacity-90 tablet:text-base",
        isDark
          ? "bg-foreground text-background"
          : "bg-background text-foreground",
        className,
      )}
    >
      {isDark && (
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-accent-green shadow-[0_0_8px_rgba(34,197,94,0.6)]"
          aria-hidden
        />
      )}
      <span className="whitespace-nowrap">{children}</span>
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
          isDark ? "bg-background text-foreground" : "bg-foreground text-background",
        )}
      >
        <ArrowIcon />
      </span>
    </Link>
  );
}
