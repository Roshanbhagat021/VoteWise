import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TrendingPetitions() {
  const [trendingPetitions, setPetitions] = useState([]);

  useEffect(() => {
    const fetchPetitions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/petition");
        const sortedTopPetitions = response.data.petitions
          .sort((a, b) => b.signatures - a.signatures)
          .slice(0, 3);
        setPetitions(sortedTopPetitions);
      } catch (error) {
        console.error("Error fetching petitions:", error);
      }
    };

    fetchPetitions(); 
  }, []);


  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Trending Petitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPetitions?.length == 0? <h1>Loading Data...</h1>:trendingPetitions.map((petition) => (
              <div key={petition._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">{petition.category}</span>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{petition.title}</h3>
                  <p className="text-gray-600 mb-4">By {petition.author}</p>
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${(petition.signatures / petition.goal) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{petition.signatures.toLocaleString()} signatures</span>
                      <span>Goal: {petition.goal.toLocaleString()}</span>
                    </div>
                  </div>
                  <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Sign Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/petitions" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
              View All Petitions
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingPetitions;
