import { motion } from "framer-motion";

const testimonialsData = [
  {
    id: "testi-1",
    imgSrc: "/images/testi-1.jpg",
    imgAlt: "Jennifer Lutheran",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    title: "CEO at pxdraft",
  },
  {
    id: "testi-2",
    imgSrc: "/images/testi-2.jpg",
    imgAlt: "Michael Smith",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Michael Smith",
    title: "CTO at WebWorks",
  },
  {
    id: "testi-3",
    imgSrc: "/images/testi-3.jpg",
    imgAlt: "Sarah Johnson",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Sarah Johnson",
    title: "Product Manager at DevCorp",
  },
  {
    id: "testi-4",
    imgSrc: "/images/testi-4.jpg",
    imgAlt: "David Lee",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "David Lee",
    title: "Designer at Creatives",
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

const Testimonials = () => {
  return (
    <motion.section
      className="section testi"
      aria-labelledby="testi-label"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2
          className="headline-md section-title text-center"
          id="testi-label"
        >
          Testimonials
        </h2>
        <motion.ul className="slider" role="list" variants={containerVariants}>
          {testimonialsData.map(
            ({ id, imgSrc, imgAlt, quote, name, title }) => (
              <motion.li
                key={id}
                className="slider-item card-container"
                role="listitem"
                variants={itemVariants}
              >
                <div className="card card-lg">
                  <figure className="card-media">
                    <img
                      src={imgSrc}
                      width={100}
                      height={100}
                      loading="lazy"
                      alt={imgAlt}
                      className="img-cover"
                    />
                  </figure>
                  <div className="card-content">
                    <blockquote className="body-sm">{quote}</blockquote>
                    <p className="client-name">{name}</p>
                    <p className="client-title">{title}</p>
                  </div>
                </div>
              </motion.li>
            )
          )}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Testimonials;
