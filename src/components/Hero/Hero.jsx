import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

const Hero = () => {
  return (
    <div className="min-h-screen overflow-hidden px-8 pt-10">
      <div className="relative grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-3">
          <article className="lg:ml-16">
            <h1 className="bg-gradient-to-r from-slate-400 to-white bg-clip-text py-2 font-['Expletus_Sans'] text-8xl font-extrabold normal-case text-transparent md:py-4 md:text-8xl md:uppercase lg:mt-10">
              Ayoob Salari
            </h1>
            <div className="my-10 text-justify font-['Roboto'] text-xl leading-loose text-slate-400 md:text-2xl md:leading-loose">
              <p className="py-4">
                Welcome to my website! My name is Ayoob, and I have developed
                extensive experience in electrical engineering, thanks to my
                education and work in the communication systems and electrical
                engineering fields.
              </p>
              <p className="py-4">
                I possess a passion for research and development and have an
                insatiable desire to learn and gain experience. I relish the
                opportunity to network with people and welcome any direct rebuke
                or advice that can help me grow in my profession.
              </p>
            </div>
          </article>
        </div>
        <div className="absolute -top-10 left-0 -z-30 w-full sm:left-20 sm:w-3/4 md:left-60 md:w-1/2 lg:top-0 lg:left-1/2 lg:w-1/2">
          <BackgroundAnimation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
