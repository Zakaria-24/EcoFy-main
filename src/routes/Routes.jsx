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
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`),
      },
      {
        path: "/MyRecommendation",
        element: <MyRecommendation />,
        },
      {
        path: "/RecommendationForMe",
        element: <RecommendationForMe />,
      },
    ],
  },
]);

export default router;
