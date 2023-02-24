import { Link, useParams } from "react-router-dom";
import { experienceData } from "./experienceData";
import { useEffect } from "react";
import { motion } from "framer-motion";

const cardAnimations = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.1,
      type: "spring",
      mass: 0.5,
      stiffness: 100,
    },
  },
};

const ExperienceDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
  const { id } = useParams();
  const [result] = experienceData.filter((item) => item.id === id);
  return (
    <div className="flex min-h-screen items-center justify-center sm:bg-[linear-gradient(to_right_top,#051937,#042643,#05334f,#0b4059,#164e63)]">
      <motion.div
        variants={cardAnimations}
        initial="hidden"
        animate="visible"
        className="card bg-base-200 shadow-xl"
      >
        <div className="card-body">
          <div className="card-actions justify-end">
            <Link
              to="/#experience"
              className="btn-square btn-sm btn text-slate-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
          </div>
          <article className="prose text-justify font-['Roboto'] text-lg sm:text-xl">
            <h2 className="text-left text-slate-300">{result.title}</h2>
            <p className=" text-lg leading-loose text-slate-400 md:text-lg md:leading-loose">
              {result.description}
            </p>
            <p className="font-['Roboto'] text-base italic text-stone-400 ">
              {result.location} - {result.year}
            </p>
            {result.badge.map((b, i) => {
              return (
                <div
                  key={i}
                  className="badge-outline badge mr-3 text-slate-400 "
                >
                  <p>{b}</p>
                </div>
              );
            })}
          </article>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceDetail;
