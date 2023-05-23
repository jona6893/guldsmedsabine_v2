import { useEffect, useState } from "react";

export default function GotoTop() {
  // State changes
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [scrolltop, setScrolltop] = useState(false);

  //update client window height
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);

    // check client window height before showing scroll To Top button
    if (document.body.offsetHeight / 3 <= clientWindowHeight) {
      setScrolltop(true);
    } else {
      setScrolltop(false);
    }
  };
  //update scroll info when user scrolls
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      className={`${
        scrolltop ? "" : "opacity-0 pointer-events-none"
      }  text-offWhite w-full flex justify-end relative max-w-[1450px] mx-auto transition-opacity`}
    >
      <div className="fixed top-[75%] right-[5%] z-[50]">
        <a href="#" className="block bg-gold-light hover:bg-gold-dark p-2 rounded-full shadow-md transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 stroke-offWhite"
            className="w-8 h-8 stroke-offWhite"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
          </svg>
        </a>
      </div>
    </div>
  );
}
