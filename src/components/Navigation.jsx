import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Anchor from "./Anchor";

// Frontend
export default function Navigation() {
  const variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3, // change this to whatever value you prefer
      },
    },
    closed: {
      opacity: 0,
      x: 0,
      transition: {
        duration: 0.3, // change this to whatever value you prefer
      },
    },
  };
  // Add state to track if the menu is open or not
  const [isOpen, setIsOpen] = useState(false);

  const navData = [
    {
      name: "Forside",
      path: "",
    },
    {
      name: "Smykker",
      path: "smykker",
    },
    {
      name: "Ydelser",
      path: "ydelser",
    },
    {
      name: "Om Sabine",
      path: "om-sabine",
    },
    {
      name: "Butik",
      path: "om-sabine/#butik",
    },
    {
      name: "Events",
      path: "#events",
    },
    {
      name: "Kontakt",
      path: "kontakt",
    },
  ];

  const Hamburger = () => {
    return (
      <motion.div
        className="fixed bg-grey-dark flex flex-col items-center w-full h-full inset-0 justify-start gap-8 p-4"
        initial="closed"
        animate="open"
        exit="closed"
        variants={variants}
      >
        <button className="flex w-full justify-end cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 stroke-offWhite "
            onClick={() => setIsOpen(!isOpen)} // Toggle isOpen when the icon is clicked
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <Anchor
          href="/"
          role="link"
          ariaLabel="Link til forsiden / Sabine Logo"
        >
          <img
            onClick={() => setIsOpen(!isOpen)}
            className="w-20"
            src="/images/sabineLogo.svg"
            alt=""
           
          />
        </Anchor>

        <ul className="flex flex-col justify-center items-center gap-6">
          {navData.map((item) => {
            return (
              <li
                className="text-lg"
                key={item.name}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Anchor
                  className="text-offWhite hover:text-gold-light transition-colors"
                  href={`/${item.path}`}
                >
                  {item.name}
                </Anchor>
              </li>
            );
          })}
        </ul>
      </motion.div>
    );
  };

  return (
    <div className="w-full bg-grey-dark sticky top-0 z-[100]">
      <nav className="mx-auto max-w-[1450px]">
        <div className="max-md:hidden flex items-center justify-between p-4 w-full">
          <Anchor
            href="/"
            role="link"
            ariaLabel="Link til forsiden / Sabine Logo"
          >
            <img className="w-16" src="/images/sabineLogo.svg" alt="" />
          </Anchor>
          <ul className="flex justify-end gap-4 p-4">
            {navData.map((item) => {
              return (
                <li key={item.name}>
                  <Anchor
                    className="text-offWhite hover:text-gold-light transition-colors"
                    href={`/${item.path}`}
                  >
                    {item.name}
                  </Anchor>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:hidden relative p-4 flex justify-between items-center">
          <Anchor
            href="/"
            role="link"
            ariaLabel="Link til forsiden / Sabine Logo"
          >
            <img className="w-12" src="/images/sabineLogo.svg" alt="" />
          </Anchor>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 stroke-offWhite"
            onClick={() => setIsOpen(!isOpen)} // Toggle isOpen when the icon is clicked
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <AnimatePresence>{isOpen && <Hamburger />}</AnimatePresence>
        </div>
      </nav>
    </div>
  );
}
