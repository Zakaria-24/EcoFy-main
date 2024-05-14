import { Outlet } from "react-router-dom";
import Footer from "../share/Footer";
import Navbar from "../share/Navbar";

const Main = () => {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Outlate */}
      <div>
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
