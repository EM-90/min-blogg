import { ReactNode } from "react";
import { PortableText } from "next-sanity";
import Link from "next/link";

interface ArticleProps {
  articleHeader: string;
  articlePreview?: string;
  articleText?: any;
  tagContainer?: ReactNode;
  mainImage?: string;
  articleSlug: string;
}

export const Article = ({
  articleHeader,
  articleText,
  tagContainer,
  articleSlug,
  mainImage,
}: ArticleProps) => {
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
          <h3 className="text-xl sm:text-2xl font-medium mb-2 group-hover:underline">
            {articleHeader}
          </h3>

          <div className="mt-3">
            {articleText && <PortableText value={articleText} />}
          </div>
        </section>
      </article>
    </Link>
  );
};
