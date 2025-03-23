import { ReactNode } from "react";

interface ArticleProps {
  articleHeader: string;
  articleText: string;
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
      className=" max-w-96 p-2 my-10"
    >
      <h2 className="text-3xl font-semibold mb-2 underline">{articleHeader}</h2>
      <div>{tagContainer}</div>
      <p>{articleText}</p>
    </article>
  );
};
