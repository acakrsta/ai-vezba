import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O meni — CoaCoa",
  description: "Kratko o meni i ovom blogu.",
};

export default function OmeniPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">O meni</h1>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p>
          Ovo je stranica gde možete saznati nešto više o autoru ovog bloga.
          Slobodno je uredite prema sebi.
        </p>
      </div>
    </div>
  );
}
