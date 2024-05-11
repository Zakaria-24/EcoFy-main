import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="p-6 py-12 bg-sky-200 dark:bg-violet-600 dark:text-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              All of <br className="sm:hidden" />
              {""}
              <span>My Query</span>
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Is there any </span>
              <span className="font-bold text-lg">QUERY??</span>

              {/* <div className=" flex items-center">
                
              
              </div> */}
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
    </div>
  );
};

export default Banner;
