import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://end-of-the-world-atlas.example";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/atlas", changefreq: "weekly", priority: "0.9" },
          { path: "/places", changefreq: "weekly", priority: "0.9" },
          { path: "/places/puerto-williams", changefreq: "monthly", priority: "0.8" },
          { path: "/places/cape-horn", changefreq: "monthly", priority: "0.8" },
          { path: "/places/beagle-channel", changefreq: "monthly", priority: "0.8" },
          { path: "/places/navarino-island", changefreq: "monthly", priority: "0.8" },
          { path: "/places/diego-ramirez-islands", changefreq: "monthly", priority: "0.8" },
          { path: "/places/strait-of-magellan", changefreq: "monthly", priority: "0.8" },
          { path: "/places/punta-arenas", changefreq: "monthly", priority: "0.8" },
          { path: "/places/antarctic-threshold", changefreq: "monthly", priority: "0.8" },
          { path: "/routes", changefreq: "weekly", priority: "0.9" },
          { path: "/lighthouses", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
