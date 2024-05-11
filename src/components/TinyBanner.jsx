import { Link } from "react-router-dom";

const TinyBanner = () => {
  return (
    <div>
      {/* <div className="hero h-96 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl hidden bg-cover bg-center lg:block"
            // className="hidden bg-cover bg-center lg:block lg:w-1/2"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link
              to="/AllQueries"
              className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500"
            >
              Follow All Queries
            </Link>
          </div>
        </div>
      </div> */}

      <div className="p-6 py-12 bg-sky-200 dark:bg-violet-600 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">MAMBA</span>
            </div>
            <Link
              to="/AllQueries"
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-sky-400 dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              Follow All Queries
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TinyBanner;
