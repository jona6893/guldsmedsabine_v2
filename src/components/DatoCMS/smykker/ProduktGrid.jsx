import { AnimatePresence, motion } from "framer-motion";

function ProduktGrid({ produkter, filterValue, openModal, setProduktInfo }) {
  function openNindex(produkt) {
    setProduktInfo(produkt);
    openModal();
  }

  return (
    <div className="grid gap-16">
      <AnimatePresence>
        {produkter
          .filter((_, index) => index % 4 === filterValue)
          .map((produkt) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
        /*       exit={{ opacity: 0 }} */
              transition={{ duration: 0.5 }}
              key={produkt.id}
            >
              <div
                className="bg-grey-light grid cursor-pointer group hover:brightness-125 duration-300 aspect-[2/3] max-w-[16rem] rounded overflow-hidden"
                onClick={() => openNindex(produkt)}
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
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}

export default ProduktGrid;
