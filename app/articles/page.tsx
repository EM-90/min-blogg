import { fetchPosts } from "../../sanity/lib/queries";
import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { Tag } from "@/components/tag/Tag";
import { Key } from "react";

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
              categories: any[] | null;
              preview: string;
              slug: { current: string };
            }) => (
              <Article
                key={post._id}
                articleHeader={post.title}
                articlePreview={post.preview}
                tagContainer={
                  Array.isArray(post.categories) &&
                  post.categories.length > 0 ? (
                    post.categories.map((category) => (
                      <Tag key={category._id} tag={category} />
                    ))
                  ) : (
                    <span>No category</span>
                  )
                }
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
