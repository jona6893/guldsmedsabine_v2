import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import ProduktGrid from "./ProduktGrid";
import PopupModal from "../../PopupModal";
import IndholdModal from "./IndholdModal";
import GalleriWeb from "./GalleriWeb";
import GalleriTablet from "./GalleriTablet";
import GalleriMobile from "./GalleriMobile";
import Filtering from "./Filtering";


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




function Galleri({ produkter }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produktInfo, setProduktInfo] = useState(null);
  const [kategoriFilter, setKategoriFilter] = useState("");
  const [materialeFilter, setMaterialeFilter] = useState("");

  // Get an array of unique categories
  const uniqueKategorier = [
    ...new Set(produkter.map((produkt) => produkt.kategori)),
  ];
  // Get an array of unique materiale
  const uniqueMaterialer = [
    ...new Set(produkter.map((produkt) => produkt.materiale)),
  ];

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const size = useWindowSize();
  
   let Galleri;
  if (size.width <= 640 +22) {
    console.log("mobile = " + size.width)
    Galleri = GalleriMobile;
  } else if (size.width <= 768) {
      console.log("Tablet = " + size.width);
    Galleri = GalleriTablet;
  } else {
      console.log("web = " + size.width);
    Galleri = GalleriWeb;
  } 


 
  // filter function

  const filteredProducts = produkter.filter((produkt) => {
    return (
      (kategoriFilter ? produkt.kategori === kategoriFilter : true) &&
      (materialeFilter ? produkt.materiale === materialeFilter : true)
    );
  });

  return (
    <>
      <Filtering
        Kategori={uniqueKategorier}
        Materiale={uniqueMaterialer}
        setKategoriFilter={setKategoriFilter}
        setMaterialeFilter={setMaterialeFilter}
      />
      <div className="grid md:grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 items-flex-start gap-8 mt-4 mb-8">
        <Galleri
          produkter={filteredProducts}
          openModal={openModal}
          setProduktInfo={setProduktInfo}
        />
        <AnimatePresence>
          {isModalOpen && (
            <PopupModal isOpen={isModalOpen} onClose={closeModal}>
              <IndholdModal produktInfo={produktInfo} />
            </PopupModal>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Galleri;
