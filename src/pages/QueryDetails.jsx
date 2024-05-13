import { useLoaderData, useNavigate } from "react-router-dom";
import RecommendationFormCard from "../components/RecommendationFormCard";

const QueryDetails = () => {
  const navigate = useNavigate();
  const details = useLoaderData();
  // console.log(details);
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
      <>
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
        <RecommendationFormCard />
      </>

      {/* All Recommendations for that particular query */}
      <>
        <div className="flex items-center justify-center font-bold text-2xl mt-16">
          <h1>Read all Recommend</h1>
          <p></p>
        </div>

        <div className=" mt-10 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg  dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src="https://source.unsplash.com/100x100/?portrait"
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                Leroy Jenkins
              </a>
              <span className="text-xs dark:text-gray-600">4 hours ago</span>
            </div>
          </div>
          {/* <div>
		<img src="https://source.unsplash.com/random/100x100/?5" alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
		<p className="text-sm dark:text-gray-600">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
	</div> */}

          <div>
            <img
              src="https://source.unsplash.com/random/300x300/?1"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                Quisque
              </span>
              <h2 className="text-xl font-semibold tracking-wide">
                Nam maximus purus
              </h2>
            </div>
            <p className="dark:text-gray-800">
              Mauris et lorem at elit tristique dignissim et ullamcorper elit.
              In sed feugiat mi. Etiam ut lacinia dui.
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default QueryDetails;
