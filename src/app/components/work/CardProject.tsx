"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Project } from "@/data/workData";
import { useReveal } from "@/hooks/useReveal";
type Props = {
  project: Project;
  variant?: "default" | "compact";
};

const CardProject = ({ project, variant = "default" }: Props) => {
  const divref = useReveal<HTMLDivElement>({ delay: 0.3 });
  return (
    <Link href={`/work/${project.slug}`}>
      <div ref={divref} className="group w-full cursor-pointer">
        {/* wrapper biar zoom tidak keluar frame */}
        <div className="relative overflow-hidden aspect-4/3">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-lg">{project.title}</span>
            <span className="text-abu-abu font-medium text-sm">
              {project.category}
            </span>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-0 -translate-x-2 scale-90 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100">
            <IoIosArrowRoundForward className="text-xl text-black transition-transform duration-500 ease-out group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardProject;
