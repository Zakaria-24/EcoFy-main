import { BiSolidCommentAdd } from "react-icons/bi";

const AddQuery = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
          <h2 className="text-lg font-semibold text-gray-700 capitalize ">
            Add Query:
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="text-gray-700 " htmlFor="product_name">
                  Product Name
                </label>
                <input
                  id="product_name"
                  name="product_name"
                  type="text"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700"> Current Date and Time</label>

                {/* Date Picker Input Field */}
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
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
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-gray-700 " htmlFor="photoUrl">
                  Image
                </label>
                <input
                  id="photoUrl"
                  name="photoUrl"
                  type="text"
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
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              ></input>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <label className="text-gray-700 " htmlFor="description">
                Boycotting Reason Details
              </label>
              <textarea
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id="description"
              ></textarea>
            </div>

            <div className="flex justify-between mt-6">
              <div className="flex flex-col gap-2 my-6">
                <label className="text-gray-700">
                  <div className="flex items-center justify-end gap-2 border-sky-300 border-2  ">
                    <BiSolidCommentAdd />
                    <span>0</span>
                  </div>
                </label>

                {/* Date Picker Input Field */}
              </div>

              <button className="px-10 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Add Query
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddQuery;
