import { Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { footerLinks, mapsDirectionsUrl, restaurant } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-0 bg-primary text-primary-foreground">
      <div className="container-royal grid gap-10 py-14 md:grid-cols-3 md:py-16">
        <div>
          <p className="font-display text-2xl">{restaurant.name}</p>
          <p className="mt-2 text-sm text-primary-foreground/70">
            {restaurant.tagline}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-primary-foreground/80">
            Mutton Biryani, kebabs, seafood, vegetarian dishes and desserts —
            served in a warm setting, with banquet and group dining for every
            celebration.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Visit Us
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
                {restaurant.address}
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={restaurant.phoneHref}>{restaurant.phone}</a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
              Open daily {restaurant.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-royal flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
          </p>
          <p>Restaurant &amp; Banquets · Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
