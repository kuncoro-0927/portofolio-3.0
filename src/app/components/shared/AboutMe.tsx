import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <Image
        src="/images/img-logo.webp"
        className="w-24 h-24"
        width={96}
        height={96}
        alt=""
      />
      <h1 className="mt-6 text-3xl font-medium mb-2">
        Hi, Lorem ipsum dolor sit.
      </h1>
      <span className="text-xl font-normal">Frontend Developer</span>

      <p className="mt-6 text-abu-abu leading-tight text-lg">
        Hi, I&apos;m Khitan Hesthi Kuncoro, a freelance web developer and
        Informatics Technology graduate (D3) from Universitas Brawijaya with a
        3.90 GPA. I build clean, responsive websites, from landing pages and
        company profiles to redesigns and fully custom web projects. <br />
      </p>
      <p className="mt-3 text-abu-abu leading-tight text-lg">
        I work with React, Next.js, and Tailwind CSS, and hold a BNSP Junior Web
        Developer certification. I enjoy turning designs into polished
        interfaces with smooth animations, and I like working closely with
        clients so the result matches their vision.
      </p>
    </div>
  );
}
