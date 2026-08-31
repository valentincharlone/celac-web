"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

/* placeholder en gray-600 y no gray-500: el input va sobre celac-gray, donde
   gray-500 se queda en 4.51 y roza el mínimo de AA. */
const inputClass =
  "w-full rounded-sm border border-gray-200 bg-celac-gray px-4 py-3 text-sm text-celac-navy placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-celac-green/40 focus:border-celac-green transition-colors";

/* El `placeholder` solo no alcanza como etiqueta: desaparece al escribir y no
   es un nombre accesible fiable. Cada campo lleva su <label> en sr-only, con
   el mismo texto, y el `required` nativo se encarga de anunciar cuáles son
   obligatorios. */
const FIELDS = [
  { name: "name", id: "contact-name", type: "text", label: "fieldName", required: true },
  { name: "phone", id: "contact-phone", type: "tel", label: "fieldPhone", required: false },
  { name: "email", id: "contact-email", type: "email", label: "fieldEmail", required: true },
  { name: "subject", id: "contact-subject", type: "text", label: "fieldSubject", required: false },
] as const;

export default function ContactForm() {
  const t = useTranslations("contacto");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      // role="status": el formulario desaparece y sin esto el cambio no se
      // anuncia a quien no ve la pantalla.
      <div
        role="status"
        className="rounded-sm border border-celac-green/30 bg-celac-green/5 p-8 flex flex-col items-center text-center gap-3"
      >
        <CheckCircle2 className="text-celac-green" size={32} aria-hidden />
        <p className="font-heading font-bold text-celac-navy text-lg">
          {t("successTitle")}
        </p>
        <p className="text-gray-500 text-sm">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "loading"}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map(({ name, id, type, label, required }) => (
          <div key={name}>
            <label htmlFor={id} className="sr-only">
              {t(label)}
            </label>
            <input
              id={id}
              name={name}
              type={type}
              required={required}
              autoComplete={
                { name: "name", phone: "tel", email: "email", subject: "off" }[
                  name
                ]
              }
              placeholder={t(label)}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          {t("fieldMessage")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder={t("fieldMessage")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-700">
          <AlertCircle size={15} aria-hidden />
          {t("errorBody")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-sm hover:bg-celac-green-hover active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden />
            {t("submitting")}
          </>
        ) : (
          <>
            {t("submit")}
            <Send size={16} aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
