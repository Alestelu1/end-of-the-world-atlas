import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-ice">End of the World Atlas</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
            A visual cartography of Patagonia, Tierra del Fuego, Cape Horn and Chilean Antarctica —
            the last frontier of the inhabited world.
          </p>
          <div className="mt-6 font-mono text-[10px] tracking-coord text-muted-foreground uppercase">
            54°48′S · 68°18′W
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-coord text-glacier mb-4">Explore</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/atlas" className="hover:text-ice">Atlas</Link></li>
            <li><Link to="/routes" className="hover:text-ice">Routes</Link></li>
            <li><Link to="/lighthouses" className="hover:text-ice">Lighthouses</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-coord text-glacier mb-4">Travel</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/travel" className="hover:text-ice">Expeditions</Link></li>
            <li><Link to="/travel" className="hover:text-ice">Premium guides</Link></li>
            <li><Link to="/about" className="hover:text-ice">About</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between text-[11px] text-muted-foreground font-mono uppercase tracking-coord gap-2">
          <div>© {new Date().getFullYear()} End of the World Atlas</div>
          <div>Cartographic project · Stockholm / Ushuaia</div>
        </div>
      </div>
    </footer>
  );
}
