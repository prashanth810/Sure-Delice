import { Reveal } from "./Reveal";

export function FoodCard({
  title,
  description,
  image,
  alt,
  tag,
  delay = 0,
}: {
  title: string;
  description: string;
  image: string;
  alt: string;
  tag?: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="card-royal group h-full">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {tag ? (
          <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground">
            {tag}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg text-primary">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
