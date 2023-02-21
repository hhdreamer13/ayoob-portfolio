const ContactMe = () => {
  return (
    <div
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-base-200 py-10 px-8"
    >
      <article className="w-80 text-center sm:w-96">
        <h2 className="mb-10 font-['Quicksand'] text-5xl font-bold text-slate-300">
          Get In Touch
        </h2>
        <p className="mb-10 text-center text-slate-400 ">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </article>
      <button className="glass btn w-36 text-slate-300">Contact Me</button>
    </div>
  );
};

export default ContactMe;
