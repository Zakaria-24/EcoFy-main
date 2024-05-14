import AllQueriesCard from "../components/AllQueriesCard";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import Loading from "./Loading";
import { useEffect, useState } from "react";

const AllQueries = () => {
  const [search, setSearch] = useState("");
const [ data, setData] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${baseUrl}/queries?search=${search}`);
      setData(data)
    };
    getData();
  }, [baseUrl, search]);

  console.log(data);



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

  console.log(search);

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

        <button className="btn btn-outline btn-accent mr-1">Grid_2</button>
        <button className="btn btn-outline btn-accent">Grid_3</button>
      </div>
      {/* <div className="px-6  pt-10">
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                onClick={handleSearch}
                type="button"
                title="search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              placeholder="Search..."
              className="font-bold w-40 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50 focus:dark:border-violet-600"
            />
          </div>
        </fieldset>
      </div> */}

      <div className=" px-10 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data?.map((query) => {
          return <AllQueriesCard key={query._id} query={query} />;
        })}
        {/* <AllQueriesCard /> */}
      </div>
    </div>
  );
};

export default AllQueries;
