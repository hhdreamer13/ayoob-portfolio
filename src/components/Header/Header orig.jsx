import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  // Navigation Bar Menu Items
  const navItems = ["About", "Education", "Research", "Experience", "Contact"];

  // Scroll to a section
  const scrollHandle = (e) => {
    const position = document.getElementById(e.target.text.toLowerCase());
    position && position.scrollIntoView({ behavior: "smooth", block: "start" });
    setToggle(false);
  };

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Theme selection
  const [theme, setTheme] = useState("night");
  const toggleTheme = () => {
    setTheme(theme === "night" ? "dracula" : "night");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar sticky top-0 z-30 bg-neutral bg-opacity-50 backdrop-blur backdrop-filter">
      <div className="flex-1">
        <Link to="/" className="btn-ghost btn" onClick={scrollTop}>
          <span className="fill-slate-400">
            <svg
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
          </span>
        </Link>
      </div>
      <div
        id="menu-items"
        className={
          toggle
            ? "w-full justify-center py-1 sm:flex sm:items-center"
            : "hidden w-full sm:flex sm:w-auto sm:items-center"
        }
      >
        <ul className="menu menu-vertical items-center justify-center px-1 sm:menu-horizontal">
          {navItems.map((item) => {
            return (
              <li key={item} className="py-1 sm:mx-1 sm:py-0">
                <Link
                  to={{ hash: `#${item.toLowerCase()}` }}
                  onClick={scrollHandle}
                >
                  {item}
                </Link>
              </li>
            );
          })}

          <li id="theme-button" className="">
            <label className="swap-rotate swap">
              <input type="checkbox" onClick={toggleTheme} />
              <FaSun className="swap-on h-5 w-5 fill-current" />
              <FaMoon className="swap-off h-5 w-5 fill-current" />
            </label>
          </li>
        </ul>
      </div>
      <label
        id="menu-button"
        className="swap-rotate swap btn-circle btn mx-1 sm:hidden"
      >
        <input onClick={() => setToggle(!toggle)} type="checkbox" />

        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>
    </nav>
  );
};

export default Header;
