import React from 'react'

function IndholdModal({ produktInfo }) {
  return (
    <div
      className="grid grid-cols-2 box-border"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="">
        <h3>{produktInfo.produktNavn}</h3>
        <p>
          {produktInfo.beskrivelse}{" "}
          <span> Materiale: {produktInfo.materiale}</span>{" "}
          <span>kategori: {produktInfo.kategori}</span>
        </p>
        <p>{produktInfo.pris}</p>
      </div>

      <div className="flex items-center justify-center">
        <img
          className="w-full h-auto"
          src={produktInfo.produktFoto[0].url}
          alt=""
        />
      </div>
    </div>
  );
}

export default IndholdModal

/* style={{ backgroundImage: `url(${produktInfo.produktFoto[0].url})` }}
        className="bg-cover bg-center max-h-[80vh] w-auto" */ 