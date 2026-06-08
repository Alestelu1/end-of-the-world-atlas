import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "strait-of-magellan");

if (!place) {
  throw new Error("Strait of Magellan place data is missing.");
}

const relatedPlaces = [
  { name: "Punta Arenas", to: "/places/punta-arenas" },
  { name: "Beagle Channel", to: "/places/beagle-channel" },
  { name: "Puerto Williams", to: "/places/puerto-williams" },
  { name: "Cape Horn", to: "/places/cape-horn" },
] as const;

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "The Strait of Magellan separates continental Patagonia from Tierra del Fuego through a long sequence of reaches, narrows, bays and turns. Its geography is read east to west: Atlantic approach, tidal compression, interior waters, island margins and the opening toward the Pacific.",
  },
  {
    title: "Maritime Context",
    body: "The strait functions as a working maritime corridor shaped by current, wind, channel width, shoreline reference and lighthouse positions. Navigation through it is not a single line but a chain of decisions arranged around narrows, capes, sheltered water and exposure.",
  },
  {
    title: "Historical Context",
    body: "The passage has long carried the weight of global navigation, but this dossier treats that history through geography: a navigable cut through the southern continent, a charted alternative to rounding Cape Horn and a corridor where settlement, survey and maritime infrastructure accumulated along the shore.",
  },
  {
    title: "Southern Routes Context",
    body: "Within Southern Routes, the Strait of Magellan is the northern maritime corridor of the atlas. It connects Punta Arenas, continental Patagonia and Tierra del Fuego before the southern map continues toward the Beagle Channel, Cape Horn and the Antarctic threshold.",
  },
];

export const Route = createFileRoute("/places/strait-of-magellan")({
  head: () => ({
    meta: [
      { title: "Strait of Magellan â€” End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for the Strait of Magellan, the maritime corridor separating Patagonia and Tierra del Fuego through narrows, reaches, capes and lights.",
      },
      { property: "og:title", content: "Strait of Magellan â€” End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A cartographic reading of the Strait of Magellan as corridor, narrows, capes, lighthouse chain and southern route infrastructure.",
      },
      {
        property: "og:url",
        content:
          "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/strait-of-magellan",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/strait-of-magellan",
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
            latitude: -52.5,
            longitude: -70.0,
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
  component: StraitOfMagellanPage,
});

function StraitOfMagellanPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A maritime-corridor place dossier from southern Patagonia, read through reaches, narrows, capes, lights and the east-west grammar of navigation between Atlantic and Pacific waters."
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
              The Strait of Magellan is presented here as a geographic corridor: narrows, reaches,
              capes and lighthouse references carrying maritime movement between Patagonia and
              Tierra del Fuego.
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
            <div className="text-xs uppercase tracking-coord text-glacier">Related places</div>
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
