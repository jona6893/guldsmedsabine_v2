import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function Ydelser({ content }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const observers = useRef([]);

  useEffect(() => {
    observers.current = content.ydelser.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.1,
        }
      );

      return observer;
    });

    return () => {
      observers.current.forEach((observer) => observer.disconnect());
    };
  }, [content.ydelser]);

  useEffect(() => {
    content.ydelser.forEach((_, index) => {
      const element = document.querySelector(`#text-${index}`);
      if (element) {
        observers.current[index].observe(element);
      }
    });

    return () => {
      content.ydelser.forEach((_, index) => {
        const element = document.querySelector(`#text-${index}`);
        if (element) {
          observers.current[index].unobserve(element);
        }
      });
    };
  }, [content.ydelser]);

  return (
    <>
      <section className="grid grid-cols-2 relative max-w-[1450px] mx-auto bg-grey-dark h-[70vh] overflow-y-scroll overflow-x-hidden ">
        <div className="relative h-[530px] col-start-1 row-span-full sticky top-0 snap-center h-[70vh]">
          <AnimatePresence>
            {content.ydelser.map((ydelse, index) => (
              <motion.div
                key={ydelse.photo.url}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === activeIndex ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  className="w-full h-full object-cover object-center"
                  src={ydelse.photo.url}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className=" col-start-2 snap-center flex flex-col gap-16">
          {content.ydelser.map((ydelse, index) => (
            <section
              key={index}
              className="mx-auto bg-grey-dark grid justify-items-center"
            >
              <div className="py-6">
                <div className="flex flex-col justify-center items-center">
                  <article id={`text-${index}`} className="max-w-lg p-4">
                    <h2 className="text-gold-light text-4xl mb-4 font-light uppercase">
                      {ydelse.title}
                    </h2>
                    <p className="text-offWhite mb-4">{ydelse.paragraph}</p>
                    <p className="text-gold-light text-xl font-light">
                      {ydelse.price}
                    </p>
                  </article>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

export default Ydelser;
