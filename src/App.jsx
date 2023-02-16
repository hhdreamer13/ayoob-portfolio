import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";
import BackgroundAnimation from "./components/BackgroundAnimation/BackgroundAnimation";
import ContactMe from "./components/ContactMe/ContactMe";
import Education from "./components/Education/Education";

function App() {
  return (
    <Router>
      <Header />
      <section className="relative mt-32 pb-32">
        <div className="w-full md:w-4/5">
          <Hero />
        </div>
        <div className="absolute bottom-2/3 left-1/3 -z-10 w-2/5 md:bottom-1/3 md:left-1/2 lg:absolute">
          <BackgroundAnimation />
        </div>
      </section>
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
      <Footer />
    </Router>
  );
}

export default App;
