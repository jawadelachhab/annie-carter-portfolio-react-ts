import { motion } from "framer-motion";

const clientLogos = [
  {
    id: "client-1",
    src: "/images/client-1.svg",
    alt: "Logo of Client 1",
  },
  {
    id: "client-2",
    src: "/images/client-2.svg",
    alt: "Logo of Client 2",
  },
  {
    id: "client-3",
    src: "/images/client-3.svg",
    alt: "Logo of Client 3",
  },
  {
    id: "client-4",
    src: "/images/client-4.svg",
    alt: "Logo of Client 4",
  },
  {
    id: "client-5",
    src: "/images/client-5.svg",
    alt: "Logo of Client 5",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      duration: 0.6,
      bounce: 0.3,
    },
  },
};

const Clients = () => {
  return (
    <motion.section
      className="client"
      aria-labelledby="trusted-clients-heading"
      role="region"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <h2 id="trusted-clients-heading" className="sr-only">
          Trusted Clients
        </h2>

        <motion.ul className="slider" role="list" variants={containerVariants}>
          {clientLogos.map(({ id, src, alt }) => (
            <motion.li
              key={id}
              className="slider-item"
              role="listitem"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.img
                src={src}
                width={130}
                height={40}
                alt={alt}
                className="w-100"
                loading="lazy"
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Clients;
