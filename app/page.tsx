import { Article } from "@/components/article/Article";
import { Header } from "@/components/header/Header";
import { InfoCard } from "@/components/info/InfoCard";
import { fetchRecentPosts } from "@/sanity/lib/queries";
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
          <Link href="/kontakt">
            <button className="p-4 text-2xl rounded-md border-4">
              Kontakt her
            </button>
          </Link>
        }
      />
      <section className="flex gap-20">
        {NewPosts.map(
          (post: {
            _id: Key | null | undefined;
            title: string;
            slug: { current: string };
            preview: string;
          }) => (
            <Article
              key={post._id}
              articleHeader={post.title}
              articleSlug={post.slug.current}
              articlePreview={post.preview}
            />
          )
        )}
      </section>
    </section>
  );
}
