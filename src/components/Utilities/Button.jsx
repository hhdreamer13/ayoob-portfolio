const ButtonNavy = ({ text, handleClick }) => {
  return (
    <button
      className="group btn-wide relative my-10 inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold normal-case text-white shadow-2xl"
      onClick={handleClick}
    >
      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-slate-900 via-cyan-700 to-sky-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>

      <span className="absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5"></span>

      <span className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5"></span>

      <span className="absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5"></span>

      <span className="absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5"></span>
      <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
      <span className="relative font-light">{text}</span>
    </button>
  );
};

export default ButtonNavy;