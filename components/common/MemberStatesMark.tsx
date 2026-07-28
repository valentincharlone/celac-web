"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// 33 puntos = 33 Estados Miembros de la CELAC, dispuestos en un racimo
// simétrico (no un mapa ni una red): cada Estado es un punto propio,
// agrupados en una misma forma.
const ROWS = [3, 4, 6, 7, 6, 4, 3] as const;
const COL_SPACING = 30;
const ROW_SPACING = 32;
const ACCENT_INDICES: Record<number, string> = {
  5: "var(--color-celac-sky)",
  16: "var(--color-celac-amber)",
  27: "var(--color-celac-green)",
};

const WIDTH = (Math.max(...ROWS) - 1) * COL_SPACING + 64;
const HEIGHT = (ROWS.length - 1) * ROW_SPACING + 64;

function buildDots() {
  const dots: { x: number; y: number; r: number; fill: string; op: number }[] =
    [];
  const startY = HEIGHT / 2 - ((ROWS.length - 1) * ROW_SPACING) / 2;
  let i = 0;
  ROWS.forEach((count, row) => {
    const rowWidth = (count - 1) * COL_SPACING;
    const startX = WIDTH / 2 - rowWidth / 2;
    for (let col = 0; col < count; col++) {
      dots.push({
        x: startX + col * COL_SPACING,
        y: startY + row * ROW_SPACING,
        r: 4.5 + Math.abs(Math.sin(i * 12.9898)) * 2.5,
        fill: ACCENT_INDICES[i] ?? "var(--color-celac-green)",
        op: 0.45 + Math.abs(Math.sin(i * 4.321)) * 0.45,
      });
      i++;
    }
  });
  return dots;
}

const DOTS = buildDots();

export default function MemberStatesMark() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col items-center gap-5">
      <svg
        width={WIDTH}
        height={HEIGHT}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={t("memberStatesMarkAlt")}
      >
        {DOTS.map((d, idx) => (
          <motion.circle
            key={idx}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill={d.fill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: d.op, scale: 1 }}
            transition={{
              delay: 0.4 + idx * 0.014,
              duration: 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </svg>
      <span className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">
        {t("memberStatesMarkLabel")}
      </span>
    </div>
  );
}
