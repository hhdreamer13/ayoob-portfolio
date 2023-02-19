import { Fragment } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Research from "../components/Research/Research";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import ContactMe from "../components/ContactMe/ContactMe";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";

const Home = () => {
  return (
    <Fragment>
      <Header />
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
