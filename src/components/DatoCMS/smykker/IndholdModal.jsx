import React from 'react'

function IndholdModal({ produktInfo }) {
  return (
    <div
      className="grid grid-cols-2 box-border"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <h3>{produktInfo.produktNavn}</h3>
        <p>
          {produktInfo.beskrivelse}{" "}
          <span> Materiale: {produktInfo.materiale}</span>{" "}
          <span>kategori: {produktInfo.kategori}</span>
        </p>
        <p>{produktInfo.pris}</p>
      </div>

      <div
        style={{ backgroundImage: `url(${produktInfo.produktFoto[0].url})` }}
        className="bg-cover bg-center aspect-[1/1.5] max-h-[80vh] w-auto"
      ></div>
    </div>
  );
}

{/* <img className='w-full' src={produktInfo.produktFoto[0].url} alt="" /> */}
export default IndholdModal