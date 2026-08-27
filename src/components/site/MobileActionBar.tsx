import { Link } from "@tanstack/react-router";
import { CalendarCheck, Navigation, Phone } from "lucide-react";
import { mapsDirectionsUrl, restaurant } from "@/data/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <a
          href={restaurant.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-medium text-foreground"
        >
          <Phone className="size-4 text-gold" aria-hidden="true" />
          Call
        </a>
        <Link
          to="/reservations"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-[11px] font-medium text-foreground"
        >
          <CalendarCheck className="size-4 text-gold" aria-hidden="true" />
          Book a Table
        </Link>
        <a
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[11px] font-medium text-foreground"
        >
          <Navigation className="size-4 text-gold" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
