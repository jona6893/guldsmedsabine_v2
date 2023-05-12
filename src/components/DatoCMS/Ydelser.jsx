import React from "react";

function Ydelser({ content }) {
  return (
    <>
      {content.ydelser.map((ydelse, index) => {
        return (
          <section className="mx-auto bg-grey-dark grid justify-items-center">
            <div className=" grid md:grid-cols-2 max-w-[1450px] ">
              <div className="flex flex-col  justify-center items-center">
                <article className="max-w-lg p-4 ">
                  <h2 className="text-gold-light text-4xl mb-4 font-light uppercase">{ydelse.title}</h2>
                  <p className="text-offWhite mb-4">{ydelse.paragraph}</p>
                  <p className="text-gold-light text-2xl font-light">{ydelse.price}</p>
                </article>
              </div>

              <img className={`w-full h-[530px] object-cover object-center ${index % 2 == 1 ? "order-first" : ""}`} src={ydelse.photo.url} alt="" />
            </div>
          </section>
        );
      })}
    </>
  );
}

export default Ydelser;
