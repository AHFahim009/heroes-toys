import { Outlet } from "react-router-dom";
import NavBar from "../PAGES/SHARED/NavBar";
import Footer from "../PAGES/SHARED/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
