import { fetchPostBySlug } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

interface ArticleIdProps {
  params: { articleId: string };
}

export default async function ArticleID({ params }: ArticleIdProps) {
  const { articleId } = params;

  const post = await fetchPostBySlug(articleId);

  if (!post) {
    notFound();
  }

  return (
    <section className="thisArticle text-balance flex flex-col justify-center max-w-[800px] mx-auto">
      <h1 className="  text-2xl md:text-4xl xl:text-5xl font-bold">
        {post.title}
      </h1>
      <div className="mt-4">
        <PortableText value={post.body} />
      </div>
    </section>
  );
}
