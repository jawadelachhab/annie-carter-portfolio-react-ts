import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="section hero"
      aria-label="Home section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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

        <motion.figure
          className="hero-banner"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="/images/hero-banner.png"
            width={680}
            height={645}
            alt="Annie Carter, the blonde, dressed in a green hoodie with a smile on her face"
            className="w-100"
            loading="lazy"
          />
        </motion.figure>
      </div>
    </motion.section>
  );
};

export default Hero;
