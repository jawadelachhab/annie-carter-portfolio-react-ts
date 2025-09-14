import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      bounce: 0.3,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, // repeat animation while hovered
    },
  },
};

const Cta = () => {
  return (
    <motion.section
      className="cta"
      aria-labelledby="cta-heading"
      role="region"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2 className="title-lg" id="cta-heading">
          Interested in working with me?
        </h2>
        <motion.div whileHover="hover" variants={buttonVariants}>
          <Link
            to="/contact"
            className="btn btn-tertiary"
            aria-label="Contact me now via the contact page"
          >
            Contact Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cta;
