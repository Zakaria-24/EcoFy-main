import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <section className="bg-white ">
      <div
        className="container min-h-screen px-6 py-12 mx-auto flex items-end justify-end lg:gap-12"
        style={{
          backgroundImage: `url("https://i.ibb.co/XpsWdn1/NotFound.png")`,
        }}
      >
        <Link
          to="/"
          className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-green-900 rounded-lg shrink-0 sm:w-auto hover:bg-gray-600"
        >
          <div className="flex items-center gap-2">
            <FaArrowLeftLong />
            Take me home
          </div>
        </Link>
        {/* <div className="w-full lg:w-1/2">
          <div className="flex justify-end items-center mt-6 gap-x-3"></div>
          
        </div> */}
      </div>
    </section>
  );
};

export default NotFound;
