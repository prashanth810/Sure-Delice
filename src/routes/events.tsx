import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FoodCard } from "@/components/site/FoodCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { eventTypes, images, restaurant } from "@/data/site";

const title = "Events — Make Every Occasion Memorable | Sura Delice";
const description =
  "Birthday celebrations, festival dining, family gatherings, office lunches and banquet events hosted at Sura Delice Restaurant & Banquets, Hyderabad.";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <PageHero
        image={images.celebration}
        alt="Table decorated with balloons for a celebration"
        eyebrow="Events"
        title="Make Every Occasion Memorable"
        description={`${restaurant.banquet.seated} and ${restaurant.banquet.floating.toLowerCase()} — with in-house veg and non-veg catering.`}
      >
        <Button variant="gold" size="lg" asChild>
          <a href="#plan">
            Plan Your Event
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Occasions"
            title="Events We Host"
            description="Every event is catered by the same multi cuisine kitchen that serves the restaurant."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e, i) => (
              <FoodCard
                key={e.title}
                title={e.title}
                description={e.description}
                image={e.image}
                alt={e.alt}
                delay={(i % 3) * 90}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream" id="plan">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Plan Your Event"
            title="Tell Us About Your Occasion"
            description="Send an enquiry and our banquet team will call you with availability, menu options and pricing."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <EnquiryForm id="event-enquiry" />
          </div>
          <Reveal className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link to="/banquet">
                See Banquet Hall Details
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
