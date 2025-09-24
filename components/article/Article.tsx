import { ReactNode } from "react";
import { PortableText } from "next-sanity";
import Link from "next/link";
import { PencilRuler } from "lucide-react";

type HeadingTag = "h2" | "h3";

interface ArticleProps {
  articleHeader: string;
  articlePreview?: string;
  articleText?: any;
  tagContainer?: ReactNode;
  icon?: ReactNode;
  mainImage?: string;
  articleSlug: string;
  as?: HeadingTag;
}

export const Article = ({
  articleHeader,
  articleText,
  tagContainer,
  articleSlug,
  icon,
  as = "h3",
}: ArticleProps) => {
  const Heading = as;

  return (
    <Link href={`/articles/${articleSlug}`} className="group block h-full">
      <article className="h-full flex gap-3 rounded-lg bg-[#FFFCF4] hover:bg-[#fff7e3] outline-2 hover:outline-black hover:outline-[5px] focus-visible:outline-black p-4 sm:p-6 text-[clamp(0.9rem,2.5vw,1rem)] ">
        <div>
          <div className="p-4 bg-[#FFE49A] rounded-full">
            <PencilRuler className="md:w-10 md:h-10 xl:w-12 xl:h-12 w-6 h-6" />
          </div>
        </div>

        <section className=" ">
          {icon}
          <div className="pb-1">{tagContainer}</div>
          <Heading className="text-lg sm:text-[1.4rem]   font-medium mb-2 group-hover:underline line-clamp-3">
            {articleHeader}
          </Heading>
        </section>
        <div className="mt-3">
          {articleText && <PortableText value={articleText} />}
        </div>
      </article>
    </Link>
  );
};
