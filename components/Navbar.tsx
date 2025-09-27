"use client";
import React from "react";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const headerColor = "var(--headerColor-hjem)";

  return (
    <nav
      style={{ backgroundColor: headerColor }}
      className=" flex justify-center relative z-20"
    >
      <section className="flex justify-between items-center p-6 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <a href="/">
          <img
            className="inklusign-logo w-32 lg:w-38"
            src="/inklusign-human.svg"
            alt="Inklusign logo"
          />
        </a>
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
            <Link href="/" className="hover:text-black">
              Hjem
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/kontakt" className="hover:text-black">
              Kontakt
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/om" className="hover:text-black">
              Om
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </li>
          <li className="group relative">
            <Link href="/articles" className="hover:text-black">
              Artikler
              <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          </li>
        </ul>

        {isOpen && (
          <ul
            style={{ backgroundColor: headerColor }}
            className="lg:hidden flex flex-col pt-20 pl-10 text-3xl w-full  space-y-15 text-white  h-screen absolute top-16 right-0"
          >
            <li className="group relative w-fit">
              <Link href="/" className="hover:text-black">
                Hjem
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group relative w-fit">
              <Link href="/kontakt" className="hover:text-black">
                Kontakt
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group relative w-fit">
              <Link href="/om" className="hover:text-black">
                Om
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
            <li className="group relative w-fit">
              <Link href="/articles" className="hover:text-black">
                Artikler
                <span className="block h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
