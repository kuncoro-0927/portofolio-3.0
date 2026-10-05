import CardProject from "./components/work/CardProject";
import { GoArrowUpRight } from "react-icons/go";
import { FiLayout, FiBriefcase, FiRefreshCw, FiCode } from "react-icons/fi";
import ServiceCard from "./components/home/ServiceCard";
import AboutMe from "./components/shared/AboutMe";
import TechStack from "./components/shared/TechStack";
import { workData } from "./data/workData";
export default function Home() {
  return (
    <>
      <section className="mb-12 lg:mb-24">
        <AboutMe />
      </section>

      <section className="my-12 lg:my-24">
        <div className="flex items-center justify-between">
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

      <section className="my-12 lg:my-24">
        <h2 className="text-2xl lg:text-4xl font-medium">Services</h2>

        <div className="mt-8 lg:mt-14 flex flex-col gap-4 lg:gap-6">
          <ServiceCard title="Landing Page" icon={FiLayout} />
          <ServiceCard title="Company Profile" icon={FiBriefcase} />
          <ServiceCard title="Redesign Web" icon={FiRefreshCw} />
          <ServiceCard title="Custom Web" icon={FiCode} />
        </div>
      </section>

      <section className="mt-12 lg:mt-24">
        <TechStack />
      </section>
    </>
  );
}
