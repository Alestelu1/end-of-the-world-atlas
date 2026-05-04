type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      <div className="flex items-center gap-3 text-xs uppercase tracking-coord text-glacier">
        <span className="h-px w-8 bg-glacier/60" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-6xl mt-5 text-ice text-balance leading-[1.05]">{title}</h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance">{description}</p>
      )}
    </div>
  );
}
