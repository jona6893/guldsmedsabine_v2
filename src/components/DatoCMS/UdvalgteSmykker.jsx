import React from "react";

function UdvalgteSmykker({ content }) {
  console.log(content.UdvalgteSmykker);
  return (
    <section className="py-16 max-w-[1450px] mx-auto ">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {content.udvalgteSmykker.map((udvalgtSmykke, index) => (
          <div key={index} className={index % 2 === 1 ? "mt-16" : ""}>
            <img src={udvalgtSmykke.produktBillede[0].url} alt="" className="w-64 h-80 object-cover" />
            <article className="flex justify-between text-offWhite text-sm mt-2">
              <p>{udvalgtSmykke.produktNavn}</p>
              <p>{udvalgtSmykke.pris + " kr"}</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UdvalgteSmykker;
