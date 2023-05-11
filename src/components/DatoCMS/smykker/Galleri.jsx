import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Galleri({produkter}) {
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
      <div className="firstGrid grid gap-8 mt-16" ref={refFirstGrid}>
        {produkter
          .filter((_, index) => index % 4 === 0)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
        {produkter
          .filter((_, index) => index % 4 === 0)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
      </div>

      <motion.div
        className="secondGrid grid gap-8"
        style={{ y: ySecond }}
        ref={refSecondGrid}
      >
        {produkter
          .filter((_, index) => index % 4 === 1)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
        {produkter
          .filter((_, index) => index % 4 === 1)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
      </motion.div>

      <div className="thirdGrid grid gap-8 mt-16" ref={refThirdGrid}>
        {produkter
          .filter((_, index) => index % 4 === 2)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
        {produkter
          .filter((_, index) => index % 4 === 2)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
      </div>

      <motion.div
        className="fourthGrid grid gap-8"
        style={{ y: yFourth }}
        ref={refFourthGrid}
      >
        {produkter
          .filter((_, index) => index % 4 === 3)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
        {produkter
          .filter((_, index) => index % 4 === 3)
          .map((produkt) => (
            <div key={produkt.id}>
              <img src={produkt.produktFoto[0].url} alt="" />
              <h3>{produkt.produktNavn}</h3>
              <p>{produkt.pris},- DKK</p>
            </div>
          ))}
      </motion.div>
    </>
  );
}

export default Galleri;
