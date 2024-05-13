import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-lg container px-4 mx-auto">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <Link to="/">
          <img className="w-auto h-7" src="https://i.ibb.co/KDG6hxK/EcoFy.png" alt="Logo" />
          </Link>
          <Link to="/" className=" text-2xl font-extrabold">EcoFy</Link>
        </div>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal">
        <li className="hover:bg-[#9AD0D3] rounded-lg font-bold"> 
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-[#9AD0D3] rounded-lg mr-2 font-bold">
            <Link to="/AllQueries">All Queries</Link>
          </li>

          {!user && (
            <>
              <li>
                <Link to="/login" className="bg-[#9AD0D3] hover:bg-base-300 block text-center font-semibold">
                  Login
                </Link>
              </li>
            </>
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
              <li className="hover:bg-[#9AD0D3] rounded-lg">
                <Link to="/MyQueries">My Queries</Link>
              </li>

              <li className="hover:bg-[#9AD0D3] rounded-lg">
                <Link to="/MyRecommendation">My Recommendation</Link>
              </li>
              <li className="hover:bg-[#9AD0D3] rounded-lg">
                <Link to="/RecommendationForMe" className="justify-between">
                  Recommendation For Me
                </Link>
              </li>
              <li className="mt-2">
                <NavLink
                  to="/login"
                  onClick={logOut}
                  className="bg-[#9AD0D3] block text-center hover:bg-base-300"
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
