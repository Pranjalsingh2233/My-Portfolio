import "./About.css";
import { Link, BrowserRouter } from "react-router-dom";

export default function About() {
  return (
    <section id="_about">
      <h1>About Me</h1>
      <div className="about">
        <div className="imageTwo"></div>
        <div className="aboutMe">
          Looking for a web developer who can turn your vision into a reality?
          I'm a front-end developer with a passion for crafting innovative and
          user-friendly websites.As a skilled frontend developer, I specialize
          in crafting modern and responsive web applications using HTML, CSS,
          JavaScript, and popular frameworks like ReactJS, Bootstrap, Tailwind
          CSS, and Material UI. My goal is to create websites that not only look
          great but also provide a seamless user experience. My ability to stay
          up-to-date with the latest frontend technologies and industry best
          practices ensures that I consistently deliver high-quality results.
        </div>
      </div>
      <div className="icons">
        <BrowserRouter>
          <Link to="https://wa.me/919026840092">
            <i className="icon fa-brands fa-whatsapp"></i>
          </Link>
          <Link to="https://www.instagram.com/pranjal__.s/">
            <i className="icon fa-brands fa-instagram"></i>
          </Link>
          <Link to="https://github.com/Pranjalsingh2233">
            <i className="icon fa-brands fa-github"></i>
          </Link>
          <Link to="https://www.linkedin.com/in/pranjal-singh-7aa165274/">
            <i className="icon fa-brands fa-linkedin-in"></i>
          </Link>
        </BrowserRouter>
      </div>
      <div className="lineTwo">Scroll</div>
    </section>
  );
}
