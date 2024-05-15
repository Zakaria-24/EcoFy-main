import AllQueriesCard from "../components/AllQueriesCard";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const AllQueries = () => {
  const { loading } = useAuth();
  const [gridCols, setGridCols] = useState(3);
  console.log(gridCols);

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


  // Search for queries by Product Name
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  if (loading) return <Loading />;
  return (
    <>
      <div className=" mt-8 px-2 md:px-16 lg:px-32">
        <div className="px-6 m md:px-16  md:flex justify-center items-center">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className=" text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
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
            onClick={() => setGridCols(true)}
            className="btn btn-outline btn-accent mr-1 "
          >
            Columns_2
          </button>
          <button
            onClick={() => setGridCols(false)}
            className="btn btn-outline btn-accent"
          >
            Columns_3
          </button>
        </div>
      </div>
      <div
        className={`container mx-auto px-4 mb-16 gap-8 grid ${
          gridCols === true ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {data?.map((query) => (
          <AllQueriesCard key={query._id} query={query} />
        ))}
      </div>
    </>
  );
};

export default AllQueries;
