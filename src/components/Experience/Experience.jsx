import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { experienceData } from "./experienceData";

const Experience = () => {
  const location = useLocation();

  const cardVariants = {
    hidden: {
      boxShadow: "0px 0px 0px rgba(15, 23, 42, 0.7)",
    },
    hover: {
      boxShadow: "0px 12px 10px 1px rgba(15, 23, 42, 0.7)",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const position = document.getElementById("experience");

    location.hash === "#experience"
      ? position &&
        setTimeout(() => {
          position.scrollIntoView({ behavior: "smooth", block: "start" });
        }, "1")
      : null;
  }, [location]);

  return (
    <div
      id="experience"
      className="min-h-screen overflow-hidden bg-gradient-to-b from-base-100 to-base-300 py-10 px-2"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-14 font-['Cambay'] text-4xl text-slate-300">
          My Experiences
        </h2>
        <div
          id="carousel-container"
          className="no-scrollbar flex h-96 w-72 snap-x items-center overflow-scroll rounded-2xl bg-[linear-gradient(to_right_top,#051937,#042643,#05334f,#0b4059,#164e63)] px-4 shadow-inner shadow-slate-900 md:h-[500px] md:w-2/3"
        >
          {experienceData.map(({ id, title, location, badge, year, image }) => {
            return (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileHover="hover"
                id="carousel-body"
                key={id}
                className="group mx-3 h-80 w-60 flex-none snap-center rounded-2xl border-2 border-solid border-slate-900 bg-base-100 shadow-xl md:h-[440px] md:w-80"
              >
                <figure id="carousel-image" className="">
                  <img
                    src={image}
                    alt="none"
                    className="h-40 w-full rounded-t-2xl object-fill duration-500 md:h-[210px] md:grayscale md:group-hover:grayscale-0"
                  />
                </figure>
                <div
                  id="carousel-content"
                  className="flex h-40 flex-col items-center justify-between p-4 text-center font-['Roboto'] text-slate-300 md:h-[210px] md:items-start md:text-left"
                >
                  <h2 className="md:text-lg md:font-bold">{title}</h2>
                  <p className="text-sm italic">{location}</p>
                  <div className="hidden md:block">
                    <p className="badge-outline badge mr-2">{badge[0]}</p>
                    <p className="badge-accent badge mr-2  grayscale group-hover:grayscale-0">
                      {year}
                    </p>
                  </div>
                  <Link
                    to={`/details/${id}`}
                    className="btn-sm btn font-['Roboto'] font-light normal-case text-slate-300 md:btn md:self-end md:font-['Roboto'] md:font-light md:normal-case md:text-slate-300"
                  >
                    Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.svg
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rotate-90"
          fill="#334155"
          height="50px"
          width="50px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 202.448 202.448"
          xml:space="preserve"
        >
          <g>
            <g>
              <g>
                <path
                  d="M81.741,66.068h38.966c2.152,0,3.897-1.743,3.897-3.897s-1.745-3.897-3.897-3.897H81.741
				c-2.152,0-3.897,1.743-3.897,3.897S79.589,66.068,81.741,66.068z"
                />
                <path
                  d="M120.707,77.758H81.741c-2.152,0-3.897,1.743-3.897,3.897c0,2.154,1.745,3.897,3.897,3.897h38.966
				c2.152,0,3.897-1.743,3.897-3.897C124.604,79.501,122.858,77.758,120.707,77.758z"
                />
                <path
                  d="M120.707,97.241H81.741c-2.152,0-3.897,1.743-3.897,3.897s1.745,3.897,3.897,3.897h38.966
				c2.152,0,3.897-1.743,3.897-3.897S122.858,97.241,120.707,97.241z"
                />
                <path
                  d="M120.707,116.723H81.741c-2.152,0-3.897,1.743-3.897,3.897s1.745,3.897,3.897,3.897h38.966
				c2.152,0,3.897-1.743,3.897-3.897S122.858,116.723,120.707,116.723z"
                />
                <path
                  d="M120.707,136.206H81.741c-2.152,0-3.897,1.743-3.897,3.897c0,2.154,1.745,3.897,3.897,3.897h38.966
				c2.152,0,3.897-1.743,3.897-3.897C124.603,137.949,122.858,136.206,120.707,136.206z"
                />
                <path
                  d="M81.741,46.586h38.966c1.351,0,2.605-0.7,3.314-1.849s0.774-2.584,0.171-3.79L104.709,1.981
				c-1.321-2.641-5.651-2.641-6.971,0L78.255,40.946c-0.603,1.206-0.538,2.641,0.171,3.79C79.136,45.886,80.39,46.586,81.741,46.586
				z M101.224,12.437l13.177,26.355H88.046L101.224,12.437z"
                />
                <path
                  d="M120.707,155.689H81.741c-1.351,0-2.605,0.7-3.314,1.849c-0.71,1.149-0.774,2.584-0.171,3.79l19.483,38.966
				c0.66,1.32,2.009,2.154,3.485,2.154s2.825-0.833,3.485-2.154l19.483-38.966c0.603-1.206,0.538-2.641-0.171-3.79
				S122.057,155.689,120.707,155.689z M101.224,189.837l-13.177-26.355h26.355L101.224,189.837z"
                />
              </g>
            </g>
          </g>
        </motion.svg>
      </div>
    </div>
  );
};

export default Experience;
