import Link from "next/link";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="section-container">
        <div className="grid gap-12 tablet:grid-cols-2 desktop:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="#home" className="flex items-center gap-2 text-white">
              <BrandIcon variant="dark" className="h-12 w-12" />
              <span className="font-display text-xl font-semibold">
                {SITE.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
              Pages
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/-/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white/60">
              Social
            </h3>
            <ul className="mt-4 flex gap-4">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <li key={social}>
                  <a
                    href="#"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/70 tablet:flex-row tablet:items-center tablet:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <a href="#home" className="transition-colors hover:text-white">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
