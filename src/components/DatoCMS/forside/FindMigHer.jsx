import Anchor from "../../Anchor";

function FindMigHer({ content }) {
  console.log(content.kort);
  return (
    <section className="max-[890px]:pb-16 min-[890px]:py-16 min-[890px]:px-4  flex max-sm:flex-col justify-evenly items-center mx-auto max-w-[1450px] gap-8">
      <div className="w-full sm:w-96 h-80 ">
        <iframe width="100%" height="100%" src={"https://maps.google.com/maps?q=" + content.kort.latitude + "," + content.kort.longitude + "&t=&z=19&ie=UTF8&iwloc=&output=embed"}></iframe>
      </div>
      <article className="max-sm:order-first max-[890px]:px-4 max-[890px]:pt-8">
        <h2 className="text-gold-light text-4xl font-light mb-4">{content.overskrift}</h2>
        <p className="text-offWhite max-w-md mb-6">{content.broedtekst}</p>
        <Anchor className="text-gold-light border-gold-dark border-2 rounded-full w-[180px] flex items-center justify-center py-1.5" href={content.knap[0].url}>
          {content.knap[0].text}
        </Anchor>
      </article>
    </section>
  );
}

export default FindMigHer;
