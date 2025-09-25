import { Header } from "@/components/header/Header";
import React from "react";

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
