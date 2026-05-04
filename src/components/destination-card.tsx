import { ArrowUpRight } from "lucide-react";

type Props = {
  index: string;
  image: string;
  title: string;
  region: string;
  coord: string;
  blurb: string;
};

export function DestinationCard({ index, image, title, region, coord, blurb }: Props) {
  return (
    <article className="group relative overflow-hidden bg-card border border-border hover:border-glacier/60 transition-all duration-700">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute top-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-coord text-ice/80 font-mono">
          <span>№ {index}</span>
          <span>{coord}</span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="text-[10px] uppercase tracking-coord text-glacier mb-2">{region}</div>
          <h3 className="font-display text-3xl text-ice">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex items-start justify-between gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{blurb}</p>
        <ArrowUpRight className="w-5 h-5 text-glacier shrink-0 group-hover:rotate-45 transition-transform duration-500" />
      </div>
    </article>
  );
}
