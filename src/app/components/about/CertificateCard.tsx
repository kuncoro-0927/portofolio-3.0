import { Certificate } from "@/app/data/certificateData";
import Image from "next/image";
type Props = {
  certificate: Certificate;
};

const CertificateCard = ({ certificate }: Props) => {
  return (
    <div className="px-4 lg:px-10 py-4 flex items-end justify-between border border-white/10 bg-hitam hover:border-white duration-300 cursor-pointer">
      <div className="flex items-center gap-4">
        <Image src={certificate.image} className="h-10 w-10 lg:h-12 lg:w-12" width={50} height={50} alt="" />

        <div className="flex flex-col gap-1">
          <span className="font-medium text-base lg:text-lg whitespace-nowrap">{certificate.name}</span>
          <span className="font-medium text-sm text-abu-abu">
            {certificate.provider}
          </span>
        </div>
      </div>

      <span className="font-medium text-sm text-abu-abu whitespace-nowrap">
        {certificate.year}
      </span>
    </div>
  );
};

export default CertificateCard;
