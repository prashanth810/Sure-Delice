import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export type GalleryImage = { src: string; alt: string; category: string };

export function GalleryGrid({ items }: { items: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft")
        setOpen((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  const current = open === null ? null : items[open];

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal
            as="li"
            key={`${item.src}-${i}`}
            delay={(i % 3) * 80}
            className="list-none"
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="card-royal group block w-full cursor-pointer p-0 text-left"
              aria-label={`Open image: ${item.alt}`}
            >
              <span className="block aspect-4/3 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </span>
              <span className="block px-4 py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {item.category}
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-background/10 text-primary-foreground hover:bg-background/20"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => ((i ?? 0) - 1 + items.length) % items.length);
            }}
            className="absolute left-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-background/10 text-primary-foreground hover:bg-background/20 md:left-6"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure
            className="max-h-full w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current.src}
              alt={current.alt}
              className={cn("max-h-[75vh] w-full rounded-xl object-contain")}
            />
            <figcaption className="mt-3 text-center text-sm text-primary-foreground/80">
              {current.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => ((i ?? 0) + 1) % items.length);
            }}
            className="absolute right-2 inline-flex size-11 cursor-pointer items-center justify-center rounded-full bg-background/10 text-primary-foreground hover:bg-background/20 md:right-6"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      ) : null}
    </>
  );
}
