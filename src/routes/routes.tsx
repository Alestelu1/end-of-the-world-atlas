import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { Clock, MapPin, Mountain, Lock, ArrowRight } from "lucide-react";
import torres from "@/assets/torres-paine.jpg";
import cape from "@/assets/cape-horn.jpg";
import ant from "@/assets/antarctica.jpg";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "Expedition Routes — End of the World Atlas" },
      { name: "description", content: "Premium guided routes across Patagonia, Cape Horn and the Antarctic Peninsula. Multi-day itineraries with maps and field notes." },
      { property: "og:title", content: "Expedition Routes" },
      { property: "og:description", content: "Premium itineraries across the southern frontier." },
    ],
  }),
  component: RoutesPage,
});

const routes = [
  {
    img: torres,
    code: "RT-01",
    name: "Paine Circuit",
    days: "9 days",
    distance: "128 km",
    elev: "+4,200 m",
    price: "$ 24",
    desc: "The complete loop around the Paine massif. Granite towers, hanging glaciers and the John Gardner pass.",
  },
  {
    img: cape,
    code: "RT-02",
    name: "Beagle to Cape Horn",
    days: "6 days",
    distance: "Sail · 540 nm",
    elev: "Sea level",
    price: "$ 32",
    desc: "Sail the Beagle Channel into the Drake Passage and round the mythic Cape Horn.",
  },
  {
    img: ant,
    code: "RT-03",
    name: "Antarctic Crossing",
    days: "12 days",
    distance: "1,800 nm",
    elev: "—",
    price: "$ 48",
    desc: "Punta Arenas → Puerto Williams → South Shetland → Antarctic Peninsula. Zodiac landings, glaciologist briefings.",
  },
];

function RoutesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Expedition Routes" title="Itineraries drawn at the edge of the world" description="Each route is a downloadable premium guide — GPX tracks, lighthouse waypoints, weather windows, lodging." />
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12 space-y-6">
        {routes.map((r, i) => (
          <article key={r.code} className="group grid lg:grid-cols-[1.2fr_1fr] gap-0 border border-border bg-card hover:border-glacier/60 transition-colors">
            <div className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-ice/80 uppercase">{r.code}</div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-coord text-glacier">Premium Route Guide</div>
              <h3 className="font-display text-4xl md:text-5xl text-ice mt-3">{r.name}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{r.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-xs uppercase tracking-coord">
                <div><Clock className="w-4 h-4 text-glacier mb-2" /><div className="text-muted-foreground">Length</div><div className="text-ice mt-1">{r.days}</div></div>
                <div><MapPin className="w-4 h-4 text-glacier mb-2" /><div className="text-muted-foreground">Distance</div><div className="text-ice mt-1">{r.distance}</div></div>
                <div><Mountain className="w-4 h-4 text-glacier mb-2" /><div className="text-muted-foreground">Elevation</div><div className="text-ice mt-1">{r.elev}</div></div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="inline-flex items-center gap-3 bg-ice text-primary-foreground px-6 py-3 text-xs uppercase tracking-coord hover:bg-glacier transition-colors">
                  <Lock className="w-3.5 h-3.5" /> Unlock guide · {r.price}
                </button>
                <Link to="/travel" className="text-xs uppercase tracking-coord text-glacier hover:text-ice inline-flex items-center gap-2">
                  Book guided <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
