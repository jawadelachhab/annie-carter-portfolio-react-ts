import { type TService } from "@/types/service";

const ServiceCard = ({ icon, title, description, bgColor }: TService) => {
  return (
    <li className="card-container" role="listitem">
      <article
        className="card card-md"
        style={{ backgroundColor: bgColor }}
        aria-label={title}
      >
        <div className="card-media">{icon}</div>
        <div>
          <h3 className="card-title title-sm">{title}</h3>
          <p className="body-sm">{description}</p>
        </div>
      </article>
    </li>
  );
};

export default ServiceCard;
