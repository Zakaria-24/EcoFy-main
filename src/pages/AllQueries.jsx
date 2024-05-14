import AllQueriesCard from "../components/AllQueriesCard";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const AllQueries = () => {
  const { loading } = useAuth();
  const [gridCols, setGridCols] = useState(3);
  // console.log(gridCols);

  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {

  const getData = async () => {
    try {
      const { data } = await axios(`${baseUrl}/queries?search=${search}`);
      setData(data);
    } catch (error) {
      // console.error("Error fetching data:", error);
    }
  };
  getData();
}, [baseUrl, search]);

  // console.log(data);


  // const { data: queries = [], isLoading } = useQuery({
  //   queryKey: ["queryData"],
  //   queryFn: () => getQueries(),
  // });
  // // console.log(queries, isLoading);

  // const getQueries = async () => {
  //   // for search : ?.search=${search}
  //   const { data } = await axios(`${baseUrl}/queries`);
  //   // console.log(data);
  //   return data;
  // };
  // if (isLoading) return <Loading />;

  // Search for queries by Product Name
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };
  // console.log(search);

  const handleGridLayout = (cols) => {
    setGridCols(cols);
  };
  
  if (loading) return <Loading />;
  return (
    <div className=" my-8 px-32">
      <div className="px-10 flex justify-center items-center ">
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Product Name"
              aria-label="Enter Product Name"
            />

            <button className=" px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>

        <button
          onClick={() => handleGridLayout(2)}
          className="btn btn-outline btn-accent mr-1 "
        >
          Columns_2
        </button>
        <button
          onClick={() => handleGridLayout(3)}
          className="btn btn-outline btn-accent"
        >
          Columns_3
        </button>
      </div>

      <div className={`px-10 py-10 mx-auto grid grid-cols-${gridCols} gap-8`}>
        {data.map((query) => {
          return <AllQueriesCard key={query._id} query={query} />;
        })}
      </div>
    </div>
  );
};

export default AllQueries;
