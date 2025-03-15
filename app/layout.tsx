import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
