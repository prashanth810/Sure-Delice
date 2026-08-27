import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import {
  galleryCategories,
  galleryItems,
  images,
  type GalleryCategory,
} from "@/data/site";

const title = "Gallery — Food, Restaurant & Banquet | Sura Delice";
const description =
  "Photo gallery of Sura Delice: signature dishes, drinks, the dining hall, booth seating, long-table banquet dining, celebrations and ambience.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [active, setActive] = useState<GalleryCategory>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? galleryItems
        : galleryItems.filter((i) => i.category === active),
    [active],
  );

  return (
    <>
      <PageHero
        image={images.exterior}
        alt="Sura Delice signage inside the restaurant"
        eyebrow="Gallery"
        title="Gallery"
        description="A look at the food, the halls and the celebrations hosted here."
      />

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading eyebrow="Browse" title="Moments At Sura Delice" />

          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Gallery filters"
          >
            {galleryCategories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={cn(
                  "cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-gold hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <GalleryGrid items={filtered} />
          </div>
        </div>
      </section>
    </>
  );
}
