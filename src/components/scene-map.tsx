import { useState } from "react";

type Pin = {
  id: string;
  name: string;
  coord: string;
  region: string;
  // percent positions on the SVG viewport
  x: number;
  y: number;
  blurb: string;
};

const PINS: Pin[] = [
  { id: "tdp", name: "Torres del Paine", coord: "51°00′S 73°00′W", region: "Patagonia", x: 38, y: 30, blurb: "Granite cathedrals carved by Pleistocene ice." },
  { id: "ush", name: "Ushuaia", coord: "54°48′S 68°18′W", region: "Tierra del Fuego", x: 60, y: 62, blurb: "The southernmost city. Gateway to the white continent." },
  { id: "cape", name: "Cape Horn", coord: "55°59′S 67°16′W", region: "Cabo de Hornos", x: 64, y: 78, blurb: "Where the Atlantic and Pacific collide in fury." },
  { id: "ant", name: "Antarctic Peninsula", coord: "64°00′S 60°00′W", region: "Antártica Chilena", x: 50, y: 95, blurb: "An ice continent twice the size of Australia." },
  { id: "pa", name: "Puerto Williams", coord: "54°56′S 67°37′W", region: "Beagle Channel", x: 62, y: 70, blurb: "Officially the world's southernmost town." },
  { id: "tf", name: "Cordillera Darwin", coord: "54°40′S 69°30′W", region: "Tierra del Fuego", x: 52, y: 60, blurb: "An unmapped sub-Antarctic ice field." },
];

export function SceneMap() {
  const [active, setActive] = useState<Pin>(PINS[1]);

  return (
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-stretch">
      <div className="relative aspect-[4/5] lg:aspect-auto bg-card border border-border overflow-hidden grain">
        {/* topo background */}
        <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ocean" cx="50%" cy="40%" r="80%">
              <stop offset="0%" stopColor="oklch(0.22 0.05 245)" />
              <stop offset="100%" stopColor="oklch(0.10 0.03 250)" />
            </radialGradient>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="oklch(0.78 0.10 220 / 0.08)" strokeWidth="0.1" />
            </pattern>
          </defs>
          <rect width="100" height="120" fill="url(#ocean)" />
          <rect width="100" height="120" fill="url(#grid)" />

          {/* stylized landmasses */}
          <path
            d="M 30,5 Q 38,15 36,25 Q 42,32 38,42 Q 45,50 40,58 Q 50,62 48,72 Q 58,75 54,85 L 62,90 L 58,100 L 70,108 Z"
            fill="oklch(0.26 0.04 248)"
            stroke="oklch(0.78 0.10 220 / 0.5)"
            strokeWidth="0.3"
          />
          <path d="M 55,70 Q 65,72 68,80 L 62,86 Z" fill="oklch(0.26 0.04 248)" stroke="oklch(0.78 0.10 220 / 0.4)" strokeWidth="0.2" />
          <path d="M 45,95 Q 55,98 58,108 L 50,115 L 42,110 Z" fill="oklch(0.26 0.04 248)" stroke="oklch(0.78 0.10 220 / 0.3)" strokeWidth="0.2" opacity="0.7" />

          {/* expedition route line */}
          <path
            d="M 38,30 Q 50,45 60,62 Q 64,72 64,78"
            fill="none"
            stroke="oklch(0.86 0.06 215 / 0.6)"
            strokeWidth="0.3"
            strokeDasharray="0.8 0.6"
          />

          {PINS.map((p) => (
            <g key={p.id} onClick={() => setActive(p)} className="cursor-pointer">
              <circle cx={p.x} cy={p.y} r={active.id === p.id ? 1.6 : 1} fill="oklch(0.86 0.06 215)" className="animate-beam" />
              <circle cx={p.x} cy={p.y} r={active.id === p.id ? 3 : 2} fill="none" stroke="oklch(0.86 0.06 215 / 0.5)" strokeWidth="0.15" />
            </g>
          ))}
        </svg>

        {/* corner coords */}
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">N 48°00′</div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">S 65°00′</div>
        <div className="absolute top-4 right-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">Scale 1:8 000 000</div>
      </div>

      <div className="flex flex-col">
        <div className="text-xs uppercase tracking-coord text-glacier">Cartograph · Sector {active.id.toUpperCase()}</div>
        <h3 className="font-display text-4xl md:text-5xl mt-3 text-ice">{active.name}</h3>
        <div className="font-mono text-xs text-muted-foreground mt-2">{active.coord} · {active.region}</div>
        <p className="mt-6 text-base text-muted-foreground leading-relaxed">{active.blurb}</p>

        <div className="mt-8 hairline pt-6 grid grid-cols-2 gap-3">
          {PINS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p)}
              className={`text-left p-3 border transition-colors ${
                active.id === p.id
                  ? "border-glacier/60 bg-glacier/5 text-ice"
                  : "border-border text-muted-foreground hover:text-ice hover:border-glacier/40"
              }`}
            >
              <div className="text-xs uppercase tracking-coord">{p.name}</div>
              <div className="font-mono text-[10px] mt-1 opacity-70">{p.coord}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
