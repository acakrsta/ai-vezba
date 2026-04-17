"use client";

interface ShareButtonsProps {
  title: string;
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col items-center gap-3">
      <p className="text-sm text-foreground/50">Podeli ovaj post</p>
      <div className="flex items-center gap-4">
        {links.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Podeli na ${label}`}
            className="p-2 rounded-full border border-foreground/20 text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
