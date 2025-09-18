import { ReactNode } from "react";
import { PortableText } from "next-sanity";
import Link from "next/link";

type HeadingTag = "h2" | "h3";

interface ArticleProps {
  articleHeader: string;
  articlePreview?: string;
  articleText?: any;
  tagContainer?: ReactNode;
  mainImage?: string;
  articleSlug: string;
  as?: HeadingTag;
}

export const Article = ({
  articleHeader,
  articleText,
  tagContainer,
  articleSlug,
  mainImage,
  as = "h3",
}: ArticleProps) => {
  const Heading = as;

  return (
    <Link href={`/articles/${articleSlug}`}>
      <article
        style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)" }}
        className="group max-w-96 cursor-pointer rounded-lg  border-2 hover:border-blue-900 hover:border-4 "
      >
        {mainImage && (
          <figure className="mb-4 border-b-2">
            <img
              src={mainImage}
              alt={articleHeader}
              className="rounded-md object-cover w-full h-48"
            />
          </figure>
        )}
        <section className="container px-6 pb-6">
          <div className="pb-1">{tagContainer}</div>
          <Heading className="text-xl sm:text-2xl font-medium mb-2 group-hover:underline">
            {articleHeader}
          </Heading>

          <div className="mt-3">
            {articleText && <PortableText value={articleText} />}
          </div>
        </section>
      </article>
    </Link>
  );
};
