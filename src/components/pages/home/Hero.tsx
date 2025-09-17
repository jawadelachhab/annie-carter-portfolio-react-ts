import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="section hero"
      aria-label="Home section"
     
    >
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle" aria-label="Waving hand greeting">
            👋, My name is Annie Carter
          </p>
          <h1 className="headline-lg">I'm a Developer</h1>
          <p className="hero-text body-md">Based in Los Angeles, California.</p>
          <Link
            to="/"
            className="btn btn-primary"
            aria-label="Start working with Annie Carter"
          >
            Let's Start
          </Link>
        </div>

        <figure
          className="hero-banner"
        >
          <img
            src="/assets/images/hero-banner.png"
            width={680}
            height={645}
            alt="Annie Carter, the blonde, dressed in a green hoodie with a smile on her face"
            className="w-100"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
