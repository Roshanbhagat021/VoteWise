import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-100 to-blue-100 px-4 text-center transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-md transition-transform duration-500 hover:scale-105">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-bold text-gray-800">Page Not Found</h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Oops! The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 hover:bg-blue-700"
      >
        Go Back Home
      </button>
    </div>
  );
}