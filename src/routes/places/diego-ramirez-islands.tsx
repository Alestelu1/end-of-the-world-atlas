import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "diego-ramirez-islands");

if (!place) {
  throw new Error("Diego RamÃ­rez Islands place data is missing.");
}

const placeName = place.name;
const relatedPlaces = [
  { name: "Cape Horn", to: "/places/cape-horn" },
  { name: "Navarino Island", to: "/places/navarino-island" },
  { name: "Beagle Channel", to: "/places/beagle-channel" },
  { name: "Antarctic Threshold", to: "/places/antarctic-threshold" },
] as const;

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "The Diego RamÃ­rez Islands sit southwest of Cape Horn as a small island group beyond the main Fuegian archipelago. Their position is defined by open water, latitude, exposed rock and distance from the channel systems that organize the islands farther north.",
  },
  {
    title: "Southern Ocean Context",
    body: "The island group belongs to a more oceanic register of the atlas: current, wind, low landforms and subantarctic water rather than protected passage. It marks a change from archipelago navigation toward wider southern ocean geography.",
  },
  {
    title: "Cape Horn & Drake Passage Context",
    body: "Cape Horn remains the nearest major cartographic reference, but the Diego RamÃ­rez Islands sit farther into the exposed field associated with the Drake Passage. They extend the southern reading of the Horn from cape and lighthouse point into offshore island notation.",
  },
  {
    title: "Antarctic Threshold Context",
    body: "The islands help define the Antarctic threshold as a condition of open water, latitude and weather rather than a single line on the chart. From this position, the map has already moved beyond sheltered Fuegian routes and into the southern approaches.",
  },
];

export const Route = createFileRoute("/places/diego-ramirez-islands")({
  head: () => ({
    meta: [
      { title: `${placeName} - End of the World Atlas` },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for the Diego RamÃ­rez Islands, positioned southwest of Cape Horn in open subantarctic waters near the Antarctic threshold.",
      },
      { property: "og:title", content: `${placeName} - End of the World Atlas` },
      {
        property: "og:description",
        content:
          "A cartographic reading of the Diego RamÃ­rez Islands as ocean rock, southern limit marker and exposed threshold geography beyond Cape Horn.",
      },
      {
        property: "og:url",
        content:
          "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/diego-ramirez-islands",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/diego-ramirez-islands",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          name: placeName,
          description: place.summary,
          additionalType: place.category,
          geo: {
            "@type": "GeoCoordinates",
            latitude: -56.5,
            longitude: -68.7,
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
  component: DiegoRamirezIslandsPage,
});

function DiegoRamirezIslandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={placeName}
          description="An island-group place dossier from open subantarctic water southwest of Cape Horn, read through coordinates, ocean exposure and Antarctic threshold geography."
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
              The Diego RamÃ­rez Islands are presented here as an offshore southern notation: ocean
              rock, current, latitude and a threshold marker beyond the main Fuegian archipelago.
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
              {relatedPlaces.map((relatedPlace) => (
                <div key={relatedPlace.name} className="bg-card p-5">
                  <div className="text-ice">{relatedPlace.name}</div>
                  <Link
                    to={relatedPlace.to}
                    className="mt-3 inline-flex text-[10px] uppercase tracking-coord text-glacier hover:text-ice"
                  >
                    View place dossier
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
