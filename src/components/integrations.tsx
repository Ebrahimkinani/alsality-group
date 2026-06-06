import Image from "next/image";
import { DecorIcon } from "@/components/decor-icon";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Integration = {
  name: string;
  shortDescription: string;
  details: string;
  logo: string;
  icon?: React.ReactNode;
};

const LARGE_BRAND_LOGOS = new Set(["WOOP", "ATHR"]);

const data: Integration[] = SERVICES.map((service, index) => ({
  name: service.title,
  shortDescription: service.shortDescription,
  details: service.details,
  logo: service.logo,
  ...(index === 2 ? { icon: <DecorIcon position="bottom-left" /> } : {}),
  ...(index === 5 ? { icon: <DecorIcon position="bottom-right" /> } : {}),
}));

export function Integrations() {
  return (
    <div className="relative w-full border">
      <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3">
        {data.map((item) => (
          <IntegrationCard integration={item} key={item.name}>
            {item.icon}
          </IntegrationCard>
        ))}
      </div>
      <DecorIcon position="top-left" />
      <DecorIcon position="top-right" />
      <DecorIcon position="bottom-left" />
      <DecorIcon position="bottom-right" />
    </div>
  );
}

function IntegrationCard({
  integration,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  integration: Integration;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-start gap-4 bg-background p-4 text-start md:p-6 md:even:bg-background/75",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "pointer-events-none flex shrink-0 select-none items-center justify-start",
          LARGE_BRAND_LOGOS.has(integration.name)
            ? "h-14 w-36 md:h-16 md:w-40"
            : "h-10 w-24",
        )}
      >
        <Image
          src={integration.logo}
          alt={`${integration.name} logo`}
          width={LARGE_BRAND_LOGOS.has(integration.name) ? 160 : 96}
          height={LARGE_BRAND_LOGOS.has(integration.name) ? 64 : 40}
          className={cn(
            "w-auto max-w-full object-contain object-left",
            LARGE_BRAND_LOGOS.has(integration.name)
              ? "h-12 md:h-14"
              : "h-8",
          )}
        />
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <p className="text-xs leading-[1.6] text-muted-foreground md:text-sm">
          {integration.shortDescription}
        </p>
        <p className="text-xs leading-[1.65] text-body md:text-[0.8125rem]">
          {integration.details}
        </p>
      </div>
      {children}
    </div>
  );
}
