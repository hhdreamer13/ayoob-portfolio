import { useState, useEffect } from "react";
import { TbExternalLink } from "react-icons/tb";
import { publicationList } from "./publicationList";

const Projects = () => {
  const [isMore, setIsMore] = useState(false);
  const [showingItems, setShowingItems] = useState([]);

  useEffect(() => {
    setShowingItems([...publicationList.slice(0, 3)]);
    setIsMore(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMore = () => {
    setShowingItems([...publicationList.slice(0, showingItems.length + 3)]);
    if (showingItems.length + 3 > publicationList.length) {
      setIsMore(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-base-200">
      <section className="mt-20 items-center justify-center">
        <h2 className="relative mx-auto text-center text-2xl font-bold">
          <span className="py-0 px-4">My Researches</span>
        </h2>
      </section>
      <ul className="menu rounded-box menu-compact p-2">
        {showingItems.map(({ title, authors, booktitle, link }, i) => {
          return (
            <div key={i}>
              <div className="hover: card my-2 bg-base-300 text-primary-content duration-500 hover:scale-105">
                <div className="card-body">
                  <p>
                    {" "}
                    <span className="text-color h-20 font-mono">{`${
                      i + 1
                    }. `}</span>
                    {title}
                  </p>
                  <div className="card-actions justify-end">
                    <a href={link} target="_blank" rel="noreferrer">
                      <TbExternalLink
                        size="1.5rem"
                        className="absolute bottom-4 right-4 hover:opacity-75"
                      />
                    </a>
                  </div>
                  <pre className="whitespace-pre-line text-warning">
                    <p>{authors}</p>
                  </pre>
                  <pre className="whitespace-pre-line text-success">
                    <p>{`${booktitle.titre} - ${booktitle.year}`}</p>
                  </pre>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
      {isMore && (
        <button className=" btn-ghost btn-wide btn my-10" onClick={handleMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Projects;
