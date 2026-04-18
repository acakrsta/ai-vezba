import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O meni — CoaCoa",
  description: "Grafički dizajner koji piše o dizajnu, vizuelnoj komunikaciji i procesu kreativnog rada.",
};

export default function OmeniPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 md:px-6 pt-24 md:pt-28 pb-16">
      <h1 className="text-xl md:text-2xl font-bold mb-8">O meni</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Grafički dizajner sa iskustvom u vizuelnoj komunikaciji, brendingu i
          dizajnu digitalnih proizvoda. Radim na mestima gde forma i sadržaj
          moraju da funkcionišu zajedno — gde estetika nije ukras, već deo
          poruke.
        </p>
        <p>
          Ovaj blog je mesto gde pišem o dizajnu — procesu, alatima, odlukama
          koje se ne vide u finalnom proizvodu. Ponekad o inspiraciji, ponekad o
          greškama. Uglavnom o onome što me zanima u trenutku pisanja.
        </p>
        <p>
          Ako te zanima saradnja ili imaš pitanje, slobodno se javi.
        </p>
      </div>
    </div>
  );
}
