"use client";
import Image from "next/image";
import { techStack } from "../../data/softwareData";
import { useReveal } from "@/app/hooks/useReveal";
export default function TechStack() {
  const h2ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  const div = useReveal<HTMLDivElement>({ delay: 0.3 });
  return (
    <div>
      <h2 ref={h2ref} className="text-2xl lg:text-4xl font-medium">
        My Tech Stack
      </h2>

      <div ref={div} className="grid grid-cols-2 gap-x-8 gap-y-2">
        {techStack.map(({ name, role, image }) => (
          <div className="mt-8 lg:mt-14 flex items-center gap-3" key={name}>
            <Image
              className="h-10 w-10 lg:h-12 lg:w-12"
              src={image}
              width={48}
              height={48}
              alt={name}
            />
            <div className="flex flex-col">
              <span className="font-medium text-base lg:text-lg">{name}</span>
              <span className="text-sm text-abu-abu font-medium">{role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
