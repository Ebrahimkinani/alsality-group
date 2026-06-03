"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MobileNav } from "@/components/layout/MobileNav";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { HamburgerIcon } from "@/components/ui/HamburgerIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const shadow = useTransform(
    scrollY,
    [0, 40],
    ["0 0 0 rgba(0,0,0,0)", "0 4px 24px rgba(0,0,0,0.06)"],
  );

  return (
    <>
      <motion.header
        style={{ boxShadow: shadow }}
        className="sticky top-0 z-50 bg-background"
      >
        <div className="page-gutter mx-auto flex h-(--nav-height) w-full items-center justify-between gap-4 tablet:h-(--nav-height-desktop)">
          <Link
            href="#home"
            className="flex shrink-0 items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <BrandIcon className="h-9 w-9 tablet:h-11 tablet:w-11" />
            <span className="text-[0.9375rem] font-bold tracking-[0.02em] text-foreground tablet:text-base">
              {SITE.brandDisplay}
            </span>
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-8 desktop:flex"
            aria-label="Main"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base transition-colors",
                  link.href === "#home"
                    ? "font-semibold text-foreground"
                    : "font-normal text-nav-link hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 tablet:gap-4">
            <ArrowButton
              href="#contact"
              variant="dark"
              className="hidden tablet:inline-flex"
            >
              Contact Us Now
            </ArrowButton>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center desktop:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </motion.header>
      <MobileNav isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
