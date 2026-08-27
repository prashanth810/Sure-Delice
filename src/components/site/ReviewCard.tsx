import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function ReviewCard({
  quote,
  category,
  delay = 0,
}: {
  quote: string;
  category: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="card-royal h-full p-6">
      <div className="flex items-center gap-1 text-gold" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground">{quote}</p>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {category}
      </p>
    </Reveal>
  );
}
