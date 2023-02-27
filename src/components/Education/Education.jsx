import { useState } from "react";
import { motion } from "framer-motion";
import { educationList } from "./educationData";
import { BiMedal } from "react-icons/bi";

const sectionAnimation = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      opacity: {
        duration: 1,
        ease: "easeOut",
      },
    },
  },
};

const Education = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const underlineClass =
    "absolute bottom-0 h-1 w-16 rounded-md bg-slate-200 animation-all duration-500 ease-in";

  const underlineLeft = ["left-0", "left-16", "left-32"];

  return (
    <div
      id="education"
      className="flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-base-100 to-base-300"
    >
      <div className="flex flex-col items-center px-8 py-10 sm:w-3/4 sm:justify-center">
        <h2 className="my-6 py-6 font-['Cambay'] text-4xl text-slate-300">
          My Education
        </h2>
        <div
          className="flex flex-col items-center md:items-start"
          id="tabs-container"
        >
          <div
            id="tabs-list"
            role="tablist"
            aria-label="Education Tab"
            className="relative mb-10 h-16 w-48 items-center justify-center md:block"
          >
            {educationList.map(({ degree }, i) => {
              return (
                <button
                  key={i}
                  className={
                    activeTabId === i
                      ? "h-16 w-16 text-slate-200"
                      : "h-16 w-16 text-slate-500 duration-300 hover:text-slate-300"
                  }
                  onClick={() => {
                    setActiveTabId(i);
                  }}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span className="font-mono normal-case">{degree}</span>
                </button>
              );
            })}
            <div
              id="underline"
              className={`${underlineClass} ${underlineLeft[activeTabId]}`}
            ></div>
          </div>
          <div className="font-['Roboto'] text-lg sm:text-xl">
            {educationList.map(
              (
                {
                  title,
                  year,
                  lab,
                  university,
                  honours,
                  location,
                  thesis,
                  supervisor,
                  url,
                },
                i
              ) => {
                return (
                  <motion.article
                    key={i}
                    variants={sectionAnimation}
                    initial="hidden"
                    animate={activeTabId !== i ? "hidden" : "visible"}
                    exit={{
                      y: 0,
                      opacity: 0,
                    }}
                    className={activeTabId !== i ? "hidden" : ""}
                  >
                    <div className="flex flex-col items-center justify-center text-slate-400 sm:block">
                      <h3 className="mb-2 mr-0 block py-2 text-xl text-slate-300 sm:my-8 sm:mr-4 sm:mb-8 sm:inline sm:py-8">
                        {title}
                      </h3>
                      <div className="badge-primary badge-outline badge badge-md mr-0 border-cyan-700 md:badge-lg sm:mr-2">
                        <span className="badge-primary badge badge-sm mr-2 border-cyan-700 bg-cyan-700 text-black md:badge-md md:mr-4">
                          {year}
                        </span>
                        <span className="text-cyan-700">{location}</span>
                      </div>
                      <div className="sm:inline">
                        {honours.map((h, i) => (
                          <span
                            key={i}
                            className="rating tooltip mx-2 mt-4 sm:mt-0"
                            data-tip={`${h.title} ${h.year}`}
                          >
                            <BiMedal size="20px" className="w-6 fill-[#D4AF37]">
                              &nbsp;
                            </BiMedal>
                          </span>
                        ))}
                      </div>
                      <div className="text-justify leading-relaxed sm:leading-loose">
                        <h4 className="my-4 pt-6 text-left sm:my-2 sm:pt-2">
                          {lab}
                        </h4>
                        <h4 className="">
                          <span className="font-mono text-slate-300">
                            @&nbsp;
                          </span>
                          <a
                            className="link-accent link text-base italic sm:text-lg"
                            target="_blank"
                            rel="noreferrer"
                            href={url}
                          >
                            {university}
                          </a>
                        </h4>
                        <h4 className="mt-8 py-4 font-bold">
                          <span className="text-slate-300">Thesis:</span>{" "}
                          {thesis.title}
                        </h4>
                        <p className="my-2">{thesis.description}</p>
                        <p className="text-left italic">
                          <span className="text-slate-300">Supervisor: </span>
                          {supervisor}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
