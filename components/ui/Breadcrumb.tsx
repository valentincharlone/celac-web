import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="flex items-center justify-center flex-wrap gap-1.5 mb-5 text-xs text-white/40"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {item.href ? (
            <Link href={item.href} className="hover:text-white/70 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/70">{item.label}</span>
          )}
          {i < items.length - 1 && <ChevronRight size={12} />}
        </span>
      ))}
    </nav>
  );
}
