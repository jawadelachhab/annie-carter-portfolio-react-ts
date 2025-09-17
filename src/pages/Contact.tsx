import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import "@/assets/css/pages/contact.css";

const contactDetails = [
  {
  
    label: "Phone",
    value: "+01 123 654 8096",
    href: "tel:+011236548096",
    icon: <FaPhone size={30} aria-hidden="true" />,
    bgColor: "hsl(177, 39%, 72%)",
  },
  {
  
    label: "Email",
    value: "info@domainname.com",
    href: "mailto:info@domainname.com",
    icon: <FaEnvelope size={30} aria-hidden="true" />,
    bgColor: "hsl(41, 99%, 64%)",
  },
  {
    label: "Visit My Studio",
    value: "Warnwe Park Streetperrine, FL 33157 New York City",
    icon: <FaLocationDot size={30} aria-hidden="true" />,
    bgColor: "hsl(19, 97%, 85%)",
  },
];


const Contact = () => {
  return (
    <section
      className="section contact has-bg-image"
      aria-labelledby="contact-label"
      style={{ backgroundImage: 'url("/assets/images/contact-bg.png")' }}
     
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
        <div className="contact-content">
          <ul
            className="contact-list"
            aria-label="Contact Information"
            
          >
            {contactDetails.map(({ label, value, href, icon, bgColor },index) => (
              <li key={index} className="contact-item" >
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
