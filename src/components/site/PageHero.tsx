import type { ReactNode } from "react";

export function PageHero({
  image,
  alt,
  eyebrow,
  title,
  description,
  children,
  priority = false,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-royal relative flex min-h-[62vh] flex-col justify-end pb-16 pt-32 md:min-h-[72vh] md:pb-24 md:pt-40">
        <div className="max-w-2xl">
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="heading-xl text-primary-foreground">{title}</h1>
          {description ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              {description}
            </p>
          ) : null}
          {children ? (
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
