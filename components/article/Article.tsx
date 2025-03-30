import { ReactNode } from "react";
import { PortableText } from "next-sanity";

interface ArticleProps {
  articleHeader: string;
  articleText: any;
  tagContainer?: ReactNode;
}

export const Article = ({
  articleHeader,
  articleText,
  tagContainer,
}: ArticleProps) => {
  return (
    <article
      style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
      className=" max-w-96 p-4 my-5 mr-8 hover:bg-yellow-200 cursor-pointer hover:rounded-lg"
    >
      <h2 className="text-3xl font-semibold mb-2">{articleHeader}</h2>
      <div>{tagContainer}</div>
      <div className="mt-2">
        <PortableText value={articleText} />
      </div>
    </article>
  );
};
