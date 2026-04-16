import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight font-[family-name:var(--font-geist-sans)]"
        >
          CoaCoa
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Početna
              </Link>
            </li>
            <li>
              <Link
                href="/o-meni"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                O meni
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
