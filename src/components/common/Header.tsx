import { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

type NavLink = {
  id: string;
  label: string;
  path: string;
};

const navLinks: NavLink[] = [
  { id: "home", label: "Home", path: "/" },
  { id: "services", label: "Services", path: "/services" },
  { id: "portfolio", label: "Portfolio", path: "/portfolio" },
  { id: "contact", label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleNavbar = () => {
    setNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${location.pathname === "/contact" ? "contact-bg" : ""} ${
        scrolled ? "active" : ""
      }`}
      role="banner"
    >
      <div className="container">
        <Link to="/" className="logo" aria-label="Home">
          <img
            src="/assets/images/logo.svg"
            width={151}
            height={28}
            alt="Annie Home Logo"
          />
        </Link>

        {/* Navigation */}
        <nav
          id="main-navigation"
          className={`navbar ${navOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <ul className="navbar-list">
            {navLinks.map(({ id, label, path }) => (
              <li key={id} className="navbar-item">
                <Link
                  to={path}
                  className={`label-lg navbar-link has-after ${
                    location.pathname === path ? "active" : ""
                  }`}
                  aria-current={location.pathname === path ? "page" : undefined}
                  onClick={() => setNavOpen(false)} // close menu on nav click
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="btn btn-primary"
          aria-label="Contact us now"
          onClick={() => setNavOpen(false)} // close menu if open
        >
          Contact Now
        </Link>

        {/* Menu toggle button */}
        <button
          className="nav-toggle-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
          aria-controls="main-navigation"
          onClick={toggleNavbar}
        >
          <FaAlignJustify aria-hidden="true" focusable="false" />
        </button>
      </div>
    </header>
  );
};

export default Header;
