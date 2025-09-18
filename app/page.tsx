import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { fetchRecentPosts } from "@/sanity/lib/queries";
import { Tag } from "@/components/tag/Tag";
import Link from "next/link";
import { Post } from "@/types/post";
import { ArrowRightIcon } from "lucide-react";

export default async function Home() {
  let newPosts: Post[] = [];
  newPosts = await fetchRecentPosts();

  return (
    <section>
      <Header
        headerText="Design for alle er inkluderende design"
        infoText="Artikler og skriv om hvordan tilgjengelighet kan gjøre siden din bedre"
        btn={
          <Link
            href="/articles"
            className=" cta-btn p-4 text-xl md:text-2xl font-light cursor-pointer text-white rounded-lg bg-slate-800 hover:bg-black border-none flex-row inline-flex gap-2 items-center"
          >
            Finn flere artikler
            <ArrowRightIcon />
          </Link>
        }
      />
      <section>
        <h2 className=" scale-z-100 text-3xl xl:text-4xl mb-9">
          Nyeste artikler
        </h2>
        <section className="flex flex-wrap gap-10">
          {newPosts.map((post) => (
            <Article
              key={post._id}
              articleHeader={post.title}
              articleSlug={post.slug.current}
              mainImage={post.mainImage}
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
