import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const navItems = ["About", "Education", "Research", "Contact"];

  const [theme, setTheme] = useState("night");
  const toggleTheme = () => {
    setTheme(theme === "night" ? "dracula" : "night");
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="text-color navbar sticky top-0 z-30 bg-base-100 bg-opacity-50 backdrop-blur backdrop-filter">
      <div className="flex-1">
        <Link className="btn-ghost btn text-xl normal-case">
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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => {
            return (
              <li key={item} className="mr-1 ml-1">
                <Link to={{ hash: `#${item.toLowerCase()}` }}>{item}</Link>
              </li>
            );
          })}

          <li className="">
            <label className="swap swap-rotate">
              <input type="checkbox" onClick={toggleTheme} />
              <FaSun className="swap-on h-5 w-5 fill-current" />
              <FaMoon className="swap-off h-5 w-5 fill-current" />
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
