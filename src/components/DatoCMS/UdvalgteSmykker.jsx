import React from "react";

function UdvalgteSmykker({ content }) {
  console.log(content.UdvalgteSmykker);
  return (
    <section className="py-16 max-w-[1450px] mx-auto grid grid-cols-4">
      <div>
        {content.udvalgteSmykker.map((udvalgtSmykke, index) => (
          <div key={index} className="">
            <img src={udvalgtSmykke.produktBillede[0].url} alt="" className="w-80" />
            <h4>{udvalgtSmykke.produktNavn}</h4>
            <p>{udvalgtSmykke.pris}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UdvalgteSmykker;
