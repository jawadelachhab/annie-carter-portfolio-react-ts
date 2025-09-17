import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <section className="cta" aria-labelledby="cta-heading" role="region">
      <div className="container">
        <h2 className="title-lg" id="cta-heading">
          Interested in working with me?
        </h2>
        <div>
          <Link
            to="/contact"
            className="btn btn-tertiary"
            aria-label="Contact me now via the contact page"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
