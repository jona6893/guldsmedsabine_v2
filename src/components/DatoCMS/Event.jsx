import React from "react";

function Event({ content }) {
  return (
    <section className="grid sm:grid-cols-2 mx-auto max-w-[1450px] justify-items-center p-4 ">
      <div className=" flex flex-col gap-8  ">
        <article>
          <h2 className="text-gold-light text-5xl font-light mb-4">{content.title}</h2>

          <p className="text-offWhite max-w-lg mb-4">{content.paragraph}</p>
          <h4 className="text-offWhite font-tangier text-4xl">{content.smallTitle}</h4>
        </article>
        <article>
          <h3 className="text-gold-light text-2xl mb-4 font-light"> {content.titleTwo}</h3>
          <p className="flex gap-2 text-offWhite">
            {content.titleDate} <span className="text-gold-light">{content.date}</span>
          </p>
          <p className="flex gap-4 text-offWhite">
            {content.titleTid} <span className="text-gold-light">{content.time}</span>
          </p>
          <p className="flex gap-2 text-offWhite">
            {content.titleLocation} <span className="text-gold-light">{content.location}</span>
          </p>
          {/*  <p>{content.date}</p> */}

          {/*  <p>{content.time}</p>
          <p>{content.titleTid}</p>
          <p>{content.location}</p>
          <p>{content.titleLocation}</p> */}
        </article>
      </div>
      <img src={content.photo.url} alt="" className="w-full h-[500px] object-contain" />
    </section>
  );
}

export default Event;
