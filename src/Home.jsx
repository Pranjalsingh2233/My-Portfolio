import "./Home.css";

export default function Home() {
  return (
    <section id="_home">
      <div className="home">
        <div>
          <div className="slideRight">
            <p>
              Hello, I am <br></br>
              <span className="name">Pranjal Singh</span>
              <br></br>
              And I'm a <span className="typeWriter">frontend developer</span>
            </p>
          </div>
          <br></br>
          <div className="slideLeft">
            <p className="para">
              I have a strong understanding <br></br>Of modern JavaScript
              framework React <br></br>and I'm proficient in HTML And CSS
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
        <div className="image"></div>
      </div>
      <div className="line">Scroll</div>
    </section>
  );
}
