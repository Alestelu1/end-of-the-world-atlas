import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { atlasPlaces } from "@/data/places";
import { southernRoutes } from "@/data/routes";
import {
  Anchor,
  ArrowRight,
  Compass,
  Map as MapIcon,
  Mountain,
  Radio,
  Snowflake,
  Waves,
} from "lucide-react";
import hero from "@/assets/hero-patagonia.jpg";
import torres from "@/assets/torres-paine.jpg";
import tdf from "@/assets/tierra-fuego.jpg";
import cape from "@/assets/cape-horn.jpg";
import ant from "@/assets/antarctica.jpg";

const featuredPlaceSlugs = [
  "puerto-williams",
  "cape-horn",
  "beagle-channel",
  "navarino-island",
  "diego-ramirez-islands",
  "punta-arenas",
  "antarctic-threshold",
];

const placePageRoutes = {
  "antarctic-threshold": "/places/antarctic-threshold",
  "beagle-channel": "/places/beagle-channel",
  "cape-horn": "/places/cape-horn",
  "diego-ramirez-islands": "/places/diego-ramirez-islands",
  "navarino-island": "/places/navarino-island",
  "puerto-williams": "/places/puerto-williams",
  "punta-arenas": "/places/punta-arenas",
} as const;

const placeDisplayNames: Record<string, string> = {
  "diego-ramirez-islands": "Diego RamÃ­rez Islands",
};

const placeImages: Record<string, string> = {
  "antarctic-threshold": ant,
  "beagle-channel": tdf,
  "cape-horn": cape,
  "diego-ramirez-islands": cape,
  "navarino-island": tdf,
  "puerto-williams": hero,
  "punta-arenas": torres,
};

const featuredPlaces = featuredPlaceSlugs
  .map((slug) => atlasPlaces.find((place) => place.slug === slug))
  .filter((place): place is (typeof atlasPlaces)[number] => Boolean(place));

const atlasSignals = [
  {
    icon: MapIcon,
    label: "Places",
    title: "Ports, capes, islands and channels",
    body: "The places index anchors the atlas in named geographies: settlements, island groups, maritime corridors and threshold waters.",
  },
  {
    icon: Compass,
    label: "Southern Routes",
    title: "Maritime corridors as dossiers",
    body: "Route pages read the southern map through channels, beacons, lighthouses, narrows and open-water transitions.",
  },
  {
    icon: Anchor,
    label: "Navigation",
    title: "Harbors, lights and passages",
    body: "The project follows the logic of navigation through documented geography, signals and route context.",
  },
  {
    icon: Snowflake,
    label: "Threshold",
    title: "Before Antarctic geography",
    body: "Cape Horn, the Diego RamÃ­rez Islands and the Drake Passage approaches form the atlas edge before polar waters dominate the chart.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "End of the World Atlas - Documentary Cartography of Chile's Far South" },
      {
        name: "description",
        content:
          "A documentary and cartographic atlas of Chile's far south, from Punta Arenas and Puerto Williams to Cape Horn, the Beagle Channel and the Antarctic threshold.",
      },
      {
        property: "og:title",
        content: "End of the World Atlas - Documentary Cartography of Chile's Far South",
      },
      {
        property: "og:description",
        content:
          "Places, southern routes, channels, lighthouses and Antarctic threshold geographies from the southern edge of Chile.",
      },
      {
        property: "og:url",
        content: "https://end-of-the-world-atlas.endoftheworldatlas.workers.dev/",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Aerial view of Patagonian glaciers"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover float-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/35 to-background" />
        <div className="absolute inset-0 grain" />

        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-32">
          <div className="reveal flex items-center gap-3 text-xs uppercase tracking-coord text-glacier">
            <span className="h-px w-10 bg-glacier" />
            Documentary atlas - Patagonia - Tierra del Fuego - Antarctic threshold
          </div>
          <h1 className="reveal-slow font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-ice mt-6 max-w-5xl text-balance">
            End of the
            <br />
            <em className="text-glacier not-italic font-light italic">World Atlas</em>
          </h1>
          <p className="reveal-slow mt-8 max-w-2xl text-base md:text-lg text-silver leading-relaxed">
            A documentary and cartographic reading of Chile's far south: ports, channels, capes,
            islands, lighthouses, southern routes and the threshold geographies before Antarctica.
          </p>

          <div className="reveal-slow mt-10 flex flex-wrap gap-4">
            <Link
              to="/places"
              className="group inline-flex items-center gap-3 bg-ice text-primary-foreground px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier transition-colors"
            >
              Explore Places
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/routes"
              className="inline-flex items-center gap-3 border border-glacier/40 text-ice px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier/10"
            >
              Explore Routes
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-glacier/20 backdrop-blur-sm bg-background/30">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-coord text-glacier/80">
            <span>Puerto Williams</span>
            <span className="hidden md:inline">Beagle Channel</span>
            <span className="hidden md:inline">Cape Horn</span>
            <span>Antarctic Threshold</span>
          </div>
        </div>
      </section>

      <section className="py-32 lg:py-48 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-coord text-glacier">
              Editorial orientation
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display text-3xl md:text-5xl text-ice leading-[1.15] text-balance">
              The atlas follows geography before narrative:{" "}
              <span className="text-muted-foreground">
                shoreline, channel, cape, beacon, island, port and open southern water.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {atlasSignals.map((signal) => (
            <div key={signal.label} className="p-8 lg:p-10">
              <signal.icon className="w-6 h-6 text-glacier" />
              <div className="font-mono text-[10px] tracking-coord text-muted-foreground mt-6 uppercase">
                {signal.label}
              </div>
              <h2 className="font-display text-2xl text-ice mt-2">{signal.title}</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{signal.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <SectionHeading
            eyebrow="Places"
            title="Atlas places at the southern edge"
            description="Seven place dossiers organize the current atlas: Puerto Williams, Cape Horn, the Beagle Channel, Navarino Island, the Diego RamÃ­rez Islands, Punta Arenas and the Antarctic Threshold."
          />
          <Link
            to="/places"
            className="text-xs uppercase tracking-coord text-glacier hover:text-ice flex items-center gap-2"
          >
            Explore Places <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredPlaces.map((place, index) => {
            const placeRoute = placePageRoutes[place.slug as keyof typeof placePageRoutes];
            const displayName = placeDisplayNames[place.slug] ?? place.name;

            return (
              <article
                key={place.slug}
                className="group border border-border bg-card hover:border-glacier/60 transition-colors overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={placeImages[place.slug] ?? hero}
                    alt={displayName}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-ice/80 uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-[10px] uppercase tracking-coord text-glacier">
                    {place.category}
                  </div>
                  <h3 className="font-display text-2xl text-ice mt-2">{displayName}</h3>
                  <div className="font-mono text-[10px] tracking-coord text-muted-foreground mt-2 uppercase">
                    {place.coordinatesLabel}
                  </div>
                  <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                    {place.summary}
                  </p>
                  <Link
                    to={placeRoute}
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-coord text-glacier hover:text-ice"
                  >
                    Read place dossier <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-32 bg-card/20 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
            <SectionHeading
              eyebrow="Southern Routes"
              title="Maritime corridors and threshold routes"
              description="Southern Routes presents the atlas as navigational geography: straits, channels, capes, beacons and open-water approaches."
            />
            <Link
              to="/routes"
              className="text-xs uppercase tracking-coord text-glacier hover:text-ice flex items-center gap-2"
            >
              Explore Routes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {southernRoutes.map((route) => (
              <article
                key={route.code}
                className="group flex flex-col border border-border bg-background hover:border-glacier/60 transition-colors overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={route.img}
                    alt={route.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-ice/80 uppercase">
                    {route.code}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-2xl text-ice">{route.name}</h3>
                  <div className="mt-4 grid grid-cols-2 gap-px bg-border text-[10px] uppercase tracking-coord">
                    <div className="bg-background p-3 text-muted-foreground">
                      <div className="text-glacier">Reach</div>
                      <div className="mt-1">{route.reach}</div>
                    </div>
                    <div className="bg-background p-3 text-muted-foreground">
                      <div className="text-glacier">Signal</div>
                      <div className="mt-1">{route.signal}</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-5 leading-relaxed">{route.desc}</p>
                  <Link
                    to="/routes"
                    className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-coord text-glacier hover:text-ice"
                  >
                    Read route dossier <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[78vh] min-h-[580px] overflow-hidden">
        <img
          src={ant}
          alt="Antarctic ice and southern ocean water"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-coord text-glacier">Antarctic Threshold</div>
            <h2 className="font-display text-5xl md:text-7xl mt-5 text-ice text-balance leading-[1.05]">
              Where channel geography opens into polar water.
            </h2>
            <p className="mt-6 text-lg text-silver/80 leading-relaxed">
              The southern atlas does not end at a single cape. It thins through Navarino Island,
              the Beagle Channel, Cape Horn, the Diego RamÃ­rez Islands and the open approaches of
              the Drake Passage.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/places"
                className="inline-flex items-center gap-3 bg-ice text-primary-foreground px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier transition-colors"
              >
                Explore Places <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/routes"
                className="inline-flex items-center gap-3 border border-glacier/40 text-ice px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier/10"
              >
                Explore Routes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 border-y border-border bg-card/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="Current atlas structure"
              title="A documentary system of places, routes and maritime signals"
              description="The homepage now points into the atlas itself: the places index, the southern route dossiers and the geographic vocabulary that connects them."
            />
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-border">
            {[
              {
                icon: Mountain,
                title: "Puerto Williams and Navarino",
                body: "Harbor, island, channel edge and southern Fuegian geography.",
              },
              {
                icon: Waves,
                title: "Beagle Channel",
                body: "A navigational line of shore, beacon, inlet and passage.",
              },
              {
                icon: Radio,
                title: "Cape Horn and Diego RamÃ­rez",
                body: "Cape, lighthouse reference, oceanic outliers and open southern water.",
              },
              {
                icon: Anchor,
                title: "Punta Arenas and Southern Routes",
                body: "Strait settlement, maritime corridor and continental-edge infrastructure.",
              },
            ].map((item) => (
              <li key={item.title} className="bg-card p-8">
                <item.icon className="w-5 h-5 text-glacier" />
                <div className="font-display text-xl text-ice mt-5">{item.title}</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {item.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="Begin with the atlas"
            title="Read the southern map through places and routes"
            description="Start with the place index, then follow the maritime corridors that connect ports, channels, lighthouses, capes and Antarctic threshold geography."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/places"
              className="inline-flex items-center gap-3 bg-glacier text-primary-foreground px-8 py-4 text-xs uppercase tracking-coord hover:bg-ice transition-colors"
            >
              Explore Places <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/routes"
              className="inline-flex items-center gap-3 border border-glacier/40 text-ice px-8 py-4 text-xs uppercase tracking-coord hover:bg-glacier/10"
            >
              Explore Routes
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
