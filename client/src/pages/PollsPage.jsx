import React from 'react';

function PollsPage() {

  // fake deta
  const polls = [
    {
      id: 1,
      question: "Should the city implement a bike-sharing program?",
      votes: 342,
      options: [
        { text: "Yes", percentage: 68 },
        { text: "No", percentage: 32 }
      ],
      category: "Transport",
      closingDate: "2023-12-15"
    },
    {
      id: 2,
      question: "Which community project should receive funding next year?",
      votes: 215,
      options: [
        { text: "Library Renovation", percentage: 45 },
        { text: "Park Upgrade", percentage: 35 },
        { text: "Community Center", percentage: 20 }
      ],
      category: "Community",
      closingDate: "2023-11-30"
    },
    {
      id: 3,
      question: "Do you support extending school hours to include more extracurricular activities?",
      votes: 178,
      options: [
        { text: "Yes", percentage: 52 },
        { text: "No", percentage: 48 }
      ],
      category: "Education",
      closingDate: "2023-12-10"
    },
    {
      id: 4,
      question: "Should the city ban single-use plastics in all municipal facilities?",
      votes: 298,
      options: [
        { text: "Yes", percentage: 72 },
        { text: "No", percentage: 28 }
      ],
      category: "Environment",
      closingDate: "2023-12-05"
    },
    {
      id: 5,
      question: "Which day should the farmers market operate?",
      votes: 156,
      options: [
        { text: "Saturday", percentage: 55 },
        { text: "Sunday", percentage: 35 },
        { text: "Both days", percentage: 10 }
      ],
      category: "Community",
      closingDate: "2023-11-25"
    },
    {
      id: 6,
      question: "Should the city increase property taxes to fund better public schools?",
      votes: 210,
      options: [
        { text: "Yes", percentage: 42 },
        { text: "No", percentage: 58 }
      ],
      category: "Education",
      closingDate: "2023-12-20"
    }
  ];

  const categories = ["All", "Transport", "Community", "Education", "Environment"];

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredPolls = polls.filter(poll => {
    const matchesCategory = selectedCategory === "All" || poll.category === selectedCategory;
    const matchesSearch = poll.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 mt-[68px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Polls</h1>
          <p className="text-gray-600">Voice your opinion on important community matters</p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search polls..."
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPolls.map((poll) => (
            <div key={poll.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">{poll.category}</span>
                  <span className="text-xs text-gray-500">Closes: {poll.closingDate}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{poll.question}</h3>
                <div className="space-y-3 mb-6">
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
                <p className="text-sm text-gray-500 mb-4">{poll.votes} votes</p>
                <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300">
                  Vote Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPolls.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No polls found</h3>
            <p className="mt-2 text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

     
      </div>
    </div>
  );
}

export default PollsPage;