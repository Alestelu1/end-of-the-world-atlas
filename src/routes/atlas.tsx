import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { SceneMap } from "@/components/scene-map";
import torres from "@/assets/torres-paine.jpg";
import tdf from "@/assets/tierra-fuego.jpg";
import cape from "@/assets/cape-horn.jpg";
import ant from "@/assets/antarctica.jpg";
import hero from "@/assets/hero-patagonia.jpg";

export const Route = createFileRoute("/atlas")({
  head: () => ({
    meta: [
      { title: "Atlas — Patagonia, Tierra del Fuego, Cape Horn & Antarctica" },
      { name: "description", content: "Explore the southernmost regions of the world through cinematic destination cards and an interactive cartographic map of the Chilean south." },
      { property: "og:title", content: "The Atlas — End of the World" },
      { property: "og:description", content: "Six regions, one frontier. The cinematic atlas of the Chilean south." },
      { property: "og:url", content: "https://southern-uncharted-atlas.lovable.app/atlas" },
    ],
    links: [
      { rel: "canonical", href: "https://southern-uncharted-atlas.lovable.app/atlas" },
    ],
  }),
  component: AtlasPage,
});

function AtlasPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <section className="pt-40 pb-20 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SectionHeading as="h1" eyebrow="The Atlas" title="A cartography of the last frontier" description="Six regions documented through coordinates, geology and image." />
      </section>
      <section className="pb-24 max-w-[1600px] mx-auto px-6 lg:px-12">
        <SceneMap />
      </section>
      <section className="pb-32 max-w-[1600px] mx-auto px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DestinationCard index="01" image={torres} title="Torres del Paine" region="Magallanes · Chile" coord="51°00′S 73°00′W" blurb="Three granite towers carved by Pleistocene glaciers." />
        <DestinationCard index="02" image={tdf} title="Tierra del Fuego" region="Beagle Channel" coord="54°48′S 68°18′W" blurb="The Land of Fire — sub-Antarctic forests over iron waters." />
        <DestinationCard index="03" image={cape} title="Cape Horn" region="Cabo de Hornos" coord="55°59′S 67°16′W" blurb="Where the Atlantic and Pacific oceans collide in fury." />
        <DestinationCard index="04" image={ant} title="Antarctic Peninsula" region="Antártica Chilena" coord="64°00′S 60°00′W" blurb="A continent of ice breathing through penguin colonies." />
        <DestinationCard index="05" image={hero} title="Southern Ice Field" region="Campo de Hielo Sur" coord="49°30′S 73°30′W" blurb="The third largest fresh water reserve on Earth." />
        <DestinationCard index="06" image={tdf} title="Cordillera Darwin" region="Tierra del Fuego" coord="54°40′S 69°30′W" blurb="A range still partly unmapped — Darwin's last frontier." />
      </section>
      <SiteFooter />
    </div>
  );
}
