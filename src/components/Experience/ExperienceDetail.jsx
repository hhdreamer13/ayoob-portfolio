import { Link, useParams } from "react-router-dom";
import { experienceData } from "./experienceData";
import { useEffect } from "react";

const ExperienceDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
  const { id } = useParams();
  const [result] = experienceData.filter((item) => item.id === id);
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral">
      <div className="card bg-base-100 shadow-xl">
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
            <p className="font-['Roboto'] text-xl leading-loose text-slate-400 md:text-lg md:leading-loose">
              {result.description}
            </p>
            <p>
              {result.location} - {result.year}
            </p>
            <div className="badge-outline badge">
              <p>{result.badge}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
