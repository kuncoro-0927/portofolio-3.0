import Link from "next/link";

export default function BookACall() {
  return (
    <Link
      href="mailto:khitanhesthik@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-full border text-sm bg-white text-hitam hover:bg-black hover:text-white hover:border-white duration-300"
    >
      Book a Call
    </Link>
  );
}
