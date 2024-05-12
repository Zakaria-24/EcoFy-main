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
import MyQueryDetails from "../pages/DetailsMyQuery";
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
        path: "/myQueryDetails",
        element: (
          <PrivateRoute>
            <MyQueryDetails />
          </PrivateRoute>
        ),
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
        path: "/queryDetails",
        element: (
          <PrivateRoute>
            <QueryDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/RecommendationForMe",
        element: <RecommendationForMe />,
      },
      {
        path: "/MyRecommendation",
        element: <MyRecommendation />,
      },
    ],
  },
]);

export default router;
