"use client";

import CardProject from "./CardProject";
import { Project } from "@/app/data/workData";
import { useReveal } from "@/app/hooks/useReveal";
type Props = {
  others: Project[];
};

export default function AnotherProjectSection({ others }: Props) {
  const h2ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  return (
    <section className=" mt-8 lg:mt-16">
      <h2 ref={h2ref} className="text-2xl font-medium">
        Project lainnya
      </h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {others.map((p) => (
          <CardProject key={p.slug} project={p} variant="compact" />
        ))}
      </div>
    </section>
  );
}
