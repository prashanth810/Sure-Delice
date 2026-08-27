import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ReservationForm } from "@/components/site/ReservationForm";
import { images, restaurant } from "@/data/site";

const title = "Reserve Your Table — Sura Delice Restaurant & Banquets";
const description =
  "Send a table reservation request to Sura Delice Restaurant & Banquets, Hyderabad. Our team calls you back to confirm. Open daily 12:00 PM – 2:00 AM.";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: ReservationsPage,
});

function ReservationsPage() {
  return (
    <>
      <PageHero
        image={images.interior}
        alt="Set dining tables inside Sura Delice"
        eyebrow="Reservations"
        title="Reserve Your Table"
        description="Send us your preferred date and time — our team will call you to confirm."
      >
        <Button variant="onDark" size="lg" asChild>
          <a href={restaurant.phoneHref}>
            <Phone aria-hidden="true" />
            {restaurant.phone}
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Request"
            title="Table Reservation Request"
            description={`We serve daily from ${restaurant.hours}. Availability is confirmed by our team over a call — this form does not hold a table automatically.`}
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  );
}
