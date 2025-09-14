import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaApple,
  FaAndroid,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const skillsData = [
  {
    id: "html",
    label: "HTML",
    Icon: FaHtml5,
    bgColor: "hsl(177, 39%, 72%)",
  },
  {
    id: "css",
    label: "CSS",
    Icon: FaCss3,
    bgColor: "hsl(41, 99%, 64%)",
  },
  {
    id: "react",
    label: "React JS",
    Icon: FaReact,
    bgColor: "hsl(19, 97%, 85%)",
  },
  {
    id: "angular",
    label: "Angular",
    Icon: FaAngular,
    bgColor: "hsl(221, 100%, 79%)",
  },
  {
    id: "ios",
    label: "iOS App",
    Icon: FaApple,
    bgColor: "hsl(76, 39%, 72%)",
  },
  {
    id: "android",
    label: "App Dev",
    Icon: FaAndroid,
    bgColor: "hsl(245, 100%, 90%)",
  },
];

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const Skills = () => {
  return (
    <motion.section
      className="section skill"
      aria-labelledby="skill-label"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <div className="skill-content">
          <h2 className="section-title headline-md" id="skill-label">
            My Skills
          </h2>
          <motion.ul className="skill-list" variants={containerVariants} role="list">
            {skillsData.map(({ id, label, Icon, bgColor }) => (
              <motion.li key={id} variants={itemVariants} role="listitem">
                <div
                  className="card card-sm"
                  style={{ backgroundColor: bgColor }}
                  aria-label={`${label} skill`}
                >
                  <div className="card-media">
                    <Icon size={30} aria-hidden="true" focusable="false" />
                  </div>
                  <h3 className="card-title">{label}</h3>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <figure className="skill-banner">
          <img
            src="/images/skill-banner.png"
            width={581}
            height={657}
            loading="lazy"
            alt="Annie Carter, the blonde, dressed in a green hoodie with a smile on her face"
            className="w-100"
          />
        </figure>
      </div>
    </motion.section>
  );
};

export default Skills;
