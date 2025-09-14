import { Routes, Route , useLocation  } from "react-router-dom";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";
import MainLayout from "@/layouts/MainLayout";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
  return (
    <AnimatePresence mode="wait">
       <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
