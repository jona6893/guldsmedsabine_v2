import Anchor from "../../Anchor";
import { useRef,  } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";
import Image from "next/image";


function useParallax(value, distance) {
  return useTransform(value, [0, 0.5], [-distance, distance]);
}

function UdvalgteSmykker({ content }) {
  const refImage = useRef(null);


  // Scroll progress for each grid
  const { scrollYProgress: scrollYProgressSecond } = useScroll({
    target: refImage,
  });

  // Parallax effect for first and third grid
  const ySecond = useParallax(scrollYProgressSecond, 30);

  return (
    <section className="py-16 max-w-[1450px] mx-auto grid gap-12 max-xl:justify-items-center px-4">
      <h2 className="text-gold-light font-light  text-center uppercase">{content.overskriften}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {content.udvalgteSmykker.map((udvalgtSmykke, index) => {
          return index % 2 == 0 ? (
            <motion.div key={udvalgtSmykke.id} className="secondGrid grid gap-8 mb-4 " style={{ y: ySecond }} ref={refImage}>
              <div className="">
                <Image
                  width={udvalgtSmykke.produktBillede[0].width}
                  height={udvalgtSmykke.produktBillede[0].height}
                  src={udvalgtSmykke.produktBillede[0].url}
                  alt={udvalgtSmykke.produktBillede[0].alt}
                  loading="lazy"
                  className="w-64 h-80 object-cover"
                />
                <article className="flex justify-between text-offWhite text-sm mt-2">
                  <p>{udvalgtSmykke.produktNavn}</p>
                  <p>{udvalgtSmykke.pris + " kr"}</p>
                </article>
              </div>
            </motion.div>
          ) : (
            <div key={index} className="">
              <Image
                width={udvalgtSmykke.produktBillede[0].width}
                height={udvalgtSmykke.produktBillede[0].height}
                src={udvalgtSmykke.produktBillede[0].url}
                alt={udvalgtSmykke.produktBillede[0].alt}
                loading="lazy"
                className="w-64 h-80 object-cover"
              />
              <article className="flex justify-between text-offWhite text-sm mt-2">
                <p>{udvalgtSmykke.produktNavn}</p>
                <p>{udvalgtSmykke.pris + " kr"}</p>
              </article>
            </div>
          );
        })}
      </div>
      <Anchor className="button-primary mx-auto" href={content.knap[0].url}>
        {content.knap[0].text}
      </Anchor>
    </section>
  );
}

export default UdvalgteSmykker;
