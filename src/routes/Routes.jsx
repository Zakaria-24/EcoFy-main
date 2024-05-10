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
