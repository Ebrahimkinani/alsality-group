import { cn } from "@/lib/utils";

type IconProps = { className?: string };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Brand mark */
export function IconBrandDevelopment({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" aria-hidden>
      <path
        {...stroke}
        d="M8 4.5 12 2l4 2.5V9c0 3-2.5 5.5-4 7.5-1.5-2-4-4.5-4-7.5V4.5z"
      />
      <path {...stroke} d="M12 8v5M10.25 10.5h3.5" />
    </svg>
  );
}

/** Handshake */
export function IconBuyerRepresentation({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" aria-hidden>
      <path
        {...stroke}
        d="M8 11.5 5.5 14c-.8.8-.8 2.1 0 2.9l1.1 1.1c.8.8 2.1.8 2.9 0l1-1M16 11.5 18.5 14c.8.8.8 2.1 0 2.9l-1.1 1.1c-.8.8-2.1.8-2.9 0l-1-1"
      />
      <path {...stroke} d="M9.5 10 12 12.5 14.5 10M7 8.5 9 10.5M17 8.5 15 10.5" />
    </svg>
  );
}

/** Key */
export function IconRentalManagement({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" aria-hidden>
      <circle {...stroke} cx="9" cy="13" r="3.25" />
      <path {...stroke} d="M11.75 13H19M16.5 10.25V8.25a1.75 1.75 0 013.5 0V10.25" />
      <path {...stroke} d="M18.25 7.5V6M17 8.75h2.5" />
    </svg>
  );
}

/** Upward trend chart */
export function IconInvestmentConsulting({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M4 18h16" />
      <path {...stroke} d="M6.5 15.5 10 11l3 2.5 5.5-6.5" />
      <path {...stroke} d="M15.5 7H19v3.5" />
    </svg>
  );
}

/** Balance scales */
export function IconOperations({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" aria-hidden>
      <path {...stroke} d="M12 4v15M8 19h8" />
      <path {...stroke} d="M6 8h4l-2 4H6zm8 0h4l-2 4h-2z" />
      <path {...stroke} d="M8 8h8" />
    </svg>
  );
}

/** Gear */
export function IconTailoredSolutions({ className }: IconProps) {
  return (
    <svg className={cn("h-5 w-5", className)} viewBox="0 0 24 24" aria-hidden>
      <path
        {...stroke}
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      />
      <path
        {...stroke}
        d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .66.39 1.26 1 1.51H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
      />
    </svg>
  );
}

export const SERVICE_ICONS = [
  IconBrandDevelopment,
  IconBuyerRepresentation,
  IconRentalManagement,
  IconInvestmentConsulting,
  IconOperations,
  IconTailoredSolutions,
] as const;
