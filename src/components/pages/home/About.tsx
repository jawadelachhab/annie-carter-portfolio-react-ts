import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="section about" aria-labelledby="about-heading">
      <div className="container">
        {/* Profile Image */}
        <figure className="about-banner">
          <img
            src="/assets/images/about-banner.png"
            width={580}
            height={554}
            loading="lazy"
            alt="Portrait of Annie Carter, smiling and wearing black"
            className="w-100"
          />
        </figure>

        {/* Text Content */}
        <div className="about-content">
          <h2 className="title-lg" id="about-heading">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience.
          </h2>

          <p className="body-md section-text">
            I'm a Freelancer Front-end Developer with over 3 years of
            experience. I'm from San Francisco. I code and create web elements
            for amazing people around the world. I like working with new people.
            New people, new experiences.
          </p>

          {/* Stats */}
          <ul className="about-list">
            <li>
              <p className="list-text">
                <strong className="strong title-md">285+</strong> Projects
                Completed
              </p>
            </li>
            <li>
              <p className="list-text">
                <strong className="strong title-md">190+</strong> Happy Clients
              </p>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="wrapper">
            <Link
              to="contact"
              className="btn btn-primary"
              aria-label="Contact me via the contact page"
            >
              Contact Me
            </Link>
            <Link
              to="portfolio"
              className="btn btn-secondary"
              aria-label="View my portfolio projects"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
