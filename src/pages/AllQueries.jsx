import AllQueriesCard from "../components/AllQueriesCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
  // if (isLoading) return <h1>data is loading..........</h1>;
  return (
    <div className="container px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {queries.map((query) => {
        <AllQueriesCard key={query._id} query={query} />;
      })}
      {/* <AllQueriesCard /> */}
    </div>
  );
};

export default AllQueries;
