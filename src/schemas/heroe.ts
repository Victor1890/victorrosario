import { FaGlasses } from "react-icons/fa";
import { defineField } from "sanity";

const heroes = {
  name: "heroe",
  title: "Heroes",
  type: "document",
  icon: FaGlasses,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Social URL",
      type: "url",
    }),
    defineField({
      name: "met",
      title: "Have you met this hero?",
      type: "boolean",
    }),
  ],
}

export default heroes
