import { ReactNode } from "react";
import { PortableText } from "next-sanity";
import { ArrowRight } from "lucide-react";

interface ArticleProps {
  articleHeader: string;
  articlePreview: string;
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
}: ArticleProps) => {
  return (
    <article
      style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
      className="group max-w-96 p-4 my-5 mr-8 cursor-pointer hover:rounded-lg relative transition-all duration-200"
    >
      <h2 className="text-3xl font-semibold mb-2 group-hover:underline">
        {articleHeader}
      </h2>
      <div>{tagContainer}</div>
      <div className="mt-2">
        <p className="text-gray-700">{articlePreview}</p>
        <div>
          <ArrowRight className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 " />
        </div>
        <PortableText value={articleText} />
      </div>
    </article>
  );
};
