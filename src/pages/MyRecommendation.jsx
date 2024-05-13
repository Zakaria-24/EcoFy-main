import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import Loading from "./Loading";
// import { AiTwotoneDelete } from "react-icons/ai";

const MyRecommendation = () => {
  const { user } = useAuth();
  const baseUrl = import.meta.env.VITE_API_URL;
  const {
    data: recommendations = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["recommendationData"],
    // enabled: !!user?.email,
    queryFn: async () => await getRecommendation(),
  });
  // console.log(recommendations);
  // console.log(user);
  const getRecommendation = async () => {
    const { data } = await axios(
      `${baseUrl}/myRecommendations/${user?.email}`
    );
    // console.log(data);
    return data;
  };
  if (isLoading) return <Loading />;

  const handleDelelteRecommendation = async (id) => {
    console.log(id, "delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Recommendation!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/recommendation/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your recommendation has been deleted.",
          icon: "success",
        });
        // for update ui(doing reload)
        refetch();
      }
    });
  };

  return (
    <div className=" py-10">
      <div className="container border-2 border-sky-200  p-2 mx-auto sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight underline">
          My Recommendation:{recommendations?.length}
        </h2>
        <div className="flex flex-col overflow-x-auto text-xs">
          <div className="flex text-left dark:bg-gray-300">
            <div className="w-32 px-2 py-3 sm:p-3 font-extrabold text-md ">
              Query P.Name
            </div>
            <div className="w-32 px-2 py-3 sm:p-3 font-extrabold text-md ">
              Recommend P.Name
            </div>
            <div className="flex-1 px-2 py-3 sm:p-3 font-extrabold text-md">
              Recommendation Reason
            </div>
            <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block">
              Delete
            </div>
          </div>

          {recommendations.map((recommendation) => {
            return (
              <div
                key={recommendation._id}
                className="flex border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
              >
                <div className="w-32 px-2 py-3 sm:p-3 font-bold">
                  <h1>{recommendation?.product_name}</h1>
                </div>
                <div className="w-32 px-2 py-3 sm:p-3 font-bold">
                  <h1>{recommendation?.Recommended_Name}</h1>
                </div>
                <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto font-semibold">
                  <p>{recommendation?.Recommendation_Reason}</p>
                </div>
                <div className="hidden w-24 px-2 py-3 text-right sm:p-3 sm:block dark:text-gray-600">
                  <button
                    onClick={() =>
                      handleDelelteRecommendation(recommendation?._id)
                    }
                    className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyRecommendation;
