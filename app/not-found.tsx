import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <section className="bg-celac-navy min-h-screen flex items-center justify-center px-4 text-center">
      <div className="max-w-xl">
        <span className="inline-flex items-center mb-6 px-4 py-1.5 rounded-md border border-celac-green/40 bg-celac-green/10 text-celac-green text-xs font-semibold tracking-widest uppercase">
          Error 404
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          Página no encontrada
        </h1>
        <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-10">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/es"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-md hover:bg-celac-green-hover transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
