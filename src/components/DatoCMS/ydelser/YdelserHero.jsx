import React from "react";

function YdelserHero({ content }) {
  return (
    <section style={{ backgroundImage: `url("${content.heroImage.url}")` }} className="w-full bg-cover h-[70vh] bg-no-repeat bg-center ">
      <div className="h-full max-w-[1450px] mx-auto flex items-center px-4">
        <article className="p-4 ">
          <h1 className="text-gold-light font-tangier mb-4 text-6xl sm:text-7xl">{content.title}</h1>
          <p className="text-offWhite max-w-xl text-lg">{content.paragraph}</p>
        </article>
      </div>
    </section>
  );
}

export default YdelserHero;
