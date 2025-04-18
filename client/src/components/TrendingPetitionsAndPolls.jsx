import React from 'react';
import { Link } from 'react-router-dom';

function TrendingPetitionsAndPolls() {
  // Sample data - in a real app this would come from an API
  const trendingPetitions = [
    {
      id: 1,
      title: "Save the Local Park from Commercial Development",
      author: "Green Community",
      signatures: 1245,
      goal: 2000,
      category: "Environment"
    },
    {
      id: 2,
      title: "Demand Better Public Transportation in Downtown",
      author: "Urban Commuters",
      signatures: 892,
      goal: 1500,
      category: "Transport"
    },
    {
      id: 3,
      title: "Support Local Artists with Municipal Grants",
      author: "Arts Collective",
      signatures: 567,
      goal: 1000,
      category: "Arts"
    }
  ];

  const trendingPolls = [
    {
      id: 1,
      question: "Should the city implement a bike-sharing program?",
      votes: 342,
      options: [
        { text: "Yes", percentage: 68 },
        { text: "No", percentage: 32 }
      ]
    },
    {
      id: 2,
      question: "Which community project should receive funding next year?",
      votes: 215,
      options: [
        { text: "Library Renovation", percentage: 45 },
        { text: "Park Upgrade", percentage: 35 },
        { text: "Community Center", percentage: 20 }
      ]
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Trending Petitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPetitions.map((petition) => (
              <div key={petition.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Trending Polls</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trendingPolls.map((poll) => (
              <div key={poll.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{poll.question}</h3>
                  <div className="space-y-3">
                    {poll.options.map((option, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{option.text}</span>
                          <span className="text-sm font-medium text-gray-700">{option.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div 
                            className="bg-blue-600 h-2.5 rounded-full" 
                            style={{ width: `${option.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-3">{poll.votes} votes</p>
                  <button className="mt-4 w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">
                    Vote Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/polls" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
              View All Polls
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingPetitionsAndPolls;