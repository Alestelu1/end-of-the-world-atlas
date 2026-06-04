import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "puerto-williams");

if (!place) {
  throw new Error("Puerto Williams place data is missing.");
}

const relatedPlaceNames = ["Navarino Island", "Beagle Channel", "Cape Horn", "Antarctic Threshold"];

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "Puerto Williams sits on the north shore of Navarino Island, where the island edge, the Beagle Channel and the southern Fuegian archipelago meet in a compact cartographic field. Its position is best read through shorelines, channel turns and the mountain interior behind the harbor.",
  },
  {
    title: "Maritime Context",
    body: "The settlement faces a navigational corridor shaped by channel water, island passages, beaconed approaches and sheltered anchor points. From this latitude, maritime movement is organized by the Beagle Channel to the north, the outer archipelago to the south and the exposed approaches toward Cape Horn.",
  },
  {
    title: "Antarctic Gateway Context",
    body: "Puerto Williams belongs to the final inhabited geography before the ocean opens toward the Drake Passage. The place marks a transition from channel navigation to threshold geography: archipelago, weather, current and southern ocean space arranged before Antarctica.",
  },
];

export const Route = createFileRoute("/places/puerto-williams")({
  head: () => ({
    meta: [
      { title: "Puerto Williams - End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for Puerto Williams, positioned on Navarino Island beside the Beagle Channel and the southern approaches toward Cape Horn.",
      },
      { property: "og:title", content: "Puerto Williams - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A cartographic reading of Puerto Williams as harbor, channel edge and Antarctic threshold geography.",
      },
      {
        property: "og:url",
        content: "https://southern-uncharted-atlas.lovable.app/places/puerto-williams",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://southern-uncharted-atlas.lovable.app/places/puerto-williams",
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
            latitude: -54.9,
            longitude: -67.6,
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
  component: PuertoWilliamsPage,
});

function PuertoWilliamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A harbor and channel-edge place dossier from the southern Fuegian archipelago, read through coordinates, maritime corridors and Antarctic threshold geography."
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
              Puerto Williams is presented here as a geographic threshold: channel shore, inhabited
              edge and maritime reference point before the southern ocean opens.
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
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10">
          <div>
            <SectionHeading
              eyebrow="Related routes"
              title="Route dossiers connected to this place"
              description="The route relationships below return to the atlas route index, where maritime corridors are treated as editorial-cartographic dossiers."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {place.relatedRoutes.map((route) => (
                <Link
                  key={route}
                  to="/routes"
                  className="inline-flex items-center gap-3 border border-border px-4 py-3 text-xs uppercase tracking-coord text-muted-foreground hover:text-ice hover:border-glacier/60 transition-colors"
                >
                  <RouteIcon className="w-4 h-4 text-glacier" />
                  {route}
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-border bg-card p-8 lg:p-10">
            <div className="text-xs uppercase tracking-coord text-glacier">
              Adjacent atlas places
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-px bg-border">
              {relatedPlaceNames.map((name) => (
                <div key={name} className="bg-card p-5">
                  <div className="text-ice">{name}</div>
                  <Link
                    to="/places"
                    className="mt-3 inline-flex text-[10px] uppercase tracking-coord text-glacier hover:text-ice"
                  >
                    View in atlas places
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
