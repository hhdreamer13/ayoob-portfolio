import { motion, AnimatePresence } from "framer-motion";
import { VscClose } from "react-icons/vsc";

const backdropAnimations = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalAnimations = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 1,
    },
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 50,
      mass: 1,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence mode="wait">
      {showModal && (
        <motion.div
          className="fixed top-0 left-0 z-10 h-full w-full bg-black bg-opacity-60"
          variants={backdropAnimations}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="relative my-0 mx-auto flex w-96 flex-col rounded-2xl bg-base-300 py-16 px-5 text-center shadow-2xl"
            variants={modalAnimations}
          >
            <p className="font-['Roboto'] text-gray-300">
              Which one are you interested in?
            </p>
            <div className="mt-10 flex justify-center">
              <a
                onClick={() => setShowModal(false)}
                href="/Functional_CV.pdf"
                target="_blank"
                className="group relative mx-3 w-24 overflow-hidden rounded bg-slate-900 p-2 text-stone-500 ring-1 ring-slate-700 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:text-slate-50 hover:ring-1 hover:ring-slate-500"
              >
                <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                <span className="relative font-['Roboto'] text-sm">
                  Functional
                </span>
              </a>
              <a
                onClick={() => setShowModal(false)}
                href="/Educational_CV.pdf"
                target="_blank"
                className="group relative mx-3 w-24 overflow-hidden rounded bg-slate-900 p-2 text-stone-500 ring-1 ring-slate-700 transition-all duration-300 ease-out hover:bg-gradient-to-r hover:text-slate-50 hover:ring-1 hover:ring-slate-500"
              >
                <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-40"></span>
                <span className="relative font-['Roboto'] text-sm">
                  Educational
                </span>
              </a>
            </div>
            <button
              className="absolute top-0 right-0 m-2 animate-pulse p-0 text-slate-300"
              onClick={() => setShowModal(false)}
            >
              <VscClose size={"1.2rem"} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
