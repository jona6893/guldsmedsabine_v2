import Anchor from "../Anchor";

function UdvalgteYdelser({content}) {
    console.log("hej")
  return (
    <section>
        <p>Hej</p>
      {content.udvalgteYdelser.map((udvalgtYdelse, index) => (
        <div key={index}>
          <img src={udvalgtYdelse.foto.url} alt=""  />
          <h3 className='text-white'>{udvalgtYdelse.overskrift}</h3>
          <p>{udvalgtYdelse.broedtekst}</p>
        </div>
      ))}
      <Anchor></Anchor>
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