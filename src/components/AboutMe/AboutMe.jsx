const AboutMe = () => {
  return (
    <div id="about" className="min-h-screen bg-base-200 px-8 py-10">
      <div className="flex flex-col items-center justify-center md:flex-row-reverse md:gap-6">
        <img
          src="/profile-photo.png"
          className="my-10 w-56 rounded-lg object-cover shadow-2xl grayscale transition duration-1000 ease-in-out hover:scale-105 hover:grayscale-0 md:w-72 "
          alt="profile"
        />
        <article className="prose">
          <h2 className="text-color flex-none py-4">About Me</h2>
          <p className="">
            I have a Bachelor&apos;s degree from Iran University of Science and
            Technology and a Master&apos;s degree from Korea Advanced Institute
            of Science and Technology, both in Electrical Engineering. After
            completing my Master&apos;s degree, I worked as an engineer at
            FWUTech for over a year, gaining valuable field experience. I am
            currently a PhD candidate at the prestigious University of Sydney,
            where my research focuses on machine learning applications in 6G. I
            expect to finish my PhD by June 2023, which will further solidify my
            skills and expertise in this field.
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
  );
};

export default AboutMe;
