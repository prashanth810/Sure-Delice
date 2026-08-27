import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Reveal } from "@/components/site/Reveal";
import { images, mapsReviewsUrl, restaurant, reviewCategories } from "@/data/site";

const title = "Reviews — What Our Guests Say | Sura Delice";
const description =
  "Guest feedback themes for Sura Delice Restaurant & Banquets: food, service, ambience, banquet and family dining in Hyderabad.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const themes: Record<string, string> = {
  Food: "Guests most often mention the Mutton Biryani, the chicken kebabs and the prawns starters.",
  Service: "Feedback frequently notes attentive table service and the late kitchen hours.",
  Ambience:
    "The warm dining hall, booth seating and festive evening lighting come up often in guest comments.",
  Banquet:
    "Families mention long-table dining for birthdays, festivals and family functions with in-house catering.",
  "Family Dining":
    "Roomy seating and both veg and non-veg options are commonly appreciated by larger groups.",
};

function ReviewsPage() {
  return (
    <>
      <PageHero
        image={images.ambience}
        alt="Warm candlelit ambience inside the restaurant"
        eyebrow="Guest Feedback"
        title="What Our Guests Say"
        description={`Rated ${restaurant.rating} across ${restaurant.reviewCount} reviews.`}
      >
        <Button variant="gold" size="lg" asChild>
          <a href={mapsReviewsUrl} target="_blank" rel="noreferrer">
            See All Reviews on Google
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <Reveal className="card-royal mx-auto flex max-w-xl flex-col items-center gap-3 p-8 text-center">
            <div className="flex items-center gap-1 text-gold" aria-hidden="true">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
              <Star className="size-5" />
            </div>
            <p className="font-display text-3xl text-primary">{restaurant.rating}</p>
            <p className="text-sm text-muted-foreground">
              Based on {restaurant.reviewCount} public reviews
            </p>
          </Reveal>

          <SectionHeading
            className="mt-16"
            eyebrow="By Category"
            title="What Guests Talk About"
            description="These are summaries of common feedback themes written by our team — they are not quotes from individual reviewers."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviewCategories.map((c, i) => (
              <ReviewCard key={c} category={c} quote={themes[c] ?? ""} delay={(i % 3) * 90} />
            ))}
          </div>

          <Reveal className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="max-w-xl text-sm text-muted-foreground">
              Individual guest reviews live on Google, where you can read them in full and add your
              own.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="gold" size="lg" asChild>
                <a href={mapsReviewsUrl} target="_blank" rel="noreferrer">
                  See All Reviews on Google
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/reservations">
                  Book a Table
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
