import {
  FaFacebookF,
  FaX,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: "facebook",
    icon: <FaFacebookF aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our Facebook page",
  },
  {
    id: "x",
    icon: <FaX aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our X (formerly Twitter) profile",
  },
  {
    id: "instagram",
    icon: <FaInstagram aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our Instagram profile",
  },
  {
    id: "linkedin",
    icon: <FaLinkedin aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our LinkedIn page",
  },
  {
    id: "pinterest",
    icon: <FaPinterest aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our Pinterest board",
  },
];

// Animation variants for icons
const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring" as const, stiffness: 100 },
  }),
  hover: { scale: 1.2, transition: { type: "spring" as const, stiffness: 300 } },
};

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <ul className="social-list" style={{ display: "flex", gap: "1rem" }}>
          {socialLinks.map(({ id, icon, url, ariaLabel }, i) => (
            <motion.li
              key={id}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={iconVariants}
              style={{ listStyle: "none" }}
            >
              <a
                href={url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                {icon}
              </a>
            </motion.li>
          ))}
        </ul>
        <p className="text-center" style={{ marginTop: "1rem" }}>
          © {new Date().getFullYear()} copyright all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
