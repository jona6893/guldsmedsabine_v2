import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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

  console.log(content);

  return (
    <section className="bg-grey-dark ">
      <div className="max-md:hidden max-w-[1450px] mx-auto grid grid-cols-4 overflow-x-scroll overflow-y-hidden scrollbar-hide gap-4 items-center justify-around px-4 py-16">
        {content.galleri.map((img, index) => {
          return index % 2 == 0 ? (
            <motion.div
              key={img.id}
              className="secondGrid grid gap-8"
              style={{ y: ySecond }}
              ref={refImage}
            >
              <Image
                className={"mb-16 aspect-[2/3] object-cover"}
                src={img.url}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
              />
            </motion.div>
          ) : (
            <Image
              key={img.id}
              className={"mt-16 aspect-[2/3] object-cover"}
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
            />
          );
        })}
      </div>
      :
      <div className="md:hidden grid grid-cols-2 grid-rows-2 justify-items-center">
        {content.galleri.map((img, index) => {
          return (
            <Image
              key={img.id}
              className={"w-full aspect-[1/1] object-cover"}
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              loading="lazy"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Galleri;
