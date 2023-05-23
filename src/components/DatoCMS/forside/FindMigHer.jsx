import Anchor from "../../Anchor";

function FindMigHer({ content }) {
  console.log(content.kort);
  return (
    <section className=" grid md:grid-cols-2 items-center mx-auto max-w-[1450px] justify-items-center ">
      <div className="max-md:h-[300px] h-[500px] w-full  grayscale">
        <iframe
          width="100%"
          height="100%"
          src={"https://maps.google.com/maps?q=" + content.kort.latitude + "," + content.kort.longitude + "&t=&z=19&ie=UTF8&iwloc=&output=embed"}
        ></iframe>
      </div>
      <article className="max-md:order-first px-4 py-16 md:px-6">
        <h2 className="text-gold-light text-4xl font-light mb-4">{content.overskrift}</h2>
        <p className="text-offWhite max-w-md mb-6">{content.broedtekst}</p>
        <div className="grid max-md:justify-items-center">
          <Anchor className="button-secondary" href={content.knap[0].url}>
            {content.knap[0].text}
          </Anchor>
        </div>
      </article>
    </section>
  );
}

export default FindMigHer;
