import { createBrowserRouter } from "react-router-dom";
import Main from "./../layout/Main";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllQueries from "../pages/AllQueries";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import MyQueries from "./../pages/MyQueries";
import RecommendationForMe from "./../pages/RecommendationForMe";
import MyRecommendation from "./../pages/MyRecommendation";
import PrivateRoute from "./PrivateRoute";
import AddQuery from "../pages/AddQuery";
import QueryDetails from "../pages/QueryDetails";
import UpdateMyQuery from "../pages/UpdateMyQuery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AllQueries",
        element: <AllQueries />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/MyQueries",
        element: (
          <PrivateRoute>
            <MyQueries />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateMyQuery/:id",
        element: (
          <PrivateRoute>
            <UpdateMyQuery />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/UpdateQuery/${params.id}`),
      },
      {
        path: "/addQuery",
        element: (
          <PrivateRoute>
            <AddQuery />
          </PrivateRoute>
        ),
      },
      {
        path: "/queryDetails/:id",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`),

        loader: async ({ params }) => {
          const res = await fetch(
            `${import.meta.env.VITE_API_URL}/details/${params.id}`
          );
          const queryDetails = await res.json();

          const rec = await fetch(
            `${import.meta.env.VITE_API_URL}/queryRelatedRecommendaton/${
              params.id
            }`
          );
          const recommendatoin = await rec.json();

          return { queryDetails: queryDetails, recommendatoin: recommendatoin };
        },
      },

      {
        path: "/MyRecommendation",
        element: <MyRecommendation />,
        
        // loader: ({ params }) =>
        //   fetch(`${import.meta.env.VITE_API_URL}/myRecommendations/${params.id}`),
      },
      {
        path: "/RecommendationForMe",
        element: <RecommendationForMe />,
      },
    ],
  },
]);

export default router;
