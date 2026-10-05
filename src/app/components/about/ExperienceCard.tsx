"use client";

import { useReveal } from "@/app/hooks/useReveal";

export type ServiceCardProps = {
  company: string;
  role: string;
  year: string;
};

export default function ExperienceCard({
  company,
  role,
  year,
}: ServiceCardProps) {
  const divref = useReveal<HTMLDivElement>({ delay: 0.3 });
  return (
    <div
      ref={divref}
      className="px-4 lg:px-10 py-4 flex items-end justify-between border border-white/10 bg-hitam hover:border-white duration-300 cursor-pointer"
    >
      <div className="flex flex-col gap-1">
        <span className="font-medium text-base lg:text-lg whitespace-nowrap">
          {role}
        </span>
        <span className="font-medium text-sm text-abu-abu whitespace-nowrap">
          {company}
        </span>
      </div>

      <span className="font-medium text-sm text-abu-abu whitespace-nowrap">
        {year}
      </span>
    </div>
  );
}
