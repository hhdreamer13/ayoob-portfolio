import { Link } from "react-router-dom";
import { experienceList } from "./experienceData";

const ExperienceItem = () => {
  return (
    <div>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-color my-14 text-2xl font-bold">My Experiences</h2>
        <div className="carousel-center carousel rounded-box max-w-lg space-x-4 bg-neutral p-4">
          {experienceList.map(({ id, title, location, year, badge, image }) => {
            return (
              <div key={id} className="carousel-item">
                <div className="card w-96 bg-base-300 shadow-xl">
                  <figure>
                    <img src={image} alt="none" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {location}
                      <div className="badge badge-secondary">{year}</div>
                    </h2>
                    <p>{title}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">{badge}</div>
                    </div>

                    <Link className="btn-outline btn" to={`/details/${id}`}>
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

export default ExperienceItem;
