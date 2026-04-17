# O projektu

Ovo je projekat gde cemo kreirati sajt sa blogom.

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
- **Stilizovanje**: Tailwind CSS v4 sa PostCSS-om
- **Fontovi**: Geist Sans i Geist Mono putem `next/font/google`, dostupni kao CSS promenljive `--font-geist-sans` i `--font-geist-mono`

### Ključne konvencije

- Import alias `@/*` mapira na `src/*`
- Sve rute se nalaze u `src/app/` koristeći App Router konvencije za fajlove (`page.tsx`, `layout.tsx`, `loading.tsx`, itd.)
- Koreni layout (`src/app/layout.tsx`) definiše `<html>` i `<body>` — ovde dodavati globalne provajdere i zajednički UI
- Globalni stilovi se nalaze u `src/app/globals.css`

### Struktura bloga (za izgradnju)

Ovaj projekat je blog sajt. Kako se dodaje funkcionalnost bloga, očekivana struktura je:

- `src/app/blog/` — blog grupa ruta
- `src/app/blog/[slug]/page.tsx` — stranice pojedinih postova
- `src/components/` — deljene UI komponente
- `src/lib/` — helperi za dohvatanje podataka (npr. čitanje MDX/markdown postova)
- `src/content/posts/` — izvorni fajlovi blog postova (ako je zasnovano na fajlovima)
