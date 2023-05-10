import React from "react";
import Anchor from "../Anchor";

function Question({ content }) {
  console.log(content);
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.paragraph}</p>
      <Anchor href={content.buttonOne[0].url}>{content.buttonOne[0].text}</Anchor>
      <Anchor href={content.buttonTwo[0].url}>{content.buttonTwo[0].text}</Anchor>
    </div>
  );
}

export default Question;
