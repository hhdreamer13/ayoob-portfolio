import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Education", "Publication", "Experience", "Contact"];

// Classnames shorthand

const Header = ({ setShowModal }) => {
  const [toggle, setToggle] = useState(false);

  // Scroll to a section
  const scrollHandle = (e) => {
    setToggle(false);
    const position = document.getElementById(e.target.text.toLowerCase());

    // Waiting for burger menu div to be closed
    setTimeout(() => {
      position &&
        position.scrollIntoView({ behavior: "smooth", block: "start" });
    }, "1");
  };

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Motion Framer variants

  const containerAnimations = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 2,
        ease: "easeIn",
        type: "spring",
        stiffnes: 200,
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };
  const itemsAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const menuVariants = {
    hidden: {
      scale: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 0.5,
        delay: 0.5,
      },
    },
    visible: {
      scale: 50,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    },
  };

  const navLinkVariants = {
    hidden: {
      display: "none",
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        display: { delay: 0.5 },
      },
    },
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const navLinkChildrenVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  const cvAnimations = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
    },
  };

  return (
    <motion.nav
      id="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3.3, ease: "easeInOut" }}
      className="navbar sticky top-0 left-0 z-50 h-16 w-screen bg-base-200 bg-opacity-70 backdrop-blur backdrop-filter"
    >
      <div
        id="nav-container"
        className="relative mx-auto flex w-full items-center justify-between px-3 pb-0"
      >
        <div className="z-50">
          <Link
            to="/"
            onClick={() => {
              scrollTop();
            }}
          >
            <svg
              className=" ml-1 fill-stone-400 duration-300 hover:fill-slate-200"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="30.000000pt"
              height="30.000000pt"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                // fill="#ffffff"
                stroke="none"
              >
                <path
                  d="M2644 4465 c-147 -77 -251 -176 -373 -359 -461 -687 -1512 -2859
        -1548 -3196 -9 -85 17 -159 75 -219 69 -71 155 -89 258 -54 68 23 154 113 224
        233 120 207 543 641 805 827 165 116 398 246 590 328 61 26 112 50 115 53 3 2
        -35 2 -85 -1 -104 -7 -242 -40 -370 -89 -133 -52 -133 -52 -90 -23 115 75 651
        302 670 283 2 -2 33 -107 70 -233 132 -461 271 -845 360 -996 117 -200 316
        -327 584 -374 85 -15 366 -19 426 -6 l30 6 -25 18 c-213 149 -494 638 -752
        1307 -46 121 -158 434 -155 436 14 10 455 88 565 100 77 8 80 27 12 61 -86 43
        -262 51 -562 26 l-76 -6 -31 99 c-70 229 -130 447 -251 924 -185 728 -221 829
        -313 870 -58 27 -76 25 -153 -15z m106 -1560 c54 -220 97 -401 96 -402 -1 -1
        -72 -18 -156 -38 -182 -41 -365 -91 -544 -146 -70 -22 -129 -39 -131 -37 -4 6
        388 875 526 1163 l53 110 29 -125 c16 -69 73 -305 127 -525z"
                />
              </g>
            </svg>
          </Link>
        </div>
        <motion.div
          variants={containerAnimations}
          initial="hidden"
          animate="visible"
          className="hidden md:flex"
        >
          {navItems.map((item) => {
            return (
              <motion.div
                key={item}
                className="inline-block"
                variants={itemsAnimations}
              >
                <NavLink
                  onClick={scrollHandle}
                  className="mx-0.5 inline-flex items-center justify-center rounded-md py-4 px-4 text-center font-mono text-sm text-stone-400 transition duration-500 hover:text-slate-50"
                  to={{ hash: `#${item.toLowerCase()}` }}
                >
                  {item}
                </NavLink>
              </motion.div>
            );
          })}
          {/* modal button */}
          <motion.button
            onClick={() => setShowModal(true)}
            variants={itemsAnimations}
            className="mx-0.5 inline-flex h-10 items-center justify-center self-center rounded-md border-[1px] border-solid border-stone-500 p-2 text-center font-mono text-sm text-stone-400 transition duration-500 hover:border-gray-700 hover:bg-gray-700 hover:bg-opacity-60 hover:text-slate-50"
          >
            Resumé
          </motion.button>
        </motion.div>
        {/* Mobile navbar toggle button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="group relative z-50 mx-1 inline self-start md:hidden"
        >
          <div className="relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full shadow-md  transition-all duration-200 ">
            <div
              className={
                toggle
                  ? "flex h-[20px] w-[20px] origin-center -rotate-[45deg] transform flex-col justify-between transition-all duration-300"
                  : "flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300"
              }
            >
              <div
                className={
                  toggle
                    ? "h-[1px] w-1/2 origin-right -translate-y-[1px] -rotate-90 transform rounded bg-stone-400 transition-all delay-75 duration-300"
                    : "h-[2px] w-1/2 origin-right transform rounded bg-stone-400 transition-all delay-75 duration-300 "
                }
              ></div>
              <div className="h-[1px] rounded bg-stone-400"></div>
              <div
                className={
                  toggle
                    ? "h-[1px] w-1/2 origin-left translate-y-[1px] -rotate-90 transform self-end rounded bg-stone-400 transition-all delay-75 duration-300"
                    : "h-[2px] w-1/2 origin-left transform self-end rounded bg-stone-400 transition-all delay-75 duration-300"
                }
              ></div>
            </div>
          </div>
        </button>
        <motion.div
          id="close-menu"
          className="bg-base-light fixed right-0 top-0 mr-5 h-16 w-16 rounded-full"
          variants={menuVariants}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}
        ></motion.div>
        <motion.div
          id="menu-x"
          variants={navLinkVariants}
          animate={toggle ? "visible" : "hidden"}
          className="fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center text-slate-100"
        >
          {navItems.map((item) => {
            return (
              <motion.div
                key={item}
                className="inline-block"
                variants={navLinkChildrenVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  onClick={scrollHandle}
                  className="mx-0.5 my-5 inline-flex items-center justify-center rounded-md py-4 px-4 text-center font-mono text-xl text-stone-400 transition duration-500 hover:text-slate-50"
                  to={{ hash: `#${item.toLowerCase()}` }}
                >
                  {item}
                </NavLink>
              </motion.div>
            );
          })}
          <motion.div
            className="mx-auto mt-8 flex flex-col text-center"
            variants={cvAnimations}
          >
            <h3 className="font-mono text-stone-400">Curriculum Vitæ</h3>
            <div className="mt-4 flex justify-center">
              <a
                onClick={() => setToggle(false)}
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
                onClick={() => setToggle(false)}
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
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Header;
