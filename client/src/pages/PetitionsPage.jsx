import axios from 'axios';
import React, { useEffect, useState } from 'react';

function PetitionsPage() {



  const [petitions,setPetitions] = useState([])
  console.log('petitions: ', petitions);


  useEffect(() => {
    const fetchPetitions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/petition");
        setPetitions(response.data.petitions);
      } catch (error) {
        console.error("Error fetching petitions:", error);
      }
    };
  
    fetchPetitions(); 
  }, []);

  const categories = ["All", "Environment","Community", "Transport", "Arts", "Education", "Safety", "Heritage"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPetitions = petitions.filter(petition => {
    const matchesCategory = selectedCategory === "All" || petition.category === selectedCategory;
    const matchesSearch = petition.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         petition.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 mt-[68px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Petitions</h1>
          <p className="text-gray-600">Join others in making a difference in your community</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search petitions..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPetitions.map((petition) => (
            <div key={petition._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">{petition.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{petition.title}</h3>
                <p className="text-gray-600 mb-4">By {petition.name}</p>
                <p className="text-gray-700 mb-4 line-clamp-3">{petition.description}</p>
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
                <div className="flex justify-between">
                  <button className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Sign Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPetitions.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No petitions found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

      
      </div>
    </div>
  );
}

export default PetitionsPage;