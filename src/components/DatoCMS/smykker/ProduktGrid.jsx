function ProduktGrid({ produkter, filterValue, openModal, setProduktInfo }) {
  function openNindex(produkt) {
    setProduktInfo(produkt);
    openModal();
  }

  return (
    <div className="grid gap-16">
      {produkter
        .filter((_, index) => index % 4 === filterValue)
        .map((produkt, index) => (
          <div
            className="bg-grey-light grid cursor-pointer group hover:brightness-125 duration-300 aspect-[2/3] max-w-[16rem] rounded overflow-hidden"
            onClick={() => openNindex(produkt)}
            key={produkt.id}
          >
            <div className="overflow-hidden">
              <img
                className="w-full aspect-[3/4] object-cover group-hover:scale-110 duration-300"
                src={produkt.produktBillede[0].url}
                alt=""
              />
            </div>
            <div className=" text-offWhite p-4">
              <h4 className="">{produkt.produktNavn}</h4>
              <p className="text-sm text-stone-400">{produkt.pris},- DKK</p>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProduktGrid;
