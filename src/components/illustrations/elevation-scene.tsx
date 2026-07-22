/**
 * Stylised placeholder scene for the hero's "Elevation Reveal" — line-art
 * layers standing in for real site photography/renders (see
 * src/content/site-config.ts do-not-fabricate list). Abstract on purpose:
 * a hill line, a boutique low-rise silhouette with a 14-window grid (one
 * per residence), and a foreground tree line for parallax depth.
 */

export function HillLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 500"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 420 C 180 320, 340 460, 520 360 C 700 260, 860 180, 1040 260 C 1220 340, 1360 260, 1600 340 L1600 500 L0 500 Z"
        fill="var(--stone)"
        opacity={0.55}
      />
      <path
        d="M0 460 C 220 400, 420 480, 640 420 C 860 360, 1040 300, 1240 380 C 1400 440, 1500 420, 1600 460 L1600 500 L0 500 Z"
        fill="var(--basalt)"
        opacity={0.28}
      />
    </svg>
  );
}

export function BuildingSilhouette({ className }: { className?: string }) {
  const cols = 7;
  const rows = 2;
  const windowW = 34;
  const windowH = 44;
  const gapX = 22;
  const gapY = 26;
  const startX = 46;
  const startY = 56;

  const windows = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: startX + col * (windowW + gapX),
      y: startY + row * (windowH + gapY),
      lit: (col + row) % 3 !== 0,
    };
  });

  return (
    <svg
      viewBox="0 0 500 260"
      className={className}
      aria-hidden="true"
      role="img"
      aria-label="Illustrated silhouette of the fourteen-residence building"
    >
      <rect x="16" y="24" width={468} height={220} rx="6" fill="var(--card)" stroke="var(--basalt)" strokeOpacity={0.35} strokeWidth={1.5} />
      {windows.map((w, i) => (
        <rect
          key={i}
          x={w.x}
          y={w.y}
          width={windowW}
          height={windowH}
          rx="2"
          fill={w.lit ? "var(--turmeric)" : "var(--basalt)"}
          fillOpacity={w.lit ? 0.55 : 0.18}
        />
      ))}
    </svg>
  );
}

export function TreeLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1600 260"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      aria-hidden="true"
    >
      {[
        { cx: 90, r: 70 },
        { cx: 220, r: 50 },
        { cx: 1360, r: 60 },
        { cx: 1500, r: 80 },
        { cx: 1470, r: 40 },
      ].map((t, i) => (
        <circle key={i} cx={t.cx} cy={260 - t.r * 0.6} r={t.r} fill="var(--canopy)" opacity={0.85} />
      ))}
      <rect x="0" y="220" width="1600" height="40" fill="var(--canopy)" opacity={0.9} />
    </svg>
  );
}
