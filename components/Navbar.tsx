"use client";
import React from "react";
import { useState } from "react";
import { Menu, XIcon } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-300 flex justify-center relative">
      <section className="flex justify-between p-6 bg-gray-200 w-full lg:w-2/3">
        <div>UU-Laben</div>
        <button
          className="text-black lg:hidden z-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon size={28} color="#ffffff" /> : <Menu size={28} />}
        </button>
        <ul className="hidden lg:flex gap-12">
          <li className=" decoration-0">
            <a href="#">Hjem</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Kontakt</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Om</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Artikler</a>
          </li>
          <li className=" decoration-0">
            <a href="#">Guider</a>
          </li>
        </ul>

        {isOpen && (
          <ul className="lg:hidden bg-black flex flex-col pt-20 pl-10 text-3xl w-full  space-y-15 text-white  h-screen absolute top-18 right-0">
            <li className=" decoration-0">
              <a href="#">Hjem</a>
            </li>
            <li className=" decoration-0">
              <a href="#">Kontakt</a>
            </li>
            <li className=" decoration-0">
              <a href="#">Om</a>
            </li>
            <li className=" decoration-0">
              <a href="#">Artikler</a>
            </li>
            <li className=" decoration-0">
              <a href="#">Guider</a>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
