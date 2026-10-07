"use client";

import ServiceCard from "../ServiceCard";
import { FiLayout, FiBriefcase, FiRefreshCw, FiCode } from "react-icons/fi";
import { useReveal } from "@/hooks/useReveal";
export default function ServicesSection() {
  const ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  const services = [
    { title: "Landing Page", icon: <FiLayout /> },
    { title: "Company Profile", icon: <FiBriefcase /> },
    { title: "Redesign Web", icon: <FiRefreshCw /> },
    { title: "Custom Web", icon: <FiCode /> },
  ];
  return (
    <section className="">
      <h2 ref={ref} className="text-2xl lg:text-4xl font-medium">
        Services
      </h2>

      <div className="mt-8 lg:mt-14 flex flex-col gap-4 lg:gap-6">
        {services.map((s) => (
          <ServiceCard key={s.title} title={s.title} icon={s.icon} />
        ))}
      </div>
    </section>
  );
}
