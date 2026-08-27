import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FoodCard } from "@/components/site/FoodCard";
import { Reveal } from "@/components/site/Reveal";
import { cuisines, images, menuSections } from "@/data/site";

const title = "Menu — Biryani, Kebabs, Seafood & Desserts | Sura Delice";
const description =
  "Explore the Sura Delice menu: Mutton Biryani, Sura Special Chicken Kebab, Godavari Chepa Vepudu, Prawns Vepudu, soups, vegetarian dishes, desserts and drinks.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <>
      <PageHero
        image={images.kebabs}
        alt="Sura Special Chicken Kebab platter"
        eyebrow="Multi Cuisine"
        title="Our Menu"
        description="Biryani, kebabs, seafood, soups, vegetarian dishes and desserts — veg and non-veg."
      >
        <Button variant="gold" size="lg" asChild>
          <Link to="/reservations">
            Book a Table
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button variant="onDark" size="lg" asChild>
          <Link to="/order-online">
            Order Online
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Guest Favourites"
            title="Most Ordered Dishes"
            description="Dish availability can vary by day — our team will confirm when you order."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cuisines.map((c, i) => (
              <FoodCard key={c.title} {...c} delay={(i % 3) * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-royal">
          <SectionHeading eyebrow="Full Menu" title="By Course" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {menuSections.map((section, i) => (
              <Reveal
                key={section.id}
                delay={(i % 2) * 90}
                className="card-royal p-6 md:p-8"
              >
                <h3 className="font-display text-xl text-primary">
                  {section.title}
                </h3>
                <span className="mt-4 block h-px w-16 bg-gold" />
                <ul className="mt-5 divide-y divide-border">
                  {section.items.map((item) => (
                    <li key={item.name} className="py-3">
                      <p className="text-sm font-medium text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {item.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center text-sm text-muted-foreground">
            <p>
              For current prices and daily specials, please call us on{" "}
              <Link to="/contact" className="font-medium text-primary underline">
                the restaurant number
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
