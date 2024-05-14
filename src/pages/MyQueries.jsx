import Banner from "../components/Banner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import MyQueryCard from "../components/MyQueryCard";
import Loading from "./Loading";

const MyQueries = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { user } = useAuth();
  const {
    data: myQueries = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myQuery"],
    queryFn: () => getMyQueries(),
  });
  // console.log(myQueries, isLoading);

  const getMyQueries = async () => {
    const { data } = await axios(
      `${baseUrl}/query/${user?.email}`,
      // for secure my personal data by using token
      { withCredentials: true }
    );
    // console.log(data);
    return data;
  };
  if (isLoading) return <Loading />;

  return (
    <div>
      {/* Query Banner */}
      {/* <Banner /> */}

      {myQueries ? (
        <>
          <Banner />
          <div className="container px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myQueries.map((myQuery) => (
              <MyQueryCard
                key={myQuery._id}
                myQuery={myQuery}
                refetch={refetch}
              />
            ))}
          </div>
        </>
      ) : (
        <div>
          <Banner />
        </div>
      )}

      {/* My Queries */}
      {/* <div className="container px-6 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myQueries.map((myQuery) => (
           <MyQueryCard key={myQuery._id} myQuery={myQuery} refetch={refetch}/>
        ))}
      </div> */}
    </div>
  );
};

export default MyQueries;
