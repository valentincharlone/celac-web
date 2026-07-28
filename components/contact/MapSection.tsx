"use client";

import dynamic from "next/dynamic";

const ContactMap = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-celac-gray animate-pulse" />,
});

export default function MapSection() {
  return (
    <section className="h-[420px] w-full">
      <ContactMap />
    </section>
  );
}
