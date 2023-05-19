import Anchor from "../../Anchor";
 import { useEffect, useRef, useState } from "react";
 import {
   motion,
   useScroll,
   useSpring,
   useTransform,
   MotionValue,
 } from "framer-motion";

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
    const ySecond = useParallax(scrollYProgressSecond, -100);

  return (
    <section className="py-16 max-w-[1450px] mx-auto grid gap-12 max-xl:justify-items-center px-4">
      <h2 className="text-gold-light text-4xl font-light  text-center">{content.overskriften}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {content.udvalgteSmykker.map((udvalgtSmykke, index) => {
           return index % 2 == 0 ? (
             <motion.div
               className="secondGrid grid gap-8 mb-16"
               style={{ y: ySecond }}
               ref={refImage}
             >
               <div key={index} className="">
                 <img
                   src={udvalgtSmykke.produktBillede[0].url}
                   alt=""
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
               <img
                 src={udvalgtSmykke.produktBillede[0].url}
                 alt=""
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
      <Anchor
        className="bg-gold-dark text-offWhite w-max mx-auto rounded-full px-4 flex items-center justify-center py-1.5 "
        href={content.knap[0].url}
      >
        {content.knap[0].text}
      </Anchor>
    </section>
  );
}

export default UdvalgteSmykker;
