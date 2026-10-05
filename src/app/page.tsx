import HeroSection from "./components/home/sections/Hero";
import LatestProjectSection from "./components/home/sections/LatestProject";
import ServicesSection from "./components/home/sections/Services";
import TechStackSection from "./components/home/sections/TechStack";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12 lg:gap-24">
        <HeroSection />
        <LatestProjectSection />
        <ServicesSection />
        <TechStackSection />
      </div>
    </>
  );
}
