import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white overflow-hidden">
      {/* Veliki naslov */}
      <div className="px-4 pt-16 pb-10">
        <p
          className="font-bold uppercase leading-none tracking-tight whitespace-nowrap"
          style={{ fontSize: "clamp(4rem, 17.5vw, 22rem)" }}
        >
          Zglobići
        </p>
      </div>

      {/* Separator */}
      <div className="border-t border-white/10 mx-6" />

      {/* Linkovi */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-10 text-xs tracking-[0.15em] uppercase">
        <div className="flex flex-col gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/blog" className="text-white/50 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/o-meni" className="text-white/50 hover:text-white transition-colors">
            O meni
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/blog/tags/razvoj" className="text-white/50 hover:text-white transition-colors">
            Razvoj
          </Link>
          <Link href="/blog/tags/dizajn" className="text-white/50 hover:text-white transition-colors">
            Dizajn
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="mailto:"
            className="text-white/50 hover:text-white transition-colors"
          >
            Kontakt
          </a>
          <Link href="/" className="text-white/50 hover:text-white transition-colors">
            Početna
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-8 pb-8">
        <p className="text-[11px] tracking-[0.15em] uppercase text-white/25">
          ©{currentYear} Zglobići
        </p>
      </div>
    </footer>
  );
}
