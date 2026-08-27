import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bike, Phone, ShoppingBag, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Reveal } from "@/components/site/Reveal";
import { images, restaurant } from "@/data/site";

const title = "Order Online — Delivery & Takeaway | Sura Delice";
const description =
  "Order Mutton Biryani, kebabs, seafood and vegetarian dishes from Sura Delice, Hyderabad for delivery or takeaway. Call +91 98491 92830 to place an order.";

export const Route = createFileRoute("/order-online")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/order-online" },
    ],
    links: [{ rel: "canonical", href: "/order-online" }],
  }),
  component: OrderOnlinePage,
});

const options = [
  {
    title: "Delivery",
    description: "Get your favourites delivered to your doorstep in the area.",
    icon: Bike,
  },
  {
    title: "Takeaway",
    description: "Call ahead and collect your order fresh from the counter.",
    icon: ShoppingBag,
  },
  {
    title: "Online Ordering",
    description:
      "Ordering links are being set up — until then, orders are placed over the phone.",
    icon: Smartphone,
  },
];

function OrderOnlinePage() {
  return (
    <>
      <PageHero
        image={images.heroBiryani}
        alt="Mutton biryani served with raita and salan"
        eyebrow="Order"
        title="Your Favourite Food, Just a Few Clicks Away"
        description="Delivery, takeaway and online ordering from our multi cuisine kitchen."
      >
        <Button variant="gold" size="lg" asChild>
          <a href={restaurant.phoneHref}>
            <Phone aria-hidden="true" />
            Call to Order
          </a>
        </Button>
        <Button variant="onDark" size="lg" asChild>
          <Link to="/menu">
            View Menu
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="How To Order"
            title="Three Ways To Enjoy Our Food"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {options.map((o, i) => (
              <FeatureCard key={o.title} {...o} delay={i * 80} />
            ))}
          </div>

          <Reveal className="card-royal mx-auto mt-12 max-w-2xl p-8 text-center">
            <h3 className="font-display text-xl text-primary">Order Online</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Our online ordering link is not live yet. Place your delivery or
              takeaway order by calling the restaurant and we will confirm timing
              right away.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button variant="gold" size="lg" asChild>
                <a href={restaurant.phoneHref}>
                  <Phone aria-hidden="true" />
                  {restaurant.phone}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
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
