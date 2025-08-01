export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  preview: string;
  body: any;
  mainImage?: string;
  publishedAt: string;
  categories: Category[];
}
