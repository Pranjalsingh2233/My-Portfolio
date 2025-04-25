import "./About.css";
import { Link, BrowserRouter } from "react-router-dom";

export default function About() {
  return (
    <section id="_about">
      <h1>About Me</h1>
      <div className="about text-center">
        {/* <div className="imageTwo"></div> */}
        <div className="aboutMe">
          Looking for a developer who can bring your vision to life from front
          to back? I’m a passionate Full Stack Developer with a focus on
          building modern, responsive, and scalable web applications. On the
          front end, I specialize in crafting intuitive and visually compelling
          user interfaces using HTML, CSS, JavaScript, and frameworks like
          React.js, Bootstrap, and Material UI. On the back end, I build robust
          and efficient server-side applications with Node.js, Express.js, and
          MongoDB. I’m committed to writing clean, maintainable code and
          delivering seamless user experiences. Staying up-to-date with the
          latest technologies and best practices is at the core of what I
          do—ensuring every project I deliver is reliable, secure, and
          future-ready.
        </div>
      </div>
      <div className="icons text-center">
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
