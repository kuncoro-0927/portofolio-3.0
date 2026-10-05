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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugiat
        vel adipisci sequi a animi excepturi qui porro saepe fugit facilis
        doloremque ab sint, tenetur laudantium delectus quibusdam? Perferendis
        perspiciatis voluptates in quis deserunt, doloribus officiis?
        Consectetur quas, quaerat veniam reiciendis doloribus neque impedit
        magni debitis. Aliquid libero aperiam ut? <br />
      </p>
      <p className="mt-3 text-abu-abu leading-tight text-lg">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        temporibus, eos officia voluptatum debitis expedita maiores est fuga
        impedit pariatur.
      </p>
    </div>
  );
}
