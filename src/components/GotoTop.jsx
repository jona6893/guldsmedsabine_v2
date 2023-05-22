import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";


function GotoTop() {
  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [scrolltop, setScrolltop] = useState(false);
  
const handleScroll = () => {
  setClientWindowHeight(window.scrollY);

  if (document.body.offsetHeight / 3 <= clientWindowHeight) {
    setScrolltop((prevScrolltop) => {
      if (!prevScrolltop) {
        console.log("Scrolltop updated to true");
      }
      return true;
    });
  } else {
    setScrolltop((prevScrolltop) => {
      if (prevScrolltop) {
        console.log("Scrolltop updated to false");
      }
      return false;
    });
  }
};
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  });

  console.log(scrolltop);


  return (
    <div
      className={`${
        scrolltop ? "" : "hidden"
      } text-offWhite w-full flex justify-end relative max-w-[1450px] mx-auto`}
    >
      <div className="fixed top-[75%] right-[5%] bg-gold-light hover:bg-gold-dark p-2 rounded-full shadow-md z-[50]">
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
      </div>
    </div>
  );
}

export default GotoTop


  /*   className={`${
        scrolltop ? "" : "hidden"
      } text-offWhite fixed top-[80%] right-0 mr-8 bg-gold-light hover:bg-gold-dark p-2 rounded-full shadow-md z-[50]`} */