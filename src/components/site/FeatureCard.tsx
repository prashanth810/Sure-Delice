import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

export function FeatureCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: {
  title: string;
  description: string;
  icon?: LucideIcon;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="card-royal h-full p-6">
      {Icon ? (
        <span className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      ) : null}
      <h3 className="font-display text-lg text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Reveal>
  );
}
