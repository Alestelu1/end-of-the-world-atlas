import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { Check, ExternalLink } from "lucide-react";
import torres from "@/assets/torres-paine.jpg";
import cape from "@/assets/cape-horn.jpg";
import ant from "@/assets/antarctica.jpg";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Travel — Guided Expeditions to the End of the World" },
      { name: "description", content: "Limited-departure expeditions across Patagonia, Cape Horn and Chilean Antarctica. Premium logistics, scientific guides, small groups." },
      { property: "og:title", content: "Travel — Guided Expeditions" },
      { property: "og:description", content: "Curated journeys to the southern frontier." },
    ],
  }),
  component: TravelPage,
});

const tiers = [
  {
    img: torres, code: "EXP-A", name: "Patagonia Granite",
    price: "$ 4,200", duration: "9 days", group: "8 max",
    inc: ["Torres del Paine W trek", "Glacier Grey navigation", "Lodge accommodations", "Naturalist guide"],
    cta: "Reserve",
  },
  {
    img: cape, code: "EXP-B", name: "Cape Horn Sail",
    price: "$ 7,800", duration: "6 days", group: "6 max",
    inc: ["Beagle Channel sailing yacht", "Cape Horn landing", "Lighthouse keeper visit", "All meals on board"],
    featured: true,
    cta: "Reserve",
  },
  {
    img: ant, code: "EXP-C", name: "Antarctic Crossing",
    price: "$ 12,400", duration: "12 days", group: "100 max",
    inc: ["Drake Passage transit", "Zodiac landings", "Glaciologist lectures", "Polar parka included"],
    cta: "Request slot",
  },
];

const partners = [
  { name: "Quark Expeditions", url: "#", note: "Antarctica" },
  { name: "Aurora Expeditions", url: "#", note: "Polar voyages" },
  { name: "Explora Lodges", url: "#", note: "Patagonia" },
  { name: "Australis Cruises", url: "#", note: "Cape Horn" },
];

function TravelPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-40 pb-20 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Travel · Limited Departures" title="Guided expeditions to the southern frontier" description="Three signature journeys, conceived with glaciologists, sailors and former Antarctic crew." />
      </section>

      <section className="pb-24 max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <article key={t.code} className={`relative flex flex-col border ${t.featured ? "border-glacier shadow-glow" : "border-border"} bg-card overflow-hidden`}>
            {t.featured && (
              <div className="absolute top-4 right-4 z-10 font-mono text-[9px] tracking-coord text-primary-foreground bg-glacier px-2 py-1 uppercase">Signature</div>
            )}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={t.img} alt={t.name} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-aurora" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-coord text-ice/80 uppercase">{t.code}</div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="font-display text-3xl text-ice">{t.name}</h3>
              <div className="mt-2 flex gap-4 text-[10px] uppercase tracking-coord text-muted-foreground">
                <span>{t.duration}</span><span>·</span><span>{t.group}</span>
              </div>
              <div className="mt-6 font-display text-4xl text-glacier">{t.price}<span className="text-sm text-muted-foreground"> / pax</span></div>

              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground flex-1">
                {t.inc.map((i) => (
                  <li key={i} className="flex gap-2.5"><Check className="w-4 h-4 text-glacier shrink-0 mt-0.5" />{i}</li>
                ))}
              </ul>

              <button className={`mt-8 w-full py-3.5 text-xs uppercase tracking-coord transition-colors ${t.featured ? "bg-glacier text-primary-foreground hover:bg-ice" : "border border-glacier/40 text-ice hover:bg-glacier/10"}`}>
                {t.cta}
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="py-24 border-y border-border bg-card/20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Partner Operators · Affiliate" title="Vetted by us, booked through them" description="When a tier is fully booked, we partner with these operators and earn a small commission to support the atlas." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {partners.map((p) => (
              <a key={p.name} href={p.url} className="group flex items-center justify-between p-6 border border-border hover:border-glacier/60 hover:bg-card transition-colors">
                <div>
                  <div className="font-display text-xl text-ice">{p.name}</div>
                  <div className="text-[10px] uppercase tracking-coord text-muted-foreground mt-1">{p.note}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-glacier group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
