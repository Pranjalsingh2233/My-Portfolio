import "./Services.css";

export default function Services() {
  return (
    <section className="service" id="_service">
      <h1>My Services</h1>
      <div className="card-group">
        <div className="card">
          <img
            src="https://www.izeoninnovative.com/izeon/img/imgs/blog/ui.jpg"
            className="card-img-top"
            alt="ui/ux"
          />
          <div className="card-body">
            <h5 className="card-title">UI/UX Design</h5>
            <p className="card-text">
              I’m a passionate frontend developer focused on creating visually
              appealing and user-friendly interfaces. I have a keen eye for
              design and a deep understanding of user experience principles. I
              conduct user research. I combine technical expertise with
              user-centered design. This allows me to develop products that are
              not only visually stunning but also highly functional and
              engaging.
            </p>
          </div>
        </div>
        <div className="card">
          <img
            src="https://zingstudio.com.au/wp-content/uploads/2024/01/zing_studio_responsive_media.jpg"
            className="card-img-top"
            alt="responsive"
          />
          <div className="card-body">
            <h5 className="card-title">Responsive Design</h5>
            <p className="card-text">
              I have extensive experience in creating responsive websites that
              adapt seamlessly to different screen sizes and devices. I use
              techniques like media queries. I understand mobile-first design
              and optimize for touchscreens. I test and debug responsive designs
              to ensure they function properly on various devices and browsers.
            </p>
          </div>
        </div>
        <div className="card disappear">
          <img
            src="https://www.chlsoftech.com/images/UploadedImages/thumbs/0000198_website-maintenance.jpeg"
            className="card-img-top"
            alt="maintain"
          />
          <div className="card-body">
            <h5 className="card-title">Website maintenance</h5>
            <p className="card-text">
              I have experience maintaining complex websites, including
              e-commerce platforms. I can troubleshoot and debug code, ensure
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
