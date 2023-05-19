import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import ProduktGrid from "./ProduktGrid";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function GalleriTablet({ produkter, openModal, setProduktInfo }) {
  // References for each grid
  const refFirstGrid = useRef(null);
  const refSecondGrid = useRef(null);
  const refThirdGrid = useRef(null);
  const refFourthGrid = useRef(null);

  // Scroll progress for each grid
  const { scrollYProgress: scrollYProgressSecond } = useScroll({
    target: refSecondGrid,
  });
  const { scrollYProgress: scrollYProgressFourth } = useScroll({
    target: refFourthGrid,
  });

  // Parallax effect for first and third grid
  const ySecond = useParallax(scrollYProgressSecond, 100);
  const yFourth = useParallax(scrollYProgressFourth, 100);
  return (
    <>
      
      <motion.div
        className="secondGrid flex flex-col gap-8 mt-20"
        style={{ y: ySecond }}
        ref={refSecondGrid}
      >
        <ProduktGrid
          produkter={produkter}
          filterValue={0}
          openModal={openModal}
          setProduktInfo={setProduktInfo}
        />

        <ProduktGrid
          produkter={produkter}
          filterValue={1}
          openModal={openModal}
          setProduktInfo={setProduktInfo}
        />
      </motion.div>
      <div className="thirdGrid flex flex-col gap-8 mt-16" ref={refThirdGrid}>
        <ProduktGrid
          produkter={produkter}
          filterValue={2}
          openModal={openModal}
          setProduktInfo={setProduktInfo}
        />
        <ProduktGrid
          filterValue={3}
          produkter={produkter}
          openModal={openModal}
          setProduktInfo={setProduktInfo}
        />
      </div>
    </>
  );
}

export default GalleriTablet;
