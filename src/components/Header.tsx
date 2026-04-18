"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "/o-meni", label: "O meni" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Zatvori meni pri promeni rute
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Sprečava scroll pozadine dok je meni otvoren
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-sm border-b border-foreground/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-14 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CoaCoa"
              width={896}
              height={1195}
              className="h-14 md:h-16 w-auto"
              priority
            />
            <span
              className={`text-lg md:text-xl uppercase font-[family-name:var(--font-graffiti)] transition-colors duration-300 ${
                scrolled || menuOpen ? "text-foreground" : "text-white"
              }`}
            >
              Zglobići
            </span>
          </Link>

          {/* Desktop navigacija */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                      scrolled
                        ? "text-foreground/60 hover:text-foreground"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger dugme — vidljivo samo na mobilnom */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] transition-colors duration-300 ${
              scrolled || menuOpen ? "text-foreground" : "text-white"
            }`}
            aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobilni meni — overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="flex flex-col items-center gap-10">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-4xl font-bold tracking-[0.08em] uppercase text-foreground/80 hover:text-foreground transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
