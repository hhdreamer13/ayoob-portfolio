import { Link, useParams } from "react-router-dom";
import { experienceList } from "../components/ExperienceItem/experienceData";
const ExperienceDetail = () => {
  const { id } = useParams();
  const [result] = experienceList.filter((item) => item.id === id);
  return (
    <div className="card flex min-h-screen items-center justify-center bg-neutral">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <Link to="/#experience" className="btn-square btn-sm btn">
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
          <article className="prose text-justify">
            <h2>{result.title}</h2>
            <p>{result.description}</p>
            <p>
              {result.location} - {result.year}
            </p>
            <div className="badge badge-outline">
              <p>{result.badge}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
