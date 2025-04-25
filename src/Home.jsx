import "./Home.css";

export default function Home() {
  return (
    <section id="_home">
      <div className="home">
        <div>
          <div className="slideRight dis-none-sm">
            <p>
              Hello, I am <br></br>
              <span className="name">Pranjal Singh</span>
              <br></br>
              And I'm a <span className="typeWriter">Full-Stack Developer</span>
            </p>
          </div>
          <br></br>
          <div className="slideLeft">
            <p className="para">
              As a Full Stack Developer, I have a strong grasp of modern
              JavaScript frameworks like React, with solid front-end skills in
              HTML and CSS. On the back end, I build scalable applications using
              Node.js and MongoDB
            </p>
          </div>
          <br></br>
          <a
            className="btn1 btn btn-primary"
            href="https://drive.google.com/file/d/1ye-Ew3Di3Jpg7Ocfwx6tGZjRX012wHHx/view?usp=drive_link"
            role="button"
          >
            Resume
          </a>
        </div>
        <div className="custom-flex">
          <div className="slideRight dis-none-lg">
            <p>
              Hello, I am <br></br>
              <span className="name">Pranjal Singh</span>
              <br></br>
              And I'm a <span className="typeWriter">Full-Stack Developer</span>
            </p>
          </div>
          <div className="image"></div>
        </div>
      </div>
      <div className="line">Scroll</div>
    </section>
  );
}
