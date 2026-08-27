import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { footerLinks, navLinks, restaurant } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[oklch(0.15_0.05_20/0.92)] backdrop-blur-md shadow-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container-royal flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 leading-none">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[oklch(0.703_0.09_78/0.6)] bg-[oklch(0.703_0.09_78/0.15)]">
            <span className="font-display text-sm text-[oklch(0.703_0.09_78)]">♛</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold text-white md:text-lg">
              SURA DELICE
            </span>
            <span className="text-[9px] uppercase tracking-[0.22em] text-white/60">
              Restaurant &amp; Banquets
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{
                className: "text-white border-b-2 border-[oklch(0.703_0.09_78)] pb-0.5",
              }}
              inactiveProps={{ className: "text-white/75 border-b-2 border-transparent pb-0.5" }}
              className="px-3 py-1 text-sm font-medium transition-all duration-200 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={restaurant.phoneHref}
            className="hidden items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 sm:flex"
          >
            <Phone size={14} aria-hidden="true" />
            Call Now
          </a>
          <Button variant="gold" className="hidden sm:inline-flex" asChild>
            <Link to="/reservations">
              Book a Table
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10"
                aria-label="Open menu"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[86vw] max-w-sm">
              <SheetTitle className="font-display text-primary">Menu</SheetTitle>
              <nav className="mt-6 grid gap-1" aria-label="Mobile">
                {footerLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{
                      className:
                        "bg-secondary text-primary border-l-2 border-[oklch(0.703_0.09_78)]",
                    }}
                    className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 grid gap-2">
                <Button variant="gold" asChild onClick={() => setOpen(false)}>
                  <Link to="/reservations">
                    Book a Table
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="outline" asChild onClick={() => setOpen(false)}>
                  <Link to="/order-online">
                    Order Online
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <a href={restaurant.phoneHref}>
                    <Phone aria-hidden="true" />
                    {restaurant.phone}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
