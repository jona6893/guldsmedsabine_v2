import Heading from "@/components/Heading";
import Markdown from "markdown-to-jsx";
import React from "react";

// Types
interface SimpleTextProps {
  title: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  description: string;
}

// Frontend
export default function SimpleText({ title, level, description }: SimpleTextProps) {
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
