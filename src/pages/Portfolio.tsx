import { FaArrowRight } from "react-icons/fa6";
import "@/assets/css/pages/portfolio.css";

interface PortfolioItem {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  projectLink: string;
}

const portfolioData: PortfolioItem[] = [
  {
    image: "/assets/images/portfolio-1.jpg",
    alt: "Website Design for Marketing Agency Startup",
    category: "Web Design",
    title: "Website Design for Marketing Agency Startup",
    description:
      "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.",
    projectLink: "#",
  },
  {
    image: "/assets/images/portfolio-2.jpg",
    alt: "E-commerce Web Platform for Lifestyle Brand",
    category: "Web Design",
    title: "E-commerce Web Platform for Lifestyle Brand",
    description:
      "Created a responsive online store and CMS backend, optimized for conversions and mobile traffic.",
    projectLink: "#",
  },
  {
    image: "/assets/images/portfolio-3.jpg",
    alt: "Landing Page Design for SaaS Product",
    category: "Web Design",
    title: "Landing Page Design for SaaS Product",
    description:
      "Crafted high-converting landing pages with A/B testing and integrated analytics for performance tracking.",
    projectLink: "#",
  },
  {
    image: "/assets/images/portfolio-4.jpg",
    alt: "Branding and Website for Creative Studio",
    category: "Web Design",
    title: "Branding and Website for Creative Studio",
    description:
      "Full design system and portfolio website for a visual design agency with animation support.",
    projectLink: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="section portfolio" aria-labelledby="portfolio-label">
      <div className="container">
        <h2
          className="section-title headline-md text-center"
          id="portfolio-label"
        >
          Latest Projects
        </h2>

        <ul className="portfolio-list" role="list">
          {portfolioData.map(
            (
              { image, alt, category, title, description, projectLink },
              index
            ) => (
              <li key={index}>
                <li role="listitem">
                  <article className="portfolio-card" aria-label={title}>
                    <div className="card-banner img-holder">
                      <img
                        src={image}
                        width="800"
                        height="540"
                        loading="lazy"
                        alt={alt}
                        className="img-cover"
                      />
                      <a
                        href={projectLink}
                        className="btn-icon"
                        aria-label={`More about ${title}`}
                      >
                        <FaArrowRight aria-hidden="true" />
                      </a>
                    </div>

                    <div className="card-content">
                      <span className="chip label-md">{category}</span>
                      <h3 className="title-md">{title}</h3>
                      <p className="card-text">{description}</p>
                      <a
                        href={projectLink}
                        className="btn btn-primary"
                        aria-label={`View project: ${title}`}
                      >
                        View Project
                      </a>
                    </div>
                  </article>
                </li>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
