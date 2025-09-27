"use client";
import React, { useEffect, useState } from "react";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const headerColor = "var(--headerColor-hjem)";

  // Close menu when route actually changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close immediately if link points to the current route
  const handleLinkClick = (href: string) => {
    if (href === pathname) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      style={{ backgroundColor: headerColor }}
      className="flex justify-center relative z-20"
    >
      <section className="flex justify-between items-center p-6 mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Gå til forsiden"
          onClick={() => handleLinkClick("/")}
        >
          <Image
            src="/inklusign-human.svg"
            width={130}
            height={40}
            alt="Inklusign logo"
            priority
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="text-black lg:hidden z-20"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Lukk mobilmeny" : "Åpne mobilmeny"}
        >
          {isOpen ? <XIcon size={28} /> : <Menu size={28} aria-hidden="true" />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-12 text-lg xl:text-xl ml-10">
          <li>
            <Link href="/" className="hover:text-black">
              Hjem
            </Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-black">
              Kontakt
            </Link>
          </li>
          <li>
            <Link href="/om" className="hover:text-black">
              Om
            </Link>
          </li>
          <li>
            <Link href="/articles" className="hover:text-black">
              Artikler
            </Link>
          </li>
        </ul>

        {/* Mobile menu */}
        {isOpen && (
          <ul
            id="mobile-menu"
            role="menu"
            style={{ backgroundColor: headerColor }}
            className="lg:hidden flex flex-col pt-20 pl-10 text-3xl w-full space-y-6 text-white h-screen absolute top-16 right-0"
          >
            <li>
              <Link
                href="/"
                role="menuitem"
                onClick={() => handleLinkClick("/")}
              >
                Hjem
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                role="menuitem"
                onClick={() => handleLinkClick("/kontakt")}
              >
                Kontakt
              </Link>
            </li>
            <li>
              <Link
                href="/om"
                role="menuitem"
                onClick={() => handleLinkClick("/om")}
              >
                Om
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                role="menuitem"
                onClick={() => handleLinkClick("/articles")}
              >
                Artikler
              </Link>
            </li>
          </ul>
        )}
      </section>
    </nav>
  );
}

export default Navbar;
