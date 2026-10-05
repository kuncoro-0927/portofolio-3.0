"use client";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import BookACall from "../ui/button/BookACall";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <div className="h-screen sticky top-0 hidden lg:block xl:p-8 bg-hitam border-r border-white/10 text-white max-w-[350px] w-full overflow-y-auto scrollbar-hide">
      <div className="flex items-center justify-between gap-6 ">
        <span className="font-medium text-lg">Khitan Hesthi Kuncoro</span>
        <Image
          src="/images/img-logo.webp"
          className="h-10 w-10 rounded-md"
          width={40}
          height={40}
          alt=""
        />
      </div>

      {/* border */}
      <div className="border-b my-6 xl:-mx-8 border-white/10"></div>

      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-[10px] h-[10px]">
            <span className="absolute w-[8px] h-[8px] bg-green-500/80 rounded-full blur-[4px] animate-ping" />
            <span className="w-[8px] h-[8px] bg-green-500 rounded-full shadow-[0_0_10px_white]" />
          </div>

          <span className="text-sm">Available</span>
        </div>

        <BookACall />
      </div>
      {/* border */}
      <div className="border-b my-6 xl:-mx-8 border-white/10"></div>

      <div>
        <ul className="flex flex-col gap-1 text-2xl font-medium">
          <li className="text-abu-abu text-base font-normal">Menu</li>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <li
                key={link.href}
                className="group flex items-center justify-between cursor-pointer"
              >
                <Link
                  href={link.href}
                  className="transition-colors duration-300"
                >
                  {link.label}
                </Link>

                <span
                  className={`rounded-full h-2 w-2 bg-white flex group-hover:opacity-100 duration-300 ${
                    isActive ? "opacity-100 " : "opacity-0"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-1">
        <span className="text-abu-abu text-base">Email</span>
        <span className="text-xl font-medium">khitanhesthik@gmail.com</span>
      </div>

      <div className="mt-12 flex flex-row gap-6">
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/khitan-hesthi-kuncoro"
          className=""
        >
          <FaLinkedin className="text-abu-abu hover:text-white duration-300 text-xl" />
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/kuncoro-0927"
        >
          <FaGithub className="text-abu-abu hover:text-white duration-300 text-xl" />
        </Link>
        <Link target="_blank" rel="noopener noreferrer" href="">
          <FaInstagram className="text-abu-abu hover:text-white duration-300 text-xl" />
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-1">
        <span className="text-abu-abu text-sm">
          © 2026 Kuncoro. All rights reserved.
        </span>
      </div>
    </div>
  );
}
