# O projektu

Blog sajt bez baze podataka ili CMS-a. Postovi se pišu kao MDX fajlovi u `src/content/posts/`, uz pomoć AI asistenta.

## Važno: Napomena o verziji Next.js-a

Ovaj projekat koristi **Next.js 16**, koji može imati izmene koje nisu unazad kompatibilne sa starijim verzijama. Pre pisanja bilo kakvog koda, pročitaj odgovarajući vodič u `node_modules/next/dist/docs/`. Obrati pažnju na obaveštenja o zastarelim funkcijama — API-ji, konvencije i struktura fajlova mogu se razlikovati od podataka iz treninga.

## Komande

```bash
npm run dev      # Pokreni razvojni server na http://localhost:3000
npm run build    # Izgradnja za produkciju
npm run start    # Pokretanje produkcijskog servera
npm run lint     # Pokretanje ESLint-a
```

Test suite još uvek nije konfigurisan.

## Arhitektura

- **Framework**: Next.js 16 sa App Router-om (`src/app/`)
- **Jezik**: TypeScript (strogi režim)
- **Stilizovanje**: Tailwind CSS v4 + `@tailwindcss/typography` (prose klase za post sadržaj)
- **Fontovi**: Geist Sans i Geist Mono putem `next/font/google`, dostupni kao CSS promenljive `--font-geist-sans` i `--font-geist-mono`
- **MDX rendering**: `next-mdx-remote/rsc` (Server Component, Turbopack kompatibilno)
- **Frontmatter parsing**: `gray-matter`
- **Vreme čitanja**: `reading-time`

### Ključne konvencije

- Import alias `@/*` mapira na `src/*`
- Sve rute se nalaze u `src/app/` koristeći App Router konvencije (`page.tsx`, `layout.tsx`, itd.)
- Koreni layout (`src/app/layout.tsx`) definiše `<html>` i `<body>`
- Globalni stilovi: `src/app/globals.css`
- `params` u Next.js 16 je **Promise** — uvek `await params` pre pristupa

### Struktura projekta

```
src/
├── app/
│   ├── layout.tsx               # Koreni layout (Header, metadata, lang="sr")
│   ├── page.tsx                 # Homepage = lista svih postova
│   ├── globals.css              # Tailwind v4 + typography plugin
│   ├── blog/
│   │   ├── page.tsx             # /blog — lista postova
│   │   ├── [slug]/
│   │   │   ├── page.tsx         # /blog/[slug] — individualni post
│   │   │   └── opengraph-image.tsx  # Auto OG slike 1200×630
│   │   └── tags/[tag]/
│   │       └── page.tsx         # /blog/tags/[tag] — filtriranje po tagu
│   └── o-meni/
│       └── page.tsx             # Stranica "O meni"
├── components/
│   ├── Header.tsx               # Navigacija (CoaCoa logo + linkovi)
│   ├── PostCard.tsx             # Kartica posta za liste
│   └── TagBadge.tsx             # Tag pill sa linkom ka /blog/tags/[tag]
├── lib/
│   └── posts.ts                 # Data layer: getAllPosts, getPostBySlug, getAllTags, getPostsByTag
├── types/
│   └── post.ts                  # PostFrontmatter + Post interfejsi
└── content/
    └── posts/                   # MDX fajlovi blog postova
        └── hello-world.mdx      # Primer posta
```

### Format blog posta (MDX frontmatter)

Svaki fajl u `src/content/posts/` mora imati:

```yaml
---
title: "Naslov posta"
date: "2026-04-16"       # YYYY-MM-DD format
description: "Kratki opis za listing i meta description."
tags: ["tag1", "tag2"]   # lowercase, crtice umesto razmaka
draft: false             # true = skriva post iz svih listinga
---
```

- `draft: true` potpuno isključuje post iz listinga i statičke generacije
- Tagovi moraju biti lowercase i koristiti crtice (npr. `"web-dev"`, ne `"Web Dev"`)
- Sadržaj posta je standardni Markdown + GFM (tabele, strikethrough) + React komponente
