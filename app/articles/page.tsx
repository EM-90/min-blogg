"use client"; // If using Next.js App Router

import { useEffect, useState } from "react";
import { fetchPosts } from "@/sanity/lib/queries";
import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { Tag } from "@/components/tag/Tag";

export default function Articles() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const data = await fetchPosts();
        console.log("Fetched Posts:", data); // Debug log
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    getPosts();
  }, []);

  return (
    <section>
      <Header
        headerText="Artikler"
        infoText="Her finner du artikler om brukeropplevelser og tilgjengelighet"
      />

      <section className="flex flex-wrap w-full scale-z-100">
        {posts.length > 0 ? (
          posts.map((post) => (
            <Article
              key={post._id}
              articleHeader={post.title}
              articleText={post.body}
              tagContainer={<Tag tagName="Mest lest" />}
            />
          ))
        ) : (
          <p>Laster artikler...</p> // Show loading state
        )}
      </section>
    </section>
  );
}
