/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

const AllQueriesCard = ({ query }) => {
  // console.log(query);
  const {
    product_name,
    brand_name,
    query_title,
    product_img_URl,
    description,
    dateTime,
    name,
    photo,
    recommendationCount,
  } = query;

  return (
    <>
      <div className="rounded-md bg-[#cde4e5]  dark:bg-gray-50 dark:text-gray-800   shadow-2xl  transition border-2 hover:scale-105">
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
          className="object-cover object-center w-full h-48 dark:bg-gray-500"
        />
        <div className="p-0">
          <div className="flex flex-wrap items-center ">
            <div className="card-body">
              <h2 className="card-title text-neutral">
                {query_title}
                <div className="badge badge-accent">{recommendationCount}</div>
              </h2>
              <p>
                <span className="font-semibold text-lg underline">Reaseon:</span> {description}
              </p>
              <div className=" ">
                <div className="btn-outline border-2 rounded-lg mb-1">
                  <span className="font-semibold">Product Name:</span>{" "}
                  {product_name}
                </div>
                <div className="btn-outline border-2 rounded-lg">
                  <span className="font-semibold">Brand Name:</span>{" "}
                  {brand_name}
                </div>
              </div>
            </div>
          </div>
          {/* btn */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3"></div>
            <Link
              // to= "/queryDetails"
              to={`/queryDetails/${query._id}`}
              type="button"
              title="Recommendation: Query Details"
              className="flex items-center justify-center"
            >
              <TbListDetails />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllQueriesCard;
