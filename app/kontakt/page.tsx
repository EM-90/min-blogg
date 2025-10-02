import { Header } from "@/components/header/Header";
import React from "react";
import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section>
      <Header
        headerText="Kontakt"
        infoText="Her finner du kontaktinformasjon"
      />
      <ul className="scale-z-100 text-lg lg:text-2xl space-y-10 inline-block ">
        <li>
          <a
            href="mailto:inklusign@gmail.com"
            className="text-yellow-900 hover:underline hover:text-black transition-colors flex items-center gap-2"
          >
            <span>Send mail med forslag om tema og lignende her</span>
            <ArrowUpRight />
          </a>
        </li>
        <li>
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
