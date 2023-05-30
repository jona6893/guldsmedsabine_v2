import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ProduktGrid from "./ProduktGrid";
import PopupModal from "../../PopupModal";
import IndholdModal from "./IndholdModal";
import GalleriWeb from "./GalleriWeb";
import GalleriTablet from "./GalleriTablet";
import GalleriMobile from "./GalleriMobile";
import Filtrering from "./Filtrering";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Galleri({ content, produkter }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produktInfo, setProduktInfo] = useState(null);
  const [kategoriFilter, setKategoriFilter] = useState("");
  const [materialeFilter, setMaterialeFilter] = useState("");

  // Get an array of unique categories
  const uniqueKategorier = [...new Set(produkter.map((produkt) => produkt.kategori.kategori))];
  // Get an array of unique materiale
  const uniqueMaterialer = [...new Set(produkter.map((produkt) => produkt.materiale[0].materiale))];

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const size = useWindowSize();

  let Galleri;
  if (size.width <= 640 + 22) {
    //console.log("mobile = " + size.width);
    Galleri = GalleriMobile;
  } else if (size.width <= 768) {
    //console.log("Tablet = " + size.width);
    Galleri = GalleriTablet;
  } else {
    //console.log("web = " + size.width);
    Galleri = GalleriWeb;
  }

  // filter function

  const filteredProducts = produkter.filter((produkt) => {
    const kategori = produkt.kategori.kategori;
    const materiale = produkt.materiale.map((obj) => obj.materiale);

    return (kategoriFilter ? kategori === kategoriFilter : true) && (materialeFilter ? materiale.includes(materialeFilter) : true);
  });

  return (
    <>
      <Filtrering
        kategorier={uniqueKategorier}
        materialer={uniqueMaterialer}
        setKategoriFilter={setKategoriFilter}
        setMaterialeFilter={setMaterialeFilter}
        produkter={filteredProducts}
      />
      <div className="grid md:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 items-flex-start gap-8 mt-4 mb-8">
        <Galleri produkter={filteredProducts} openModal={openModal} setProduktInfo={setProduktInfo} />
        <AnimatePresence>
          {isModalOpen && (
            <PopupModal isOpen={isModalOpen} onClose={closeModal}>
              <IndholdModal content={content} produktInfo={produktInfo} />
            </PopupModal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Galleri;
