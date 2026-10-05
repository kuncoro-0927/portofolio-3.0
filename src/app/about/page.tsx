"use client";
import AboutMe from "../components/shared/AboutMe";
import ExperienceCard from "../components/about/ExperienceCard";
import CertificateCard from "../components/about/CertificateCard";
import TechStack from "../components/shared/TechStack";
import { certificateData } from "../data/certificateData";
import { useReveal } from "../hooks/useReveal";
export default function About() {
  const h2ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  const h2ref2 = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  return (
    <>
      <section>
        <AboutMe />
      </section>

      <section className="my-12 lg:my-24">
        <h2 ref={h2ref} className="text-2xl lg:text-4xl font-medium">
          My Experiences
        </h2>

        <div className="mt-12 lg:mt-14 flex flex-col gap-6">
          <ExperienceCard
            role="Frontend Developer"
            year="Aug 2026 - Feb 2027"
            company="Suara.com"
          />

          <ExperienceCard
            role="Web Developer"
            year="Sep 2024 - Dec 2025"
            company="Infinite Learning Indonesia"
          />
        </div>
      </section>

      <section className="my-12 lg:my-24">
        <h2 ref={h2ref2} className="text-2xl lg:text-4xl font-medium">
          My Courses & Certification
        </h2>

        <div className="mt-8 lg:mt-14 flex flex-col gap-4 lg:gap-6">
          {certificateData.map((c) => (
            <CertificateCard key={c.name} certificate={c} />
          ))}
        </div>
      </section>

      <section className="mt-12 lg:mt-24">
        <TechStack />
      </section>
    </>
  );
}
