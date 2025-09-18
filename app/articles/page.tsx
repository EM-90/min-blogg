import { fetchPosts } from "../../sanity/lib/queries";
import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { Tag } from "@/components/tag/Tag";
import { Post } from "@/types/post";

export default async function Articles() {
  let posts: Post[] = [];

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

      <section className="flex flex-wrap w-full scale-100 gap-10">
        {posts?.length ? (
          posts.map((post) => (
            <Article
              key={post._id}
              articleHeader={post.title}
              as="h2"
              articlePreview={post.preview}
              mainImage={post.mainImage}
              tagContainer={
                post.categories?.length ? (
                  post.categories.map((category) => (
                    <Tag key={category._id} tag={category} />
                  ))
                ) : (
                  <span className="text-transparent tracking-widest uppercase text-sm rounded-full">
                    No category
                  </span>
                )
              }
              articleSlug={post.slug.current}
            />
          ))
        ) : (
          <p>Laster artikler...</p>
        )}
      </section>
    </section>
  );
}
