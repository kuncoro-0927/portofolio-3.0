import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="px-4 sm:px-20 pt-12 xl:px-28 xl:pt-14 bg-hitam border-t border-white/10">
      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-80">
        <div>
          <ul className="flex flex-col gap-1 text-xl font-medium">
            <li className="text-abu-abu text-sm font-normal">Menu</li>
            <li>
              <Link className="hover:text-abu-abu duration-300" href="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="hover:text-abu-abu duration-300" href="/work">
                Work
              </Link>
            </li>

            <li>
              <Link className="hover:text-abu-abu duration-300" href="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="hover:text-abu-abu duration-300" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col mb-4 gap-1 text-xl font-medium">
            <li className="text-abu-abu text-sm font-normal">Email</li>
            <li>khitanhesthik@gmail.com</li>
          </ul>

          <span className=" text-abu-abu text-sm font-normal">Socials</span>
          <ul className="mt-2 flex flex-row gap-4 text-xl font-medium">
            <li>
              <Link
                target="_blank"
                aria-label="Linkedin"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/khitan-hesthi-kuncoro"
                className=""
              >
                <FaLinkedin className="text-abu-abu hover:text-white duration-300 text-xl" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                aria-label="Github"
                rel="noopener noreferrer"
                href="https://github.com/kuncoro-0927"
              >
                <FaGithub className="text-abu-abu hover:text-white duration-300 text-xl" />
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
                href=""
              >
                <FaInstagram className="text-abu-abu hover:text-white duration-300 text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 -mx-4 sm:-mx-20 xl:-mx-28 py-6 border-t border-white/10 flex justify-center items-center text-center gap-1">
        <span className="text-abu-abu text-sm">
          © 2026 Kuncoro. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
