import { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { SiGooglescholar } from "react-icons/si";

const socialIcons = [
  {
    name: <SiLinkedin />,
    link: "https://au.linkedin.com/in/ayoob-salari-015b4141",
    key: "linkedin",
  },
  { name: <FiGithub />, link: "https://github.com/Salari7", key: "github" },
  {
    name: <SiGooglescholar />,
    link: "https://scholar.google.co.kr/citations?user=gZLCZMIAAAAJ&hl=en",
    key: "scholar",
  },
];

const ContactMe = () => {
  return (
    <div
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-base-200 py-10 px-8"
    >
      <article className="w-80 text-center sm:w-96">
        <h2 className="mb-10 font-['Cambay'] text-5xl font-bold text-slate-300">
          Get In Touch
        </h2>
        <p className="mb-10 text-center text-slate-400 md:text-lg">
          Don&apos;t be shy about getting in touch with me if there&apos;s
          anything I can do.
        </p>
        <a
          href="mailto:ayoob.salari@sydney.edu.au"
          className="group relative my-6 inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold normal-case text-white shadow-2xl md:btn-wide"
        >
          <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-900 via-cyan-700 to-sky-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>

          <span className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"></span>

          <span className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"></span>

          <span className="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"></span>

          <span className="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"></span>
          <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
          <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
          <span className="relative font-light md:tracking-widest">
            Email Me
          </span>
        </a>
      </article>
      <div>
        <div className="group flex h-24 w-80 items-center justify-center md:h-32 md:w-[450px]">
          {socialIcons.map((icon) => {
            return (
              <ul
                key={icon.key}
                className=" flex items-center justify-center text-center"
              >
                <li className="">
                  <a
                    href={icon.link}
                    className="m-3 flex h-[50px] w-[50px] cursor-pointer list-none items-center justify-center border border-solid border-[rgba(167,146,129,0.4)] p-[1%] text-xl leading-[50px] text-[rgba(167,146,129,0.6)] transition-[ease] duration-[0.3s] hover:border hover:border-solid hover:border-[#a79281] hover:text-[#a79281] hover:opacity-100 group-hover:opacity-50 md:h-20 md:w-20 md:text-2xl"
                    aria-hidden="true"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon.name}
                  </a>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
