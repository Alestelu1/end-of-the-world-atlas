import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "puerto-toro");

if (!place) {
  throw new Error("Puerto Toro place data is missing.");
}

const relatedPlaces = [
  { name: "Puerto Williams", to: "/places/puerto-williams" },
  { name: "Navarino Island", to: "/places/navarino-island" },
  { name: "Cape Horn", to: "/places/cape-horn" },
  { name: "Diego RamÃ­rez Islands", to: "/places/diego-ramirez-islands" },
  { name: "Beagle Channel", to: "/places/beagle-channel" },
] as const;

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "Puerto Toro sits within the eastern geography of Navarino Island, where shore, forested interior, inlet and southern channel space form a compact edge between island terrain and the outer Fuegian archipelago.",
  },
  {
    title: "Maritime Context",
    body: "The settlement belongs to a maritime field organized by small harbor reference, local navigation, channel weather and the wider route logic between Puerto Williams, the Beagle Channel and the approaches toward Cape Horn.",
  },
  {
    title: "Settlement Context",
    body: "Puerto Toro is treated here as a settlement record rather than a destination claim: a lived shoreline point, a harbor-facing community and a notation on the southern island map where infrastructure remains modest and geography remains dominant.",
  },
  {
    title: "Cape Horn Archipelago Context",
    body: "From this part of Navarino Island, the map begins to turn toward the Cape Horn archipelago. Puerto Toro marks a nearby inhabited edge before the chart opens into islands, exposed passages and the maritime threshold around the Horn.",
  },
];

export const Route = createFileRoute("/places/puerto-toro")({
  head: () => ({
    meta: [
      { title: "Puerto Toro â€” End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for Puerto Toro, a settlement on eastern Navarino Island connected to Beagle Channel and Cape Horn maritime geography.",
      },
      { property: "og:title", content: "Puerto Toro â€” End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A geographic reading of Puerto Toro as settlement, shoreline, harbor reference and southern island edge near the Cape Horn archipelago.",
      },
      {
        property: "og:url",
        content: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/puerto-toro",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/puerto-toro",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: place.name,
          description: place.summary,
          additionalType: place.category,
          geo: {
            "@type": "GeoCoordinates",
            latitude: -55.1,
            longitude: -67.1,
          },
          address: {
            "@type": "PostalAddress",
            addressRegion: place.region,
          },
          isPartOf: {
            "@type": "CreativeWork",
            name: "End of the World Atlas",
          },
        }),
      },
    ],
  }),
  component: PuertoToroPage,
});

function PuertoToroPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A settlement and maritime-edge place dossier from eastern Navarino Island, read through shoreline, harbor reference, channel geography and the Cape Horn archipelago."
        />
      </section>

      <section className="pb-20 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-px bg-border">
          <aside className="bg-card p-8 lg:p-10">
            <div className="text-xs uppercase tracking-coord text-glacier">Place record</div>
            <div className="mt-8 space-y-6">
              <div>
                <MapPin className="w-4 h-4 text-glacier mb-2" />
                <div className="text-[10px] uppercase tracking-coord text-muted-foreground">
                  Region
                </div>
                <div className="text-ice mt-2">{place.region}</div>
              </div>
              <div>
                <Compass className="w-4 h-4 text-glacier mb-2" />
                <div className="text-[10px] uppercase tracking-coord text-muted-foreground">
                  Coordinates
                </div>
                <div className="font-mono text-ice mt-2">{place.coordinatesLabel}</div>
              </div>
              <div>
                <Anchor className="w-4 h-4 text-glacier mb-2" />
                <div className="text-[10px] uppercase tracking-coord text-muted-foreground">
                  Category
                </div>
                <div className="text-ice mt-2">{place.category}</div>
              </div>
            </div>
          </aside>

          <div className="bg-background p-8 lg:p-10">
            <div className="text-xs uppercase tracking-coord text-glacier">Documentary note</div>
            <p className="font-display text-3xl md:text-5xl text-ice mt-5 leading-[1.12] text-balance">
              Puerto Toro is presented here as an inhabited shoreline notation: a small settlement,
              harbor reference and island edge within the maritime geography before Cape Horn.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {contexts.map((section) => (
            <article key={section.title} className="bg-background p-8 lg:p-10">
              <h2 className="font-display text-3xl md:text-4xl text-ice">{section.title}</h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Related places"
          title="Places connected to this settlement"
          description="These atlas places place Puerto Toro within the wider southern field of Navarino Island, channel navigation, Cape Horn geography and subantarctic island margins."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {relatedPlaces.map((relatedPlace) => (
            <article key={relatedPlace.name} className="bg-card p-6">
              <div className="text-ice">{relatedPlace.name}</div>
              <Link
                to={relatedPlace.to}
                className="mt-4 inline-flex text-[10px] uppercase tracking-coord text-glacier hover:text-ice"
              >
                View place dossier
              </Link>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
