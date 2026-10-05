import Image from "next/image";
import { techStack } from "../../data/softwareData";

export default function TechStack() {
  return (
    <div>
      <h2 className="text-2xl xl:text-4xl font-medium">My Tech Stack</h2>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {techStack.map(({ name, role, image }) => (
          <div className="mt-8 lg:mt-14 flex items-center gap-3" key={name}>
            <Image className="h-12 w-12" src={image} width={48} height={48} alt={name} />
            <div className="flex flex-col">
              <span className="font-medium text-lg">{name}</span>
              <span className="text-sm text-abu-abu font-medium">{role}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
