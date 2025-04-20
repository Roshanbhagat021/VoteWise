import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
const VITE_API_BASEURL = import.meta.env.VITE_API_BASEURL;

function PetitionsPage() {


  const [petitions, setPetitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [signing, setSigning] = useState(null); 
  const { token } = useContext(AuthContext);


  
  useEffect(() => {
    const fetchPetitions = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("http://localhost:8080/petition");
        const response = await axios.get(`${VITE_API_BASEURL}/petition`);
        setPetitions(response.data.petitions);
      } catch (error) {
        console.error("Error fetching petitions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPetitions();
  }, []);

  const categories = ["All", "Environment", "Community", "Transport", "Arts", "Education", "Safety", "Heritage"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPetitions = petitions.filter(petition => {
    const matchesCategory = selectedCategory === "All" || petition.category === selectedCategory;
    const matchesSearch = petition.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      petition.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSignPetition = async (id) => {
    try {
      setSigning(id);
      
      const response = await axios.post(`${VITE_API_BASEURL}/petition/sign/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Signed successfully:", response.data);

      setPetitions(prevPetitions =>
        prevPetitions.map(p =>
          p._id === id
            ? { ...p, signatures: p.signatures + 1 }
            : p
        )
      );

    } catch (error) {
      console.error("Error signing petition:", error.response?.data?.msg || error.message);
      alert(error.response?.data?.msg || "Failed to sign the petition.");
    } finally {
      setSigning(null);
    }
  };

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

        {loading ? (
          <p className="text-center text-gray-500">Loading petitions...</p>
        ) : (
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
                    <button
                      onClick={() => handleSignPetition(petition._id)}
                      disabled={signing === petition._id}
                      className={`py-2 px-4 rounded-md transition-colors duration-300 ${signing === petition._id ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                      {signing === petition._id ? 'Signing...' : 'Sign Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredPetitions.length === 0 && !loading && (
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
