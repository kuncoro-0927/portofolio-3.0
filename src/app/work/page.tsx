"use client";
import CardProject from "../components/work/CardProject";
import { workData } from "@/data/workData";
import { useReveal } from "../../hooks/useReveal";
export default function Work() {
  const ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 ref={ref} className="text-2xl lg:text-4xl font-medium">
          Latest Project
        </h2>
      </div>
      <div className="mt-8 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {workData.map((p) => (
          <CardProject key={p.slug} project={p} variant="compact" />
        ))}
      </div>
    </section>
  );
}
