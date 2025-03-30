import { client } from "./client";

export async function fetchPosts() {
  return client.fetch(`
    *[_type == "post" && !(_id in path("drafts.**"))]{
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt
    } | order(publishedAt desc)
  `);
}
