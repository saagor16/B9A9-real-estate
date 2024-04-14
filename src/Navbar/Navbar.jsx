import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li className="mr-2">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "#545e6f",
            background: isActive ? "#7600dc" : "#f0f0f0",
          })}
        >
          Home
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#7600dc" : "",
          })}
        >
          About Us
        </NavLink>
      </li>
      {
        user ? <li>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Profile
        </NavLink>
      </li> : ""
      }
      {
        user ? <li>
        <NavLink
          to="/updateProfile"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#7600dc" : "",
          })}
        >
          UpdateProfile
        </NavLink>
      </li> : ""
      }

    </>
  );
  return (
    <div className="navbar bg-base-100  container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a>
          {" "}
          <span className="text-lg md:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient bg-300%">
            PropertyPortal
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mr-4 tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="rounded-full">
                <img alt={user.displayName} src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogOut} className="btn btn-primary">
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/register">
              <p className="btn btn-secondary">Register</p>
            </Link>

            <Link to="/login">
              <p className="btn  btn-accent">Login</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
