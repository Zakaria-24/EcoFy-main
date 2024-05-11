/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { PiPlusSquareFill } from "react-icons/pi";
import { TbListDetails } from "react-icons/tb";

const AllQueriesCard = ({ query }) => {
  console.log(query);
  // const {
  //   boycottingReasonDetails,
  //   dateTime,
  //   productBrand,
  //   productImageURL,
  //   productName,
  //   queryTitle,
  //   recommendationCount,
  //   user,
  //   _id,
  // } = query;
  // console.log(
  //   boycottingReasonDetails,
  //   dateTime,
  //   productBrand,
  //   productImageURL,
  //   productName,
  //   queryTitle,
  //   recommendationCount,
  //   user,
  //   _id
  // );
  return (
    <div>
      <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
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
            </div>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/301x301/?random"
          alt=""
          className="object-cover object-center w-full h-72 dark:bg-gray-500"
        />
        <div className="p-3">
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
          {/* btn */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className=" flex items-center justify-center">
                <PiPlusSquareFill />
                <span>0</span>
              </div>
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
