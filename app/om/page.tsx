import React from "react";
import { Header } from "@/components/header/Header";
import { InfoCard } from "@/components/info/InfoCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om",
  description:
    "Inklusign kombinerer inkluderende og design, et prosjekt som fremmer universell utforming som en naturlig del av godt design.",
  alternates: { canonical: "/om" },
  openGraph: { url: "/om" },
};

function About() {
  return (
    <section>
      <Header
        headerText="Hva er Inklusign?"
        infoText="Navnet Inklusign er en kombinasjon av inkluderende og design. Det gjenspeiler prosjektets mål, som er å fremme universell utforming som en naturlig del av godt design"
      />
      <section className="flex scale-z-100">
        <InfoCard
          headerText="Hvorfor finnes dette nettstedet?"
          textContent={[
            "Inklusign er et fritidsprosjekt jeg startet i 2025, da jeg for alvor begynte å jobbe med universell utforming (UU). Til daglig er jeg UU-konsulent og hjelper bedrifter med å skape digitale løsninger som fungerer for alle. Tidligere jobbet jeg som interaksjonsdesigner med fokus på brukeropplevelse. Men da jeg begynte å se på digitale flater gjennom “UU-brillene”, oppdaget jeg hvor mange som blir stengt ute av dårlig tilgjengelighet, også på løsninger jeg selv hadde vært med å lage. Det var en vekker, og siden den gang har jeg ikke tatt av brillene. Med Inklusign deler jeg artikler og erfaringer både for å styrke min egen kompetanse og for å gjøre det enklere for andre å ta universell utforming på alvor. Målet er å bidra til en digital fremtid hvor man forsøker å inkludere alle.",
          ]}
        />
      </section>
    </section>
  );
}

export default About;
