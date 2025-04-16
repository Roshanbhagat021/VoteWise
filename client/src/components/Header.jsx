import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white fixed w-full top-0 z-50">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="text-2xl text-blue-600 font-bold">📣</div>
          <span className="text-xl font-semibold text-gray-800">VoteWise</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Petitions</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Polls</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Create</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
        </nav>
      </div>

      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 rounded-md cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
          Sign In
        </button>
        <button className="px-4 py-2 rounded-md border cursor-pointer border-blue-600 text-blue-600 hover:bg-blue-50">
          Sign Up
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-blue-600 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg w-48 p-4 flex flex-col space-y-4 md:hidden">
          <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Petitions</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Polls</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Create</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">About</a>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50">
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;