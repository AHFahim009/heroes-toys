import { Outlet } from "react-router-dom";
import NavBar from "../PAGES/SHARED/NavBar";
import Footer from "../PAGES/SHARED/Footer";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </>
  );
};

export default Layout;
