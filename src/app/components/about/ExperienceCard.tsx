export type ServiceCardProps = {
  company: string;
  role: string;
  year: string;
};

export default function ExperienceCard({
  company,
  role,
  year,
}: ServiceCardProps) {
  return (
    <div className="px-10 py-5 flex items-end justify-between border border-white/10 bg-hitam hover:border-white duration-300 cursor-pointer">
      <div className="flex flex-col gap-1">
        <span className="font-medium text-xl">{role}</span>
        <span className="font-medium text-sm text-abu-abu">{company}</span>
      </div>

      <span className="font-medium text-sm text-abu-abu">{year}</span>
    </div>
  );
}
