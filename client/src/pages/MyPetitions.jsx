import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Contexts/AuthContext";

function MyPetitions() {
  const [petitions, setPetitions] = useState([]);
  const { token } = useContext(AuthContext);

  console.log(petitions);

  const fetchPetitions = async () => {
    try {
      const res = await axios.get("http://localhost:8080/petition/my-petitions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPetitions(res.data.petitions);
    } catch (error) {
      console.error("Failed to fetch petitions", error);
    }
  };

//   const deletePetition = async (id) => {
//     try {
//       const res = await axios.delete(`http://localhost:8080/petition/delete/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(res.data);
//       fetchPetitions();
//     } catch (error) {
//       console.error("Failed to delete petition", error);
//     }
//   };
const deletePetition = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this petition?");
    if (!confirmDelete) return;
  
    try {
      const res = await axios.delete(`http://localhost:8080/petition/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res.data);
      fetchPetitions();
    } catch (error) {
      console.error("Failed to delete petition", error);
    }
  };
  
  useEffect(() => {
    fetchPetitions();
  }, [token]);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-[calc(100vh-56px)]">
      <h2 className="text-3xl font-bold mb-6 text-center">📃 My Petitions</h2>
      {petitions.length === 0 ? (
        <p className="text-center text-gray-500">No petitions found!</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {petitions.map((petition) => (
            <div
              key={petition._id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {petition.title}
                </h3>
                <p className="text-gray-600">{petition.description}</p>
              </div>
              <button
                onClick={() => deletePetition(petition._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                Delete Petition
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPetitions;
