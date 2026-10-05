"use client";

import CardProject from "../../work/CardProject";
import { GoArrowUpRight } from "react-icons/go";
import { workData } from "@/app/data/workData";
import { useReveal } from "@/app/hooks/useReveal";
export default function LatestProjectSection() {
  const ref = useReveal<HTMLDivElement>({ delay: 0.20 });

  return (
    <section className="">
      <div ref={ref} className="flex items-center justify-between">
        <h2 className="text-2xl lg:text-4xl font-medium">Latest Project</h2>
        <span className="group flex cursor-pointer items-center gap-1">
          See all works
          <span className="relative inline-block h-5 w-5 overflow-hidden">
            <GoArrowUpRight className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
            <GoArrowUpRight className="absolute inset-0 h-full w-full -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
          </span>
        </span>
      </div>
      <div className="mt-8 lg:mt-14 grid-cols-1 lg:grid grid-cols-2 gap-6">
        {workData.map((p) => (
          <CardProject key={p.slug} project={p} variant="compact" />
        ))}
      </div>
    </section>
  );
}
