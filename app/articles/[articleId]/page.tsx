import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import { notFound } from "next/navigation";
import { fetchPostBySlug } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Metadata } from "next";

type Params = { articleId: string };
type Props = { params: Promise<Params> };

function titleFromSlug(s?: string) {
  if (!s) return "Artikkel";
  return decodeURIComponent(s)
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleId } = await params;
  const title = titleFromSlug(articleId);
  const description = `Les «${title}» på Inklusign.`;
  const path = `/articles/${articleId}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title,
      description,
      url: path,
      images: [
        { url: "/og/og-default.jpg", width: 1200, height: 630, alt: title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og/og-default.jpg"],
    },
  };
}

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
          className="text-blue-800 underline underline-offset-2 decoration-2 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },

    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
  },

  // --------- BLOCKS (TYPO & SPACING) ----------
  block: {
    // brødtekst – jevn rytme
    normal: ({ children }) => <p className="mt-0 mb-[0.9em]">{children}</p>,

    // overskrifter: mer luft over enn under
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-[2.5em] mb-[0.7em]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold leading-snug mt-[2.0em] mb-[0.7em]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold leading-snug mt-[1.6em] mb-[0.6em]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-neutral-300 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },

  // --------- LISTS ----------
  list: {
    bullet: ({ children }) => (
      <ul className="my-4 ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-4 ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },

  // --------- TYPES (BEHOLDT) ----------
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) return null;

      const targetW = 800;
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
            style={{
              width: "100%",
              height: "auto",
              maxHeight: 520,
              objectFit: "contain",
            }}
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
          <table className="w-full border-collapse text-base md:text-lg">
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

export default async function Page({ params }: Props) {
  const { articleId } = await params;
  const post = await fetchPostBySlug(articleId);
  if (!post) notFound();

  return (
    <section className="mx-auto max-w-[85ch] px-4 text-[18px] md:text-[19px] leading-[1.7] scale-z-100">
      <h1 className="text-3xl md:text-5xl xl:text-6xl font-medium">
        {post.title}
      </h1>
      <div className="mt-4 text-[clamp(1rem,2.5vw,1.3rem)]">
        <PortableText value={post.body} components={components} />
      </div>
    </section>
  );
}
