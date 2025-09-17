import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components/common";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
