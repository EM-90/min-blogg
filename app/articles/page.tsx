import { Header } from "@/components/header/Header";
import React from "react";
import { Article } from "@/components/article/Article";
import { Tag } from "@/components/tag/Tag";

function Articles() {
  return (
    <section>
      <Header
        headerText="Artikler"
        infoText="Her finner du artikler om brukeropplevelser og tilgjengelighet"
      />
      <section className="flex flex-wrap w-full  scale-z-100 ">
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
        <Article
          articleHeader="Hvordan finne riktig font"
          articleText="Dette er en tekst som bare skal vises for å gi en liten smakebit på hva denne artikkelen handler om"
          tagContainer={<Tag tagName="Mest lest" />}
        ></Article>
      </section>
    </section>
  );
}

export default Articles;
