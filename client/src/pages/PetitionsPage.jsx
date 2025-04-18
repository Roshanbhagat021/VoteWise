import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function PetitionsPage() {

  // fake data
  const petitions = [
    {
      id: 1,
      title: "Save the Local Park from Commercial Development",
      author: "Green Community",
      signatures: 1245,
      goal: 2000,
      category: "Environment",
      description: "We urge the city council to reject the proposed commercial development of our beloved community park, which serves as a green oasis for families and wildlife alike."
    },
    {
      id: 2,
      title: "Demand Better Public Transportation in Downtown",
      author: "Urban Commuters",
      signatures: 892,
      goal: 1500,
      category: "Transport",
      description: "Our downtown area suffers from inadequate public transportation options. We demand increased bus frequency and extended service hours to serve all residents."
    },
    {
      id: 3,
      title: "Support Local Artists with Municipal Grants",
      author: "Arts Collective",
      signatures: 567,
      goal: 1000,
      category: "Arts",
      description: "Local artists are the soul of our community. We petition for the establishment of municipal grants to support their work and enrich our cultural landscape."
    },
    {
      id: 4,
      title: "Implement Recycling Program in All Schools",
      author: "Eco Students",
      signatures: 432,
      goal: 1000,
      category: "Education",
      description: "We call on the school district to implement comprehensive recycling programs in all schools to teach environmental responsibility to the next generation."
    },
    {
      id: 5,
      title: "Lower Speed Limits in Residential Areas",
      author: "Safe Streets Initiative",
      signatures: 765,
      goal: 1200,
      category: "Safety",
      description: "To protect our children and make our neighborhoods safer, we demand reduced speed limits and additional traffic calming measures in all residential zones."
    },
    {
      id: 6,
      title: "Preserve Historic Downtown Buildings",
      author: "Heritage Society",
      signatures: 321,
      goal: 800,
      category: "Heritage",
      description: "Our historic downtown buildings are at risk of demolition. We petition for their preservation and adaptive reuse to maintain our city's unique character."
    }
  ];

  const categories = ["All", "Environment", "Transport", "Arts", "Education", "Safety", "Heritage"];

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
            <div key={petition.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full mb-2">{petition.category}</span>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{petition.title}</h3>
                <p className="text-gray-600 mb-4">By {petition.author}</p>
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
                  <Link 
                    to={`/petitions/${petition.id}`} 
                    className="py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-300"
                  >
                    View Details
                  </Link>
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