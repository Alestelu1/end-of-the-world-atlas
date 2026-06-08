import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { ArrowRight, Compass, MapPin, Radio } from "lucide-react";

export const Route = createFileRoute("/travel")({
  head: () => ({
    meta: [
      { title: "Field Access Notes - End of the World Atlas" },
      {
        name: "description",
        content:
          "A future editorial section for non-commercial field access notes, geographic context and public-route orientation within End of the World Atlas.",
      },
      { property: "og:title", content: "Field Access Notes - End of the World Atlas" },
      {
        property: "og:description",
        content:
          "A non-commercial placeholder for future atlas notes on access geography, public corridors and field context.",
      },
      { property: "og:url", content: "https://end-of-the-world-atlas.example/travel" },
    ],
    links: [{ rel: "canonical", href: "https://end-of-the-world-atlas.example/travel" }],
  }),
  component: FieldAccessNotesPage,
});

const editorialNotes = [
  {
    icon: MapPin,
    label: "Public geography",
    title: "Access as context",
    body: "Future notes will describe roads, ports, channels and protected-landscape edges as geographic context, not as commercial itineraries.",
  },
  {
    icon: Compass,
    label: "Cartographic method",
    title: "Routes before recommendations",
    body: "The section will privilege maps, place relationships, public infrastructure and source hierarchy over advice framed around consumption.",
  },
  {
    icon: Radio,
    label: "Maritime signals",
    title: "Signals and constraints",
    body: "Where relevant, the atlas will document beacons, crossings, weather exposure and navigation constraints in sober editorial language.",
  },
];

function FieldAccessNotesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-40 pb-20 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading
          as="h1"
          eyebrow="Field access"
          title="Future editorial notes on southern access geography"
          description="This unlinked route is reserved for future non-commercial notes about public corridors, maritime approaches, protected-landscape edges and the geographic conditions that shape field access in Chile's far south."
        />
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-px bg-border">
          <aside className="bg-card p-8 lg:p-10">
            <div className="text-xs uppercase tracking-coord text-glacier">Editorial status</div>
            <p className="font-display text-3xl md:text-4xl text-ice mt-5 leading-[1.12] text-balance">
              This section is reserved for source-based field context and public geography notes.
            </p>
          </aside>
          <div className="bg-background p-8 lg:p-10">
            <div className="text-xs uppercase tracking-coord text-glacier">Current use</div>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              End of the World Atlas currently centers its public structure on places, route
              dossiers, lighthouses and documentary cartography. Field access notes may be developed
              later as source-based editorial context for understanding how southern geography is
              reached, crossed and maintained.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {editorialNotes.map((note) => (
            <article key={note.title} className="bg-card p-8 lg:p-10">
              <note.icon className="w-5 h-5 text-glacier" />
              <div className="text-[10px] uppercase tracking-coord text-glacier mt-6">
                {note.label}
              </div>
              <h2 className="font-display text-2xl text-ice mt-2">{note.title}</h2>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{note.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap gap-4">
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
      </section>

      <SiteFooter />
    </div>
  );
}
