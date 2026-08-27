import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { LocationMap } from "@/components/site/LocationMap";
import { Reveal } from "@/components/site/Reveal";
import { images, mapsDirectionsUrl, restaurant } from "@/data/site";

const title = "Contact & Location — Sura Delice Restaurant & Banquets";
const description =
  "Visit Sura Delice Restaurant & Banquets in Hyderabad. Call +91 98491 92830 for tables, takeaway and banquet enquiries. Open daily 12:00 PM – 2:00 AM.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={images.exterior}
        alt="Sura Delice signage inside the restaurant"
        eyebrow="Contact"
        title="Visit Sura Delice"
        description="Restaurant & Banquets — open daily from noon until 2 AM."
      >
        <Button variant="gold" size="lg" asChild>
          <a href={restaurant.phoneHref}>
            <Phone aria-hidden="true" />
            Call Now
          </a>
        </Button>
        <Button variant="onDark" size="lg" asChild>
          <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
            <Navigation aria-hidden="true" />
            Get Directions
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact Information"
              title="Reach Us"
            />
            <ul className="mt-8 space-y-4">
              <Detail icon={MapPin} label="Address" value={restaurant.address} />
              <Detail
                icon={Phone}
                label="Phone"
                value={restaurant.phone}
                href={restaurant.phoneHref}
              />
              <Detail
                icon={Clock}
                label="Opening Hours"
                value={`Daily ${restaurant.hours}`}
              />
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-royal">
          <SectionHeading eyebrow="Location" title="Find Us On The Map" />
          <div className="mt-12">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <Reveal as="li" className="flex gap-3 rounded-xl border border-border bg-card p-4">
      <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        {href ? (
          <a href={href} className="block text-sm font-medium text-primary">
            {value}
          </a>
        ) : (
          <span className="block text-sm text-foreground">{value}</span>
        )}
      </span>
    </Reveal>
  );
}
