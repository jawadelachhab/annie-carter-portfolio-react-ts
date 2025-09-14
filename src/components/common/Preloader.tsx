import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      document.body.classList.add("loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`preloader ${isLoaded ? "loaded" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy={!isLoaded}
    >
      <div className="preloader-circle" aria-hidden="true" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Preloader;
