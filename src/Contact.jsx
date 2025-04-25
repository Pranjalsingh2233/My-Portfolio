import { useState } from "react";
import "./Contact.css";
import { Link, BrowserRouter } from "react-router-dom";

export default function Contact() {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  let handleInputChange = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };
  let handleSubmit = (event) => {};

  return (
    <section className="sec" id="_contact">
      <h1>Contact Me</h1>
      <div className="contact">
        <div className="work">
          <h4>Let's Work Together</h4>
          <br />
          <p>
            Let’s join forces to achieve greatness. Together, we can overcome
            any obstacle. By combining our strengths, we’ll create something
            truly remarkable. Remember, teamwork makes the dream work. Let’s
            work together and make a difference.
          </p>
          <br />
          <i className="fa-regular fa-envelope cont"></i>
          <span>pranjalhanu66@gmail.com</span> <br />
          <i className="fa-solid fa-phone cont"></i>
          <span>9026840092</span>
          <br />
          <br />
          <br />
          <br />
          <div className="icons-2">
            <BrowserRouter>
              <Link to="https://wa.me/919026840092">
                <i className="icon-2 fa-brands fa-whatsapp"></i>
              </Link>
              <Link to="https://www.instagram.com/pranjal__.s/">
                <i className="icon-2 fa-brands fa-instagram"></i>
              </Link>
              <Link to="https://github.com/Pranjalsingh2233">
                <i className="icon-2 fa-brands fa-github"></i>
              </Link>
              <Link to="https://www.linkedin.com/in/pranjal-singh-7aa165274/">
                <i className="icon-2 fa-brands fa-linkedin-in"></i>
              </Link>
            </BrowserRouter>
          </div>
        </div>
        <div className="form">
          <form
            action="https://formsubmit.co/bb1426756efc1a06a92eb369df305ded"
            method="POST"
            // onSubmit={handleSubmit}
          >
            <input
              className="input"
              placeholder="Enter Your Name"
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              required
            />
            <input
              className="input"
              placeholder="Enter Your Email"
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              required
            />
            <input
              className="input"
              placeholder="Enter Your Subject"
              value={formData.subject}
              name="subject"
              onChange={handleInputChange}
              required
            />
            <textarea
              className="input"
              placeholder="Enter Your Message"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
              required
            />
            <br />
            <input
              className="btn2 btn btn-primary"
              type="submit"
              value="Submit"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
}
