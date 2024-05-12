import { useLoaderData, useNavigate } from "react-router-dom";
import RecommendationFormCard from "../components/RecommendationFormCard";

const QueryDetails = () => {
  const navigate = useNavigate();
  const details = useLoaderData();
  console.log(details);
  const {
    // _id,
    name,
    photo,
    product_img_URl,
    product_name,
    brand_name,
    query_title,
    description,
    recommendationCount,
    dateTime,
  } = details;

  return (
    <div className="container px-10 py-10 mx-auto">
      {/* details */}
      <div className="flex items-center justify-center font-bold text-2xl mb-4">
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
            <div className="flex items-center space-x-3">
             
            </div>
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

      {/* REcommandation form */}
      <div className="flex items-center justify-center font-bold text-2xl mt-16">
        <h1>Recommend for better ONE</h1>
        <p></p>
      </div>
      <RecommendationFormCard />

      {/* All Recommendations for that particular query */}

      <div className="flex items-center justify-center font-bold text-2xl mt-16">
        <h1>Read all Recommend</h1>
        <p></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:px-10 xl:px-12">
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
          <div className="flex justify-between p-4">
            <div className="flex space-x-4">
              <div>
                <img
                  src="https://source.unsplash.com/100x100/?portrait"
                  alt=""
                  className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                />
              </div>
              <div>
                <h4 className="font-bold">Leroy Jenkins</h4>
                <span className="text-xs dark:text-gray-600">2 days ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 dark:text-yellow-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
              </svg>
              <span className="text-xl font-bold">4.5</span>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-600">
            <p>
              Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
              dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
              finibus.
            </p>
            <p>
              Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu
              mauris cursus venenatis. Maecenas gravida urna vitae accumsan
              feugiat. Vestibulum commodo, ante sit urna purus rutrum sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryDetails;
