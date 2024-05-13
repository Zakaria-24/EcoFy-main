import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const UpdateMyQuery = () => {
  const navigate = useNavigate();
  const query = useLoaderData();
  const {
    _id,
    product_name,
    brand_name,
    query_title,
    product_img_URl,
    description,
  } = query;
  // console.log(myQuery);
  // console.log(_id, product_name);

  const { user } = useAuth();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const product_name = form.product_name.value;
    const brand_name = form.brand_name.value;
    const query_title = form.query_title.value;
    const product_img_URl = form.product_img_URl.value;
    const description = form.description.value;

    const queryData = {
      product_name,
      brand_name,
      query_title,
      product_img_URl,
      description,
      dateTime: new Date(Date.now()),
      email: user?.email,
      name: user?.displayName,
      photo: user?.photoURL,
      recommendationCount: 0,
    };
    // console.log(queryData);

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/query/${_id}`,
        queryData
      );
      console.log(data);
      toast.success("Query Data Updated Successfully!");
      navigate("/MyQueries");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <section className=" px-6 lg:px-20 py-10  dark:bg-gray-100 dark:text-gray-800">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex-1">
            <img
              src={product_img_URl}
              alt=""
              className="  object-cover w-full h-full rounded-md xl:col-span-3 dark:bg-gray-500"
            />
          </div>
          <section className="flex-1 w-full p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 className="text-lg font-semibold text-gray-700 capitalize ">
              Update Query:
            </h2>

            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                  <label className="text-gray-700 " htmlFor="product_name">
                    Product Name
                  </label>
                  <input
                    id="product_name"
                    name="product_name"
                    type="text"
                    defaultValue={product_name}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="brand_name">
                    Brand Name
                  </label>
                  <input
                    id="brand_name"
                    name="brand_name"
                    type="text"
                    defaultValue={brand_name}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="query_title">
                    Query Title
                  </label>
                  <input
                    id="query_title"
                    name="query_title"
                    type="text"
                    defaultValue={query_title}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="text-gray-700 " htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    id="emailAddress"
                    type="email"
                    name="email"
                    disabled
                    defaultValue={user?.email}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="text-gray-700 " htmlFor="product_img_URl">
                  Product Image-URL
                </label>
                <input
                  id="product_img_URl"
                  name="product_img_URl"
                  type="text"
                  defaultValue={product_img_URl}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label className="text-gray-700 " htmlFor="description">
                  Boycotting Reason Details
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                  name="description"
                  id="description"
                  defaultValue={description}
                />
              </div>

              <div className="flex justify-between mt-6">
                <button className=" w-full px-10 py-4 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                  Update Query
                </button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
};

export default UpdateMyQuery;
