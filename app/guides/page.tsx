import { Header } from "@/components/header/Header";
import React from "react";
import { fetchPosts } from "@/sanity/lib/queries";
import GuiderLinkComp from "@/components/guider-link-comp";

async function Guides() {
  let postTitle: { title: string }[] = [];

  try {
    postTitle = await fetchPosts();
  } catch (error) {
    console.error("Kunne ikke hente artikler:", error);
  }

  return (
    <div className="scale-z-100">
      <Header headerText="Guider og tips for bedre tilgjengelighet" />
      <section className="grid gap-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 p-4 auto-cols-fr">
        {postTitle.map((post: { title: string }, index: number) => (
          <GuiderLinkComp key={index} linkTitle={post.title} />
        ))}
      </section>
    </div>
  );
}

export default Guides;
