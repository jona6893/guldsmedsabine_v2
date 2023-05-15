import React from 'react'
import Anchor from '../Anchor';

function OmSabineForside({content}) {
  return (
    <section className="mx-auto max-w-[1450px] grid grid-cols-2 justify-items-center items-center pb-16">
      <div className="grid grid-cols-3 grid-rows-2 w-[500px] gap-4">
        <img className="col-start-1 row-span-1 object-cover h-full" src={content.fotos[1].url} alt="" />
        <img className="col-start-2 row-span-2 col-span-2 object-cover h-full" src={content.fotos[0].url} alt="" />
        <img className="col-start-1 row-span-1 object-cover h-full" src={content.fotos[2].url} alt="" />
      </div>

      <article>
        <h1 className="text-gold-light text-8xl font-tangier mb-4">{content.overskrift}</h1>
        <h3 className="text-gold-light uppercase text-2xl font-light mb-4">{content.underOverskrift}</h3>
        <p className="mb-8 text-offWhite max-w-lg">{content.paragraph}</p>
        <Anchor className="bg-gold-dark text-offWhite rounded-full w-[180px] flex items-center justify-center py-1.5" href={content.knap[0].url}>
          {content.knap[0].text}
        </Anchor>
      </article>
    </section>
  );
}

export default OmSabineForside