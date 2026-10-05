"use client";
import Image from "next/image";
import { useReveal } from "@/app/hooks/useReveal";
export default function AboutMe() {
  const imgref = useReveal<HTMLImageElement>({ delay: 0.15 });
  const divref = useReveal<HTMLDivElement>({ delay: 0.2 });
  const div2ref = useReveal<HTMLParagraphElement>({ delay: 0.5 });
  return (
    <div>
      <Image
        ref={imgref}
        src="/images/img-logo.webp"
        className="w-24 h-24"
        width={96}
        height={96}
        alt=""
      />

      <div ref={divref} className="flex flex-col mt-6 gap-2">
        <h1 className="text-3xl font-medium ">
          {" "}
          Hi, I&apos;m Kuncoro
        </h1>
        <span className="text-xl font-normal">Frontend Developer</span>
      </div>

      <div ref={div2ref} className="mt-6 flex flex-col gap-3">
        <p className=" text-abu-abu leading-tight text-lg">
          A freelance web developer and
          Informatics Technology graduate (D3) from Universitas Brawijaya with a
          3.90 GPA. I build clean, responsive websites, from landing pages and
          company profiles to redesigns and fully custom web projects. <br />
        </p>
        <p className=" text-abu-abu leading-tight text-lg">
          I work with React, Next.js, and Tailwind CSS, and hold a BNSP Junior
          Web Developer certification. I enjoy turning designs into polished
          interfaces with smooth animations, and I like working closely with
          clients so the result matches their vision.
        </p>
      </div>
    </div>
  );
}
