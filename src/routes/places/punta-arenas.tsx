import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "punta-arenas");

if (!place) {
  throw new Error("Punta Arenas place data is missing.");
}

const relatedPlaceNames = [
  "Strait of Magellan",
  "Puerto Williams",
  "Beagle Channel",
  "Antarctic Threshold",
];

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "Punta Arenas stands on the western reach of the Strait of Magellan, where the city grid, harbor frontage and Patagonian steppe meet a long navigable corridor. Its geography is read through shoreline, wind exposure, strait crossings and the continental edge behind the port.",
  },
  {
    title: "Strait of Magellan Context",
    body: "The city is one of the clearest atlas anchors for the Strait of Magellan. From this position, the strait can be followed as a sequence of reaches, narrows, capes, lights and east-west maritime movement between Atlantic and Pacific waters.",
  },
  {
    title: "Antarctic Gateway Context",
    body: "Punta Arenas belongs to the northern frame of the Antarctic approach system: a continental port facing the strait before routes continue south through channels, islands and threshold waters. Its role is geographic and infrastructural, not a single route line.",
  },
  {
    title: "Infrastructure & Maritime Routes Context",
    body: "Harbor frontage, road connections, port movement and channel crossings make Punta Arenas a working reference point in the southern maritime map. It links continental Patagonia to Tierra del Fuego, the Strait of Magellan route dossier and the wider network of southern passages.",
  },
];

export const Route = createFileRoute("/places/punta-arenas")({
  head: () => ({
    meta: [
      { title: "Punta Arenas - End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for Punta Arenas, positioned on the Strait of Magellan as a continental port, urban grid and maritime route reference in Chile's far south.",
      },
      { property: "og:title", content: "Punta Arenas - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A cartographic reading of Punta Arenas as strait settlement, harbor frontage and maritime infrastructure on the southern Patagonian edge.",
      },
      {
        property: "og:url",
        content: "https://southern-uncharted-atlas.lovable.app/places/punta-arenas",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://southern-uncharted-atlas.lovable.app/places/punta-arenas",
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
            latitude: -53.2,
            longitude: -70.9,
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
  component: PuntaArenasPage,
});

function PuntaArenasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A strait settlement and continental-edge place dossier from southern Patagonia, read through coordinates, harbor frontage, channel crossings and maritime route infrastructure."
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
              Punta Arenas is presented here as an atlas anchor for the strait: urban grid, harbor
              frontage, maritime routes and Patagonian steppe meeting at the continental edge.
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
