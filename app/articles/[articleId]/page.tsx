// app/(...)/[articleId]/page.tsx
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { notFound } from "next/navigation";
import { fetchPostBySlug } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface ArticleIdProps {
  params: { articleId: string };
}

const components: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
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
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      // Bruk et “fornuftig stort” mål for artikkelbredde
      const targetW = 1200;
      const ratio = value.aspectRatio || 16 / 9;
      const targetH = Math.round(targetW / ratio);

      const src = urlFor(value).width(targetW).fit("max").auto("format").url();

      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt || ""}
            width={targetW}
            height={targetH}
            placeholder={value.lqip ? "blur" : "empty"}
            blurDataURL={value.lqip}
            sizes="(min-width: 1024px) 800px, 100vw"
            style={{ width: "100%", height: "auto" }}
          />
          {(value.caption || value.credit) && (
            <figcaption className="mt-2 text-sm text-neutral-500">
              {value.caption}
              {value.credit
                ? value.caption
                  ? ` — ${value.credit}`
                  : value.credit
                : null}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function ArticleID({ params }: ArticleIdProps) {
  const { articleId } = params;
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
