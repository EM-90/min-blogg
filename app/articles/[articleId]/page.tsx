import { fetchPostBySlug } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

interface ArticleIdProps {
  params: Promise<{ articleId: string }>;
}

const components = {
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      return (
        <a
          href={href}
          className="text-blue-800 underline hover:text-blue-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
  },
};

export default async function ArticleID({ params }: ArticleIdProps) {
  const { articleId } = await params;

  const post = await fetchPostBySlug(articleId);

  if (!post) {
    notFound();
  }

  return (
    <section className="thisArticle text-balance flex flex-col justify-center max-w-[800px] mx-auto scale-z-100">
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium">
        {post.title}
      </h1>
      <div className="mt-4 text-[clamp(1rem,2.5vw,1.3rem)]">
        <PortableText value={post.body} components={components} />
      </div>
    </section>
  );
}
