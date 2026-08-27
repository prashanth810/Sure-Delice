import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureCard } from "@/components/site/FeatureCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { banquetFeatures, banquetOccasions, images } from "@/data/site";

const title = "Banquet & Group Dining — Sura Delice Restaurant & Banquets";
const description =
  "Banquet and group dining at Sura Delice, Hyderabad: long-table dining, private dining and veg and non-veg catering for birthdays, festivals and family functions.";

export const Route = createFileRoute("/banquet")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/banquet" },
    ],
    links: [{ rel: "canonical", href: "/banquet" }],
  }),
  component: BanquetPage,
});

function BanquetPage() {
  return (
    <>
      <PageHero
        image={images.banquet}
        alt="Long-table banquet dining at Sura Delice"
        eyebrow="Banquet Hall"
        title="Your Celebration. Our Festive Setting."
        description="Celebrate special moments in a warm and festive dining atmosphere, with in-house veg and non-veg catering."
      >
        <Button variant="gold" size="lg" asChild>
          <a href="#enquiry">
            Request Event Enquiry
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading eyebrow="Venue Features" title="What We Offer" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {banquetFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-royal grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Perfect For"
              title="Occasions We Host"
              description="From small family gatherings to larger group dining, the same kitchen that serves the restaurant caters your event."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {banquetOccasions.map((o, i) => (
                <Reveal
                  as="li"
                  key={o}
                  delay={(i % 4) * 60}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  {o}
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="card-royal h-full min-h-[320px] overflow-hidden">
            <img
              src={images.celebration}
              alt="Table decorated with balloons for a celebration"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Enquiry"
            title="Request Event Enquiry"
            description="Share your date and guest count — our banquet team will call you to confirm availability, menu and pricing."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <EnquiryForm id="enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
