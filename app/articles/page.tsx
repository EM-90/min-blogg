import { fetchPosts } from "../../sanity/lib/queries";
import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { Tag } from "@/components/tag/Tag";
import { Key } from "react";
import { PortableText } from "@portabletext/react";

export default async function Articles() {
  let posts = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    console.error("Kunne ikke hente artikler:", error);
  }

  return (
    <section>
      <Header
        headerText="Artikler"
        infoText="Her finner du artikler om brukeropplevelser og tilgjengelighet"
      />

      <section className="flex flex-wrap w-full scale-100 gap-16">
        {posts?.length ? (
          posts.map(
            (post: {
              _id: Key | null | undefined;
              title: string;
              preview: string;
              slug: { current: string };
            }) => (
              <Article
                key={post._id}
                articleHeader={post.title}
                articlePreview={post.preview}
                tagContainer={<Tag tagName="Mest lest" />}
                articleSlug={post.slug.current}
              />
            )
          )
        ) : (
          <p>Laster artikler...</p>
        )}
      </section>
    </section>
  );
}
