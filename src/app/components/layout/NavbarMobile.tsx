"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import BookACall from "../ui/button/BookACall";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-4 z-50 mx-4 mt-4 lg:hidden ">
      {/* baris atas */}
      <div className="absolute inset-x-0 top-0 overflow-hidden border border-white/10 bg-hitam/60 backdrop-blur-xl">
        {/* baris atas */}
        <div className="flex h-20 items-center justify-between px-4">
          <span>Khitan Hesthi Kuncoro</span>

          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? (
              <RiCloseLine className="text-xl" />
            ) : (
              <RiMenu3Fill className="text-xl" />
            )}
          </button>
        </div>

        {/* menu yang melebar ke bawah */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex py-4 px-4 mb-4 border-y border-white/10 items-center gap-3 justify-between">
              <div className="flex items-center gap-3">
                <div className="relative flex items-center justify-center w-[10px] h-[10px]">
                  <span className="absolute w-[8px] h-[8px] bg-green-500/80 rounded-full blur-[4px] animate-ping" />
                  <span className="w-[8px] h-[8px] bg-green-500 rounded-full shadow-[0_0_10px_white]" />
                </div>

                <span className="text-sm">Available</span>
              </div>

              <BookACall />
            </div>

            <span className="text-abu-abu text-sm px-4 font-normal">Menu</span>
            <ul className="grid grid-cols-2 p-4 gap-y-5 gap-x-10 text-xl font-medium">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <li
                    key={link.href}
                    className="group flex items-center gap-16 cursor-pointer"
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

            <div className="mt-8 px-4 flex flex-col gap-1">
              <span className="text-abu-abu text-sm">Email</span>
              <span className="text-lg font-medium">
                khitanhesthik@gmail.com
              </span>
            </div>

            <div className="mt-8 px-4 flex flex-row gap-6">
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

            <div className="mt-8 px-4 pb-4 flex flex-col gap-1">
              <span className="text-abu-abu text-sm">
                © 2026 Kuncoro. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
