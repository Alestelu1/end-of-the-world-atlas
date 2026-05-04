import { useState } from "react";

type Pin = {
  id: string;
  name: string;
  coord: string;
  region: string;
  x: number;
  y: number;
  blurb: string;
  kind: "city" | "cape" | "strait" | "island" | "territory";
};

// Coordinates approximated onto a 100x120 viewport centered on Chilean Patagonia
// Lon range ≈ 76°W → 64°W, Lat range ≈ 50°S → 70°S
const PINS: Pin[] = [
  {
    id: "pun",
    name: "Punta Arenas",
    coord: "53°10′S 70°55′W",
    region: "Magallanes · Chile",
    x: 44, y: 28, kind: "city",
    blurb: "Capital of Magallanes. Logistics hub for every southern expedition since 1848.",
  },
  {
    id: "mag",
    name: "Strait of Magellan",
    coord: "53°30′S 70°30′W",
    region: "Estrecho de Magallanes",
    x: 50, y: 36, kind: "strait",
    blurb: "The 570 km marine corridor first crossed by Magellan in 1520 — Atlantic to Pacific without rounding the Horn.",
  },
  {
    id: "pwm",
    name: "Puerto Williams",
    coord: "54°56′S 67°37′W",
    region: "Isla Navarino · Chile",
    x: 68, y: 56, kind: "city",
    blurb: "Officially the southernmost town on Earth. Headquarters of the Chilean Antarctic Naval Squadron.",
  },
  {
    id: "cap",
    name: "Cape Horn",
    coord: "55°59′S 67°16′W",
    region: "Cabo de Hornos · Chile",
    x: 70, y: 70, kind: "cape",
    blurb: "Southernmost headland of the Tierra del Fuego archipelago. Where the Atlantic and Pacific collide.",
  },
  {
    id: "drm",
    name: "Diego Ramírez Islands",
    coord: "56°31′S 68°43′W",
    region: "Subantarctic · Chile",
    x: 60, y: 80, kind: "island",
    blurb: "Southernmost point of the Americas. A wind-scoured archipelago 100 km SW of Cape Horn.",
  },
  {
    id: "ant",
    name: "Chilean Antarctic Territory",
    coord: "53°W → 90°W, 60°S → 90°S",
    region: "Antártica Chilena",
    x: 38, y: 105, kind: "territory",
    blurb: "1,250,000 km² claimed by Chile in 1940. Includes Bases Frei, O'Higgins and Prat.",
  },
];

const ROUTE = "M 44,28 L 50,36 L 68,56 L 70,70 L 60,80 L 38,105";

export function SceneMap() {
  const [active, setActive] = useState<Pin>(PINS[3]);

  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-stretch">
      <div className="relative aspect-[4/5] lg:aspect-auto bg-card border border-border overflow-hidden grain">
        <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ocean" cx="50%" cy="35%" r="80%">
              <stop offset="0%" stopColor="oklch(0.22 0.05 245)" />
              <stop offset="100%" stopColor="oklch(0.09 0.03 250)" />
            </radialGradient>
            <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 0 0 5" fill="none" stroke="oklch(0.78 0.10 220 / 0.07)" strokeWidth="0.1" />
            </pattern>
            <pattern id="ice" width="3" height="3" patternUnits="userSpaceOnUse">
              <path d="M 0 1.5 L 3 1.5" stroke="oklch(0.86 0.06 215 / 0.18)" strokeWidth="0.15" />
            </pattern>
          </defs>

          <rect width="100" height="120" fill="url(#ocean)" />
          <rect width="100" height="120" fill="url(#grid)" />

          {/* Continental Patagonia (Chilean side, west of the cordillera) */}
          <path
            d="M 28,0 L 44,4 Q 48,12 44,20 Q 50,26 46,32 L 52,38 Q 48,44 54,50 L 50,56 L 56,60 L 50,66 Z"
            fill="oklch(0.26 0.04 248)"
            stroke="oklch(0.78 0.10 220 / 0.5)"
            strokeWidth="0.3"
          />
          {/* Tierra del Fuego — Isla Grande */}
          <path
            d="M 52,42 L 70,46 Q 76,52 72,58 L 64,60 L 56,56 Z"
            fill="oklch(0.26 0.04 248)"
            stroke="oklch(0.78 0.10 220 / 0.5)"
            strokeWidth="0.3"
          />
          {/* Isla Navarino + Hoste */}
          <path d="M 60,58 Q 72,60 74,64 L 66,66 L 60,62 Z" fill="oklch(0.26 0.04 248)" stroke="oklch(0.78 0.10 220 / 0.4)" strokeWidth="0.2" />
          {/* Cape Horn island cluster */}
          <path d="M 68,68 L 72,70 L 70,73 L 67,71 Z" fill="oklch(0.26 0.04 248)" stroke="oklch(0.78 0.10 220 / 0.4)" strokeWidth="0.2" />
          {/* Diego Ramírez */}
          <circle cx="60" cy="80" r="0.7" fill="oklch(0.26 0.04 248)" stroke="oklch(0.78 0.10 220 / 0.4)" strokeWidth="0.15" />
          <circle cx="59" cy="81.2" r="0.4" fill="oklch(0.26 0.04 248)" stroke="oklch(0.78 0.10 220 / 0.4)" strokeWidth="0.1" />

          {/* Drake Passage label area */}
          <text x="35" y="78" fill="oklch(0.78 0.10 220 / 0.45)" fontSize="2.2" fontFamily="ui-monospace, monospace" letterSpacing="0.3">PASAJE DRAKE</text>

          {/* Antarctic Peninsula (Chilean territory) */}
          <path
            d="M 22,100 Q 32,98 38,104 Q 44,108 42,114 L 36,118 L 28,116 L 22,110 Z"
            fill="url(#ice)"
            stroke="oklch(0.78 0.10 220 / 0.5)"
            strokeWidth="0.25"
          />
          <path
            d="M 24,100 Q 34,98 40,104 Q 46,108 44,114 L 38,118 L 30,116 L 24,110 Z"
            fill="oklch(0.26 0.04 248 / 0.6)"
            stroke="oklch(0.78 0.10 220 / 0.4)"
            strokeWidth="0.2"
          />
          <text x="46" y="112" fill="oklch(0.78 0.10 220 / 0.55)" fontSize="2" fontFamily="ui-monospace, monospace" letterSpacing="0.3">TERRITORIO CHILENO ANTÁRTICO</text>

          {/* Strait of Magellan emphasis */}
          <path d="M 38,30 Q 48,32 56,40 L 60,46" fill="none" stroke="oklch(0.86 0.06 215 / 0.55)" strokeWidth="0.35" strokeDasharray="0.4 0.4" />

          {/* Expedition route through all pins */}
          <path d="M 44,28 L 50,36 L 68,56 L 70,70 L 60,80 L 38,105" fill="none" stroke="oklch(0.86 0.06 215 / 0.7)" strokeWidth="0.35" strokeDasharray="0.9 0.6" />

          {/* Pins */}
          {PINS.map((p) => {
            const isActive = active.id === p.id;
            return (
              <g key={p.id} onClick={() => setActive(p)} className="cursor-pointer">
                <circle cx={p.x} cy={p.y} r={isActive ? 3.4 : 2.4} fill="none" stroke="oklch(0.86 0.06 215 / 0.45)" strokeWidth="0.18" />
                <circle cx={p.x} cy={p.y} r={isActive ? 1.7 : 1.1} fill="oklch(0.86 0.06 215)" className="animate-beam" />
                <text
                  x={p.x + 2.5}
                  y={p.y + 0.8}
                  fill={isActive ? "oklch(0.96 0.01 220)" : "oklch(0.86 0.06 215 / 0.85)"}
                  fontSize="1.8"
                  fontFamily="ui-monospace, monospace"
                  letterSpacing="0.25"
                >
                  {p.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Cartographic chrome */}
        <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">
          Chilean Patagonia · Antártica
        </div>
        <div className="absolute top-4 right-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">Scale 1 : 8 000 000</div>
        <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">N ↑ · WGS 84</div>
        <div className="absolute bottom-4 right-4 font-mono text-[10px] tracking-coord text-glacier/80 uppercase">{active.coord}</div>
      </div>

      <div className="flex flex-col">
        <div className="text-xs uppercase tracking-coord text-glacier">Sector {active.id.toUpperCase()} · {active.kind}</div>
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
