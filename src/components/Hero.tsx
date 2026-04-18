export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video pozadina */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Tamni overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Sadržaj */}
      <div className="relative h-full flex flex-col justify-between px-6 md:px-14 py-24 pt-28 md:pt-24 text-white">

        {/* Gornji deo — tagline */}
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-white/60">
            Dizajn. Vizuelna komunikacija. Proces.
          </p>
        </div>

        {/* Srednji/donji deo — glavni tekst */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <div>
            <h1 className="text-[clamp(3.5rem,14vw,10rem)] font-black leading-none tracking-tight uppercase font-[family-name:var(--font-orbitron)]">
              CoaCoa
            </h1>
            <p className="mt-3 md:mt-4 text-sm tracking-[0.2em] uppercase text-white/50">
              Grafički dizajn & razmišljanja
            </p>
          </div>

          <div className="max-w-xs md:max-w-sm md:text-right">
            <p className="text-sm leading-relaxed text-white/70">
              Mesto gde pišem o dizajnu — procesu, alatima i odlukama koje
              se ne vide u finalnom proizvodu.
            </p>
          </div>
        </div>

        {/* Scroll indikator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] tracking-[0.3em] uppercase">Skroluj</span>
          <div className="w-px h-10 bg-white/30" />
        </div>

      </div>
    </section>
  );
}
