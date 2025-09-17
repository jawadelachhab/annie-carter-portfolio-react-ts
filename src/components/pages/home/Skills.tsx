import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaAngular,
  FaApple,
  FaAndroid,
} from "react-icons/fa6";

const skillsData = [
  {
    label: "HTML",
    Icon: FaHtml5,
    bgColor: "hsl(177, 39%, 72%)",
  },
  {
    label: "CSS",
    Icon: FaCss3,
    bgColor: "hsl(41, 99%, 64%)",
  },
  {
    label: "React JS",
    Icon: FaReact,
    bgColor: "hsl(19, 97%, 85%)",
  },
  {
    label: "Angular",
    Icon: FaAngular,
    bgColor: "hsl(221, 100%, 79%)",
  },
  {
    label: "iOS App",
    Icon: FaApple,
    bgColor: "hsl(76, 39%, 72%)",
  },
  {
    label: "App Dev",
    Icon: FaAndroid,
    bgColor: "hsl(245, 100%, 90%)",
  },
];


const Skills = () => {
  return (
    <section
      className="section skill"
      aria-labelledby="skill-label"
    >
      <div className="container">
        <div className="skill-content">
          <h2 className="section-title headline-md" id="skill-label">
            My Skills
          </h2>
          <ul className="skill-list" role="list">
            {skillsData.map(({  label, Icon, bgColor },index) => (
              <li key={index}  role="listitem">
                <div
                  className="card card-sm"
                  style={{ backgroundColor: bgColor }}
                  aria-label={`${label} skill`}
                >
                  <div className="card-media">
                    <Icon size={30} aria-hidden="true" focusable="false" />
                  </div>
                  <h3 className="card-title">{label}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <figure className="skill-banner">
          <img
            src="/assets/images/skill-banner.png"
            width={581}
            height={657}
            loading="lazy"
            alt="Annie Carter, the blonde, dressed in a green hoodie with a smile on her face"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default Skills;
