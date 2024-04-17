import { useContext,  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import "aos/dist/aos.css";

const Navbar = () => {


  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
          About
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Contact
        </NavLink>
      </li>
      <li className="mr-2">
        <NavLink
          to="/review"
          style={({ isActive }) => ({
            color: isActive ? "#fff" : "",
            background: isActive ? "#7600dc" : "",
          })}
        >
          Review
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/profile"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#7600dc" : "",
              })}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/updateProfile"
              style={({ isActive }) => ({
                color: isActive ? "#fff" : "",
                background: isActive ? "#7600dc" : "",
              })}
            >
              Update Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="container mx-auto p-2">
      <div  className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
              onClick={toggleMenu}
            >
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
            {menuOpen && (
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
              </ul>
            )}
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-lg md:text-2xl lg:text-3xl font-extrabold  bg-clip-text animate-gradient text-green-400"
          >
            RealResort
          </Link>
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
                <p className="btn btn-accent">Login</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
