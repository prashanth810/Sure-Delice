import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Star,
  Truck,
  Users,
  Utensils,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FoodCard } from "@/components/site/FoodCard";
import { FeatureCard } from "@/components/site/FeatureCard";
import { ReviewCard } from "@/components/site/ReviewCard";
import { Reveal } from "@/components/site/Reveal";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import {
  banquetOccasions,
  cuisines,
  galleryItems,
  images,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  mapsReviewsUrl,
  restaurant,
} from "@/data/site";

const title = "Sura Delice Restaurant & Banquets — Multi Cuisine Dining, Hyderabad";
const description =
  "Mutton Biryani, kebabs, seafood, vegetarian dishes and buffet dining at Sura Delice Restaurant & Banquets, Hyderabad. Family, group and banquet dining daily 12 PM – 2 AM.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const strip = [
  {
    icon: Utensils,
    title: "Multi Cuisine Menu",
    text: "Biryani, kebabs, seafood, veg dishes and desserts",
  },
  {
    icon: PartyPopper,
    title: "Banquet & Celebrations",
    text: "Birthdays, festivals and family functions",
  },
  {
    icon: Users,
    title: "Family & Group Dining",
    text: "Booth, long-table and private dining",
  },
  {
    icon: Truck,
    title: "Dine-in · Takeaway · Delivery",
    text: "Order your favourites your way",
  },
];

const heroSlides = [
  { src: images.heroBanner, alt: "Sura Delice Restaurant and Banquets dining area" },
  { src: images.interior, alt: "Dining hall interior at Sura Delice" },
  { src: images.banquet, alt: "Long-table family dining at Sura Delice" },
  { src: images.celebration, alt: "Celebration table setting at Sura Delice" },
  { src: images.booth, alt: "Booth seating at Sura Delice" },
];

function Index() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {/* Auto-scrolling background carousel */}
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={i === slide ? s.alt : ""}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            aria-hidden={i !== slide}
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
              i === slide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Carousel dots */}
        <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 md:bottom-8 md:right-10">
          {heroSlides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === slide}
              onClick={() => setSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === slide ? "w-6 bg-[oklch(0.703_0.09_78)]" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.14_0.04_22/0.55)] via-[oklch(0.14_0.04_22/0.45)] to-[oklch(0.12_0.03_22/0.80)]" />
        <div className="container-royal relative flex min-h-[88vh] flex-col justify-between pb-10 pt-32 md:min-h-[94vh] md:pb-14 md:pt-40">
          {/* Hero text */}
          <div className="max-w-2xl">
            <p className="eyebrow mb-5 tracking-[0.25em] text-[oklch(0.703_0.09_78/0.90)]">
              Sura Delice Restaurant & Banquets
            </p>
            <h1 className="heading-xl text-white">
              Where Great Food Meets
              <br />
              Warm Hospitality
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              Multi-cuisine dining, family favourites and memorable celebrations in a warm and
              festive setting.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="lg"
                className="border-[oklch(0.703_0.09_78)] bg-[oklch(0.703_0.09_78/0.15)] text-white backdrop-blur-sm hover:bg-[oklch(0.703_0.09_78/0.35)] hover:border-[oklch(0.703_0.09_78)]"
                asChild
              >
                <Link to="/menu">
                  Explore Our Menu
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="gold" size="lg" asChild>
                <Link to="/reservations">
                  Book a Table
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            {/* Rating row */}
            <ul className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <li className="flex items-center gap-1.5">
                <Star
                  className="size-3.5 fill-[oklch(0.703_0.09_78)] text-[oklch(0.703_0.09_78)]"
                  aria-hidden="true"
                />
                {restaurant.rating}
              </li>
              <li className="h-3.5 w-px bg-white/30" aria-hidden="true" />
              <li>{restaurant.reviewCount} Reviews</li>
              <li className="h-3.5 w-px bg-white/30" aria-hidden="true" />
              <li>Open Till 2 AM</li>
            </ul>
          </div>

          {/* Bottom location tag */}
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
            <MapPin className="size-3 shrink-0" aria-hidden="true" />
            Sura Delice &bull; Restaurant &amp; Banquets &bull; Hyderabad
          </div>
        </div>

        {/* Scroll mouse indicator — click to scroll to next section */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <button
            aria-label="Scroll to next section"
            onClick={() => {
              const hero = document.querySelector("section");
              const next = hero?.nextElementSibling as HTMLElement | null;
              next?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
          >
            <svg
              width="26"
              height="40"
              viewBox="0 0 26 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="transition-opacity duration-200 group-hover:opacity-100 opacity-60"
            >
              {/* Mouse body */}
              <rect
                x="1"
                y="1"
                width="24"
                height="38"
                rx="12"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="2"
              />
              {/* Scroll wheel dot — bounces */}
              <rect
                x="11"
                y="7"
                width="4"
                height="7"
                rx="2"
                fill="rgba(255,255,255,0.9)"
                className="animate-bounce"
              />
            </svg>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40 group-hover:text-white/70 transition-colors">
              Scroll
            </span>
          </button>
        </div>
      </section>

      {/* Quick features strip */}
      <section className="border-b border-border bg-secondary/60">
        <div className="container-royal grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {strip.map((s) => (
            <div key={s.title} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-primary">
                <s.icon className="size-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                  {s.text}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-y bg-cream">
        <div className="container-royal grid items-center gap-10 lg:grid-cols-[0.85fr_1fr]">
          <Reveal className="card-royal overflow-hidden">
            <img
              src={images.interior}
              alt="Dining hall at Sura Delice with warm interiors"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Dining With Us"
              title="A Warm Dining Experience"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sura Delice is a multi cuisine restaurant and banquet destination — warm interiors,
                booth seating, long tables for larger groups and service that runs late into the
                night.
              </p>
              <p>
                One kitchen serves Mutton Biryani, chicken starters and kebabs, fish and prawns,
                vegetarian dishes, desserts and buffet dining — for family lunches, office lunches
                and celebrations alike.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="outline" asChild>
                <Link to="/about">
                  Discover Our Story
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="From The Kitchen"
            title="Taste What Everyone Talks About"
            description="Mutton Biryani, Sura Special Chicken Kebab, Prawns Vepudu, buffet dining, desserts and refreshing drinks."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cuisines.slice(0, 6).map((c, i) => (
              <FoodCard key={c.title} {...c} delay={(i % 3) * 90} />
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Button size="lg" asChild>
              <Link to="/menu">
                <Utensils aria-hidden="true" />
                View Full Menu
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why */}
      <section className="section-y bg-cream">
        <div className="container-royal">
          <SectionHeading eyebrow="Why Sura Delice" title="Why Sura Delice" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Utensils}
              title="Authentic Flavours"
              description="Biryani, kebabs, seafood, vegetarian dishes and desserts from one kitchen."
            />
            <FeatureCard
              icon={Users}
              title="Family Friendly"
              description="Booth seating, long tables and kid-friendly dining for families and groups."
              delay={80}
            />
            <FeatureCard
              icon={PartyPopper}
              title="Celebrations"
              description="Birthday, festival and family celebrations in a festive dining atmosphere."
              delay={160}
            />
            <FeatureCard
              icon={MapPin}
              title="Hyderabad Favourite"
              description={`Rated ${restaurant.rating} by ${restaurant.reviewCount} guests in Hyderabad.`}
              delay={240}
            />
          </div>
        </div>
      </section>

      {/* Banquet split */}
      <section>
        <div className="grid items-stretch lg:grid-cols-2">
          <Reveal className="min-h-[320px]">
            <img
              src={images.banquet}
              alt="Long-table banquet dining at Sura Delice"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </Reveal>
          <Reveal delay={90} className="bg-primary px-6 py-12 md:px-12 lg:py-16">
            <p className="eyebrow mb-3 text-primary-foreground/75">Banquet Hall</p>
            <h2 className="heading-lg text-primary-foreground">Celebrate Your Special Moments</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              Celebrate special moments in a warm and festive dining atmosphere, with long-table
              dining, private dining and in-house veg and non-veg catering.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {banquetOccasions.slice(0, 6).map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-primary-foreground/25 px-3 py-1 text-xs font-medium text-primary-foreground/85"
                >
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button variant="gold" size="lg" asChild>
                <Link to="/banquet">
                  Explore Banquet Hall
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="onDark" size="lg" asChild>
                <Link to="/events">
                  Enquire Now
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-y bg-cream">
        <div className="container-royal">
          <SectionHeading eyebrow="Guest Reviews" title="Loved by Hyderabad" />
          <Reveal className="mt-8 text-center">
            <p className="font-display text-4xl text-primary">
              {restaurant.rating.split(" ")[0]}
              <Star
                className="ml-2 inline size-6 fill-current align-middle text-gold"
                aria-hidden="true"
              />
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {restaurant.reviewCount} Google reviews
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ReviewCard
              category="Google Guest"
              quote="Guests most often highlight the Mutton Biryani and the chicken kebabs."
            />
            <ReviewCard
              category="Google Guest"
              quote="Families tell us the long tables work well for birthdays and family functions."
              delay={90}
            />
            <ReviewCard
              category="Google Guest"
              quote="Late kitchen hours and roomy seating make it an easy choice for family dinners."
              delay={180}
            />
          </div>
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews">
                Read More Reviews
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href={mapsReviewsUrl} target="_blank" rel="noreferrer">
                Leave Feedback
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Sura Delice"
            description="Food, interiors, banquet setups and celebration moments from our restaurant."
          />
          <div className="mt-12">
            <GalleryGrid items={galleryItems.slice(0, 9)} />
          </div>
          <Reveal className="mt-10 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">
                View Gallery
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section-y bg-cream">
        <div className="container-royal grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Visit Us" title="Come Dine With Us" />
            <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                {restaurant.address}
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={restaurant.phoneHref} className="hover:text-primary">
                  {restaurant.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                Open daily · {restaurant.hours} · Dine-in, takeaway & delivery
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a href={mapsDirectionsUrl} target="_blank" rel="noreferrer">
                  <Navigation aria-hidden="true" />
                  Get Directions
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={restaurant.phoneHref}>
                  <Phone aria-hidden="true" />
                  Call Restaurant
                </a>
              </Button>
              <Button variant="gold" asChild>
                <Link to="/reservations">
                  Book a Table
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
          <Reveal delay={90} className="card-royal overflow-hidden">
            <div className="aspect-4/3 w-full">
              <iframe
                title={`Map showing the location of ${restaurant.name}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
