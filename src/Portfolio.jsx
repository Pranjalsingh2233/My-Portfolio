import "./Portfolio.css";
import Home from "./Home";
import About from "./About";
import DrawerAppBar from "./NavBar";
import Services from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./footer";

export default function Portfolio() {
  return (
    <>
      <div className="full-page">
        <DrawerAppBar />
        <div className="flex-content">
          <section className="section" id="home">
            <Home />
          </section>
          <section className="section" id="about">
            <About />
          </section>
          <section className="section" id="services">
            <Services />
          </section>
          <section className="section" id="skills">
            <Skills />
          </section>
          <section className="section" id="contact">
            <Contact />
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
