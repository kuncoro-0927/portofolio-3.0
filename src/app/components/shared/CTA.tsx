import BookACall from "../ui/button/BookACall";
export default function CTA() {
  return (
    <section className="px-4 py-12 xl:px-28 xl:py-14">
      <h2 className="text-2xl xl:text-4xl mb-2 font-medium">
        Let&apos;s Create Something <br /> Great Together
      </h2>
      <span className="text-abu-abu">
        Have an idea? Let’s turn it into something worth clicking.
      </span>
      <div className="mt-4">
        <BookACall />
      </div>
    </section>
  );
}
