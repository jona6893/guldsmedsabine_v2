import React from "react";

function UdvalgteSmykker({ content }) {
  console.log(content.UdvalgteSmykker);
  return (
    <section>
      <div>
        {content.udvalgteSmykker.map((udvalgtSmykke, index) => (
          <div key={index} className="">
            <img src={udvalgtSmykke.produktBillede[0].url} alt="" />
            <h4>{udvalgtSmykke.produktNavn}</h4>
            <p>{udvalgtSmykke.pris}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UdvalgteSmykker;
