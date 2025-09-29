import { LinkedinIcon } from "@sanity/icons";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" bg-[#fff2cf] text-black pb-5 pt-12">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col md:flex-row justify-between items-center border-b border-[#ffbc03] pb-5">
          <div className="text-xl font-bold mb-4 md:mb-0">
            <Image
              src="/inklusign-human.svg"
              alt="Inklusign logo"
              width={110}
              height={100}
            />
          </div>

          <nav aria-label="Footer navigation" className="flex">
            <ul className="flex flex-wrap gap-4 justify-center">
              <li>
                <Link
                  href="/tilgjengelighetserklaering"
                  className="hover:text-gray-900"
                >
                  Tilgjengelighetserklæring
                </Link>
              </li>
              <li>
                <Link href="/personvern" className="hover:text-gray-900">
                  Personvern
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center mt-6">
          <address className="not-italic text-center md:text-left mb-4 md:mb-0">
            <p>
              <a
                href="mailto:inklusign@gmail.com"
                className="hover:text-gray-900"
              >
                Inklusign@gmail.com
              </a>
            </p>
            <p className="text-sm">(Kan også kontaktes på LinkedIn)</p>
          </address>

          <nav aria-label="Sosiale medier">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/eirik-michielsen-48aa3421a/"
                  aria-label="LinkedIn"
                  target="_blank"
                  className="hover:text-gray-900 flex items-center hover:bg-[#ffbc03] rounded-lg"
                >
                  <LinkedinIcon fontSize={40} />
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <p className="mt-6 text-end text-sm text-gray-500">© 2025 Inklusign</p>
      </div>
    </footer>
  );
}

export default Footer;
