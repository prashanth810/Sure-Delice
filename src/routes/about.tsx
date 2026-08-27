import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Reveal } from "@/components/site/Reveal";
import { highlights, images, restaurant } from "@/data/site";

const title = "About Us — Sura Delice Restaurant & Banquets, Hyderabad";
const description =
  "About Sura Delice Restaurant & Banquets: a multi cuisine restaurant and banquet destination in Hyderabad for family dining, group lunches and celebrations.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={images.interior}
        alt="Interior of Sura Delice restaurant"
        eyebrow="About"
        title="A Warm Welcome To Sura Delice"
        description="A multi cuisine kitchen and a banquet destination, under one roof."
      />

      <section className="section-y">
        <div className="container-royal grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built Around Family Tables"
              description="Sura Delice brings together Mutton Biryani, chicken starters and kebabs, fish and prawns, vegetarian dishes and desserts in a setting made for family lunches, family dinners, office and group lunches. The same kitchen caters our banquet gatherings, so celebrations get the same food guests come back for."
            />
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <Fact label="Address" value={restaurant.address} />
              <Fact label="Opening Hours" value={`Daily ${restaurant.hours}`} />
              <Fact label="Banquet Dining" value={restaurant.banquet.seated} />
              <Fact label="Gatherings" value={restaurant.banquet.floating} />
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="gold" asChild>
                <Link to="/reservations">
                  Book a Table
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/menu">
                  View Menu
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <Reveal className="card-royal self-start">
            <img
              src={images.ambience}
              alt="Warm ambience inside Sura Delice"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-royal">
          <SectionHeading eyebrow="What We Offer" title="Dining, Catering & Events" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <FeatureCard key={h.title} {...h} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-foreground">{value}</dd>
    </div>
  );
}
