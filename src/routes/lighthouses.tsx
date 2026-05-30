import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import lighthouse from "@/assets/lighthouse.jpg";
import cape from "@/assets/cape-horn.jpg";
import { Radio } from "lucide-react";

export const Route = createFileRoute("/lighthouses")({
  head: () => ({
    meta: [
      { title: "Lighthouses — Sentinels of the Drake Passage" },
      { name: "description", content: "An archive of the southernmost lighthouses on Earth — Cabo de Hornos, Les Éclaireurs, Evangelistas and the keepers who tend them across the Chilean south." },
      { property: "og:title", content: "Lighthouse Explorer — End of the World Atlas" },
      { property: "og:description", content: "Sentinels of the southern oceans, catalogued by coordinates and luminous range." },
      { property: "og:url", content: "https://southern-uncharted-atlas.lovable.app/lighthouses" },
    ],
    links: [
      { rel: "canonical", href: "https://southern-uncharted-atlas.lovable.app/lighthouses" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            { name: "Cabo de Hornos", lat: -55.983, lng: -67.266 },
            { name: "Les Éclaireurs", lat: -54.866, lng: -68.083 },
            { name: "Evangelistas", lat: -52.383, lng: -75.1 },
            { name: "San Isidro", lat: -53.783, lng: -70.966 },
            { name: "Magdalena Island", lat: -52.916, lng: -70.566 },
            { name: "Punta Dungeness", lat: -52.4, lng: -68.433 },
          ].map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Place",
              name: l.name,
              geo: { "@type": "GeoCoordinates", latitude: l.lat, longitude: l.lng },
            },
          })),
        }),
      },
    ],
  }),
  component: Lighthouses,
});

const lights = [
  { name: "Cabo de Hornos", coord: "55°59′S 67°16′W", built: "1991", height: "11 m", range: "12 nm", note: "The southernmost lit landfall before Antarctica." },
  { name: "Les Éclaireurs", coord: "54°52′S 68°05′W", built: "1920", height: "11 m", range: "7 nm", note: "Often confused with the 'lighthouse at the end of the world' from Verne." },
  { name: "Evangelistas", coord: "52°23′S 75°06′W", built: "1896", height: "11 m", range: "16 nm", note: "Guards the western entrance of the Strait of Magellan." },
  { name: "San Isidro", coord: "53°47′S 70°58′W", built: "1904", height: "11 m", range: "10 nm", note: "On the Brunswick Peninsula — last continental light." },
  { name: "Magdalena Island", coord: "52°55′S 70°34′W", built: "1902", height: "13 m", range: "10 nm", note: "Surrounded by 60,000 Magellanic penguins." },
  { name: "Punta Dungeness", coord: "52°24′S 68°26′W", built: "1899", height: "16 m", range: "18 nm", note: "Marks the Atlantic mouth of the Strait." },
];

function Lighthouses() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={lighthouse} alt="Lighthouse on Patagonian coast" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-16">
          <div className="text-xs uppercase tracking-coord text-glacier flex items-center gap-3">
            <span className="h-px w-10 bg-glacier" /> Lighthouse Explorer
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-ice mt-5 max-w-3xl">Sentinels of the Drake Passage</h1>
        </div>
      </section>

      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading eyebrow="Archive" title="Six lights at the world's southern wall" description="Each lighthouse is catalogued by coordinates, year of construction, focal height and luminous range." />

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-border">
          {lights.map((l, i) => (
            <div key={l.name} className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors">
              <div className="flex items-start justify-between">
                <div className="font-mono text-[10px] tracking-coord text-glacier">№ {String(i + 1).padStart(2, "0")}</div>
                <Radio className="w-4 h-4 text-glacier animate-beam" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl text-ice mt-4">{l.name}</h3>
              <div className="font-mono text-xs text-muted-foreground mt-2">{l.coord}</div>
              <p className="text-sm text-muted-foreground mt-5 leading-relaxed">{l.note}</p>

              <div className="mt-6 hairline pt-5 grid grid-cols-3 gap-3 text-[10px] uppercase tracking-coord">
                <div><div className="text-muted-foreground">Built</div><div className="text-ice mt-1">{l.built}</div></div>
                <div><div className="text-muted-foreground">Height</div><div className="text-ice mt-1">{l.height}</div></div>
                <div><div className="text-muted-foreground">Range</div><div className="text-ice mt-1">{l.range}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <img src={cape} alt="Cape Horn" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="font-display text-3xl md:text-5xl text-ice text-balance leading-[1.15]">
            "I am the last light before the white. <span className="text-glacier italic font-light">After me, only the wind keeps watch.</span>"
          </p>
          <div className="mt-6 font-mono text-[10px] tracking-coord text-muted-foreground">— Cape Horn keeper, 1979</div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
