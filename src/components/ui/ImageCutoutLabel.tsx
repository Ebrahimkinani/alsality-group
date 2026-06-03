import { cn } from "@/lib/utils";

type ImageCutoutLabelProps = {
  number: string;
  label: string;
  className?: string;
};

const SCOOP = 28;

/**
 * Bottom-right white notch with inverted top-left corner (matches Framer cutout).
 */
export function ImageCutoutLabel({
  number,
  label,
  className,
}: ImageCutoutLabelProps) {
  return (
    <div
      className={cn(
        "absolute bottom-0 right-0 z-10 bg-background pb-5 pl-7 pr-8 pt-4",
        "rounded-tl-(--radius-cutout)",
        className,
      )}
    >
      <span
        className="pointer-events-none absolute left-0 bg-transparent"
        style={{
          top: -SCOOP,
          width: SCOOP,
          height: SCOOP,
          borderBottomRightRadius: SCOOP,
          boxShadow: `${SCOOP}px ${SCOOP}px 0 0 var(--background)`,
        }}
        aria-hidden
      />
      <p className="relative text-(length:--text-cutout-number) font-extralight leading-none tracking-tight text-cutout-number">
        {number}
      </p>
      <p className="relative mt-1.5 text-[0.8125rem] font-normal text-cutout-label">
        {label}
      </p>
    </div>
  );
}
