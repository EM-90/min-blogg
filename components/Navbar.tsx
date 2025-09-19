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
  else if (pathname === "/kontakt") headerColor = "var(--headerColor-kontakt)";
  else if (pathname === "/annet") headerColor = "var(--headerColor-guider)";
  else if (pathname === "/om") headerColor = "var(--headerColor-om)";

  // her kan jeg legge til flere variabler for andre farger på andre sider

  return (
    <nav
      style={{ backgroundColor: headerColor }}
      className=" flex justify-center relative z-20"
    >
      <section className="flex justify-between items-center p-6 w-full lg:w-2/3  ">
        <img
          className="inklusign-logo w-40 lg:w-50"
          src="/inklusign-human.svg"
          alt="Inklusign logo"
        />
        <button
          className="text-black lg:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XIcon size={28} color="#000000" />
          ) : (
            <Menu size={28} aria-label="Mobilmeny" />
          )}
        </button>
        <ul className="hidden lg:flex gap-12 text-lg xl:text-xl ml-10">
          <li className="group relative">
            <a href="/" className="hover:text-black">
              Hjem
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="/kontakt" className="hover:text-black">
              Kontakt
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </a>
          </li>
          <li className="group relative">
            <a href="/om" className="hover:text-black">
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
        </ul>

        {isOpen && (
          <ul
            style={{ backgroundColor: headerColor }}
            className="lg:hidden flex flex-col pt-20 pl-10 text-3xl w-full  space-y-15 text-white  h-screen absolute top-16 right-0"
          >
            <li className="group relative w-fit">
              <a href="/" className="hover:text-black">
                Hjem
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
            <li className="group relative w-fit">
              <a href="/kontakt" className="hover:text-black">
                Kontakt
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
            <li className="group relative w-fit">
              <a href="/om" className="hover:text-black">
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
          </ul>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
