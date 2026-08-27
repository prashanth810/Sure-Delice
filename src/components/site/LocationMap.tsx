import { ArrowRight, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mapsDirectionsUrl, mapsEmbedUrl, restaurant } from "@/data/site";
import { Reveal } from "./Reveal";

export function LocationMap() {
  return (
    <Reveal className="card-royal overflow-hidden">
      <div className="aspect-16/10 w-full sm:aspect-21/9">
        <iframe
          title={`Map showing the location of ${restaurant.name}`}
          src={mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
          {restaurant.address}
        </p>
        <Button variant="gold" asChild>
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
            <Navigation aria-hidden="true" />
            Get Directions
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </div>
    </Reveal>
  );
}
