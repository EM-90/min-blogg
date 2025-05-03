import { ReactNode } from "react";
import { PortableText } from "next-sanity";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ArticleProps {
  articleHeader: string;
  articlePreview?: string;
  articleText?: any;
  tagContainer?: ReactNode;
  imageUrl?: string;
  articleSlug: string;
}

export const Article = ({
  articleHeader,
  articleText,
  articlePreview,
  tagContainer,
  articleSlug,
}: ArticleProps) => {
  return (
    <Link href={`/articles/${articleSlug}`}>
      <article
        style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)" }}
        className="group max-w-96 pr-2 cursor-pointer hover:rounded-lg relative transition-all duration-200"
      >
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:underline">
          {articleHeader}
        </h2>
        <div>{tagContainer}</div>
        <div className="mt-3">
          <p className="text-gray-700">{articlePreview}</p>
          <div>
            <ArrowRight className="absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
          </div>
          {articleText && <PortableText value={articleText} />}
        </div>
      </article>
    </Link>
  );
};
