import { useState } from "react";


function Filtering({
  Kategori,
  Materiale,
  setKategoriFilter,
  setMaterialeFilter,
}) {

const [activeKategori, setActiveKategori] = useState(null)
const [activeMatriale, setActiveMatriale] = useState(null);
const [alle, setAlle] = useState(true);

const opdateKategori = (value, index) => {
setAlle(false);
 if(activeKategori === index){
    setActiveKategori(null)
    setKategoriFilter("")
 } else{
    setActiveKategori(index);
     setKategoriFilter(value);
 }
}
const opdateMatriale = (value, index) => {
setAlle(false);
  if (activeMatriale === index) {
    setActiveMatriale(null);
    setMaterialeFilter("");
  } else {
    setActiveMatriale(index);
    setMaterialeFilter(value);
  }

}
const resetAllValues = () => {

setAlle(true)
setActiveMatriale(null);
setMaterialeFilter("");
setActiveKategori(null);
setKategoriFilter("");
}




  return (
    <div className="flex gap-4">
      <button
        onClick={() => resetAllValues()}
        className={`bg-gold-dark border-gold-dark border border-2 hover:bg-transparent hover:text-gold-light hover:border-gold-light py-2 p-8 rounded-full ${
          alle 
            ? "bg-transparent text-gold-light"
            : "text-offWhite"
        }`}
      >
        Alle
      </button>
      {Kategori.map((kategori, index) => (
        <button
          onClick={() => {
            opdateKategori(kategori, index);
          }}
          className={`bg-gold-dark border-gold-dark border border-2 hover:bg-transparent hover:text-gold-light hover:border-gold-light py-2 p-8 rounded-full ${
            activeKategori === index
              ? "bg-transparent text-gold-light"
              : "text-offWhite"
          }`}
        >
          {kategori}
        </button>
      ))}
      {Materiale.map((materiale, index) => (
        <button
          onClick={() => {
            opdateMatriale(materiale, index);
          }}
          className={`bg-gold-dark border-gold-dark border border-2 hover:bg-transparent hover:text-gold-light hover:border-gold-light py-2 p-8 rounded-full ${
            activeMatriale === index
              ? "bg-transparent text-gold-light"
              : "text-offWhite"
          }`}
        >
          {materiale}
        </button>
      ))}
    </div>
  );
}

export default Filtering