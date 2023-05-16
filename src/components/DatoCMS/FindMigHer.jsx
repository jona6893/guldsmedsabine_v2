import Anchor from "../Anchor";

function FindMigHer({content}) {
  console.log(content.kort);
  return (
    <section>
      <h2 className="text-gold-light text-4xl font-light mb-4">{content.overskrift}</h2>
      <p className="text-offWhite max-w-md mb-6">{content.broedtekst}</p>
      <Anchor className="text-gold-light border-gold-dark border-2 rounded-full w-[180px] flex items-center justify-center py-1.5" href={content.knap[0].url}>
        {content.knap[0].text}
      </Anchor>
    </section>
  );
}

export default FindMigHer