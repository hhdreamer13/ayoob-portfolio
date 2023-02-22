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
        <h2 className="my-14 font-['Cambay'] text-4xl text-slate-300">
          My Experiences
        </h2>
        <div className="carousel-center carousel rounded-box w-11/12 space-x-4 bg-neutral p-4 md:w-4/5">
          {experienceList.map(({ id, title, location, year, badge, image }) => {
            return (
              <div key={id} className="carousel-item">
                <div className="group card h-96 w-60 bg-base-300 shadow-xl duration-700 hover:scale-105 md:h-full md:w-96">
                  <figure className="relative w-full overflow-hidden">
                    <img
                      src={image}
                      alt="Infographic datas"
                      className="absolute z-30 h-40 object-cover grayscale duration-500 group-hover:grayscale-0 md:h-60"
                    />
                    <img
                      src={image}
                      alt="Infographic datas"
                      className="z-20 h-40 scale-125 object-fill blur-lg grayscale duration-500 group-hover:grayscale-0 md:h-60"
                    />
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
