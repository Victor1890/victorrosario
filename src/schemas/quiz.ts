import { defineField, defineType } from "sanity";
import { BiCommand } from "react-icons/bi";

const quiz = {
  name: "quiz",
  title: "Quiz",
  type: "object",
  icon: BiCommand,
  fields: [
    defineField({
      name: "question",
      title: "Question",
      type: "string",
    }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "text",
      rows: 4,
      description: "What is the answer to the question?",
    }),
  ],
  preview: {
    select: {
      question: "question",
      answer: "answer",
    },
    prepare({ question, answer }: any) {
      return {
        title: !question ? "No Question" : question,
        subtitle: !answer ? "No answer" : answer,
      };
    },
  },
}

export default quiz
