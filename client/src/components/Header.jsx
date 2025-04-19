import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuth, userName, setIsAuth, setToken, setUserName } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");

    setIsAuth(false);
    setToken("");
    setUserName("");

    navigate("/");
  };

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white fixed w-full top-0 z-50">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="text-2xl text-blue-600 font-bold">📣</div>
          <span className="text-xl font-semibold text-gray-800">
            <Link to="/">VoteWise</Link>
          </span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/petitions"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`
            }
          >
            Petitions
          </NavLink>

       
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-600"
              }`
            }
          >
            Create
          </NavLink>

        </nav>
      </div>

      <div className="hidden md:flex space-x-4">
        {isAuth ? (
          <>
            <span className="px-4 py-2 rounded-md border text-blue-600 border-blue-600">
              {userName}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signin">
              <button className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 rounded-md border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile menu toggle button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-blue-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          onClick={(e) =>
            e.target.classList.contains("ham-menu") ? setMenuOpen(false) : ""
          }
          className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col space-y-4 md:hidden"
        >
          <Link to="/" className="ham-menu text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/petitions"
            className="ham-menu text-gray-600 hover:text-blue-600"
          >
            Petitions
          </Link>
          <Link
            to="/polls"
            className="ham-menu text-gray-600 hover:text-blue-600"
          >
            Polls
          </Link>
          <Link
            to="/create"
            className="ham-menu text-gray-600 hover:text-blue-600"
          >
            Create
          </Link>
          <Link
            to="/about"
            className="ham-menu text-gray-600 hover:text-blue-600"
          >
            About
          </Link>

          {isAuth ? (
            <>
              <span className="px-4 py-2 rounded-full border text-blue-600 border-blue-600 text-center">
                {userName}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="ham-menu" to="/signin">
                <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                  Sign In
                </button>
              </Link>
              <Link className="ham-menu" to="/signup">
                <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
