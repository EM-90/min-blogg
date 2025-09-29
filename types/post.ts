import { IconKey } from "@/components/article/IconMap";

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface Post {
  _id: string;
  title: string;
  date: string;
  slug: { current: string };
  preview: string;
  body: any;
  mainImage?: string;
  publishedAt?: string;
  iconKey?: string | null;
  categories: Category[];
}
