import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Poppins, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/header/HeaderImage";
import FocusRing from "@/components/helpers/tab-nav";
import Footer from "@/components/footer";

const headerFont = Lexend({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--header-font",
});

const textFont = Lexend({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--text-font",
});

const mainBgColor = "var(--main-bg-color)";

export const metadata: Metadata = {
  title: "Inklusign",
  description:
    "Artikler om bedre design med hovedfokus på universell utforming og tilgjengelighet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${headerFont.variable} ${textFont.variable}`}>
      <body
        style={{ backgroundColor: "#fffcf4" }}
        className="min-h-screen flex flex-col"
      >
        <a
          href="#main-content"
          className=" hidden lg:block  sr-onlyfocus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:p-3 focus:rounded focus:shadow focus:bg-[#ffbc03] focus:text-black focus:text-xl focus:font-bold focus:outline-black focus:outline-2"
        >
          Hopp til hovedinnhold
        </a>
        <Navbar />
        <FocusRing />
        <HeaderImage />
        <main
          id="main-content"
          className="sm:w-2/3 mx-auto pl-6 pr-6 sm:pl-2 sm:pr-2 pt-10 mb-20 flex-1"
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
