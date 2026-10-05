"use client";

import Link from "next/link";
import { GoArrowLeft, GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import { Project } from "@/app/data/workData";
import { useReveal } from "@/app/hooks/useReveal";
type Props = {
  project: Project;
};

export default function HeaderDetail({ project }: Props) {
  const aref = useReveal<HTMLAnchorElement>({ delay: 0.1 });
  const h2ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  const spanref = useReveal<HTMLSpanElement>({ delay: 0.5 });
  const divref = useReveal<HTMLDivElement>({ delay: 0.5 });
  const imgref = useReveal<HTMLImageElement>({ delay: 0.7 });

  const div2ref = useReveal<HTMLDivElement>({ delay: 0.3 });
  const div3ref = useReveal<HTMLDivElement>({ delay: 0.4 });

  return (
    <header>
      <Link
        ref={aref}
        href="/work"
        className="group mb-4 flex cursor-pointer items-center gap-1"
      >
        <span className="relative inline-block h-5 w-5 overflow-hidden">
          <GoArrowLeft className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out group-hover:-translate-x-full " />
          <GoArrowLeft className="absolute inset-0 h-full w-full translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 " />
        </span>
        <span className="text-sm"> Back to projects</span>
      </Link>

      <div className="">
        <h2 ref={h2ref} className="text-2xl lg:text-4xl font-medium">
          {project.title}
        </h2>
        <span ref={spanref} className="text-sm text-abu-abu">
          {project.subtitle}
        </span>
        <div ref={divref} className="mt-8 grid grid-cols-2 items-center gap-8">
          {/* Role */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#6c6c6c] font-medium">Role</span>
            <span className="font-medium text-lg">{project.role}</span>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#6c6c6c] font-medium">Company</span>
            <span className="font-medium text-lg">{project.company}</span>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#6c6c6c] font-medium">Category</span>
            <span className="font-medium text-lg">{project.category}</span>
          </div>

          {/* Live */}
          <div className="flex flex-col gap-1">
            <span className="text-sm text-[#6c6c6c] font-medium ">Project</span>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={project.liveUrl}
              className="font-medium flex items-center gap-1"
            >
              <span className="group flex cursor-pointer items-center gap-1 text-lg">
                Live Project
                <span className="relative inline-block h-6 w-6 overflow-hidden">
                  <GoArrowUpRight className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out group-hover:translate-x-full group-hover:-translate-y-full" />
                  <GoArrowUpRight className="absolute inset-0 h-full w-full -translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative mt-14 aspect-video overflow-hidden rounded-xl">
        <Image
          ref={imgref}
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div
        ref={div2ref}
        className="mt-14 flex flex-col lg:flex-row justify-between gap-4 lg:gap-20 items-start"
      >
        <span className="w-40 shrink-0 text-sm text-abu-abu font-medium">
          Project Overview
        </span>
        <span>{project.description}</span>
      </div>

      <div ref={div3ref} className="mt-14 flex flex-col gap-y-14">
        {project.images.map((src, i) => (
          <div key={src} className="relative aspect-video overflow-hidden">
            <Image
              src={src}
              alt={`${project.title} - gambar ${i + 1}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </header>
  );
}
