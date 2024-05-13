// import TinyBanner from "../components/TinyBanner";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../components/header/Carousel";
import axios from "axios";
import AllQueriesCard from "../components/AllQueriesCard";
import Loading from "./Loading";

const Home = () => {

  const baseUrl = import.meta.env.VITE_API_URL;
  const { data: queries = [], isLoading } = useQuery({
    queryKey: ["queryData"],
    queryFn: () => getQueries(),
  });
  // console.log(queries, isLoading);

  const getQueries = async () => {
    const { data } = await axios(`${baseUrl}/queries`);
    // console.log(data);
    return data;
  };
  if (isLoading) return <Loading/>;

  return (
    <div>
      {/* /Carousel */}
      <Carousel />

      {/* Home Banner */}
      {/* <div className="container px-6 py-10 mx-auto">
        <TinyBanner />
      </div> */}

      {/* /Recent Quesries */}
      <div>
        <div className="flex justify-center items-center mb-10">
          <h1 className="font-bold">Recent Quesries</h1>
        </div>

        <div className="container px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {queries?.map((query) => {
        return <AllQueriesCard key={query._id} query={query} />;
      }).slice(0,6)}
      {/* <AllQueriesCard /> */}
    </div>

      </div>

      {/* /2 Extra Section */}
    </div>
  );
};

export default Home;
