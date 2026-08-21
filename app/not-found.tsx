import Image from "next/image";
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4 text-center overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-heading font-bold text-[16rem] sm:text-[22rem] text-celac-gray leading-none"
      >
        404
      </span>
      <div className="relative max-w-xl">
        <Image
          src="/images/logo-celac-color.png"
          alt="CELAC"
          width={200}
          height={64}
          className="h-20 w-auto object-contain mx-auto mb-8"
          preload
        />
        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-celac-navy leading-[1.1] tracking-tight mb-5">
          Página no encontrada
        </h1>
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
          La página que buscás no existe o fue movida.
        </p>
        <Link
          href="/es"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-celac-green text-white font-semibold rounded-sm hover:bg-celac-green-hover transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
