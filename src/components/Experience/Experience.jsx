import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { experienceData } from "./experienceData";

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
      className="min-h-screen overflow-hidden bg-gradient-to-b from-base-100 to-base-300 py-10 px-2"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-14 font-['Cambay'] text-4xl text-slate-300">
          My Experience
        </h2>
        <div
          id="carousel-container"
          className="no-scrollbar flex h-96 w-72 snap-x items-center overflow-scroll rounded-2xl bg-[linear-gradient(to_right_top,#051937,#042643,#05334f,#0b4059,#164e63)] px-4 shadow-inner shadow-slate-900 md:h-[500px] md:w-2/3"
        >
          {experienceData.map(({ id, title, location, badge, year, image }) => {
            return (
              <div
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
                    <p className="badge badge-outline mr-2">{badge[0]}</p>
                    <p className="badge badge-accent mr-2  grayscale group-hover:grayscale-0">
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
