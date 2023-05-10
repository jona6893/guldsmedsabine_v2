import React from "react";

function YdelserHero({ content }) {
  return (
    <div style={{ backgroundImage: `url("${content.heroImage.url}")` }} className="w-screen h-screen">
      <h1 className="text-gold-dark font-tangier ">{content.title}</h1>
      <p>{content.paragraph}</p>
    </div>
  );
}

export default YdelserHero;
