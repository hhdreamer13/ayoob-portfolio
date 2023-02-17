import { TbExternalLink } from "react-icons/tb";
import { publicationList } from "./publicationList";

const Projects = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-base-200">
      <ul className="menu rounded-box menu-compact w-3/4 bg-base-100 p-2">
        {publicationList.map(({ title, authors, booktitle, link }, i) => {
          return (
            <div
              key={i}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
              className="collapse-arrow rounded-box collapse border border-base-300 bg-base-100 hover:bg-base-200"
            >
              <input type="checkbox" className="peer" />

              <div className="collapse-title">
                <span className="text-color h-20 font-mono">{`${
                  i + 1
                }. `}</span>
                {title}
              </div>
              <div className="collapse-content flex justify-center">
                <div key={i} className="mockup-code w-4/5">
                  {/* <h2 className="text-color absolute left-1/2 top-3 -translate-x-1/2 transform">
                    {`~/ayoob/publications/${booktitle.name}-${i + 1}`}
                  </h2> */}
                  {/* <pre data-prefix=">" className="mt-10 whitespace-pre-line">
                    <code>title</code>
                    <p className="ml-14 mt-2">{title}</p>
                  </pre> */}
                  <pre
                    data-prefix=">"
                    className="mt-10 whitespace-pre-line text-warning"
                  >
                    <code>authors</code>
                    <p className="ml-14 mt-2">{authors}</p>
                  </pre>
                  <pre
                    data-prefix=">"
                    className="mt-10 whitespace-pre-line text-success"
                  >
                    <code>{booktitle.name}</code>
                    <p className="ml-14 mt-2">
                      {`${booktitle.titre} - ${booktitle.year}`}
                    </p>
                  </pre>
                  <br />
                  <a href={link} target="_blank" rel="noreferrer" className="">
                    <TbExternalLink
                      size="1.5rem"
                      className="absolute bottom-4 right-4"
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
