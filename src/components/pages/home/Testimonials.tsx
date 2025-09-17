
const testimonialsData = [
  {
 
    imgSrc: "/assets/images/testi-1.jpg",
    imgAlt: "Jennifer Lutheran",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    title: "CEO at pxdraft",
  },
  {
   
    imgSrc: "/assets/images/testi-2.jpg",
    imgAlt: "Michael Smith",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Michael Smith",
    title: "CTO at WebWorks",
  },
  {
   
    imgSrc: "/assets/images/testi-3.jpg",
    imgAlt: "Sarah Johnson",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Sarah Johnson",
    title: "Product Manager at DevCorp",
  },
  {
    
    imgSrc: "/assets/images/testi-4.jpg",
    imgAlt: "David Lee",
    quote:
      "Dolor lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "David Lee",
    title: "Designer at Creatives",
  },
];


const Testimonials = () => {
  return (
    <section
      className="section testi"
      aria-labelledby="testi-label"
     
    >
      <div className="container">
        <h2
          className="headline-md section-title text-center"
          id="testi-label"
        >
          Testimonials
        </h2>
        <ul className="slider" role="list" >
          {testimonialsData.map(
            ({  imgSrc, imgAlt, quote, name, title },index) => (
              <li
                key={index}
                className="slider-item card-container"
                role="listitem"
                
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
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
