import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Compass, MapPin } from "lucide-react";

export const Route = createFileRoute("/places")({
  head: () => ({
    meta: [
      { title: "Atlas Places — End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic index of places across Chile's far south, from Punta Arenas and Puerto Williams to Cape Horn and the Antarctic threshold.",
      },
      { property: "og:title", content: "Atlas Places — End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A documentary and cartographic index of ports, channels, capes, islands and threshold geographies across Chile's far south.",
      },
      { property: "og:url", content: "https://southern-uncharted-atlas.lovable.app/places" },
    ],
    links: [{ rel: "canonical", href: "https://southern-uncharted-atlas.lovable.app/places" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Atlas Places",
          description: "A documentary and cartographic index of places across Chile's far south.",
          itemListElement: atlasPlaces.map((place, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Place",
              name: place.name,
              description: place.summary,
              additionalType: place.category,
              address: {
                "@type": "PostalAddress",
                addressRegion: place.region,
              },
            },
          })),
        }),
      },
    ],
  }),
  component: PlacesPage,
});

function PlacesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Places"
          title="Atlas Places"
          description="Ports, channels, capes, islands and threshold geographies that shape the southern edge of Chile and the routes before Antarctica."
        />
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-border">
          {atlasPlaces.map((place, i) => (
            <article
              key={place.slug}
              className="bg-background p-7 lg:p-8 hover:bg-card transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs uppercase tracking-coord text-glacier">
                  {place.category}
                </div>
                <div className="font-mono text-[10px] tracking-coord text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              <h2 className="font-display text-3xl md:text-4xl text-ice mt-4">{place.name}</h2>

              <div className="mt-4 space-y-2 text-xs uppercase tracking-coord">
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-glacier shrink-0" />
                  <span>{place.region}</span>
                </div>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <Compass className="w-4 h-4 text-glacier shrink-0" />
                  <span>{place.coordinatesLabel}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">{place.summary}</p>

              <div className="mt-6 hairline pt-5">
                <div className="text-[10px] uppercase tracking-coord text-glacier">
                  Editorial angle
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {place.editorialAngle}
                </p>
              </div>

              <div className="mt-6 hairline pt-5">
                <div className="text-[10px] uppercase tracking-coord text-glacier">
                  Related routes
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {place.relatedRoutes.map((route) => (
                    <span
                      key={route}
                      className="border border-border px-3 py-1.5 text-[10px] uppercase tracking-coord text-muted-foreground"
                    >
                      {route}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
