# End of the World Atlas

End of the World Atlas is a documentary and cartographic web atlas of Chile's far south. It frames Patagonia, the Strait of Magellan, Puerto Williams, Cape Horn, maritime routes and Antarctic threshold geographies through place records, route dossiers, lighthouses, channels and editorial map language.

The project is part of the Austral Beacon ecosystem: a set of related digital initiatives concerned with southern geography, maritime memory, coastal infrastructure and atlas-based storytelling.

## Project Overview

This site presents the southern edge of Chile as an atlas rather than a destination guide. Its pages emphasize geography, navigation, inhabited edges, channels, capes, beacons and the transitional waters before Antarctica.

The current application is built as a TanStack Start site with structured editorial data, file-based routes and Cloudflare Workers deployment support through Nitro.

## Editorial Focus

- Patagonia and the southern Chilean archipelago as documentary geography.
- Puerto Williams, Navarino Island and the Beagle Channel as channel-edge place records.
- Cape Horn as a cape, lighthouse point and maritime threshold.
- The Strait of Magellan as a working maritime corridor.
- Antarctic threshold geographies as transitions between archipelago, open ocean, weather, current and latitude.
- Lighthouses, beacons, channels and maritime routes as cartographic references.

The writing avoids booking language, price claims, sales framing and official-status claims. It treats places and routes as atlas entries, not commercial products.

## Current Features

- Places index at `/places`, powered by reusable atlas place data.
- Southern Routes page at `/routes`, powered by reusable route dossier data.
- Puerto Williams place dossier at `/places/puerto-williams`.
- Cape Horn place dossier at `/places/cape-horn`.
- Reusable data files for places and routes:
  - `src/data/places.ts`
  - `src/data/routes.ts`
- Editorial metadata and Schema.org structured data on atlas pages.
- Cloudflare Workers / Nitro configuration for server deployment.
- Shared navigation, footer and section heading components.

## Tech Stack

- TanStack Start
- React
- TypeScript
- Tailwind CSS
- Vite
- Cloudflare Workers
- Wrangler / Nitro
- GitHub + Codex workflow

## Project Structure

```text
src/
  assets/                 Image assets used by atlas pages
  components/             Shared navigation, footer, headings and UI components
  data/
    places.ts             Reusable atlas place records
    routes.ts             Reusable Southern Routes dossier records
  routes/
    atlas.tsx             Atlas overview route
    places.tsx            Places index route
    places/
      puerto-williams.tsx Puerto Williams place dossier
      cape-horn.tsx       Cape Horn place dossier
    routes.tsx            Southern Routes route
    lighthouses.tsx       Lighthouse-oriented route
    travel.tsx            Existing site route
  routeTree.gen.ts        Generated TanStack Router route tree
  router.tsx              Router setup
  styles.css              Global styling
```

Root configuration includes:

```text
package.json
vite.config.ts
wrangler.jsonc
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm.cmd run dev
```

Create a production build:

```bash
npm.cmd run build
```

Run linting:

```bash
npm.cmd run lint
```

## Cloudflare Workers Deployment

The project is configured for Cloudflare Workers through TanStack Start, Nitro and Wrangler. `vite.config.ts` enables Nitro output, and `wrangler.jsonc` defines the Worker configuration.

Build the project:

```bash
npm.cmd run build
```

Deploy the prebuilt Nitro output:

```bash
npx.cmd nitro deploy --prebuilt
```

No deployed Cloudflare URL is documented here yet.

## Roadmap

- Add additional individual place dossiers from `atlasPlaces`.
- Connect index cards to available individual place pages.
- Expand maritime and lighthouse references where the atlas data supports them.
- Continue refining structured data for editorial, cartographic and place-based pages.
- Add more documentary context for threshold geographies before Antarctica.

## Related Austral Beacon Initiatives

End of the World Atlas sits within the Austral Beacon ecosystem alongside related work on southern maritime geography, beacons, atlas records and documentary place-based interfaces.

Future documentation can describe those initiatives once their scope, names and public surfaces are stable.
