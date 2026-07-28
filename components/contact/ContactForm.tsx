"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-gray-200 bg-celac-gray px-4 py-3 text-sm text-celac-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-celac-green/40 focus:border-celac-green transition-colors";

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
      <div className="rounded-md border border-celac-green/30 bg-celac-green/5 p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 className="text-celac-green" size={32} />
        <p className="font-heading font-bold text-celac-navy text-lg">
          {t("successTitle")}
        </p>
        <p className="text-gray-500 text-sm">{t("successBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          required
          placeholder={t("fieldName")}
          className={inputClass}
        />
        <input
          name="phone"
          type="tel"
          placeholder={t("fieldPhone")}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          required
          placeholder={t("fieldEmail")}
          className={inputClass}
        />
        <input
          name="subject"
          type="text"
          placeholder={t("fieldSubject")}
          className={inputClass}
        />
      </div>
      <textarea
        name="message"
        required
        rows={5}
        placeholder={t("fieldMessage")}
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={15} />
          {t("errorBody")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-md hover:bg-celac-green-hover active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t("submitting")}
          </>
        ) : (
          <>
            {t("submit")}
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
