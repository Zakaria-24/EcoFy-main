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
    <div>
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
            <span className="text-xs dark:text-gray-600">
              {dateTime}
            </span>
          </div>
        </div>
        </div>
        <img
          src={product_img_URl}
          alt=""
          className="object-cover object-center w-full h-full dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="card-body">
              <h2 className="card-title text-neutral">
               {query_title}
                <div className="badge badge-secondary">{recommendationCount}</div>
              </h2>
              <p>{description}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{product_name}</div>
                <div className="badge badge-outline">{brand_name}</div>
              </div>
            </div>
          </div>
          {/* btn */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
             
            </div>
            <Link
              to="/queryDetails"
              type="button"
              title="Recommendation: Query Details"
              className="flex items-center justify-center"
            >
              <TbListDetails />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllQueriesCard;
