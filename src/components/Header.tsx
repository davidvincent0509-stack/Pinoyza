"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/employers", label: "For Employers" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [overHero, setOverHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const hero = document.getElementById("site-hero");

    if (!hero) {
      setOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setOverHero(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-72px 0px 0px 0px",
        threshold: 0,
      }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const transparent = overHero && !mobileOpen;

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-300 ease-in-out",
        transparent
          ? "border-b border-transparent bg-transparent shadow-none"
          : "border-b border-slate-200 bg-white shadow-sm"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo
          variant={transparent ? "light" : "dark"}
          size="md"
          context="navbar"
          navTransparent={transparent}
        />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300",
                transparent
                  ? "text-slate-200 hover:bg-white/10 hover:text-white"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href="/employers"
            variant={transparent ? "ghost-light" : "ghost"}
            size="sm"
          >
            Hire Talent
          </ButtonLink>
          <ButtonLink href="/apply" size="sm">
            Apply Now
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-300 lg:hidden",
            transparent
              ? "text-white hover:bg-white/10"
              : "text-slate-800 hover:bg-slate-100"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <ButtonLink href="/employers" variant="outline" className="w-full">
                Hire Talent
              </ButtonLink>
              <ButtonLink href="/apply" className="w-full">
                Apply Now
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
