import { Outlet } from "react-router-dom";
import Footer from "../share/Footer";
import Navbar from "../share/Navbar";

const Main = () => {
  return (
    <div className="px-4 container mx-auto">
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
