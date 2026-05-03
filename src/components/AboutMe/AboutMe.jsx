const AboutMe = () => {
  const competences = [
    "Python",
    "MATLAB",
    "C",
    "PyTorch",
    "Transformers",
    "Time-Series Analysis",
    "NVIDIA Brev Compute",
    "NVIDIA Jetson Network",
    "TensorRT",
    "LTE/5G Baseband Capture",
    "Signal Processing",
    "SDR/USRP",
    "HFSS",
    "CST",
    "OrCAD",
    "Linux",
    "Git",
    "Database",
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-base-100 to-base-300 px-8 py-10"
    >
      <div className="group flex flex-col items-center justify-center lg:flex-row-reverse lg:gap-20 lg:px-20">
        <img
          src="/profile-photo.webp"
          className="my-10 w-64 rounded-lg object-cover shadow-2xl shadow-black grayscale transition duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0 sm:w-80"
          alt="profile"
        />
        <article className="text-justify text-slate-400">
          <h2 className="flex-none py-6 font-['Cambay'] text-4xl text-slate-300">
            About Me
          </h2>
          <p className="my-2 mb-4 font-['Roboto'] text-xl leading-loose text-slate-400 md:text-lg md:leading-loose">
            My engineering career began at the physical layer of wireless systems, where I designed and patented circuitry to improve power transfer efficiency. This foundational hardware experience grounds my current machine learning work in reality; I understand the physical constraints governing radio frequency signals and sensor networks before conceptualising any software models.
          </p>
          <p className="my-2 mb-4 font-['Roboto'] text-xl leading-loose text-slate-400 md:text-lg md:leading-loose">
            I subsequently transitioned into the commercial telecommunications sector, focusing on data infrastructure. Tasked with extracting intelligence from live mobile networks, I built automated extraction pipelines to process raw feeds from varied support systems. This required structuring high-volume metrics into reliable reporting tools that dictated immediate physical network adjustments. 
          </p>
          <p className="my-2 mb-4 font-['Roboto'] text-xl leading-loose text-slate-400 md:text-lg md:leading-loose">
            Over the past six years, my focus has shifted entirely to deploying deep learning architectures for environmental and telecommunications applications. Working alongside industry partners like NVIDIA and TPG Telecom, I train Transformer networks on cloud compute clusters and push the resulting inference engines directly onto field-deployed edge devices. This ensures analytical models survive the transition from controlled laboratory environments to volatile physical deployments. 
          </p>
          <ul className="grid h-auto w-auto list-none grid-cols-2 pl-0 font-mono text-slate-400 sm:grid-cols-3">
            {competences.map((c) => {
              return (
                <li
                  key={c}
                  className="m-0 my-3 inline-flex items-center gap-3 pl-0 pr-2"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"
                      fill="#a8a29e"
                    />
                  </svg>
                  {c}
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
