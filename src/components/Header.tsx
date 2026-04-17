"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-foreground/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-8 md:px-14 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CoaCoa"
            width={896}
            height={1195}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            {[
              { href: "/", label: "Početna" },
              { href: "/o-meni", label: "O meni" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
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
      </div>
    </header>
  );
}
