import { defineField, defineType } from "sanity";
import { YoutubeWidget } from "@/components/widgets/YoutubeWidget";
import { FiYoutube } from "react-icons/fi";

const youtube = {
  name: "youtube",
  title: "Youtube",
  type: "object",
  icon: FiYoutube,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Youtube Video",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
  },
  components: {
    preview: YoutubeWidget,
  },
}

export default youtube