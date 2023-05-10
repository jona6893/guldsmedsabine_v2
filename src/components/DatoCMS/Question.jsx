import React from "react";
import Anchor from "../Anchor";

function Question({ content }) {
    console.log("hej")
  return (
    <div>
      <h2>{content.title}</h2>
      <p>{content.paragraph}</p>
      <Anchor>{content.knap_one[0].text}</Anchor>
      <Anchor>{content.knap_two[0].text}</Anchor>
    </div>
  );
}

export default Question;
