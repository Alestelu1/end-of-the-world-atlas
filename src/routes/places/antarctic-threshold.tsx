import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Anchor, Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "antarctic-threshold");

if (!place) {
  throw new Error("Antarctic Threshold place data is missing.");
}

const relatedPlaces = [
  { name: "Cape Horn", to: "/places/cape-horn" },
  { name: "Diego Ramírez Islands", to: "/places/diego-ramirez-islands" },
  { name: "Beagle Channel", to: "/places/beagle-channel" },
  { name: "Puerto Williams", to: "/places/puerto-williams" },
] as const;

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "The Antarctic Threshold is treated here as a geographic transition rather than a single named harbor, cape or island. It begins where the southern Fuegian archipelago loses shelter and the chart opens toward latitude, ocean exposure and polar approach geography.",
  },
  {
    title: "Southern Ocean Context",
    body: "South of the archipelago, sea room, weather, current and latitude become the primary cartographic conditions. The threshold is read through open water and the changing scale between channel navigation and the wider Southern Ocean field.",
  },
  {
    title: "Drake Passage Context",
    body: "The Drake Passage gives this place record its strongest maritime frame. Cape Horn, the Diego Ramírez Islands and the waters beyond them form reference points before the map shifts from island-edge navigation into the broad passage between South America and Antarctica.",
  },
  {
    title: "Antarctic Access Context",
    body: "Access toward Antarctica is described here as a sequence of geographic conditions: leaving channels, crossing exposed southern water, reading weather and current, and entering the spatial logic of the polar threshold. The emphasis is cartographic, not promotional.",
  },
  {
    title: "Related Routes",
    body: "The related route dossier connects Cape Horn with the Antarctic Threshold as an editorial corridor: a reading of capes, lights, open water and the southern limit of the atlas before Antarctic geography begins to dominate the chart.",
  },
];

export const Route = createFileRoute("/places/antarctic-threshold")({
  head: () => ({
    meta: [
      { title: "Antarctic Threshold - End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for the Antarctic Threshold, the transitional maritime geography south of the Fuegian archipelago and toward the Drake Passage.",
      },
      { property: "og:title", content: "Antarctic Threshold - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A cartographic reading of the Antarctic Threshold as latitude, open water, Drake Passage approaches and polar-edge geography.",
      },
      {
        property: "og:url",
        content:
          "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/antarctic-threshold",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/places/antarctic-threshold",
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
            "@type": "GeoShape",
            description: place.coordinatesLabel,
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
  component: AntarcticThresholdPage,
});

function AntarcticThresholdPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="A threshold-geography dossier from the southern edge of the Fuegian archipelago, read through latitude, open water, Drake Passage approaches and Antarctic-facing maritime routes."
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
              The Antarctic Threshold is presented here as a cartographic condition: open southern
              water, exposed latitude, Drake Passage approaches and the point where archipelago
              geography gives way to polar-facing routes.
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
