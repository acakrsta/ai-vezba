import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== "string") {
    return NextResponse.json({ error: "Neispravan zahtev." }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      { error: "Email adresa nije ispravna." },
      { status: 422 }
    );
  }

  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  const { error } = await resend.emails.send({
    from,
    to: email,
    subject: "Dobrodošao/la na CoaCoa newsletter 👋",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #171717;">
        <h1 style="font-size: 2rem; font-weight: 900; margin-bottom: 0.5rem;">CoaCoa</h1>
        <p style="color: #555; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 2rem;">
          Dizajn · Vizuelna komunikacija · Proces
        </p>
        <p style="font-size: 1rem; line-height: 1.7;">
          Hvala što si se pretplatio/la! Svaki novi tekst o dizajnu, alatima i procesu kreativnog rada
          stiže direktno na ovaj email.
        </p>
        <p style="font-size: 0.9rem; color: #888; margin-top: 2rem;">
          Ako ovo nisi ti, slobodno ignoriši ovaj email.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[newsletter] Resend greška:", error);
    return NextResponse.json(
      { error: "Slanje emaila nije uspelo. Pokušaj ponovo." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
