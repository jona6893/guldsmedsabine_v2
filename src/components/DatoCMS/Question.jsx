import React from "react";
import Anchor from "../Anchor";

function Question({ content }) {
  console.log(content);
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.paragraph}</p>
      <Anchor href={content.knapOne[0].url}>{content.knapOne[0].text}</Anchor>
      <Anchor href={content.knapTwo[0].url}>{content.knapTwo[0].text}</Anchor>
    </div>
  );
}

export default Question;
