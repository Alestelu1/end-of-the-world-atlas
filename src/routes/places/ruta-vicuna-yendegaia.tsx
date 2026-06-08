import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { Compass, MapPin, Route as RouteIcon } from "lucide-react";

const place = atlasPlaces.find((item) => item.slug === "ruta-vicuna-yendegaia");

if (!place) {
  throw new Error("Ruta Vicuna-Yendegaia place data is missing.");
}

const relatedPlaces = [
  { name: "Puerto Williams", to: "/places/puerto-williams" },
  { name: "Navarino Island", to: "/places/navarino-island" },
  { name: "Strait of Magellan", to: "/places/strait-of-magellan" },
  { name: "Punta Arenas", to: "/places/punta-arenas" },
] as const;

const contexts = [
  {
    title: "Overview",
    body: `${place.summary} ${place.editorialAngle}`,
  },
  {
    title: "Geographic Context",
    body: "Ruta Vicuña–Yendegaia is read as an interior Tierra del Fuego corridor, where forested valleys, mountain edges, drainage lines and southern coastal approaches organize the movement between inland terrain and the Yendegaia sector.",
  },
  {
    title: "Infrastructure Context",
    body: "The route belongs to an infrastructure geography of access and continuity rather than spectacle: road trace, bridge points, terrain constraint, maintenance logic and the practical problem of connecting isolated southern landscapes across difficult ground.",
  },
  {
    title: "Yendegaia National Park Context",
    body: "Near Yendegaia National Park, the corridor meets a protected landscape defined by valleys, water, forest and mountain margins. The atlas treats this contact as a cartographic boundary between public infrastructure and conservation geography.",
  },
  {
    title: "Southern Connectivity Context",
    body: "In the broader southern map, Ruta Vicuña–Yendegaia extends the logic of connectivity beyond ports and channels. It links the interior of Tierra del Fuego to the geographic field that continues toward Navarino Island, Puerto Williams and the Beagle Channel.",
  },
];

export const Route = createFileRoute("/places/ruta-vicuna-yendegaia")({
  head: () => ({
    meta: [
      { title: "Ruta Vicuña–Yendegaia — End of the World Atlas" },
      {
        name: "description",
        content:
          "A documentary and cartographic place dossier for Ruta Vicuña–Yendegaia, read as an infrastructure corridor through interior Tierra del Fuego toward Yendegaia.",
      },
      {
        property: "og:title",
        content: "Ruta Vicuña–Yendegaia — End of the World Atlas",
      },
      {
        property: "og:description",
        content:
          "A geographic reading of Ruta Vicuña–Yendegaia as road trace, terrain corridor, protected-landscape edge and southern connectivity infrastructure.",
      },
      {
        property: "og:url",
        content: "https://end-of-the-world-atlas.example/places/ruta-vicuna-yendegaia",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://end-of-the-world-atlas.example/places/ruta-vicuna-yendegaia",
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
  component: RutaVicunaYendegaiaPage,
});

function RutaVicunaYendegaiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow={place.category}
          title={place.name}
          description="An infrastructure-focused place dossier from Tierra del Fuego, read through road trace, terrain constraint, protected landscape and southern connectivity."
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
                <RouteIcon className="w-4 h-4 text-glacier mb-2" />
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
              Ruta Vicuña–Yendegaia is presented here as infrastructure geography: road alignment,
              valley terrain and southern access logic set against the protected margins of
              Yendegaia.
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
          title="Places connected to this corridor"
          description="These atlas places frame Ruta Vicuña–Yendegaia within the wider southern geography of ports, islands, straits and continental infrastructure."
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
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
