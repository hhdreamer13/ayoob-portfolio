const Hero = () => {
  return (
    <div className="h-full">
      <div className="m-20">
        <article className="text-color prose-lg">
          {/* <p>Hi, my name is</p> */}
          <h1 className="bg-gradient-to-r from-slate-400 to-white bg-clip-text text-8xl font-extrabold text-transparent">
            Ayoob Salari
          </h1>
          <p className="text-justify text-2xl">
            Welcome to my website! My name is Ayoob, and I have developed
            extensive experience in electrical engineering, thanks to my
            education and work in the communication systems and electrical
            engineering fields.
          </p>
          <p className="text-justify text-2xl">
            I possess a passion for research and development and have an
            insatiable desire to learn and gain experience. I relish the
            opportunity to network with people and welcome any direct rebuke or
            advice that can help me grow in my profession.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Hero;
