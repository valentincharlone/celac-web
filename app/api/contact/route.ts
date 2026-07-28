import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "info@celac.cloud";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, subject, message } = body as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada en .env.local");
    return NextResponse.json(
      { error: "El servicio de correo no está configurado." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "CELAC Contacto <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: email,
    subject: subject ? `[Contacto CELAC] ${subject}` : "[Contacto CELAC] Nuevo mensaje",
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone || "-"}\nAsunto: ${subject || "-"}\n\nMensaje:\n${message}`,
  });

  if (error) {
    console.error("Error enviando email vía Resend:", error);
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
