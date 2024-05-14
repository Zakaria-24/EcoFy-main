// import TinyBanner from "../components/TinyBanner";
import { useQuery } from "@tanstack/react-query";
import Carousel from "../components/header/Carousel";
import axios from "axios";
import AllQueriesCard from "../components/AllQueriesCard";
import Loading from "./Loading";
import Section_1 from "../components/ExtraSection/Section_1";
import CustomerReviews from "../components/ExtraSection/CustomerReviews";

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
  if (isLoading) return <Loading />;

  return (
    <div>
      {/* /Carousel */}
      <Carousel />

      {/* /Recent Quesries */}
      <>
        <div className="flex justify-center items-center mb-10">
          <h1 className="font-bold">Recent Quesries</h1>
        </div>

        <div className="container  px-10 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {queries
            ?.map((query) => {
              return <AllQueriesCard key={query._id} query={query} />;
            })
            .slice(0, 6)}
          {/* <AllQueriesCard /> */}
        </div>
      </>

      {/* /2 Extra Section */}
      {/* section_1 */}
      <Section_1/>

      {/* Section_2 */}
<CustomerReviews/>

    </div>
  );
};

export default Home;
