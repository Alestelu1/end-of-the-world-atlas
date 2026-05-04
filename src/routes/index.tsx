import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { SceneMap } from "@/components/scene-map";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Mountain, Anchor, Snowflake } from "lucide-react";
import hero from "@/assets/hero-patagonia.jpg";
import torres from "@/assets/torres-paine.jpg";
import tdf from "@/assets/tierra-fuego.jpg";
import cape from "@/assets/cape-horn.jpg";
import ant from "@/assets/antarctica.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "End of the World Atlas — Patagonia, Cape Horn & Antarctica" },
      { name: "description", content: "A cinematic atlas of Patagonia, Tierra del Fuego, Cape Horn and Chilean Antarctica. Maps, expedition routes and lighthouse archives from the last frontier." },
      { property: "og:title", content: "End of the World Atlas" },
      { property: "og:description", content: "A visual cartography of the last frontier of the inhabited world." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Aerial view of Patagonian glaciers at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover float-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 grain" />

        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col justify-end pb-20 lg:pb-32">
          <div className="reveal flex items-center gap-3 text-xs uppercase tracking-coord text-glacier">
            <span className="h-px w-10 bg-glacier" />
            56°S — Patagonia · Tierra del Fuego · Antártica
          </div>
          <h1 className="reveal-slow font-display text-[clamp(3rem,9vw,9rem)] leading-[0.9] text-ice mt-6 max-w-5xl text-balance">
            Where the maps<br />
            <em className="text-glacier not-italic font-light italic">end</em>, the world begins.
          </h1>
          <p className="reveal-slow mt-8 max-w-xl text-base md:text-lg text-silver/80 leading-relaxed">
            A cinematic atlas of the southernmost lands on Earth — glaciers, lighthouses
            and the wind that has no name.
          </p>

          <div className="reveal-slow mt-10 flex flex-wrap gap-4">
            <Link
              to="/atlas"
              className="group inline-flex items-center gap-3 bg-ice text-primary-foreground px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier transition-colors"
            >
              Open the Atlas
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/routes"
              className="inline-flex items-center gap-3 border border-glacier/40 text-ice px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier/10"
            >
              Expedition Routes
            </Link>
          </div>
        </div>

        {/* coordinate ticker */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-glacier/20 backdrop-blur-sm bg-background/30">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-coord text-glacier/80">
            <span>Lat 54°48′S</span>
            <span className="hidden md:inline">Bearing 196°</span>
            <span className="hidden md:inline">Wind 47kt SW</span>
            <span>Lon 68°18′W</span>
          </div>
        </div>
      </section>

      {/* PROLOGUE */}
      <section className="py-32 lg:py-48 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-coord text-glacier">Chapter 01 · Prologue</div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-display text-3xl md:text-5xl text-ice leading-[1.15] text-balance">
              Beyond the 50th parallel, the continents narrow into a labyrinth of fjords,
              ice and silence. <span className="text-muted-foreground">This is the geography
              of the end — and the beginning of everything that lies south.</span>
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-y border-border bg-card/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {[
            { icon: Compass, k: "01", t: "Cartography", d: "Hand-drawn vector maps of the southern archipelagos." },
            { icon: Mountain, k: "02", t: "Geology", d: "Granite, ice and the Andes' last vertebrae." },
            { icon: Anchor, k: "03", t: "Lighthouses", d: "Sentinels of the Drake Passage." },
            { icon: Snowflake, k: "04", t: "Antarctica", d: "Crossing the white continent's gateway." },
          ].map((p) => (
            <div key={p.k} className="p-8 lg:p-10">
              <p.icon className="w-6 h-6 text-glacier" />
              <div className="font-mono text-[10px] tracking-coord text-muted-foreground mt-6">№ {p.k}</div>
              <h3 className="font-display text-2xl text-ice mt-2">{p.t}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <SectionHeading
            eyebrow="The Atlas"
            title="Six landscapes at the edge of the world"
            description="From the granite spires of Torres del Paine to the icebergs of the Antarctic Peninsula."
          />
          <Link to="/atlas" className="text-xs uppercase tracking-coord text-glacier hover:text-ice flex items-center gap-2">
            View full atlas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard index="01" image={torres} title="Torres del Paine" region="Magallanes · Chile" coord="51°00′S 73°00′W" blurb="Three granite towers carved by Pleistocene glaciers, rising from a turquoise lake." />
          <DestinationCard index="02" image={tdf} title="Tierra del Fuego" region="Beagle Channel" coord="54°48′S 68°18′W" blurb="The Land of Fire — sub-Antarctic forests collapsing into iron-grey waters." />
          <DestinationCard index="03" image={cape} title="Cape Horn" region="Cabo de Hornos" coord="55°59′S 67°16′W" blurb="The mythic southernmost cape, where two oceans collide in perpetual storm." />
          <DestinationCard index="04" image={ant} title="Antarctic Peninsula" region="Antártica Chilena" coord="64°00′S 60°00′W" blurb="A continent of ice, twice the size of Australia, breathing through penguin colonies." />
          <DestinationCard index="05" image={hero} title="Southern Ice Field" region="Campo de Hielo Sur" coord="49°30′S 73°30′W" blurb="The third largest reserve of fresh water on the planet — and the most remote." />
          <DestinationCard index="06" image={tdf} title="Cordillera Darwin" region="Tierra del Fuego" coord="54°40′S 69°30′W" blurb="An entire mountain range still partly unmapped — Darwin's last frontier." />
        </div>
      </section>

      {/* INTERACTIVE MAP */}
      <section id="map" className="py-32 bg-card/20 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <SectionHeading eyebrow="Interactive Map · 1:8M" title="Navigate the southern archipelago" description="Tap any sector to read its coordinates, region and field notes." />
          <div className="mt-16">
            <SceneMap />
          </div>
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={ant} alt="Antarctic icebergs" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-coord text-glacier">Chapter 04 · Antártica</div>
            <h2 className="font-display text-5xl md:text-7xl mt-5 text-ice text-balance leading-[1.05]">
              <em className="font-light italic">A continent</em> of ice, mapped by silence.
            </h2>
            <p className="mt-6 text-lg text-silver/80 leading-relaxed">
              Chilean Antarctica covers 1.25 million km² of frozen latitudes. We document its
              peninsular bases, scientific stations and the slow theatre of breaking glaciers.
            </p>
            <Link to="/atlas" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-coord text-glacier hover:text-ice">
              Read the white chapter <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
        <SectionHeading
          align="center"
          eyebrow="Travel · Limited departures"
          title="Cross the latitude where the world thins out"
          description="Curated expeditions led by glaciologists, lighthouse keepers and former Antarctic crew."
        />
        <Link to="/travel" className="mt-12 inline-flex items-center gap-3 bg-glacier text-primary-foreground px-8 py-4 text-xs uppercase tracking-coord hover:bg-ice transition-colors">
          See expeditions <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
