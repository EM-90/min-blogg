import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "iconKey",
      title: "icon",
      type: "string",
      options: {
        list: [
          { title: "Design", value: "palette" },
          { title: "Dokument", value: "file-text" },
          { title: "Utvikling", value: "code" },
          { title: "tekst", value: "case-sensitive" },
          { title: "Mobil", value: "smartphone" },
          { title: "Ai", value: "brain-circuit" },
          { title: "Undersøkelser", value: "chart-pie" },
          { title: "Verktøy", value: "wrench" },
          { title: "Skjermleser", value: "speech" },
          { title: "Generelt om UU", value: "monitor" },
        ],
        layout: "dropdown",
      },
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Guide", value: "guide" },
          { title: "Article", value: "article" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("Type is required"),
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
