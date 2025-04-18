import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between  p-4 shadow-md bg-white fixed w-full top-0 z-50">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="text-2xl text-blue-600 font-bold">📣</div>
          <span className="text-xl font-semibold text-gray-800"><Link to="/">VoteWise</Link></span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="petitions" className="text-gray-600 hover:text-blue-600">Petitions</Link>
          <Link to="polls" className="text-gray-600 hover:text-blue-600">Polls</Link>
          <Link to="create" className="text-gray-600 hover:text-blue-600">Create</Link>
          <Link to="" className="text-gray-600 hover:text-blue-600">About</Link>
        </nav>
      </div>

      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
          <Link to="/signin">Sign In</Link>
        </button>
        <button className="px-4 py-2 rounded-md border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50">
          <Link to="signup">Sign Up</Link>
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={(e) => (setMenuOpen(!menuOpen))}
          className="text-3xl text-blue-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div onClick={(e) => (e.target.classList.contains("ham-menu")?setMenuOpen(!menuOpen):"")} className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col space-y-4 md:hidden">
          <Link to="/" className="ham-menu text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="petitions" className="ham-menu text-gray-600 hover:text-blue-600">Petitions</Link>
          <Link to="polls" className=" ham-menu text-gray-600 hover:text-blue-600">Polls</Link>
          <Link to="create" className="ham-menu text-gray-600 hover:text-blue-600">Create</Link>
          <Link to="about" className="ham-menu text-gray-600 hover:text-blue-600">About</Link>
          <button className=" px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
          <Link className="ham-menu" to="/signin">Sign In</Link>
          </button>
          <button className=" px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50">
          <Link className="ham-menu" to="signup">Sign Up</Link>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;