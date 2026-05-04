import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Compass } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/atlas", label: "Atlas" },
  { to: "/routes", label: "Routes" },
  { to: "/lighthouses", label: "Lighthouses" },
  { to: "/travel", label: "Travel" },
  { to: "/about", label: "About" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Compass className="w-5 h-5 text-glacier transition-transform duration-700 group-hover:rotate-180" />
          <div className="leading-none">
            <div className="font-display text-base text-ice">End of the World</div>
            <div className="font-mono text-[9px] tracking-coord text-muted-foreground uppercase">Atlas · 56°S</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-xs uppercase tracking-coord text-muted-foreground hover:text-ice transition-colors"
              activeProps={{ className: "px-4 py-2 text-xs uppercase tracking-coord text-glacier" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/travel"
          className="hidden md:inline-flex text-xs uppercase tracking-coord px-4 py-2 border border-glacier/40 text-ice hover:bg-glacier hover:text-primary-foreground transition-colors"
        >
          Book Expedition
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ice"
          aria-label="menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-coord text-muted-foreground"
                activeProps={{ className: "py-3 text-sm uppercase tracking-coord text-glacier" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
