import AllQueriesCard from "../components/AllQueriesCard";
import axios from "axios";
import Loading from "./Loading";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

export const AllQueries = () => {
  const { loading } = useAuth();
  const [gridCols, setGridCols] = useState(3);
  // console.log(gridCols);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(
          `${baseUrl}/queries?page=${currentPage}&size=${itemsPerPage}&search=${search}`
        );
        setData(data);
      } catch (error) {
        // console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [baseUrl, currentPage, itemsPerPage, search]);

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(`${baseUrl}/queries-count?search=${search}`);
      setCount(data.count);
    };
    getCount();
  }, [baseUrl, search]);

  console.log(count);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);
  console.log(numberOfPages);
  console.log(pages);

  //  handle pagination button
  const handlePaginationButton = (value) => {
    // console.log(value)
    setCurrentPage(value);
  };

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

      {/* Pagination Section */}
      <div className="flex justify-center mt-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};
