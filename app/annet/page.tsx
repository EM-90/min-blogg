import { Header } from "@/components/header/Header";
import React from "react";
import { fetchPosts } from "@/sanity/lib/queries";

async function Annet() {
  let postTitle: { title: string }[] = [];

  try {
    postTitle = await fetchPosts();
  } catch (error) {
    console.error("Kunne ikke hente artikler:", error);
  }

  return (
    <div className="scale-z-100">
      <Header
        headerText="Annet"
        infoText="Hei! Her er det ennå ikke blitt bestemt hva som skal vises. Siden er under arbeid "
      />
      <section className="grid gap-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4 auto-cols-fr"></section>
    </div>
  );
}

export default Annet;
