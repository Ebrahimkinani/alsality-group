import Image from "next/image";
import { cn } from "@/lib/utils";

type PropertyCardProps = {
  badge: string;
  location: string;
  title: string;
  beds: number;
  baths: number | null;
  sqft: string;
  price: string;
  image: string;
  className?: string;
};

export function PropertyCard({
  badge,
  location,
  title,
  beds,
  baths,
  sqft,
  price,
  image,
  className,
}: PropertyCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col gap-4",
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[32px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 809px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground">
          {badge}
        </span>
      </div>
      <div className="flex flex-col gap-2 px-1">
        <p className="text-sm text-muted-foreground">{location}</p>
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground tablet:text-xl">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span>
            {beds} bed{beds !== 1 ? "s" : ""}
          </span>
          {baths != null && (
            <span>
              {baths} bath{baths !== 1 ? "s" : ""}
            </span>
          )}
          <span>{sqft}</span>
        </div>
        <p className="font-display text-lg font-semibold text-foreground">
          {price}
        </p>
      </div>
    </article>
  );
}
