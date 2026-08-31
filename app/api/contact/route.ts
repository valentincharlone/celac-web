import { NextResponse } from "next/server";
import { Resend } from "resend";

const CONTACT_EMAIL = "info@celac.cloud";

/* El formulario es público y sin captcha: los topes evitan que un envío
   automatizado mande un cuerpo enorme, y el `replyTo` tiene que ser una
   dirección con forma válida o Resend rechaza el mensaje entero. */
const LIMITES = { name: 120, email: 200, phone: 40, subject: 200, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cuerpo inválido." }, { status: 400 });
  }

  const { name, email, phone, subject, message } = (body ?? {}) as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  const limpio = (v: string | undefined, max: number) =>
    typeof v === "string" ? v.trim().slice(0, max) : "";

  const datos = {
    name: limpio(name, LIMITES.name),
    email: limpio(email, LIMITES.email),
    phone: limpio(phone, LIMITES.phone),
    subject: limpio(subject, LIMITES.subject),
    message: limpio(message, LIMITES.message),
  };

  if (!datos.name || !datos.email || !datos.message) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(datos.email)) {
    return NextResponse.json(
      { error: "El correo electrónico no es válido." },
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
    replyTo: datos.email,
    subject: datos.subject
      ? `[Contacto CELAC] ${datos.subject}`
      : "[Contacto CELAC] Nuevo mensaje",
    text: `Nombre: ${datos.name}\nEmail: ${datos.email}\nTeléfono: ${datos.phone || "-"}\nAsunto: ${datos.subject || "-"}\n\nMensaje:\n${datos.message}`,
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
