import { Fragment, useState } from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Research from "../Research/Research";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import ContactMe from "../ContactMe/ContactMe";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Modal from "../Modal/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <Header setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Hero />
      <AboutMe />
      <Education />
      <Research />
      <Experience />
      <ContactMe />
      <Footer />
    </Fragment>
  );
};

export default Home;
