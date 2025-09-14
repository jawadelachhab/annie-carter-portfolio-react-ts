import { FaArrowRight } from "react-icons/fa6";
import { type TPortfolio } from "@/types/portfolio";
const PortfolioCard = ({
  image,
  alt,
  category,
  title,
  description,
  projectLink,
}: TPortfolio) => {
  return (
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
  );
};

export default PortfolioCard;
