import {
  Hero,
  Clients,
  About,
  Skills,
  Cta,
  Testimonials,
} from "@/components/pages/home";
import "@/assets/css/main.css";
const Home = () => {
  return (
    <>
      <Hero />
      <Clients />
      <About />
      <Skills />
      <Cta />
      <Testimonials />
    </>
  );
};

export default Home;
