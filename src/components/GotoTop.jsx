import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


function GotoTop() {
  // State changes
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [scrolltop, setScrolltop] = useState(false);

  // animation variations
const variants = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};


  //update client window height
const handleScroll = () => {
  setClientWindowHeight(window.scrollY);

  // check client window height before showing scroll To Top button
  if (document.body.offsetHeight / 3 <= clientWindowHeight) {
    setScrolltop((prevScrolltop) => {
      if (!prevScrolltop) {
        //console.log("Scrolltop updated to true");
      }
      return true;
    });
  } else  {
    setScrolltop((prevScrolltop) => {
      if (prevScrolltop) {
        //console.log("Scrolltop updated to false");
      }
      return false;
    });
  }
};
//update scroll info when user scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  });


  const ScrollButton =() =>{
    return (
      <motion.div
      key="scrollButton"
        initial="hide"
        animate={scrolltop ? "show" : "hide"}
        exit="hide"
        variants={variants}
        className="fixed top-[75%] right-[5%] bg-gold-light hover:bg-gold-dark p-2 rounded-full shadow-md z-[50]"
      >
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8 stroke-offWhite"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
            />
          </svg>
        </a>
      </motion.div>
    );
  }


  return (
    <div
      className={`${
        scrolltop ? "" : "hidden"
      }  text-offWhite w-full flex justify-end relative max-w-[1450px] mx-auto`}
    >
      <AnimatePresence><ScrollButton /></AnimatePresence>
    </div>
  );
}

export default GotoTop


  /*   className={`${
        scrolltop ? "" : "hidden"
      } text-offWhite fixed top-[80%] right-0 mr-8 bg-gold-light hover:bg-gold-dark p-2 rounded-full shadow-md z-[50]`} */