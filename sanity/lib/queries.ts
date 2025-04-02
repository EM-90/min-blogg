import { client } from "./client";

export async function fetchPosts() {
  return client.fetch(`
    *[_type == "post" && !(_id in path("drafts.**"))]{
      _id,
      title,
      slug,
      "preview": array::join(string::split((pt::text(body)), " ")[0..25], " ") + "...",
      body,
      mainImage,
      publishedAt
    } | order(publishedAt desc)
  `);
}

export async function fetchPostBySlug(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export async function fetchRecentPosts(limit = 5) {
  try {
    return await client.fetch(
      `
      *[_type == "post" && !(_id in path("drafts.**"))]{
        _id,
        title,
        slug,
        "preview": array::join(string::split((pt::text(body)), " ")[0..25], " ") + "...",
        body,
        mainImage,
        publishedAt
      } | order(publishedAt desc) [0...$limit]
    `,
      { limit }
    );
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}
