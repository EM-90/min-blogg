import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { fetchRecentPosts } from "@/sanity/lib/queries";
import { Tag } from "@/components/tag/Tag";
import Link from "next/link";
import { Key } from "react";

export default async function Home() {
  const NewPosts = await fetchRecentPosts();

  return (
    <section>
      <Header
        headerText="Alle skal ha tilgang"
        infoText="Artikler, råd, veiledere og eksprimentering rundt universell utforming av teknologi og hvordan det kan skape en bedre brukeropplevelse for alle"
        btn={
          <Link href="/articles">
            <button className="p-4 text-2xl cursor-pointer outline-2 text-black hover:text-white rounded-md hover:bg-black">
              Finn flere artikler
            </button>
          </Link>
        }
      />
      <section className="flex flex-wrap gap-20">
        {NewPosts.map(
          (post: {
            _id: Key | null | undefined;
            title: string;
            categories: any[] | null;
            slug: { current: string };
            preview: string;
          }) => (
            <Article
              key={post._id}
              articleHeader={post.title}
              articleSlug={post.slug.current}
              articlePreview={post.preview}
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
          )
        )}
      </section>
    </section>
  );
}

//Keep working on the tags for them to display on this page
