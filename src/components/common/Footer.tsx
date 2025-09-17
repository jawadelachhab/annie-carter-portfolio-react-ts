import {
  FaFacebookF,
  FaX,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: <FaFacebookF aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our Facebook page",
  },
  {
    icon: <FaX aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our X (formerly Twitter) profile",
  },
  {
    icon: <FaInstagram aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our Instagram profile",
  },
  {
    icon: <FaLinkedin aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our LinkedIn page",
  },
  {
    icon: <FaPinterest aria-hidden="true" focusable="false" />,
    url: "#",
    ariaLabel: "Visit our Pinterest board",
  },
];

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <ul className="social-list">
          {socialLinks.map(({ icon, url, ariaLabel }, index) => (
            <li key={index}>
              <a
                href={url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center">
          © {new Date().getFullYear()} copyright all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
