import TinyBanner from "../components/TinyBanner";
import Carousel from "../components/header/Carousel";

const Home = () => {
  return (
    <div>
      {/* /Carousel */}
      <Carousel />

      {/* Home Banner */}
      <div className="container px-6 py-10 mx-auto">
        <TinyBanner />
      </div>

      {/* /Recent Quesries */}
      <div>
        <div className="flex justify-center items-center mb-10">
          <h1 className="font-bold">Recent Quesries</h1>
        </div>
      </div>

      {/* /2 Extra Section */}
    </div>
  );
};

export default Home;
