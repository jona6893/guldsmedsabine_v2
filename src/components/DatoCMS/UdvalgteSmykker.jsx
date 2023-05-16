import React from "react";

function UdvalgteSmykker({ content }) {
  return (
    <section>
      <div>
        {content.UdvalgteSmykker.map((udvalgtSmykke, index) => (
          <div key={index} className="">
            <img src={udvalgtSmykke.produktBillede.url} alt="" />
            <h4>{udvalgtSmykke.produktNavn}</h4>
            <p>{udvalgtSmykke.pris}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UdvalgteSmykker;

/*    <div className="flex  justify-evenly ">
          {content.udvalgteYdelser.map((udvalgtYdelse, index) => (
            <div key={index} className="w-72 h-96 bg-grey-dark  rounded">
              <img src={udvalgtYdelse.foto.url} alt="" className="w-full h-48 object-cover rounded-t" />
              <article className="p-4 flex flex-col justify-center h-48 ">
                <h3 className="text-gold-light">{udvalgtYdelse.overskrift}</h3>
                <p className="text-offWhite ">{udvalgtYdelse.broedtekst}</p>
              </article>
            </div>
          ))}
        </div> */
