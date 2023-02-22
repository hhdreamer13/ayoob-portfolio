import { useState, useEffect, useRef } from "react";
import { TbExternalLink } from "react-icons/tb";
import { publicationList } from "./publicationData";

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
      <div className="px-2 py-10">
        <div className="flex flex-col items-center justify-center ">
          <section className="items-center justify-center py-10">
            <h2 className="relative mx-auto text-center text-2xl font-bold">
              <span className="py-0 px-4 font-['Cambay'] text-4xl text-slate-300">
                My Researches
              </span>
            </h2>
          </section>
          <ul className="rounded-box mx-1 bg-base-100 p-1 ">
            {showingItems.map(({ title, authors, booktitle, link }, i) => {
              return (
                <div key={i}>
                  <div className="group card m-5 bg-[#19263F] shadow-md duration-500 hover:-translate-y-2">
                    <div className="card-body">
                      <p className="font-['Roboto'] text-slate-300">
                        {" "}
                        <span className="h-20 font-mono text-lg text-stone-400">{`${
                          i + 1
                        }. `}</span>
                        {title}
                      </p>
                      <div className="card-actions justify-end text-slate-300">
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          className=""
                        >
                          <TbExternalLink
                            size="1.5rem"
                            className="absolute bottom-4 right-4 ml-2 h-6 w-6 place-items-end group-hover:animate-ping"
                          />
                          <TbExternalLink
                            size="1.5rem"
                            className="absolute bottom-4 right-4 ml-2 h-6 w-6 place-items-end"
                          />
                        </a>
                      </div>
                      <pre className="whitespace-pre-line text-accent">
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
              className="group btn-wide relative my-10 inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold normal-case text-white shadow-2xl"
              onClick={handleMore}
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-900 via-cyan-700 to-sky-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>

              <span className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
              <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
              <span className="relative font-light">Show More</span>
            </button>
          )}
          {isMore || (
            <button
              className="group btn-wide relative my-10 inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold normal-case text-white shadow-2xl"
              onClick={handleLess}
            >
              <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-900 via-cyan-700 to-sky-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>

              <span className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"></span>

              <span className="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
              <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
              <span className="relative font-light">Show Less</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;
