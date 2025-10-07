import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { fetchRecentPosts } from "@/sanity/lib/queries";
import { Tag } from "@/components/tag/Tag";
import { Post } from "@/types/post";
import PrimaryCta from "@/components/buttons/primary-cta";
import { isIconKey } from "@/components/article/IconMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inklusign",
  description:
    "Inklusign - Artikler om hvordan tilgjengelighet kan gjøre nettstedet ditt bedre",
  alternates: { canonical: "/" },
};

export default async function Home() {
  let newPosts: Post[] = [];
  newPosts = await fetchRecentPosts();

  return (
    <section>
      <Header
        headerText="Design for alle er inkluderende design"
        infoText="Artikler om hvordan tilgjengelighet kan gjøre nettstedet ditt bedre"
        btn={<PrimaryCta />}
      />
      <section>
        <h2 className="text-3xl xl:text-4xl mb-9 lg:pt-15 xl:pt-24">
          Nyeste artikler
        </h2>
        <section className="grid gap-5 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(370px,1fr))]">
          {newPosts.map((post) => (
            <Article
              key={post._id}
              created={post.date}
              articleHeader={post.title}
              articleSlug={post.slug.current}
              mainImage={post.mainImage}
              iconKey={isIconKey(post.iconKey) ? post.iconKey : undefined}
              tagContainer={
                Array.isArray(post.categories) && post.categories.length > 0 ? (
                  post.categories.map((category) => (
                    <Tag key={category._id} tag={category} />
                  ))
                ) : (
                  <span className="text-transparent tracking-widest uppercase text-sm rounded-full">
                    innlegg uten kategori
                  </span>
                )
              }
            />
          ))}
        </section>
      </section>
    </section>
  );
}

//Keep working on the tags for them to display on this page
