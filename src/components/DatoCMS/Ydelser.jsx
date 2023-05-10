import React from "react";

function Ydelser({ content }) {
  return (
    <>
      {content.ydelser.map((ydelse) => {
        return (
          <div>
            <div>
              <h2>{ydelse.title}</h2>
              <p>{ydelse.paragraph}</p>
              <p>{ydelse.price}</p>
            </div>
            <img src={ydelse.photo.url} alt="" />
          </div>
        );
      })}
    </>
  );
}

export default Ydelser;
