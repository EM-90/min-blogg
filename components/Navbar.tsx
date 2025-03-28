"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, XIcon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  let headerColor = "var(--headerColor-hjem)";

  if (pathname === "/articles") headerColor = "var(--headerColor-artikler)";
  else if (pathname === "/contact") headerColor = "var(--headerColor-kontakt)";
  else if (pathname === "/guides") headerColor = "var(--headerColor-guider)";
  else if (pathname === "/about") headerColor = "var(--headerColor-om)";
  // her kan jeg legge til flere variabler for andre farger på andre sider

  return (
    <nav
      style={{ backgroundColor: headerColor }}
      className="flex justify-center relative z-20"
    >
      <section className="flex justify-between p-6 w-full lg:w-2/3">
        <div>UU-Laben</div>
        <button
          className="text-black lg:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon size={28} color="#ffffff" /> : <Menu size={28} />}
        </button>
        <ul className="hidden lg:flex gap-12 text-lg">
          <li className="group relative">
            <a href="/" className="hover:text-black">
              Hjem
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="/contact" className="hover:text-black">
              Kontakt
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="/about" className="hover:text-black">
              Om
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="/articles" className="hover:text-black">
              Artikler
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="/guides" className="hover:text-black">
              Guider
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
        </ul>

        {isOpen && (
          <ul
            style={{ backgroundColor: headerColor }}
            className="lg:hidden flex flex-col pt-20 pl-10 text-3xl w-full  space-y-15 text-white  h-screen absolute top-18 right-0"
          >
            <li className="group relative w-fit">
              <a href="/" className="hover:text-black">
                Hjem
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
            <li className="group relative w-fit">
              <a href="/contact" className="hover:text-black">
                Kontakt
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
            <li className="group relative w-fit">
              <a href="/about" className="hover:text-black">
                Om
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
            <li className="group relative w-fit">
              <a href="/articles" className="hover:text-black">
                Artikler
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
            <li className="group relative w-fit">
              <a href="/guides" className="hover:text-black">
                Guider
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
