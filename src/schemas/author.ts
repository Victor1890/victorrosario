import { defineField, defineType } from "sanity";
import { BiUser } from "react-icons/bi";

const author = {
  name: "author",
  title: "Author",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Profile Photo",
      type: "image",
      description: "Upload a profile photo. Recommended size 320 x 320",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "twitterUrl",
      title: "Twitter URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
};

export default author