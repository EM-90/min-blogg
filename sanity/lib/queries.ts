// sanity/lib/queries.ts
import { client } from "./client";
import type { Post } from "@/types/post";

export async function fetchPosts(): Promise<Post[]> {
  return client.fetch(`
    *[_type == "post" && !(_id in path("drafts.**"))]
    | order(coalesce(publishedAt, _createdAt) desc) {
      _id,
      title,
      slug,
      "preview": coalesce(
        array::join(string::split(pt::text(body), " ")[0..20], " ") + "...",
        ""
      ),
      body,
      iconKey,
      categories[]->{ _id, title, slug },
      "mainImage": mainImage.asset->url,
      "date": coalesce(publishedAt, _createdAt),
      "publishedAt": publishedAt
    }
  `);
}

export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    slug,
    body[]{
      ...,
      _type == "image" => {
        ...,
        "alt": alt,
        "lqip": asset->metadata.lqip,
        "aspectRatio": asset->metadata.dimensions.aspectRatio
      }
    }
  }`;

  return await client.fetch(query, { slug });
}

export async function fetchRecentPosts(limit = 3): Promise<Post[]> {
  const query = `
    *[_type == "post" && !(_id in path("drafts.**"))]
    | order(coalesce(publishedAt, _createdAt) desc)
    [0...$limit]{
      _id,
      title,
      slug,
      "preview": coalesce(
        array::join(string::split(pt::text(body), " ")[0..20], " ") + "...",
        ""
      ),
      body,
      iconKey,
      categories[]->{ _id, title, slug },
      "mainImage": mainImage.asset->url,
      "date": coalesce(publishedAt, _createdAt),
      "publishedAt": publishedAt
    }
  `;
  return client.fetch(query, { limit });
}
