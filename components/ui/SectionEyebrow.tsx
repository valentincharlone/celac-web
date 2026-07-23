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
        className={`uppercase tracking-wide text-sm font-medium ${
          tone === "dark" ? "text-celac-green" : "text-gray-400"
        }`}
      >
        {children}
      </span>
      <span className="h-px w-10 bg-celac-green" />
    </div>
  );
}
