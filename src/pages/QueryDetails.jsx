import RecommendationFormCard from "../components/RecommendationFormCard";

const QueryDetails = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      {/* details */}
      <div className="flex items-center justify-center font-bold text-2xl mb-4">
        <h1> View Details Recommend</h1>
        <p></p>
      </div>
      <div className="rounded-md shadow-md sm:w-96 dark:bg-gray-50 dark:text-gray-800">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <img
              src="https://source.unsplash.com/50x50/?portrait"
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                leroy_jenkins72
              </h2>
              <span className="inline-block text-xs leading-none dark:text-gray-600">
                Somewhere
              </span>
            </div>
          </div>
          <button title="Open options" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
              <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
              <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
            </svg>
          </button>
        </div>
        <img
          src="https://source.unsplash.com/301x301/?random"
          alt=""
          className="object-cover object-center w-full h-72 dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                type="button"
                title="Like post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                </svg>
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                </svg>
              </button>
            </div>
            <button
              type="button"
              title="Bookmark post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div>
              <span className="text-sm">
                Liked by
                <span className="font-semibold">Mamba UI</span>and
                <span className="font-semibold">86 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
            </p>
            <input
              type="text"
              placeholder="Add a comment..."
              className="w-full py-0.5 dark:bg- border-none rounded text-sm pl-0 dark:text-gray-800"
            />
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
