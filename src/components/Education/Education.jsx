import { useState } from "react";
import { educationList } from "./educationData";
import { BiMedal } from "react-icons/bi";

const Education = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  return (
    <div
      id="education"
      className="flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-base-100 to-base-300"
    >
      <div className="flex flex-col items-center px-8 py-10 sm:w-3/4 sm:justify-center">
        <h2 className="my-6 py-6 font-['Cambay'] text-4xl text-slate-300">
          My Educations
        </h2>
        <div id="tabs-container">
          <div
            id="tabs-list"
            role="tablist"
            aria-label="Education Tab"
            className="mb-10 flex justify-center md:block"
          >
            {educationList.map(({ degree }, i) => {
              return (
                <button
                  key={i}
                  className={
                    activeTabId === i
                      ? "after:h10 relative p-4 uppercase text-slate-100 after:absolute after:bottom-0 after:left-0 after:block after:w-full after:origin-center after:scale-x-100 after:border-b-4 after:border-solid after:border-slate-100 after:pt-2 after:transition after:content-['']"
                      : "after:h10 relative p-4 uppercase text-slate-400 duration-300 after:absolute after:bottom-0 after:left-0 after:block after:w-full after:origin-right after:scale-x-0 after:border-b-4 after:border-solid after:border-slate-100 after:pt-2 after:transition after:duration-300 after:content-[''] hover:text-slate-100 hover:after:origin-left hover:after:scale-x-100"
                  }
                  onClick={() => setActiveTabId(i)}
                  id={`tab-${i}`}
                  role="tab"
                  tabIndex={activeTabId === i ? "0" : "-1"}
                  aria-selected={activeTabId === i ? true : false}
                  aria-controls={`panel-${i}`}
                >
                  <span className="font-mono normal-case">{degree}</span>
                  <div className="absolute bottom-0 left-0 block h-1 w-full bg-slate-700"></div>
                </button>
              );
            })}
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
                  <article
                    className={activeTabId !== i ? "hidden" : ""}
                    key={i}
                  >
                    <div className="flex flex-col items-center justify-center text-slate-400 sm:block">
                      <h3 className="mb-2 mr-4 block py-2 text-xl text-slate-300 sm:my-8 sm:mr-4 sm:mb-8 sm:inline sm:py-8">
                        {title}
                      </h3>
                      <div className="badge-primary badge-outline badge badge-md border-cyan-700 md:badge-lg sm:mr-2">
                        <span className="badge-primary badge badge-sm mr-2 border-cyan-700 bg-cyan-700 md:badge-md md:mr-4">
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
                  </article>
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
