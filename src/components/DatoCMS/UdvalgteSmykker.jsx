import React from "react";

function UdvalgteSmykker({ content }) {
  console.log(content.UdvalgteSmykker);
  return (
    <section>
      <div>
        {content.UdvalgteSmykker.map((udvalgtSmykke, index) => (
          <div key={index} className="">
            <img src={udvalgtSmykke.produkt.produktBillede.url} alt="" />
            <h4>{udvalgtSmykke.produkt.produktNavn}</h4>
            <p>{udvalgtSmykke.produkt.pris}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UdvalgteSmykker;
