import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Filtering({ kategori, materiale, setKategoriFilter, setMaterialeFilter }) {
  const [activeKategori, setActiveKategori] = useState(null);
  const [activeMateriale, setActiveMateriale] = useState(null);
  const [alle, setAlle] = useState(true);

  const opdateKategori = (value, index) => {
    setAlle(false);
    if (activeKategori === index) {
      setActiveKategori(null);
      setKategoriFilter("");
    } else {
      setActiveKategori(index);
      setKategoriFilter(value);
    }
  };

  const opdateMateriale = (value, index) => {
    setAlle(false);
    if (activeMateriale === index) {
      setActiveMateriale(null);
      setMaterialeFilter("");
    } else {
      setActiveMateriale(index);
      setMaterialeFilter(value);
    }
  };
  const resetAllValues = () => {
    setAlle(true);
    setActiveMateriale(null);
    setMaterialeFilter("");
    setActiveKategori(null);
    setKategoriFilter("");
  };

  //console.log(activeMateriale);

  return (
    <div className="flex gap-4 items-start w-full justify-center ">
      <div className="flex flex-col gap-4 flex-wrap items-center">
        <button
          onClick={() => resetAllValues()}
          className={` hover:bg-gold-light hover:text-offWhite border border-gold-light py-2 p-8 rounded-full  w-max transition-colors ${
            alle ? "bg-gold-light text-offWhite" : "bg-transparent text-gold-light"
          }`}
        >
          Alle
        </button>
        <div className="flex gap-x-4 justify-center flex-wrap">
          <p className="text-offWhite w-full text-center mb-2">Kategori</p>
          {kategori.map((kategori, index) => (
            <button
              onClick={() => {
                opdateKategori(kategori, index);
              }}
              className={` hover:bg-gold-light hover:text-offWhite border border-gold-light py-2 p-8 mb-4 rounded-full w-max transition-colors ${
                activeKategori === index ? "bg-gold-light text-offWhite" : "bg-transparent text-gold-light"
              }`}
            >
              {kategori}
            </button>
          ))}
        </div>
        <div className="flex gap-x-4 justify-center flex-wrap">
          <p className="text-offWhite w-full text-center mb-2">Materiale</p>
          {materiale.map((materiale, index) => (
            <button
              onClick={() => {
                opdateMateriale(materiale, index);
              }}
              className={` hover:bg-gold-light hover:text-offWhite border border-gold-light py-2 p-8 mb-4 rounded-full w-max transition-colors ${
                activeMateriale === index ? "bg-gold-light text-offWhite" : "bg-transparent text-gold-light"
              }`}
            >
              {materiale}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filtering;
