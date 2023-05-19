 import { useEffect, useRef, useState } from "react";
 import {
   motion,
   useScroll,
   useSpring,
   useTransform,
   MotionValue,
 } from "framer-motion";

 function useParallax(value, distance) {
   return useTransform(value, [0, 1], [-distance, distance]);
 }
 

function Galleri({ content }) {

  const refImage = useRef(null);

  // Scroll progress for each grid
  const { scrollYProgress: scrollYProgressSecond } = useScroll({
    target: refImage,
  });
  

  // Parallax effect for first and third grid
  const ySecond = useParallax(scrollYProgressSecond, 30);





  return (
    <section className="bg-grey-dark ">
      
      <div className="max-md:hidden max-w-[1450px] mx-auto grid grid-cols-4 overflow-x-scroll overflow-y-hidden scrollbar-hide gap-4 items-center justify-around px-4 py-16">
        {content[2].galleri.map((img, index) => {

          return index % 2 == 0 ? (
            <motion.div
              className="secondGrid grid gap-8"
              style={{ y: ySecond }}
              ref={refImage}
            >
              <img
                className={"mb-16"}
                src={img.url}
                alt=""
              />
            </motion.div>
          ) : (
            <img
              className={"mt-16"}
              src={img.url}
              alt=""
            />
          );
        })}
      </div>
      :
      <div className="md:hidden grid grid-cols-2 grid-rows-2 justify-items-center">
        {content[2].galleri.map((img, index) => {

          return  (
            
            <img
              className={"w-full"}
              src={img.url}
              alt=""
            />
          )
        })}
      </div> 

    
    </section>
  );
}

export default Galleri;

