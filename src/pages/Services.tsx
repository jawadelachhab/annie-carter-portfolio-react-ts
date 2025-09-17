import React from "react";
import {
  FaLaptopCode,
  FaMobileScreen,
  FaGlobe,
  FaChartColumn,
  FaChalkboard,
  FaCode,
} from "react-icons/fa6";
import "@/assets/css/pages/service.css";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

const servicesData: ServiceItem[] = [
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

const Services = () => {
  return (
    <section
      className="section service has-bg-image"
      aria-labelledby="service-label"
      style={{ backgroundImage: 'url("/assets/images/service-bg.png")' }}
    >
      <div className="container">
        <h2
          className="section-title headline-md text-center"
          id="service-label"
        >
          My Services
        </h2>

        <ul className="service-list" role="list">
          {servicesData.map(({ icon, title, description, bgColor }, index) => (
            <li key={index}>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
