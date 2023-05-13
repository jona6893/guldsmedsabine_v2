import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import ProduktGrid from "./ProduktGrid";
import PopupModal from "../../PopupModal";
import IndholdModal from "./IndholdModal";
import GalleriWeb from "./GalleriWeb";
import GalleriTablet from "./GalleriTablet";
import GalleriMobile from "./GalleriMobile";


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

function openModal() {
  setIsModalOpen(true);
}

function closeModal() {
  setIsModalOpen(false);
}


const size = useWindowSize();

let Galleri;
if (size.width <= 640) {
  Galleri = GalleriMobile;
} else if (size.width <= 768) {
  Galleri = GalleriTablet;
} else {
  Galleri = GalleriWeb;
}

  return (
    <>
      <Galleri
        produkter={produkter}
        openModal={openModal}
        setProduktInfo={setProduktInfo}
      />
      {/*  <GalleriMobile
        produkter={produkter}
        openModal={openModal}
        setProduktInfo={setProduktInfo}
      />
       <GalleriTablet
        produkter={produkter}
        openModal={openModal}
        setProduktInfo={setProduktInfo}
      /> 
         <GalleriWeb
        produkter={produkter}
        openModal={openModal}
        setProduktInfo={setProduktInfo}
      />  */}
      <AnimatePresence>
        {isModalOpen && (
          <PopupModal isOpen={isModalOpen} onClose={closeModal}>
            <IndholdModal produktInfo={produktInfo} />
          </PopupModal>
        )}
      </AnimatePresence>
    </>
  );
}

export default Galleri;
