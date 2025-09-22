// app/(...)/[articleId]/page.tsx
import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { notFound } from "next/navigation";
import { fetchPostBySlug } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface ArticleIdProps {
  params: { articleId: string };
}

// helper (kan stå over components)
function alignClass(a?: string) {
  if (a === "center") return "text-center";
  if (a === "right") return "text-right";
  return "text-left";
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

      const targetW = 500;
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

    table: ({ value }) => {
      if (!value?.columns?.length) return null;

      const caption: string | undefined = value.caption;
      const hasHeader: boolean = value.hasHeader ?? true;
      const columns: string[] = value.columns ?? [];
      const rows: { cells: string[] }[] = value.rows ?? [];
      const align: string[] = value.align ?? []; // "left" | "center" | "right"

      return (
        <div className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-lg">
            {caption ? (
              <caption className="caption-top mb-2 text-left text-neutral-700">
                {caption}
              </caption>
            ) : null}

            {hasHeader && (
              <thead>
                <tr>
                  {columns.map((col, i) => (
                    <th
                      key={i}
                      scope="col"
                      className={`border border-neutral-300 bg-neutral-50 px-3 py-2 ${alignClass(align[i])}`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
            )}

            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="bg-white">
                  {columns.map((_, ci) => (
                    <td
                      key={ci}
                      className={`border border-neutral-300 px-3 py-2 align-top ${alignClass(align[ci])}`}
                    >
                      {r.cells?.[ci] ?? ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    },
  },
};

type ArticleIdParams = { articleId: string };

export default async function ArticleID({
  params,
}: {
  params: Promise<ArticleIdParams>;
}) {
  const { articleId } = await params;

  const post = await fetchPostBySlug(articleId);
  if (!post) notFound();

  return (
    <section className="thisArticle flex flex-col justify-center max-w-[800px] mx-auto scale-z-100">
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium">
        {post.title}
      </h1>
      <div className="mt-4 text-[clamp(1rem,2.5vw,1.3rem)] ">
        <PortableText value={post.body} components={components} />
      </div>
    </section>
  );
}
