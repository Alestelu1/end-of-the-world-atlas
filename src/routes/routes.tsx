import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { southernRoutes } from "@/data/routes";
import { ArrowRight, Compass, MapPin, Radio } from "lucide-react";

export const Route = createFileRoute("/routes")({
  head: () => ({
    meta: [
      { title: "Southern Routes - End of the World Atlas" },
      {
        name: "description",
        content:
          "Editorial route dossiers for the End of the World Atlas, focused on southern maritime corridors, channels, lighthouses and Antarctic threshold geography.",
      },
      { property: "og:title", content: "Southern Routes - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "Cartographic dossiers on austral navigation, lighthouse chains and southern channel geography.",
      },
      {
        property: "og:url",
        content: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/routes",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/routes",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Southern Routes",
          description: "Editorial-cartographic route dossiers from the End of the World Atlas.",
          itemListElement: southernRoutes.map((route, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "CreativeWork",
              name: route.name,
              description: route.desc,
              genre: "Editorial cartography",
              isPartOf: {
                "@type": "CreativeWork",
                name: "End of the World Atlas",
              },
            },
          })),
        }),
      },
    ],
  }),
  component: RoutesPage,
});

function RoutesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Southern Routes"
          title="Maritime dossiers from the southern edge"
          description="An editorial-cartographic section of End of the World Atlas, following straits, channels, lighthouses, ocean gates and Antarctic threshold geography."
        />
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12 space-y-6">
        {southernRoutes.map((r, i) => (
          <article
            key={r.code}
            className="group grid lg:grid-cols-[1.2fr_1fr] gap-0 border border-border bg-card hover:border-glacier/60 transition-colors"
          >
            <div
              className={`relative aspect-[16/9] lg:aspect-auto overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}
            >
              <img
                src={r.img}
                alt={r.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent lg:bg-gradient-to-r" />
              <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-ice/80 uppercase">
                {r.code}
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-coord text-glacier">
                Editorial Route Dossier
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-ice mt-3">{r.name}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{r.desc}</p>

              <div className="mt-6 grid grid-cols-3 gap-4 text-xs uppercase tracking-coord">
                <div>
                  <Compass className="w-4 h-4 text-glacier mb-2" />
                  <div className="text-muted-foreground">Reach</div>
                  <div className="text-ice mt-1">{r.reach}</div>
                </div>
                <div>
                  <MapPin className="w-4 h-4 text-glacier mb-2" />
                  <div className="text-muted-foreground">Charted span</div>
                  <div className="text-ice mt-1">{r.distance}</div>
                </div>
                <div>
                  <Radio className="w-4 h-4 text-glacier mb-2" />
                  <div className="text-muted-foreground">Signals</div>
                  <div className="text-ice mt-1">{r.signal}</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/atlas"
                  className="inline-flex items-center gap-3 bg-ice text-primary-foreground px-6 py-3 text-xs uppercase tracking-coord hover:bg-glacier transition-colors"
                >
                  Explore atlas context
                </Link>
                <Link
                  to="/lighthouses"
                  className="text-xs uppercase tracking-coord text-glacier hover:text-ice inline-flex items-center gap-2"
                >
                  Explore beacons <ArrowRight className="w-4 h-4" />
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
