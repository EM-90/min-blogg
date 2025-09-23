import { Header } from "@/components/header/Header";
import React from "react";
import { LinkedinIcon } from "@sanity/icons";

function Contact() {
  return (
    <section>
      <Header
        headerText="Kontakt meg her"
        infoText="Forslag til tema innen tilgjengelighet, digitale flater som burde vært bedre utformet, eller annet? klikk på lenken nedenfor"
      />
      <ul className="flex-col space-y-8 scale-z-100 text-lg lg:text-2xl">
        <li>
          <a
            href="mailto:inklusign@gmail.no"
            className="text-blue-600 underline hover:text-blue-900 transition-colors"
          >
            Send mail med forslag om tema og lignende her
          </a>
        </li>
        <li className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/eirik-michielsen-48aa3421a/"
            target="_blank"
            className="text-blue-600 underline hover:text-blue-900 transition-colors"
          >
            For andre henvendelser ta kontakt på LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
