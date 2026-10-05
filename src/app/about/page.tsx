import AboutMe from "../components/shared/AboutMe";
import ExperienceCard from "../components/about/ExperienceCard";
import CertificateCard from "../components/about/CertificateCard";
import TechStack from "../components/shared/TechStack";
import { certificateData } from "../data/certificateData";
export default function About() {
  return (
    <>
      <section>
        <AboutMe />
      </section>

      <section className="my-24">
        <h2 className="xl:text-4xl font-medium">My Experience</h2>

        <div className="mt-14 flex flex-col gap-6">
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

      <section className="my-24">
        <h2 className="xl:text-4xl font-medium">My Courses & Certification</h2>

        <div className="mt-14 flex flex-col gap-6">
          {certificateData.map((c) => (
            <CertificateCard key={c.name} certificate={c} />
          ))}
        </div>
      </section>

      <section className="mt-24">
        <TechStack />
      </section>
    </>
  );
}
