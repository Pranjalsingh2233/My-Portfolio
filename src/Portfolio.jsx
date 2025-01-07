import "./Portfolio.css";
import Home from "./Home";
import About from "./About";
import DrawerAppBar from "./NavBar";
import Services from "./Services";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Portfolio() {
  return (
    <>
      <DrawerAppBar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Contact />
    </>
  );
}
