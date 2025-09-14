import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      bounce: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, duration: 0.6, bounce: 0.3 },
  },
};

const About = () => {
  return (
    <motion.section
      className="section about"
      aria-labelledby="about-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        {/* Profile Image */}
        <motion.figure className="about-banner" variants={itemVariants}>
          <img
            src="/images/about-banner.png"
            width={580}
            height={554}
            loading="lazy"
            alt="Portrait of Annie Carter, smiling and wearing black"
            className="w-100"
          />
        </motion.figure>

        {/* Text Content */}
        <motion.div className="about-content" variants={itemVariants}>
          <h2 className="title-lg" id="about-heading">
            I'm a Freelancer Front-end Developer with over 3 years of experience.
          </h2>

          <p className="body-md section-text">
            I'm a Freelancer Front-end Developer with over 3 years of experience.
            I'm from San Francisco. I code and create web elements for amazing people
            around the world. I like working with new people. New people, new experiences.
          </p>

          {/* Stats */}
          <ul className="about-list">
            <motion.li variants={itemVariants}>
              <p className="list-text">
                <strong className="strong title-md">285+</strong> Projects Completed
              </p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <p className="list-text">
                <strong className="strong title-md">190+</strong> Happy Clients
              </p>
            </motion.li>
          </ul>

          {/* CTA Buttons */}
          <motion.div className="wrapper" variants={itemVariants}>
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
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
