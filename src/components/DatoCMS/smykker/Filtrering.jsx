export default function Filtrering({ kategori, materiale, setKategoriFilter, setMaterialeFilter }) {
  console.log(kategori);

  function handleKategoriChange(event) {
    if (event.target.value === "Alle") {
      setKategoriFilter(null);
    } else setKategoriFilter(event.target.value);
  }

  function handleMaterialeChange(event) {
    if (event.target.value === "Alle") {
      setMaterialeFilter(null);
    } else setMaterialeFilter(event.target.value);
  }

  return (
    <div className="flex gap-4 items-start w-full justify-center ">
      <div className="flex flex-row gap-8 flex-wrap items-center">
        <label className="relative">
          <span className="block text-offWhite text-center">Kategori:</span>
          <svg
            className="absolute w-8 h-8 bottom-1 right-4 pointer-events-none text-offWhite"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
          <select
            className="appearance-none border-none outline-none rounded-full py-2 pl-8 pr-12 cursor-pointer bg-gold-light text-offWhite"
            onChange={() => handleKategoriChange(event)}
          >
            <option value="Alle" className="">
              Alle
            </option>
            {kategori.map((kategori) => {
              return (
                <option key={kategori} value={kategori} className="">
                  {kategori}
                </option>
              );
            })}
          </select>
        </label>
        <label className="relative">
          <span className="block text-offWhite text-center">Materiale:</span>
          <svg
            className="absolute w-8 h-8 bottom-1 right-4 pointer-events-none text-offWhite"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 96 960 960"
          >
            <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
          </svg>
          <select
            className="appearance-none border-none outline-none rounded-full py-2 pl-8 pr-12 cursor-pointer bg-gold-light text-offWhite"
            onChange={() => handleMaterialeChange(event)}
          >
            <option value="Alle" className="">
              Alle
            </option>
            {materiale.map((materiale) => {
              return (
                <option key={materiale} value={materiale} className="">
                  {materiale}
                </option>
              );
            })}
          </select>
        </label>
      </div>
    </div>
  );
}
