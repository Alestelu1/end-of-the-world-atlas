import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { SceneMap } from "@/components/scene-map";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Mountain, Anchor, Snowflake, Lock, KeyRound, Ship, Map as MapIcon } from "lucide-react";
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
            From Puerto Williams — the southernmost city on Earth — across Navarino Island,
            the Cape Horn archipelago and the Chilean Antarctic projection. Mapping the austral
            frontier through geography, navigation and southern memory.
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

      {/* DESTINATIONS — Chilean geographic core */}
      <section className="py-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <SectionHeading
            eyebrow="The Chilean South"
            title="Six coordinates that define the end of the continent"
            description="From the Strait of Magellan to the Diego Ramírez archipelago and the Chilean Antarctic Territory."
          />
          <Link to="/atlas" className="text-xs uppercase tracking-coord text-glacier hover:text-ice flex items-center gap-2">
            View full atlas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DestinationCard index="01" image={torres} title="Punta Arenas" region="Magallanes · Chile" coord="53°10′S 70°55′W" blurb="The southern continental capital — gateway to every Antarctic and Patagonian expedition since 1848." />
          <DestinationCard index="02" image={hero} title="Strait of Magellan" region="Estrecho de Magallanes" coord="53°30′S 70°30′W" blurb="The 570 km marine corridor first traversed in 1520, threading three oceans through Chilean fjordland." />
          <DestinationCard index="03" image={tdf} title="Puerto Williams" region="Isla Navarino · Chile" coord="54°56′S 67°37′W" blurb="Officially the southernmost town on Earth, on the Beagle Channel — base of the Chilean Antarctic Naval Squadron." />
          <DestinationCard index="04" image={cape} title="Cape Horn" region="Cabo de Hornos · Chile" coord="55°59′S 67°16′W" blurb="The mythic southern cape of the Americas, where the Atlantic and Pacific meet in perpetual storm." />
          <DestinationCard index="05" image={cape} title="Diego Ramírez" region="Subantarctic · Chile" coord="56°31′S 68°43′W" blurb="The true southernmost land of South America — a wind-scoured archipelago 100 km SW of Cape Horn." />
          <DestinationCard index="06" image={ant} title="Chilean Antarctic Territory" region="Antártica Chilena" coord="60°S → 90°S · 53°W → 90°W" blurb="1.25 million km² of ice claimed by Chile in 1940 — Bases Frei, O'Higgins and Prat across the peninsula." />
        </div>
      </section>

      {/* INTERACTIVE EXPEDITION ATLAS */}
      <section id="map" className="py-32 bg-card/20 border-y border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <SectionHeading
            eyebrow="Interactive Expedition Atlas · 1:8M"
            title="Punta Arenas → Magallanes → Puerto Williams → Cape Horn → Diego Ramírez → Antártica"
            description="An expedition cartography of the Chilean south. Tap any waypoint for coordinates, region and field notes."
          />
          <div className="mt-16">
            <SceneMap />
          </div>
        </div>
      </section>

      {/* PREMIUM ROUTE GUIDES */}
      <section className="py-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between flex-wrap gap-8 mb-16">
          <SectionHeading
            eyebrow="Premium Route Guides"
            title="GPX tracks, weather windows, lighthouse waypoints"
            description="Field-grade itineraries authored with Chilean naval pilots, glaciologists and Cape Horn skippers."
          />
          <Link to="/routes" className="text-xs uppercase tracking-coord text-glacier hover:text-ice flex items-center gap-2">
            All route guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { code: "RT-01", img: torres, name: "Paine Circuit", spec: "9 days · 128 km · +4,200 m", price: "$ 24" },
            { code: "RT-02", img: cape, name: "Beagle → Cape Horn → Diego Ramírez", spec: "6 days · 540 nm · sail", price: "$ 32" },
            { code: "RT-03", img: ant, name: "Drake Passage & Antártica Crossing", spec: "12 days · 1,800 nm", price: "$ 48" },
          ].map((r) => (
            <article key={r.code} className="group flex flex-col border border-border bg-card hover:border-glacier/60 transition-colors overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.img} alt={r.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-coord text-ice/80 uppercase">{r.code}</div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-ice">{r.name}</h3>
                <div className="font-mono text-[10px] tracking-coord text-muted-foreground mt-2 uppercase">{r.spec}</div>
                <div className="mt-6 flex items-center justify-between pt-6 hairline">
                  <span className="text-xs uppercase tracking-coord text-glacier inline-flex items-center gap-2"><Lock className="w-3.5 h-3.5" /> Unlock {r.price}</span>
                  <Link to="/routes" className="text-xs uppercase tracking-coord text-ice inline-flex items-center gap-1.5">View <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STORYTELLING */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <img src={ant} alt="Antarctic icebergs" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative h-full max-w-[1600px] mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-coord text-glacier">Chapter 04 · Antártica Chilena</div>
            <h2 className="font-display text-5xl md:text-7xl mt-5 text-ice text-balance leading-[1.05]">
              <em className="font-light italic">A continent</em> of ice, mapped by silence.
            </h2>
            <p className="mt-6 text-lg text-silver/80 leading-relaxed">
              The Chilean Antarctic Territory spans 1,250,000 km² of frozen latitudes from the
              53rd to the 90th meridian west — bases Frei, O'Higgins, Prat, and the slow theatre
              of breaking glaciers.
            </p>
            <Link to="/atlas" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-coord text-glacier hover:text-ice">
              Read the white chapter <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* MEMBERS ACCESS */}
      <section className="py-32 border-y border-border bg-card/30">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-coord text-glacier inline-flex items-center gap-2"><KeyRound className="w-3.5 h-3.5" /> Members · Atlas Society</div>
            <h2 className="font-display text-5xl md:text-6xl mt-5 text-ice text-balance leading-[1.05]">
              Join the <em className="font-light italic text-glacier">Society of the 56th Parallel</em>.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-xl">
              Members unlock the full premium route library, downloadable GPX/KML files,
              quarterly print dispatches from the Chilean south, and priority access on
              limited expedition departures.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/travel" className="inline-flex items-center gap-3 bg-ice text-primary-foreground px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier transition-colors">
                Become a member · $ 12 / mo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-3 border border-glacier/40 text-ice px-6 py-4 text-xs uppercase tracking-coord hover:bg-glacier/10">
                Member benefits
              </Link>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-px bg-border">
            {[
              { i: MapIcon, t: "Full route library", d: "All RT-XX premium guides, GPX/KML included." },
              { i: Anchor, t: "Lighthouse archive", d: "Charts of every operating sentinel south of 50°S." },
              { i: Ship, t: "Departure priority", d: "First access to Cape Horn and Antarctic slots." },
              { i: Compass, t: "Quarterly dispatch", d: "Printed field journal mailed worldwide." },
            ].map((b) => (
              <li key={b.t} className="bg-card p-8">
                <b.i className="w-5 h-5 text-glacier" />
                <div className="font-display text-xl text-ice mt-5">{b.t}</div>
                <div className="text-sm text-muted-foreground mt-2 leading-relaxed">{b.d}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FEATURED TRAVEL PARTNERS */}
      <section className="py-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          eyebrow="Featured Travel Partners · Affiliate"
          title="Operators we trust at the end of the world"
          description="Vetted Chilean and polar operators. Bookings through these partners support the atlas."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: "Australis Cruises", note: "Cape Horn · Tierra del Fuego" },
            { n: "Antarctica21", note: "Punta Arenas → Antártica · air-cruise" },
            { n: "Explora Patagonia", note: "Torres del Paine lodges" },
            { n: "Sim Expeditions", note: "Cape Horn sailing yachts" },
          ].map((p) => (
            <a key={p.n} href="#" className="group flex items-center justify-between p-6 border border-border hover:border-glacier/60 hover:bg-card transition-colors">
              <div>
                <div className="font-display text-xl text-ice">{p.n}</div>
                <div className="text-[10px] uppercase tracking-coord text-muted-foreground mt-1">{p.note}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-glacier group-hover:translate-x-1 transition-transform" />
            </a>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="relative py-32 border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/40 to-background" />
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <SectionHeading
            align="center"
            eyebrow="Book an Expedition · Limited 2026 Departures"
            title="Cross the latitude where the world thins out"
            description="Curated journeys led by Chilean glaciologists, lighthouse keepers and former Antarctic naval crew."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/travel" className="inline-flex items-center gap-3 bg-glacier text-primary-foreground px-8 py-4 text-xs uppercase tracking-coord hover:bg-ice transition-colors">
              <Ship className="w-4 h-4" /> Book an expedition <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/routes" className="inline-flex items-center gap-3 border border-glacier/40 text-ice px-8 py-4 text-xs uppercase tracking-coord hover:bg-glacier/10">
              Browse route guides
            </Link>
          </div>
          <div className="mt-10 font-mono text-[10px] tracking-coord text-muted-foreground uppercase">
            Departures · Punta Arenas · Puerto Williams · Cabo de Hornos
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
