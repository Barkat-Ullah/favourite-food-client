import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
// import { useContext } from "react";
// import { AuthContext } from "../Context/AuthProvider";


const Main = () => {
  
  return (
    <div>
     
      <div className="max-w-6xl mx-auto font-dmSans overflow-x-hidden">
     
       <div className="sticky top-0 z-10"><Navbar></Navbar></div>

        <Outlet></Outlet>
      </div>
    <Footer></Footer>
    </div>
  );
};

export default Main;
