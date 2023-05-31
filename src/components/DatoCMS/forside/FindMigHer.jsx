import Anchor from "../../Anchor";

function FindMigHer({ content }) {
  console.log(content.kort);
  return (
    <section className=" grid md:grid-cols-2  mx-auto max-w-[1450px]  ">
      <div className="max-md:h-[300px] h-[500px] w-full grayscale">
        <iframe
          title="Google maps, Fredensborg Briller"
          width="100%"
          height="100%"
          src={
            "https://maps.google.com/maps?q=" +
            content.kort.latitude +
            "," +
            content.kort.longitude +
            "&t=&z=19&ie=UTF8&iwloc=&output=embed"
          }
        ></iframe>
      </div>
      <article
        className="max-md:order-first px-4 py-16 md:px-6 bg-no-repeat bg-contain grid justify-items-center items-center"
        style={{
          backgroundImage: `url("/images/gren_ti.svg")`,
          backgroundPosition: "0% 100%",
          backgroundSize: "",
        }}
      >
        <div>
          <h2 className="text-gold-light font-light mb-4 uppercase">
            {content.overskrift}
          </h2>
          <p className="text-offWhite max-w-md mb-6">{content.broedtekst}</p>
          <div className="grid max-md:justify-items-center">
            <Anchor className="button-primary" href={content.knap[0].url}>
              {content.knap[0].text}
            </Anchor>
          </div>
        </div>
      </article>
    </section>
  );
}

export default FindMigHer;
