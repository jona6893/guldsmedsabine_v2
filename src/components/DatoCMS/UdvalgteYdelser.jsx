import Anchor from "../Anchor";

function UdvalgteYdelser({content}) {
    console.log("hej")
  return (
    <section className="bg-grey-light py-16 px-4  ">
      <div className="max-w-[1450px] mx-auto grid gap-12">
        <h2 className="text-gold-light text-4xl font-light  text-center">{content.overskriften}</h2>
        <div className="flex max-md:flex-col items-center md:justify-evenly gap-x-4 gap-y-8">
          {content.udvalgteYdelser.map((udvalgtYdelse, index) => (
            <div key={index} className="w-72 h-96 bg-grey-darker  ">
              <img src={udvalgtYdelse.foto.url} alt="" className="w-full h-48 object-cover " />
              <article className="p-4 flex flex-col justify-center h-48 ">
                <h3 className="text-gold-light">{udvalgtYdelse.overskrift}</h3>
                <p className="text-offWhite ">{udvalgtYdelse.broedtekst}</p>
              </article>
            </div>
          ))}
        </div>
        <Anchor className="bg-gold-dark text-offWhite w-max mx-auto rounded-full px-4 flex items-center justify-center py-1.5 " href={content.knap[0].url}>
          {content.knap[0].text}
        </Anchor>
      </div>
    </section>
  );
}

export default UdvalgteYdelser
/* {content.ydelser.map((ydelse, index) => (
            <section
              key={index}
              className="mx-auto bg-grey-dark grid justify-items-center"
            >
              <div className="py-6">
                <div className="flex flex-col justify-center items-center">
                  <article id={`text-${index}`} className="max-w-lg p-4">
                    <h2 className="text-gold-light text-4xl mb-4 font-light uppercase">
                      {ydelse.title}
                    </h2>
                    <p className="text-offWhite mb-4">{ydelse.paragraph}</p>
                    <p className="text-gold-light text-xl font-light">
                      {ydelse.price}
                    </p>
                  </article>
                </div>
              </div>
            </section>
          ))} */