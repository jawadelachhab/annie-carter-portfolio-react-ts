const clientLogos = [
  {
    src: "/assets/images/client-1.svg",
    alt: "Logo of Client 1",
  },
  {
    src: "/assets/images/client-2.svg",
    alt: "Logo of Client 2",
  },
  {
    src: "/assets/images/client-3.svg",
    alt: "Logo of Client 3",
  },
  {
    src: "/assets/images/client-4.svg",
    alt: "Logo of Client 4",
  },
  {
    src: "/assets/images/client-5.svg",
    alt: "Logo of Client 5",
  },
];

const Clients = () => {
  return (
    <section
      className="client"
      aria-labelledby="trusted-clients-heading"
      role="region"
    >
      <div className="container">
        <h2 id="trusted-clients-heading" className="sr-only">
          Trusted Clients
        </h2>

        <ul className="slider" role="list">
          {clientLogos.map(({ src, alt }, index) => (
            <li key={index} className="slider-item" role="listitem">
              <img
                src={src}
                width={130}
                height={40}
                alt={alt}
                className="w-100"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
