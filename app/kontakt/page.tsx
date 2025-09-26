import { Header } from "@/components/header/Header";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section>
      <Header
        headerText="Kontakt meg her"
        infoText="Forslag til tema innen tilgjengelighet, digitale flater som burde vært bedre utformet, eller annet? klikk på lenken nedenfor"
      />
      <ul className="scale-z-100 text-lg lg:text-2xl space-y-5">
        <li>
          <a
            href="mailto:inklusign@gmail.no"
            className="text-yellow-900 hover:underline hover:text-black transition-colors flex items-center gap-2"
          >
            <span>Send mail med forslag om tema og lignende her</span>
            <ArrowUpRight />
          </a>
        </li>
        <li className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/eirik-michielsen-48aa3421a/"
            target="_blank"
            className="text-yellow-900 hover:underline hover:text-black transition-colors flex items-center gap-2"
          >
            <span>For andre henvendelser ta kontakt på LinkedIn</span>
            <ArrowUpRight />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
