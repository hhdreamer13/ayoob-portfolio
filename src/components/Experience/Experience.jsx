import { Link, useLocation } from "react-router-dom";
import { experienceList } from "./experienceData";
import { useEffect } from "react";

const Experience = () => {
  const location = useLocation();

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
      className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 py-10 px-2"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-14 font-['Quicksand'] text-4xl text-slate-300">
          My Experiences
        </h2>
        <div
          id="test2"
          className="carousel-center carousel rounded-box w-3/4 space-x-4 bg-neutral p-4 md:w-4/5"
        >
          {experienceList.map(({ id, title, location, year, badge, image }) => {
            return (
              <div key={id} className="carousel-item">
                <div className="card w-40 bg-base-300 shadow-xl md:w-96">
                  <figure>
                    <img src={image} alt="none" />
                  </figure>
                  <div className="card-body p-4 md:p-8">
                    <h2 className="card-title hidden text-sm md:block md:text-xl">
                      {location}
                    </h2>
                    <div className="badge-secondary badge text-xs md:text-base">
                      {year}
                    </div>
                    <p className="text-sm md:text-base">{title}</p>
                    {/* <div className="card-actions hidden justify-end md:inline">
                      <div className="badge badge-outline text-xs md:p-3 md:text-base">
                        {badge}
                      </div>
                    </div> */}

                    <Link
                      className="btn-sm btn text-xs font-thin normal-case md:h-12 md:w-40 md:self-center md:font-sans md:text-base md:font-normal"
                      to={`/details/${id}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
