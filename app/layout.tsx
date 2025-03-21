import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import HeaderImage from "@/components/header/HeaderImage";
const headerFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--header-font",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--text-font",
});

export const metadata: Metadata = {
  title: "UU-laben",
  description:
    "Artiler, råd og veiledere for tilgjengelighet og universell utforming",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headerFont.variable} ${textFont.variable}`}>
      <body>
        <Navbar />
        <HeaderImage />
        <main className="sm:w-2/3 mx-auto pl-6 pr-6 sm:pl-2 sm:pr-2 pt-10">
          {children}
        </main>
      </body>
    </html>
  );
}
