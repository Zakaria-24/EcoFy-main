import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

const RecommendationFormCard = () => {
  const detailsOfQuery = useLoaderData();
  console.log(detailsOfQuery.queryDetails);
  const {
    _id,
    name,
    email,
    product_name,
    query_title,
    dateTime,
  } = detailsOfQuery.queryDetails;
  console.log(_id, name, email, product_name, query_title, dateTime);  

  const { user } = useAuth();
  // console.log(user);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      Recommendation_Title,
      Recommended_Name,
      Recommended_Image_URL,
      Recommendation_Reason,
    } = data;
    const recommendationData = {
      Recommendation_Title: Recommendation_Title,
      Recommended_Name: Recommended_Name,
      Recommended_Image_URL: Recommended_Image_URL,
      Recommendation_Reason: Recommendation_Reason,

      product_name,
      query_title,
      queryId: _id,

      dateTime,
      email,
      name,
      recommenderEmail: user?.email,
      recommenderName: user?.displayName,
      recommenderPhoto: user?.photoURL,
    };
    // console.log(recommendationData);

    try {
      const { R_Data } = await axios.post(`${baseUrl}/recommendation`, recommendationData);
      console.log(R_Data);
      toast.success("Recommendation Successful!");
      navigate("/AllQueries");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container px-6 py-10 mx-auto">
      <section
        className="w-full h-full p-6 dark:bg-gray-100 dark:text-gray-900"
        style={{
          backgroundImage: "url(https://i.ibb.co/B6V5xw2/bg.png)",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <h1 className="underline text-2xl font-bold">Your Information:</h1>
              <p className="font-semibold text-lg">{user?.displayName}</p>
              <img 
              className="rounded-lg"
              src={user?.photoURL} alt="" />
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                Recommendation Title
                </label>
                <input
                  id="Recommendation_Title"
                  name="Recommendation_Title"

                  type="text"
                  placeholder="Recommendation Title"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Recommendation_Title", { required: true })}
                  />
                  {errors.Recommendation_Title && (
                    <span className="text-red-400">This field is required</span>
                  )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                Recommended product Name
                </label>
                <input
                  id="Recommended_Name"
                  name="Recommended_Name"
                  type="text"
                  placeholder=" Recommended product Name"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Recommended_Name", { required: true })}
                  />
                  {errors.Recommended_Name && (
                    <span className="text-red-400">This field is required</span>
                  )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                Recommended Product Image URL
                </label>
                <input
                  id="Recommended_Image_URL"
                  name="Recommended_Image_URL"
                  type="text"
                  placeholder="Recommended Product Image URL"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Recommended_Image_URL", { required: true })}
                  />
                  {errors.Recommended_Image_URL && (
                    <span className="text-red-400">This field is required</span>
                  )}
              </div>

              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                Recommendation reason
                </label>
                <textarea
                  id="Recommendation_Reason"
                  name="Recommendation_Reason"
                  type= "text"
                  placeholder="Recommendation reason"
                  className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  {...register("Recommendation_Reason", { required: true })}
                  />
                  {errors.Recommendation_Reason && (
                    <span className="text-red-400">This field is required</span>
                  )}
              </div>
              <div>
                <button
                disabled= {email === user?.email}
                className="disabled:cursor-not-allowed px-4 py-2 rounded-xl text-xl font-bold text-white bg-sky-400 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-600 dark:bg-violet-700 dark:text-white"
                type="submit"
                >
                  Recommend
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default RecommendationFormCard;
