
import Hero from '@/components/pages/home/Hero'
import Clients from "@/components/pages/home/Clients"
import About from '@/components/pages/home/About'
import Skills from '@/components/pages/home/Skills'
import Cta from '@/components/pages/home/Cta'
import Testimonials from '@/components/pages/home/Testimonials'
import "@/styles/main.css";

const Home = () => {
  return (
   <>
    <Hero/>
    <Clients/>
    <About/>
    <Skills/>
    <Cta/>
    <Testimonials/>
    </>
  )
}

export default Home