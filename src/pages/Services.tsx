import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileScreen,
  FaGlobe,
  FaChartColumn,
  FaChalkboard,
  FaCode,
} from "react-icons/fa6";
import "@/styles/pages/service.css";
import { type TService } from "@/types/service";
import ServiceCard from "@/components/pages/services/ServiceCard";

const servicesData: TService[] = [
  {
    icon: <FaMobileScreen size={30} aria-hidden="true" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "hsl(177, 39%, 72%)",
  },
  {
    icon: <FaLaptopCode size={30} aria-hidden="true" />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "hsl(41, 99%, 64%)",
  },
  {
    icon: <FaGlobe size={30} aria-hidden="true" />,
    title: "SEO Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "hsl(19, 97%, 85%)",
  },
  {
    icon: <FaChalkboard size={30} aria-hidden="true" />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "hsl(221, 100%, 79%)",
  },
  {
    icon: <FaCode size={30} aria-hidden="true" />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "hsl(76, 39%, 72%)",
  },
  {
    icon: <FaChartColumn size={30} aria-hidden="true" />,
    title: "SEO Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bgColor: "hsl(245, 100%, 90%)",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      duration: 0.7,
      bounce: 0.3,
    },
  },
};

const Services = () => {
  return (
    <motion.section
      className="section service has-bg-image"
      aria-labelledby="service-label"
      style={{ backgroundImage: 'url("/images/service-bg.png")' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2
          className="section-title headline-md text-center"
          id="service-label"
        >
          My Services
        </h2>

        <motion.ul className="service-list" role="list" variants={containerVariants}>
          {servicesData.map((service, index) => (
            <motion.li key={index} variants={itemVariants}>
              <ServiceCard {...service} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Services;
