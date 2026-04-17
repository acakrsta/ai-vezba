"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Nešto nije pošlo po planu. Pokušaj ponovo.");
        return;
      }

      setStatus("success");
      setMessage("Prijava uspešna! Proveri inbox.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Greška u mreži. Pokušaj ponovo.");
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Video pozadina */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/newsletter.mp4" type="video/mp4" />
      </video>

      {/* Tamni overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Sadržaj */}
      <div className="relative flex flex-col items-center justify-center px-6 py-32 text-center text-white">
        <p className="text-xs tracking-[0.25em] uppercase text-white/50 mb-4">
          Newsletter
        </p>

        <h2 className="text-[clamp(2.5rem,8vw,5rem)] font-black leading-none tracking-tight uppercase font-[family-name:var(--font-orbitron)] mb-6">
          Ostani u toku
        </h2>

        <p className="text-sm leading-relaxed text-white/65 max-w-sm mb-10">
          Novi tekstovi o dizajnu direktno u tvoj inbox.
        </p>

        {status === "success" ? (
          <p className="text-sm tracking-[0.15em] uppercase text-white/80">
            {message}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tvoj@email.com"
              disabled={status === "loading"}
              className="flex-1 bg-white/10 border border-white/20 rounded-none px-4 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-white/60 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Šaljem..." : "Pretplati se"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-xs text-red-400">{message}</p>
        )}
      </div>
    </section>
  );
}
