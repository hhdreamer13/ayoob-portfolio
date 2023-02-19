import { useState } from "react";
import { educationList } from "./educationData";
import { BiMedal } from "react-icons/bi";

const Education = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  return (
    <div id="education" className="min-h-screen">
      <div className="flex flex-col items-center px-8 py-10">
        <h2 className="py-10 text-2xl font-bold">My Educations</h2>
        <div id="tabs-container" className="">
          <div
            id="tabs-list"
            role="tablist"
            aria-label="Education Tab"
            className="mb-10"
          >
            {educationList.map(({ degree }, i) => {
              return (
                <button
                  key={i}
                  className={
                    activeTabId === i
                      ? "border-b-2 border-b-slate-100 p-4"
                      : "border-b-2 border-b-slate-600 p-4"
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
          <div className="">
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
                    className={activeTabId !== i ? "prose hidden" : "prose"}
                    key={i}
                    // hidden={activeTabId !== i}
                  >
                    <div className="">
                      <h3 className="mr-4 inline">{title}</h3>
                      <div className="badge badge-primary badge-outline badge-md md:badge-lg">
                        <span className="badge badge-primary badge-sm mr-2 md:badge-md md:mr-4">
                          {year}
                        </span>
                        {location}
                      </div>
                      {honours.map((h, i) => (
                        <span
                          key={i}
                          className="rating px-2 md:tooltip"
                          data-tip={`${h.title} ${h.year}`}
                        >
                          <BiMedal size="20px" className="w-6 fill-amber-400">
                            &nbsp;
                          </BiMedal>
                        </span>
                      ))}
                      <h4>{lab}</h4>
                      <h4 className="mb-10">
                        <span className="font-mono">@&nbsp;</span>
                        <a
                          className="link-accent link text-lg italic"
                          target="_blank"
                          rel="noreferrer"
                          href={url}
                        >
                          {university}
                        </a>
                      </h4>
                      <h4>
                        <span className="">Thesis:</span> {thesis.title}
                      </h4>
                      <p>{thesis.description}</p>
                      <p className="italic">
                        <span className="">Supervisor: </span>
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
    </div>
  );
};

export default Education;
