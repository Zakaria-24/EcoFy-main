import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-lg container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="../../public/EcoFy.png" alt="Logo" />
          <span className="font-bold">EcoFy</span>
        </div>
      </div>

      <div className="flex-none">
        <header className=" dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
            <ul className="items-stretch hidden space-x-3 md:flex">
              <Link to="/" 
               
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-2 -mb-1 border-b-2 dark:border-"
                >
                  Home
               
              </Link>
              <li className="flex">
                <Link
                  to="/AllQueries"
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-2 -mb-1 border-b-2 dark:border-"
                >
                  All Queries
                </Link>
              </li>
            </ul>
          </div>
        </header>
        <ul className="menu menu-horizontal">
          {/* <li>
          <Link to="/" rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-">He</Link>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllQueries">All Queries</Link>
          </li> */}

          {!user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 p-1 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="../../public/EcoFy.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/RecommendationForMe" className="justify-between">
                    Recommendation For Me
                  </Link>
                </li>
                <li>
                  <Link to="/MyRecommendation">My Recommendation</Link>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className="bg-gray-200 block text-center"
                  >
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/MyQueries">My Queries</Link>
              </li>
              <li>
                <Link to="/RecommendationForMe" className="justify-between">
                  Recommendation For Me
                </Link>
              </li>
              <li>
                <Link to="/MyRecommendation">My Recommendation</Link>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/login"
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
