import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <div className=" px-8 pt-10">
        <div className="prose relative w-full">
          <div className="absolute left-0 -top-10 -z-30 w-80 sm:left-40 md:left-60 md:w-3/4 lg:left-3/4">
            <BackgroundAnimation />
          </div>
          <h1 className="bg-gradient-to-r from-slate-400 to-white bg-clip-text pt-2 font-['Expletus_Sans'] text-8xl font-extrabold text-transparent md:py-4 md:text-8xl">
            Ayoob Salari
          </h1>
          <p className="text-xl">
            Welcome to my website! My name is Ayoob, and I have developed
            extensive experience in electrical engineering, thanks to my
            education and work in the communication systems and electrical
            engineering fields.
          </p>
          <p className="text-xl">
            I possess a passion for research and development and have an
            insatiable desire to learn and gain experience. I relish the
            opportunity to network with people and welcome any direct rebuke or
            advice that can help me grow in my profession.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
