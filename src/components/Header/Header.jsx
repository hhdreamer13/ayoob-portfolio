import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = ["About", "Education", "Publication", "Experience", "Contact"];

// Classnames shorthand
const navBarClass =
  "navbar sticky top-0 z-50 flex h-fit w-screen justify-between bg-opacity-70 py-2 backdrop-blur backdrop-filter md:h-16";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to a section
  const scrollHandle = (e) => {
    setIsOpen(false);
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

  // Theme selection
  // const [theme, setTheme] = useState("night");
  // const toggleTheme = () => {
  //   setTheme(theme === "night" ? "pastel" : "night");
  // };
  // useEffect(() => {
  //   document.querySelector("html").setAttribute("data-theme", theme);
  // }, [theme]);

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
      // y: -50,
      // x: -10,
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

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 3.3, ease: "easeInOut" }}
      className={`${navBarClass} ${isOpen ? "bg-base-light" : "bg-base-200"}`}
    >
      <div>
        <Link
          to="/"
          className="self-start"
          onClick={() => {
            scrollTop();
            // toggleTheme();
          }}
        >
          <svg
            className="ml-1 fill-stone-400 duration-300 hover:fill-slate-200"
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
        className={
          isOpen ? "flex w-screen flex-col gap-4 md:inline" : "hidden md:inline"
        }
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
      </motion.div>
      {/* Mobile navbar toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative mx-1 inline self-start md:hidden"
      >
        <div className="relative flex h-[50px] w-[50px] transform items-center justify-center rounded-full shadow-md  transition-all duration-200 ">
          <div
            className={
              isOpen
                ? "flex h-[20px] w-[20px] origin-center -rotate-[45deg] transform flex-col justify-between transition-all duration-300"
                : "flex h-[20px] w-[20px] origin-center transform flex-col justify-between transition-all duration-300"
            }
          >
            <div
              className={
                isOpen
                  ? "h-[1px] w-1/2 origin-right -translate-y-[1px] -rotate-90 transform rounded bg-stone-400 transition-all delay-75 duration-300"
                  : "h-[2px] w-1/2 origin-right transform rounded bg-stone-400 transition-all delay-75 duration-300 "
              }
            ></div>
            <div className="h-[1px] rounded bg-stone-400"></div>
            <div
              className={
                isOpen
                  ? "h-[1px] w-1/2 origin-left translate-y-[1px] -rotate-90 transform self-end rounded bg-stone-400 transition-all delay-75 duration-300"
                  : "h-[2px] w-1/2 origin-left transform self-end rounded bg-stone-400 transition-all delay-75 duration-300"
              }
            ></div>
          </div>
        </div>
      </button>
    </motion.nav>
  );
};

export default Header;
