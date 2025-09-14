import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import "@/styles/pages/contact.css";

const contactDetails = [
  {
    id: "phone",
    label: "Phone",
    value: "+01 123 654 8096",
    href: "tel:+011236548096",
    icon: <FaPhone size={30} aria-hidden="true" />,
    bgColor: "hsl(177, 39%, 72%)",
  },
  {
    id: "email",
    label: "Email",
    value: "info@domainname.com",
    href: "mailto:info@domainname.com",
    icon: <FaEnvelope size={30} aria-hidden="true" />,
    bgColor: "hsl(41, 99%, 64%)",
  },
  {
    id: "location",
    label: "Visit My Studio",
    value: "Warnwe Park Streetperrine, FL 33157 New York City",
    icon: <FaLocationDot size={30} aria-hidden="true" />,
    bgColor: "hsl(19, 97%, 85%)",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, duration: 0.6, bounce: 0.3 },
  },
};

const Contact = () => {
  return (
    <motion.section
      className="section contact has-bg-image"
      aria-labelledby="contact-label"
      style={{ backgroundImage: 'url("/images/contact-bg.png")' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        {/* Contact Form */}
        <form
          className="contact-form"
          aria-labelledby="contact-label"
          aria-describedby="contact-desc"
        >
          <h2 className="headline-sm" id="contact-label">
            Get in touch
          </h2>
          <p className="contact-text body-md" id="contact-desc">
            Our friendly team would love to hear from you.
          </p>

          <div className="wrapper">
            <div>
              <label htmlFor="name" className="label">
                First name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name *"
                required
                className="input-field"
              />
            </div>

            <div>
              <label htmlFor="email" className="label">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email *"
                required
                className="input-field"
              />
            </div>
          </div>

          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject *"
            className="input-field"
          />

          <label htmlFor="message" className="label">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message *"
            required
            className="input-field"
          />

          <button
            type="submit"
            className="btn btn-tertiary"
            aria-label="Send your message"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <motion.div className="contact-content">
          <motion.ul
            className="contact-list"
            aria-label="Contact Information"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactDetails.map(({ id, label, value, href, icon, bgColor }) => (
              <motion.li key={id} className="contact-item" variants={itemVariants}>
                <div className="item-icon" style={{ backgroundColor: bgColor }}>
                  {icon}
                </div>
                <div>
                  <p className="label-lg">{label}</p>
                  {href ? (
                    <a href={href} className="body-lg">
                      {value}
                    </a>
                  ) : (
                    <address className="body-lg">{value}</address>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
