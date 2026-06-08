import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "cape-horn");

if (!place) {
  throw new Error("Cape Horn place data is missing.");
}

const relatedPlaces = [
  { name: "Puerto Williams", to: "/places/puerto-williams" },
  { name: "Navarino Island", to: "/places/navarino-island" },
  { name: "Diego Ramírez Islands", to: "/places/diego-ramirez-islands" },
  { name: "Antarctic Threshold", to: "/places/antarctic-threshold" },
] as const;

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "Cape Horn occupies the southern edge of the Hermite Islands, where the Tierra del Fuego archipelago narrows into a final headland before open ocean. Its position is defined by cliff, island shelf, exposed water and the absence of another sheltered landmass immediately to the south.",
  },
  {
    title: "Maritime Context",
    body: "The cape is a navigational reference in the meeting field of Pacific, Atlantic and Drake Passage waters. It is read through approaches, lighthouse position, sea room, current and the routes that pass from channel geography into more exposed southern water.",
  },
  {
    title: "Antarctic Threshold Context",
    body: "Cape Horn marks one of the clearest chart transitions before the Antarctic approaches: the archipelago falls away, latitude becomes more severe and the Drake Passage begins to organize the map. The place belongs to threshold geography rather than a single route line.",
  },
];

export const Route = createFileRoute("/places/cape-horn")({
  head: () => ({
    meta: [
      { title: "Cape Horn - End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for Cape Horn, positioned at the southern edge of the Tierra del Fuego archipelago and the Antarctic threshold.",
      },
      { property: "og:title", content: "Cape Horn - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A cartographic reading of Cape Horn as cape, lighthouse point, maritime hinge and Antarctic threshold geography.",
      },
      {
        property: "og:url",
        content: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/cape-horn",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/cape-horn",
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
            latitude: -55.9,
            longitude: -67.3,
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
  component: CapeHornPage,
});

function CapeHornPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A cape and ocean-edge place dossier from the southern Tierra del Fuego archipelago, read through coordinates, lighthouse reference and Antarctic threshold geography."
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
              Cape Horn is presented here as a maritime threshold: cape edge, lighthouse reference
              and exposed southern water before the Antarctic approaches.
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
