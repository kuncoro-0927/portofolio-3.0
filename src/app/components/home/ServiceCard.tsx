import type { IconType } from "react-icons";

export type ServiceCardProps = {
  icon: IconType;
  title: string;
};

export default function ServiceCard({ icon: Icon, title }: ServiceCardProps) {
  return (
    <div className="p-6 lg:p-10  flex items-center justify-between border border-white/10 bg-hitam hover:border-white duration-300 cursor-pointer">
      <span className="font-medium text-base lg:text-xl">{title}</span>
      <Icon className="text-white text-xl lg:text-2xl" />
    </div>
  );
}
