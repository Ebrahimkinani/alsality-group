import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { IMAGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ContactFieldProps = {
  name: string;
  placeholder: string;
  type?: "text" | "email" | "tel";
  className?: string;
};

function ContactField({
  name,
  placeholder,
  type = "text",
  className,
}: ContactFieldProps) {
  return (
    <label className={cn("block flex-1", className)}>
      <span className="sr-only">{placeholder}</span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full border-0 border-b border-border-strong bg-transparent py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-body focus:border-foreground"
      />
    </label>
  );
}

export function GetInTouch() {
  return (
    <section
      id="contact"
      className="section-scroll-mt relative overflow-hidden bg-accent-blue pt-10 tablet:pt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-0">
        <Image
          src={IMAGES.contact}
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="relative z-10 page-gutter pb-10 tablet:pb-16 desktop:pb-20">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 tablet:gap-12">
          <div className="flex w-full max-w-[780px] flex-col items-center gap-4 text-center">
            <Reveal>
              <SectionBadge className="rounded-[32px] border-border-strong bg-[#f3f3f3] px-5 py-2 text-body">
                Get in Touch
              </SectionBadge>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-semibold uppercase leading-[1.1] tracking-[0.02em] text-white tablet:text-4xl desktop:text-[2.75rem]">
                Let&apos;s Build Something Exceptional Together
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
            
            </Reveal>
          </div>

          <Reveal delay={0.15} className="w-full max-w-[800px]">
            <form className="flex w-full flex-col gap-6 rounded-[32px] border border-border-strong bg-white/95 p-6 backdrop-blur-sm tablet:gap-8 tablet:p-8">
              <div className="flex flex-col gap-4 tablet:flex-row tablet:gap-10">
                <ContactField name="firstName" placeholder="First Name" />
                <ContactField name="lastName" placeholder="Last Name" />
              </div>

              <div className="flex flex-col gap-4 tablet:flex-row tablet:gap-10">
                <ContactField name="email" placeholder="Email" type="email" />
                <ContactField name="phone" placeholder="Phone" type="tel" />
              </div>

              <label className="block">
                <span className="sr-only">What Can We Help You ?</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="What Can We Help You ?"
                  className="w-full resize-y border-0 border-b border-border-strong bg-transparent py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-body focus:border-foreground"
                />
              </label>

              <Button
                type="submit"
                className="h-auto w-full rounded-full bg-foreground px-8 py-4 text-base font-medium text-background hover:bg-foreground/90"
              >
                Book a Call
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
