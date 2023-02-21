import { useState, useEffect, useRef } from "react";
import { TbExternalLink } from "react-icons/tb";
import { publicationList } from "./publicationList";

const Research = () => {
  const scrollToRef = useRef();

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

  const handleLess = () => {
    setShowingItems([...publicationList.slice(0, 3)]);
    setIsMore(true);
    if (scrollToRef.current) scrollToRef.current.scrollIntoView();
  };

  return (
    <div
      id="research"
      className="min-h-screen bg-gradient-to-b from-base-100 to-base-300"
      ref={scrollToRef}
    >
      <div className="bg-base-200 px-2 py-10">
        <div className="flex flex-col items-center justify-center ">
          <section className="items-center justify-center py-10">
            <h2 className="relative mx-auto text-center text-2xl font-bold">
              <span className="py-0 px-4 font-['Quicksand'] text-4xl text-slate-300">
                My Researches
              </span>
            </h2>
          </section>
          <ul className="menu rounded-box menu-compact p-2">
            {showingItems.map(({ title, authors, booktitle, link }, i) => {
              return (
                <div key={i}>
                  <div className="hover: card my-2 bg-base-300 duration-500 hover:scale-95">
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
            <button
              className=" btn-ghost btn-wide btn my-10"
              onClick={handleMore}
            >
              Show More
            </button>
          )}
          {isMore || (
            <button
              className=" btn-ghost btn-wide btn my-10"
              onClick={handleLess}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
