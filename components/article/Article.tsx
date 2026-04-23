import { ReactNode } from "react";
import { PortableText } from "next-sanity";
import { PortableTextBlock } from "sanity";
import Link from "next/link";
import { IconFromKey, IconKey } from "./IconMap";

type HeadingTag = "h2" | "h3";

interface ArticleProps {
  articleHeader: string;
  created?: string;
  articlePreview?: string;
  articleText?: PortableTextBlock[];
  tagContainer?: ReactNode;
  iconKey?: IconKey;
  mainImage?: string;
  articleSlug: string;
  as?: HeadingTag;
}

export const Article = ({
  articleHeader,
  created,
  articleText,
  tagContainer,
  articleSlug,
  iconKey,
  as = "h3",
}: ArticleProps) => {
  const Heading = as;

  return (
    <li className=" list-none">
      <article className="group relative h-full flex gap-3 rounded-lg bg-[#FFFCF4] hover:bg-[#fcf3dc] active:bg-[#fff7e3] outline-2 hover:outline-black active:outline-black active:outline-[5px] hover:outline-[5px] p-4 sm:p-6 text-[clamp(0.9rem,2.5vw,1rem)] ">
        <div>
          <div className="p-4 bg-[#FFE49A] rounded-full">
            {iconKey && (
              <IconFromKey
                iconKey={iconKey}
                className="md:w-9 md:h-9 xl:w-11 xl:h-11 w-6 h-6"
              />
            )}
          </div>
        </div>

        <div className=" flex flex-col justify-between">
          <div>
            <div className="pb-1">{tagContainer}</div>
            <Link
              href={`/articles/${articleSlug}`}
              className="h-full w-full before:absolute before:inset-0 before:z-10 before:content-['']"
            >
              <Heading className="text-lg sm:text-[1.4rem]   font-medium mb-2 group-hover:underline line-clamp-3">
                {articleHeader}
              </Heading>
            </Link>
          </div>
          {created && (
            <time
              dateTime={new Date(created).toISOString().split("T")[0]}
              className="text-md text-neutral-600 block mb-2 "
            >
              {new Date(created).toLocaleDateString("nb-NO", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          )}
        </div>
        <div className="mt-3">
          {articleText && <PortableText value={articleText} />}
        </div>
      </article>
    </li>
  );
};
