import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
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
              to="/addQuery"
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-sky-400 dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600"
            >
              Add Query
            </Link>
          </div>
        </div>
      </div>

      {/* <div
        className="hero h-96"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/addQuery" className="btn btn-primary">
              Add Query
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
