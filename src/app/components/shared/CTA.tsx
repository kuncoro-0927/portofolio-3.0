"use client";
import BookACall from "../ui/button/BookACall";
import { useReveal } from "@/app/hooks/useReveal";
export default function CTA() {
  const h2ref = useReveal<HTMLHeadingElement>({ delay: 0.2 });
  const spanref = useReveal<HTMLSpanElement>({ delay: 0.3 });
  const divref = useReveal<HTMLDivElement>({ delay: 0.4 });
  return (
    <section className="px-4 py-12 xl:px-28 xl:py-14">
      <h2 ref={h2ref} className="text-2xl lg:text-4xl mb-2 font-medium">
        Let&apos;s Create Something <br /> Great Together
      </h2>
      <span ref={spanref} className="text-abu-abu">
        Have an idea? Let’s turn it into something worth clicking.
      </span>
      <div ref={divref} className="mt-4">
        <BookACall />
      </div>
    </section>
  );
}
