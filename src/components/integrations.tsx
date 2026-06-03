import { DecorIcon } from "@/components/decor-icon";
import { SERVICE_ICONS } from "@/components/ui/ServiceIcons";
import { SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Integration = {
  name: string;
  shortDescription: string;
  details: string;
  logo: React.ReactNode;
  icon?: React.ReactNode;
};

const data: Integration[] = SERVICES.map((service, index) => {
  const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];
  return {
    name: service.title,
    shortDescription: service.shortDescription,
    details: service.details,
    logo: <Icon className="size-8 text-foreground" />,
    ...(index === 2 ? { icon: <DecorIcon position="bottom-left" /> } : {}),
    ...(index === 5 ? { icon: <DecorIcon position="top-left" /> } : {}),
    ...(index === 8 ? { icon: <DecorIcon position="bottom-right" /> } : {}),
  };
});

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
      <div className="pointer-events-none flex size-8 shrink-0 select-none items-center justify-center">
        {integration.logo}
      </div>
      <div className="flex min-w-0 flex-col gap-2">
        <h3 className="font-semibold text-foreground">{integration.name}</h3>
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
