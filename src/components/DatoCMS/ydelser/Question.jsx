import React from "react";
import Anchor from "../../Anchor";

function Question({ content }) {
  console.log(content);
  return (
    <section className="mx-auto   p-4 flex flex-col justify-center items-center pb-20 pt-20">
      <article className="max-w-[1450px]">
        <h2 className="text-gold-light font-italianno text-6xl text-center mb-4">{content.title}</h2>
        <p className="text-offWhite max-w-2xl text-center leading-8 text-lg mb-8">{content.paragraph}</p>
        <div className=" flex max-[500px]:flex-col justify-around max-sm:gap-8 px-4">
          <Anchor className="button-primary w-full sm:w-max" href={content.buttonOne[0].url}>
            {content.buttonOne[0].text}
          </Anchor>
          <Anchor className="button-secondary w-full sm:w-max" href={content.buttonTwo[0].url}>
            {content.buttonTwo[0].text}
          </Anchor>
        </div>
      </article>
    </section>
  );
}

export default Question;
