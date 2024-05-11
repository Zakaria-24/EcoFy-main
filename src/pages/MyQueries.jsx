import Banner from "../components/Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import MyQueryCard from "../components/MyQueryCard";

const MyQueries = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { user } = useAuth();
  const { data: myQueries = [], isLoading, refetch } = useQuery({
    queryKey: ["myQuery"],
    queryFn: () => getMyQueries(),
  });
  // console.log(myQueries, isLoading);

  const getMyQueries = async () => {
    const { data } = await axios(`${baseUrl}/query/${user?.email}`);
    // console.log(data);
    return data;
  };
  if (isLoading) return <h1>data is loading..........</h1>;

  return (
    <div>
      {/* Query Banner */}
      <Banner />
      {/* My Queries */}
      <div className="container px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {myQueries.map((myQuery) => (
           <MyQueryCard key={myQuery._id} myQuery={myQuery} refetch={refetch}/>
        ))}
      </div>
    </div>
  );
};

export default MyQueries;
