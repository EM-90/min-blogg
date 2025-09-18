import React from "react";
import { Header } from "@/components/header/Header";
import { InfoCard } from "@/components/info/InfoCard";

function About() {
  return (
    <section>
      <Header
        headerText="Hva er Inklusign?"
        infoText="Her får du vite litt om meg, Inklusign og hvorfor nettstedet ble laget"
      />
      <section className="flex flex-col-reverse scale-z-105">
        <InfoCard
          headerText="Hvorfor finnes dette nettstedet?"
          textContent={[
            "I slutten av 2024 da jeg begynte i ny jobb, var første gangen jeg tok på meg UU-brillene, og etter det har de ikke blitt tatt ",
            "Tidligere har jeg jobbet som interaksjonsdesigner med fokus på brukeropplevelser, men det var først i slutten av 2024 da jeg begynte å jobbe med universell utforming av digitale flater at jeg forstod hvor mange som blir ekskludert på grunn av nettsider som ikke er universellt utformet. Jeg har selv laget nettsider som ikke er tilgjenglige for alle. ",
            "Dette vil jeg få en slutt på selv om jeg vet hvor vanskelig det er hvis man ikke har på seg UU-brillene, eller kanskje har feil styrke i glassene.",
            "Derfor har jeg laget denne info-siden med artikler og guider både for å hjelpe meg selv og andre, så vi sammen kan skape en digital fremtid tilgjengelig for alle.",
          ]}
        />
      </section>
    </section>
  );
}

export default About;
