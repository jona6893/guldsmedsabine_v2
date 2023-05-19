import React from "react";

function YdelserHero({ content }) {
  return (
    <section style={{ backgroundImage: `url("${content.heroImage.url}")` }} className="w-full bg-cover h-[80vh] bg-no-repeat bg-center    p-4 mx-auto max-w-1450">
      <div className="">
        <article className="p-4 max-w-[1450px] mx-auto">
          <h1 className="text-gold-light font-tangier mb-4 text-6xl sm:text-7xl">{content.title}</h1>
          <p className="text-offWhite max-w-lg text-lg">{content.paragraph}</p>
        </article>
      </div>
    </section>
  );
}

export default YdelserHero;
