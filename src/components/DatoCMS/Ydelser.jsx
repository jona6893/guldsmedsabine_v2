import React from "react";

function Ydelser({ content }) {
  return (
    <>
      {content.ydelser.map((ydelse, index) => {
        return (
          <div className="grid grid-cols-2">
            <div>
              <h2 >{ydelse.title}</h2>
              <p>{ydelse.paragraph}</p>
              <p>{ydelse.price}</p>
            </div>
            <img className={index % 2 == 0 ? "order-first" : ""}  src={ydelse.photo.url} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default Ydelser;
