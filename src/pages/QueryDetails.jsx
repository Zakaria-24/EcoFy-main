import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import RecommendationFormCard from "../components/RecommendationFormCard";

const QueryDetails = () => {
  // const { user } = useAuth();
  const navigate = useNavigate();
  const details = useLoaderData();
  // console.log(details);
  
  const {id: queryId} = useParams();
  const {
    name,
    photo,
    product_img_URl,
    product_name,
    brand_name,
    query_title,
    description,
    recommendationCount,
    dateTime,
  } = details.queryDetails;
  // console.log(details.recommendatoin);

  return (
    <div className="container px-10 py-10 mx-auto">
      {/* details */}
      <>
        <div className=" flex items-center justify-center font-bold text-2xl mb-4">
          <h1> View Query Details</h1>
          <p></p>
        </div>
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex items-center justify-between p-3">
            <div className="flex space-x-4">
              <img
                alt=""
                src={photo}
                className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
              />
              <div className="flex flex-col space-y-1">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-sm font-semibold"
                >
                  {name}
                </a>
                <span className="text-xs dark:text-gray-600">{dateTime}</span>
              </div>
            </div>
          </div>
          <img
            src={product_img_URl}
            alt=""
            className="object-cover object-center w-full h-96 dark:bg-gray-500"
          />
          <div className="p-3">
            <div className="flex flex-wrap items-center pt-3 pb-1">
              <div className="card-body">
                <h2 className="card-title text-neutral">
                  {query_title}
                  <div className="badge badge-secondary">
                    Recommendation: {recommendationCount}
                  </div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{product_name}</div>
                  <div className="badge badge-outline">{brand_name}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3"></div>
              <button
                onClick={() => navigate(-1 || "/")}
                className="flex items-center justify-center  px-4 transition-colors duration-200 bg-sky-400 text-white border rounded-lg gap-x-2 sm:w-auto   hover:bg-slate-500 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span className="p-2">Go Back</span>
              </button>
            </div>
          </div>
        </div>
      </>

      {/* REcommandation form */}
      <>
        <div className="flex items-center justify-center font-bold text-2xl mt-16">
          <h1>Recommend for better ONE</h1>
          <p></p>
        </div>
        <RecommendationFormCard queryId={queryId} />
      </>

      {/* All Recommendations/comment for that particular query */}
      <>
        <div className="flex items-center justify-center font-bold text-2xl mt-16">
          <h1>Read all Recommend: {details.recommendatoin?.length}</h1>
          <p></p>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 mt-10">
          {details.recommendatoin?.map((comment) => {
            return (
              <div
                key={comment._id}
                className="bg-cyan-50 gap-8 flex flex-col max-w-lg p-6 overflow-hidden rounded-lg  dark:bg-gray-50 dark:text-gray-800"
              >
                <div className="flex space-x-4">
                  <img
                    alt=""
                    src={comment?.recommenderPhoto}
                    className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                  />
                  <div className="flex flex-col space-y-1">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold"
                    >
                      {comment?.recommenderName}
                    </a>
                    <span className="text-xs dark:text-gray-600">
                      {comment?.dateTime}
                    </span>
                  </div>
                </div>

                <div>
                  <img
                    src={comment?.Recommended_Image_URL}
                    alt=""
                    className="object-cover object-center w-full rounded-md h-36 dark:bg-gray-500"
                  />
                  <div className="mt-6 mb-2">
                    {/* <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                Quisque
              </span> */}
                    <h2 className="text-xl font-semibold tracking-wide">
                      {comment?.Recommended_Name}
                    </h2>
                  </div>
                  <p className="dark:text-gray-800">
                    {comment?.Recommendation_Reason}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default QueryDetails;
