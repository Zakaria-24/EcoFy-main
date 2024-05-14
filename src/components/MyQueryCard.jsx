/* eslint-disable react/prop-types */
import { MdOutlineUpdate } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import axios from "axios";

const MyQueryCard = ({ myQuery, refetch }) => {
  const {
    _id,
    query_title,
    product_img_URl,
    description,
    dateTime,
    name,
    photo,
  } = myQuery;
  // console.log(myQuery);
  // console.log(refetch);

  const handleDelete = async (id) => {
    console.log(id, "delete");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/query/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your query has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className=" bg-sky-100 flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
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
              {dateTime.slice(0, 16)}
            </span>
          </div>
        </div>
        <div>
          <img
            src={product_img_URl}
            alt=""
            className="object-cover w-full mb-4 h-full dark:bg-gray-500"
          />
          <h2 className="mb-1 text-xl font-semibold">{query_title}</h2>
          <p className="text-sm dark:text-gray-600">{description}</p>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="space-x-2 flex items-center">
            {/* details */}
            <Link
              to={`/queryDetails/${myQuery._id}`}
              type="button"
              title="My Query Details"
              // className="flex items-center justify-center"
              aria-label="Bookmark this post"
              className="p-2"
            >
              <TbListDetails />
            </Link>
            {/* update */}
            <Link
              to={`/updateMyQuery/${myQuery._id}`}
              type="button"
              title="Update My Query"
              // className="flex items-center justify-center"
              aria-label="Bookmark this post"
              className="p-2"
            >
              <MdOutlineUpdate />
            </Link>
          </div>
          <div className="flex space-x-2 text-sm dark:text-gray-600">
            <button
              onClick={() => handleDelete(_id)}
              type="button"
              title="Delete My Query"
              // className="flex items-center justify-center"
              aria-label="Bookmark this post"
              className="p-2"
            >
              <AiTwotoneDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueryCard;
