export default function SectionEyebrow({
  children,
  align = "left",
  tone = "light",
}: {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span
        /* Los tonos de antes no llegaban a AA: gray-400 daba 2.4:1 sobre
           blanco y celac-green 3.2:1 sobre el navy. */
        className={`uppercase tracking-wide text-sm font-medium ${
          tone === "dark" ? "text-celac-green-light" : "text-gray-600"
        }`}
      >
        {children}
      </span>
      <span className="h-px w-10 bg-celac-green" />
    </div>
  );
}
