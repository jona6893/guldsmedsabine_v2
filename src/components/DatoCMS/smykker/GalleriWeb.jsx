import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import ProduktGrid from "./ProduktGrid";

function useParallax(value, distance, delay) {
  const y = useTransform(value, [delay, delay + 1], [0, distance]);
  return useSpring(y, { stiffness: 200, damping: 50 });
}

function GalleriWeb({ produkter, openModal, setProduktInfo }) {
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
const ySecond = useParallax(scrollYProgressSecond, 100, 0.1);
const yFourth = useParallax(scrollYProgressFourth, 100, 0.1);
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="firstGrid flex flex-col gap-8"
          ref={refFirstGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="firstGrid"
        >
          <ProduktGrid
            produkter={produkter}
            filterValue={0}
            openModal={openModal}
            setProduktInfo={setProduktInfo}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="secondGrid flex flex-col gap-8"
          style={{ y: ySecond }}
          ref={refSecondGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="secondGrid"
        >
          <ProduktGrid
            produkter={produkter}
            filterValue={1}
            openModal={openModal}
            setProduktInfo={setProduktInfo}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="thirdGrid flex flex-col gap-8"
          ref={refThirdGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="thirdGrid"
        >
          <ProduktGrid
            produkter={produkter}
            filterValue={2}
            openModal={openModal}
            setProduktInfo={setProduktInfo}
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="fourthGrid flex flex-col gap-8"
          style={{ y: yFourth }}
          ref={refFourthGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="fourthGrid"
        >
          <ProduktGrid
            produkter={produkter}
            filterValue={3}
            openModal={openModal}
            setProduktInfo={setProduktInfo}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default GalleriWeb;
