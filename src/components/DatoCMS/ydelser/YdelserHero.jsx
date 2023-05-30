import React from "react";

function YdelserHero({ content }) {
  return (
    <section className="relative w-full h-[70vh]">
      <div
        style={{ backgroundImage: `url("${content.heroImage.url}")` }}
        className="absolute h-full w-full bg-cover bg-no-repeat bg-center brightness-50 md:brightness-100"
      />
      <div className="relative h-full max-w-[1450px] mx-auto flex items-center px-4">
        <article className="p-4 ">
          <h1 className="text-gold-light font-italianno mb-4 ">{content.title}</h1>
          <p className="text-offWhite max-w-xl text-lg">{content.paragraph}</p>
        </article>
      </div>
    </section>
  );
}

export default YdelserHero;
