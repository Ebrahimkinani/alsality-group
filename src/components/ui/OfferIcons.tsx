import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

export function HouseIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <path d="M12 3 3 10.5V21h6v-6h6v6h6V10.5L12 3zm0 2.4 6 5.25V19h-2v-6H8v6H6v-8.35l6-5.25z" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <path d="M12 2C7 6 4 10 4 14a8 8 0 0 0 16 0c0-4-3-8-8-12zm0 3.2c3.8 3.2 5.8 6.2 5.8 8.8a6 6 0 0 1-11.6 0c0-2.6 2-5.6 5.8-8.8z" />
    </svg>
  );
}

export function TreeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden
    >
      <path d="M12 2 7 10h3v2H6l4 8h4l-1 2h2l-1-2h4l4-8h-4v-2h3L12 2z" />
    </svg>
  );
}

export const OFFER_ICONS = [HouseIcon, LeafIcon, TreeIcon] as const;
