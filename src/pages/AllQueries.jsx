import AllQueriesCard from "../components/AllQueriesCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
// import Loading from "./Loading";

const AllQueries = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { data: queries = [], isLoading } = useQuery({
    queryKey: ["queryData"],
    queryFn: () => getQueries(),
  });
  console.log(queries, isLoading);

  const getQueries = async () => {
    const { data } = await axios(`${baseUrl}/queries`);
    // console.log(data);
    return data;
  };
  if (isLoading) return <Loading/>;
  return (
    <>
    <div className="flex items-center justify-center font-bold text-2xl mb-4 pt-10">
          <h1> View All Query</h1>
          <p></p>
        </div>
    
    <div className="container px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      
      {queries?.map((query) => {
        return <AllQueriesCard key={query._id} query={query} />;
      })}
      {/* <AllQueriesCard /> */}
    </div>
    </>
  );
};

export default AllQueries;
