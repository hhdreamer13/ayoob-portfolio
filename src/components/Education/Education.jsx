import { useState } from "react";
import { educationList } from "./educationData";
import { BiMedal } from "react-icons/bi";

const Education = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  return (
    <div id="education-section" className="mx-auto min-h-screen max-w-3xl">
      <section className="mt-20 flex items-center justify-center">
        <hr className="h-px w-1/2 border-none bg-slate-600" />
        <h2 className="text-color m-0 flex-none p-10 text-2xl font-bold">
          My Educations
        </h2>
        <hr className="h-px w-1/2 border-none bg-slate-600" />
      </section>

      <div id="tabs-container" className="">
        <div
          id="tabs-list"
          role="tablist"
          aria-label="Education Tab"
          className="z-3 tabs relative mb-10 w-max p-0"
        >
          {educationList.map(({ degree }, i) => {
            return (
              <button
                key={i}
                className={
                  activeTabId === i
                    ? "tab tab-bordered tab-active block duration-1000"
                    : "tab tab-bordered block justify-start"
                }
                onClick={() => setActiveTabId(i)}
                id={`tab-${i}`}
                role="tab"
                tabIndex={activeTabId === i ? "0" : "-1"}
                aria-selected={activeTabId === i ? true : false}
                aria-controls={`panel-${i}`}
              >
                <span className="font-mono">{degree}</span>
              </button>
            );
          })}
        </div>
        <div className="w-full">
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
                  className={
                    activeTabId !== i
                      ? "prose invisible relative max-w-none opacity-0 duration-700"
                      : "prose relative max-w-none opacity-100 duration-700 "
                  }
                  key={i}
                  // hidden={activeTabId !== i}
                >
                  <div className="absolute left-0 top-0">
                    <h3 className="mr-4 inline">{title}</h3>
                    <div className="badge-primary badge-outline badge badge-lg mr-4 p-2">
                      <div className="badge-primary badge mr-4">{year}</div>
                      {location}
                    </div>
                    {honours.map((h, i) => (
                      <span
                        key={i}
                        className="rating tooltip"
                        data-tip={`${h.title} ${h.year}`}
                      >
                        <BiMedal
                          size="20px"
                          className=" mr-2 w-6 fill-amber-400"
                        >
                          &nbsp;
                        </BiMedal>
                      </span>
                    ))}

                    <h4>{lab}</h4>
                    <h4 className="mb-10">
                      <span className="font-mono">@&nbsp;</span>
                      <a
                        className="link-accent link  flex-nowrap text-lg italic"
                        target="_blank"
                        rel="noreferrer"
                        href={url}
                      >
                        {university}
                      </a>
                    </h4>
                    <h4>
                      <span className="text-color">Thesis:</span> {thesis.title}
                    </h4>
                    <p>{thesis.description}</p>
                    <p className="italic">
                      <span className="text-color">Supervisor: </span>
                      {supervisor}
                    </p>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
