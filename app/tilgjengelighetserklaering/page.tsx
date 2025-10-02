import { Header } from "@/components/header/Header";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilgjengelighetserklæring",
  description:
    "Tilgjengelighetserklæring for Inklusign: mål om å gjøre nettstedet tilgjengelig for alle og forbedre over tid.",
  alternates: { canonical: "/tilgjengelighetserklaering" },
  openGraph: { url: "/tilgjengelighetserklaering" },
};

function Tilgjengelighetserklaering() {
  return (
    <section>
      <Header
        headerText="Tilgjengelighets&shy;erklæring"
        infoText="Jeg har forsøkt å gjøre siden så tilgjengelig som mulig fra starten av prosjektet. Erklæringen kommer etter hvert, og nettstedet skal forbedres"
      />
    </section>
  );
}

export default Tilgjengelighetserklaering;
