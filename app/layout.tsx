import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/header/HeaderImage";
import FocusRing from "@/components/helpers/tab-nav";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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

export const metadata: Metadata = {
  title: "Inklusign",
  description:
    "Artikler om tilgjengelighet, universell utforming og inkluderende design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className={`${headerFont.variable} ${textFont.variable}`}>
      <body
        style={{ backgroundColor: "#fffbee" }}
        className="min-h-screen flex flex-col"
      >
        <a
          href="#main-content"
          className=" hidden lg:block  sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:p-3 focus:rounded focus:shadow focus:bg-black focus:text-white focus:text-xl focus:font-bold focus:outline-black focus:outline-2"
        >
          Hopp til hovedinnhold
        </a>
        <div className="sticky top-0 inset-x-0 z-50">
          <Navbar />
        </div>
        <FocusRing />
        <HeaderImage />
        <main
          id="main-content"
          className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 pt-10 mb-20 flex-1"
        >
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
