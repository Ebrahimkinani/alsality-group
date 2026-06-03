import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "mb-10 max-w-2xl desktop:mb-14",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className="font-display text-sm font-semibold uppercase tracking-wide text-label tablet:text-base">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-foreground tablet:text-4xl desktop:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground tablet:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
