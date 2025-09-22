import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "table",
  title: "Tabell",
  type: "object",
  fields: [
    defineField({
      name: "caption",
      title: "Tabell-tekst (valgfritt)",
      type: "string",
    }),
    defineField({
      name: "hasHeader",
      title: "Første rad er header",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "columns",
      title: "Kolonner",
      type: "array",
      description: "Navn på kolonner (brukes som header hvis påslått).",
      of: [defineArrayMember({ type: "string" })],
      validation: (r) => r.min(1),
    }),
    defineField({
      name: "align",
      title: "Justering per kolonne (valgfritt)",
      type: "array",
      description:
        "left | center | right (må ha samme lengde som kolonner hvis du bruker dette).",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "rows",
      title: "Rader",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "cells",
              title: "Celler",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
          ],
          preview: {
            select: { cells: "cells" },
            prepare: ({ cells }) => ({
              title: Array.isArray(cells) ? cells.join(" | ") : "Rad",
            }),
          },
        }),
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: { caption: "caption", columns: "columns" },
    prepare: ({ caption, columns }) => ({
      title: caption || "Tabell",
      subtitle: Array.isArray(columns) ? `${columns.length} kolonner` : "",
    }),
  },
});
