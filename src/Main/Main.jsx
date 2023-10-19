import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";


const Main = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto font-dmSans">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    <Footer></Footer>
    </div>
  );
};

export default Main;
