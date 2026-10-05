"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/app/hooks/useReveal";
export type ServiceCardProps = {
  icon: ReactNode;
  title: string;
};

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  const ref = useReveal<HTMLDivElement>({ delay: 0.3 });

  return (
    <div
      ref={ref}
      className="p-6 lg:p-10  flex items-center justify-between border border-white/10 bg-hitam hover:border-white duration-300 cursor-pointer"
    >
      <span className="font-medium text-base lg:text-lg">{title}</span>
      <span className="text-white text-xl lg:text-2xl">{icon}</span>
    </div>
  );
}
