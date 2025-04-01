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
