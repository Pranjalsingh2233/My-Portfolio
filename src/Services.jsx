import "./Services.css";

export default function Services() {
  return (
    <section className="service" id="_service">
      <h1>My Services</h1>
      <div className="card-grp">
        <div className="card" style={{ width: "20rem" }}>
          <img src="/UI-UX-Designer.jpg" className="card-img-top" alt="ui/ux" />
          <div className="card-body">
            <h5 className="card-title">UI/UX Design</h5>
            <p className="card-text">
              I’m a passionate frontend developer focused on creating visually
              appealing, user-friendly, and responsive interfaces. With a keen
              eye for design and a deep understanding of user experience
              principles, I conduct user research to ensure products are both
              functional and engaging across all devices. I combine technical
              expertise with user-centered design to deliver experiences that
              are visually stunning and highly responsive.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "20rem" }}>
          <img src="/backend.webp" className="card-img-top" alt="backend" />
          <div className="card-body">
            <h5 className="card-title">Backend Development</h5>
            <p className="card-text">
              I specialize in building robust and scalable server-side
              applications using Node.js and Express.js. With expertise in
              database management through MongoDB, I ensure efficient data
              handling and security. I focus on creating APIs that are both
              performant and secure, delivering seamless integration with
              front-end systems. My goal is to build backend solutions that are
              reliable, maintainable, and scalable.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "20rem" }}>
          <img
            src="/Image-Maintenance.jpg"
            className="card-img-top"
            alt="maintain"
          />
          <div className="card-body">
            <h5 className="card-title">Website maintenance</h5>
            <p className="card-text">
              I have experience maintaining complex websites, including
              e-commerce platforms, and have worked on the DTBX project at my
              previous company. I can troubleshoot and debug code, ensure
              optimal performance, and implement security updates. I understand
              CMS and can manage website content and updates. I stay up-to-date
              with web technologies to improve website functionality and user
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
