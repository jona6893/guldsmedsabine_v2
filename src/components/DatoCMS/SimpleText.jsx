import Heading from "../Heading";
import Markdown from "markdown-to-jsx";
import React from "react";

// Frontend
export default function SimpleText({ title, level, description }) {
  return (
    <section className="p-4">
      <Heading level={level}>{title}</Heading>
      <Markdown
        options={{
          overrides: {
            a: {
              props: {
                className: "text-blue-900",
              },
            },
          },
        }}
      >
        {description}
      </Markdown>
    </section>
  );
}
