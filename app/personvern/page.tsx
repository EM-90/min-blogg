import { Header } from "@/components/header/Header";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvern",
  description:
    "Jeg bruker Vercel Analytics for anonym besøksstatistikk. Ingen cookies og ingen identifiserbare data.",
  alternates: { canonical: "/personvern" },
  openGraph: { url: "/personvern" },
};

function Personvern() {
  return (
    <Header
      headerText="Personvern"
      infoText="Jeg bruker Vercel Analytics for anonym
          besøksstatistikk (sidevisninger, populære sider, enkel teknisk info).
          Ingen cookies, ingen identifiserbare data."
    />
  );
}

export default Personvern;
