"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { NAV_LINKS, SITE } from "@/lib/constants";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm desktop:hidden"
            onClick={onClose}
            aria-hidden
          />
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-16 z-50 flex max-h-[calc(100vh-4rem)] flex-col overflow-y-auto bg-background px-6 pb-8 pt-6 tablet:top-20 desktop:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 text-2xl font-semibold text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-4 border-t border-border pt-8 tablet:hidden">
              <ArrowButton href="#contact" variant="dark" onClick={onClose}>
                Contact Us Now
              </ArrowButton>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <BrandIcon className="h-10 w-10" />
              <span className="text-lg font-semibold tracking-wide">
                {SITE.brandDisplay}
              </span>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
