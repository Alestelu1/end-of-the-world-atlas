import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import tdf from "@/assets/tierra-fuego.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — End of the World Atlas" },
      { name: "description", content: "An independent cartographic project documenting the southernmost geographies on Earth, between Patagonia, Cape Horn and Chilean Antarctica." },
      { property: "og:title", content: "About — End of the World Atlas" },
      { property: "og:description", content: "An independent cartographic project on the southern frontier." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="pt-40 pb-16 max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="About" title="A cartography written in salt and ice." />
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            End of the World Atlas is an independent cartographic project rooted in Puerto Williams,
            on Navarino Island — the southernmost city on Earth and the operational gateway to the
            Cape Horn archipelago and the Chilean Antarctic projection.
          </p>
          <p>
            We work alongside Chilean naval pilots, lighthouse keepers of the southern sentinel
            network, glaciologists and Yagán communities to translate a remote austral geography
            into a cinematic atlas anyone can navigate.
          </p>
          <p className="text-glacier italic font-display text-2xl">
            "Mapping the Chilean austral frontier through geography, navigation and southern memory."
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1600px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-px bg-border">
        {[
          { k: "1,250,000", l: "km² documented" },
          { k: "147", l: "lighthouses catalogued" },
          { k: "12", l: "expeditions per year" },
        ].map((s) => (
          <div key={s.l} className="bg-background p-10">
            <div className="font-display text-5xl md:text-6xl text-glacier">{s.k}</div>
            <div className="text-xs uppercase tracking-coord text-muted-foreground mt-3">{s.l}</div>
          </div>
        ))}
      </section>

      <section className="relative h-[60vh] min-h-[480px] overflow-hidden">
        <img src={tdf} alt="Tierra del Fuego" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="relative h-full max-w-3xl mx-auto px-6 flex items-center text-center">
          <p className="font-display text-3xl md:text-5xl text-ice text-balance leading-[1.15]">
            We document the south so that, even from the north, the world feels finite, fragile —
            <span className="text-glacier italic font-light"> and worth keeping.</span>
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
