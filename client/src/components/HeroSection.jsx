import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function HeroSection() {
  return (
    <section className=" mt-8 pt-20 pb-16 text-center px-4 rounded-b-3xl shadow-inner bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          Raise your voice,
          <br /> support what matters.
        </h1>

     

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          <Link to="/create">
            <button className="px-5 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition text-sm sm:text-base">
              ✍️ Start a Petition
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">
              <CountUp end={653465} duration={2.5} separator="," />
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">Signatures Collected</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">
              <CountUp end={3200} duration={2} separator="," />
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">Active Petitions</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">
              <CountUp end={189} duration={2} separator="," />
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">Cities Involved</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">
              <CountUp end={48} duration={2} separator="," />
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mt-1">Success Stories</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
