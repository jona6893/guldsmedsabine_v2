import Heading from "../Heading";
import Markdown from "markdown-to-jsx";
import React from "react";
import Anchor from "../Anchor";

// Frontend
export default function SimpleText({ title, level, description }) {
  return (
    <section className="p-4">
   
      <Heading level={level}>{title}</Heading>
      {/*  hvad foregår der her præcis? */}
      <Markdown
        options={{
          forceBlock: true,
          overrides: {
            a: {
              component: Anchor,
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
