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
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <p className="text-justify">
                  Picanha pork loin tail beef frankfurter shank porchetta.
                  Burgdoggen corned beef tenderloin boudin chuck. T-bone
                  pancetta jowl alcatra. Venison short ribs tail strip steak,
                  picanha meatball turkey doner bacon tenderloin shoulder. Beef
                  ribs chuck hamburger tongue pork loin ball tip pork sausage.
                  Meatball frankfurter flank kevin, t-bone short ribs turducken
                  tenderloin boudin salami. Ribeye porchetta capicola, turkey
                  jerky shoulder beef ribs. Andouille beef ribs venison tail.
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
