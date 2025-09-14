import { motion } from "framer-motion";
import { type TPortfolio } from "@/types/portfolio";
import PortfolioCard from "@/components/pages/portfolio/PortfolioCard";
import "@/styles/pages/portfolio.css";

const portfolioData: TPortfolio[] = [
  {
    image: "/images/portfolio-1.jpg",
    alt: "Website Design for Marketing Agency Startup",
    category: "Web Design",
    title: "Website Design for Marketing Agency Startup",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.",
    projectLink: "#",
  },
  {
    image: "/images/portfolio-2.jpg",
    alt: "E-commerce Web Platform for Lifestyle Brand",
    category: "Web Design",
    title: "E-commerce Web Platform for Lifestyle Brand",
    description:
      "Created a responsive online store and CMS backend, optimized for conversions and mobile traffic.",
    projectLink: "#",
  },
  {
    image: "/images/portfolio-3.jpg",
    alt: "Landing Page Design for SaaS Product",
    category: "Web Design",
    title: "Landing Page Design for SaaS Product",
    description:
      "Crafted high-converting landing pages with A/B testing and integrated analytics for performance tracking.",
    projectLink: "#",
  },
  {
    image: "/images/portfolio-4.jpg",
    alt: "Branding and Website for Creative Studio",
    category: "Web Design",
    title: "Branding and Website for Creative Studio",
    description:
      "Full design system and portfolio website for a visual design agency with animation support.",
    projectLink: "#",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
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

const Portfolio = () => {
  return (
    <motion.section
      className="section portfolio"
      aria-labelledby="portfolio-label"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2
          className="section-title headline-md text-center"
          id="portfolio-label"
        >
          Latest Projects
        </h2>

        <motion.ul className="portfolio-list" role="list" variants={containerVariants}>
          {portfolioData.map((portfolio, index) => (
            <motion.li key={index} variants={itemVariants}>
              <PortfolioCard {...portfolio} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Portfolio;
