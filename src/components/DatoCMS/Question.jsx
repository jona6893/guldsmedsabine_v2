import React from "react";
import Anchor from "../Anchor";

function Question({ content }) {
  console.log(content);
  return (
    <section className="mx-auto  bg-grey-light  p-4 flex flex-col justify-center items-center pb-20 pt-20">
      <article className="max-w-[1450px]">
        <h2 className="text-gold-light font-tangier text-6xl text-center mb-4">{content.title}</h2>
        <p className="text-offWhite max-w-2xl text-center leading-8 text-lg mb-8">{content.paragraph}</p>
        <div className=" flex justify-around">
          <Anchor className="bg-gold-dark text-offWhite rounded-full min-w-[180px] flex items-center justify-center" href={content.buttonOne[0].url}>
            {content.buttonOne[0].text}
          </Anchor>
          <Anchor className="text-gold-light border-gold-dark border-2 rounded-full min-w-[180px] flex items-center justify-center py-1.5" href={content.buttonTwo[0].url}>
            {content.buttonTwo[0].text}
          </Anchor>
        </div>
      </article>
    </section>
  );
}

export default Question;
