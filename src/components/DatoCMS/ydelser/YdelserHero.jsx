import React from "react";

function YdelserHero({ content }) {
  return (
    <section style={{ backgroundImage: `url("${content.heroImage.url}")` }} className="w-full bg-cover h-[70vh] bg-no-repeat bg-center    p-4 mx-auto max-w-1450">
      <div className="grid  h-full  sm:items-center  max-w-[1450px] mx-auto">
        <article className="px-4">
          <h1 className="text-gold-light font-tangier mb-4 text-6xl sm:text-7xl">{content.title}</h1>
          <p className="text-offWhite max-w-lg text-lg">{content.paragraph}</p>
        </article>
      </div>
    </section>
  );
}

export default YdelserHero;
