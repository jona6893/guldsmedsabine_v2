import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function PopupModal({ isOpen, onClose, children }) {
  const [bg, setBG] = useState('')
  // Define your animation variants

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Clean up function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Return null if the modal is not open
  if (!isOpen) return null;

 

  return (
    <motion.div
      className={`modal-content fixed inset-0 flex items-center justify-center lg:p-16 max-md:p-2 max-lg:p-8`}
      onClick={onClose}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={modalVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
    >
      <div className="relative bg-grey-light rounded-md shadow-md sm:max-w-4xl mx-auto">
        <button
          className="absolute p-2 right-2 top-2 rounded-md hover:bg-white/20 transition-colors z-10"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-8 h-8 max-sm:stroke-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {children}
      </div>
    </motion.div>
  );
}

export default PopupModal;
