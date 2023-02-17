const AboutMe = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content m-16 flex-col gap-14 lg:flex-row-reverse">
          <img
            src="/profile-photo.png"
            className="max-w-sm rounded-lg object-contain shadow-2xl grayscale transition duration-1000 ease-in-out hover:scale-95 hover:grayscale-0"
            alt="profile"
          />
          <div>
            <div className="inline-flex w-full items-center justify-center">
              <article className="text-color prose">
                <section className="flex items-center justify-start">
                  <h2 className="text-color m-0 flex-none">About Me</h2>
                  <hr className="mb-0 ml-4 inline-block w-1/2 flex-none bg-slate-600 p-0" />
                </section>
                <p className="text-justify">
                  I have a Bachelor&apos;s degree from Iran University of
                  Science and Technology and a Master&apos;s degree from Korea
                  Advanced Institute of Science and Technology, both in
                  Electrical Engineering. After completing my Master&apos;s
                  degree, I worked as an engineer at FWUTech for over a year,
                  gaining valuable field experience. I am currently a PhD
                  candidate at the prestigious University of Sydney, where my
                  research focuses on machine learning applications in 6G. I
                  expect to finish my PhD by June 2023, which will further
                  solidify my skills and expertise in this field.
                </p>
                <ul className="grid grid-cols-2 font-mono">
                  <section>
                    <li>Matlab</li>
                    <li>Python</li>
                    <li>ThingsBoard</li>
                    <li>CPLEX</li>
                    <li>CellSens</li>
                  </section>
                  <section>
                    <li>Matlab</li>
                    <li>Python</li>
                    <li>ThingsBoard</li>
                    <li>CPLEX</li>
                    <li>CellSens</li>
                  </section>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
