import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
// import Preloader from "../components/common/Preloader";
const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* <Preloader /> */}
      <Footer />
    </>
  );
};

export default MainLayout;
