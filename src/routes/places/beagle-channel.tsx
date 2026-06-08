import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "beagle-channel");

if (!place) {
  throw new Error("Beagle Channel place data is missing.");
}

const relatedPlaceNames = [
  "Puerto Williams",
  "Navarino Island",
  "Cape Horn",
  "Antarctic Threshold",
];

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "The Beagle Channel runs along the southern edge of Tierra del Fuego, where island shorelines, forested slopes, inlets and narrow passages organize the map. Its geography is linear but not simple: the channel is shaped by bends, side waters, coastal settlements and the islands that hold its southern margin.",
  },
  {
    title: "Maritime Context",
    body: "The channel functions as a navigational corridor between sheltered waters and the outer Fuegian archipelago. It is read through beaconed turns, harbor approaches, anchorages, tidal movement and the gradual shift from protected passage to more exposed southern routes.",
  },
  {
    title: "Puerto Williams & Navarino Context",
    body: "Puerto Williams gives the Beagle Channel a clear inhabited reference point on the north shore of Navarino Island. From that shore, the channel becomes a relation between settlement, island interior, naval presence, harbor frontage and the passages that continue toward Cape Horn.",
  },
  {
    title: "Antarctic Threshold Context",
    body: "The Beagle Channel does not form the Antarctic threshold by itself, but it leads toward it. Its eastern and southern relationships point from channel geography into outer archipelago, Cape Horn waters and the wider maritime space that precedes the Drake Passage.",
  },
];

export const Route = createFileRoute("/places/beagle-channel")({
  head: () => ({
    meta: [
      { title: "Beagle Channel - End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for the Beagle Channel, positioned along southern Tierra del Fuego between island shores, Puerto Williams and the outer Fuegian archipelago.",
      },
      { property: "og:title", content: "Beagle Channel - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A cartographic reading of the Beagle Channel as shore, beacon, island, inlet and maritime corridor before the Antarctic threshold.",
      },
      {
        property: "og:url",
        content:
          "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/beagle-channel",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/beagle-channel",
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
            longitude: -68.0,
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
  component: BeagleChannelPage,
});

function BeagleChannelPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A channel and island-edge place dossier from southern Tierra del Fuego, read through coordinates, beacons, harbor approaches and Antarctic threshold geography."
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
              The Beagle Channel is presented here as a navigational line of relation: shore,
              beacon, island, inlet and harbor arranged across a narrow southern waterway.
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
